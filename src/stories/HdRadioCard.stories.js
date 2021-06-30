import { HdRadioCard, HdIcon } from 'homeday-blocks';
import { apartmentCommercial as apartmentCommercialIcon, houseCastle as houseCastleIcon, rocket as rocketIcon } from 'homeday-assets/L';

export default {
  title: 'Components/Form/HdRadioCard',
  component: HdRadioCard,
  args: {
    name: 'test',
    label: 'Terms and Conditions',
    innerLabel: 'Accept',
  },
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HdRadioCard, HdIcon },
  data: () => ({
    propertyType: null,
    apartmentCommercialIcon,
    houseCastleIcon,
    rocketIcon,
  }),
  template: `
  <div>
  // TODO: Refactor HdRadio to contain a radio button indicator

  <br />
  <br />
  <HdRadioCard name="apartment" value="apartment" v-model="propertyType">
    <template #icon>
      <HdIcon :src="apartmentCommercialIcon" />
    </template>

    Apartment
  </HdRadioCard>


  <HdRadioCard name="castle" value="castle" v-model="propertyType">
    <template #icon>
      <HdIcon :src="houseCastleIcon" />
    </template>

    Castle
  </HdRadioCard>


  <HdRadioCard name="space" value="space" v-model="propertyType">
    <template #icon>
      <HdIcon :src="rocketIcon" />
    </template>

    Space
  </HdRadioCard>

  <br />
  <br />

  <pre>{{ propertyType }}</pre>
  </div>
  `,
});
