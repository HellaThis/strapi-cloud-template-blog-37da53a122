import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media;
  };
}

export interface SharedPersonDetails extends Schema.Component {
  collectionName: 'components_shared_person_details';
  info: {
    displayName: 'PersonDetails';
    icon: 'walk';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternateName: Attribute.String;
    birthDate: Attribute.Date;
    deathDate: Attribute.Date;
    email: Attribute.Email;
    telephone: Attribute.String;
    jobTitle: Attribute.String;
    gender: Attribute.String;
    nationality: Attribute.String;
    address: Attribute.JSON;
    affiliation: Attribute.Relation<
      'shared.person-details',
      'manyToMany',
      'api::organization.organization'
    >;
    image: Attribute.Media;
    sameAs: Attribute.String;
    url: Attribute.String;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Attribute.String;
    body: Attribute.Text;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.media': SharedMedia;
      'shared.person-details': SharedPersonDetails;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
