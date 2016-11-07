<?php
$frm = $_POST['frmid'];
$name = $_POST['name'];
$phone = $_POST['phone'];

$quest = $_POST['quest'];

$step1 = $_POST['step1'];
$step2 = $_POST['step2'];
$step3 = $_POST['step3'];

$you_need_1 = $_POST['you-need-1'];
$you_need_2 = $_POST['you-need-2'];

$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_term = $_POST['utm_term'];
$source_type = $_POST['source_type'];
$source = $_POST['source'];
$position_type = $_POST['position_type'];
$position = $_POST['position'];
$added = $_POST['added'];
$creative = $_POST['creative'];
$matchtype = $_POST['matchtype'];
$location = $_POST['location'];
$url = $_POST['url'];
$title = $_POST['title'];
$subject = 'Заявка';	
//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";
//$to = "mr.cabron2@mail.ru";
$to = 'triowork2@gmail.com';
$message = "Форма: $frm\n\n";
$message .= "Имя: $name\n";
$message .= "Телефон: $phone\n\n";

if(isset($_POST['quest'])){
$message .= "Вопрос: $quest\n\n";
}


//if(isset($_POST['step1'])){
$message .= "Зачем вам ролик?: $step1\n";
$message .= "Какая будет продолжительность у ролика?: $step2\n";
$message .= "Сколько времени у нас есть на реализацию?: $step3\n\n";
//}

//if(isset($_POST['you-need-1'])){
$message .= "Для чего вам ролик?: $you_need_1\n";
$message .= "Почему его до сих пор у Вас нет?: $you_need_2\n\n";
//}

$message .= "Источник: $utm_source\n";
$message .= "Тип источника: $utm_medium\n";
$message .= "Кампания: $utm_campaign\n";
$message .= "Ключевое слово: $utm_term\n";
$message .= "Тип площадки(поиск или контекст): $source_type\n";
$message .= "Площадка: $source\n";
$message .= "Спецразмещение или гарантия: $position_type\n";
$message .= "Позиция объявления в блоке: $position\n";
$message .= "Показ по дополнительным ролевантным фразам: $added\n";
$message .= "Идентификатор объявления: $creative\n";
$message .= "Тип соответствия ключа(e-точное/p-фразовое/b-широкое): $matchtype\n\n";
$message .= "Гео-положение отправителя: $location\n\n";
$message .= "Ссылка на сайт: $url\n";
$message .= "Заголовок: $title\n\n";
mail ($to,$subject,$message,$headers);
?>