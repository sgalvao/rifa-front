export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

export const pageview = () => {
  window.fbq("track", "PageView");
};

export const viewContent = () => {
  window.fbq("track", "ViewContent");
};

export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
