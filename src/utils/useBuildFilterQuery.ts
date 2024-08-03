export function useFilter(filtersObj: {}) {
  const buildQueryString = (obj, prefix = '') => {
    return Object.keys(obj).map(key => {
      const value = obj[key];
      const newPrefix = prefix ? `${prefix}[${key}]` : key;

      if (typeof value === 'object' && value !== null) {
        return buildQueryString(value, newPrefix);
      } else {
        return `${newPrefix}=${encodeURIComponent(value)}`;
      }
    }).join('&');
  };

  return buildQueryString(filtersObj);
}