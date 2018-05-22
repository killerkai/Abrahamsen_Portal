
function checkConnection(Callback)
{
    var _NetworkState = navigator.connection.type;
    var _States = {};
    _States[Connection.UNKNOWN] = "0"; //'Unknown connection'
    _States[Connection.ETHERNET] = "1"; //'Ethernet connection'
    _States[Connection.WIFI] = "2"; //'WiFi connection'
    _States[Connection.CELL_2G] = "3"; //'Cell 2G connection'
    _States[Connection.CELL_3G] = "4"; //'Cell 3G connection'
    _States[Connection.CELL_4G] = "5"; //'Cell 4G connection'
    _States[Connection.CELL] = "6"; //'Cell generic connection'
    _States[Connection.NONE] = "7"; //'No network connection'
    if (_States[_NetworkState] == "2" || _States[_NetworkState] == "3" || _States[_NetworkState] == "4" || _States[_NetworkState] == "5" || _States[_NetworkState] == "6")
    {
        Callback(200);
    }
    else
    {
        Callback(400);
    }
}

function createErrorLog(SelectedObject)
{
    $.ajaxSetup({ cache: false });
    $.ajax(
    {
        url: ServerPath + "/api/errorlog/errorlog",
        type: "POST",
        dataType: "json",
        data: JSON.stringify(SelectedObject),
        contentType: "application/json; charset=utf-8",
        timeout: 15000
    });
}

function adjustStyle()
{
    var _CurrentCSSFile = $("#size-stylesheet");
    var _CurrentHost = "http://" + location.host

    if (StyleMode == true)
    {
        if ($("#div-window-size").length == 0)
        {
            $("body").append("<div id=\"div-window-size\" style=\"position: fixed; z-index: 499999; top: 0; left: 0; width: 100%; height: 20px; text-align: center;\"></div>");
        }
    }
    var _WindowWidth = parseInt($(window).width());
    if (_WindowWidth >= 1200)
    {
        if (_CurrentCSSFile[0].href != undefined && _CurrentCSSFile[0].href != "")
        {
            if (_CurrentCSSFile[0].href != _CurrentHost + "/www/lib/css/lg.css")
            {
                $("#size-stylesheet").attr("href", "lib/css/lg.css");
            }
        }
        else
        {
            $("#size-stylesheet").attr("href", "lib/css/lg.css");
        }
        $("#div-window-size").css({ "background-color": "#FF0000" }).text("lg.css");
    }
    else if (_WindowWidth >= 992 && _WindowWidth < 1200)
    {
        if (_CurrentCSSFile[0].href != undefined && _CurrentCSSFile[0].href != "")
        {
            if (_CurrentCSSFile[0].href != _CurrentHost + "/www/lib/css/md.css")
            {
                $("#size-stylesheet").attr("href", "lib/css/md.css");
            }
        }
        else
        {
            $("#size-stylesheet").attr("href", "lib/css/md.css");
        }
        $("#div-window-size").css({ "background-color": "#428bca" }).text("md.css");
    }
    else if (_WindowWidth >= 768 && _WindowWidth < 991)
    {
        if (_CurrentCSSFile[0].href != undefined && _CurrentCSSFile[0].href != "")
        {
            if (_CurrentCSSFile[0].href != _CurrentHost + "/www/lib/css/sm.css")
            {
                $("#size-stylesheet").attr("href", "lib/css/sm.css");
            }
        }
        else
        {
            $("#size-stylesheet").attr("href", "lib/css/sm.css");
        }
        $("#div-window-size").css({ "background-color": "#f0ad4e" }).text("sm.css");
    }
    else
    {
        if (_CurrentCSSFile[0].href != undefined && _CurrentCSSFile[0].href != "")
        {
            if (_CurrentCSSFile[0].href != _CurrentHost + "/www/lib/css/xs.css")
            {
                $("#size-stylesheet").attr("href", "lib/css/xs.css");
            }
        }
        else
        {
            $("#size-stylesheet").attr("href", "lib/css/xs.css");
        }
        $("#div-window-size").css({ "background-color": "#5cb85c" }).text("xs.css");
    }
}

