---
layout: layouts/article.njk
title: "Let's build a video calling app! - Part One"
description: >
  This article shows the concepts and process behind building a video calling
  app using Web technologies
categories:
  - javascript
  - web-development
  - web-api
tags: article
date: 2022-10-06
published: true
---

## Introduction

In the past two years or so we've been kind of forced into using video calling apps as we transitioned into work-from-home setups. Services like Google Meet and Zoom, among others, have been instrumental in easing this transition, allowing us to continue performing our work, attending our classes, and generally connecting with other people.

In this first article of a two-part post, we're going to take a look at how we can build a basic video calling app using Web technologies including WebRTC. In the second part, we will integrate Firebase into the app to make it support multiple calls/meetings with multiple participants.

This article will not be focusing on "building the next Zoom app" (although I won't stop you from doing so!) but instead on exploring and experimenting with the fundamental concepts of how video calling apps work in general, so we can build whatever we want on top of it.

## Concepts

Video calling apps use WebRTC under the hood for peer-to-peer communication of streaming data between browsers (also known as **peers**). These apps need to do several things:

1. Get streaming audio and video data
1. Determine network information, such as IP addresses and ports to use
1. Determine information about media capabilities, such as resolutions and available media codecs
1. Coordinate communications to initiate or close connections, and to exchange network and media capabilities information
1. Stream audio and video data

### MediaStream API

For #1 on our list, we can use the [`MediaStream API`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) in order to get the audio and video data that we can stream to our peers. We can obtain a media stream in different ways:

- [`navigator.mediaDevices.getUserMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) to get a media stream from media input devices such as the user's camera and microphone
- [`navigator.mediaDevices.getDisplayMedia()`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) to get a media stream from a display device, useful for a screen-sharing functionality
- [`canvasElement.captureStream()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream) to get a media stream of an HTML canvas element

A `MediaStream` object represents a stream of media content, and can contain multiple "tracks". For example, we can have a media stream that contains a video track from the camera and a separate video track from the microphone.

Additionally, we can obtain media streams with certain constraints, such as if it should only contain audio or video or both, what video resolution to get, which camera device to use (front or rear camera, or a specific device), etc. We won't get into all of these options in this post, but all of them are described in the linked documentation.

As an example for this article, let's get a media stream containing video and audio tracks:

```js
const mediaStream = await navigator.mediaDevices.getUserMedia({
  video: true,
  audio: true,
});
```

### RTCPeerConnection API

The primary way for using WebRTC is through the [`RTCPeerConnection API`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection), which represents a connection between two peers. Let's say you want to call your friend. On your end you will need to create a new `RTCPeerConnection` object, and you are considered the **local peer** while your friend is the **remote peer** (conversely, from your friend's end they will also create a new `RTCPeerConnection` object where they are the local peer and you are the remote peer).

```js
const peerConnection = new RTCPeerConnection();
```

