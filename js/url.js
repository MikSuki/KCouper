// selectedItem: Array<String>
// toSharedUrl()
// parseUrl()

const Url = {
  toSharedUrl: () => {
    const buttons = $("#buttons").find("*");
    const selectedTags = [];

    for (const button of buttons) {
      button.className.includes("active")
        ? selectedTags.push(button.textContent)
        : () => {};
    }

    const baseUrl = window.location.hostname + window.location.pathname;
    const queries = selectedTags.reduce(
      (queries, tag) => queries + "?" + encodeURIComponent(tag),
      ""
    );
    const sharedUrl = baseUrl + queries;
    navigator.clipboard.writeText(sharedUrl);
    console.log(sharedUrl)

    return sharedUrl;
  },
  parseUrl: () => {
    const href = window.location.href;
    var match = href.match(/(?:\?)(.*)/);
    var resultArray = [];
    if (match && match.length > 1) {
      resultArray = match[1].split("?");
    }

    const decodes = resultArray.map((tag) => decodeURIComponent(tag));
    console.log(decodes);

    console.log(decodeURIComponent(href));
    decodes.forEach((tag) => {
      console.log(tag);
      console.log($(tag));
      $(tag).click();
      $("button")
        .filter(function () {
          return $(this).text() === tag;
        })
        .click();
    });
  },
};
