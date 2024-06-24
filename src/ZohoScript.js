export const loadZohoScript = () => {
    window.$zoho = window.$zoho || {};
    window.$zoho.salesiq = window.$zoho.salesiq || {
      widgetcode: "siqb8c7940329e64b48cc6c77c621ca09197d4de7caf2cde787c83290658f421203",
      values: {},
      ready: function() {
        window.$zoho.salesiq.floatbutton.visible('hide');
      }
    };
    const d = document;
    const s = d.createElement("script");
    s.type = "text/javascript";
    s.id = "zsiqscript";
    s.defer = true;
    s.src = "https://salesiq.zoho.com/widget";
    const t = d.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
  };
  