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
    credits,
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
  landAcknowledgement,
  "gallery": gallery[].asset->url,
  }
  `;

export const teamPageQuery = `
*[_id=="teamPage"]{
  "heroImage": heroImage.asset->url,
  "heroImageAlt": heroImage.alt,
  aboutText, credits,
  additionalCredits,
  "gallery": gallery[].asset->url,
}
  `;

export const metaData = `
*[_type == "siteconfig"]{
  title,
  description,
  previewImage{asset->{url}},
}
`;
