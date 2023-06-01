export const discQuery = `
*[_type == "disc"]{
...,
}
`;

export const periodQuery = `
*[_type == "period"] | order(period desc){
period,
"activeImage": activeImage.asset->url,
"inactiveImage": inactiveImage.asset->url,
}
`;

export const periodPageQuery = `
*[_type=="period" && period == $period]{
  period,
  past, 
  future,
  about,
  "discs": *[_type == "disc" && references(^._id)]{
    country,
    contributor,
    color->,
    context,
    quote,
    size,
    link,
    translation,
    spanishTranslation,
    alignRight,
  }
  }
  `;

export const aboutPageQuery = `
*[_id=="aboutPage"]{
  heroText,
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  aboutText,
  conceptText,
  "conceptImage": conceptImage.asset->url,
  "conceptImageAlt": conceptImage.alt,
  technicalText,
  "technicalImage": technicalImage.asset->url,
  "technicalImageAlt": technicalImage.alt,
  furtherReadings,
  researchLinks,
  }
  `;

export const teamPageQuery = `
*[_id=="teamPage"]{
  "images": images[]{asset->{url}, alt},
  aboutText, credits,
  additionalCredits
}
  `;

export const metaData = `
*[_type == "siteconfig"]{
  title,
  description,
  previewImage{asset->{url}},
}
`;
