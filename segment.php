
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta charset="utf-8" />
    <meta property="fb:admins" content="100000949516439" />
    <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml"/>
    <meta name="keywords" content="jquery,terminal,interpreter,console,bash,history,authentication,ajax,server,client"/>
    <link rel="shortcut icon" href="favicon.ico"/>
    <link rel="alternate" type="application/rss+xml" title="Comments RSS" href="http://terminal.jcubic.pl/comments-rss.php"/>
    <link rel="stylesheet" href="css/style.css"/>
    <link href="http://fonts.googleapis.com/css?family=Droid+Sans+Mono" rel="stylesheet" type="text/css"/>
  </head>
  <body>
	<section style="margin-right: 19%; text-align: left;">
       <article>
        <header id="demo"><h2>/<a href="start.php" target="_self">haotian</a><font color="black">/</a><a href="start.php" target="_self">professional</a>/<a href="projects.php" target="_self">portfolio</a>/language_segmentation</h2></header>
        <h3 style="margin-top: -20px;">thai_segment.py<a href="https://github.com/hehaotian/thaiSegment" target="_blank"><img style="width: 45px; height: 45px;" src="img/head.png"></a></h3>
        <p style="margin-top: 20px;"><a href="docs/thaiphon.pdf" target="_blank">Thai</a> uses a phonetic alphabet of consonants, vowels, and tone marks, but does not use space to separate words or syllables. Therefore, a fundamental problem in text processing for Thai—and many other East Asian languages—is to automatically identify syllable and word boundaries in text. For this project, I built a FST (Finite State Transducer), which exactly can organize and use those phonetic/phonological rules to decide whether it needs a space or not.</p> 
        <div style="background-color: black; width: 718px; height: 92px;">
        	<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">คู่แข่งขันต่างก็คุมเชิงกัน</font><br />
			<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">เขาเงียบไปครู่หนึ่งแล้วพูดขึ้น</font><br />
			<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">เธอหันมาคุ้ยทรายขึ้นมาใหม่</font><br />
			<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">ฉันเห็นเขาตามเธอแจไปทุกทีเป็นเงาตามตัวตลอดเลย</font>
        </div><br />
        <div style="background-color: black; width: 718px; height: 92px;">
        	<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">คู่ แข่ง ขัน ต่าง ก็ คุม เชิง กัน </font><br />
			<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">เขา เงียบ ไป ครู่ หนึ่ง แล้ว พูด ขึ้น </font><br />
			<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">เธอ หัน มา คุ้ย ทราย ขึ้น มา ใหม่</font><br />
			<font style="margin-left: 10px; margin-right: 10px; color: #FFFFFF; size: 6px;">ฉัน เห็น เขา ตาม เธอ แจ ไป ทุก ที เป็น เงา ตาม ตัว ตลอด เลย</font>
        </div>
        <h3 style="margin-top: 10px;">chin_segment.py<img style="width: 45px; height: 45px;" src="img/head.png"></h3>
		<p>
			Chinese has the same segmentation problem as Thai, but it is much more complicated, as Chinese characters are not phonograms. I will use Chinese word lists to train and learn the unsegmented text.
		</p>
	</article>
    </section>
  </body>
</html>
