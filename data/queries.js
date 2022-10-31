export const discQuery = `
*[_type == "disc"]{
...,
}
`;

export const periodQuery = `
*[_type == "period"] | order(Period asc){
Period
}
`;

export const metaData = `
*[_type == "siteconfig"]{
  title,
  description,
  previewImage{asset->{url}},
}
`;

export const aboutQuery = `
*[_type == "siteconfig"]{
bio,
cv,
}
`;
