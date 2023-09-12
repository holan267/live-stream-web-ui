if ((navigator.brave && navigator.brave.isBrave()) || false) {
  alert(
    "Brave browser is not compatible or you can turn off https redirection to use Brave \n\nKhông tương thích với trình duyệt Brave hoặc bạn có thể tắt https redirection để sử dụng Brave"
  );
} else {
  if (window.location.protocol == "https:") {
    console.log(
      "you are accessing us via " +
        "an insecure protocol (HTTP). " +
        "Redirecting you to HTTPS."
    );

    window.location.href = window.location.href.replace("https:", "http:");
  } else if (window.location.protocol == "http:") {
    console.log("you are accessing us via" + " our secure HTTPS protocol.");
  }

  var options = {
    responsive: true,
  };
  var player = videojs("videojs", options);
  player.hlsQualitySelector();
}
