
import { withKnobs, object } from '@storybook/addon-knobs'
import JehMaker from '../src/components/JehMaker'
import { TauxObject } from '../src/types.ts'
import StoryRouter from 'storybook-vue-router'

export default {
  title: 'JehMaker',
  decorators: [withKnobs, StoryRouter()]
}

const defaultValueTaux = new TauxObject(39.04, 0.30116, 0.042, 0.1605, 0)

export const jehmaker = () => ({
  components: { JehMaker },
  props: {
    t: {
      default: object('taux', defaultValueTaux)
    }
  },
  template: ' <JehMaker :taux="t"/>'
})
