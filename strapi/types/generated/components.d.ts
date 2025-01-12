import type { Schema, Struct } from '@strapi/strapi';

export interface BlogArticleHeadline extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_headlines';
  info: {
    displayName: 'Headline';
  };
  attributes: {
    anchor: Schema.Attribute.String & Schema.Attribute.Required;
    headline: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BlogArticleLandscapeImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_landscape_images';
  info: {
    displayName: 'LandscapeImage';
  };
  attributes: {};
}

export interface BlogArticleLandscapeMedia extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_landscape_medias';
  info: {
    displayName: 'LandscapeMedia';
  };
  attributes: {
    caption: Schema.Attribute.String;
    media: Schema.Attribute.Media<'videos' | 'files' | 'images'> &
      Schema.Attribute.Required;
  };
}

export interface BlogArticleParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface BlogArticleParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_paragraph_with_images';
  info: {
    displayName: 'paragraph-with-image';
  };
  attributes: {};
}

export interface BlogArticleTextWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_article_text_with_images';
  info: {
    displayName: 'TextWithImage';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imageCaption: Schema.Attribute.String;
    isLandscapeOrientation: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    showImageOnRight: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<true>;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface InfoBlockButton extends Struct.ComponentSchema {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['turquoise', 'orange', 'beige']> &
      Schema.Attribute.DefaultTo<'turquoise'>;
    slug: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'Book now'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.landscape-image': BlogArticleLandscapeImage;
      'blog-article.landscape-media': BlogArticleLandscapeMedia;
      'blog-article.paragraph': BlogArticleParagraph;
      'blog-article.paragraph-with-image': BlogArticleParagraphWithImage;
      'blog-article.text-with-image': BlogArticleTextWithImage;
      'info-block.button': InfoBlockButton;
    }
  }
}
