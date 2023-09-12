if (
  window.location.protocol == "http:" ||
  window.location.protocol == "file:"
) {
  var options = {
    responsive: true,
  };
  var player = videojs("videojs", options);
  player.hlsQualitySelector();
} else if ((navigator.brave && navigator.brave.isBrave()) || false) {
  alert(
    "Brave browser is not compatible or you can turn off https redirection to use Brave \n\nKhông tương thích với trình duyệt Brave hoặc bạn có thể tắt https redirection để sử dụng Brave"
  );
} else if (window.location.protocol == "https:") {
  window.location.href = window.location.href.replace("https:", "http:");
}
