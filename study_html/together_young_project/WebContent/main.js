$(function() {
	// header의 서치창에 입력시 지우기 버튼 띄우기
	$(".search-input").on("input", function() {
		if ($(this).val().trim() !== "") {
			$(".erase-all").show();
		} else {
			$(".erase-all").hide();
		}
	});

	// 지우기 버튼 클릭시 input value 삭제
	$(".erase-all").on("click", function() {
		$(".search-input").val("").focus();
		$(this).hide();
	});
});