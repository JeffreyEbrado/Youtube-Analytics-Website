
let startingViews = 16108926;
let finalViews = 16289518;

const videoData = {
    title: 'Top 5 Grow a garden <br>moments 😂',
    meta: '3 weeks ago • Public',
    views: {
      start: startingViews,
      end: finalViews,
      lastTimeLabel: ' Last 48 hours'
    },
    engagement: {
      likes: '16.2M',
      comments: '3.8K',
      subscribers: '+12.1K',
      shares: '2.9K'
    },
    achievement: 'This is your most viewed Short. Wow!',
    remixes: '2.9K',
    audience: {
      ages: {
        '18-24Years': 26,
        '25-34Years': 31,
        '35-44Years': 22
      },
      genders: {
        MaleStat: 66,
        FemaleStat: 36,
        UserSpecifiedStat: 0
      },
      locations: {
        IndonesiaStat: 58,
        PhilippinesStat: 39,
        UnitedStatesStat: 17
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
  