
let startingViews = 82695182;
let finalViews = 82698053;

let secondaryUp = 82699254;

let thirdUp = 82699254;

const videoSource = 'Youtube Pics/video.mp4';
const partOfTheVideoPercent = 90;

const videoData = {
    title: 'Tung Tung Tung Sahur Does the Sulu Trend',
    meta: '2 months ago • Public',
    views: {
      start: startingViews,
      end: finalViews,
      lastTimeLabel: ' Last 48 hours'
    },
    engagement: {
      likes: '776K',
      comments: '12.9K',
      subscribers: '+22.3K',
      shares: '11.2K'
    },
    achievement: 'This Short is your most viewed short, Wow!',
    remixes: '3.4K',
    audience: {
      ages: {
        '18-24Years': 66,
        '25-34Years': 45,
        '35-44Years': 34
      },
      genders: {
        MaleStat: 66,
        FemaleStat: 43,
        UserSpecifiedStat: 2
      },
      locations: {
        IndonesiaStat: 78,
        PhilippinesStat: 53,
        UnitedStatesStat: 34
      }
    }
  };

  
  //----------------------------------------------------------------------

let firstAge =  '66%';
let secondAge =  '45%';
let thirdAge = '34%';

let maleStat = '69%';
let femaleStat = '40%';
let userSpecified = '2%';

let location1 = 'Indonesia';
let location2 = 'Brazil';
let location3 = 'United States';

let location1Fill = '78%';
let location2Fill = '56%';
let location3Fill = '33%';


  // Clear age group text and progress bars
document.getElementById('18-24Years').innerHTML = firstAge;
document.getElementById('age1ProgressBar').style.width = firstAge; // used twice below!

document.getElementById('25-34Years').innerHTML = secondAge;
document.getElementById('age2ProgressBar').style.width = secondAge;

document.getElementById('35-44Years').innerHTML = thirdAge;
document.getElementById('age3ProgressBar').style.width = thirdAge; // Duplicated ID — use unique ones!

// Clear gender stats
document.getElementById('MaleStat').innerHTML = maleStat;
document.getElementById('malePercentageFill').style.width = maleStat;

document.getElementById('FemaleStat').innerHTML = femaleStat;
document.getElementById('femalePercentageFill').style.width = femaleStat;

document.getElementById('UserSpecifiedStat').innerHTML = userSpecified;
document.getElementById('userSpecifiedPercentageFill').style.width = userSpecified;
;

// Clear location stats
document.getElementById('location1').innerHTML = location1;
document.getElementById('location1PercentageText').innerHTML = location1Fill; // ID reused 3 times!
document.getElementById('location1Fill').style.width = location1Fill;

document.getElementById('location2').innerHTML = location2;
// location3PercentageText again
document.getElementById('location2PercentageText').innerHTML = location2Fill;
document.getElementById('location2Fill').style.width = location2Fill;

document.getElementById('location3').innerHTML = location3;
// location3PercentageText again
document.getElementById('location3PercentageText').innerHTML = location3Fill;
document.getElementById('location3Fill').style.width = location3Fill;


//------------------------------------------------------------------------------------------------------------------------

document.getElementById('myVideo').src = videoSource;

const video = document.getElementById('myVideo');
const percent = partOfTheVideoPercent; // for example

video.onloadedmetadata = function () {

  video.currentTime = (percent / 100) * video.duration;
};

const videos = document.querySelectorAll('.remix-video');

videos.forEach(video => {
  video.onloadedmetadata = function () {
    video.currentTime = (percent / 100) * video.duration;
  };

  video.src = 'Youtube Pics/video.mp4'; // Set the source here
});


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


let counter = 0;
const lastViews = document.getElementById('lastViews');


function triggerRefresh() {
  // Keep the pull state briefly
  setTimeout(() => {
    pullRefreshContainer.style.transform = 'translateX(-50%) translateY(-40px)';
    refreshIcon.classList.add('spinning');
  
    setTimeout(() => {
      contentWrapper.style.opacity = '0';
      loadingOverlay.style.display = 'flex';
  
      setTimeout(async () => {
        loadingOverlay.style.display = 'none';
        contentWrapper.style.opacity = '1';

        
        if(counter === 0){
           animateSlotCounter(startingViews, finalViews);
           counter++;
        } else if(counter === 1){
           animateSlotCounter(finalViews, secondaryUp);
          const difference = secondaryUp - startingViews;
          lastViews.textContent = '+' + difference.toLocaleString();
          counter++;
        } else if(counter === 2){
           animateSlotCounter(secondaryUp, thirdUp);
          const difference =  thirdUp - startingViews;
          lastViews.textContent = '+' + difference.toLocaleString();
        }
  
        reAnimation();
        resetPullToRefresh();
      }, 1000);
    }, 300);
  }, 200);
  

}


