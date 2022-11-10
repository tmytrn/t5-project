export const discQuery = `
*[_type == "disc"]{
...,
}
`;

export const periodQuery = `
*[_type == "period"] | order(name desc){
name,
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
