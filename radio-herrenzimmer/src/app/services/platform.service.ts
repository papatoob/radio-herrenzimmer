import { Injectable } from '@angular/core';
import { Platform } from '../app.component';

@Injectable()
export class PlatformService {
  
  getPlatforms(): Platform[] {
    return [
      {
        url: 'http://radio-herrenzimmer.de/rss',
        title: 'Subscribe to RSS feed',
        icon: 'rss.png',
        alternateIconText: 'RSS'
      },
      {
        url: 'https://twitter.com/onkeltoob',
        title: 'Twitter',
        icon: 'twitter.png',
        alternateIconText: 'Twitter'
      },
      {
        url: 'https://soundcloud.com/onkeltoob',
        title: 'Soundcloud',
        icon: 'soundcloud.png',
        alternateIconText: 'Soundcloud'
      },
      {
        url: 'https://mixcloud.com/onkeltoob',
        title: 'Mixcloud',
        icon: 'mixcloud.png',
        alternateIconText: 'Mixcloud'
      },
      {
        url: 'https://hearthis.at/onkeltoob',
        title: 'hearthis.at',
        icon: 'hearthis.png',
        alternateIconText: 'hearthis.at'
      }
    ];
  }
}
