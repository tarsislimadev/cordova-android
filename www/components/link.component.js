import { HTML } from '../libs/frontend/index.js'

export class LinkComponent extends HTML {
  getName() {
    return 'link'
  }

  getElementTagName() {
    return 'a'
  }
}
