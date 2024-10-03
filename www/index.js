import { HTML } from './libs/frontend/index.js'
import { LinkComponent } from './components/link.component.js'
import { TextComponent } from './components/text.component.js'

export class Page extends HTML {
  onCreate() {
    super.onCreate()
    this.append(new LinkComponent({ href: '/camera/', text: 'Camera' }))
    this.append(new LinkComponent({ href: '/files/', text: 'Files' }))
  }

  appendCordovaText() {
    this.append(new TextComponent('Running cordova-' + cordova.platformId + '@' + cordova.version))
  }
}
