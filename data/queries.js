export const discQuery = `
*[_type == "disc"]{
...,
}
`;

export const periodQuery = `
*[_type == "period"] | order(period desc){
period,
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
    translation,
    alignRight,
  }
  }
  `;

export const metaData = `
*[_type == "siteconfig"]{
  title,
  description,
  previewImage{asset->{url}},
}
`;
