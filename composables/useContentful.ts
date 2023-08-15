export const useContentful = async (query: ContentfulReqBody) => {
    let key = `${useRoute().path}-${query.content_type}`; // unique fetch-key
    return await useFetch(`/api/contentful`, {
      key,
      query,
    });
  };
  