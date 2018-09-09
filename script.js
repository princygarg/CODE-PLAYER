		function updateOutput() {
			$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#csspanel").val() + "</style></head><body>" + $("#htmlpanel").val() + "</body></html>");
			document.getElementById("outputpanel").contentWindow.eval($("#javascriptpanel").val());
		}

		$(".toggle").hover(function(){
			$(this).addClass("highlight");
		}, function(){
			$(this).removeClass("highlight");
		});

		$(".toggle").click(function(){
			$(this).toggleClass("active");
			$(this).removeClass("highlight");

			var panelID = $(this).attr("id") + "panel";
			$("#" + panelID).toggleClass("hidden");
			var noOfActivePanels = 4 - $('.hidden').length;
			$(".panel").width(($(window).width() / noOfActivePanels) - 2);

		});

		$(".panel").height($(window).height() - $("#top").height() - 16);
		$(".panel").width(($(window).width() / 2) - 2);

		updateOutput();
		$("textarea").on('change keyup paste', function() {
			updateOutput();
		});