In order to stream our media stream to the other peer once our peer connection is established (#5 on our list), we need to add all of its tracks into the peer connection:

```js
mediaStream.getTracks().forEach((track) => {
  peerConnection.addTrack(track, mediaStream);
});
```

### Interactive Connectivity Establishment (ICE)

Next, for #2 on our list, each peer needs to determine how the other peer can connect to it. A technique called **Interactive Connectivity Establishment** or **ICE** is used to negotiate the best way to connect the peers.

Initially, ICE will try to connect peers directly through UDP to achieve the lowest possible latency. If UDP fails, ICE will try TCP. In both cases, a peer's public IP address and port needs to be determined, which is the task of a **STUN** (**Session Traversal Utilities for NAT**) server. A peer will basically ask a STUN server what its public IP address and port are, and the STUN server will respond with the the IP address and port that it sees when the peer connected to it.

When direct connection is not possible, for example because of NAT traversals and firewalls, ICE will try to use an intermediary **TURN (Traversal Using Relay NAT)** server to relay streaming data. This process of determining IP addresses and ports is usually referred to as "**finding candidates**", and each viable option that can be used to establish a peer-to-peer connection is called an "**ICE candidate**".

![WebRTC finding ICE candidates](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/9ECRhjzepzfBJ9FdsKpX.png?auto=format&w=1600)

<small style="display: block; text-align: center"><i>Image from https://web.dev/webrtc-basics: Get started with WebRTC</i></small>

Now that's a lot of terms and acronyms and servers to remember right now, but thankfully in our code it's as simple as passing additional options to our `RTCPeerConnection` object, and the WebRTC API will take care of all the complexities of finding ICE candidates. Let's create an `RTCPeerConnection` that uses one of Google's free STUN servers:

```js
const peerConnection = new RTCPeerConnection({
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302'],
    },
  ],
});
```

### Session Description Protocol (SDP)

Earlier we added our media stream to the peer connection, now we can do #3 on our list and determine the media capabilities that our browser supports. This information (together with the network information) are described in a format called the **Session Description Protocol (SDP)**.

Here's an example of what an SDP for our peer might look like. In here, we can see details about what media types we are going to stream, available ICE candidates, and supported media codecs.

```js
v=0
o=- 6273550205898152643 4 IN IP4 127.0.0.1
s=-
t=0 0
a=group:BUNDLE 2
a=extmap-allow-mixed
a=msid-semantic: WMS i5NpLCJMg7hiYh1kG5YyR6EIvxcfO8QgZ3OA
m=video 60159 UDP/TLS/RTP/SAVPF 96 97 102 122 127 121 125 107 108 109 124 120 39 40 45 46 98 99 100 101 123 119 114 115 116
c=IN IP4 49.145.37.142
a=rtcp:9 IN IP4 0.0.0.0
a=candidate:4077567720 1 udp 2122260223 192.168.1.10 65452 typ host generation 0 network-id 1 network-cost 10
a=candidate:85641020 1 udp 1686052607 49.145.37.142 60159 typ srflx raddr 192.168.1.10 rport 65452 generation 0 network-id 1 network-cost 10
a=candidate:3179889176 1 tcp 1518280447 192.168.1.10 9 typ host tcptype active generation 0 network-id 1 network-cost 10
a=ice-ufrag:PUyC
a=ice-pwd:eJeVV3MKP5+MDfPYAA6WUcKV
a=rtpmap:96 VP8/90000
a=rtpmap:108 H264/90000
```

Note that I had to remove a lot of lines from the actual SDP to keep it concise for illustration purposes, but a real SDP contains so much more information than this. Thankfully we don't need to deal directly with SDP, as the WebRTC API already handles this for us.

So now we're probably wondering, how do we obtain an SDP, and how do we share it to the other peer?

### Signaling

What brings all of these together is the process called **signaling**. This is how one peer communicates its intent to call the other peer, and how both peers exchange their SDP containing their network and media information. This is also the part of our video calling app where we write the most code for, since signaling methods and protocols are not specified by WebRTC.

To implement a signaling mechanism (#4 on our list), we can choose any two-way communication channel. This could be implemented using WebSockets, or a combination of Fetch API and Server-Sent Events. This can also be done using Firebase Cloud Firestore as we will see in the second part of this post. For this article, we'll keep it simple and use the `[BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API)` so we can let two local browser tabs call each other. First let's create our channel for signaling:

```js
const signaling = new BroadcastChannel('signaling');
```

Now let's say you want to initiate a call to your friend. The flow is going to be as follows:

1. You create what we call an **offer** (which is simply the SDP describing your browser's capabilities and ICE candidates) and set it as the local peer in your `RTCPeerConnection` object.

   ```js
   // YOU
   const offer = await peerConnection.createOffer();
   await peerConnection.setLocalDescription(offer);
   // to be continued in the next step...
   ```

1. You then send your offer to your friend through the signaling mechanism.

   ```js
   // YOU
   signaling.postMessage({
     type: 'offer',
     payload: offer.toJSON(),
   });
   ```

1. Your friend then receives your offer through the signaling mechanism.

   ```js
   // YOUR FRIEND
   signaling.addEventListener('message', async (event) => {
     const { type, payload } = event.data;
     if (type === 'offer') {
       // to be continued in the next step...
     }
   });
   ```

1. Your friend then creates their own `RTCPeerConnection` object and sets your offer as their remote peer.

   ```js
   // YOUR FRIEND
   const peerConnection = new RTCPeerConnection();
   await peerConnection.setRemoteDescription(payload); // payload contains your offer
   // to be continued in the next step...
   ```

1. Your friend then creates what we call an **answer** (which again is simply the SDP describing their browser's capabilities and ICE candidates) and sets it as the local peer in their `RTCPeerConnection` object.

   ```js
   // YOUR FRIEND
   const answer = await peerConnection.createAnwer();
   await peerConnection.setLocalDescription(answer);
   // to be continued in the next step...
   ```

1. Your friend then sends their answer to you through the signaling mechanism.

   ```js
   // YOUR FRIEND
   signaling.postMessage({
     type: 'answer',
     payload: answer.toJSON(),
   });
   ```

1. Finally, you then receive your friend's answer through the signaling mechanism and set it as the remote peer in your `RTCPeerConnection` object.

   ```js
   // YOU
   signaling.addEventListener('message', async (event) => {
     const { type, payload } = event.data;
     if (type === 'answer') {
       await peerConnection.setRemoteDescription(payload); // payload is your friend's answer
     }
   });
   ```

And just like that, the peer-to-peer connection between you and your friend is now established!

### Events

Just a couple more things to take care of to complete our video calling app, and both have to do with events that get sent to the `RTCPeerConnection` object.

First is the `icecandidate` event, which gets sent when new ICE candidates are identified and added to the local peer, which usually happens when we call the `peerConnection.setLocalDescription` method. When we receive such events, we need to send it to the remote peer through the signaling channel, so that the remote peer can add it to its set of remote candidates.

```js
// YOU
peerConnection.addEventListener('icecandiate', (event) => {
  signaling.postMessage({
    type: 'candidate',
    payload: event.candidate.toJSON(),
  });
});

// YOUR FRIEND
signaling.addEventListener('message', async (event) => {
  const { type, payload } = event.data;
  if (type === 'candidate') {
    await peerConnection.addIceCandidate(payload); // payload is your ice candidate
  }
});
```

Second is the `track` event, which lets us know when a media stream from the remote peer arrives to us through the established peer connection. When we receive such events, we need to display the media stream in the page so we can see the peer we're on a call with.

```js
peerConnection.addEventListener('track', (event) => {
  displayMediaStream(event.streams[0]);
});
```

## Implementation

At this point we've actually already written most of the code that we need for our video calling app. All that's left to do is to just put them all together so we see the overall code and where each code snippet above falls into. To spare us from a very long code snippet in this post, please allow me to [link to the file in the GitHub repository](https://github.com/arnellebalane/video-conference-app/blob/webrtc/index.js) containing the complete code.

One thing that made it challenging to understand the complete flow in the beginning was the fact that we use the same JavaScript file in the caller and callee peers, which means that file contains the code for handling the signaling and event handling for both peers (sometimes if I read the file it looks like a peer is trying to connect to itself). For me what helped make it less confusing is to keep in mind in which peer (the caller or the callee, or both) a code snippet is meant to run for.

## Conclusion

Congratulations, we just built a very simple video calling app! At this point it is very minimal and has several limitations. One limitation is that since we are using the BroadcastChannel API for our signaling mechanism, it means that only two browser tabs on our local computers can call each other for now. Our video calling app also currently doesn't support having multiple participants within the same video call. We will address all of these limitations in the next article where we will change our signaling mechanism to use Firebase Cloud Firestore.

In the meantime, thank you for reading this article. If you have any feedback, comments, thoughts, etc. please let me know!
