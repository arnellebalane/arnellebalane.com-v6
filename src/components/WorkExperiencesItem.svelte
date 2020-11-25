<script>
  import dayjs from 'dayjs';

  export let experience;

  const startDate = dayjs(experience.startDate).format('MMMM YYYY');
  const endDate = experience.endDate ? dayjs(experience.endDate).format('MMMM YYYY') : 'Present';
</script>

<div class="flex flex-col px-6 py-5 pb-3 bg-gray-100 rounded">
  <h1 class="text-xl font-black">{experience.position}, <span class="font-normal">{experience.company}</span></h1>
  <p class="mb-6 font-mono text-sm text-gray-700">{startDate} - {endDate}</p>

  <ul class="list-disc list-inside">
    {#each experience.description as description}
      <li class="mb-2 text-base">{description}</li>
    {/each}
  </ul>
</div>
