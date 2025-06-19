
let startingViews = 39010951;
let finalViews = 39046770;

const videoSource = './Youtube Pics/video.mp4';
document.getElementById('myVideo').src = videoSource;


const videoData = {
    title: 'POV: This song plays at the wrong time #brainrot',
    meta: '3 weeks ago • Public',
    views: {
      start: startingViews,
      end: finalViews,
      lastTimeLabel: ' Last 48 hours'
    },
    engagement: {
      likes: '39M',
      comments: '98',
      subscribers: '+17.3K',
      shares: '1.6K'
    },
    achievement: 'This Short is outperforming your usual content.',
    remixes: '2.9K',
    audience: {
      ages: {
        '18-24Years': 48,
        '25-34Years': 34,
        '35-44Years': 21
      },
      genders: {
        MaleStat: 52,
        FemaleStat: 64,
        UserSpecifiedStat: 4
      },
      locations: {
        IndonesiaStat: 62,
        PhilippinesStat: 49,
        UnitedStatesStat: 12
      }
    }
  };
  
  function updateAllStats(data) {
    // Title & Meta
    const titleEl = document.getElementById('video-title');
    if (titleEl) titleEl.innerHTML = data.title;
  
    const metaEl = document.getElementById('video-meta');
    if (metaEl) metaEl.innerHTML = data.meta;
  
    // Views
    const lastTimeViews = document.getElementById('lastTimeViews');
    if (lastTimeViews) lastTimeViews.innerHTML = data.views.lastTimeLabel;
  
    // Engagement
    setHTML('likesCount', data.engagement.likes);
    setHTML('commentsCount', data.engagement.comments);
    setHTML('subscribersCount', data.engagement.subscribers);
    setHTML('sharesCount', data.engagement.shares);
  
    // Achievement
    const achText = document.getElementById('achievement-text');
    if (achText) achText.textContent = data.achievement;
  
    // Audience - Ages
    for (const id in data.audience.ages) {
      updateAudienceStat(id, id + 'ProgressBar', data.audience.ages[id]);
    }
  
    // Audience - Genders
    for (const id in data.audience.genders) {
      updateAudienceStat(id, id.replace('Stat', 'Bar'), data.audience.genders[id]);
    }
  
    // Audience - Locations
    for (const id in data.audience.locations) {
      updateAudienceStat(id, id.replace('Stat', 'Bar'), data.audience.locations[id]);
    }
  
    // Remixes
    setHTML('remixesCount', data.remixes);
  }
  
  // Utility to set text content safely
  function setHTML(id, value) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }
  
  // Audience stat updater with safety checks
  function updateAudienceStat(textId, barId, value) {
    const textEl = document.getElementById(textId);
    const barEl = document.getElementById(barId);
  
    if (textEl) textEl.innerHTML = value + '%';
    if (barEl) barEl.style.width = value + '%';
  }
  
  // Call the main update function
  updateAllStats(videoData);
  

  document.querySelectorAll('.remix-video').forEach(video => {
    video.src = videoSource;
  });