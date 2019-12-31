#!/bin/bash

# Inter
glyphhanger --formats=woff2 --subset=static/fonts/Inter/Inter-variable-upright.woff2 --US_ASCII
glyphhanger --formats=woff2 --subset=static/fonts/Inter/Inter-variable-italic.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-900-normal.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-900-italic.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-700-normal.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-700-italic.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-400-normal.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-400-italic.woff2 --US_ASCII
glyphhanger --formats=woff,woff2 --subset=static/fonts/Inter/Inter-300-normal.woff2 --US_ASCII

# Roboto Mono
glyphhanger --formats=ttf --subset=static/fonts/RobotoMono/RobotoMono-Thin.ttf --US_ASCII
glyphhanger --formats=ttf --subset=static/fonts/RobotoMono/RobotoMono-Light.ttf --US_ASCII
glyphhanger --formats=ttf --subset=static/fonts/RobotoMono/RobotoMono-Regular.ttf --US_ASCII
glyphhanger --formats=ttf --subset=static/fonts/RobotoMono/RobotoMono-Medium.ttf --US_ASCII
glyphhanger --formats=ttf --subset=static/fonts/RobotoMono/RobotoMono-Bold.ttf --US_ASCII
