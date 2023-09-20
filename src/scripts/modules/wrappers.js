const videos = document.querySelectorAll('iframe');

if(videos) {
  videos.forEach(video => {
    wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'video-wrapper');

    video.parentNode.insertBefore(wrapper, video);
    wrapper.appendChild(video);
  });
}

const tables = document.querySelectorAll('table');

if(tables) {
  tables.forEach(table => {
    wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'lw-table-wrapper');

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}