function setCSSInlineStyle(_SelectedArea)
{
    var _WindowWidth = parseInt($(window).width());
    if (_WindowWidth >= 1200)
    {
        _WindowWidth = "lg";
    }
    else if (_WindowWidth >= 992 && _WindowWidth < 1200)
    {
        _WindowWidth = "md";
    }
    else if (_WindowWidth >= 768 && _WindowWidth < 991)
    {
        _WindowWidth = "sm";
    }
    else
    {
        _WindowWidth = "xs";
    }
    if (_WindowWidth != "")
    {
        var _ClassName = "";
        var _ClassItem = "";
        var _ObjExistsStyle = {};
        var _ObjSetStyle = {};
        if (_SelectedArea != "" && _SelectedArea != undefined && _SelectedArea != null)
        {
            _SelectedArea = $(_SelectedArea);
        }
        else
        {
            _SelectedArea = "";
        }
        $("[class*='fau-']", _SelectedArea).each(function ()
        {
            var _Self = $(this);
            _ObjExistsStyle = {};
            _ClassName = "";
            _ClassItem = "";
            if (_Self.attr("style") != "" && _Self.attr("style") != null && _Self.attr("style") != undefined)
            {
                _ClassName = _Self.attr("style").split(";");
                $.each(_ClassName, function (i, value)
                {
                    if (value.indexOf(":") > -1)
                    {
                        _ClassItem = value.split(":");
                        _ObjExistsStyle[_ClassItem[0].replace(/ /g, "")] = _ClassItem[1].replace(/ /g, "");
                    }
                });
            }
            _ClassName = "";
            _ClassItem = "";
            _ObjSetStyle = {};
            _ClassName = (this.className.match(/[\w-]*fau-[\w-.#%]*/g));
            if (_ClassName.length > 0)
            {
                $.each(_ClassName, function (i, _SelectedElement)
                {
                    _ClassItem = _SelectedElement.split("-");
                    if (_ClassItem.length > 3)
                    {
                        if (_ClassItem[1] == _WindowWidth || _ClassItem[1] == "all")
                        {
                            if (_ObjSetStyle.hasOwnProperty(_ClassItem[2]) == false)
                            {
                                if (_ClassItem.length == 4)
                                {
                                    _ObjSetStyle[_ClassItem[2]] = _ClassItem[3];
                                }
                                else if (_ClassItem.length == 5)
                                {
                                    _ObjSetStyle[_ClassItem[2]] = _ClassItem[3] + " " + _ClassItem[4];
                                }
                                else if (_ClassItem.length == 6)
                                {
                                    _ObjSetStyle[_ClassItem[2]] = _ClassItem[3] + " " + _ClassItem[4] + " " + _ClassItem[5];
                                }
                            }
                            else
                            {
                                if (_ClassItem[1] == _WindowWidth)
                                {
                                    if (_ClassItem.length == 4)
                                    {
                                        _ObjSetStyle[_ClassItem[2]] = _ClassItem[3];
                                    }
                                    else if (_ClassItem.length == 5)
                                    {
                                        _ObjSetStyle[_ClassItem[2]] = _ClassItem[3] + " " + _ClassItem[4];
                                    }
                                    else if (_ClassItem.length == 6)
                                    {
                                        _ObjSetStyle[_ClassItem[2]] = _ClassItem[3] + " " + _ClassItem[4] + " " + _ClassItem[5];
                                    }
                                }
                            }
                        }
                    }
                });
            }
            _Self.removeAttr("style");
            _Self.css($.extend(_ObjSetStyle, _ObjExistsStyle))
        });
    }
}

// Errorhandling
function setError(_Action, _ActionPath, _ErrorPage, _ErrorCode, _ErrorText)
{
    if (_Action == "navigate")
    {
        navigateTo(_ActionPath + "?ErrorPage=" + _ErrorPage + "&ErrorCode=" + _ErrorCode + "&ErrorText=" + _ErrorText, 0);
    }
    else if (_Action == "dialogAlert")
    {
        hideLoadboxAndBackground();
        $("#modalStandardTitle").text(SingleDefaultElements.errorDialogAlertTitle);
        $("#modalStandardText").html(SingleDefaultElements[_ErrorText + "Error"] + "<br><br>" + SingleDefaultElements.errorCodeReported + "<br><br># " + _ErrorCode + " / " + _ErrorPage + "<br><br>" + AppName + " / " + AppVersion + " / " + AppVersionCode);
        $('#modalStandard').modal("show");
    }
    else if (_Action == "getpage")
    {
        ErrorPage = _ErrorPage;
        ErrorCode = _ErrorCode;
        ErrorText = _ErrorText;
        getPage(_ActionPath);
    }

    var _OutputElements = {};
    _OutputElements["TransferType"] = _ErrorText;
    _OutputElements["DeviceType"] = "mobile";
    _OutputElements["CustomerId"] = ThisCustomerId;
    _OutputElements["UserId"] = ThisUserId;
    _OutputElements["ConnectionId"] = ThisConnectionId;
    _OutputElements["PageName"] = _ErrorPage.replace(/\//g, '');
    _OutputElements["Error"] = _ErrorCode;
    createErrorLog(_OutputElements);
}

// Page Language
function loadPageLaguage(Filename)
{
    $.each(Filename, function (Key, Value)
    {
        $.each(Value, function (Key, Value)
        {
            if (Value.length == 2)
            {
                if (Value[0] == "html")
                {
                    $('#' + Key).html('');
                    $('#' + Key).html(Value[1]);
                }
                else if (Value[0] == "text")
                {
                    $('#' + Key).text('');
                    $('#' + Key).text(Value[1]);
                }
                else if (Value[0] == "val")
                {
                    $('#' + Key).val('');
                    $('#' + Key).val(Value[1]);
                }
                else if (Value[0] == "cmdlbl")
                {
                    $('#' + Key).button({ label: "" });
                    $('#' + Key).button({ label: "" + Value[1] + "" });
                }
                else if (Value[0] == "title")
                {
                    $('#' + Key).prop("title", "");
                    $('#' + Key).prop("title", Value[1]);
                }
                else if (Value[0] == "placeholder")
                {
                    $('#' + Key).prop("placeholder", "");
                    $('#' + Key).prop("placeholder", Value[1]);
                }
                else if (Value[0] == "htmlembedded")
                {
                    $('#' + Key).html($('#' + Key).html() + "");
                    $('#' + Key).html($('#' + Key).html() + Value[1]);
                }
            }
            else if (Value.length == 3)
            {
                if (Value[0] == "id")
                {
                    if (Value[1] == "html")
                    {
                        $('#' + Key).html('');
                        $('#' + Key).html(Value[2]);
                    }
                    else if (Value[1] == "text")
                    {
                        $('#' + Key).text('');
                        $('#' + Key).text(Value[2]);
                    }
                    else if (Value[1] == "val")
                    {
                        $('#' + Key).val('');
                        $('#' + Key).val(Value[2]);
                    }
                    else if (Value[1] == "cmdlbl")
                    {
                        $('#' + Key).button({ label: "" });
                        $('#' + Key).button({ label: "" + Value[2] + "" });
                    }
                    else if (Value[1] == "title")
                    {
                        $('#' + Key).prop("title", "");
                        $('#' + Key).prop("title", Value[2]);
                    }
                    else if (Value[1] == "placeholder")
                    {
                        $('#' + Key).prop("placeholder", "");
                        $('#' + Key).prop("placeholder", Value[2]);
                    }
                    else if (Value[1] == "htmlembedded")
                    {
                        $('#' + Key).html($('#' + Key).html() + "");
                        $('#' + Key).html($('#' + Key).html() + Value[2]);
                    }
                }
                else if (Value[0] == "class")
                {
                    if (Value[1] == "html")
                    {
                        $('.' + Key).html('');
                        $('.' + Key).html(Value[2]);
                    }
                    else if (Value[1] == "text")
                    {
                        $('.' + Key).text('');
                        $('.' + Key).text(Value[2]);
                    }
                    else if (Value[1] == "val")
                    {
                        $('.' + Key).val('');
                        $('.' + Key).val(Value[2]);
                    }
                    else if (Value[1] == "cmdlbl")
                    {
                        $('.' + Key).button({ label: "" });
                        $('.' + Key).button({ label: "" + Value[2] + "" });
                    }
                    else if (Value[1] == "title")
                    {
                        $('.' + Key).prop("title", "");
                        $('.' + Key).prop("title", Value[2]);
                    }
                    else if (Value[1] == "placeholder")
                    {
                        $('.' + Key).prop("placeholder", "");
                        $('.' + Key).prop("placeholder", Value[2]);
                    }
                    else if (Value[1] == "htmlembedded")
                    {
                        $('.' + Key).html($('.' + Key).html() + "");
                        $('.' + Key).html($('.' + Key).html() + Value[2]);
                    }
                }
            }
        });
    });
}

// Language / Menu Content / Navigation
function getLanguage(SelectedPage, Callback)
{
    $.ajaxSetup({ cache: false });
    $.getJSON(SelectedPage)
	.done(function (data)
	{
	    if (data && data instanceof Object && isEmpty(data) == false)
	    {
	        ObjPageLanguage = data;
	        Callback(200);
	    }
	    else
	    {
	        Callback(400);
	    }
	})
	.fail(function (jqXHR, textStatus, err)
	{
	    Callback(400);
	});
}

function setNonLanguage()
{
    loadPageLaguage(MyDefaultLanguage.ObjNonLanguageElements);
    SingleNonLanguageElements = MyDefaultLanguage.SingleNonLanguageElements;
}

function setDefaultLanguage(SelectedLanguage)
{
    loadPageLaguage(MyDefaultLanguage.ObjDefaultElements[SelectedLanguage]);
    SingleDefaultElements = MyDefaultLanguage.SingleDefaultElements[SelectedLanguage];
}

function setPageLanguage(SelectedLanguage)
{
    loadPageLaguage(ObjPageLanguage.ObjElements[SelectedLanguage]);
    SingleElements = ObjPageLanguage.SingleElements[SelectedLanguage];
    $('#labelPageTitle').text(SingleElements.labelPageTitle);
}

function setMenuContent()
{
    if (ObjMainMenu && ObjMainMenu instanceof Object && isEmpty(ObjMainMenu) == false)
    {
        $.each(ObjMainMenu, function (Key, Value)
        {
            $(".menu_" + Key).css({ "display": "" + Value + "" });
            $("#menu_" + Key).css({ "display": "" + Value + "" });
        });
    }
    if (ObjContentMenu && ObjContentMenu instanceof Object && isEmpty(ObjContentMenu) == false)
    {
        $.each(ObjContentMenu, function (Key, Value)
        {
            $("." + Key).css({ "display": "" + Value + "" });
            $("#" + Key).css({ "display": "" + Value + "" });
        });
    }
}

function getPage(_SelectedPage, _CheckOnlineStatus)
{
    _CheckOnlineStatus = _CheckOnlineStatus === true ? true : false;
    showLoadboxAndBackground();
    if (_CheckOnlineStatus == true)
    {
        if (Appmode == "mobile")
        {
            checkConnection(function (Response)
            {
                if (Response == 200)
                {
                    setPage();

                }
                else
                {
                    hideLoadboxAndBackground();
                    openLastActionContent("<p style=\"padding: 5px;\" class=\"alert alert-info text-center\" role=\"alert\">" + SingleDefaultElements.modalNoConnectionText + "<span class=\"glyphicons glyphicons-wifi-alt x6 pull-right\" style=\"color: #d9534f;\"></span></p>", 5000);
                }
            });
        }
        else
        {
            setPage();
        }
    }
    else
    {
        setPage();
    }

    function setPage()
    {
        closeDialog();
        if ($("#div-slider-left").is(":visible")) { ObjLeftMenu.close(); }
        $("#page").hide().empty();
        window.setTimeout(function ()
        {
            $.ajaxSetup({ cache: false });
            $('#page').load(_SelectedPage, function (Response, Status, XHR)
            {
                if (XHR.status == 200)
                {
                    if (device.platform == "iOS")
                    {
                        $('#navbar-top').css({ "display": "block" });
                    }
                    getContentInfo();
                    $("#page").show();

                    if ((ErrorCode != "" && ErrorCode != undefined && ErrorCode != null) && (ErrorPage != "" && ErrorPage != undefined && ErrorPage != null) && (ErrorText != "" && ErrorText != undefined && ErrorText != null))
                    {
                        $("#modalStandardTitle").text(SingleDefaultElements.errorDialogAlertTitle);
                        $("#modalStandardText").html(SingleDefaultElements[ErrorText + "Error"] + "<br><br>" + SingleDefaultElements.errorCodeReported + "<br><br># " + ErrorCode + " / " + ErrorPage + "<br><br>" + AppName + " / " + AppVersion + " / " + AppVersionCode);
                        $("#modalStandardAdditional").html(SingleNonLanguageElements.defaultTeamAndLogo);
                        $('#modalStandard').modal("show");
                        ErrorCode = "";
                        ErrorPage = "";
                        ErrorText = "";
                    }

                    if (_SelectedPage != 'signin.html' && _SelectedPage != 'message.html')
                    {
                        window.setTimeout(function ()
                        {
                            console.log('Privet');
                            CheckIfThereAreAnyUnreadMessagesAtAll();
                        }, 10000);
                    }
                }
                else
                {
                    setError("navigate", "index.html", ThisPage, "getPage", "LoadData");
                }
            });
        }, 200);
    }
}

function navigateTo(SelectedPage, Target)
{
    showLoadboxAndBackground();
    window.setTimeout(function ()
    {
        if (Target == 0)
        {
            window.location.href = SelectedPage;
        }
        else
        {
            window.open(SelectedPage, Target);
        }
    }, 200);
}

function changeInOut(_ElementIn, _ElementOut)
{
    if ($("#" + _ElementIn + "").is(":hidden"))
    {
        $("#" + _ElementIn + "").slideDown("slow");
        $("#" + _ElementOut + "").slideUp("slow");
    }
    else
    {
        $("#" + _ElementIn + "").slideUp("slow");
        $("#" + _ElementOut + "").slideDown("slow");
    }
}

function changeVisibility(_Element)
{
    if ($("#" + _Element + "").is(":hidden"))
    {
        $("#" + _Element + "").slideDown("slow");
    }
    else
    {
        $("#" + _Element + "").slideUp("slow");        
    }
}

function getURLParameters(sPageURL)
{
    var result = {};
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        result[sParameterName[0]] = sParameterName[1];
    }
    return result;
}

$.urlParam = function (name)
{
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null)
    {
        return null;
    }
    else
    {
        return results[1] || 0;
    }
}

function ChangeLanguage(SelectedLanguage)
{
    if (SelectedLanguage != ThisLanguage)
    {
        ThisLanguage = SelectedLanguage;
        setDefaultLanguage(ThisLanguage);
        setPageLanguage(ThisLanguage);
    }
}

// Cookies
function setLanguageCookie(SelectedLanguage, Callback)
{
    var CookieLanguage = getCookie(ThisLocation + "-language");
    if (CookieLanguage == "" || CookieLanguage == "undefined")
    {
        if (SelectedLanguage == "")
        {
            ThisLanguage = "en-US";
            setCookie(ThisLocation + "-language", ThisLanguage, 365);
        }
        else
        {
            ThisLanguage = SelectedLanguage;
            setCookie(ThisLocation + "-language", ThisLanguage, 365);
        }
    }
    else
    {
        if (SelectedLanguage == "")
        {
            ThisLanguage = CookieLanguage;
        }
        else
        {
            ThisLanguage = SelectedLanguage;
            setCookie(ThisLocation + "-language", ThisLanguage, 365);
        }
    }
    Callback(ThisLanguage);
}

function setCookie(CName, CValue, ExDays)
{
    var D = new Date();
    D.setTime(D.getTime() + (ExDays * 24 * 60 * 60 * 1000));
    var Expires = "expires=" + D.toUTCString();
    document.cookie = CName + "=" + CValue + "; " + Expires;
}

function getCookie(CName)
{
    var Name = CName + "=";
    var CA = document.cookie.split(';');
    for (var i = 0; i < CA.length; i++)
    {
        var C = CA[i];
        while (C.charAt(0) == ' ') C = C.substring(1);
        if (C.indexOf(Name) == 0) return C.substring(Name.length, C.length);
    }
    return "";
}

// Dialog
function setDialog()
{
    $("#dialog-modal").dialog
	({
	    autoOpen: false,
	    modal: true,
	    width: 'auto',
	    height: 'auto',
	    resizable: false,
	    draggable: false
	});
}

function setDialogiFrame()
{
    $("#dialog-modal-iframe").dialog
	({
	    autoOpen: false,
	    modal: true,
	    width: 'auto',
	    height: 'auto',
	    resizable: false,
	    draggable: false
	});
}

function dialogAlert(SelectedTitle, SelectedAlert)
{
    closeDialog();
    $("#dialog-message").remove();
    $("body").append("<div id=\"dialog-message\"><p>" + SelectedAlert + "</p></div>");
    var _SelectedWidth = 320;
    if (SelectedTitle != "" && SelectedTitle != undefined)
    {
        var _WindowWidth = $(window).width();
        var _SelectedTitleLength = SelectedTitle.length;
        if (_SelectedTitleLength != "" && _SelectedTitleLength != null && _SelectedTitleLength != undefined)
        {
            _SelectedWidth = _SelectedTitleLength * 11.5;
            if (_SelectedWidth < 320)
            {
                _SelectedWidth = 320;
            }
            if (_SelectedWidth > _WindowWidth)
            {
                _SelectedWidth = _WindowWidth - 20;
            }
        }
    }
    $("#dialog-message").dialog(
	{
	    title: SelectedTitle,
	    modal: true,
	    width: _SelectedWidth,
	    resizable: false,
	    buttons:
		{
		    Ok: function ()
		    {
		        $(this).dialog("close");
		    }
		}
	});
    $(".ui-dialog-titlebar, .ui-dialog-buttonpane, .ui-dialog-content").css({ "font-size": "0.90em" });
    $("#dialog-message").dialog("open");
}

function dialogConfirm(SelectedTitle, SelectedAlert, SelectedButton1, SelectedButton2, callback, SelectedId)
{
    closeDialog();
    $("#dialog-confirm").remove();
    $("body").append("<div id=\"dialog-confirm\"><p>" + SelectedAlert + "</p></div>");
    var _SelectedWidth = 320;
    if (SelectedTitle != "" && SelectedTitle != undefined)
    {
        var _WindowWidth = $(window).width();
        var _SelectedTitleLength = SelectedTitle.length;
        if (_SelectedTitleLength != "" && _SelectedTitleLength != null && _SelectedTitleLength != undefined)
        {
            _SelectedWidth = _SelectedTitleLength * 11.5
            if (_SelectedWidth < 320)
            {
                _SelectedWidth = 320;
            }
            if (_SelectedWidth > _WindowWidth)
            {
                _SelectedWidth = _WindowWidth - 20;
            }
        }
    }
    $("#dialog-confirm").dialog(
	{
	    title: SelectedTitle,
	    modal: true,
	    width: _SelectedWidth,
	    resizable: false,
	    buttons:
		[
			{
			    text: SelectedButton1,
			    click: function ()
			    {
			        callback(SelectedId);
			    }
			},
			{
			    text: SelectedButton2,
			    click: function ()
			    {
			        $(this).dialog("close");
			    }
			}
		]
	});
    $(".ui-dialog-titlebar, .ui-dialog-buttonpane, .ui-dialog-content").css({ "font-size": "0.90em" });
    $("#dialog-confirm").dialog("open");
}

function closeDialog()
{
    if ($("#dialog-message").length > 0)
    {
        $("#dialog-message").dialog("close");
    }
    if ($("#dialog-confirm").length > 0)
    {
        $("#dialog-confirm").dialog("close");
    }
}

// Modal Help
function modalHelp(SelectedPage)
{
    $("#modalStandardText").empty();
    $("#modalStandardAdditional").empty();
    var _ModalHelpAdditional = $("#modalHelpAdditional").html();
    if (_ModalHelpAdditional != "" && _ModalHelpAdditional != null && _ModalHelpAdditional != undefined)
    {
        $("#modalStandardText").html(SingleElements[SelectedPage + "-text"] + _ModalHelpAdditional);
        if (typeof modalHelpAdditional == "function")
        {
            modalHelpAdditional();
        }
    }
    else
    {
        $("#modalStandardText").html(SingleElements[SelectedPage + "-text"]);
    }
    $("#modalStandardTitle").text(SingleElements[SelectedPage + "-title"]);
    $("#modalStandardAdditional").html(SingleNonLanguageElements.defaultTeamAndLogo);
    $('#modalStandard').modal("show");
}

// Left Navbar
function leftNavbar()
{
    if ($("#div-slider-left").is(":visible"))
    {
        ObjLeftMenu.close();
    }
    else
    {
        ObjLeftMenu.open();
    }
}

// Open Messages
function openMessages()
{
    getPage('message.html', true);
}

// Topslider Message
function setTopsliderMessage(SelectedContent, SelectedSec)
{
    if ($("#topslider_message").length == 0)
    {
        var _ThisTopslider = "";
        window.clearTimeout(TopSliderInterval);
        TopSliderInterval = 0;
        if (SelectedSec != 0)
        {
            $("body").append("<div id=\"topslider_message\"><span></span></div>");
            _ThisTopslider = $("#topslider_message");
            $("span", _ThisTopslider).text(SelectedContent);
            $(_ThisTopslider).fadeIn("200");
            TopSliderInterval = window.setTimeout(function ()
            {
                window.clearTimeout(TopSliderInterval);
                TopSliderInterval = 0;
                removeTopsliderMessage();
            }, SelectedSec);
        }
        else if (SelectedSec == 0)
        {
            $("body").append("<div id=\"topslider_message\"><span></span></div>");
            _ThisTopslider = $("#topslider_message");
            $("span", _ThisTopslider).text(SelectedContent);
            $(_ThisTopslider).fadeIn("200");
        }
    }
}

function removeTopsliderMessage()
{
    if ($("#topslider_message").length > 0 && TopSliderInterval == 0)
    {
        var _ThisTopslider = "";
        _ThisTopslider = $("#topslider_message");
        $("span", _ThisTopslider).text('');
        $(_ThisTopslider).remove();
    }
}

// LoadBox And Background 
function showLoadboxAndBackground()
{
    if ($('#background').length == 0)
    {
        var _ShowLoadBoxInterval = 0;
        ArrayPageSize = new Array($(window).width(), $(window).height(), $(window).scrollTop(), $(window).scrollLeft())
        if (ArrayPageSize != "")
        {
            clearInterval(_ShowLoadBoxInterval);
            var _WindowWidth = ArrayPageSize[0];
            var _WindowHeight = ArrayPageSize[1];
            var _WindowScrollTop = ArrayPageSize[2];
            var _WindowScrollLeft = ArrayPageSize[3];
            var _BackgroundHeight = "";
            var _LoaderTop = "";
            var _LoaderLeft = "";
            if (_WindowScrollTop > 0)
            {
                _LoaderTop = _WindowHeight / 2 + _WindowScrollTop - 64;
                _BackgroundHeight = _WindowHeight + _WindowScrollTop;
            }
            else
            {
                _LoaderTop = _WindowHeight / 2 - 64;
                _BackgroundHeight = _WindowHeight;
            }
            if (_WindowScrollLeft > 0)
            {
                _LoaderLeft = _WindowWidth / 2 + _WindowScrollLeft - 64;
            }
            else
            {
                _LoaderLeft = _WindowWidth / 2 - 64;
            }
            $("body").append("<div id=\"background\"></div>");
            $("#background").css({ "width": "" + _WindowWidth + "px", "height": "" + _BackgroundHeight + "px" });
            $("#background").append("<img border=\"0px\" id=\"load_box\" src=\"lib/icons/ajax_loader.gif\" width=\"124px\" height=\"128px\">");
            $("#load_box").css({ "left": "" + _LoaderLeft + "px", "top": "" + _LoaderTop + "px" });
            $("#background").css({ "display": "block" });
            $("#load_box").css({ "display": "block" });
        }
        else
        {
            _ShowLoadBoxInterval = setInterval(showLoadboxAndBackground, 100);
        }
    }
}

function hideLoadboxAndBackground()
{
    $("#background").remove();
    $("#load_box").remove();
}

// Background 
function showBackground()
{
    if ($('#background-light').length == 0)
    {
        var _ShowBackground = 0;
        ArrayPageSize = new Array($(window).width(), $(window).height(), $(window).scrollTop(), $(window).scrollLeft())
        if (ArrayPageSize != "")
        {
            clearInterval(_ShowBackground);
            var _WindowWidth = ArrayPageSize[0];
            var _WindowHeight = ArrayPageSize[1];
            var _WindowScrollTop = ArrayPageSize[2];
            var _BackgroundHeight = "";
            if (_WindowScrollTop > 0)
            {
                _BackgroundHeight = _WindowHeight + _WindowScrollTop;
            }
            else
            {
                _BackgroundHeight = _WindowHeight;
            }
            $("body").append("<div id=\"background-light\"></div>");
            $("#background-light").css({ "width": "" + _WindowWidth + "px", "height": "" + _BackgroundHeight + "px" });
            $("#background-light").css({ "display": "block" });
        }
        else
        {
            _ShowBackground = setInterval(showBackground, 100);
        }
    }
}

function hideBackground()
{
    $("#background-light").remove();
}

function getSelectedObj(SelectedObj, SelectedKey, SelectedVal)
{
    var _ThisReturn = "";
    $.each(SelectedObj, function (i, Selected)
    {
        $.each(Selected, function (key, value)
        {
            if (SelectedKey.toString().toLowerCase() == key.toString().toLowerCase() && SelectedVal.toString().toLowerCase() == value.toString().toLowerCase())
            {
                _ThisReturn = Selected;
            }
        });
    });
    return _ThisReturn;
}

function removeSelectedObj(SelectedObj, SelectedKey, SelectedVal)
{
    $.each(SelectedObj, function (i, Selected)
    {
        if (SelectedObj[i][SelectedKey].toString().toLowerCase() == SelectedVal.toString().toLowerCase())
        {
            SelectedObj.splice(i, 1);
            return false;
        }
    });
}

function formatDateTime(_SelectedDateTime, _FormatType)
{
    if (moment(_SelectedDateTime).isValid() == true)
    {
        return moment(_SelectedDateTime).format(_FormatType);
    }
    else
    {
        return "";
    }
}

function formatTime(_SelectedTime)
{
    if (_SelectedTime != "" && _SelectedTime != null && _SelectedTime != undefined)
    {
        return _SelectedTime;
    }
    else
    {
        return "";
    }
}

function isEmpty(SelectedObj)
{
    for (var key in SelectedObj)
    {
        if (SelectedObj.hasOwnProperty(key))
        {
            return false;
        }
    }
    return true;
}

function setAccordionContentWidth(SelectedId)
{
    var _AccordionContentEntitiesDivWidth = $("#" + SelectedId + "-accordion-header").width();
    var _AccordionContentEntitiesULWidth = $(".accordion-entities", "#" + SelectedId + "-accordion-content-entities").width();
    var _NumberOfEntities = Math.floor(_AccordionContentEntitiesULWidth / 144);
    var _AccordionEntitiesLeftMargin = (((_NumberOfEntities * 144) - _AccordionContentEntitiesDivWidth) / 2);
    if (_AccordionEntitiesLeftMargin)
    {
        $(".accordion-entities").css({ "margin-left": Math.abs(_AccordionEntitiesLeftMargin) })
    }
}

function openLastActionContent(SelectedActionContent, SelectedTimeout)
{
    if (SelectedActionContent != "")
    {
        hideBackground();
        hideLoadboxAndBackground();
        window.clearTimeout(TopSliderInterval);
        TopSliderInterval = 0;
        $("#modalStandardTitle").text(SingleElements[ModalHelpPath + "-title"]);
        $("#modalStandardText").html(SelectedActionContent);
        $("#modalStandardAdditional").html(SingleNonLanguageElements.defaultTeamAndLogo);
        $("#modalStandard").modal();
        TopSliderInterval = window.setTimeout(function ()
        {
            window.clearTimeout(TopSliderInterval);
            TopSliderInterval = 0;
            $("#modalStandard").modal("hide");
        }, SelectedTimeout);
    }
}

function updateAccordionContent()
{
    $.each(ObjNewStatus, function (i, NewStatus)
    {
        if (NewStatus.DataType == "date")
        {
            $("#" + NewStatus.Id.toString().toLowerCase() + "-" + NewStatus.Object.toString().toLowerCase()).text(formatDateTime(NewStatus.Value, "LL"));
        }
        else if (NewStatus.DataType == "time")
        {
            $("#" + NewStatus.Id.toString().toLowerCase() + "-" + NewStatus.Object.toString().toLowerCase()).text(formatDateTime(NewStatus.Value, "LT"));
        }
        else
        {
            if (NewStatus.Object.toString().toLowerCase() == "obtainablecredit")
            {
                if (parseFloat(NewStatus.Value) < parseFloat(ObjCustomerSettings.CreditGoal))
                {
                    $("#" + NewStatus.Id.toString().toLowerCase() + "-creditgoal").addClass("accordion-header-creditgoal");
                }
                else if (parseFloat(NewStatus.Value) >= parseFloat(ObjCustomerSettings.CreditGoal))
                {
                    $("#" + NewStatus.Id.toString().toLowerCase() + "-creditgoal").removeClass("accordion-header-creditgoal");
                }
            }
            $("#" + NewStatus.Id.toString().toLowerCase() + "-" + NewStatus.Object.toString().toLowerCase()).text(NewStatus.Value);
        }
    });
}

function setTableSorterMouseOver(SelectedVisibility)
{
    if (SelectedVisibility != undefined)
    {
        var _ThisButton = "";
    }
    $(".tablesorter_tr:odd").css({ "background-color": "#FFFFFF" });
    $(".tablesorter_tr:even").css({ "background-color": "#F5F5F5" });
    $(".tablesorter_tr:odd").mouseover(function()
    {
        $(this).css({ "background-color": "#337ab7", "color": "#FFFFFF" });
        if (SelectedVisibility != undefined)
        {
            _ThisButton = $(this).find(".btn");
            $(_ThisButton).css({ "visibility": "visible" });
        }
    });
    $(".tablesorter_tr:even").mouseover(function()
    {
        $(this).css({ "background-color": "#337ab7", "color": "#FFFFFF" });
        if (SelectedVisibility != undefined)
        {
            _ThisButton = $(this).find(".btn");
            $(_ThisButton).css({ "visibility": "visible" });
        }
    });
    $(".tablesorter_tr:odd").mouseout(function()
    {
        $(this).css({ "background-color": "#FFFFFF", "color": "#000000" });
        if (SelectedVisibility != undefined)
        {
            _ThisButton = $(this).find(".btn");
            $(_ThisButton).css({ "visibility": "hidden" });
        }
    });
    $(".tablesorter_tr:even").mouseout(function()
    {
        $(this).css({ "background-color": "#F5F5F5", "color": "#000000" });
        if (SelectedVisibility != undefined)
        {
            _ThisButton = $(this).find(".btn");
            $(_ThisButton).css({ "visibility": "hidden" });
        }
    });
}

// Grid functions
function setGridFunctions(SelectedArea)
{
    if (SelectedArea != "" && SelectedArea != undefined && SelectedArea != null)
    {
        SelectedArea = $(SelectedArea);
    }
    else
    {
        SelectedArea = "";
    }
    $(":input", SelectedArea).each(function()
    {
        if ($(this).is("button"))
        {
            if ($(this).hasClass("firstgridpage") || $(this).hasClass("previousgridpage") || $(this).hasClass("nextgridpage") || $(this).hasClass("lastgridpage"))
            {
                $(this).off().on('click', function()
                {
                    changeGridPage(this.id, SelectedArea);
                });
            }
        }
    });
    var thisElementClass;
    $(".header", SelectedArea).each(function()
    {
        $(this).off().on('click', function()
        {
            if ($(this).hasClass("headerSortAsc"))
            {
                thisElementClass = "headerSortDesc";
                ObjPageData.OrderByClause = $(this).attr("data-attr") + " DESC"
            }
            else if ($(this).hasClass("headerSortDesc"))
            {
                thisElementClass = "headerSortAsc";
                ObjPageData.OrderByClause = $(this).attr("data-attr") + " ASC"
            }
            else
            {
                thisElementClass = "headerSortAsc";
                ObjPageData.OrderByClause = $(this).attr("data-attr") + " ASC"
            }
            $(".header").each(function()
            {
                $(this).removeClass("headerSortAsc");
                $(this).removeClass("headerSortDesc");
            });
            showBackground();
            $(this).addClass(thisElementClass);
            ObjPageData.PageCurrent = 1;
            ObjPageData.PageSize = $("#GridPageSize").val();
            getContentData();
        });
    });
    $("#GridPageSize", SelectedArea).off().on('change', function()
    {
        showBackground();
        ObjPageData.PageCurrent = 1;
        ObjPageData.PageSize = this.value;
        getContentData();
    });
    $("#SearchText", SelectedArea).off().on('keyup', function()
    {
        searchGridContent(this.value);
    });
}
function getIcons(SelectedType1, SelectedType2)
{
    var validTypes =
	{
	    "Cleaner To Cleaner Traded From": "<span class=\"glyphicons glyphicons-user x2\"></span><span class=\"glyphicons glyphicons-arrow-right x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",
	    "Cleaner To Cleaner Traded To": "<span class=\"glyphicons glyphicons-user x2\"></span><span class=\"glyphicons glyphicons-arrow-left x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",

	    "MyOpen To Cleaner Traded From": "<span class=\"glyphicons glyphicons-heart x2\"></span><span class=\"glyphicons glyphicons-arrow-right x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",
	    "MyOpen To Cleaner Traded To": "<span class=\"glyphicons glyphicons-heart x2\"></span><span class=\"glyphicons glyphicons-arrow-left x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",

	    "CommonOpen To Cleaner Traded From": "<span class=\"glyphicons glyphicons-global x2\"></span><span class=\"glyphicons glyphicons-arrow-right x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",
	    "CommonOpen To Cleaner Traded To": "<span class=\"glyphicons glyphicons-global x2\"></span><span class=\"glyphicons glyphicons-arrow-left x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",

	    "Cleaner To MyOpen Traded From": "<span class=\"glyphicons glyphicons-user x2\"></span><span class=\"glyphicons glyphicons-arrow-right x2\"></span><span class=\"glyphicons glyphicons-heart x2\"></span>",
	    "Cleaner To MyOpen Traded To": "<span class=\"glyphicons glyphicons-heart x2\"></span><span class=\"glyphicons glyphicons-arrow-left x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",

	    "Cleaner To CommonOpen Traded From": "<span class=\"glyphicons glyphicons-user x2\"></span><span class=\"glyphicons glyphicons-arrow-right x2\"></span><span class=\"glyphicons glyphicons-global x2\"></span>",
	    "Cleaner To CommonOpen Traded To": "<span class=\"glyphicons glyphicons-global x2\"></span><span class=\"glyphicons glyphicons-arrow-left x2\"></span><span class=\"glyphicons glyphicons-user x2\"></span>",

	    "MyOpen To CommonOpen Traded From": "<span class=\"glyphicons glyphicons-heart x2\"></span><span class=\"glyphicons glyphicons-arrow-right x2\"></span><span class=\"glyphicons glyphicons-global x2\"></span>",
	    "MyOpen To CommonOpen Traded To": "<span class=\"glyphicons glyphicons-heart x2\"></span><span class=\"glyphicons glyphicons-arrow-left x2\"></span><span class=\"glyphicons glyphicons-global x2\"></span>",
	}
    return validTypes[SelectedType1 + " " + SelectedType2];
}

// Set TableSorter Mouese Over
function setTableSorterMouseOver()
{
    $(".tablesorter_tr:odd").css({ "background-color": "#e9e9e9" });
}