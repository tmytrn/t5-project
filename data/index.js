import { getClient } from "@lib/sanity";
import * as queries from "./queries";

export const getAllDiscs = async () => {
  const data = await getClient().fetch(queries.discQuery);
  return data;
};

export const getAllPeriods = async () => {
  const data = await getClient().fetch(queries.periodQuery);
  return data;
};

export const getPeriodPage = async (period) => {
  const data = await getClient().fetch(queries.periodPageQuery, {
    period: period,
  });
  return data;
};

export const getAboutPage = async () => {
  const data = await getClient().fetch(queries.aboutPageQuery);
  return data;
};

export const getTeamPage = async () => {
  const data = await getClient().fetch(queries.teamPageQuery);
  return data;
};

export { queries };
