// EDIT ME: your reads, newest first (the page sorts by date anyway). Book reviews and reader responses; your own stories and words go in notes.js.
// Same fields as a note: date, title, slug, category (the genre of the book, shown above the title in the pop-up: Novel, Memoir, History, Poetry...), place, languages, prose: [[original paragraph, translation], ...] (add a third item "h" to make a pair a bold heading with a rule above it) (or blocks / poem / stanzas / body), photo, video.
// book: { cover: "file.jpg" (in assets/photos/), title, author, language (the edition read), country (where the book was first published, or a list), original (the language it was written in), lines: ["detail", ...] } is the book the response is about; the cover is what the Reads page shows. The Reads filter uses country (as a flag); original is kept for reference.
// sameAs: "other-slug" makes a read share another read's title and text (one response to two books); give it its own date, slug, book and place.
// slug: optional short link name (needed when the title isn't plain English letters).
window.READS = [
  {
    "date": "2025-05-05",
    "title": "Silence Cannot Bear Witness",
    "slug": "silence-cannot-bear-witness",
    "category": "Poetry",
    "book": {
      "cover": "9780241526088-jacket-large.jpg",
      "title": "Poems 1962–2020",
      "author": "Louise Glück",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Poetry · English original, collected poems 1962–2020",
        "Louise Glück’s collected poems, from Firstborn to Winter Recipes from the Collective, including The Wild Iris."
      ]
    },
    "place": "于加州库比蒂诺\nCupertino, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "《野鸢尾》里，最令我难忘的不是花重新开放，而是它开口讲述自己曾经无法说话。",
        "What stays with me most in *The Wild Iris* is not the flower blooming again, but its speaking about the time when it could not speak."
      ],
      [
        "格丽克让一朵花从死亡般的沉寂中归来。它说起痛苦尽头的一扇门，说起黑暗，以及那些意识无法抵达的地方。",
        "Glück brings a flower back from a deathlike stillness. It speaks of a door at the end of pain, of darkness, and of the places consciousness cannot reach."
      ],
      [
        "我始终觉得，这里存在一个无法消除的悖论：**只有重新获得声音的生命，才能讲述失去声音的经历；而真正的沉默，恰恰无法为自己作证。**",
        "I have always felt there is a paradox here that cannot be removed: **only a life that has regained its voice can tell of losing it; and true silence is exactly what cannot bear witness for itself.**"
      ],
      [
        "我们习惯把复生理解为胜利，仿佛一个人终于能够谈论过去，便意味着过去已经被理解。但野鸢尾的声音并不能证明它在黑暗中经历了什么。它只能证明，黑暗之后，仍有一个说话者。",
        "We are used to reading rebirth as a victory, as if being finally able to talk about the past meant the past had been understood. But the iris’s voice cannot prove what it went through in the dark. It can only prove that, after the dark, there is still someone speaking."
      ],
      [
        "这也使我重新理解格丽克诗中反复出现的珀耳塞福涅。她从冥府归来，却无法用归来取消被掳走的岁月。那些日子并不因为她重新站在阳光下，就变得可以解释。",
        "This also changes how I understand Persephone, who keeps returning in Glück’s poems. She comes back from the underworld, but her return cannot cancel the years of being taken. Those days do not become explicable just because she stands in the sun again."
      ],
      [
        "格丽克没有要求声音承担这样的责任。",
        "Glück does not ask the voice to carry such a responsibility."
      ],
      [
        "在《野鸢尾》的结尾，花的声音如喷泉般从生命中心涌出。它没有回答死亡为什么发生，也没有宣告自己已经痊愈。",
        "At the end of *The Wild Iris*, the flower’s voice wells up like a fountain from the center of life. It does not answer why death happened, nor does it announce that it has healed."
      ],
      [
        "我尤其喜欢她停在这里。",
        "I especially love that she stops here."
      ],
      [
        "因为声音能够抵达的地方，未必就是生命曾经失去的地方。",
        "Because the place a voice can reach is not necessarily the place where life was lost."
      ],
      [
        "**花终于能够说话了。**",
        "**The flower can finally speak.**"
      ],
      [
        "**至于它沉默时发生了什么，我们只能听见它后来的声音。**",
        "**As for what happened while it was silent, we can only hear the voice that came after.**"
      ]
    ]
  },
  {
    "date": "2023-12-10",
    "title": "From Dog to Slave",
    "slug": "from-dog-to-slave",
    "category": "Novel",
    "book": {
      "cover": "la_ciudad_y_los_perros.jpg",
      "title": "La ciudad y los perros (The Time of the Hero)",
      "author": "Mario Vargas Llosa",
      "language": "Spanish",
      "country": "Peru",
      "original": "Spanish",
      "lines": [
        "Novel · Spanish original, first published 1963",
        "Cadets at a Lima military academy learn to survive by humiliating each other, until one boy’s death is explained away."
      ]
    },
    "place": "于秘鲁利马\nLima, Peru",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "在莱昂西奥·普拉多军事学校，新生被叫作“狗”。",
        "At the Leoncio Prado Military Academy, new students are called “dogs.”"
      ],
      [
        "他们被迫爬行、吠叫，接受高年级学生的羞辱。只要熬过这段日子，便有资格命令下一批“狗”。",
        "They are forced to crawl and bark and to take the humiliations of the older boys. Once they get through this time, they earn the right to command the next batch of “dogs.”"
      ],
      [
        "**狗至少还有成为主人的可能。奴隶却没有。**",
        "**A dog at least has the chance of becoming a master. The slave does not.**"
      ],
      [
        "里卡多·阿拉纳被称为“奴隶”，不是因为他犯了什么错，而是因为他不擅长伤害别人。他不愿打架，不懂报复，只希望平安离开军校。",
        "Ricardo Arana is called “the Slave,” not because of anything he did wrong, but because he is not good at hurting others. He will not fight, does not know how to take revenge, and only hopes to leave the academy unharmed."
      ],
      [
        "可在这里，每个人都必须证明自己不再是狗，而最容易的办法，就是找到一个永远低于自己的人。",
        "But here everyone must prove he is no longer a dog, and the easiest way is to find someone who stays forever beneath him."
      ],
      [
        "于是，“奴隶”成了其他少年摆脱屈辱的凭据。他们嘲笑他的软弱，仿佛只要有人比自己更卑微，自己便已经成为男人。",
        "So “the Slave” becomes the proof by which the other boys shed their own humiliation. They mock his weakness, as if, so long as someone is lower than they are, they have already become men."
      ],
      [
        "后来，阿拉纳在军事演习中中弹身亡。学校试图将他的死亡作为意外处理。活着时，他不能决定别人如何对待自己；死去后，甚至不能决定自己的死亡如何被讲述。",
        "Later, Arana is shot dead during a military exercise, and the school tries to treat his death as an accident. While alive, he could not decide how others treated him; once dead, he cannot even decide how his death is told."
      ],
      [
        "我想，略萨真正写出的，并不是军校如何把少年训练成军人，而是一个社会如何教会受辱者继承施辱者的位置。",
        "I think what Vargas Llosa really writes is not how a military school trains boys into soldiers, but how a society teaches the humiliated to inherit the place of the humiliator."
      ],
      [
        "多年以后，那些少年或许早已忘记自己曾经怎样趴在地上。",
        "Years later, those boys have perhaps long forgotten how they once lay on the ground."
      ],
      [
        "**所有人都从狗长大成人。**",
        "**Everyone grows from dog into man.**"
      ],
      [
        "**只有奴隶，再也没有长大的机会。**",
        "**Only the Slave never gets the chance to grow up.**"
      ]
    ]
  },
  {
    "date": "2015-12-02",
    "title": "Between Law and Darkness",
    "slug": "between-law-and-darkness",
    "category": "Play",
    "book": {
      "cover": "13305951.jpg",
      "title": "Antigonick",
      "author": "Anne Carson",
      "language": "English",
      "country": "Canada",
      "original": "English",
      "lines": [
        "Play · A translation of Sophocles’ Antigone, first published 2012",
        "Carson’s Antigone, with a silent figure named Nick who measures the time."
      ]
    },
    "place": "于加拿大列治文\nRichmond, BC, Canada",
    "languages": [
      "Chinese",
      "English"
    ],
    "pairStanzas": [
      [
        [
          "克瑞翁说：城邦必须有法律。",
          "Creon says: a city must have law."
        ],
        [
          "νόμος，nomos。",
          "νόμος, nomos."
        ],
        [
          "一个如此端正的希腊词，",
          "Such an upright Greek word,"
        ],
        [
          "仿佛只要写在石头上，",
          "as if, once written on stone,"
        ],
        [
          "便能使人的意志",
          "it could give human will"
        ],
        [
          "获得大理石的寿命。",
          "the lifespan of marble."
        ]
      ],
      [
        [
          "安提戈涅没有反驳。",
          "Antigone does not argue back."
        ]
      ],
      [
        [
          "她只是要埋葬一个人。",
          "She only wants to bury someone."
        ]
      ],
      [
        [
          "不是英雄，",
          "Not a hero,"
        ],
        [
          "不是叛徒，",
          "not a traitor,"
        ],
        [
          "不是底比斯城门外",
          "not the last footnote to some war"
        ],
        [
          "某场战争的最后注脚。",
          "outside the gates of Thebes."
        ]
      ],
      [
        [
          "是她的兄弟。",
          "He is her brother."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "索福克勒斯让她说起",
          "Sophocles has her speak of"
        ],
        [
          "那些不成文、不可动摇的神圣法则：",
          "those unwritten, unshakable laws of the gods:"
        ]
      ],
      [
        [
          "ἄγραπτα κἀσφαλῆ θεῶν νόμιμα。",
          "ἄγραπτα κἀσφαλῆ θεῶν νόμιμα."
        ]
      ],
      [
        [
          "而罗马人后来会说：",
          "And the Romans would later say:"
        ]
      ],
      [
        [
          "lex iniusta non est lex——",
          "lex iniusta non est lex—"
        ],
        [
          "不义之法，便不成其为法。",
          "an unjust law is no law at all."
        ]
      ],
      [
        [
          "但安妮·卡森似乎不愿",
          "But Anne Carson seems unwilling"
        ],
        [
          "让事情如此容易。",
          "to make it so easy."
        ]
      ],
      [
        [
          "如果神法必然高于人法，",
          "If divine law must stand above human law,"
        ],
        [
          "悲剧便不过是一道",
          "tragedy is no more than an exam"
        ],
        [
          "答案早已写好的考题。",
          "whose answer was written in advance."
        ]
      ],
      [
        [
          "安提戈涅真正令人不安的，",
          "What is truly unsettling about Antigone"
        ],
        [
          "不是她知道什么是正义，",
          "is not that she knows what justice is,"
        ]
      ],
      [
        [
          "而是她必须亲手",
          "but that she must with her own hands"
        ],
        [
          "把自己的确信",
          "turn her own certainty"
        ],
        [
          "变成另一个人的死亡。",
          "into another person’s death."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "卡森在古老的悲剧里",
          "Into the ancient tragedy Carson places"
        ],
        [
          "放进一个叫 Nick 的人。",
          "a man called Nick."
        ]
      ],
      [
        [
          "他不说话。",
          "He does not speak."
        ]
      ],
      [
        [
          "他只测量。",
          "He only measures."
        ]
      ],
      [
        [
          "仿佛时间也需要一个工匠，",
          "As if time, too, needed a craftsman,"
        ],
        [
          "用绳索、刻度与沉默，",
          "who with cord, scale and silence"
        ],
        [
          "量出每个人",
          "measures how far each person is"
        ],
        [
          "离结局还有多远。",
          "from the end."
        ]
      ],
      [
        [
          "χρόνος，chronos，",
          "χρόνος, chronos,"
        ],
        [
          "流逝的时间。",
          "time that passes."
        ],
        [
          "καιρός，kairos，",
          "καιρός, kairos,"
        ],
        [
          "那个不可错过的时刻。",
          "the moment that cannot be missed."
        ]
      ],
      [
        [
          "安提戈涅拥有后者，",
          "Antigone has the latter,"
        ],
        [
          "却几乎没有前者。",
          "and almost none of the former."
        ]
      ],
      [
        [
          "她来得太早，",
          "She comes too early,"
        ],
        [
          "早于城邦的宽恕；",
          "before the city’s forgiveness;"
        ]
      ],
      [
        [
          "克瑞翁醒悟得太晚，",
          "Creon wakes too late,"
        ],
        [
          "晚于任何能够挽回的事情。",
          "later than anything that could still be mended."
        ]
      ],
      [
        [
          "希腊悲剧最残忍的地方，",
          "The cruelest thing about Greek tragedy"
        ],
        [
          "也许从来不是命运不可改变，",
          "is perhaps never that fate cannot be changed,"
        ]
      ],
      [
        [
          "而是每个人",
          "but that by the time each person"
        ],
        [
          "终于明白的时候，",
          "finally understands,"
        ],
        [
          "都已经错过了",
          "the moment to change it"
        ],
        [
          "能够改变它的时刻。",
          "has already been missed."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我想到拉丁语的 pietas。",
          "I think of the Latin pietas."
        ]
      ],
      [
        [
          "埃涅阿斯背负父亲，",
          "Aeneas carries his father"
        ],
        [
          "从燃烧的特洛伊离开。",
          "out of burning Troy."
        ]
      ],
      [
        [
          "他被称为 pius Aeneas，",
          "He is called pius Aeneas,"
        ],
        [
          "虔敬的埃涅阿斯。",
          "dutiful Aeneas."
        ]
      ],
      [
        [
          "而安提戈涅",
          "And what Antigone carries"
        ],
        [
          "背负的是一个不能被埋葬的兄弟。",
          "is a brother who may not be buried."
        ]
      ],
      [
        [
          "同样是对亲人的义务，",
          "The same duty to kin:"
        ],
        [
          "一个人因此成为帝国的祖先，",
          "one person becomes the ancestor of an empire,"
        ],
        [
          "另一个人因此成为城邦的罪犯。",
          "another becomes a criminal of the city."
        ]
      ],
      [
        [
          "历史喜欢前一种忠诚。",
          "History prefers the former loyalty."
        ]
      ],
      [
        [
          "它需要活下来的人",
          "It needs the ones who survive"
        ],
        [
          "建立城市，传递火种，",
          "to found cities, to pass on the fire,"
        ],
        [
          "把家族的名字",
          "to write the family name"
        ],
        [
          "写进未来。",
          "into the future."
        ]
      ],
      [
        [
          "但安提戈涅拒绝未来。",
          "But Antigone refuses the future."
        ]
      ],
      [
        [
          "她只要求",
          "She asks only"
        ],
        [
          "让死者回到泥土。",
          "that the dead return to the earth."
        ]
      ],
      [
        [
          "γῆ，gē。",
          "γῆ, gē."
        ]
      ],
      [
        [
          "大地。",
          "Earth."
        ]
      ],
      [
        [
          "那是她全部的政治。",
          "That is the whole of her politics."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "然而卡森没有把她",
          "Yet Carson does not carve her"
        ],
        [
          "雕刻成一尊",
          "into a statue"
        ],
        [
          "永远正确的少女。",
          "of a girl who is always right."
        ]
      ],
      [
        [
          "她的语言尖锐，",
          "Her language is sharp,"
        ],
        [
          "她的爱近乎固执。",
          "her love close to stubbornness."
        ]
      ],
      [
        [
          "她与克瑞翁互相说话，",
          "She and Creon talk to each other,"
        ],
        [
          "却仿佛站在两种",
          "yet as if standing in two grammars"
        ],
        [
          "无法相互翻译的语法里。",
          "that cannot be translated into one another."
        ]
      ],
      [
        [
          "一个说国家。",
          "One says state."
        ],
        [
          "一个说兄弟。",
          "One says brother."
        ],
        [
          "一个说秩序。",
          "One says order."
        ],
        [
          "一个说尸体。",
          "One says corpse."
        ]
      ],
      [
        [
          "他们都没有说出",
          "Neither says"
        ],
        [
          "另一个人",
          "the word the other"
        ],
        [
          "真正能够听懂的词。",
          "could truly understand."
        ]
      ],
      [
        [
          "于是悲剧发生。",
          "And so the tragedy happens."
        ]
      ],
      [
        [
          "不是因为无人开口，",
          "Not because no one speaks,"
        ],
        [
          "而是因为",
          "but because"
        ],
        [
          "所有人都在说话。",
          "everyone is speaking."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "亚里士多德称悲剧的转折为",
          "Aristotle calls the turn of a tragedy"
        ],
        [
          "περιπέτεια，peripeteia；",
          "περιπέτεια, peripeteia;"
        ],
        [
          "称认识为",
          "and recognition"
        ],
        [
          "ἀναγνώρισις，anagnōrisis。",
          "ἀναγνώρισις, anagnōrisis."
        ]
      ],
      [
        [
          "可是认识又能怎样？",
          "But what does recognition change?"
        ]
      ],
      [
        [
          "克瑞翁终于知道自己错了。",
          "Creon finally knows he was wrong."
        ]
      ],
      [
        [
          "知道得如此彻底，",
          "He knows it so thoroughly"
        ],
        [
          "以至于他余下的生命",
          "that the rest of his life"
        ],
        [
          "都必须与这个知识共处。",
          "must be lived alongside this knowledge."
        ]
      ],
      [
        [
          "Errare humanum est.",
          "Errare humanum est."
        ]
      ],
      [
        [
          "犯错是人的本性。",
          "To err is human."
        ]
      ],
      [
        [
          "然而希腊人比罗马人的格言",
          "Yet the Greeks are more cruel"
        ],
        [
          "更加残酷：",
          "than the Roman maxim:"
        ]
      ],
      [
        [
          "有些错误",
          "some errors"
        ],
        [
          "并不因为被认识",
          "are not pardoned"
        ],
        [
          "便获得赦免。",
          "merely because they are recognized."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我读《Antigonick》，",
          "Reading Antigonick,"
        ],
        [
          "越来越觉得 Nick",
          "I feel more and more that Nick"
        ],
        [
          "才是这部作品",
          "is the quietest witness"
        ],
        [
          "最安静的见证人。",
          "of this work."
        ]
      ],
      [
        [
          "他不审判克瑞翁，",
          "He does not judge Creon,"
        ],
        [
          "不赞美安提戈涅，",
          "does not praise Antigone,"
        ],
        [
          "不替诸神解释",
          "does not explain for the gods"
        ],
        [
          "为什么沉默。",
          "why they are silent."
        ]
      ],
      [
        [
          "他只是继续测量。",
          "He simply goes on measuring."
        ]
      ],
      [
        [
          "量一具尸体与泥土的距离，",
          "The distance between a corpse and the earth,"
        ],
        [
          "量一句命令与一场葬礼的距离，",
          "between a command and a funeral,"
        ],
        [
          "量一个父亲",
          "the time a father needs"
        ],
        [
          "从确信走向悔恨",
          "to travel from certainty"
        ],
        [
          "所需要的时间。",
          "to remorse."
        ]
      ],
      [
        [
          "而那时间",
          "And that time"
        ],
        [
          "恰好比一个儿子的生命",
          "happens to be a little longer"
        ],
        [
          "长了一点。",
          "than a son’s life."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "最后，我想起",
          "Finally, I remember"
        ],
        [
          "古希腊墓碑上常见的告别：",
          "the farewell common on ancient Greek gravestones:"
        ]
      ],
      [
        [
          "χαῖρε。",
          "χαῖρε."
        ]
      ],
      [
        [
          "Chaire.",
          "Chaire."
        ]
      ],
      [
        [
          "它既可以是问候，",
          "It can be a greeting,"
        ],
        [
          "也可以是永别。",
          "or it can be a last goodbye."
        ]
      ],
      [
        [
          "同一个词，",
          "The same word"
        ],
        [
          "用于迎接活人，",
          "used to welcome the living"
        ],
        [
          "也用于送走死者。",
          "also sends off the dead."
        ]
      ],
      [
        [
          "安提戈涅不过想",
          "Antigone only wanted"
        ],
        [
          "对自己的兄弟",
          "to say that word"
        ],
        [
          "说完这个词。",
          "to her own brother."
        ]
      ],
      [
        [
          "而整座底比斯，",
          "And all of Thebes"
        ],
        [
          "竟容不下",
          "could not make room"
        ],
        [
          "如此短暂的一声告别。",
          "for so brief a farewell."
        ]
      ]
    ]
  },
  {
    "date": "2016-12-03",
    "title": "A Man Who Does Not Repent",
    "slug": "a-man-who-does-not-repent",
    "category": "Novel",
    "book": {
      "cover": "disgrace.jpg",
      "title": "耻 (Disgrace)",
      "author": "库切 J. M. Coetzee",
      "language": "Chinese",
      "country": "South Africa",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1999 · Chinese translation by Feng Tao, People’s Literature Publishing House",
        "A disgraced literature professor in post-apartheid South Africa retreats to his daughter’s farm, where he learns what he cannot make right."
      ]
    },
    "place": "于加拿大蒙特利尔\nMontreal, Canada",
    "languages": ["Chinese", "English"],
    "prose": [
      ["大卫：",
       "David,"],
      ["我读完《耻》，合上书，第一个念头是你一点也没有变。",
       "I closed *Disgrace* and my first thought was that you haven’t changed at all."],
      ["你是个年过半百的文学教授，因为和一个女学生的关系丢了教职。后来你亲眼看着自己的女儿遭人施暴。小说里通常是这样安排的：接连几次羞辱落下来，人被打碎，再慢慢醒过来，带着迟到的清醒走进最后几页。我一路等着你醒。",
       "You are a literature professor past fifty who lost your post over a relationship with a student. Later you stood by while your daughter was attacked. Novels usually arrange it this way: humiliation after humiliation, the man broken, then slowly woken, walking into the last pages with a belated clarity. I waited the whole way for you to wake."],
      ["你没有。",
       "You didn’t."],
      ["听证会上，你肯受罚，却不肯演一场悔恨。职业和名誉你都可以放手，对自己的那套解释你不放。露西遭人强暴之后，你仍然没有想明白，自己当年是怎样凭着手里的权力闯进梅拉妮的生活。你痛苦，愤怒，帮不上忙，可你还是习惯用自己的话替别人安排体面。",
       "At the hearing you took the punishment but would not act out remorse. You could let go of the career and the name, but not of your own account of yourself. After Lucy was raped you still hadn’t worked out how you once used your power to break into Melanie’s life. You were hurt, angry, useless, and still in the habit of arranging other people’s dignity in your own words."],
      ["库切本可以给你一点安慰，让你把苦头吃够，账就算清了。他没有给。苦难教不会人什么，羞辱也不保证谁变得谦逊。一个人可以在疼痛里继续自负，失去一切之后，还是说不清自己失去的是什么。你就是这样的人，我读得很不舒服。",
       "Coetzee could have given you some comfort: suffer enough and the account is settled. He didn’t. Suffering teaches nothing by itself, and humiliation guarantees no humility. A man can stay vain inside his pain and, having lost everything, still be unable to say what he lost. You are that man, and I read you uneasily."],
      ["所以后半本书里那些狗，我才记得那么牢。",
       "Which is why I remember the dogs in the second half of the book so well."],
      ["你开始帮贝芙照料那些等着被安乐死的动物。你替它们搬尸体，陪它们走完最后一段。没有人看，没有什么需要辩护，也换不回你的任何地位。你甚至用不着相信自己正在变好。你只是在做。",
       "You began helping Bev with the animals waiting to be put down. You carried their bodies and sat with them to the end. No one watched, nothing needed defending, and none of it won back any standing. You didn’t even have to believe you were getting better. You just did it."],
      ["书的最后，你把那只越来越黏你的狗交给了贝芙。你本可以再留它一阵。你没有给自己找一个诗意的理由，也没有把放手说成牺牲。",
       "At the end you handed over to Bev the dog that had grown attached to you. You could have kept it a little longer. You gave yourself no poetic reason, and didn’t call the giving up a sacrifice."],
      ["我想库切是故意不让你醒的。你一旦醒来，一切苦都有了用处：梅拉妮的沉默，露西的创伤，那些狗的死，全成了你完成自我救赎要付的价钱。他不肯让别人的痛替你的成长做事。",
       "I think Coetzee kept you asleep on purpose. The moment you wake, every pain finds a use: Melanie’s silence, Lucy’s trauma, the dogs’ deaths, all of it the price you pay to redeem yourself. He won’t let other people’s pain work for your growth."],
      ["你没有得到宽恕，大概也没学会什么叫悔恨。你只是开始照看几条比你更无助的命。",
       "You were not forgiven, and you probably never learned what remorse is. You only started looking after a few lives more helpless than yours."],
      ["那只狗死后，你还是原来的大卫。第二天要是又有一只狗需要人抱着走向死亡，你多半还会在那里。",
       "After that dog dies you will still be the same David. If another dog needs someone to carry it toward death the next day, you will most likely still be there."]
    ]
  },
  {
    "date": "2023-03-10",
    "title": "When “We” Becomes Past Tense",
    "slug": "ministry-of-pain",
    "category": "Novel",
    "book": {
      "cover": "ministarstvo_boli.jpg",
      "title": "Ministarstvo boli",
      "author": "Dubravka Ugrešić",
      "language": "Serbian",
      "country": "Croatia",
      "original": "Croatian",
      "lines": [
        "Novel · Croatian original, first published 2004 · Fabrika knjiga edition",
        "A Yugoslav-born lecturer in Amsterdam asks her exiled students to remember a country that no longer exists."
      ]
    },
    "place": "于日本东京\nTokyo, Japan",
    "languages": ["Chinese", "English"],
    "prose": [
      ["坦娅：",
       "Tanja,"],
      ["我是在你那间阿姆斯特丹的教室里认识你的学生的。他们一个个努力回忆一种已经不存在的生活：南斯拉夫时代的糖果、香烟、电视节目、流行歌曲，那些曾经随处可见、如今不知该去哪里寻找的东西。他们说着彼此听得懂的语言，却已经不属于同一个国家。",
       "I met your students in your classroom in Amsterdam. One by one they work at remembering a life that no longer exists: the sweets, cigarettes, television programs and pop songs of the Yugoslav years, things that were once everywhere and that nobody now knows where to look for. They speak a language they all understand, and they no longer belong to the same country."],
      ["你把这些回忆一件件收集起来，像是要把一个消失的国家重新装进袋子里。读《痛苦部》的时候，最让我难过的是这些人开口说“我们”时，依然那样自然，南斯拉夫解体倒在其次。",
       "You gather these memories one by one, as if you were putting a vanished country back into a bag. What saddened me most in *The Ministry of Pain* is how naturally these people still say “we”; the breakup of Yugoslavia comes second to that."],
      ["1991年以后，战争与解体把原本住在一起的人重新划成克罗地亚人、塞尔维亚人、波斯尼亚人。那门曾经叫塞尔维亚—克罗地亚语的语言，慢慢成了各个民族身份的标记。差异早就存在，只是战争第一次给了它们这样重的政治分量。",
       "After 1991, the war and the breakup sorted people who had lived together into Croats, Serbs and Bosnians. The language once called Serbo-Croatian slowly became a marker of separate national identities. The differences had always been there; the war gave them, for the first time, so much political weight."],
      ["同一种面包可以有不同的名字，死亡却仍然叫 *smrt*。乌格雷希奇的讽刺最锋利之处就在这里：人们可以改词汇、改口音、改拼写，来证明自己不再属于彼此，却没有办法靠改语言，让共同经历过的历史没有发生。",
       "The same bread can have different names, yet death is still called *smrt*. Here Ugrešić’s irony is at its sharpest: people can change their vocabulary, their accent, their spelling to prove they no longer belong to one another, and still they cannot change a language so that the history they lived through together never happened."],
      ["可你的课堂也不是一座无辜的记忆博物馆，坦娅。你请学生回忆过去，好像共同的童年能暂时弥合战争留下的裂口。但旧日的商品和歌曲属于所有人，战争里的伤害，却不见得每个人都用同一种方式记住。一个人的怀旧，可能正是另一个人想逃离的过去。",
       "But your classroom is no innocent museum of memory either, Tanja. You ask your students to recall the past, as though a shared childhood could for a while close the gap the war has left. Those old goods and songs belong to everyone, while the harm of the war is not necessarily remembered by everyone in the same way. One person’s nostalgia may be exactly the past another is trying to leave behind."],
      ["后来你听说自己的教法可能被人举报，便开始怀疑学生。亲密的课堂渐渐冷了下来，变得严格，满是考核与纪律。你曾把这些年轻人当作“我们的人”，如今却不知道谁值得信任。读到这里，我想战争留下的最长久的破坏，也许不是让人永远彼此憎恨，而是让人再也不能毫无保留地相信彼此。",
       "Then you hear that your way of teaching may be reported, and you begin to suspect your students. The close classroom turns cold and strict, full of assessment and discipline. You used to think of these young people as “our people”; now you cannot say whom to trust. Reading this, I thought that the longest-lasting damage of war may not be that people hate one another forever, but that they can never again trust one another without reservation."],
      ["你想在教室里重建一个小小的南斯拉夫，却在恐惧中重复了那个国家瓦解时的猜疑。你自己并非没有看见这种矛盾，只是同样没有办法从里面脱身。",
       "You wanted to rebuild a small Yugoslavia in your classroom, and in your fear you repeated the suspicion with which that country came apart. You did see the contradiction; you simply could not get out of it either."],
      ["所以这本小说的标题显得格外残忍。“痛苦部”最初指的是学生在荷兰制作情趣用品的工作场所，后来成了整部小说的比喻。流亡者的痛苦可以被讲述、研究、分类，成为课堂上的材料，却没有因此得到安置。你想理解学生的创伤，到头来发现，自己可能又一次支配了他们的记忆与身体。",
       "That is why the title of the novel feels so cruel. “The Ministry of Pain” first names the workplace where your students make sex products in the Netherlands, and later becomes a figure for the whole book. The pain of exiles can be told, studied and classified, and made into classroom material, and it is still not settled anywhere. You tried to understand your students’ trauma, and in the end you found that you might be taking control of their memories and bodies once more."],
      ["旧南斯拉夫有它自己的意识形态、政治权力和被压抑的矛盾，乌格雷希奇写它时，一点没有天堂的色彩。她哀悼的是一个日常世界：在那里，人不必解释自己的语言、名字和来历，就能被别人理解。这和任何完美的国家制度都无关。",
       "The old Yugoslavia had its own ideology, political power and suppressed contradictions, and Ugrešić gives your lost homeland no touch of paradise. She mourns an everyday world in which a person could be understood without explaining their language, their name or where they came from. That has nothing to do with any perfect system of state."],
      ["因此我觉得，“我们”这个词比小说里任何一个地名都重要。国家可以解体，边界可以重画，护照可以更换，但一个人很难决定，从哪一天起不再把某些陌生人当作自己人。",
       "So I think “we” matters more than any place name in the novel. A state can break up, borders can be redrawn, passports can be replaced, but a person can hardly decide on which day to stop counting certain strangers as their own."],
      ["你的课最后结束了。学生们各自去找新的生活，你也没有办法把他们永远留在记忆里。他们仍然说着彼此听得懂的话。只是再有人说“我们”时，没有人能确定，这个词包括谁。",
       "Your class comes to an end. The students go off to find new lives, and you cannot keep them forever in your memory. They still speak words they can all understand. Only when someone says “we” again, nobody can be sure whom the word includes."]
    ]
  },
  {
    "date": "2017-09-30",
    "title": "One Woman’s Body, Three Children’s Names",
    "slug": "stay-with-me",
    "category": "Novel",
    "book": {
      "cover": "stay_with_me.jpg",
      "title": "Stay with Me",
      "author": "Ayobami Adebayo",
      "language": "English",
      "country": "Nigeria",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2017",
        "In 1980s Nigeria, Yejide cannot conceive, and her husband’s family, a false pregnancy and three children’s names turn her body into the place where a whole family’s hopes are tested."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["“留在我身边。”",
       "“Stay with me.”"],
      ["这是 Rotimi 这个名字在约鲁巴语里的意思。在约鲁巴人的传统里，名字除了用来辨认一个人，还用来向命运提出愿望。有些名字表达感激，有些寄托希望，还有些近乎哀求：请这个孩子不要离开。",
       "That is what the name Rotimi means in Yoruba. In Yoruba tradition a name does more than identify a person; it makes a wish to fate. Some names express gratitude, some carry hope, and some come close to pleading: please let this child not leave."],
      ["阿约巴米·阿德巴约的《Stay with Me》由名字与身体共同写成。名字承载着人们对生命的期待，Yejide 的身体则一次次付出这些期待落空的代价。",
       "Ayobami Adebayo’s *Stay with Me* is written jointly by names and by a body. Names carry people’s expectations of life, and Yejide’s body pays, again and again, the price of those expectations falling through."],
      ["先从最初说起：她无法怀孕。",
       "Begin at the beginning: she cannot get pregnant."],
      ["1980年代的尼日利亚，Yejide 受过教育，经营着自己的美发事业，丈夫家族却不断要求她生育。长辈带她寻求各种治疗与仪式，最后为丈夫 Akin 安排了第二位妻子。一个女人的子宫，成了整个家族都可以讨论、干预和责备的公共事务。",
       "In 1980s Nigeria, Yejide is educated and runs her own hair salon, yet her husband’s family keeps demanding children. The elders take her to all kinds of treatments and rituals, and in the end arrange a second wife for her husband, Akin. A woman’s womb becomes a public matter that the whole family may discuss, interfere with and blame."],
      ["一次宗教仪式之后，她相信自己怀孕了。腹部渐渐隆起，身体出现种种怀孕的迹象。医学检查找不到胎儿，她仍然坚信自己就要成为母亲。",
       "After a religious ritual, she comes to believe she is pregnant. Her belly slowly swells and her body shows all the signs of pregnancy. The medical tests find no fetus, and she is still certain she is about to become a mother."],
      ["这是小说里最令人不安的情节。阿德巴约没有把它写成愚昧或自我欺骗。Yejide 的身体比语言更早暴露了她承受的压力：她太渴望怀孕，又太害怕无法怀孕，愿望不再停留在思想里，开始改变她感知自己身体的方式。她的身体像是在替整个家族完成一场怀孕，却没有一个真实存在的孩子。",
       "It is the most disturbing part of the novel, and Adebayo does not write it as ignorance or self-deception. Yejide’s body exposes the pressure she is under sooner than her words do. She wants to be pregnant so badly, and fears so much being unable to, that the wish no longer stays in thought and begins to change how she perceives her own body. Her body seems to carry out a pregnancy on behalf of the whole family, with no child who actually exists."],
      ["小说里的女性身体处在一个矛盾的位置。所有人都要求 Yejide 相信自己的身体能够创造生命，却没有人承认，它也会拒绝、失败，不受意志支配。她甚至不能单纯地拥有自己的痛苦：没有怀孕，是妻子的失败；怀孕的希望，又成了家族的胜利。身体的每一种变化，都由别人赋予意义。",
       "The female body in the novel is caught in a contradiction. Everyone requires Yejide to believe her body can create life, yet no one admits that it may also refuse, fail, and escape the control of her will. She cannot even simply own her pain: not being pregnant is the wife’s failure, and the hope of pregnancy becomes the family’s victory. Every change in her body is given its meaning by someone else."],
      ["Akin 隐瞒了自己的生育问题，这让不平等更加残酷。他无法面对自己的困境，便让妻子多年承担不孕的羞耻，还把弟弟 Dotun 卷进婚姻。Yejide 以为自己在同身体作斗争，其实她也在同丈夫精心维持的谎言作斗争。",
       "The fertility problem Akin conceals makes the inequality more cruel. Unable to face his own predicament, he lets his wife bear the shame of infertility for years and even draws his younger brother Dotun into the marriage. Yejide thinks she is struggling against her body; she is also struggling against a lie her husband has carefully maintained."],
      ["后来孩子出生了。第一个女儿叫 Olamide，名字里是对幸福到来的期盼。她夭折了。随后出生的儿子 Sesan，也没能长大。",
       "Later, the children are born. The first daughter is named Olamide, a name that holds the hope that happiness has arrived. She dies in infancy. The son born next, Sesan, does not grow up either."],
      ["从前，Yejide 不停地寻找怀孕的征兆，渴望腹部隆起，渴望感到生命正在形成。现在她能怀孕，能分娩，却发现生下孩子并不等于留得住孩子。阿德巴约写出了母职里一种难以言说的残酷：社会把生育描绘成女性身体的成就，很少谈论分娩完成之后，母亲仍可能面对的彻底无能为力。",
       "Before, Yejide kept looking for signs of pregnancy, longing for her belly to swell, longing to feel life forming. Now she can conceive and give birth, only to find that giving birth does not mean being able to keep the child. Adebayo writes a cruelty in the experience of motherhood that is hard to put into words: society portrays childbearing as an achievement of the female body, but rarely speaks of the utter helplessness a mother may still face once her body has completed the birth."],
      ["Yejide 的孩子患有镰状细胞病。那些看似突如其来的死亡，来自遗传与疾病，并非只是难以捉摸的命运。她能抱着孩子，看着他们的呼吸，在他们生病时竭尽全力照料，却无法凭借母亲的爱，改变血液里的遗传事实。",
       "Yejide’s children have sickle cell disease. Those deaths that seem to come out of nowhere come from heredity and illness, and not simply from unknowable fate. She can hold her children, watch their breathing, and care for them with everything she has when they fall ill, yet she cannot change, through a mother’s love, the genetic fact in their blood."],
      ["这与假孕形成令人心碎的对照。那时，她的身体表现出怀孕的迹象，却没有胎儿；如今，孩子真实地存在，有名字，有体温，有自己的生命，仍可能从她怀中消失。她曾经无法相信医学检查否定了怀孕，后来又难以相信自己的孩子能平安长大。身体不再是希望所在，渐渐成了恐惧的来源。",
       "This forms a heartbreaking contrast with the false pregnancy. Then, her body showed the signs of pregnancy without a fetus; now the children really exist, with names, body warmth and lives of their own, and can still vanish from her arms. She once could not believe the medical tests that denied her pregnancy, and later finds it hard to believe her child can grow up safely. The body is no longer where hope lives; it gradually becomes a source of fear."],
      ["第三个孩子，取名 Rotimi。",
       "The third child is named Rotimi."],
      ["Olamide 的名字还寄托着对美好生活的期待，Rotimi 已不再向命运索要幸福、财富或荣耀，也不再要求孩子证明婚姻的完整。一个曾经急于成为母亲的女人，只剩下最简单、也最无法保证的愿望：让孩子活着。",
       "Olamide’s name still carried the hope for a good life. Rotimi no longer asks fate for happiness, wealth or glory, and does not even ask the child to prove the marriage whole. A woman who was once desperate to become a mother is left with the simplest and least guaranteeable wish: let the child live."],
      ["三个名字的递进，记录了 Yejide 身体经验的变化。起初，她渴望身体孕育生命；后来，她希望身体保护生命；最后，她只能接受，生命来自自己的身体，也不会因此永远属于自己。",
       "The progression of the names records the change in Yejide’s bodily experience. At first she longed for her body to bear life; later she hoped it could protect life; at last she has to accept that life does not belong to you forever just because it came from your body."],
      ["书名 *Stay with Me* 的含义也一路在变。起先，它是妻子对丈夫的请求；接着，成了家族维系婚姻与血脉的执念；最后，是母亲对孩子的恳求。阿德巴约没有让这句恳求马上得到回应。Yejide 接连丧子，陷入深重的悲伤，难以相信 Rotimi 真的能活下来。母女之间漫长的分离，使这个名字一直悬着。",
       "The meaning of the title, *Stay with Me*, shifts along the way. First it is a wife’s plea to her husband; then the family’s obsession with holding the marriage and bloodline together; finally a mother’s plea to her child. Adebayo does not let the plea be answered at once. Yejide, sunk in deep grief by the loss of one child after another, can hardly believe Rotimi can really survive. The long separation between mother and daughter leaves the name hanging."],
      ["小说结尾，Yejide 与女儿重逢。",
       "At the end of the novel, Yejide is reunited with her daughter."],
      ["这场重逢没有让命运补偿她。Olamide 和 Sesan 不会回来，假孕时承受的羞辱不会消失，婚姻里的欺骗也不会因为女儿活着就变得可以原谅。但她终于能重新面对那个曾让她恐惧的事实：一个孩子真实地存在着，不为证明她配做妻子，也不为延续某个家族的姓氏，只是一个独立的生命。",
       "The reunion does not mean fate has compensated her. Olamide and Sesan will not come back, the humiliation she bore during the false pregnancy will not disappear, and the deceit in the marriage does not become forgivable because her daughter survived. But she can finally face again the fact that once filled her with fear: a child really exists, not to prove she deserves to be a wife, nor to continue some family’s name, but simply as an independent life."],
      ["小说开始时，所有人都在等 Yejide 的身体给出答案：是否怀孕，能否生育，能否为丈夫留下后代。到了最后，她不必再用身体回答任何人。",
       "At the beginning of the novel, everyone is waiting for Yejide’s body to give an answer: whether she is pregnant, whether she can bear children, whether she can leave her husband an heir. By the end, she no longer needs to answer anyone with her body."],
      ["Olamide，Sesan，Rotimi。前两个名字，留在了一位母亲的身体记忆里。最后一个，她终于能亲口呼唤，并听见有人回答。",
       "Olamide, Sesan, Rotimi. The first two names remain in a mother’s bodily memory. The last, she can finally call aloud, and hear someone answer."]
    ]
  },
  {
    "date": "2015-02-02",
    "title": "Choosing Not to Repeat the Harm",
    "slug": "choosing-not-to-repeat-the-harm",
    "category": "Novel",
    "book": {
      "cover": "wuthering_heights.jpg",
      "title": "Wuthering Heights",
      "author": "Emily Brontë",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1847",
        "On the Yorkshire moors, an orphan from Liverpool and the Earnshaw daughter he loves, and the harm that passes to the next generation."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直觉得，《呼啸山庄》最令人不安的地方，是 Emily Brontë 从来没有试图让爱情变得美好。约克郡荒原上的狂风、潮湿的石墙、荒凉的山丘，以及两座彼此对望的庄园，构成了一个几乎与外部世界隔绝的空间。但这片看似远离文明的土地，实际上从未脱离英国社会的阶级秩序，甚至与大英帝国的殖民历史存在隐秘的联系。",
       "I have always felt that the most unsettling thing about *Wuthering Heights* is that Emily Brontë never tries to make love beautiful. The wind over the Yorkshire moors, the damp stone walls, the bleak hills, and two houses facing each other make up a space almost cut off from the outside world. But this land, which seems far from civilization, never escapes the class order of English society, and is even secretly tied to the colonial history of the British Empire."],
      ["小说主要发生在18世纪末至19世纪初，正值英国的商业扩张、工业化与大西洋奴隶贸易交织的时代。呼啸山庄与画眉田庄不仅是两处住所，更代表着土地、继承权与社会身份所构成的权力结构。在这里，一个人的价值往往不是由品格决定，而是由姓氏、出身、财产，以及是否被承认为家庭成员所决定。",
       "The novel takes place mainly between the end of the eighteenth century and the beginning of the nineteenth, an age in which Britain’s commercial expansion, industrialization and the Atlantic slave trade were intertwined. Wuthering Heights and Thrushcross Grange are not just two dwellings but a power structure built from land, inheritance and social standing. Here a person’s worth is often decided not by character but by surname, origin, property, and whether one is recognized as a member of the family."],
      ["希斯克利夫的身世尤其值得玩味。他并非出生于约克郡，而是被老恩肖从利物浦的街头带回。18世纪的利物浦是英国跨大西洋奴隶贸易的重要港口，来自非洲、加勒比地区、爱尔兰及其他地方的人群与帝国贸易在这里交汇。小说反复强调希斯克利夫深色的外貌、陌生的语言和无法确认的血统，却始终没有揭示他的真实来历。",
       "Heathcliff’s origins are especially worth pondering. He was not born in Yorkshire but brought back by old Mr. Earnshaw from the streets of Liverpool. In the eighteenth century Liverpool was a major port of Britain’s transatlantic slave trade, where people from Africa, the Caribbean, Ireland and elsewhere met imperial commerce. The novel repeatedly stresses Heathcliff’s dark appearance, his strange speech and his unverifiable blood, yet never reveals where he really came from."],
      ["我觉得这种身份上的空白并非无关紧要。希斯克利夫不仅是一个贫穷的弃儿，更是一个无法被英国乡村社会轻易归类的外来者。他可能与殖民贸易或其他移民历史有关，但小说拒绝给出确定答案。他被带进一个家庭，却从未真正获得平等的归属；被赋予名字，却没有能够证明自身来历的家族历史。",
       "I think this blank in his identity is not insignificant. Heathcliff is not only a poor foundling but an outsider that English rural society cannot easily classify. He may be connected to the colonial trade or to other histories of migration, but the novel refuses to give a definite answer. He is brought into a family but never truly gains equal belonging; he is given a name but no family history that can prove where he is from."],
      ["这种排斥不仅来自贫穷，也来自人们对陌生血统和社会身份的恐惧。老恩肖的庇护可以暂时保护他，但无法改变家庭内部的等级。老恩肖死后，辛德雷迅速将他降为仆役，剥夺教育，让他从一个可能成为家庭成员的孩子，变成依附于土地所有者的劳动力。",
       "The exclusion comes not only from poverty but from people’s fear of unfamiliar blood and social identity. Old Mr. Earnshaw’s protection can shield him for a time, but cannot change the hierarchy inside the family. After Mr. Earnshaw dies, Hindley quickly reduces him to a servant and deprives him of education, turning a child who might have become part of the family into labor dependent on the landowner."],
      ["而凯瑟琳与希斯克利夫的爱情，恰恰发生在这种不平等之中。两个人曾在荒原上奔跑，似乎可以暂时忘记姓氏、财产与社会身份。但当凯瑟琳进入画眉田庄，接触到林敦家的礼仪、服饰和生活方式之后，她逐渐意识到，爱情并不能替代阶级地位。",
       "And the love between Catherine and Heathcliff takes place precisely within this inequality. The two once ran across the moors and could seem, for a while, to forget surnames, property and social standing. But once Catherine enters Thrushcross Grange and encounters the manners, clothes and way of life of the Lintons, she gradually realizes that love cannot replace class position."],
      ["凯瑟琳的悲剧，不是她不够爱希斯克利夫，而是她无法想象一种既能保有这份爱、又不必放弃社会地位的生活。她认为嫁给希斯克利夫会降低自己的身份，却又觉得两人在本质上无法分离。阶级秩序已经深入到她理解爱情与自我的方式之中。",
       "Catherine’s tragedy is not that she does not love Heathcliff enough, but that she cannot imagine a life in which she keeps that love without giving up her social position. She thinks marrying Heathcliff would degrade her, yet feels the two are in essence inseparable. The class order has sunk into the very way she understands love and herself."],
      ["但希斯克利夫同样不是一个值得浪漫化的受害者。他后来通过来历不明的财富、债务和财产控制，逐步夺取两座庄园，并将自己曾经承受的羞辱施加到下一代身上。",
       "But Heathcliff is likewise not a victim to be romanticized. Later, through wealth of unknown origin, debts and control of property, he gradually takes both estates and inflicts the humiliation he once suffered on the next generation."],
      ["这里最令我不安的是，他没有推翻那个排斥自己的社会秩序，而是学会使用同样的规则，成为新的支配者。如果从殖民与阶级压迫的角度阅读，他的复仇甚至呈现出一种权力关系的倒转：曾经被视为外来者、被剥夺身份的人，最终通过占有财产和控制他人的生活，获得了原本拒绝接纳他的社会所认可的权力。",
       "What unsettles me most here is that he does not overthrow the social order that excluded him but learns to use the same rules and becomes the new master. Read through colonialism and class oppression, his revenge even looks like an inversion of power: the one once seen as an outsider and stripped of identity ends up, by owning property and controlling other people’s lives, with the kind of power recognized by the very society that refused to accept him."],
      ["这让我想到，压迫最顽固的地方，未必是它始终由同一群人掌握，而是即使受害者获得了权力，也可能继续相信支配与占有才是尊严的证明。",
       "This makes me think that the most stubborn thing about oppression is not necessarily that it is always held by the same group, but that even when victims gain power they may go on believing that domination and possession are the proof of dignity."],
      ["然而，这部小说最精妙的地方，还在于我们从来没有真正直接接触过这些人物的故事。",
       "Yet what is most ingenious about the novel is that we never actually come into direct contact with these characters’ stories."],
      ["整个故事由洛克伍德记录，而最重要的叙述者却是女管家耐莉。她熟悉两个家族的秘密，却并不是置身事外的观察者。她拥有自己的道德判断、阶级偏见和情感立场，有时甚至直接影响悲剧的发展。",
       "The whole story is recorded by Lockwood, but the most important narrator is the housekeeper Nelly. She knows the secrets of both families, yet is not a detached observer. She has her own moral judgments, class prejudices and emotional loyalties, and sometimes directly influences the course of the tragedy."],
      ["当凯瑟琳向耐莉解释自己为何选择嫁给埃德加时，希斯克利夫只听见了她认为嫁给自己有失身份的部分，便愤然离开。耐莉知道他曾在场，却没有及时阻止这场误解。",
       "When Catherine explains to Nelly why she has chosen to marry Edgar, Heathcliff hears only the part where she says that marrying him would degrade her, and leaves in anger. Nelly knows he was there, yet does not stop the misunderstanding in time."],
      ["耐莉究竟是在讲述一场她亲眼见证的悲剧，还是在将一场自己也参与促成的悲剧，整理成一个关于他人性格缺陷的故事？",
       "Is Nelly telling a tragedy she witnessed, or arranging a tragedy she helped bring about into a story about other people’s character flaws?"],
      ["我尤其在意耐莉所处的阶级位置。她是仆人，却长期生活在地主家庭内部；她没有主人的财产权力，却拥有解释主人行为的叙事权力。她赞赏体面、秩序与自我约束，对凯瑟琳的任性和希斯克利夫的激烈情感则经常流露出不满。",
       "I pay particular attention to Nelly’s class position. She is a servant who has lived long inside a landowning family; she has none of her masters’ property power, but she has the narrative power to interpret their behavior. She admires decency, order and self-restraint, and often shows displeasure at Catherine’s willfulness and Heathcliff’s intense emotions."],
      ["这种立场使她既能看见上层家庭的虚伪，也可能不自觉地维护它们的价值观。她对希斯克利夫的描述，是否也延续了英国社会将陌生外来者视为粗野、危险和难以理解之人的习惯？",
       "This position lets her see the hypocrisy of the upper-class families and may also lead her to defend their values unconsciously. Does her description of Heathcliff also continue English society’s habit of seeing unfamiliar outsiders as crude, dangerous and hard to understand?"],
      ["不可靠的叙述者最值得警惕的地方，往往不是故意隐瞒事实，而是真诚地相信自己的判断就是事实。而洛克伍德这个不断误读荒原生活的外来者，又为耐莉的故事增加了一层过滤。",
       "What is most worth guarding against in an unreliable narrator is often not deliberate concealment but sincerely believing that her judgment is the fact. And Lockwood, an outsider who keeps misreading life on the moors, adds another layer of filtering to Nelly’s story."],
      ["我们所认识的希斯克利夫，始终是通过别人的语言被塑造出来的。一个身世不明、无法为自己提供完整历史的人，最终连自己的故事都主要由那些曾经接纳、排斥或畏惧他的人讲述。",
       "The Heathcliff we know is always shaped through other people’s language. A person of unknown origin who cannot supply a full history of himself ends up with even his own story told mainly by those who once took him in, shut him out or feared him."],
      ["这也使《呼啸山庄》的殖民隐喻更加耐人寻味：被视为异类的人不仅难以决定自己的社会身份，甚至可能失去解释自身经历的权力。",
       "This makes the colonial metaphor in *Wuthering Heights* more intriguing: a person seen as other not only struggles to decide his own social identity but may lose the power to interpret his own experience."],
      ["但真正让我觉得《呼啸山庄》超越了一部爱情悲剧的，是第二代人的故事。",
       "But what really makes me feel *Wuthering Heights* goes beyond a love tragedy is the story of the second generation."],
      ["年轻的凯瑟琳与哈里顿几乎继承了上一代所有的伤害。哈里顿本应是呼啸山庄的继承人，却被希斯克利夫故意剥夺教育，养成粗鲁、羞怯而识字能力有限的青年；年轻的凯瑟琳虽然受过良好教育，却被迫困在呼啸山庄，失去自由与财产。",
       "Young Catherine and Hareton inherit almost all the harm of the previous generation. Hareton should have been the heir to Wuthering Heights, but Heathcliff deliberately deprives him of education, raising him as a rough, shy young man who can barely read; young Catherine, though well educated, is forced to stay trapped at Wuthering Heights, losing her freedom and her property."],
      ["起初，年轻的凯瑟琳嘲笑哈里顿的无知，就像当年辛德雷羞辱希斯克利夫一样。阶级偏见甚至不需要恶意就能延续，一个曾经受到伤害的人，也可能不经意地使用同样的方式伤害别人。",
       "At first young Catherine mocks Hareton’s ignorance, just as Hindley once humiliated Heathcliff. Class prejudice can continue without even needing malice; a person who has been hurt may carelessly use the same means to hurt someone else."],
      ["但这一次，故事没有重演。",
       "But this time, the story does not repeat itself."],
      ["年轻的凯瑟琳开始教哈里顿读书，两个人从误解与敌意中逐渐建立起尊重。这个看似平凡的细节，在我看来比第一代所有激烈的爱情宣言都更加重要。希斯克利夫通过剥夺教育维持权力，而凯瑟琳恰恰通过分享知识，开始修复这种伤害。",
       "Young Catherine begins to teach Hareton to read, and from misunderstanding and hostility the two gradually build respect. This seemingly ordinary detail seems to me more important than all the fierce declarations of love of the first generation. Heathcliff maintains power by withholding education, and Catherine begins to repair that harm precisely by sharing knowledge."],
      ["第一代试图通过占有对方来证明爱情，第二代却通过帮助对方成长来建立爱情。前者在既有的阶级秩序中相互伤害，后者则尝试放下身份上的优越感，重新认识彼此。",
       "The first generation tries to prove love by possessing the other; the second builds love by helping the other grow. The former hurt each other within the existing class order; the latter try to put down their sense of superior status and get to know each other anew."],
      ["当然，这种和解也有其局限。年轻的凯瑟琳与哈里顿最终能够建立新的生活，部分原因仍然是他们拥有继承财产的资格。小说并没有真正消除阶级制度，也没有为所有像希斯克利夫一样的外来者提供出路。第二代的幸福，依然发生在英国乡村地主阶层的内部。",
       "Of course, this reconciliation has its limits. Young Catherine and Hareton are able to build a new life partly because they are still entitled to inherit property. The novel does not truly abolish the class system, nor does it offer a way out for all outsiders like Heathcliff. The second generation’s happiness still takes place inside England’s rural landowning class."],
      ["而耐莉对这种结局明显抱有好感，也让我们不得不怀疑：她所赞美的和解，是否同样因为它恢复了她一直推崇的家庭秩序？",
       "And Nelly’s evident approval of this ending makes us wonder: is the reconciliation she praises also praised because it restores the family order she has always upheld?"],
      ["不过，这并不抹去第二代关系中真实发生的改变。我尤其喜欢 Brontë 把这种转折写得如此不浪漫：不是狂风中的誓言，不是生死相随的执念，而是一个人耐心地教另一个人认字，另一个人愿意放下自尊，重新学习。",
       "Still, this does not erase the change that really happens in the second generation’s relationship. I especially like how unromantically Brontë writes this turn: not vows in a gale, not an obsession of following each other through life and death, but one person patiently teaching another to read, and the other willing to put down his pride and learn again."],
      ["《呼啸山庄》最深刻的地方，或许是它让阶级、种族化的排斥与爱情中的占有欲呈现出相似的逻辑：人们试图通过定义、控制和支配他人，来确认自己的身份与价值。",
       "The deepest thing about *Wuthering Heights* may be that it makes class, racialized exclusion and possessiveness in love show a similar logic: people try to confirm their own identity and worth by defining, controlling and dominating others."],
      ["希斯克利夫的悲剧不仅在于他遭受了排斥，更在于他最终无法想象一种不依靠支配他人来证明自身尊严的生活。而第二代的转折，则提供了一种有限却珍贵的可能：不再把过去承受的羞辱，作为继续伤害别人的理由。",
       "Heathcliff’s tragedy lies not only in being excluded but in finally being unable to imagine a life that does not prove one’s dignity by dominating others. The second generation’s turn offers a limited but precious possibility: no longer treating past humiliation as a reason to keep hurting others."],
      ["真正的反抗，不是夺回权力后将曾经受到的伤害施加给别人，而是在自己拥有伤害他人的能力时，选择不再重复。",
       "Real resistance is not regaining power and then inflicting on others the harm one once suffered, but choosing not to repeat it when one has the ability to hurt others."],
      ["有些悲剧无法挽回，但它们未必需要被下一代继承。只是当我们合上小说时，仍然需要记得：这个关于仇恨终结的故事，最终也是由一个并不完全可靠的人讲述给我们的。",
       "Some tragedies cannot be undone, but they need not be inherited by the next generation. Only, when we close the novel, we should still remember that this story of hatred coming to an end was also told to us by someone not entirely reliable."]
    ]
  },
  {
    "date": "2024-12-31",
    "title": "Why Is Letting Go Harder Than Taking Control?",
    "slug": "why-letting-go-is-harder",
    "category": "Self-help",
    "book": {
      "cover": "let_them_theory.jpg",
      "title": "The Let Them Theory",
      "author": "Mel Robbins",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Self-help · English original",
        "A simple principle for letting other people be, and putting your energy back into what you can decide."
      ]
    },
    "languages": ["Chinese", "English"],
    "prose": [
      ["我发现自己越来越难以忍受事情不按照预期发展。",
       "I find it harder and harder to bear things not going as expected."],
      ["并不是什么严重的错误。有时候只是同事没有及时回复消息，某项任务的进度比计划慢了一点，或者一个原本简单的问题，被处理得不必要地复杂。我知道这些事情大多无关紧要，也知道不应该事事干预，但还是忍不住追问、提醒，甚至亲自接手。",
       "They are not serious mistakes. Sometimes a colleague has not replied to a message in time, a task is running a little behind schedule, or a simple problem has been handled in an unnecessarily complicated way. I know most of these things do not matter and that I should not interfere in everything, yet I cannot help asking, reminding, even taking over myself."],
      ["我并不认为自己是一个喜欢控制别人的人。恰恰相反，我一直相信应该尊重他人的独立判断，也愿意给予团队成员充分的自主权。",
       "I do not think of myself as someone who likes to control others. On the contrary, I have always believed in respecting other people’s independent judgment, and I am willing to give team members full autonomy."],
      ["可一旦真正需要放手，我又会感到不安。",
       "But when I really have to let go, I feel uneasy."],
      ["Mel Robbins 的 *The Let Them Theory* 恰好触及了这种矛盾。",
       "Mel Robbins’s *The Let Them Theory* happens to touch exactly this contradiction."],
      ["她提出的原则看似简单：别人有自己的选择、情绪和行为方式，不必事事试图改变他们。与其把精力消耗在无法控制的人和事上，不如重新关注自己能够决定的部分。",
       "The principle she proposes looks simple: other people have their own choices, emotions and ways of behaving, and there is no need to try to change them in everything. Rather than spend energy on people and things we cannot control, we should turn our attention back to the part we can decide."],
      ["这并不是什么新颖的哲学。斯多葛学派早已区分过能够由自己决定的事情与无法决定的事情，现代心理学也反复讨论控制感与焦虑之间的关系。Robbins 的贡献更多在于把这些复杂的问题压缩成一个日常生活中可以反复使用的提醒：Let them.",
       "This is not a novel philosophy. The Stoics long ago distinguished what is up to us from what is not, and modern psychology repeatedly discusses the relation between a sense of control and anxiety. Robbins’s contribution lies more in compressing these complex questions into a reminder that can be used again and again in daily life: Let them."],
      ["但我对这个建议始终有一种本能的抵触。",
       "But I have always felt an instinctive resistance to this advice."],
      ["因为在管理工作中，放手并不总是一种美德。",
       "Because in management, letting go is not always a virtue."],
      ["当一个项目出现延误，最终需要解释结果的是管理者；当团队成员的判断造成损失，承担责任的也未必只有做出决定的人。管理意味着授权，却同样意味着协调、监督与纠偏。如果所有事情都可以用一句 Let them 来回应，那么管理本身似乎也失去了存在的必要。",
       "When a project is delayed, it is the manager who must explain the result in the end; when a team member’s judgment causes a loss, the one who bears responsibility is not necessarily only the person who made the decision. Management means delegating, but it also means coordinating, supervising and correcting. If everything can be answered with a “Let them,” then management itself seems to lose its reason to exist."],
      ["然而，仔细想来，这种反驳可能只是我为自己寻找的借口。",
       "Yet on reflection, this objection may be only an excuse I am finding for myself."],
      ["我真正害怕的，未必是别人犯错，而是事情脱离我的掌握以后，我将不得不接受一个并非由自己决定的结果。",
       "What I truly fear is not necessarily that others will make mistakes, but that once things slip out of my grasp I will have to accept an outcome I did not decide."],
      ["这种恐惧很容易伪装成责任心。",
       "This fear easily disguises itself as a sense of responsibility."],
      ["我可以把反复检查称为严谨，把不断追问称为及时沟通，把亲自接手称为保证质量。每一种行为都有合理的解释，甚至可能在短期内提高效率。但当这些行为成为习惯，我也逐渐把自己变成了整个工作流程中最难以替代、同时最难以休息的一个环节。",
       "I can call repeated checking rigor, constant questioning timely communication, and taking over myself quality assurance. Every behavior has a reasonable explanation and may even raise efficiency in the short term. But once these behaviors become habits, I have gradually turned myself into the link in the whole workflow that is the hardest to replace and the hardest to rest."],
      ["更讽刺的是，我所管理的秩序越稳定，自己反而越不自由。",
       "More ironic still, the more stable the order I manage, the less free I am."],
      ["眼下的工作并不糟糕。收入不错，受到尊重，工作表现也得到了认可。从外部标准看，我几乎没有充分的理由抱怨。",
       "My present work is not bad. The pay is good, I am respected, and my performance is recognized. By external standards I have almost no good reason to complain."],
      ["但日复一日地处理相似的问题、协调相似的流程、解决相似的意外，已经开始让我产生一种难以解释的疲惫。",
       "But handling similar problems day after day, coordinating similar processes and resolving similar mishaps has begun to give me a weariness that is hard to explain."],
      ["最初，这些工作需要判断力和创造性；如今，许多事情似乎只是重复过去已经证明有效的方法。我的经验让我越来越擅长处理它们，却也让我越来越难从中获得满足。",
       "At first this work called for judgment and creativity; now much of it seems only to repeat methods already proven to work. My experience makes me better and better at handling it, and also makes it harder and harder to find satisfaction in it."],
      ["我不禁怀疑，自己如此执着于控制细节，是否正因为已经很难从工作的整体方向中找到真正的兴奋感。",
       "I cannot help wondering whether I cling so hard to controlling details precisely because it has become difficult to find real excitement in the overall direction of the work."],
      ["当一个人无法改变自己每天在做什么，至少还可以努力决定每一件事应该怎样完成。",
       "When a person cannot change what he does every day, he can at least try to decide how each thing should be done."],
      ["控制于是成了一种补偿。",
       "Control thus becomes a kind of compensation."],
      ["这也是我认为 Robbins 的理论最值得进一步追问的地方。她把问题主要放在个人如何回应外部世界，却较少触及那些使人不得不持续保持控制的组织结构。一个人当然可以改变自己的心理边界，但如果工作机制始终要求他对所有结果负责，却没有赋予团队相应的自主权，那么单纯改变心态并不足以解决问题。",
       "This is also where I think Robbins’s theory most deserves further questioning. She puts the problem mainly in how an individual responds to the outside world, and touches less on the organizational structures that force a person to keep control. A person can of course change his psychological boundaries, but if the work system keeps requiring him to answer for all results without giving the team corresponding autonomy, changing one’s mindset alone is not enough."],
      ["不过，我也不能因此把所有责任推给制度。",
       "Still, I cannot therefore push all the responsibility onto the system."],
      ["有些时候，真正不愿意授权的人就是我自己。我希望别人能够独立完成工作，却又期待他们按照我的方式思考；我鼓励团队提出不同意见，却会因为他们选择了另一条路径而焦虑。",
       "Sometimes the one truly unwilling to delegate is myself. I want others to be able to do the work independently, yet expect them to think my way; I encourage the team to offer different views, yet grow anxious when they choose another path."],
      ["我所追求的，或许并不是真正的自主，而是一种不需要我亲自参与、却仍然完全符合我预期的执行。",
       "What I am after may not be true autonomy but an execution that does not need my involvement and yet fully meets my expectations."],
      ["这显然是一种矛盾的管理理想。",
       "This is plainly a contradictory ideal of management."],
      ["更深一层的问题是，我究竟为什么如此需要事情井然有序？",
       "A deeper question is why I need things to be in such good order."],
      ["也许因为秩序能够带来一种确定感。只要工作按计划推进，问题得到解决，团队保持运转，我便能够确认自己仍然是一个称职的管理者。",
       "Perhaps because order brings a sense of certainty. So long as the work goes as planned, problems get solved and the team keeps running, I can confirm that I am still a competent manager."],
      ["但如果一个人的自我价值必须依靠不断解决问题来维持，他就很难真正允许问题在没有自己参与的情况下得到解决。",
       "But if a person’s self-worth has to be sustained by constantly solving problems, it is hard for him to truly allow a problem to be solved without his involvement."],
      ["我开始意识到，管理上的控制欲与其说是权力欲望，不如说是一种对自身价值的不安全感。",
       "I am beginning to realize that the urge to control in management is less a desire for power than an insecurity about one’s own worth."],
      ["Robbins 的 Let Them 因而不应该被理解为对他人的放任。它真正困难的部分，是承认别人有权以不同于我的方式完成事情，有权犯一些我原本能够避免的错误，也有权不把我的期待当作他们行动的唯一标准。",
       "Robbins’s Let Them should therefore not be understood as laissez-faire toward others. Its truly difficult part is to admit that others have the right to do things differently from me, the right to make some mistakes I could have avoided, and the right not to treat my expectations as the only standard for their actions."],
      ["当然，这种自由必须有边界。管理者仍然需要明确目标、责任和不可妥协的要求。但在这些边界之内，我是否能够容忍一个不够完美、却不需要我时时干预的过程？",
       "Of course, this freedom must have limits. A manager still needs to set clear goals, responsibilities and non-negotiable requirements. But within those limits, can I tolerate a process that is not perfect yet does not need my constant intervention?"],
      ["这比读完一本自助书困难得多。",
       "This is much harder than finishing a self-help book."],
      ["因为它要求我放弃的不只是某些管理习惯，还有一种长期以来赖以确认自身能力的方式。",
       "Because what it asks me to give up is not only certain management habits but also a way I have long relied on to confirm my own ability."],
      ["我现在越来越怀疑，自己真正不满意的并不是薪水、职位或者别人如何评价我的工作，而是每天投入如此多的时间和精力，却很少有机会做那些真正让我感到好奇的事情。",
       "I now increasingly suspect that what I am truly dissatisfied with is not my salary, my position or how others judge my work, but that I put so much time and energy into it every day and rarely get the chance to do what truly makes me curious."],
      ["我已经能够胜任眼前的生活，却不确定自己是否仍然喜欢它。",
       "I can already handle the life in front of me, but I am not sure I still like it."],
      ["**也许我最应该学会的 Let Them，并不是允许别人按照自己的方式生活，而是允许这个世界在不需要我时时维持秩序的情况下，依然正常运转。**",
       "**Perhaps the Let Them I most need to learn is not to allow others to live in their own way, but to allow the world to keep running normally without my constantly maintaining its order.**"],
      ["至于腾出来的时间和精力，我还不知道应该用来做什么。",
       "As for the time and energy that would be freed, I do not yet know what to use them for."],
      ["但我至少希望，它们不再只是为了让我有能力承担更多同样的工作。",
       "But at least I hope they will no longer serve only to let me take on more of the same work."]
    ]
  },
  {
    "date": "2026-06-28",
    "title": "The Land Remembers Everyone’s Name",
    "slug": "the-land-remembers",
    "category": "Novel",
    "book": {
      "cover": "mountains_sing.jpg",
      "title": "The Mountains Sing",
      "author": "Nguyễn Phan Quế Mai",
      "language": "English",
      "country": "Vietnam",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2020",
        "A grandmother tells her granddaughter the story of the family, through famine, land reform and the American bombing of Hanoi."
      ]
    },
    "place": "于加州帕洛阿尔托\nPalo Alto, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["雨季里有人在田里播下稻种，收获以后有人把稻谷搬进仓房，有人在屋前栽下一棵果树。又有人在某个清晨仓皇离开，再也没有回来。土地都记得。",
       "In the rainy season someone sows rice seed in the field; after the harvest someone carries the grain into the granary; someone plants a fruit tree in front of the house. And someone leaves in a panic one morning and never comes back. The land remembers all of it."],
      ["在 Nguyễn Phan Quế Mai 的 *The Mountains Sing* 里，祖母陈妙兰曾经拥有这样的日子。她生在二十世纪初的越南北部，经历了法国殖民统治、日本占领与饥荒，终于在故乡建起自己的家庭。到了1950年代，土地改革改变了一切。原本意味着安稳与传承的土地，一下子成了阶级的罪证；熟悉的乡邻，可能成为当众指控她的人。",
       "In Nguyễn Phan Quế Mai’s *The Mountains Sing*, the grandmother, Trần Diệu Lan, once had days like these. Born in northern Vietnam at the start of the twentieth century, she lived through French colonial rule, the Japanese occupation and famine, and at last built a family in her home village. Then in the 1950s land reform changed everything. Land that had meant security and inheritance suddenly became evidence of a class crime, and the neighbors she knew might be the ones accusing her in public."],
      ["写到土改时，我最留意妙兰被迫离开家园的那一段。她的丈夫已经在此前的动荡中丧生，她得独自护住孩子。土地、房屋和过去的生活都带不走，只能在逃亡中一次次做选择。阮潘桂梅没有把这种求生写成壮烈的英雄主义。对妙兰来说，历史没有成为一道关于阶级与革命的辩题，摆在面前的只有一件事：一个母亲怎样让孩子活到明天。她曾拥有的一切，都不足以保证家人的安全。",
       "When the novel reaches land reform, the part I watch most closely is Lan being forced from her home. Her husband has already died in the earlier turmoil, and she has to protect her children alone. She cannot take the land, the house or the life she had, and in flight she can only keep making choices. Nguyễn does not write this survival as grand heroism. For Lan, history never becomes a debate about class and revolution; one thing is in front of her, how a mother gets her children to see tomorrow. Everything she once owned is not enough to keep her family safe."],
      ["最令人不安的是，土改发生在熟人之间。村里人都知道谁家有多少田，谁借出过粮食，谁和谁有旧怨。革命的语言进了村子，这些私人的记忆忽然有了新的用处。过去的富裕可以解释成剥削，过去的恩惠也可能成为要清算的阶级关系。政治运动改变最深的，我想，未必是重新分了多少土地，而是人们理解彼此的方式。昨天还是邻居的人，今天只剩一个阶级名称。",
       "What disturbs most is that land reform happens among people who know one another. Everyone in the village knows how much land each family has, who lent out grain, who has an old grudge against whom. When the language of revolution enters the village, these private memories suddenly have a new use. Past wealth can be explained as exploitation, and past kindness can become a class relation to be settled. What a political campaign changes most deeply, I think, may not be how much land is redistributed but how people understand one another. The person who was a neighbor yesterday is only a class label today."],
      ["但阮潘桂梅没有把越南的历史写成孤立的一场土改。妙兰的生命早被更早的灾难改变过。1945年的大饥荒夺走了大量生命，法国殖民统治与日本战时占领留下的创伤，也没有随战争结束而消失。饥荒、革命、土改在她一生里接连出现，每当一个时代宣告结束，另一个时代便迫不及待地要普通人再付一次代价。妙兰不知道后来的历史学家会怎样解释这些事，她只知道家里少了哪些人，饭桌边空出了哪些位置。",
       "But Nguyễn does not write Vietnam’s history as a single land reform in isolation. Lan’s life had already been changed by earlier disasters. The great famine of 1945 took huge numbers of lives, and the wounds left by French colonial rule and the Japanese wartime occupation did not vanish when the fighting ended. Famine, revolution and land reform follow one another through her life, and each time an era announces its end, the next is impatient to make ordinary people pay again. Lan does not know how later historians will explain these events. She knows which people are missing from the house and which places at the table have emptied."],
      ["另一条时间线属于孙女香。1972年，河内遭到美军猛烈轰炸，香和祖母要面对空袭的威胁。香的父母、叔伯姑姑被战争分散在各地，家里不断传来前线的消息，却很难得到确切的答案。战争在一个孩子眼里，最先是大人忽然沉默，是有人离开后迟迟不归，是防空警报一响，手边的东西都得放下，离战略、阵营和胜负都很远。",
       "The other timeline belongs to her granddaughter, Hương. In 1972 Hanoi is bombed heavily by the Americans, and Hương and her grandmother must live with the threat of air raids. Hương’s parents, uncles and aunts are scattered by the war; news from the front keeps coming into the house, and a clear answer is hard to get. To a child the war is first of all grown-ups going suddenly quiet, someone leaving and being slow to return, the siren going off and everything in her hands having to be put down, far from strategy, sides or who wins."],
      ["我喜欢小说让祖母在这样的年代向孙女讲往事。她讲年轻时的家，讲土地、婚姻、孩子，讲香从没见过的亲人。两代人的时间在同一间屋子里交错：屋外是七十年代的战争，祖母的故事却把香带回三十年代，带回1945年的饥荒和五十年代的土改。香渐渐发现，自己经历的战争不是家族苦难的开端。那些早已离开的亲人，也有过和她一样具体的童年、愿望和恐惧。",
       "I like that the novel has the grandmother tell her stories in such years. She talks about the family of her youth, about land, marriage, children, and relatives Hương has never seen. Two generations’ time crosses in a single room: outside is the war of the 1970s, while the grandmother’s story takes Hương back to the 1930s, the famine of 1945 and the land reform of the 1950s. Hương slowly finds that the war she is living through is not where her family’s suffering began. Those relatives long gone had childhoods, wishes and fears as concrete as hers."],
      ["战争结束后，妙兰的子女仍背着各自的伤痕。有人从战场回来，却回不到战前的生活；有人受了身体和精神上的创伤，有人的家庭关系被政治分裂与长期离散改变。战争遗留的化学污染及其对后代的伤害，让所谓和平格外复杂。国家可以宣布战争结束，一个家庭却不能因此让受伤的身体复原。历史的结束日期，往往不是个人痛苦的结束日期。",
       "After the war, Lan’s children still carry their own scars. Some come back from the battlefield and cannot return to the life before; some suffer wounds of body and mind; in some, family ties are changed by political division and long separation. The chemical contamination the war left, and its harm to later generations, makes so-called peace especially complicated. A state can declare the war over, and a family cannot thereby make injured bodies whole again. The end date in history is often not the end date of personal pain."],
      ["阮潘桂梅还写出了许多英语越战叙事忽略的事实：越南战争首先是越南人的生活，不只是美国人的创伤。在美国的小说和电影里，越南常是年轻士兵失去纯真、美国社会质疑自身道德的地方，越南人退到背景里，成了战场上陌生的面孔。*The Mountains Sing* 改变了这个视角。河内的街道、乡村的稻田、祖母的记忆、孙女的成长，不必通过美国人的悔恨就有了意义。",
       "Nguyễn also writes a fact that many English-language Vietnam War narratives overlook: the Vietnam War was first of all Vietnamese lives, and only secondarily an American trauma. In American novels and films Vietnam is often where young soldiers lose their innocence and American society questions its own morals, while the Vietnamese recede into the background as strange faces on a battlefield. *The Mountains Sing* changes that angle. The streets of Hanoi, the village rice fields, a grandmother’s memory, a granddaughter’s growing up: none of it needs American remorse to have meaning."],
      ["小说也没有把所有伤害归给外来的军队。土改中的迫害、越南人之间的政治分裂、战后仍难弥合的家庭裂痕，使它避开了过于整齐的民族苦难叙事。它写外部侵略，也写内部伤害；写革命许诺的正义，也写普通人在革命中付出的代价。我认为这比把历史简单分成受害者与加害者更接近小说的复杂。",
       "Nor does the novel put all the harm on foreign armies. The persecution of land reform, the political divisions among Vietnamese and the family rifts still unmended after the war keep it from a too-tidy narrative of national suffering. It writes of outside invasion and of inner injury, of the justice the revolution promised and of what ordinary people paid in it. I think this comes closer to the novel’s complexity than simply sorting history into victims and perpetrators."],
      ["我对作品有一点保留：阮潘桂梅有时太希望让破碎的家庭重新团聚。一代人的秘密通过下一代的倾听逐渐被理解，宽恕成为修复创伤的重要力量。这当然动人，我仍怀疑有些伤害能不能靠讲述得到和解。妙兰失去的亲人不会因为真相被说出来就复活，被战争改变的人生也回不到原来的路上。",
       "I have one reservation about the book: Nguyễn sometimes wants too much to bring a broken family back together. One generation’s secrets are gradually understood through the next generation’s listening, and forgiveness becomes a major force in mending trauma. This is moving, of course, and I still doubt whether some harms can be reconciled by telling. The relatives Lan lost do not come back because the truth is spoken, and lives changed by the war cannot return to their old paths."],
      ["不过祖母讲故事，大概本来就不是为了修复一切。她只是要让香知道，在被历史叫作地主、革命者、士兵或牺牲者的人里，有人喜欢唱歌，有人盼着丰收，有人离家前答应很快回来。他们出生时没想过要成为历史的一部分，也没有人能预先知道，自己的一生会被后人归入哪一场战争、哪一次改革。",
       "Still, the grandmother probably never told her stories to mend everything. She only wants Hương to know that among those history calls landlords, revolutionaries, soldiers or martyrs, some loved to sing, some hoped for a good harvest, some promised before leaving home that they would soon be back. They were not born to become part of history, and no one can know beforehand which war or which reform later generations will file a life under."],
      ["历史记得1945年的饥荒、1950年代的土改和1972年河内的轰炸。祖母记得的是灾难到来之前，家里每个人原本打算怎样过一生。",
       "History remembers the famine of 1945, the land reform of the 1950s and the bombing of Hanoi in 1972. The grandmother remembers how each person in the family had meant to live their life before the disasters came."],
      ["我想象多年以后，香重新走过祖母生活过的村子。房子也许已经改建，田有了新的主人，旧路被新路盖住。她不一定还能找到祖母记忆里的每一棵树，却知道那些地方发生过什么，知道哪些人曾在那里生活。",
       "I imagine Hương, many years later, walking again through the village where her grandmother lived. The houses may have been rebuilt, the fields have new owners, the old paths lie under new ones. She may not find every tree in her grandmother’s memory, but she knows what happened in those places and who once lived there."]
    ]
  },
  {
    "date": "2025-11-25",
    "title": "When Everyone Chases Gold, Who Can Own Their Fate?",
    "slug": "who-owns-their-fate",
    "category": "Novel",
    "book": {
      "cover": "the_luminaries.jpg",
      "title": "The Luminaries",
      "author": "Eleanor Catton",
      "language": "English",
      "country": "New Zealand",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2013",
        "In the New Zealand gold-rush town of Hokitika in 1866, a newcomer’s arrival unravels a web of disappearance, death, gold and identity, built on an astrological plan."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1866年，新西兰淘金小镇霍基蒂卡，一个陌生人到来，牵出一连串关于失踪、死亡、黄金与身份的谜团。卡顿借用十九世纪维多利亚小说的叙事方式，却设计了极精密的占星结构：人物对应黄道十二宫与行星，小说的十二个部分逐渐缩短，像月亮由盈转亏。比起结构本身多么精巧，我更想谈它与小说所写的资本主义世界之间的关系。",
       "In 1866, in the New Zealand gold-rush town of Hokitika, a stranger arrives and pulls up a string of mysteries about disappearance, death, gold and identity. Catton borrows the narrative manner of the Victorian novel and builds on it an extremely precise astrological structure: the characters correspond to the twelve zodiac signs and the planets, and the novel’s twelve parts grow shorter, like a moon going from full to waning. Rather than how ingenious the structure is, I want to talk about its relation to the capitalist world the novel describes."],
      ["淘金热，说到底是一场关于偶然性的集体赌博。人们远渡重洋，离开熟悉的社会关系，把未来押在尚未发现的财富上。每个人都相信自己可能是那个幸运者，没有人能控制财富出现的位置。占星术在这样的世界里格外耐人寻味：它为混乱的人生提供秩序，为偶然的事建立联系，为无法解释的命运找一种隐藏的结构。",
       "The gold rush was, at bottom, a collective gamble on chance. People crossed oceans, left familiar social ties, and staked their future on wealth not yet found. Each believed he might be the lucky one, and nobody could control where the gold would turn up. In such a world astrology is especially intriguing: it offers order to a chaotic life, connects chance events, and looks for a hidden structure behind a fate that can’t be explained."],
      ["读这部小说时，我常想到现代金融市场。我们不再用星象预测黄金的位置，却建了无数模型，想从价格、周期、风险和历史数据里找出未来的规律。我自己长期做跨国股票与房地产投资，对这种冲动并不陌生。投资者希望相信收益来自判断，而不只是运气；希望相信市场再复杂，也有可以识别的秩序。卡顿的小说却不断提醒，个人的命运总和他人的行为、信息的不对称、无法预料的事件缠在一起。",
       "Reading the novel, I often thought of modern financial markets. We no longer predict the location of gold from the stars, yet we have built countless models to find the future’s patterns in prices, cycles, risk and historical data. I have long invested in stocks and property across countries, so the impulse is familiar to me. Investors want to believe their returns come from judgment and not just luck, and that however complex the market, there is an order that can be identified. Catton’s novel keeps reminding us that an individual’s fate is always tangled with other people’s actions, with asymmetric information and with events no one can foresee."],
      ["这样精密的形式也带来一个疑问：结构完美到这个程度，人物会不会因此失去某种自由？他们是在生活，还是在执行作者预先排好的星象轨迹？我欣赏卡顿的文学野心，对这种近乎数学化的叙事也保留一点怀疑。文学最令人着迷的地方，也许在于让我们看到，规则全部在手，一个人的命运仍然没法被彻底理解。",
       "Such a precise form also raises a doubt: with a structure this perfect, do the characters lose a certain freedom? Are they living, or carrying out a course of stars the author arranged beforehand? I admire Catton’s literary ambition and keep a little doubt about this almost mathematical narrative. What is most fascinating in literature may be that it shows us how, with every rule in hand, a person’s fate still cannot be fully understood."],
      ["十二个部分一节比一节短，月亮在书页里慢慢变小。",
       "The twelve parts get shorter one after another, and the moon on the page slowly grows smaller."]
    ]
  },
  {
    "date": "2015-12-12",
    "title": "An Autobiography Without a Straight Road",
    "slug": "an-autobiography-without-a-straight-road",
    "category": "Novel in verse",
    "book": {
      "cover": "autobiography_of_red.jpg",
      "title": "빨강의 자서전 (Autobiography of Red)",
      "author": "앤 카슨 Anne Carson",
      "language": "Korean",
      "country": "Canada",
      "original": "English",
      "lines": [
        "Novel in verse · Korean translation of Autobiography of Red, first published 1998",
        "Geryon, the red winged monster of Greek myth, grows up, falls in love with Herakles and learns photography."
      ]
    },
    "place": "于加利福尼亚州圣迭戈\nSan Diego, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["一、关于一种不可能的文体",
       "I. On an Impossible Form", "h"],
      ["安妮·卡森把这本书称为：一部诗体小说。",
       "Anne Carson calls this book: a novel in verse."],
      ["我起初以为这只是一个文学分类。读完才发现，她似乎根本不打算遵守任何分类。",
       "At first I thought this was just a literary category. Only after finishing did I see that she does not seem to intend to obey any category at all."],
      ["一本自传，却写着一个希腊神话中的红色怪物。一部小说，却由短诗组成。一个古老的故事，却有摄影机、汽车、飞机与现代城市。一个本该被赫拉克勒斯杀死的怪物，竟然活了下来，长大，恋爱，失恋，学习摄影。",
       "An autobiography, yet it tells of a red monster from Greek myth. A novel, yet made of short poems. An ancient story, yet with cameras, cars, airplanes and modern cities. A monster who should have been killed by Herakles lives on instead, grows up, falls in love, is heartbroken, and learns photography."],
      ["卡森并没有解释这些事情为什么能够同时存在。她只是把它们放在一起。仿佛文学原本就不需要向时间、体裁和现实申请许可。",
       "Carson does not explain why these things can exist together. She simply puts them side by side. As if literature never needed to ask permission from time, genre or reality."],
      ["二、红色",
       "II. Red", "h"],
      ["革律翁出生时就是红色的。他有翅膀。他是怪物。",
       "Geryon is red from birth. He has wings. He is a monster."],
      ["但卡森没有急于告诉我们，一个怪物应该怎样生活。她让他像普通孩子一样长大，经历家庭中的伤害，感受孤独，尝试用文字记录自己。",
       "But Carson is in no hurry to tell us how a monster should live. She lets him grow up like an ordinary child, go through hurt within a family, feel loneliness, and try to record himself in words."],
      ["他很早就开始写自传。这件事让我觉得奇妙。一个尚未真正开始生活的孩子，已经试图为自己留下记录。",
       "He begins writing an autobiography very early. This strikes me as wonderful: a child who has not yet really begun to live is already trying to leave a record of himself."],
      ["但他的自传并不完全由句子构成。有时候是物品。有时候是照片。有时候只是一种颜色。",
       "But his autobiography is not made entirely of sentences. Sometimes it is objects. Sometimes photographs. Sometimes only a color."],
      ["我想到，我们平时所谓的自我叙述，其实也未必那么连贯。一个人记得童年，往往不是因为能够准确复述当时发生了什么。而是因为某种光线。一间房间。一件已经不在身边的东西。",
       "I thought: what we ordinarily call self-narration may not be so coherent either. A person remembers childhood often not because he can accurately retell what happened, but because of a certain light. A room. A thing no longer with him."],
      ["卡森把这些无法组成完整故事的碎片，直接写成了文学。",
       "Carson writes these fragments, which cannot form a complete story, directly into literature."],
      ["三、赫拉克勒斯",
       "III. Herakles", "h"],
      ["在希腊神话中，赫拉克勒斯杀死革律翁，夺走他的牛群。故事很简单。英雄完成任务。怪物被消灭。",
       "In Greek myth, Herakles kills Geryon and takes his cattle. The story is simple. The hero completes his task. The monster is destroyed."],
      ["但卡森改变了故事中最重要的一件事：她让怪物拥有了自己的视角。",
       "But Carson changes the most important thing in the story: she gives the monster a viewpoint of his own."],
      ["赫拉克勒斯不再只是英雄，而是一个令革律翁着迷、又使他受伤的年轻男人。他们相遇。他们相爱。他们分开。革律翁继续生活。",
       "Herakles is no longer only a hero but a young man who fascinates Geryon and also hurts him. They meet. They love. They part. Geryon goes on living."],
      ["我很喜欢卡森对古典神话的这种处理。她没有简单地替怪物平反，也没有把英雄改写成恶人。她只是让一个原本只能作为别人故事中障碍的角色，拥有了自己的时间。",
       "I like very much this way Carson treats classical myth. She does not simply rehabilitate the monster, nor rewrite the hero as a villain. She merely lets a character who could only be an obstacle in someone else’s story have a time of his own."],
      ["在英雄史诗里，革律翁存在的意义，是被赫拉克勒斯杀死。在卡森的小说里，赫拉克勒斯只是革律翁漫长生命中的一个人。",
       "In the heroic epic, Geryon exists to be killed by Herakles. In Carson’s novel, Herakles is only one person in Geryon’s long life."],
      ["故事的重心改变了。连神话中的死亡，也不再拥有最后的解释权。",
       "The center of gravity of the story shifts. Even death in the myth no longer has the last word of interpretation."],
      ["四、照片",
       "IV. Photographs", "h"],
      ["革律翁喜欢摄影。这大概是我最喜欢的设定。一个红色的、有翅膀的怪物，试图通过摄影理解世界。",
       "Geryon likes photography. This is perhaps my favorite part of the setup: a red, winged monster trying to understand the world through photography."],
      ["他不只是被别人观看的奇异生物。他也举起相机，决定自己要看什么。",
       "He is not only a strange creature looked at by others. He also raises a camera and decides what he wants to see."],
      ["照片与诗有某种相似之处。它们都从连续的时间里切下一小块。一张照片不必交代之前发生了什么，也不必解释之后会怎样。",
       "Photographs and poems resemble each other somewhat. Both cut a small piece from continuous time. A photograph need not say what happened before, nor explain what will happen after."],
      ["卡森的诗行同样如此。她经常让一个场景突然结束，把人物的心理留在句子之外。读者必须自己穿过那些空白。",
       "Carson’s lines are the same. She often ends a scene abruptly and leaves the characters’ minds outside the sentences. The reader must cross those blanks alone."],
      ["我读惯了有清楚情节、人物动机与叙事因果的小说，因此一开始并不适应。但渐渐地，我发现自己开始像看照片一样阅读。不再急于寻找下一件事。而是停留在一个意象里。观察它为什么被留下。",
       "I am used to novels with clear plots, character motives and narrative causality, so at first I was not at ease. But gradually I found myself reading as one looks at a photograph: no longer hurrying to find the next thing, but staying inside one image, observing why it was left."],
      ["五、斯特西科罗斯",
       "V. Stesichoros", "h"],
      ["卡森没有直接开始讲述革律翁的爱情。她先带我们回到古希腊诗人斯特西科罗斯。然后又写他的生平。又讨论残存的诗篇。又安排一场仿佛古典学术研究的考察。到了书的另一端，还有一场关于斯特西科罗斯的虚构访谈。",
       "Carson does not begin directly with Geryon’s love story. First she takes us back to the ancient Greek poet Stesichoros. Then she writes his life. Then discusses his surviving fragments. Then arranges what looks like a classical scholar’s inquiry. At the other end of the book comes a fictional interview with Stesichoros."],
      ["这些部分与革律翁的现代爱情故事，似乎并不属于同一本书。但我越来越觉得，它们才是卡森真正的文学实验。",
       "These parts seem not to belong to the same book as Geryon’s modern love story. But I increasingly feel they are Carson’s real literary experiment."],
      ["她不只是改写神话。她还让我们看见，一个故事如何从古希腊的诗歌残篇，经过翻译、注释、误读与重新想象，变成另一部作品。",
       "She does not merely rewrite myth. She lets us see how a story, from an ancient Greek poetic fragment, passes through translation, annotation, misreading and re-imagining to become another work."],
      ["古典文本不再是一件被完整保存的文物。它像一块破碎的陶器。后来的作者拾起碎片，发现缺失的部分同样可以成为创作的空间。",
       "The classical text is no longer a perfectly preserved relic. It is like a broken pot. Later authors pick up the shards and find that the missing parts can also become room for creation."],
      ["我尤其喜欢这种对于残缺的态度。卡森没有试图恢复一个所谓完整、真实的革律翁。她允许他在不同年代拥有不同的形状。",
       "I especially like this attitude to incompleteness. Carson does not try to restore a so-called complete, true Geryon. She lets him take different shapes in different eras."],
      ["六、爱情不是全书的形式",
       "VI. Love Is Not the Form of the Book", "h"],
      ["革律翁爱上赫拉克勒斯。后来又在南美洲与他重逢。赫拉克勒斯身边已经有了安卡什。他们之间的关系变得更加复杂，也更加难以命名。",
       "Geryon falls in love with Herakles. Later he meets him again in South America. Herakles already has Ancash at his side. The relationship between them grows more complicated and harder to name."],
      ["如果按照传统小说的写法，这里应该出现一个明确的情感高潮。一个决定。一场告别。或者某种关于成长的领悟。",
       "In a traditional novel, a clear emotional climax would come here. A decision. A farewell. Or some realization about growing up."],
      ["卡森却没有给我这样的满足。她更愿意写火山、空气、身体、颜色，以及人物之间那些短暂而难以解释的接近。",
       "Carson does not give me that satisfaction. She prefers to write volcanoes, air, bodies, colors, and those brief, hard-to-explain closenesses between people."],
      ["我开始意识到，这本书并不打算把失恋写成一段完整的心理历程。它写的是爱情如何改变一个人感知世界的方式。",
       "I began to realize that the book does not intend to write heartbreak as a complete psychological journey. It writes how love changes the way a person perceives the world."],
      ["革律翁的痛苦并不总是以痛苦的语言出现。有时，它表现为他突然注意到的一件事物。有时，是一句不合时宜的话。有时，是诗行之间的沉默。",
       "Geryon’s pain does not always come in the language of pain. Sometimes it shows as a thing he suddenly notices. Sometimes as an ill-timed remark. Sometimes as the silence between lines."],
      ["这也是我认为诗体小说比普通散文更适合这个故事的原因。卡森不需要解释每一种感情。她可以让两种互不相干的东西并置，让读者自己感受到它们之间的距离。",
       "This is also why I think a novel in verse suits the story better than ordinary prose. Carson need not explain every feeling. She can set two unrelated things side by side and let the reader feel the distance between them."],
      ["七、自传",
       "VII. Autobiography", "h"],
      ["读到最后，我反而开始怀疑书名。《红的自传》。究竟是谁的自传？革律翁的？一个怪物的？一个失恋者的？还是卡森借用古希腊神话，写下的某种关于语言本身的自传？",
       "At the end, I began instead to doubt the title. *Autobiography of Red*. Whose autobiography is it? Geryon’s? A monster’s? A heartbroken person’s? Or a kind of autobiography of language itself that Carson writes by borrowing Greek myth?"],
      ["传统自传总有一种隐含的承诺：我将告诉你，我是谁。我从哪里来。我经历了什么。这些事情如何使我成为今天的自己。",
       "A traditional autobiography always carries an implicit promise: I will tell you who I am. Where I come from. What I went through. How these things made me who I am today."],
      ["但革律翁的自传没有提供这样一条完整的道路。他从孩子变成青年。他爱过赫拉克勒斯。他拍摄照片。他旅行。他始终是红色的。这些事实没有被组织成一个最终的答案。",
       "But Geryon’s autobiography does not offer such a complete road. He goes from child to youth. He loved Herakles. He takes photographs. He travels. He is always red. These facts are not organized into a final answer."],
      ["我想起自己离开中国之后，偶尔也会试图把过去的经历讲成一段连贯的故事。仿佛只要找到合适的起点与转折，人生便会显得有方向、有意义。",
       "I thought of how, since leaving China, I too have sometimes tried to tell my past as a coherent story. As if, once the right starting point and turning points were found, a life would seem to have direction and meaning."],
      ["但真正留下来的记忆，往往并不服从这种结构。它们有时只是某个地方的天气，一次没有说完的谈话，或者一个当时并不觉得重要的下午。",
       "But the memories that really remain often do not obey such a structure. Sometimes they are just the weather of a place, an unfinished conversation, or an afternoon that did not seem important at the time."],
      ["卡森让我觉得，也许自传根本不必证明一个人如何成为自己。它只需要保存那些曾经属于他的瞬间。",
       "Carson makes me feel that perhaps an autobiography need not prove how a person became himself. It need only preserve the moments that once belonged to him."],
      ["八、翅膀",
       "VIII. Wings", "h"],
      ["革律翁有翅膀。卡森从未让这件事变得完全合理。它既是神话留下的身体特征，也是他无法摆脱的异质性。",
       "Geryon has wings. Carson never makes this fully reasonable. It is both a bodily feature left by myth and a strangeness he cannot shake off."],
      ["但到了小说最后，翅膀似乎又有了另一种可能。我不想把它解释成自由。那样太容易了。",
       "But by the end of the novel, the wings seem to have another possibility. I do not want to interpret it as freedom. That would be too easy."],
      ["卡森花费整部作品，让革律翁摆脱那些早已准备好的解释。怪物不一定意味着邪恶。红色不一定意味着激情。爱情不一定带来完整。翅膀也不必成为某种象征。它们可以只是翅膀。",
       "Carson spends the whole work freeing Geryon from explanations already prepared for him. A monster does not necessarily mean evil. Red does not necessarily mean passion. Love does not necessarily bring wholeness. Wings need not become a symbol. They can just be wings."],
      ["而一本自传，也可以由诗、照片、古希腊残篇与未完成的爱情组成。",
       "And an autobiography, too, can be made of poems, photographs, Greek fragments and an unfinished love."],
      ["我合上书。想起革律翁。一个红色的怪物。他没有被英雄杀死。也没有因为活下来，就必须成为英雄。他只是继续存在。带着自己的颜色。以及那对始终无法被普通叙事安置的翅膀。",
       "I close the book. I think of Geryon. A red monster. He was not killed by the hero. Nor, having survived, must he become a hero. He simply goes on existing. With his own color. And that pair of wings that no ordinary narrative can ever place."]
    ]
  },
  {
    "date": "2015-01-03",
    "title": "The Last Goodbye",
    "slug": "the-last-goodbye",
    "category": "Memoir",
    "book": {
      "cover": "juliuhe.jpg",
      "title": "巨流河 (The Great Flowing River)",
      "author": "齊邦媛 Chi Pang-yuan",
      "language": "Traditional Chinese",
      "country": "Taiwan",
      "original": "Chinese",
      "lines": [
        "Memoir · Traditional Chinese original, first published 2009",
        "Chi Pang-yuan’s memoir of a life carried through the wars and migrations of twentieth-century China to Taiwan."
      ]
    },
    "place": "於華盛頓州西雅圖\nSeattle, WA",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      ["读到齐邦媛与张大飞诀别的这一段，停下来。为什么偏偏是那一次告别成了最后一次，我绕不开这个问题。",
       "I stop at the farewell between Chi Pang-yuan and Zhang Dafei. Why that parting, of all partings, became the last: I cannot get around the question."],
      ["张大飞是年轻的空军飞行员，在战乱中与她相识，后来一次次写信给她。两人之间有一种近乎固执的克制，像是只要不把感情说尽，战争就进不了那一点还没被毁掉的生活。",
       "Zhang Dafei is a young air force pilot who meets her amid the chaos of war and then writes to her again and again. Between them there is a restraint close to stubbornness, as if, so long as the feeling is not fully spoken, war cannot get into the little of life that is not yet ruined."],
      ["往下读，他死于空战。让我难过的不是死讯本身，是齐邦媛后来才知道，他们已经没有下一次见面了。",
       "Reading on, he dies in air combat. What saddens me is not the news of his death but that Chi Pang-yuan learns only later that there will be no next meeting."],
      ["想了想最后一次相见是什么样子。人不会像在告别一生那样举止。也许还有没说完的话，还有不值得郑重其事的小事。一个人转身走了，另一个人接着过日子，那一刻和此前所有普通的分别没有两样。直到死亡来了，过去才变了性质：一句寻常的话成了遗言，一个没特别留意的背影成了最后的身影。页边我记下一句：“最后一次”这个名字，告别发生时并不存在，是等不到下一次的人事后给的。",
       "I try to picture what a last meeting looks like. People do not act as if saying goodbye to a lifetime. There may be words left unsaid and small matters not worth solemnity. One turns and leaves, the other carries on, and the moment is no different from all the ordinary partings before it. Only when death comes does the past change its nature: an ordinary remark becomes a last word, a back not especially noticed becomes the last sight. In the margin I write that the name “last time” does not exist when the parting happens. It is given afterward by the one who can no longer wait for a next time."],
      ["又想到，历史最残酷的地方也许不在夺走多少生命，而在剥夺人预先知道失去的权利。",
       "I also think that the cruelest thing about history may not be how many lives it takes but that it deprives people of the right to know a loss beforehand."],
      ["我们总以为重要的事该有与它相称的仪式：死亡有遗言，离别有拥抱，爱情有一个明确的结局。生活不照这个秩序走。许多决定一生的瞬间，发生时不值得记一笔。",
       "We always assume important things come with ceremony to match: death with last words, parting with an embrace, love with a definite ending. Life does not follow that order. Many moments that decide a whole life are, when they happen, not worth a note."],
      ["张大飞的死结束了他的生命，没有结束他与齐邦媛的关系。那个不在的人，在她此后漫长的岁月里一直占着一个位置。他不再变，不再老，没有机会成为另一个人；活着的人却得不停改变，带着一个永远停在过去的身影，走进越来越陌生的未来。死者永远年轻，生者独自承担时间。回忆在这里不公平。",
       "Zhang Dafei’s death ends his life but not his relationship with Chi Pang-yuan. The one who is gone holds a place in her long years afterward. He no longer changes, no longer ages, has no chance to become someone else. The living have to keep changing, carrying a figure forever stopped in the past into an ever stranger future. The dead stay young and the living bear time alone. Memory is unfair here."],
      ["往后翻，是她多年以后写《巨流河》，那些在战争里消失的年轻人终于又有了姓名。但我不把它读成通常的纪念。纪念常常想给死亡一个意义，而她的文字让我留意到，有些死不该被解释得太圆满。",
       "Further on, years later, she writes *The Great Flowing River*, and the young people who vanished in the war have names again. I do not read this as commemoration in the usual sense. Commemoration often wants to give death a meaning, and her words make me notice that some deaths should not be explained too neatly."],
      ["可以说张大飞为国牺牲，可以把他放进抗战史的大叙述里，这些都不假。但一个年轻人本来还可能有的爱情、婚姻、衰老，和无数平凡得不值得写的日子，不会因为他的牺牲有历史意义，就不再值得惋惜。历史能说明他为什么必须奔赴战场，却不能证明他本可能拥有的一生应该在那里结束。这一句我先记下。",
       "One can say Zhang Dafei gave his life for the nation and set him inside the grand narrative of the War of Resistance. None of it is false. But the love, marriage and old age a young man might still have had, and the countless days too ordinary to write down, do not stop deserving regret because his sacrifice has historical meaning. History can explain why he had to go to the battlefield. It cannot prove that the life he might have had should have ended there. I note that sentence down for now."],
      ["这大概是《巨流河》里我最放不下的地方。我们习惯用后来发生的事解释之前的一切，结局一定，经过便都指向结局。可对当时的齐邦媛和张大飞，未来还敞开着。他们不是为了成为悲剧才相识，也不是为了让后人懂得战争残酷才分别。他们只是相信，人生还有很多时间。一生有时不过是一个人以为还会再见，另一个人却再也没有回来。",
       "This is probably what I can least let go of in *The Great Flowing River*. We are used to explaining everything before by what came after, as though, once the ending is fixed, everything on the way points to it. But for Chi Pang-yuan and Zhang Dafei then, the future was still open. They did not meet in order to become a tragedy, and they did not part so that later people might grasp the cruelty of war. They simply believed life still held a lot of time. A lifetime is sometimes no more than one person thinking there will be another meeting while the other never comes back."],
      ["这几页我还想再读一遍。",
       "I want to read these few pages again."]
    ]
  },
  {
    "date": "2014-01-21",
    "title": "Who Decides Who Is Fully Human?",
    "slug": "who-decides-who-is-fully-human",
    "category": "Novel",
    "book": {
      "cover": "this_earth_of_mankind.jpg",
      "title": "This Earth of Mankind",
      "author": "Pramoedya Ananta Toer",
      "language": "English",
      "country": "Indonesia",
      "original": "Indonesian",
      "lines": [
        "Novel · English translation of Bumi Manusia, first published 1980",
        "Minke, a young native student in colonial Java, falls in love with a mixed-race girl and learns the limits of colonial law."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "明克说荷兰语",
          "Minke speaks Dutch,"
        ],
        [
          "读欧洲的书",
          "reads European books,"
        ],
        [
          "受殖民者引以为傲的教育",
          "sits through the schooling the colonizers are proud of."
        ]
      ],
      [
        [
          "他信理性，信自由，信法律",
          "He trusts reason, freedom, law,"
        ],
        [
          "信知识能把人领出出身的界限",
          "trusts that knowledge can lead a person out of the limits of birth."
        ]
      ],
      [
        [
          "他想和安妮莉丝一起生活",
          "He wants to live with Annelies."
        ],
        [
          "法律提醒他",
          "The law reminds him:"
        ],
        [
          "受过多少教育",
          "however much schooling,"
        ],
        [
          "你仍然只是土著",
          "you are still only a native."
        ]
      ],
      [
        [
          "他们教他相信人的普遍价值",
          "They taught him to believe in the worth of every person"
        ],
        [
          "又把一项权力留在自己手里",
          "and kept one power in their own hands,"
        ],
        [
          "决定谁是完整的人",
          "the power to decide who is fully human."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "比明克更让我记得的",
          "More than Minke, I remember"
        ],
        [
          "是妮·翁托索罗",
          "Nyai Ontosoroh."
        ]
      ],
      [
        [
          "一个被卖给荷兰商人的爪哇女人",
          "A Javanese woman sold to a Dutch businessman,"
        ],
        [
          "没上过正规的学",
          "never formally schooled,"
        ],
        [
          "自己学会经营产业",
          "she taught herself to run a business"
        ],
        [
          "养大了孩子",
          "and raised her children"
        ],
        [
          "理性与尊严",
          "with more reason and dignity"
        ],
        [
          "比许多殖民者更充分",
          "than many of the colonizers."
        ]
      ],
      [
        [
          "荷兰法院裁定安妮莉丝归谁",
          "The Dutch court rules where Annelies belongs."
        ],
        [
          "她作为母亲付出的一切",
          "Everything she gave as a mother"
        ],
        [
          "换不成法律认可的权利",
          "cannot be turned into a right the law recognizes."
        ]
      ],
      [
        [
          "她输了，与文明的多少无关",
          "She loses, and it has nothing to do with how civilized she is."
        ],
        [
          "她的文明",
          "Her civilization"
        ],
        [
          "始终不被允许",
          "is never allowed"
        ],
        [
          "成为一种权利",
          "to become a right."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "普拉默迪亚批判得最深的地方",
          "Pramoedya cuts deepest"
        ],
        [
          "在文明如何变成统治的语言",
          "where civilization turns into the language of rule."
        ]
      ],
      [
        [
          "法律程序严密",
          "Law is rigorous in procedure"
        ],
        [
          "却立在身份的不平等上",
          "and built on unequal status."
        ],
        [
          "教育传播自由的观念",
          "Education spreads the idea of freedom"
        ],
        [
          "不必给受教育的人自由",
          "without having to give the educated any."
        ]
      ],
      [
        [
          "被统治的人",
          "The ruled"
        ],
        [
          "还得借统治者的尺子",
          "must borrow the rulers’ ruler"
        ],
        [
          "证明自己值得被当作人尊重",
          "to prove they deserve respect as human beings."
        ]
      ],
      [
        [
          "所以我对现代社会的进步",
          "So I keep a little doubt"
        ],
        [
          "总留一分怀疑",
          "about progress in modern society."
        ],
        [
          "我们太容易相信",
          "We too easily believe"
        ],
        [
          "制度越完善，社会越公正",
          "the fuller the institutions, the juster the society,"
        ],
        [
          "知识越普及，人越自由",
          "the wider the knowledge, the freer the people."
        ]
      ],
      [
        [
          "问题在谁有权决定",
          "The question is who decides"
        ],
        [
          "这些文明的工具怎么用",
          "how the tools of civilization are used,"
        ],
        [
          "又有谁始终被挡在",
          "and who is always kept"
        ],
        [
          "它们的保障之外",
          "outside their protection."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "小说结尾",
          "At the end of the novel"
        ],
        [
          "妮·翁托索罗和明克",
          "Nyai Ontosoroh and Minke"
        ],
        [
          "拦不住安妮莉丝被带走",
          "cannot stop Annelies being taken away."
        ]
      ],
      [
        [
          "知识没有胜过权力",
          "Knowledge does not defeat power."
        ],
        [
          "正义没有在最后一刻",
          "Justice is not repaid"
        ],
        [
          "得到补偿",
          "at the last moment."
        ],
        [
          "他们尽力反抗",
          "They resist with all they have"
        ],
        [
          "还是输了",
          "and still lose."
        ]
      ],
      [
        [
          "法律能判定",
          "The law can decide"
        ],
        [
          "一个母亲有没有女儿的监护权",
          "whether a mother has custody of her daughter."
        ],
        [
          "却判定不了",
          "It cannot decide"
        ],
        [
          "她是不是曾经做过母亲",
          "whether she was ever a mother."
        ]
      ],
      [
        [
          "妮·翁托索罗失去了女儿",
          "Nyai Ontosoroh loses her daughter."
        ],
        [
          "她没有失去",
          "She does not lose"
        ],
        [
          "判断这场裁决公不公正的能力",
          "the ability to judge whether the ruling is just."
        ]
      ]
    ]
  },
  {
    "date": "2014-02-28",
    "title": "Speaking for Someone Else",
    "slug": "speaking-for-someone-else",
    "category": "Novel",
    "book": {
      "cover": "child_of_all_nations.jpg",
      "title": "Child of All Nations",
      "author": "Pramoedya Ananta Toer",
      "language": "English",
      "country": "Indonesia",
      "original": "Indonesian",
      "lines": [
        "Novel · English translation of Anak Semua Bangsa, first published 1980",
        "Minke, the young native writer of colonial Java, meets the peasant Trunodongso and has to ask how he has been seeing the people of his own land."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["明克：",
       "Dear Minke,"],
      ["你第一次走进爪哇农民特朗图斯的生活，才发现自己不知道该怎样看眼前那片土地。你熟悉欧洲的文学、革命和思想，不知道农民怎么耕种，怎么和土地相处，怎么在日复一日的劳作里养活一家人。他讲自己的遭遇，你起初还是习惯站在受过教育的旁观者的位置去听。",
       "The first time you step into the life of the Javanese peasant Trunodongso, you find you do not know how to make sense of the land in front of you. You know European literature, revolutions and ideas. You do not know how peasants farm, how they live with the land, how they keep a family alive through days of unbroken labor. He tells you what has happened to him, and at first you still listen the way an educated onlooker does."],
      ["你认清了殖民主义的不公，这当然要紧，但读《Child of All Nations》，最打动我的是你开始怀疑自己认识世界的方式。在《This Earth of Mankind》里，你面对的是殖民者怎么看你。到了这一本，你得面对一个更难堪的问题：你自己怎么看那些和你住在同一片土地上的人？",
       "You come to see the injustice of colonialism, and that matters, but what moves me most in *Child of All Nations* is that you begin to doubt the way you have been coming to know the world. In *This Earth of Mankind* you faced how the colonizers see you. Now you face a more uncomfortable question: how do you see the people who live on the same land as you?"],
      ["你可以为农民的遭遇愤怒，却未必懂得他们的生活。你可以把苦难写成文章，但这不等于理解了苦难。尤其当你想替别人说话，你得承认，那些人的声音并不天然属于你。",
       "You can be angry at what happens to the peasants without understanding their lives. You can turn suffering into an article, and that does not mean you have understood it. Above all, when you try to speak for others, you have to admit that their voices do not belong to you by default."],
      ["我又回头去看书名里的“万国”。你曾向往一个超出民族和地域的世界，读欧洲，也关心中国、日本和别处正在发生的变化。对你来说，世界就是无数可以学的思想，可以抵达的远方。特朗图斯一出现，这份辽阔忽然显得有些空。一个人可以关心遥远民族的命运，对故乡的农民却所知甚少；可以爱抽象的人类，却从没认真听过一个具体的人讲自己的生活。这不是虚伪，是一种更难察觉的疏离。远方的人容易变成理想，身边的人有自己的脾气、偏见和沉默，有概括不了的日常。",
       "I went back to the “all nations” of the title. You once longed for a world beyond nation and region. You read Europe, and you cared about the changes going on in China, Japan and elsewhere. For you the world meant countless ideas to learn from and distant places to reach. With Trunodongso’s arrival that vastness suddenly seems a little hollow. A person can care about the fate of distant peoples and know very little about the peasants of his own homeland. He can love humanity in the abstract and never have seriously listened to one particular person tell of his own life. This is not hypocrisy. It is an estrangement that is harder to notice. People far away easily become an ideal, while the people beside us have their own tempers, prejudices and silences, and a daily life that cannot be summed up."],
      ["普拉姆迪亚没有把特朗图斯写成一个等着知识分子启蒙的农民。他有你缺少的经验，也有自己的判断。你要学的，除了怎么描写他，还有承认自己并不比他更懂这片土地。所以在我看来，这本书讲的不是一个青年从世界主义退回民族主义。它问的是，一个自称属于所有民族的人，能不能容下那些不按他的知识、语言和理想生活的人。",
       "Pramoedya does not make Trunodongso a peasant waiting to be enlightened by an intellectual. He has the experience you lack, and he has judgments of his own. What you have to learn, besides how to describe him, is to accept that you do not understand this land better than he does. So to me this is not the story of a young man retreating from cosmopolitanism into nationalism. It asks whether someone who claims to belong to all nations can make room for people who do not live by his knowledge, his language and his ideals."],
      ["你终究还是要写，只是这一回，你不能像从前那样轻易落笔。我总觉得，你坐下来的时候，最该克制的，是替那个农民把话说完的冲动。他说过的话你记得，田地、茅屋和干活的身影，你也记得。",
       "You will still write in the end, only this time you cannot put pen to paper as easily as before. I keep feeling that when you sit down, what you most need to hold back is the urge to finish the peasant’s sentences for him. You remember what he said. You remember the fields, the huts and the figures at work as well."]
    ]
  },
  {
    "date": "2014-03-01",
    "title": "Where Does a Person Belong?",
    "slug": "where-does-a-person-belong",
    "category": "Novel",
    "book": {
      "cover": "midnights_children.jpg",
      "title": "Midnight’s Children",
      "author": "Salman Rushdie",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1981",
        "Saleem Sinai, born at the stroke of midnight on India’s independence, tells his life as if it were the history of the nation."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直觉得，一个人出生在哪里，与他后来认为自己属于哪里，并不一定是同一回事。",
       "I have always felt that where a person is born and where he later considers himself to belong are not necessarily the same thing."],
      ["尤其是在经历过留学、毕业、开始工作，并不得不一次次思考自己未来该留在哪里之后，我越来越觉得，国籍在法律上是一件很明确的事情，但在个人记忆里却远没有那么简单。一本护照可以证明我现在属于哪个国家，却无法决定我应该如何理解自己的过去。",
       "Especially after studying abroad, graduating, starting work and having to ask again and again where I should stay, I increasingly feel that nationality is a clear matter in law but far less simple in personal memory. A passport can prove which country I now belong to, but it cannot decide how I should understand my past."],
      ["所以读鲁西迪的《午夜之子》，最让我感兴趣的，并不是萨利姆·西奈恰好出生在1947年8月15日午夜，与印度独立同时，而是鲁西迪为什么一定要把一个人的出生与一个国家的诞生联系在一起。",
       "So in reading Rushdie’s *Midnight’s Children*, what interests me most is not that Saleem Sinai happens to be born at midnight on 15 August 1947, simultaneous with India’s independence, but why Rushdie insists on tying one person’s birth to the birth of a nation."],
      ["萨利姆似乎从出生起就注定要代表印度。但问题是，他连自己的身世都无法完全确定，又怎么能够代表一个如此复杂的国家？",
       "Saleem seems destined from birth to represent India. But he cannot even be sure of his own parentage, so how can he represent a country so complex?"],
      ["小说中那个出生时被调换的婴儿情节，我觉得尤其重要。萨利姆原本以为自己的家庭、血统与身份都具有某种必然性，后来却发现，这一切竟然取决于一次人为的交换。如果一个人的身份可以因为一次偶然的调换而彻底改变，那么我们通常认为理所当然的民族归属，又有多少是真正天然的？",
       "The baby swap at birth seems to me especially important. Saleem assumed his family, bloodline and identity had a kind of necessity, only to find that all of it hinged on a human exchange. If a person’s identity can be completely changed by an accidental switch, how much of the national belonging we usually take for granted is truly natural?"],
      ["这让我想到自己对国籍的理解发生过的变化。年轻时，我更容易把国家理解为出生时就已经确定的身份。后来在美国读书、毕业，开始工作，逐渐建立自己的生活，我才意识到，一个人对国家的归属也可以是后来作出的选择。",
       "This reminds me of how my own understanding of nationality has changed. When young, I more readily saw a country as an identity fixed at birth. Later, studying and graduating in America, starting work and gradually building a life here, I realized that a person’s belonging to a country can also be a choice made afterward."],
      ["但选择了新的归属，并不意味着过去的经历就此消失。语言、成长环境、家庭记忆，以及看待世界的习惯，并不会随着法律身份的变化而自动改变。",
       "But choosing a new belonging does not mean the past disappears. Language, the place one grew up, family memory and one’s habits of seeing the world do not change automatically with a change of legal status."],
      ["我想，这也是《午夜之子》最有意思的矛盾：国家总是希望能够讲述一个清晰的起源故事，但真正生活在国家之中的人，却很少拥有如此整齐的身世。",
       "I think this is also the most interesting contradiction in *Midnight’s Children*: a nation always wants to tell a clear origin story, but the people who actually live in it rarely have such a tidy ancestry."],
      ["鲁西迪的叙述也始终在破坏这种整齐。萨利姆不断打断自己，修正记忆，夸大细节，甚至弄错历史事件发生的时间。他越是努力证明自己的人生与印度历史紧密相连，读者就越难相信他能够完整地讲述其中任何一个。",
       "Rushdie’s narration keeps undoing that tidiness. Saleem interrupts himself, corrects his memory, exaggerates details, even gets the dates of historical events wrong. The harder he tries to prove his life is bound up with India’s history, the harder it is for the reader to believe he can tell either one completely."],
      ["我很喜欢这种写法。因为它并不是简单地告诉我们历史不可靠，而是让叙述者自己成为这种不可靠的证明。",
       "I like this way of writing very much, because it does not simply tell us that history is unreliable; it makes the narrator himself the proof of that unreliability."],
      ["尤其是印度独立之后的历史，并没有按照民族主义叙事中那种从殖民压迫走向自由与统一的方向发展。印巴分治、宗教冲突、战争，以及英迪拉·甘地时期的紧急状态，都不断打破独立时所寄托的希望。",
       "India’s history after independence, in particular, did not move from colonial oppression toward freedom and unity as the nationalist narrative would have it. Partition, religious conflict, war and the Emergency under Indira Gandhi kept breaking the hopes invested in independence."],
      ["那些与印度同时出生、拥有特殊能力的午夜之子，原本象征着新国家的无数可能性。但随着政治权力逐渐集中，他们的特殊性反而成为必须被控制和消除的东西。",
       "The midnight’s children, born together with India and gifted with special powers, originally symbolize the countless possibilities of the new nation. But as political power becomes concentrated, their very distinctiveness becomes something that must be controlled and eliminated."],
      ["我觉得这里有一种很深的讽刺。一个国家在独立时宣称要让人民决定自己的命运，后来却可能以国家统一与政治秩序的名义，限制这些人的自由。",
       "I find a deep irony here. A country declares at independence that its people will decide their own fate, and later may restrict their freedom in the name of national unity and political order."],
      ["不过，我并不想把《午夜之子》简单理解为对印度民族主义的批判。鲁西迪真正让我感兴趣的，是他对任何单一历史解释的怀疑。",
       "Still, I do not want to read *Midnight’s Children* simply as a critique of Indian nationalism. What truly interests me in Rushdie is his suspicion of any single explanation of history."],
      ["一个国家的历史可以被写成独立与进步的故事，也可以被写成分裂与暴力的故事。但对于真正经历这些事件的人而言，历史往往同时包含希望、偶然、错误和失去。",
       "A nation’s history can be written as a story of independence and progress, or as one of division and violence. But for those who actually lived through these events, history often contains hope, chance, error and loss all at once."],
      ["萨利姆不断试图把自己的一生讲述成印度的缩影，却始终无法让所有细节吻合。他的身体逐渐破碎，记忆越来越混乱，而他仍然坚持讲述，仿佛只要故事还没有结束，自己与这个国家之间的联系就仍然存在。",
       "Saleem keeps trying to tell his life as a miniature of India, yet can never make every detail fit. His body gradually cracks, his memory grows more confused, and still he keeps telling, as if the bond between himself and the country remains so long as the story is not finished."],
      ["我想，这一点比小说中的魔幻现实主义更加打动我。",
       "I think this moves me more than the novel’s magical realism."],
      ["因为我们每个人其实都在做类似的事情。随着年龄增长，我们不断重新解释自己的过去，把曾经偶然发生的选择，逐渐理解成某种人生道路。我们喜欢相信今天的自己，是过去所有经历自然发展出来的结果，却很少愿意承认，其中有多少事情原本可以完全不同。",
       "Because each of us does something similar. As we grow older we keep reinterpreting our past, gradually coming to understand choices that happened by chance as a kind of life path. We like to believe that today’s self is the natural outcome of everything before, and are seldom willing to admit how much of it could have been entirely different."],
      ["萨利姆出生的那个午夜，后来被赋予了整个印度的历史意义。但对于刚刚出生的婴儿而言，那原本只是一个他自己毫不知情的时刻。",
       "The midnight of Saleem’s birth is later given the historical meaning of all India. But for a newborn, it was just a moment he knew nothing about."],
      ["正如一个人出生时，并不知道自己将来会在哪里生活、使用什么语言，又会把哪个国家称作自己的家。",
       "Just as a person at birth does not know where he will live, what language he will use, or which country he will call home."],
      ["读完《午夜之子》，我反而不再那么在意萨利姆究竟能否代表印度。",
       "Having finished *Midnight’s Children*, I find I no longer care so much whether Saleem can represent India."],
      ["我更在意的是，为什么我们总希望一个人的身份能够得到某种最终解释。",
       "I care more about why we always want a person’s identity to receive some final explanation."],
      ["也许国家可以规定公民身份，历史可以记录出生日期，但一个人究竟属于哪里，始终不是一张出生证明能够回答的问题。",
       "Perhaps a state can define citizenship and history can record a birth date, but where a person ultimately belongs is a question no birth certificate can ever answer."]
    ]
  },
  {
    "date": "2023-10-23",
    "title": "A Gift Without a Way Out",
    "slug": "a-gift-without-a-way-out",
    "category": "Novel",
    "book": {
      "cover": "my_brilliant_friend.jpg",
      "title": "My Brilliant Friend",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2012",
        "Book one of the Neapolitan Novels: two girls grow up in a poor neighborhood of postwar Naples, and school sends them in different directions."
      ]
    },
    "place": "于加州库比蒂诺\nCupertino, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["莉拉和莱农住在那不勒斯，却从没真正见过大海。城市就在眼前，她们的世界只有街区那么大：鞋匠、杂货商、放高利贷的人，楼梯间里的争吵，父亲打孩子的声音。Ferrante 从战后那不勒斯一个贫穷的街区写起，我喜欢这样的开头。",
       "Lila and Lenù live in Naples and have never really seen the sea. The city is right there, and their world is only as big as the neighborhood: the shoemaker, the grocer, the moneylender, the quarrels on the stairwell, the sound of fathers beating their children. Ferrante starts from a poor neighborhood of postwar Naples, and I like that beginning."],
      ["这样的街区背后，是意大利统一以来的“南方问题”（Questione Meridionale）。19世纪的统一没有抹平南北的经济差距，二战之后北方成了工业中心，南方许多家庭仍靠小手工业、零售、临时劳动和街坊的人情过活。现代意大利对不同阶级的人来说，从来不是同一个国家。",
       "Behind a neighborhood like this lies the “Southern Question” (Questione Meridionale) that has run through Italy since unification. Unification in the nineteenth century did not close the economic gap between north and south. After the Second World War the north became the center of industry, and many southern families still lived on small crafts, retail, casual labor and the favors of neighbors. Modern Italy was never the same country for people of different classes."],
      ["再看那间鞋店。莉拉天赋惊人，却要回到父亲的鞋店里去；莱农未必比她聪明，因为家里让了步，又有老师帮忙，得以继续念书。两个女孩的分岔，由家里付不付得起学费、肯不肯让女儿读下去决定，和智力无关。",
       "Then there is the shoe shop. Lila, with her astonishing gift, has to go back to her father’s shop; Lenù, who is not necessarily the cleverer, keeps studying because her family gives way and a teacher backs her. What divides the two girls is whether a family can pay for schooling and is willing to let a daughter keep reading. Intelligence has nothing to do with it."],
      ["我记得书里语言和阶级的关系。那不勒斯方言是她们吵架、害怕、发怒时说的话；学校里的标准意大利语、拉丁语和古典文学，是通往另一个阶层的通行证。莱农学会的除了知识，还有怎么说话，怎么管住自己的身体，怎么让别人听不出她从哪里来。",
       "I remember how language and class run together in the book. The Neapolitan dialect is what they speak when they quarrel, fear and rage; the standard Italian, Latin and classical literature of school are passes into another class. What Lenù learns includes more than knowledge: how to speak, how to hold her body in check, how to keep others from hearing where she comes from."],
      ["书里最残酷的一点，是天赋并不天然属于有机会实现它的人。莉拉被迫离开学校，莱农一辈子都在追她。她们的友谊里于是总混着爱、嫉妒、羞耻和较劲。",
       "The cruelest thing in *My Brilliant Friend* is that talent does not naturally belong to the person who gets the chance to realize it. Lila is forced out of school, and Lenù spends her whole life chasing her. Their friendship is always mixed with love, envy, shame and rivalry."],
      ["莱农后来越成功，越要同童年的自己拉开距离。教育给了她逃离贫穷的机会，也教她把口音、家人和过去看成要改的毛病。往上走的人，有时也在同时学着看轻自己的来处。而那个没能离开的天才，成了莱农一生甩不掉的另一种可能，一直站在她身后的街区里。",
       "The more successful Lenù becomes, the more distance she needs from her childhood self. Education gives her a way out of poverty and also teaches her to treat her accent, her family and her past as flaws to be corrected. Someone moving up is sometimes learning, at the same time, to look down on where she came from. And the genius who could not leave becomes the other possibility Lenù never shakes off, standing behind her in the neighborhood the whole way."]
    ]
  },
  {
    "date": "2023-10-31",
    "title": "The Price of a New Name",
    "slug": "the-price-of-a-new-name",
    "category": "Novel",
    "book": {
      "cover": "story_of_a_new_name.jpg",
      "title": "The Story of a New Name",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2013",
        "Book two of the Neapolitan Novels: Lila marries into money, Lenù goes to university in Pisa, and each takes on a new social identity."
      ]
    },
    "place": "于葡萄牙里斯本\nLisbon, Portugal",
    "languages": ["Chinese", "English"],
    "prose": [
      ["婚礼那天。莉拉嫁给斯特凡诺，看上去终于不再是鞋匠的女儿，可婚礼上就有了背叛，之后是丈夫的暴力，连她亲手设计的鞋子也被当成商品，成了家族生意的本钱。她很快明白，物质上的富裕不等于个人的自由。",
       "The wedding day. Lila marries Stefano and seems at last to stop being a shoemaker’s daughter, but there is betrayal at the wedding itself, then her husband’s violence, and even the shoes she designed are treated as merchandise, capital for the family business. She quickly sees that material wealth is not personal freedom."],
      ["街上的新东西。第二部里的意大利正处在战后的经济奇迹中。汽车、电视、家用电器和新的消费方式，慢慢改写人们对体面生活的想象。在那不勒斯的街区，这表现为鞋店的生意、崭新的汽车、昂贵的衣服，也表现为靠婚姻和商业关系积累财富的机会。这里有个很尖锐的历史讽刺：国家在飞快地现代化，家庭里的权力关系却远远没有跟上。一个女人可以穿时髦的衣服，住装修漂亮的公寓，仍被看作丈夫的附属品。消费社会给了女人新的形象，未必给她们新的权利。",
       "New things in the street. In the second book Italy is in its postwar economic miracle. Cars, television, household appliances and new ways of consuming slowly rewrite people’s picture of a respectable life. In the Naples neighborhood this means the shoe business, brand-new cars, expensive clothes, and chances to build wealth through marriage and commercial ties. There is a sharp historical irony in it: the country modernizes fast, while power inside the family is far behind. A woman can wear fashionable clothes and live in a handsomely furnished apartment and still be seen as her husband’s appendage. The consumer society gives women new images, and not necessarily new rights."],
      ["比萨。莱农进入比萨的高等师范学校（Scuola Normale Superiore）。比萨在这里是一座大学城，也代表意大利中北部的精英教育。她第一次走进一个由书籍、学术讨论、政治思想和文化修养构成的世界。",
       "Pisa. Lenù enters the Scuola Normale Superiore. Pisa here is a university town and also stands for the elite education of central and northern Italy. For the first time she steps into a world made of books, academic discussion, political ideas and cultural refinement."],
      ["在富裕人家面前。她很快发现，读得懂拉丁文和古典文学，并不能让她自然地融入知识阶层。南方口音，过分书面化的意大利语，面对有钱人家时的拘谨，不停地提醒她：教育能教知识，教不了一个人从小在优越环境里养成的从容。我想，阶级差异最顽固的部分往往不在财富，在那些从来不必有人明说的生活习惯。有人从小在餐桌上谈文学和政治，有人要花多年才学会在同样的场合不觉得羞耻。",
       "In front of wealthy families. She soon finds that being able to read Latin and classical literature does not let her slip naturally into the intellectual class. Her southern accent, her overly bookish Italian, her stiffness around rich households keep reminding her that education can teach knowledge but cannot hand over the ease a person grows up with in privileged surroundings. I think the most stubborn part of class difference is often not wealth but the habits of life nobody ever has to spell out. Some people talk about literature and politics at the dinner table from childhood; others need years to learn not to feel ashamed in the same setting."],
      ["书名。“新名字”有双重的讽刺。莉拉靠婚姻得到丈夫的姓，莱农靠教育和写作慢慢立起自己的名字。一个进了商人家庭，一个进了文化精英的圈子，两个人却都在用新的社会身份遮盖摆脱不掉的过去。",
       "The title. The “new name” is ironic twice over. Lila gets her husband’s surname through marriage; Lenù slowly builds a name of her own through education and writing. One enters a business family, the other the cultural elite, and both use the new social identity to cover a past they cannot shake off."],
      ["书里的两个人都往上走了，社会流动并没有被否认。Ferrante 追问的是，一个人为什么必须先改掉自己的语言、举止甚至记忆，才会被另一个阶层承认。",
       "Both women in the book do move, so social mobility itself is not denied. What Ferrante keeps asking is why a person must first change her language, her manners, even her memories, before another class will accept her."]
    ]
  },
  {
    "date": "2023-11-04",
    "title": "Leaving Is Not Liberation",
    "slug": "leaving-is-not-liberation",
    "category": "Novel",
    "book": {
      "cover": "those_who_leave.jpg",
      "title": "Those Who Leave and Those Who Stay",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2014",
        "Book three of the Neapolitan Novels: through the upheavals of the late 1960s and 1970s, Lenù writes and raises children while Lila works in a sausage factory."
      ]
    },
    "place": "于意大利比萨\nPisa, Italy",
    "languages": ["Chinese", "English"],
    "prose": [
      ["莱农嫁给了出身优越的彼得罗。在大学、出版社和知识分子的聚会上，她能谈社会革命。回到家，她还要带孩子、做家务，还要在丈夫的学术事业旁边抢出写作的时间。那些在公共场合讲解放的男人，在私人生活里未必肯放下自己的特权。",
       "Lenù has married Pietro, who comes from a privileged family. At universities, publishing houses and gatherings of intellectuals she can talk about social revolution. At home she still looks after the children, does the housework, and fights for time to write beside her husband’s academic career. The men who talk about liberation in public are not necessarily willing to give up their privileges in private."],
      ["莉拉在肉类加工厂上班。环境恶劣，女人的身体受到羞辱，工资低，管事的人握着权力。知识分子在书里讨论的阶级剥削，她直接过着。",
       "Lila works in a meat-processing factory. The conditions are terrible, women’s bodies are humiliated, the wages are low, and the managers hold the power. The class exploitation intellectuals discuss in books, she lives directly."],
      ["放在一起看，叫人不安：莱农能解释压迫，却未必逃得开；莉拉天天受着压迫，不用理论也认得它。",
       "Put side by side, they unsettle: Lenù can explain oppression but cannot necessarily escape it; Lila endures it every day and needs no theory to recognize it."],
      ["第三部写的是1960年代末到1970年代的意大利。大学里的学生谈马克思主义、资本主义和革命，工厂里的工人组织罢工，女人开始公开质疑婚姻、家庭和生育。整个国家好像都在重新讨论什么是自由、平等和解放。1968年的学生运动和1969年的“火热之秋”，把工人、学生和激进左翼带上街头。但阶级革命和女性解放并不天然一致。一个男人可以反对资本家剥削工人，却仍然认为做饭、带孩子、维持家庭是妻子的事。",
       "The third book covers Italy from the late 1960s through the 1970s. Students at universities talk about Marxism, capitalism and revolution, workers in factories organize strikes, and women begin to question marriage, family and motherhood in public. The whole country seems to be rediscussing freedom, equality and liberation. The student movement of 1968 and the “Hot Autumn” of 1969 bring workers, students and the radical left into the streets. But class revolution and women’s liberation do not naturally line up. A man can oppose capitalists exploiting workers and still think cooking, child-rearing and keeping the household going are his wife’s job."],
      ["我最喜欢 Ferrante 的一点，是她总让宏大的政治理想撞上琐碎的日常。她在这里问了一个比阶级流动更尖锐的问题：革命只改变公共领域的权力关系，家里的劳动分配原封不动，它到底解放了谁？",
       "What I like most about Ferrante is that she keeps making grand political ideals collide with ordinary daily life. Here she asks a sharper question than class mobility: when a revolution changes only power relations in the public sphere and leaves the division of labor at home untouched, whom has it liberated?"],
      ["两个女人的分歧因此更复杂。莱农靠教育离开了那不勒斯，慢慢发现知识阶层也有虚荣、排斥和性别等级；莉拉留在街区，却比许多自称进步的人更清楚权力在日常生活里怎么运作。",
       "The divergence between the two women grows more complicated. Lenù left Naples through education and gradually finds that the intellectual class has its own vanity, exclusion and gender hierarchy; Lila stayed in the neighborhood, yet she understands better than many self-styled progressives how power works in daily life."],
      ["《离开的，留下的》里最深的讽刺是：地理上的离开不等于阶级上的解放，思想上的激进也不等于生活中的平等。",
       "The deepest irony in *Those Who Leave and Those Who Stay* is that leaving a place does not free anyone from class, and being radical in thought does not make life equal."],
      ["我们常以为，受了教育，有了职业，进了更高的阶层，就有了自由。Ferrante 让人看到，最难甩掉的是我们早已内化的价值判断：对成功的渴望，对贫穷的羞耻，对男人认可的依赖，对失败的恐惧。",
       "We often assume that an education, a career and a higher social class bring freedom. Ferrante shows that the hardest things to shake off are the value judgments we have already taken in: the craving for success, the shame of poverty, the dependence on men’s approval, the fear of failure."],
      ["离开那不勒斯的莱农，总要莉拉来确认她是谁。留在那不勒斯的莉拉，总在揭穿莱农想相信的那个更文明、更自由的世界。",
       "Lenù, who left Naples, always needs Lila to confirm who she is. Lila, who stayed, keeps exposing the more civilized, freer world Lenù wants to believe in."]
    ]
  },
  {
    "date": "2023-11-17",
    "title": "Who Gets to Tell the Story",
    "slug": "who-gets-to-tell-the-story",
    "category": "Novel",
    "book": {
      "cover": "story_of_the_lost_child.jpg",
      "title": "The Story of the Lost Child",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2015",
        "Book four and the last of the Neapolitan Novels: Lenù returns to Naples, the 1980 earthquake strikes, and a child disappears."
      ]
    },
    "place": "于意大利科莫\nComo, Italy",
    "languages": ["Chinese", "English"],
    "prose": [
      ["第四部一开头，莱农回到了那不勒斯。她已经是作家，见过比萨、佛罗伦萨和意大利知识阶层的生活，却又走进童年熟悉的街区。索拉拉家族的权力、街坊的流言、商业利益和暴力，都还在。几十年过去，城市的外貌变了，支配人们生活的许多关系并没有真正消失。",
       "The fourth book opens with Lenù back in Naples. She is a writer now, she has seen life in Pisa, Florence and among Italy’s intellectuals, and she walks into the neighborhood of her childhood anyway. The power of the Solara family, the neighbors’ gossip, the commercial interests and the violence are all still here. Decades have passed and the face of the city has changed, but many of the relationships that govern people’s lives have not really gone."],
      ["读到1980年的大地震。房子摇晃，墙壁开裂，熟悉的街道一下子失去了稳定。莉拉一直感到的“边界消失”，在这一刻几乎有了物质的形状。我觉得这是整部四部曲里最重要的历史隐喻之一。",
       "Reading the 1980 earthquake. Houses sway, walls crack, familiar streets suddenly lose their footing. The “dissolving of boundaries” Lila has always felt takes an almost physical shape. I think this is one of the most important historical metaphors in the whole tetralogy."],
      ["顺着地震想到那不勒斯自己的历史：有辉煌的古典遗产，丰富的文化，漫长的城市史，却长期受经济不平等、脆弱的公共治理和地方犯罪网络拖累。现代化没有彻底拆掉旧的权力结构，有时反倒让它们换上新的商业和政治形式，继续存在。",
       "The earthquake leads me to Naples’s own history: a splendid classical heritage, a rich culture, a long urban past, and for a long time the weight of economic inequality, fragile public governance and local criminal networks. Modernization did not wholly take apart the old structures of power; sometimes it let them carry on in new commercial and political forms."],
      ["还是喜欢 Ferrante 没有把那不勒斯写成单纯落后的南方城市。这里有活力、语言、创造力和亲密的人际关系，也有控制、暴力和逃不掉的社会义务。人靠街区活下去，也可能被街区吞掉。",
       "Still liking that Ferrante does not write Naples as a merely backward southern city. There is vitality, language, creativity and close human ties here, and also control, violence and social obligations no one can escape. People survive by leaning on the neighborhood, and the neighborhood can swallow them."],
      ["蒂娜失踪了。一个孩子在熟悉的街区里突然不见，没有确定的解释，悲伤也无从结束。书把前面一直在写的不安全感推到了最残酷的地方。莉拉曾用聪明才智对抗家庭、婚姻和阶级的限制，现在面对的失去，连她的智力也理解不了、控制不了。",
       "Tina disappears. A child vanishes in a familiar neighborhood, with no definite explanation and no grief that can end. The book pushes the insecurity it has been writing all along to its cruelest point. Lila once used her intelligence to resist the limits of family, marriage and class, and now faces a loss that her intellect can neither understand nor control."],
      ["我想书名里“失踪的孩子”指的不只是蒂娜，也指战后意大利许诺过、没有完全兑现的未来。那个相信教育能改变命运、经济增长能消除贫困、政治运动能造出平等社会的时代，留下了许多没能兑现的承诺。",
       "I take the “lost child” of the title to mean Tina and also the future postwar Italy promised and did not fully deliver. That era believed education could change fate, economic growth could end poverty and political movements could build an equal society, and it left many promises unkept."],
      ["莱农的写作又添了一层。她讲那不勒斯，讲莉拉，讲自己的生活，由此得到文学上的成功，莉拉却一直抗拒被别人记录、被别人定义。莱农能离开街区，正因为她学会了把经历变成文字；莉拉越来越怀疑，文字到底装不装得下一个人的生活。",
       "Lenù’s writing adds another layer. She tells the story of Naples, of Lila, of her own life, and gets literary success from it, while Lila keeps resisting being recorded and defined by someone else. Lenù could leave the neighborhood precisely because she learned to turn experience into words; Lila doubts more and more that words can hold a person’s life."],
      ["最后，童年的玩偶重新出现。我翻回去看整部四部曲：读到的一切，始终是莱农讲出来的莉拉。这个被叫作天才的女人，从来没有过属于自己的声音吗？",
       "At the end the childhood dolls reappear. I turn back over the whole tetralogy: everything I read has been Lila as told by Lenù. Did the woman called a genius never have a voice of her own?"],
      ["莉拉最后消失了。我想这也许是她对莱农、对读者、甚至对文学本身的最后一次拒绝：你可以讲我的故事，但你永远不能完全拥有我。",
       "Lila finally disappears. I think it may be her last refusal, of Lenù, of the reader, even of literature itself: you may tell my story, but you can never fully own me."],
      ["这也让我觉得，Ferrante 写的不只是两个女人的友谊，还有历史怎样被保存。能离开、受教育、掌握语言的人，最后得到了讲述过去的权力；留在原地的人，即使生命同样丰富，也可能只作为别人的故事被记住。最叫人不安的，是一个人消失以后，我们才发现自己对她一生的理解，一直来自另一个人的叙述。",
       "It also tells me Ferrante is writing about more than the friendship of two women; she is writing about how history gets kept. The ones who could leave, study and master language end up with the power to tell the past; the ones who stayed, with lives just as rich, may be remembered only as someone else’s story. The most unsettling part is that after a person is gone we find our understanding of her whole life has always come from another person’s telling."],
      ["四部曲总评：一个国家的现代化，与两个女人无法完成的逃离",
       "On the whole tetralogy: a nation’s modernization, and the escape two women could not complete", "h"],
      ["合上第四本。读完整套“那不勒斯四部曲”，越来越觉得它不只是女性友谊的故事，也是借两个女人的生命写下的战后意大利社会史。",
       "Closing the fourth book. Having finished the whole Neapolitan Novels, I feel more and more that it is a story of female friendship and also a social history of postwar Italy written through two women’s lives."],
      ["四本书差不多对应现代化的四个阶段：《我的天才女友》是战后贫困和阶级分化，《新名字的故事》是经济奇迹和消费社会，《离开的，留下的》是政治激进化和女性解放，《失踪的孩子》是现代化的承诺渐渐破裂之后的失落。",
       "The four books line up almost with four stages of modernization: *My Brilliant Friend* is postwar poverty and class division, *The Story of a New Name* the economic miracle and consumer society, *Those Who Leave and Those Who Stay* political radicalization and women’s liberation, and *The Story of the Lost Child* the loss that follows once the promises of modernization start to break."],
      ["那不勒斯和比萨之间的距离，是南方到中北部的地理距离，也是两种社会经验之间的距离。莱农靠教育进入精英阶层，学会标准意大利语、古典文学和知识分子的生活方式；莉拉留在那不勒斯，靠自己的聪明、劳动和判断力，在地方社会的权力关系里艰难活着。",
       "The distance between Naples and Pisa is the geographic distance from south to center-north and also the distance between two kinds of social experience. Lenù enters the elite through education and learns standard Italian, classical literature and the intellectual way of life; Lila stays in Naples and, on her intelligence, labor and judgment, lives with difficulty inside the power relations of local society."],
      ["我最欣赏的是 Ferrante 拒绝把这两种人生写成成功与失败的对照。莱农得到社会认可，却不断怀疑自己的才华；莉拉没有同样的受教育机会，却始终有让莱农不安的洞察力。一个靠写作得到讲述世界的权力，另一个始终拒绝被世界轻易解释。",
       "What I admire most is that Ferrante refuses to write the two lives as success against failure. Lenù gains recognition and keeps doubting her talent; Lila never gets the same schooling and always has an insight that unsettles Lenù. One gains through writing the power to tell the world, and the other always refuses to be easily explained by it."],
      ["如果说意大利的现代化承诺每个人都能靠教育、劳动和个人努力改变命运，Ferrante 写出了这个承诺背后最难面对的事实：社会流动能改变一个人的位置，却未必改变决定谁有资格流动的规则。",
       "If Italy’s modernization promised that everyone could change their fate through education, labor and personal effort, Ferrante writes the hardest fact behind the promise: mobility can change a person’s position without changing the rules that decide who is allowed to move."],
      ["她们的友谊不是纯粹的支持和陪伴，是持续半生的互相比较。莱农需要莉拉，因为莉拉是她没有实现的另一个自己；莉拉也需要莱农，因为莱农活出了她曾被剥夺的一种可能。她们彼此成就，也彼此伤害，没法真正生活在一起，也没法彻底离开对方的人生。",
       "Their friendship is not pure support and company; it is a comparison that lasts half a lifetime. Lenù needs Lila because Lila is the other self she never realized; Lila needs Lenù because Lenù lives out a possibility she was denied. They make each other and hurt each other, unable to truly live together and unable to leave each other’s lives."],
      ["还在想一件事：一个人的命运从来不只是个人的故事。我们以为自己在选择人生，其实也一直在回应家庭、阶级、语言、性别和时代早就替我们划好的边界。那个“天才女友”，也许就是一直提醒我们，在成为今天的自己之前，我们原本还可能成为谁的人……",
       "One thing is still on my mind: a person’s fate is never only a personal story. We think we are choosing our lives, and we are also answering, all the time, boundaries that family, class, language, gender and era drew for us long ago. The “brilliant friend” may be the one who keeps reminding us who else we might have become before we became who we are, and…"]
    ]
  },
  {
    "date": "2024-11-18",
    "title": "Where to Stay, When to Leave",
    "slug": "where-to-stay-when-to-leave",
    "category": "Memoir",
    "book": {
      "cover": "real_estate.jpg",
      "title": "自己的房子 (Real Estate)",
      "author": "德博拉·利维 Deborah Levy",
      "language": "Chinese",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Memoir · Chinese translation",
        "Levy travels between London, Paris and Berlin, studying other people’s houses and imagining one of her own."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "她不再只是那个",
          "She is no longer only"
        ],
        [
          "骑电动自行车的离婚女人，",
          "the divorced woman on an electric bike,"
        ],
        [
          "不再只在朋友的",
          "writing only"
        ],
        [
          "花园小屋里写字。",
          "in a friend’s garden shed."
        ]
      ],
      [
        [
          "她在伦敦、巴黎、柏林之间走，",
          "She moves between London, Paris and Berlin,"
        ],
        [
          "住进一间又一间房，",
          "sleeps in one room after another,"
        ],
        [
          "看别人的房子，",
          "looks at other people’s houses,"
        ],
        [
          "一遍遍想象",
          "and keeps picturing"
        ],
        [
          "一栋自己的。",
          "one of her own."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我想起 Virginia Woolf 的",
          "I think of Virginia Woolf’s"
        ],
        [
          "《一间自己的房间》。",
          "A Room of One’s Own."
        ],
        [
          "Levy 要的更远一些，",
          "Levy wants to go further,"
        ],
        [
          "比一扇能关上的门更多：",
          "past a door that closes,"
        ],
        [
          "一整个空间，",
          "to a whole space"
        ],
        [
          "由她决定怎样生活。",
          "where she decides how to live."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "她要找的",
          "What she looks for"
        ],
        [
          "不全是一份房产。",
          "is not entirely property."
        ],
        [
          "她已有比年轻时更多的自由，",
          "She has more freedom than when she was young"
        ],
        [
          "仍会想象另一种生活，",
          "and still imagines another life,"
        ],
        [
          "另一处住所，",
          "another dwelling,"
        ],
        [
          "另一个自己。",
          "another self."
        ]
      ],
      [
        [
          "房子是一个具体的愿望，",
          "The house is a wish for something solid"
        ],
        [
          "也是那颗",
          "and also the inner self"
        ],
        [
          "始终没法完全安顿的心。",
          "that never quite settles."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "中年之后的独立，",
          "Independence after middle age"
        ],
        [
          "她没有写成故事的终点。",
          "she does not write as the end of the story."
        ],
        [
          "摆脱了婚姻的束缚，",
          "The marriage has loosened its hold,"
        ],
        [
          "有了写作，有了自己的日子，",
          "the writing and the days are her own,"
        ],
        [
          "一个人仍可以望向别处。",
          "and a person can still look elsewhere."
        ]
      ],
      [
        [
          "有了自己的房子，",
          "To have a house of one’s own"
        ],
        [
          "未必是找到了归宿，",
          "may not mean finding a home."
        ],
        [
          "是终于能决定",
          "It means being able to decide"
        ],
        [
          "哪里值得停留，",
          "where is worth staying"
        ],
        [
          "什么时候该走。",
          "and when to leave."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "三本书连在一起读：",
          "Read the three books in a line."
        ],
        [
          "《我不想知道的事》是承认，",
          "Things I Don’t Want to Know is admitting,"
        ],
        [
          "《生活的代价》是离开，",
          "The Cost of Living is leaving,"
        ],
        [
          "《自己的房子》是重新想象",
          "Real Estate is imagining again"
        ],
        [
          "自己想过怎样的生活。",
          "the life she wants."
        ]
      ],
      [
        [
          "从不愿面对的真相，",
          "From the truth she would not face,"
        ],
        [
          "到为自由付出的代价，",
          "to the price paid for freedom,"
        ],
        [
          "到对归属的新定义，",
          "to a new meaning of belonging,"
        ],
        [
          "Levy 写的一直是",
          "Levy writes always about"
        ],
        [
          "一个女人在半生之后，",
          "a woman, half a lifetime on,"
        ],
        [
          "慢慢把自己的人生",
          "slowly handing her life"
        ],
        [
          "交还给自己。",
          "back to herself."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "一间能安静写作的房，",
          "A room where she can write in quiet,"
        ],
        [
          "和不必每时每刻",
          "and days that need not answer"
        ],
        [
          "回应别人需要的日子，",
          "what others need at every moment:"
        ],
        [
          "对一个多年来",
          "for a woman who long arranged"
        ],
        [
          "围着家和孩子安排生活的人，",
          "her life around home and children,"
        ],
        [
          "曾是难得的奢侈。",
          "these were once a rare luxury."
        ]
      ],
      [
        [
          "一张桌子。",
          "A table."
        ],
        [
          "窗。",
          "Windows."
        ],
        [
          "光。",
          "Light."
        ]
      ]
    ]
  },
  {
    "date": "2024-11-09",
    "title": "Paying for the Life You Choose",
    "slug": "paying-for-the-life-you-choose",
    "category": "Memoir",
    "book": {
      "cover": "cost_of_living.jpg",
      "title": "生活的代价 (The Cost of Living)",
      "author": "德博拉·利维 Deborah Levy",
      "language": "Chinese",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Memoir · Chinese translation",
        "After her marriage ends, Levy moves into a rented London flat with her two daughters and learns to live on her own."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["亲爱的德博拉：",
       "Dear Deborah,"],
      ["婚姻结束以后，你带着两个女儿搬进伦敦一间租来的公寓。你骑电动自行车穿过城市，在朋友花园里的小屋写作，账单、家务和孩子们的日子都压在同一天里。你就是在这样的日子里，重新学着一个人生活。",
       "After your marriage ended, you moved with your two daughters into a rented flat in London. You rode an electric bike across the city and wrote in a friend’s garden shed, and the bills, the housework and your children’s lives all pressed into the same day. In days like those you learned again how to live alone."],
      ["我喜欢你写离婚时几乎没有控诉，也没有把自由写得很轻。离开意味着失去熟悉的房子，失去经济上的安全，失去那种有人分担日常琐事的生活。门推开了，外面还是要付房租、养孩子、在疲惫里继续工作。",
       "I like that when you write about divorce there is hardly any accusation, and freedom is never made to sound light. Leaving meant losing the familiar house, the financial security, the life in which someone shared the daily chores. You pushed the door open, and outside there was still rent to pay, children to raise, work to go on with through the tiredness."],
      ["你的书名我想了很久。自由有价格，安稳也有。留在婚姻里，你付出的是时间、欲望和写作的空间；离开之后，你付的是经济的压力、孤独和不确定。哪一种生活都不会白白得到。",
       "I thought about your title for a long time. Freedom has a price, and so does security. Inside the marriage you paid with your time, your desire and your room to write; after leaving you paid with money worries, loneliness and uncertainty. No life comes without a loss."],
      ["你没有证明离开一定比留下幸福。你只是终于愿意为自己选的生活付账。比起重新开始，更贵的恐怕是多年以后才发现，自己一直在为一种不想要的生活付钱。",
       "You do not prove that leaving is happier than staying. You are simply, at last, willing to pay for the life you chose. Starting over costs a great deal, but I suspect it costs less than finding out years later that you have been paying all along for a life you never wanted."],
      ["你的读者，\nHaotian",
       "Yours,\nHaotian"]
    ]
  },
  {
    "date": "2024-11-02",
    "title": "Pretending Not to Know",
    "slug": "pretending-not-to-know",
    "category": "Memoir",
    "book": {
      "cover": "what_i_dont_want_to_know.jpg",
      "title": "我不想知道的事 (Things I Don’t Want to Know)",
      "author": "德博拉·利维 Deborah Levy",
      "language": "Chinese",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Memoir · Chinese translation",
        "Levy begins with a breakdown on a Mallorcan hillside and works back through a South African childhood, a father jailed for opposing apartheid, and the weariness of marriage and motherhood."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["他问：一本回忆录从中年女人在马略卡岛的山坡上骑车、忽然哭个不停写起，这算什么开头？",
       "He asked: A memoir that opens with a middle-aged woman cycling on a hillside in Mallorca and suddenly crying without stopping. What kind of beginning is that?"],
      ["我答：德博拉·利维没有急着解释眼泪。她独自在异乡，让记忆慢慢浮上来：南非的童年，因反对种族隔离而入狱的父亲，搬到英国之后的生活，还有婚姻和母职留下的疲惫。",
       "I answered: Deborah Levy does not hurry to explain the tears. She is alone in a foreign place, and she lets memory rise slowly: a childhood in South Africa, a father jailed for opposing apartheid, life after the move to England, and the exhaustion left by marriage and motherhood."],
      ["他问：她为什么要借奥威尔？",
       "He asked: Why does she borrow from Orwell?"],
      ["我答：为了重新想一个女人为什么写作。奥威尔那篇谈写作动机的文章，可以坦然说野心、政治和文学。利维得先面对更琐碎的事：孩子、家务、婚姻，还有一个女人想要属于自己的时间时，跟着来的愧疚。",
       "I answered: To rethink why a woman writes at all. In his essay on why he writes, Orwell can speak openly of ambition, politics and literature. Levy has to face humbler things first: children, housework, marriage, and the guilt that follows when a woman wants time of her own."],
      ["他问：书名叫“我不想知道的事”，她到底有什么不知道？",
       "He asked: The title is “things I don’t want to know.” What is it that she doesn’t know?"],
      ["我答：她都知道，微妙就在这里。她只是不愿承认自己早已知道。她知道婚姻里的妥协并不总出于爱，知道照顾别人有时就是不停地推迟自己的生活，知道那些看上去自愿的牺牲，早已成了别人眼里的理所当然。承认这些，就得重新审视她用半生建起来的生活。",
       "I answered: She knows all of it, and that is the subtle part. She just will not admit that she has known for a long time. She knows the compromises in a marriage do not always come from love, that caring for others can mean postponing your own life again and again, and that sacrifices which look voluntary have long since become what other people take for granted. To admit this, she would have to re-examine a life she spent half her years building."],
      ["他问：那她醒悟之后，该痛快地反抗一场吧？",
       "He asked: Then once she wakes up, shouldn’t she rebel, and be done with it?"],
      ["我答：我喜欢她没有这样写。人继续过日子，常常是因为看得太清楚，才需要暂时装作不知道。",
       "I answered: I like that she does not write it that way. People often carry on with their lives because they see too clearly, and need for a while to pretend they don’t."],
      ["他问：既然都看清了，为什么还要装？",
       "He asked: If she sees it all, why pretend?"],
      ["我答：因为一旦承认，就回不到从前那种心安理得了。",
       "I answered: Because once she admits it, she can no longer go back to how things were with an easy conscience."]
    ]
  },
  {
    "date": "2025-09-11",
    "title": "Heirs to the California Dream",
    "category": "Novel",
    "book": {
      "cover": "run_river.jpg",
      "title": "Run River",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English edition",
        "Didion’s novel of an old landowning family in the Sacramento Valley, and of a California that is passing away."
      ]
    },
    "place": "于加州伯克利\nBerkeley, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["萨克拉门托河谷，一个守着土地的老家族。他们说起血统，说起家里的旧事，语气里有一种笃定：这些东西本来就该是自己的。",
       "The Sacramento Valley, and an old family holding on to its land. They talk about bloodline and family memory with a steadiness in their voices: these things were always meant to be theirs."],
      ["这是《Run River》给我的第一个画面。他们怀念一个正在消失的加州，却很少想到，那个美好的过去，只是他们的特权还没有受到挑战的年代。Didion 的加州从来不只是一处地理空间，它更像一部不断更新的美国精英自我神话史。她写下的是一个家族的衰败，也是一个阶级把自己的历史当成了整个社会的历史。",
       "That is the first picture *Run River* gives me. They long for a vanishing California, and seldom think that the lovely past was only a time when their privilege had not yet been challenged. Didion’s California was never only a geographic space; it reads more like a constantly updated history of the self-mythology of America’s elite. She writes the decline of one family, and also a class taking its own history for the history of the whole society."],
      ["我留意的是“继承”这个词。这家人继承的有土地，也有一套解释：这些东西为什么属于他们，为什么是应得的。",
       "The word I keep noticing is “inheritance.” What this family inherits is land, and also an explanation: why these things belong to them, and why they are deserved."],
      ["六十多年后，还是那片土地，被继承的东西换了。训练最前沿的 AI 模型需要的资金和算力，只有极少数公司和个人付得起，而这种集中，常被讲成远见与才能的结果。土地换成了算力，传下来的仍是同一种叙述：成功来自自己的能力，与起点、资本和时机无关。",
       "More than sixty years later, on the same land, what gets inherited has changed. The funding and computing power needed to train frontier AI models is within reach of only a handful of companies and individuals, and that concentration is often told as the result of foresight and talent. Land has turned into compute, and the story handed down is the same one: success comes from one’s own ability, with no debt to starting point, capital or timing."],
      ["让我更不安的是，我并不站在这个世界外面。我是受益者，也是参与者，拿着这个行业给的物质回报，也曾相信那些创造和改变世界的说法。对硅谷的怀疑，最后转成了对自己的审视。",
       "What unsettles me more is that I do not stand outside this world. I am a beneficiary and a participant. I take the material rewards the industry pays, and I once believed in the talk of creating and changing the world. My doubt about Silicon Valley has turned, in the end, into a look at myself."],
      ["重读 Didion，我看到她笔下的精英始终在讲自己的故事，很少注意到故事之外还有一个更复杂、更不平等的现实。",
       "Rereading Didion, I see that the elites in her writing are always telling stories about themselves, and seldom notice that beyond the story lies a more complicated, more unequal reality."],
      ["这一次，我也在故事里面。",
       "This time, I am inside the story too."]
    ]
  },
  {
    "date": "2025-12-10",
    "title": "When America Is No Longer a Story That Can Be Told",
    "category": "Essays",
    "book": {
      "cover": "the_white_album.jpg",
      "title": "The White Album",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Essays · FSG Classics edition",
        "Didion’s essays on California and America at the end of the 1960s, where hippie freedom, Hollywood, political radicalism and conflicts of race and class run together."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["“We tell ourselves stories in order to live.” Joan Didion 用这句话开篇，之后整本书都在质疑它。",
       "“We tell ourselves stories in order to live.” Joan Didion opens with this sentence, and then spends the whole book questioning it."],
      ["1960年代末的加州：嬉皮士的自由理想，好莱坞的繁华，政治激进主义，种族与阶级的冲突，全搅在一起。每个人都想给这个时代安上一个意义，而那些宏大的叙事，多半只是盖在混乱现实上的自我安慰。",
       "California at the end of the 1960s: the hippies’ ideal of freedom, Hollywood’s glitter, political radicalism, conflicts of race and class, all tangled together. Everyone wanted to fix some meaning to the era, and those grand narratives were mostly self-consolation laid over a chaotic reality."],
      ["再看她的笔法，冷静，疏离，碎片化。人物、事件和场景彼此断开，没有谁在等着被重新编成一个故事，这种断裂本身就显出故事已经失效。她不相信美国社会造出来的神话，对自己作为观察者的判断也不完全相信。她眼中的美国，已经没法用进步、自由或反叛这样简单的词去解释。",
       "Then there is her manner on the page: cool, detached, fragmentary. Characters, events and scenes are broken off from one another, and none of them waits to be reorganized into a story; the breaks themselves show that story has stopped working. She distrusts the myths American society manufactures, and does not entirely trust her own judgment as an observer either. The America she sees can no longer be explained by words as simple as progress, freedom or rebellion."],
      ["另一个时刻是她写反文化运动。许多自称反抗体制的人，依然沉迷于个人身份、精神体验和自我表达，对更深的阶级结构、种族不平等和社会责任，没有给出像样的回应。反叛慢慢成了一种生活方式，一种可以拿来消费的文化姿态。她笔下的反文化，并不天然代表社会解放。",
       "Another moment is her account of the counterculture. Many who called themselves rebels against the system were still absorbed in personal identity, spiritual experience and self-expression, with no decent answer to deeper class structures, racial inequality and social responsibility. Rebellion slowly became a lifestyle, a cultural pose that could be consumed. The counterculture in her pages does not naturally stand for social liberation."],
      ["读到“反叛成了可供消费的文化姿态”这一句，我想起今天科技行业最常用的几个词：颠覆，改变世界，民主化。这些词原本带着反抗的意思，现在出现在融资演示和产品发布里。反叛成了品牌语言，一个越来越难反对的词汇。",
       "At the line about rebellion becoming a cultural pose for consumption, I think of the words the tech industry uses most: disruption, changing the world, democratizing. These words once carried a sense of resistance, and now they appear in pitch decks and product launches. Rebellion has become brand language, a vocabulary that gets harder and harder to oppose."],
      ["当然，Didion 的冷峻本身也该被质疑。她能以这样疏离的姿态看一个社会崩塌，多少也出自她所处的文化与阶级位置。她看穿了反文化的虚伪，却未必走近那些被美国社会结构性排除的人。她的怀疑主义揭出了叙事的局限，却不一定给出路。",
       "Of course, Didion’s coolness deserves questioning too. That she could watch a society collapse from so detached a stance comes in part from the cultural and class position she held. She saw through the hypocrisy of the counterculture, yet did not necessarily come close to the people structurally shut out by American society. Her skepticism exposes the limits of narrative, and does not necessarily offer a way out."],
      ["所以《The White Album》留给今天的问题，我想是这个：当“改变世界”成了一个行业最熟练的说法，我们是在创造未来，还是在消费关于未来的故事？Didion 记下了1960年代美国神话的破裂，而讲故事的方式，似乎从没停过。如今它出现在融资演示和产品发布里。",
       "So the question *The White Album* leaves for today, I think, is this: when “changing the world” is the phrase an industry has mastered best, are we creating the future, or consuming stories about the future? Didion recorded the breaking of the American myth of the 1960s, and the telling of stories seems never to have stopped. Now it turns up in pitch decks and product launches."]
    ]
  },
  {
    "date": "2025-12-25",
    "title": "When Everyone Thinks They Are Changing the World",
    "category": "Novel",
    "book": {
      "cover": "play_it_as_it_lays.jpg",
      "title": "Play It as It Lays",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English edition",
        "Didion’s novel of Hollywood and Los Angeles, and of Maria Wyeth, who keeps driving the freeways with no destination."
      ]
    },
    "place": "于加州库比蒂诺\nCupertino, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["玛丽亚在洛杉矶的高速公路上开车。她盯着车速、车道和出口，一直在动，没有目的地。开车让她暂时不用面对那些答不出的问题，在不停的行动里，她得到一点秩序。这是《Play It as It Lays》里我最记得的画面。",
       "Maria drives the freeways of Los Angeles. She watches her speed, her lane, the exits. She is always moving and has nowhere to go. Driving lets her put off the questions she cannot answer, and in the constant motion she finds a little order. It is the image I remember best from *Play It as It Lays*."],
      ["小说的背景是好莱坞，到处是钱、名声和创造力。人们拍电影，赴派对，谈新项目，好像每个人都在做重要的事。狄迪恩写的是这些忙碌背后的空。",
       "The novel is set in Hollywood, among money, fame and creativity. People make films, go to parties, talk about new projects, and everyone seems to be making something important. Didion writes the emptiness behind all that busyness."],
      ["封面上印着书里的一句话：“I know what ‘nothing’ means, and keep on playing.”",
       "The cover prints a line from the book: “I know what ‘nothing’ means, and keep on playing.”"],
      ["今天的 AI 行业让我想到同样的情形，只是它的名字叫速度。我们训练更大的模型，追更高的指标，发布更新的产品。每一步都有清楚的目标，每次进步都能证明。大家都在想怎么开得更快，很少有人停下来问，到底要去哪里。",
       "Today’s AI industry reminds me of the same situation, only here it goes by the name of speed. We train bigger models, chase higher benchmarks, ship newer products. Every step has a clear goal and every gain can be shown. Everyone is thinking about how to drive faster, and few stop to ask where we are headed."],
      ["玛丽亚会开车，问题出在开车渐渐顶替了目的地。行业的危险也和这相似：创新本身，顶替了创新原本要服务的东西。我们擅长量的是模型能做什么、产品涨了多少、公司值多少钱，不太擅长量这些能力究竟服务谁。估值不等于社会价值，潜力也不等于已经做出的贡献。",
       "Maria knows how to drive. The trouble is that driving slowly takes the place of a destination. The industry’s danger is similar: innovation itself takes the place of what innovation was meant to serve. We are good at measuring what models can do, how fast products grow and what companies are worth, and less good at measuring whom those abilities serve. Valuation is not social value, and potential is not contribution already made."],
      ["小说结尾，玛丽亚没有得到能解释自己人生的答案，她还得面对生活本身。",
       "At the end of the novel, Maria gets no answer that explains her life. She still has to face life itself."],
      ["读完以后，我记得的仍是那条一直向前延伸的高速公路。",
       "After finishing, what I remember is still that freeway running on ahead."]
    ]
  },
  {
    "date": "2026-11-18",
    "title": "The Unseen Person and the Unseen Homeland",
    "slug": "the-unseen-person-and-the-unseen-homeland",
    "category": "Novel",
    "book": {
      "cover": "liu_su_di.jpg",
      "title": "流俗地",
      "author": "黎紫書 Li Zishu",
      "language": "Traditional Chinese",
      "country": "Malaysia",
      "original": "Chinese",
      "lines": [
        "Novel · Traditional Chinese original, 2019",
        "Yinxia, a blind girl in the Malaysian town of Ipoh, and the people around her over decades of change."
      ]
    },
    "place": "於加州利弗莫爾\nLivermore, CA",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      ["銀霞看不見。書才翻開，這句話就已經立在那裡。先記下一個問題：一個社會怎樣看待生活在其中、卻始終無法被完整看見的人。",
       "Yinxia cannot see. The book has barely opened and the sentence is already standing there. I note down a question first: how does a society regard the people who live in it and can never be fully seen?"],
      ["讀到銀霞在怡保的日子。她認不出街道的顏色，靠聲音、觸覺和記憶過活，一天天搭起自己的生活。身邊的人看得見她，卻先看見她的失明，看見她需要被照顧。她的慾望、判斷和尊嚴排在後面。",
       "I reach Yinxia’s days in Ipoh. She cannot make out the colors of the streets; she lives by sound, touch and memory, and builds her life up day by day. The people around her can see her, but they see her blindness first, and her need for care. Her desires, her judgment and her dignity come after."],
      ["抄一句下來：銀霞看不見別人的面孔，別人卻常常只看見她的身份。我在這句上停了很久。",
       "One line to copy down: Yinxia cannot see other people’s faces, while others often see only her status. I stay on this line for a long time."],
      ["往下讀，怡保的錫礦出現了，我想起馬來西亞華人的歷史。錫礦業帶來繁榮，大批華人移民在殖民經濟裡做礦工、商人、城市居民，在這片土地上建起家庭、學校、社團和街市，慢慢有了自己的語言和地方記憶。扎根這麼深，文化身份和國家歸屬之間的矛盾卻沒有自己消失。",
       "Further on, Ipoh’s tin mines appear, and I think of the history of Malaysian Chinese. Tin brought prosperity; large numbers of Chinese immigrants became miners, merchants and city dwellers in the colonial economy, built families, schools, associations and markets on this land, and slowly formed their own language and local memory. Roots that deep did not make the tension between cultural identity and national belonging disappear by itself."],
      ["時間走到1969年前後。族群衝突，以及之後的國家重組，使族群分類有了更明確的制度意義。華人是國家歷史的參與者，又得一次次在族群、語言與公民身份之間重新安放自己。我停下筆想了一會兒：這不能照搬海外華人思念中國的那套說法。對生活了幾代的人來說，中國是祖輩的來處，未必是自己失去的故鄉。他們熟悉的是怡保的街道、馬來西亞的氣候，以及華語、方言、馬來語和英語交錯的日常。",
       "The years reach 1969 or so. The ethnic conflict, and the national reorganization after it, give ethnic categories a more explicit institutional meaning. The Chinese take part in the nation’s history, and again and again have to find their place anew between ethnicity, language and citizenship. I put the pen down for a moment: this cannot just borrow the narrative of overseas Chinese longing for China. For people whose families have lived here for generations, China is where the forebears came from, not necessarily a homeland they have lost. What they know is Ipoh’s streets, Malaysia’s climate, and a daily life where Mandarin, dialects, Malay and English cross."],
      ["有一句想記下來：他們住在故鄉裡，而這個故鄉有時仍要他們解釋，自己為什麼屬於這裡。",
       "One more thing to note: they live in their homeland, and the homeland sometimes still asks them to explain why they belong here."],
      ["黎紫書沒有把這段歷史寫成一場關於身份認同的公開辯論，這一點我喜歡。大的政治與文化問題，在書裡沉進普通人的生活習慣：說什麼語言，受什麼教育，怎麼謀生，和誰來往，怎麼記住那些漸漸消失的街道和人物。",
       "Li Zishu does not write this history as a public debate about identity, and I like that. The large political and cultural questions sink into the habits of ordinary lives: what language to speak, what schooling to have, how to make a living, whom to keep company with, how to remember the streets and people that are slowly vanishing."],
      ["有個念頭想先按住。銀霞的失明很容易被讀成華人處境的象徵，我不想這樣讀。這樣讀，等於又一次拿走她作為獨立人物的複雜。她先是銀霞，然後才可能是別的什麼。她的身體、感情和命運，不該只為說明一段歷史而存在。",
       "A thought I want to hold down for now. Yinxia’s blindness is easily read as a symbol of the Chinese situation, and I do not want to read it that way. To do so would again take away her complexity as a character in her own right. She is first Yinxia, and only then perhaps anything else. Her body, her feelings and her fate should not exist just to illustrate a stretch of history."],
      ["不過這兩件事有一處相通：被看見和被理解是兩回事。一個族群可以在經濟統計裡很顯眼，在城市景觀裡留下深深的痕跡，複雜的歷史卻仍然擺脫不了一個單一的標籤。一個人也可以被鄰里認識一輩子，卻沒有被理解過。",
       "Still, the two things share one point: being seen and being understood are different. An ethnic group can stand out in the economic statistics and leave deep marks on the cityscape, and its complicated history still cannot shake off a single label. A person can also be known to the neighbors all his life and never be understood."],
      ["下一條我寫得有些猶豫：華人社會自己也有盲點。它保存語言、宗族記憶和互助的傳統，也可能拿家庭責任、體面和成功當尺，把不合期待的人遮住。一個共同體忙著爭取外界承認的時候，不一定看得見自己裡面沉默的人。",
       "The next note I write with some hesitation: Chinese society has its own blind spots. It keeps language, lineage memory and traditions of mutual aid, and it may also use family duty, respectability and success as the measure, and hide those who do not meet expectations. A community busy winning recognition from outside does not always see the silent people inside it."],
      ["讀到這裡，我覺得《流俗地》最有分量的地方，在於讓馬來西亞華人不必時時以族群身份出場，也不去替他們證明他們屬於這片土地。他們可以自私，可以善良，可以庸俗，可以一輩子沒什麼成就。不必是勤勞、堅韌、成功的華人典範，也值得被寫進文學。",
       "Reading on, I feel the most weighty thing about *Liu Su Di* is that it lets Malaysian Chinese go without appearing always as an ethnic identity, and does not try to prove for them that they belong to this land. They can be selfish, kind, vulgar, and go through life with no achievement. They need not be exemplary Chinese, hardworking, resilient or successful, to deserve a place in literature."],
      ["還沒想完：一個人屬於某個地方，也許不必為自己的存在交出足夠的歷史理由。他有權在那裡過一種不必被賦予特殊意義的生活，這樣就夠了。",
       "Not finished thinking: a person who belongs to a place may not have to hand over sufficient historical reasons for being there. He has the right to live there a life that need not be given special meaning, and that is enough."],
      ["再回到銀霞看不見怡保這件事。看得見怡保的人，看見礦業興衰、族群分佈、商業成就和城市變遷，卻不一定看見其中某個普通人漫長而無聲的一生。黎紫書沒有讓銀霞替這座城市發言，只是讓她住在那裡。",
       "Back to the fact that Yinxia cannot see Ipoh. Those who can see it see the mining booms and busts, the ethnic distribution, the commercial achievements, the changes in the city, and not always the long, silent life of one ordinary person within it. Li Zishu does not let Yinxia speak for the city. She only lets her live there."],
      ["一座城市什麼時候成為故鄉，我還沒有想清楚。先記一點：那些不必證明自己有所貢獻的人，也在這裡留下了無可替代的生命。銀霞在怡保，就是這樣住著的。",
       "When a city becomes a homeland, I have not worked out yet. One point to keep for now: people who need not prove they have contributed also leave an irreplaceable life here. Yinxia in Ipoh simply lives like that."]
    ]
  },
  {
    "date": "2026-10-26",
    "title": "When the Observer Becomes the Observed",
    "category": "Exhibition catalogue",
    "book": {
      "cover": "didion_what_she_means.jpg",
      "title": "Joan Didion: What She Means",
      "author": "Joan Didion · ed. Hilton Als",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Exhibition catalogue · English edition",
        "The catalogue of the exhibition of the same name, curated by Hilton Als, that places Didion’s writing among photographs, artworks and archival material."
      ]
    },
    "place": "于加州奥克兰\nOakland, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "pairStanzas": [
      [
        [
          "琼·狄迪恩一生在看美国。",
          "Joan Didion spent her life looking at America."
        ],
        [
          "她看加利福尼亚的繁荣神话，",
          "at California’s myth of prosperity,"
        ],
        [
          "看政治语言背后的权力，",
          "at the power behind political language,"
        ],
        [
          "看人们怎样讲故事，",
          "at how people tell stories"
        ],
        [
          "让矛盾的现实显得合理。",
          "to make a contradictory world seem reasonable."
        ]
      ],
      [
        [
          "如今她被挂在墙上。",
          "Now she hangs on a wall."
        ],
        [
          "一本图录，",
          "A catalogue,"
        ],
        [
          "希尔顿·阿尔斯策划的展览留下的，",
          "left over from the show Hilton Als curated,"
        ],
        [
          "照片、艺术作品、档案，",
          "photographs, artworks, archives,"
        ],
        [
          "把她的写作放回",
          "sets her writing back"
        ],
        [
          "她活过的美国。",
          "inside the America she lived through."
        ]
      ],
      [
        [
          "从前她是观察的人，",
          "Once she was the one who observed,"
        ],
        [
          "决定怎么写别人。",
          "deciding how to write about others."
        ],
        [
          "现在别人来决定，",
          "Now others decide"
        ],
        [
          "哪张照片，哪些文字，",
          "which photograph, which words,"
        ],
        [
          "哪段经历，",
          "which stretch of life"
        ],
        [
          "可以代表她。",
          "can stand for her."
        ]
      ],
      [
        [
          "这种形式最有意思的地方，",
          "What interests me most about this form"
        ],
        [
          "是它改变了她的位置。",
          "is that it changes where she stands."
        ],
        [
          "这让我想起《我从哪里来》。",
          "It reminds me of Where I Was From."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "《我从哪里来》里，",
          "In Where I Was From"
        ],
        [
          "她重看自己长大的加州。",
          "she looks again at the California she grew up in."
        ],
        [
          "她继承过那些故事：",
          "She had inherited the stories:"
        ],
        [
          "西部拓荒，",
          "western settlement,"
        ],
        [
          "个人独立，",
          "individual independence,"
        ],
        [
          "家族奋斗。",
          "family struggle."
        ]
      ],
      [
        [
          "慢慢地她看见，",
          "Slowly she sees"
        ],
        [
          "这些看似自然的价值，",
          "that these values, so natural-seeming,"
        ],
        [
          "盖住了土地、资本、",
          "cover over land, capital,"
        ],
        [
          "政府政策、历史机遇",
          "government policy, historical chance"
        ],
        [
          "之间缠绕的关系。",
          "and the way they are tangled together."
        ]
      ],
      [
        [
          "她没有放过自己的家族。",
          "She does not let her own family off."
        ],
        [
          "故乡的记忆",
          "Her memories of home"
        ],
        [
          "也是那些神话塑造的。",
          "were shaped by those myths too."
        ],
        [
          "独立和自力更生",
          "Independence and self-reliance"
        ],
        [
          "不全是个人品格的结果；",
          "were not wholly a matter of character;"
        ],
        [
          "被讲成个人奋斗的成就，",
          "achievements told as personal striving"
        ],
        [
          "也靠公共资源和制度安排。",
          "leaned on public resources and arrangements."
        ]
      ],
      [
        [
          "我想她的重要，",
          "What matters about her, I think,"
        ],
        [
          "在于她承认自己也信过。",
          "is that she admits she believed too."
        ],
        [
          "她没有站在历史之外",
          "She did not stand outside history"
        ],
        [
          "戳破别人的幻觉；",
          "puncturing other people’s illusions;"
        ],
        [
          "她在重新看",
          "she was looking again"
        ],
        [
          "自己用来理解世界的故事。",
          "at the stories she used to understand the world."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "公众记忆里，她已有一副几乎固定的样子：",
          "In public memory she has an almost fixed look:"
        ],
        [
          "瘦削的身体，",
          "the slight frame,"
        ],
        [
          "深色墨镜，",
          "the dark sunglasses,"
        ],
        [
          "冷静的目光，",
          "the cool gaze,"
        ],
        [
          "还有那些好像能看穿",
          "and sentences that seem to see through"
        ],
        [
          "美国全部混乱的文字。",
          "all of America’s chaos."
        ]
      ],
      [
        [
          "这些肖像很迷人。",
          "The portraits are enormously charming."
        ],
        [
          "她慢慢成了独立、清醒、",
          "She has slowly become a sign of independence,"
        ],
        [
          "知识分子气质的符号。",
          "of clarity, of the intellectual temperament."
        ],
        [
          "这也可能是一个神话。",
          "This too may be a myth."
        ]
      ],
      [
        [
          "加州把复杂的历史",
          "California pressed a complicated history"
        ],
        [
          "压成拓荒者的勇气与独立。",
          "into pioneer courage and independence."
        ],
        [
          "我们也在把她复杂的一生",
          "We are pressing her complicated life"
        ],
        [
          "压成一个永远冷静、",
          "into an observer"
        ],
        [
          "永远清醒的观察者。",
          "forever cool, forever clear-eyed."
        ]
      ],
      [
        [
          "两种叙事相像，",
          "The two narratives are alike"
        ],
        [
          "因为都只留下一部分事实，",
          "because each keeps only some of the facts,"
        ],
        [
          "让复杂的对象",
          "so that a complicated subject"
        ],
        [
          "容易懂，容易欣赏，",
          "is easy to grasp, easy to admire,"
        ],
        [
          "也容易纪念。",
          "easy to commemorate."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "《白色专辑》里，",
          "In The White Album"
        ],
        [
          "她写过自己再也不能靠熟悉的故事",
          "she wrote that she could no longer lean on familiar stories"
        ],
        [
          "理解正在发生的事。",
          "to understand what was happening."
        ],
        [
          "她笔下的美国",
          "Her America"
        ],
        [
          "没有等着聪明的观察者揭晓真相；",
          "was no world waiting for a clever observer to reveal the truth;"
        ],
        [
          "连观察者自己",
          "even the observer herself"
        ],
        [
          "也难以把握。",
          "could hardly grasp it."
        ]
      ],
      [
        [
          "我想她写作里最珍贵的，",
          "What is most precious in her writing, I think,"
        ],
        [
          "是不确定。",
          "is the uncertainty."
        ],
        [
          "她看得见社会叙事的裂缝，",
          "She could see the cracks in social narratives"
        ],
        [
          "却没有一个",
          "and had no answer"
        ],
        [
          "解释一切的答案。",
          "that explained everything."
        ]
      ],
      [
        [
          "一成了偶像，",
          "Once she becomes an icon"
        ],
        [
          "不确定最先消失。",
          "the uncertainty is the first thing to go."
        ],
        [
          "怀疑被简化成洞察力，",
          "Doubt is simplified into insight,"
        ],
        [
          "疏离被读成风格，",
          "detachment is read as style,"
        ],
        [
          "挣扎被整理成",
          "struggle is tidied into"
        ],
        [
          "一种令人羡慕的精神姿态。",
          "an enviable spiritual pose."
        ]
      ],
      [
        [
          "一个不断追问故事如何制造的作家，",
          "A writer who kept asking how stories are made"
        ],
        [
          "自己成了故事制造出来的人物。",
          "has become a figure made by stories."
        ]
      ],
      [
        [
          "于是，在这些肖像面前，",
          "So before these portraits"
        ],
        [
          "一个问题反过来了：",
          "a question turns around:"
        ],
        [
          "如果她用怀疑拆过那么多故事，",
          "if she took apart so many stories with doubt,"
        ],
        [
          "我们是不是也该用她的方法，",
          "we should use her method too,"
        ],
        [
          "重新看她留给我们的形象。",
          "and look again at the image she left us."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我不是说该拒绝纪念她。",
          "I am not saying we should refuse to commemorate her."
        ],
        [
          "图录把她和别的艺术家的作品并置，",
          "The catalogue sets her beside other artists’ work,"
        ],
        [
          "这给了重新看她的机会。",
          "and that offers a chance to look again."
        ],
        [
          "她没有独自站在美国历史之外，",
          "She did not stand alone outside American history;"
        ],
        [
          "她的写作也出自",
          "her writing too came out of"
        ],
        [
          "一个阶级、一片地域、",
          "a particular class, a region,"
        ],
        [
          "一种文化、一个时代。",
          "a culture, an era."
        ]
      ],
      [
        [
          "想理解她，",
          "To understand her"
        ],
        [
          "就不能只找证明她伟大的材料。",
          "we cannot look only for proof of greatness."
        ],
        [
          "哪些经历被一再展示？",
          "Which experiences are shown again and again?"
        ],
        [
          "哪些矛盾被淡化？",
          "Which contradictions are played down?"
        ],
        [
          "某些照片渐渐成了她的象征，",
          "Certain photographs have become her symbol,"
        ],
        [
          "她对自身局限的承认，",
          "while her admission of her own limits"
        ],
        [
          "没有被同样广泛地记住。",
          "has not been remembered as widely."
        ]
      ],
      [
        [
          "书名里的 What She Means",
          "The title’s What She Means"
        ],
        [
          "有两种读法：",
          "reads two ways:"
        ],
        [
          "狄迪恩想说什么，",
          "what Didion meant to say,"
        ],
        [
          "以及她对后来的读者意味着什么。",
          "and what she means to readers after."
        ],
        [
          "两者之间有一段距离。",
          "Between them lies a distance."
        ],
        [
          "作家的思想不等于后人给她的文化意义，",
          "A writer’s thought is not the meaning posterity gives her,"
        ],
        [
          "正如加州真实的历史",
          "as California’s real history"
        ],
        [
          "不等于人们愿意相信的加州。",
          "is not the California people want to believe in."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "她曾追问自己的家族",
          "She asked how her own family"
        ],
        [
          "怎样参与了加州神话的形成。",
          "took part in making the California myth."
        ],
        [
          "我们也该问，",
          "We should ask"
        ],
        [
          "自己怎样参与了",
          "how we take part"
        ],
        [
          "狄迪恩神话的形成。",
          "in making the Didion myth."
        ],
        [
          "对一个一生提醒我们",
          "For a writer who spent her life warning us"
        ],
        [
          "故事会盖住现实的作家，",
          "that stories cover up reality,"
        ],
        [
          "最合适的尊重",
          "the fitting respect"
        ],
        [
          "是别让关于她的故事盖住她自己。",
          "is to keep the stories about her from covering her up."
        ]
      ],
      [
        [
          "展墙上的肖像里，",
          "In the portrait on the wall"
        ],
        [
          "她仍戴着深色墨镜，",
          "she still wears the dark sunglasses,"
        ],
        [
          "目光冷静。",
          "her gaze cool."
        ]
      ]
    ]
  },
  {
    "date": "2025-04-29",
    "title": "Doubt and Origin",
    "slug": "where-i-was-from",
    "category": "Memoir",
    "book": {
      "cover": "where_i_was_from.jpg",
      "title": "Where I Was From",
      "author": "Joan Didion",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": ["Memoir · Knopf, 2003", "Didion’s memoir of California and her family, and of the pioneer myth she grew up inside."]
    },
    "place": "于加州伯克利\nBerkeley, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "where_i_was_from_reading.jpg",
      "alt": "Reading Where I Was From in front of a bookshelf"
    },
    "prose": [
      ["亲爱的 Didion：",
       "Dear Didion,"],
      ["读完《Where I Was From》，我想直接写信给你。我们是谁，是我们真实经历过的一切，还是我们选择相信的、关于自己的那段故事？读你的书，我慢慢觉得，我们对自己身份的理解，没有想象中那么真实，也没有那么稳定。",
       "Having finished *Where I Was From*, I want to write to you directly. Who are we: everything we have actually lived through, or the story about ourselves that we have chosen to believe? Reading your book, I have slowly come to feel that our understanding of our own identity is neither as real nor as stable as we imagine."],
      ["你从小生活在加利福尼亚的拓荒神话里：勇敢的先驱靠坚韧、独立和个人奋斗建起新生活。这是加州的历史，也是你理解自己家族和身份的方式。后来你重新看这段历史，发现所谓自力更生，一直离不开政府支持、历史机遇和社会结构。那些被歌颂成个人奋斗的成就，并不完全属于个人。",
       "You grew up inside California’s pioneer myth: brave settlers who built new lives through grit, independence and individual striving. It was California’s history, and it was also how you understood your family and yourself. Later you looked at that history again and found that so-called self-reliance had always depended on government support, historical opportunity and social structure. The achievements celebrated as individual struggle did not belong entirely to the individual."],
      ["读到这里，我开始想，我们是在认识自己的过去，还是在不断选一个自己能接受的过去。每个人都在给自己的人生写故事。我们把成功归于努力，把失败说成成长，把某些经历当作命运的转折，再把零散的记忆连成一个连贯的自我。这样的叙事给我们归属感，让我们相信今天的自己有迹可循。",
       "Here I start to wonder whether we are getting to know our past or continually choosing a past we can accept. Each of us writes a story for our own life. We attribute success to effort, explain failure as growth, treat certain experiences as turning points of fate, and link the scattered memories into one coherent self. Such a narrative gives us belonging, and lets us believe the person we are today has traceable roots."],
      ["可是我们往往只留下支持自我认同的部分。记得自己的奋斗，容易忽略时代的机遇；珍视家族的荣耀，可能回避其中的特权；怀念故乡的美好，不愿面对它承载的伤害与不公。我们不总是在骗自己，只是太需要相信自己的故事，久了就忘了它也只是一种解释。",
       "But we often keep only the parts that support our sense of who we are. We remember our own striving and easily overlook the opportunities of the age; we treasure the glory of our family and may avoid the privilege inside it; we cherish the beauty of our hometown and are unwilling to face the harm and injustice it carries. We are not always deceiving ourselves. We need to believe our stories so much that, after a while, we forget they are only an interpretation."],
      ["所以你开始怀疑加州神话的时候，面对的除了历史认知的改变，还有身份的动摇。你曾引以为傲的价值，没有想象中那么纯粹，建立在这些价值上的自己又该怎么存在？",
       "So when you began to doubt the myth of California, what you faced was a change in your understanding of history and also a shaking of your identity. The values you once took pride in were not as pure as you imagined, and the self built on them had to go on existing somehow."],
      ["但我渐渐觉得，怀疑自己的故事，并不等于否定自己的人生。过去无法改变，可以重新理解。承认成功里有运气，努力不会因此被抹去；承认家族历史里有不公，也不必否定其中所有值得珍惜的记忆。要放下的，是那个必须永远正确、完整、值得骄傲的自我形象，身份可以留着。",
       "But I have come to feel that doubting our own story does not mean denying our life. We cannot change the past, but we can understand it anew. Admitting that success includes luck does not erase effort; admitting the injustice in a family’s history does not mean rejecting every memory in it worth cherishing. What we may need to put down is the self-image that must always be right, complete and worth being proud of. The identity can stay."],
      ["问题到这里没有结束。揭穿了旧神话，并不能换来一个完全独立、完全属于自己的身份。我们用来质疑过去的语言、价值观和判断标准，本身来自我们想审视的社会。以为摆脱了家庭的期待，也许只是接受了另一种文化的价值；以为终于能独立思考，却未必意识到，独立的思想同样由时代和环境塑造。连反抗过去的思想都带着过去的影响，自由究竟是什么，我得往下想。",
       "The question does not end there. Exposing the old myth does not buy an identity that is fully independent and wholly our own. The language, values and standards of judgment we use to question the past come from the very society we want to examine. We think we have escaped our family’s expectations, and we may only have accepted the values of another culture; we think we can finally think independently, and we do not necessarily notice that independent thought is also shaped by its time and surroundings. If even the thoughts we use against the past carry its influence, what freedom is, I have to keep thinking through."],
      ["我现在的想法是，自由不是彻底摆脱外部影响，那样的自由几乎不存在。我们不能选择出生、家庭、语言和最初接受的价值观，也无法站到历史之外重造一个纯粹的自我。但这不等于只能被动地做环境的产物。自由开始的地方，大概就是我们意识到自己并不完全自由的那一刻。开始追问信念从哪里来，为什么信这些、排斥那些，我们就不再无意识地重复过去。影响摆脱不净，可以重新审视，决定哪些值得继承，哪些要拒绝，哪些仍然值得怀疑。",
       "My thinking for now is that freedom is no complete escape from outside influence; that kind of freedom hardly exists. We cannot choose our birth, family, language or the values we first absorbed, and we cannot stand outside history and make a pure self from scratch. But that does not mean we can only be passive products of our surroundings. Freedom probably begins at the moment we realize we are not entirely free. Once we ask where our beliefs come from, why we believe some things and reject others, we are no longer repeating the past unknowingly. The influences cannot be shaken off entirely, but they can be re-examined, and we can decide which are worth inheriting, which to refuse, and which still deserve doubt."],
      ["这也改变了我读你对故乡的反思的方式。发现加州神话的矛盾，没有让你彻底摆脱和加州的联系。你仍然来自那里，仍然被那段历史塑造。只是你不再需要靠美化故乡，来证明自己身份的价值。成熟的归属感，我想，是看清它的复杂和不完美之后，仍能诚实地承认自己与它的联系。自我认识也是这样，它不会交给我们一个不受任何影响的纯粹的自我，只会让我们接受自己始终站在历史、社会和个人选择的交汇处。我们无法选择世界最初怎样塑造我们，却可以选择，是否一辈子都不去质疑这种塑造。",
       "This also changes how I read your reflection on home. Finding the contradictions in the California myth did not free you entirely from your ties to California. You still came from there, and the history still shaped you. You simply no longer needed to beautify home in order to prove the worth of your identity. A mature sense of belonging, I think, is being able to acknowledge honestly your connection to a place after seeing its complexity and imperfection. Self-knowledge is the same: it does not hand us a pure self untouched by any influence, it lets us accept that we always stand at the meeting point of history, society and personal choice. We cannot choose how the world first shaped us, but we can choose whether to go through life without ever questioning that shaping."],
      ["合上书，我觉得你找的不只是自己从哪里来，还有来处的神话渐渐瓦解之后，你还能怎样理解自己。我们每个人大概都需要一个关于自己的故事，才能在复杂而偶然的人生里找到连续性。自由不在于拥有一个完整、正确、永不改变的故事，在于有勇气不断重新审视、修正，甚至推翻它。我们不能决定自己从哪里来，也不必让关于来处的故事，决定我们最后成为谁。至于我们并不完全是一直以来相信的那个自己，这一点，要慢慢接受。",
       "Closing the book, I feel that what you were looking for was where you came from, and also how you could still understand yourself once the myths about your origins began to fall apart. Each of us probably needs a story about ourselves to find some continuity in a complicated and accidental life. Freedom lies in having the courage to keep re-examining, revising, even overturning that story, and has little to do with owning one that is complete, correct and never changing. We cannot decide where we come from, and we need not let the story about it decide who we finally become. That we are not entirely the person we have always believed ourselves to be is something to accept slowly."],
      ["写到这里，我又看了一眼封面上的书名，Where I Was From。was 是过去式。",
       "Writing this, I look once more at the title on the cover, *Where I Was From*. The *was* is in the past tense."],
      ["你的读者，Haotian",
       "Yours, Haotian"]
    ]
  },
  {
    "date": "2024-08-16",
    "title": "Rebellion and Freedom",
    "slug": "rebellion-and-freedom",
    "category": "Poetry",
    "book": {
      "cover": "ginsberg.jpg",
      "title": "The Essential Ginsberg",
      "author": "Allen Ginsberg",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": ["Poetry · Edited by Michael Schumacher, 2015", "A selection of Allen Ginsberg’s poems, including “Howl”."]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "ginsberg_reading.jpg",
      "alt": "The Essential Ginsberg on a table in front of a bookshelf, with a Books Not Bombs card"
    },
    "prose": [
      ["他问：你读金斯堡，读到的是反抗。反抗社会的规范，难道不就是自由吗？",
       "He asked: You read Ginsberg and what you get is rebellion. Isn’t rebelling against society’s norms simply freedom?"],
      ["我答：《嚎叫》确实把被主流社会视为疯狂、堕落和失败的人放在了诗的中心。开头是：“我见过我们这代人的翘楚在癫狂中毁灭，在歇斯底里的赤裸中挨饿。”他用近乎失控的语言，控诉一个崇尚秩序、效率和物质繁荣，却不断压抑个体精神的社会。疯狂有时比所谓正常更清醒，反叛也成了揭露社会虚伪的一种方式。可我不认为反抗本身就是自由。",
       "I answered: “Howl” does put at the center of the poem the people the mainstream considers mad, degraded and failed. It opens: “I saw the best minds of my generation destroyed by madness, starving hysterical naked.” In language that borders on losing control, he accuses a society that prizes order, efficiency and material prosperity while ceaselessly suppressing the individual spirit. Madness is sometimes clearer-sighted than so-called normality, and rebellion becomes a way of exposing society’s hypocrisy. But I do not think rebellion by itself is freedom."],
      ["他问：服从的人丢了自我，反抗的人守住了自我。这难道不是两个对立的端点？",
       "He asked: The obedient lose themselves and the rebellious keep themselves. Aren’t those opposite ends?"],
      ["我答：细想之下，两者依赖同一样东西。服从者需要社会的认可，反抗者需要社会做自己的对立面。一个靠遵循规则定义自己，另一个靠拒绝规则确认自己。一个人如果必须不断证明自己和社会不同，才觉得自由，他的自由仍由社会决定。",
       "I answered: On reflection, both lean on the same thing. The obedient need society’s approval, and the rebellious need society as their opposite. One defines himself by following the rules, the other confirms himself by refusing them. If a person must keep proving he is different from society in order to feel free, his freedom is still decided by society."],
      ["他问：那自由是什么？",
       "He asked: Then what is freedom?"],
      ["我答：大概是有建立自己价值标准的能力。可以遵循某些传统，拒绝另一些期待，只是这些选择不该只出于对认可的渴望或对权威的愤怒，该出于对自己相信什么、愿意怎样生活的清醒认识。这样说来，自由甚至可能表现为和社会的和解。",
       "I answered: Probably the ability to set one’s own standards of value. A person can follow some traditions and refuse other expectations, but the choices should not come only from a hunger for approval or anger at authority; they should come from a clear understanding of what one believes and how one is willing to live. Put that way, freedom may even take the form of a reconciliation with society."],
      ["他问：和解听起来就是屈服，是对不公保持沉默。",
       "He asked: Reconciliation sounds like surrender, like staying silent about injustice."],
      ["我答：不是屈服，更不是沉默。和解是不再需要社会的评价来证明自己。承认社会存在，理解它的复杂和局限，不让它决定我们的全部价值。该反抗的反抗，与自己原则不冲突的规则，就坦然接受。我想这是一种更成熟的 *don’t give a fuck*：它没有对世界漠不关心，只是不再执着于世界怎么看自己。",
       "I answered: It is not surrender, and certainly not silence. It means no longer needing society’s judgment to prove ourselves. We acknowledge that society exists, understand its complexity and limits, and do not let it decide our whole worth. We rebel against what is worth rebelling against, and calmly accept the rules that do not conflict with our principles. I think this is a more mature kind of *don’t give a fuck*: it has not stopped caring about the world, it has only stopped clinging to how the world sees us."],
      ["他问：照这么说，金斯堡的反抗岂不是白费了？",
       "He asked: By that account, wasn’t Ginsberg’s rebellion wasted?"],
      ["我答：没有。他的诗提醒我们，有些社会规范本身就值得质疑，自由也需要敢打破压抑个体的界限的人。反抗可以是通向自由的路，只是不该成为自由的全部定义。",
       "I answered: No. His poems remind us that some social norms are themselves worth questioning, and that freedom needs people who dare to break the limits that repress the individual. Rebellion can be a road to freedom. It should not become the whole definition of it."],
      ["他问：那最难的是什么？",
       "He asked: Then what is the hardest part?"],
      ["我答：对世界说“不”之外，在不需要反抗的时刻，仍然知道自己是谁。自由的人不怕和社会相同，也不执着于和社会不同。",
       "I answered: Beyond saying “no” to the world, it is knowing who you are in the moments when no rebellion is needed. A free person is not afraid of being the same as society and not attached to being different from it."],
      ["他问：读完这些诗，你记得什么？",
       "He asked: After finishing the poems, what do you remember?"],
      ["我答：那个开头。翘楚，癫狂，歇斯底里的赤裸。",
       "I answered: The opening. The best minds, the madness, the hysterical nakedness."]
    ]
  },
  {
    "date": "2024-03-08",
    "title": "Who Remembers Us",
    "slug": "when-those-who-remember-us-leave",
    "category": "Memoir",
    "book": {
      "cover": "stay_true.jpg",
      "title": "Stay True",
      "author": "Hua Hsu",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Memoir · Doubleday, 2022",
        "Hsu’s memoir of his college friendship with Ken, who was killed in a carjacking, and of the music and zines of their Berkeley years."
      ]
    },
    "place": "于加州旧金山\nSan Francisco, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["1. 《寻梦环游记》里，一个人真正的死亡，是世上最后一个记得他的人也把他忘了。",
       "1. In *Coco*, a person’s true death comes when the last person in the world who remembers them forgets them too."],
      ["2. 我们怕被遗忘，因为那意味着自己存在过的痕迹终于从世界上消失。",
       "2. We fear being forgotten because it would mean the traces of our having existed finally vanish from the world."],
      ["3. 读完 Hua Hsu 的《Stay True》，我想到相反的一种失去：怕被别人忘记，也怕失去那些记得自己的人。前一种是怕从别人的世界里消失，后一种是怕自己的一部分跟着别人一起消失。",
       "3. After finishing Hua Hsu’s *Stay True*, I think of a loss that runs the other way: we fear being forgotten by others, and we also fear losing the people who remember us. The first is the fear of disappearing from other people’s worlds; the second is the fear that a part of ourselves goes with them."],
      ["4. 我们习惯觉得记忆属于自己，过去只要发生过，就永远是生命里夺不走的一部分。其实一个人的过去，从来不完全由自己保存。",
       "4. We tend to think memory is ours, that whatever has happened stays forever as a part of life no one can take. In fact a person’s past has never been kept entirely by that person."],
      ["5. 父母记得我们还没有记忆时的样子，朋友记得我们早已忘掉的话，爱人记得连自己都没留意的细节。这些记忆不一定在我们的意识里，却仍然构成了我们是谁。",
       "5. Our parents remember what we looked like before we had memories, our friends remember words we forgot long ago, our lovers remember details we never noticed ourselves. Those memories may not live in our consciousness, and they still make up who we are."],
      ["6. Ken 突然离世，Hua 失去的是一个朋友，也是他们共同青春的一个见证者。",
       "6. When Ken dies suddenly, Hua loses a friend, and he also loses the witness to the youth they shared."],
      ["7. 一起听过的音乐，说过的玩笑，度过的夜晚。原本属于两个人的记忆，再也不能靠彼此的回忆补充和修正。",
       "7. The music they listened to, the jokes, the nights. Memories that belonged to two people can no longer be added to or corrected through each other’s recollections."],
      ["8. 更难过的是，Hua 还能继续长大，重新理解过去，Ken 却不能参与这种理解。他不能说哪些细节记错了，哪些瞬间对他也重要，也看不到多年以后已经变了的 Hua。",
       "8. Sadder still, Hua can go on growing and understanding the past anew, and Ken can take no part in it. He cannot say which details were misremembered or which moments mattered to him too, and he cannot see the Hua who has changed over the years."],
      ["9. 失去一个人，也是失去一种认识自己的方式。",
       "9. To lose a person is also to lose a way of knowing oneself."],
      ["10. 《寻梦环游记》里的遗忘，是活着的人慢慢抹去逝者的存在。《Stay True》里的死亡，是逝者带走了活着的人一部分无法重建的过去。",
       "10. The forgetting in *Coco* is the living slowly erasing the existence of the dead. The death in *Stay True* is the dead carrying away a part of the living’s past that cannot be rebuilt."],
      ["11. 一个人可以清楚地记得自己的朋友，却再也无从知道，自己在那位朋友的记忆里是什么模样。",
       "11. A person can remember a friend clearly and never again learn what he looked like in that friend’s memory."],
      ["12. 两种失去看似相反，露出的是同一种脆弱：我们的存在从来不完全属于自己。靠别人的记忆确认自己存在过，靠别人的目光理解自己是谁。",
       "12. The two losses look opposite and show the same fragility: our existence has never belonged entirely to ourselves. We rely on other people’s memories to confirm we existed, and on other people’s gaze to understand who we were."],
      ["13. Hua 写 Ken，我读出一种复杂的悲伤。他想用文字留住 Ken，也在保存只有 Ken 认识的那个年轻的自己。",
       "13. In Hua’s writing about Ken I read a complicated sadness. He tries to keep Ken in words, and in doing so he keeps the young self that only Ken knew."],
      ["14. 书写能让一个人的故事继续被讲，却不能让曾与我们共有这个故事的人，再回应我们的记忆。",
       "14. Writing can keep a person’s story being told. It cannot make the one who shared that story with us answer our memories again."],
      ["15. 《寻梦环游记》让人相信，只要还有人记得，逝去的人就没有真正消失。《Stay True》让我看到，即使从未忘记一个人，他的离开仍可能带走一部分再也找不回的自己。",
       "15. *Coco* lets us believe that as long as someone remembers, the dead have not truly disappeared. *Stay True* shows me that even if we never forget a person, their leaving can take away a part of ourselves that cannot be found again."],
      ["16. 我们总说遗忘是逝者的第二次死亡，很少想到，一个人离开时，活着的人也会经历某种局部的消逝。",
       "16. We always call forgetting the second death of the dead, and seldom think that when a person leaves, the living also go through a kind of partial vanishing."],
      ["17. 最后一个记得我们从前模样的人走了，我们还活着，那个从前的自己，也已经不在世上了。",
       "17. When the last person who remembers what we once were is gone, we are still alive, and that former self is no longer in the world."]
    ]
  },
  {
    "date": "2024-06-16",
    "title": "From the Empire of Cotton to the Empire of AI",
    "slug": "from-cotton-to-ai",
    "category": "History",
    "book": {
      "cover": "empire_of_cotton.jpg",
      "title": "棉花帝国 (Empire of Cotton)",
      "author": "斯文·贝克特 Sven Beckert",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · Knopf, 2014",
        "Beckert’s global history of how cotton built modern capitalism, through slavery, colonial conquest and state power."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["棉铃裂开，白絮挂在枝头，田里弯着腰的人一排排望不到头。贝克特在《棉花帝国》里把这幅画面摆在资本主义的起点上：殖民扩张，被夺走的土地，奴隶的劳动，还有替这一切撑腰的国家权力。人们后来称作自由市场的东西，是在无数人不自由的地基上建起来的。一个社会在经济上越来越自由，生活在其中的人却不一定同样自由。",
       "The bolls split open and white fiber hangs from the branches; in the field, rows of bent backs run out of sight. In *Empire of Cotton*, Beckert puts this picture at the start of capitalism: colonial expansion, land taken away, enslaved labor, and the state power behind all of it. What came to be called the free market was built on the unfreedom of countless people. A society can grow ever freer economically without everyone living in it being equally free."],
      ["再往后是工厂。纺织机日夜转动，产量成倍地涨。但书里让我记得最清楚的，是谁握着棉田、原料、工厂和贸易网络。机器带来前所未有的生产力，财富怎么分，看的是围着机器的所有权和权力。",
       "Then come the factories. The looms turn day and night and output multiplies. What stays with me most from the book is who held the cotton fields, the raw materials, the mills and the trade networks. The machines brought productive power on an unprecedented scale, but how the wealth was divided depended on the ownership and power arranged around them."],
      ["我把这幅画面搬到今天的机房。屏幕上的模型像是自己在工作，能替代多少劳动成了热门话题，训练它所需的数据、算力、基础设施和资本归谁，却少有人问。机房外面连着发电的能源，开采的矿产，被标注的数据，还有一批批做标注的人，就像当年的织机离不开全球的棉花供应链。技术越是显出自动化的样子，背后的社会关系越容易被略过。",
       "I carry that picture into a server room today. On the screen the model seems to work by itself. How much labor it can replace is a popular topic; who owns the data, computing power, infrastructure and capital needed to train it is rarely asked. Outside the room are the power plants, the mined minerals, the data being labeled and the people labeling it, just as the looms once depended on the global cotton supply chain. The more a technology looks automated, the easier it is to skip over the social relations behind it."],
      ["两个时代有一处不同。棉花帝国靠控制劳动者来创造财富，人工智能却可能让资本在一些领域越来越少依赖劳动者。机制不一样，留下的问题相同：创造过这些财富的人，能不能分到增长的成果。机器承担的工作越多，劳动本该从生存的负担变成个人的选择。但收入、社会保障和体面的生活仍然系在就业上，被替代的人就失去了维持生活的办法。社会越有能力摆脱劳动的必要，个人未必越能摆脱对工作的依赖。",
       "The two eras differ in one respect. The empire of cotton made wealth by controlling laborers, while AI may let capital in some fields depend less and less on them. The mechanisms differ and the question left over is the same: can the people who created, or once created, this wealth share in its growth? As machines take on more work, labor should turn from a burden of survival into a matter of choice. But income, social security and a dignified life are still tied to employment, and someone whose work is replaced loses the means of keeping a life going. The more a society can do without labor, the less an individual can necessarily do without a job."],
      ["历史不一定重演。人工智能也可能让知识、创造和生产工具更普及，让更多人拿到过去只属于少数人的能力。只是《棉花帝国》提醒我，技术自己不会决定这些可能最后归谁，那要看所有权、制度和权力怎么分配。",
       "History need not repeat itself. AI may also spread knowledge, creativity and the tools of production more widely, putting abilities once held by a few in more hands. But *Empire of Cotton* reminds me that technology does not decide by itself whom these possibilities end up belonging to. That depends on how ownership, institutions and power are distributed."],
      ["从棉花到人工智能，资本主义一再换掉生产财富的方式，有一个问题始终没解决：生产力越强，是更多人得到自由，还是握有生产资料的人得到更大的自由？我希望的人工智能革命，是人不用再靠出卖劳动才能活下去、才有自由的世界。",
       "From cotton to AI, capitalism keeps changing how wealth is made, and one problem has stayed unsolved: as productive power grows, do more people become free, or do the owners of the means of production gain greater freedom? The AI revolution I hope for is a world where people no longer have to sell their labor to survive and to be free."]
    ]
  },
  {
    "date": "2023-01-31",
    "title": "Normal as Violence",
    "slug": "when-normal-becomes-violence",
    "category": "Novel",
    "book": {
      "cover": "vegetarian.jpg",
      "title": "채식주의자 (The Vegetarian)",
      "author": "한강 Han Kang",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Changbi Publishers, 2007",
        "After a dream, a woman named Yeong-hye stops eating meat, and her family turns against her."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "vegetarian_reading.jpg",
      "alt": "Reading 채식주의자 in Livermore"
    },
    "prose": [
      ["英惠的父亲想把一块肉塞进她嘴里，她不肯张口，他便动了手，要她恢复原来的样子。这一幕我读得最不舒服。在场的人各有各的道理：维护家庭，尽做父亲的责任，也是为她好。可当关心的目的是改变对方，而不再从理解对方出发，它和控制之间还剩多少差别，我答不上来。",
       "Yeong-hye’s father tries to push a piece of meat into her mouth. She will not open it, and he turns to violence to make her what she was before. This was the scene I found hardest to read. Everyone in the room has a reason: protecting the family, doing a father’s duty, doing it for her own good. But when concern aims at changing the other person and no longer starts from understanding her, I cannot say how much difference is left between it and control."],
      ["再往前，是一切开始的地方。读完韩江的《素食者》，我先想起的是英惠决定不再吃肉的那个起点。一个微不足道的个人选择，引来丈夫的不满、父亲的愤怒和整个家庭的反对。他们从来没有问过她为什么拒绝吃肉，只问她为什么不能像别人一样正常生活。",
       "Go back to where it all starts. After finishing Han Kang’s *The Vegetarian*, the first thing I recall is the moment Yeong-hye decides to stop eating meat. A trivial personal choice brings her husband’s displeasure, her father’s anger and the opposition of the whole family. No one asks why she refuses meat; they only ask why she cannot live normally like everyone else."],
      ["这个“正常”是谁定的，什么时候成了必须服从的义务，我没有现成的答案。我们习惯把不合社会期待的人看成异常，很少追问期待本身合不合理。别人选了不同的活法，我们先想到的往往是纠正，而不是理解，还把这种干涉当成善意。",
       "I have no ready answer about who set this “normal,” or when it became an obligation to obey. We are used to seeing people who fall short of social expectations as abnormal, and rarely ask whether the expectations are reasonable. When someone chooses a different way of life, our first thought is often to correct, not to understand, and we take the interference for kindness."],
      ["小说里的暴力也并不总是带着恶意。它藏在习以为常的家庭秩序里，藏在长辈的权威、伴侣的期待和显得理所当然的规范里。施加控制的人未必觉得自己在伤害谁，他们早把自己的生活方式当成了唯一正确的标准。",
       "The violence in the novel does not always carry malice either. It hides in a family order taken for granted, in the authority of elders, in a partner’s expectations, in norms that seem natural. The people exercising control do not necessarily feel they are hurting anyone; they long ago took their own way of life as the only correct standard."],
      ["现实里我也见过这样的做法。父母以爱的名义决定子女的人生，伴侣以关心的名义限制对方，社会拿成熟、责任和体面做尺子，要求每个人走相似的路。我们自称善意，有时只是容不下别人和自己不一样。最让我不安的是，人可以真心相信，控制别人就是在帮助他们。",
       "I have seen the same thing in real life. Parents decide their children’s lives in the name of love, partners limit each other in the name of care, and society, using maturity, responsibility and respectability as its ruler, asks everyone to walk a similar road. What we call goodwill is sometimes only an inability to tolerate someone being different from us. What unsettles me most is that a person can sincerely believe that controlling others is helping them."],
      ["然后是英惠自己的结局。韩江没有把她的拒绝写成一场自由的胜利。她想摆脱暴力，拒绝一种自己无法接受的活法，最后把这份拒绝推到了生命的边缘。反抗不一定带来自由，一个人有权拒绝社会期待，也不等于只能靠伤害自己来证明这份权利。",
       "Then there is Yeong-hye’s own end. Han Kang does not write her refusal as a victory for freedom. She wants to get free of violence and to refuse a way of living she cannot accept, and she pushes that refusal to the edge of her life. Resistance does not necessarily bring freedom, and a person’s right to refuse social expectations does not mean she can prove it only by harming herself."],
      ["姐姐仁惠站在这一切旁边。她照顾英惠，同时得面对英惠可能死去的事实。她的关心不能和父亲的强迫相提并论，却也留下一个难题：尊重一个人的意愿和保护她的生命发生冲突时，该怎样理解关怀？我想，关怀和控制的界线不只看动机善不善，也看我们肯不肯承认对方是有独立意志的人，在必要的保护之外还守着她的尊严。",
       "Her older sister In-hye stands beside all this. She looks after Yeong-hye and also has to face the fact that Yeong-hye may die. Her care cannot be put on a level with her father’s coercion, yet it leaves a hard question: when respecting a person’s wishes conflicts with protecting her life, how do we understand care? I think the line between care and control depends not only on whether our motives are kind, but on whether we will recognize the other as a person with an independent will, and keep her dignity even beyond the protection that may be necessary."],
      ["合上书，我对“正常”有了疑问：它是自然存在的秩序，还是多数人在长期服从中慢慢接受的规则？一种活法被普遍认可，我们就容易忘了它未必适合每个人，也不该是衡量别人的唯一标准。该怕的，我想是那些自认正常的人，早已失去了理解差异的能力。一个尊重个体的社会，应该允许人说“不”，也应该让人说了“不”以后，还能有尊严地活下去。",
       "Closing the book, I have a doubt about “normal”: is it an order that exists naturally, or rules most people gradually accept through long obedience? When a way of life is widely approved, we easily forget that it may not suit everyone and should not be the only standard for measuring others. What should be feared, I think, is that the people who consider themselves normal lost the ability to understand difference long ago. A society that respects the individual should allow people to say “no,” and let them go on living with dignity after they have said it."]
    ]
  },
  {
    "date": "2022-11-24",
    "title": "History Never Really Left",
    "slug": "soulstealers",
    "category": "History",
    "book": {
      "cover": "soulstealers.jpg",
      "title": "Soulstealers: The Chinese Sorcery Scare of 1768",
      "author": "Philip A. Kuhn",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · 1990",
        "In 1768, rumors that sorcerers were stealing souls by clipping queues swept the Qing empire, and the Qianlong emperor turned a village panic into a nationwide hunt for conspirators."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1768年，乾隆皇帝下令追查妖术。起初只是民间的不安和猜疑，有人说辫子被剪，魂被摄走。可皇帝把它看成对统治秩序的威胁，地方官就不得不在压力下找出嫌犯。",
       "In 1768 the Qianlong emperor ordered an investigation into sorcery. It began as popular unease and suspicion: people said queues were being clipped and souls stolen. But the emperor saw a threat to the ruling order, and local officials had to find suspects under pressure."],
      ["这本书是孔飞力的《叫魂》。我十年前，也就是2012年读过一遍，只觉得荒诞得难以置信，以为那是皇权专制和民智未开凑出的闹剧。社会进步了，教育普及了，科学取代了迷信，这种事自然没有了土壤。",
       "The book is Philip Kuhn’s *Soulstealers*. I first read it ten years ago, in 2012, and found it absurd beyond belief. I took it for a farce produced by imperial despotism and an unenlightened populace. Society would progress, education would spread, science would replace superstition, and such things would lose their soil."],
      ["十年后重读，我发现自己漏掉了书里最让人不安的部分。它写的不是那个时代的人有多愚昧，写的是一套政治机制怎样把零散的恐惧变成全社会的歇斯底里。",
       "Rereading it ten years later, I found I had missed the most disturbing part. The book is about how a political mechanism turned scattered fears into a hysteria that swept a whole society, not about how ignorant people of that era were."],
      ["这套机制是这样运转的。谣言本来可以靠调查慢慢平息，却在层层上报、严刑逼供和政治猜忌里一次次活过来。证据越少，越容易被说成阴谋藏得深。有人想把事情往小里说，就会被怀疑在掩盖。",
       "This is how the mechanism ran. A rumor that investigation might have put to rest kept coming back to life in reports passed up the chain, in confessions extracted by torture, in political suspicion. The less evidence there was, the easier it was to say the conspiracy was hidden deep. Anyone who tried to play it down fell under suspicion of covering up."],
      ["它甚至不需要每个人都相信妖术。皇帝担心权威受到挑战，官员担心被指失职，百姓可以借着恐慌报私怨。每个人在自己的处境里做了看似合理的选择，合起来却成了一场荒诞的灾难。说真话的代价高过附和，质疑的风险大过加入指控，为自保而做的理性选择，加在一起就成了整个社会的不理性。",
       "It did not even need everyone to believe in sorcery. The emperor feared for his authority, officials feared being blamed for neglect, and ordinary people could use the panic to settle private grudges. Each made a choice that seemed reasonable where they stood, and together they made an absurd catastrophe. When telling the truth costs more than going along, and doubting is riskier than joining the accusations, rational choices made for self-protection add up to the irrationality of a whole society."],
      ["2022年，我在中国看到了相似的运转方式，主要是疫情防控持续三年后最后一年的种种荒诞：核酸、健康码、层层加码的封控，地方政府夹在政治责任和现实困难之间。这当然和1768年不是一回事。疫情是真实的公共卫生威胁，妖术是想象出来的恐惧。可政治上的运转方式有相似之处，这一点值得警惕。一种威胁被抬成不容质疑的政治任务，基层在意的就是上级的意志有没有贯彻，不再是政策还合不合理。纠正错误要担政治风险时，把错误维持下去反而最安全。",
       "In 2022 I watched something similar run in China, mostly in the many absurdities of the final year of three years of pandemic control: PCR tests, health codes, lockdowns tightened layer upon layer, local governments caught between political responsibility and practical difficulty. This is of course not the same thing as 1768. The pandemic was a real public health threat; sorcery was an imagined fear. But the way the politics worked is similar, and that deserves vigilance. When a threat is raised into an unquestionable political task, the grassroots care about whether the higher level’s will has been carried out, no longer about whether the policy still makes sense. When correcting a mistake means taking a political risk, keeping the mistake going is the safest course."],
      ["回头看2012年的自己，我很难理解当时那种理所当然的乐观。我相信历史里的荒诞之所以令人震惊，是因为我们已经走出了那个时代。现在让我不安的，是自己当年竟那么轻易地相信，时代的进步足以保护我们不重蹈覆辙。读到官员层层加码、百姓互相猜疑，我只觉得不可思议。后来在现实里看见有人为了不担责任选择沉默，为了表明立场放弃质疑，我才慢慢明白，许多荒诞不需要社会里的大多数人真的相信它，只需要大多数人觉得反对它不值得。",
       "Looking back at myself in 2012, I can hardly understand that taken-for-granted optimism. I believed the absurdities of history shock us because we have left that era behind. What unsettles me now is how easily I once believed that the progress of the age would keep us from repeating it. Reading about officials piling on demands and people suspecting one another, I found it simply unbelievable. Only later, seeing people in real life stay silent to avoid responsibility and give up questioning to show where they stood, did I slowly understand that many absurdities do not need most people in a society to truly believe in them. They only need most people to decide that opposing them is not worth it."],
      ["这个认识上的转变，比历史本身更让我难过。常识、理性和自由，原来没有我以为的那么稳固。一个人可以清楚知道某件事不合理，仍然选择服从。一个社会有无数聪明善良的人，仍然拦不住集体的错误。我看到许多人在各自的处境里努力维持正常的生活，这些看似无可指责的选择，合起来却维系着一种谁也不愿承担后果的荒诞。",
       "That change in understanding saddens me more than the history does. Common sense, reason and freedom were never as solid as I thought. A person can know clearly that something makes no sense and still comply. A society can have countless intelligent and kind people and still fail to stop a collective error. I see many people trying to keep life normal where they stand, and these seemingly blameless choices together sustain an absurdity whose consequences no one is willing to bear."],
      ["从1768年到2022年，科学技术、教育水平和国家治理能力都不可同日而语。但技术能改变执行政策的效率，改变不了权力制造恐惧的方式。一个社会可以有最先进的信息系统，却不一定允许真实的信息流通。可以培养无数受过高等教育的人，却不一定给他们公开质疑错误的空间。现代技术甚至能让一套没有纠错机制的体系，以过去想不到的效率执行错误的决定。",
       "Between 1768 and 2022, science and technology, education and the state’s capacity to govern are no longer comparable. But technology can change how efficiently policy is carried out; it cannot change how power produces fear. A society can have the most advanced information systems and not allow real information to circulate. It can educate countless people to a high level and not give them room to question mistakes in public. Modern technology can even let a system with no way of correcting itself carry out wrong decisions at an efficiency once unimaginable."],
      ["还有一层让我感慨。文化大革命结束后，中国经历过一次难得的拨乱反正。改革开放和此后四十多年的发展，一度让我相信这个国家从政治狂热的灾难里学到了教训。2022年的经历让我重新看到，经济繁荣不一定带来政治理性，付出过惨痛代价的教训，也不会自动成为不可逆转的制度约束。我曾把过去几十年的变化当作一路向前的进步，现在更倾向于认为，那也是一代人在特定历史条件下艰难争取来的，没有哪种力量保证它永远延续。",
       "There is one more thing that moves me. After the Cultural Revolution ended, China went through a rare period of setting things right. Reform and opening up, and the more than forty years of development since, once led me to believe the country had learned from the catastrophe of political fanaticism. The experience of 2022 showed me again that economic prosperity does not necessarily bring political rationality, and that lessons paid for dearly do not automatically become irreversible institutional constraints. I used to take the changes of recent decades as steady forward progress. Now I lean toward thinking they were also won with difficulty by one generation under particular historical conditions, and that nothing guarantees they will last."],
      ["《叫魂》到最后最让我不安的，既不是乾隆的猜忌，也不是民间对妖术的恐惧。整个官僚体系渐渐失去向权力讲真话的能力，统治者就只能从自己制造的回声里认识世界。一个王朝的衰败未必从人才匮乏开始，也可能从最有能力看清现实的人不再敢表达判断开始。",
       "What disturbs me most at the end of *Soulstealers* is neither the Qianlong emperor’s suspicion nor the popular fear of sorcery. It is that once the whole bureaucracy gradually loses the ability to tell power the truth, the ruler can only know the world through the echo he has made himself. A dynasty’s decline does not necessarily begin with a shortage of talent. It may begin when those most able to see reality stop daring to voice their judgment."],
      ["一个社会如果已经有足够的知识辨别荒诞，却没有公开指出荒诞、及时纠错的制度空间，它比1768年的大清帝国进步了多少，我说不清。书还是那本书，我在2012年和2022年各读了一遍，看到的东西不一样。",
       "If a society already has enough knowledge to recognize absurdity but lacks the institutional space to point it out openly and correct mistakes in time, I cannot say how much further it has advanced than the Qing empire of 1768. The book is the same book. I read it in 2012 and again in 2022, and saw different things."]
    ]
  },
  {
    "date": "2020-11-24",
    "title": "Will We Become the Adults We Hate?",
    "slug": "lying-life-of-adults",
    "category": "Novel",
    "book": {
      "cover": "lying_life.jpg",
      "title": "The Lying Life of Adults",
      "author": "Elena Ferrante",
      "language": "English",
      "country": "Italy",
      "original": "Italian",
      "lines": [
        "Novel · Translated by Ann Goldstein, 2020",
        "In Naples, a girl overhears her father compare her to his estranged sister, and begins to look for the truth behind the adults’ lies."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "lying_life_reading.jpg",
      "alt": "Reading The Lying Life of Adults in Livermore"
    },
    "prose": [
      ["第一晚。刚读完 Elena Ferrante 的《那不勒斯四部曲》，那个世界还在脑子里没散。《The Lying Life of Adults》已经被 Netflix 拍成了剧，我还是翻开了原著，打算用三个晚上读完。想看的不是那不勒斯的街道，是 Ferrante 笔下那个满是欲望、矛盾和谎言的内心世界。",
       "First evening. I have just finished Elena Ferrante’s Neapolitan Novels and that world has not cleared from my head. *The Lying Life of Adults* has already been made into a Netflix series, and I open the book anyway, meaning to finish it in three evenings. It is not the streets of Naples I want to see. It is the inner world Ferrante builds, full of desire, contradiction and lies."],
      ["开头，Giovanna 无意间听到父亲说她长得不好看。往下读，父母本来代表理性、教养和道德，一点点露出虚伪和自私。姑姑 Vittoria 一直被说成粗俗、丑陋，现在却显出另一种复杂的人性。Giovanna 开始怀疑从小接受的一切，想在大人的谎言之外找点真的东西。",
       "The opening: Giovanna overhears her father belittling her looks. Reading on, her parents, who stood for reason, upbringing and morality, slowly show their hypocrisy and selfishness. Her aunt Vittoria, always called vulgar and ugly, now shows a different, more complicated humanity. Giovanna starts to doubt everything she was raised on and tries to find something real outside the adults’ lies."],
      ["读到这里我开始不舒服，原因不在她怎样一件件揭穿谎言，在她自己变了。她没有因为看穿成人世界就逃出去，看穿的过程里，她一点点成了它的一部分。",
       "Here I start to feel uneasy, and the reason is not how she exposes the lies one by one. It is that she is changing. Seeing through the adult world does not get her out of it; in the course of seeing through it, she becomes a part of it."],
      ["停下来，想起中文社交媒体上常见的一句话：“我们最终成为了自己以前讨厌的样子。”",
       "I stop and think of a line that is common on Chinese social media: “In the end, we became what we used to hate.”"],
      ["小时候总以为真实和虚伪、善良和自私之间有一条清楚的线。不懂大人为什么说一套做一套，为什么为利益妥协，明明知道对错还选错的。也相信自己不会变成那样。",
       "As children we assume there is a clear line between truth and hypocrisy, kindness and selfishness. We do not get why adults say one thing and do another, why they compromise for self-interest, why they choose wrong when they know what is right. We believe we will never be like that."],
      ["可成长好像并不是一路接近理想中的自己。进了成年人的世界，以前不懂的行为都有了理由：沉默是为了避免冲突，隐瞒是为了保住关系，妥协是为了适应现实。原则不是一下子丢掉的，是在一次次看上去合理的选择里，把曾经坚信的界线慢慢磨模糊了。更糟的是，人可能根本没察觉自己在变。",
       "But growing up does not seem to be a steady approach to an ideal self. Once in the adult world, behavior we could not understand has reasons: silence to avoid conflict, concealment to keep a relationship, compromise to fit reality. Principles are not dropped all at once; through one reasonable-looking choice after another, the lines we once held firmly wear blurry. Worse, we may not notice we are changing at all."],
      ["Giovanna 以前那么讨厌大人的虚伪，现在自己学会了隐瞒、试探和为自己辩解。她没有哪天决定变成虚伪的人，只是面对自己的欲望和矛盾时发现，那些曾经让她反感的做法，她自己也能解释得头头是道。",
       "Giovanna used to loathe adult hypocrisy, and now she herself learns to conceal, to probe, to justify. There is no day she decides to become a hypocrite. She just finds, facing her own desires and contradictions, that the behavior that once repelled her can be explained away quite smoothly by herself."],
      ["第二晚读到中段，又想起《那不勒斯四部曲》里反复出现的那个问题：一个人能在多大程度上摆脱出身和成长的环境。Elena 想靠教育和写作离开原来的世界，影响始终甩不掉。Giovanna 想靠识破父母的谎言独立，却发现自己早被那个世界塑造了。",
       "Second evening, partway through, I think again of the question that keeps returning in the Neapolitan Novels: how far can a person escape where she comes from and how she was brought up. Elena tries to leave her old world through education and writing and never shakes its influence. Giovanna tries to become independent by seeing through her parents’ lies, and finds she was shaped by that world long ago."],
      ["我想，成长最残酷的地方，可能是终于明白大人为什么不完美，然后开始给自己找同样的借口。",
       "I think the cruelest part of growing up may be that we finally understand why adults are imperfect, and then start finding the same excuses for ourselves."],
      ["第三晚，快读完了。我不认为 Ferrante 在说人注定变得虚伪。理解人性的复杂，不等于要接受所有的妥协。小时候那种简单坚定的道德判断留不住，我们还是可以选择，不让“现实如此”成为一切行为的借口。让我害怕的，是那一天真的到来时，自己身上已经没有什么值得讨厌的了。关于成熟，我现在只有半句话：理解了谎言为什么存在以后，还留着怀疑自己的能力，也许就算是。书页角上，我折了一下。",
       "Third evening, nearly done. I do not think Ferrante is saying people are doomed to become hypocrites. Understanding the complexity of human nature does not mean accepting every compromise. The simple, firm moral judgments of childhood cannot be kept, but we can still choose not to let “that’s how things are” excuse everything we do. What frightens me is that when that day really comes, there may be nothing left in me worth hating. About maturity I have only half a sentence for now: after understanding why the lies exist, still keeping the ability to doubt oneself might count. I fold down a corner of the page."]
    ]
  },
  {
    "date": "2024-01-16",
    "title": "The Cloth With No One at the Other End",
    "slug": "the-cloth-with-no-one-at-the-other-end",
    "category": "Novel",
    "book": {
      "cover": "the_guest_hwang.jpg",
      "title": "손님 (The Guest)",
      "author": "황석영 Hwang Sok-yong",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Changbi, 2001 · Korean original",
        "The dead of the 1950 Sinchon massacre speak in the form of a shamanic rite, accusing and defending themselves."
      ]
    },
    "place": "于韩国釜山\nBusan, South Korea",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "镇魂巫祭里",
          "In the Jinogi gut,"
        ],
        [
          "有一个动作：",
          "there is one gesture:"
        ],
        [
          "为亡者开路。",
          "opening a road for the dead."
        ]
      ],
      [
        [
          "巫者展开一块布，",
          "The shaman spreads a cloth"
        ],
        [
          "那是阴阳之间的路。",
          "for the road between yin and yang"
        ],
        [
          "她唱着，",
          "and sings"
        ],
        [
          "引亡灵离开人世。",
          "the spirit out of the human world."
        ]
      ],
      [
        [
          "路不难开。",
          "Opening the road is not hard."
        ],
        [
          "难的是，",
          "The hard part is"
        ],
        [
          "亡灵愿不愿意走过去。",
          "whether the spirit is willing to cross."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "读黄晳暎的《客人》，",
          "Reading Hwang Sok-yong’s The Guest,"
        ],
        [
          "我一直想着这块布。",
          "I keep thinking of this cloth."
        ]
      ],
      [
        [
          "小说借了巫祭的结构，",
          "The novel borrows the shape of the rite"
        ],
        [
          "让信川死去的人再开口。",
          "and lets the dead of Sinchon speak again."
        ],
        [
          "他们一个接一个，",
          "One by one"
        ],
        [
          "讲自己怎么死的，",
          "they tell how they died"
        ],
        [
          "也讲自己怎么对待过别人。",
          "and how they once treated others."
        ]
      ],
      [
        [
          "声音彼此顶撞，",
          "The voices push against each other,"
        ],
        [
          "互相指责，",
          "accuse each other,"
        ],
        [
          "同一件事，",
          "and one event"
        ],
        [
          "有时说不成同一个样子。",
          "will not come out the same way twice."
        ]
      ],
      [
        [
          "历史想把事情讲清楚：",
          "History wants things clear:"
        ],
        [
          "谁是凶手，",
          "who killed,"
        ],
        [
          "谁是受害者，",
          "who was killed,"
        ],
        [
          "谁该负责。",
          "who answers for it."
        ],
        [
          "巫祭不要求亡灵",
          "The rite does not ask the spirits"
        ],
        [
          "先达成一致再开口。",
          "to agree before they speak."
        ]
      ],
      [
        [
          "一个人的冤屈，",
          "One person’s grievance"
        ],
        [
          "不会因为另一个人",
          "does not disappear"
        ],
        [
          "也有冤屈而消失。",
          "because another has a grievance too."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "巫祭本是为了送走死者，",
          "The rite exists to send the dead off,"
        ],
        [
          "不是让他们留在人间。",
          "not to keep them in the human world."
        ],
        [
          "亡灵说完怨恨，",
          "The spirit voices its resentment,"
        ],
        [
          "接受祭奠，",
          "takes the offering,"
        ],
        [
          "沿着那条路离开。",
          "and leaves along the road."
        ],
        [
          "活着的人，",
          "And the living"
        ],
        [
          "便能重新过日子。",
          "can begin to live again."
        ]
      ],
      [
        [
          "可是《客人》里的死者，",
          "But the dead in The Guest,"
        ],
        [
          "真的送得走吗？",
          "can they really be sent away?"
        ]
      ],
      [
        [
          "被杀的人，",
          "The ones who were killed"
        ],
        [
          "和凶手住在同一个村子。",
          "lived in the same village as their killers."
        ],
        [
          "他们知道彼此的名字，",
          "They knew each other’s names,"
        ],
        [
          "认得彼此的家门，",
          "knew each other’s doors,"
        ],
        [
          "有的还一起吃过饭。",
          "some had eaten at the same table."
        ]
      ],
      [
        [
          "战争结束了。",
          "The war ends."
        ],
        [
          "凶手可以老去，",
          "The killers can grow old,"
        ],
        [
          "幸存者可以沉默，",
          "the survivors can fall silent,"
        ],
        [
          "村子可以恢复日常。",
          "the village can go back to its days."
        ],
        [
          "死者最后记得的，",
          "What the dead remember last"
        ],
        [
          "仍可能是熟人举起武器的脸。",
          "may still be a familiar face raising a weapon."
        ]
      ],
      [
        [
          "巫者说，一切都过去了。",
          "The shaman says it is all past."
        ],
        [
          "他凭什么信？",
          "Why should he believe it?"
        ],
        [
          "活人请求宽恕，",
          "The living ask for forgiveness."
        ],
        [
          "他为什么必须答应？",
          "Why must he give it?"
        ],
        [
          "几十年过去，",
          "Decades have gone by,"
        ],
        [
          "死者就该替活人",
          "but the dead have no duty"
        ],
        [
          "结束这段历史吗？",
          "to close this history for the living."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "那块为亡灵铺开的布，",
          "The cloth spread for the spirits"
        ],
        [
          "在我这里有了另一层意思。",
          "takes on another meaning for me."
        ],
        [
          "它本来连着生死两界，",
          "It was meant to join the two realms,"
        ],
        [
          "在黄晳暎笔下，",
          "but in Hwang Sok-yong’s pages"
        ],
        [
          "横在两段互相够不着的记忆之间。",
          "it lies between two memories that cannot reach each other."
        ]
      ],
      [
        [
          "活人要死者离开，",
          "The living want the dead to leave"
        ],
        [
          "好让日子继续。",
          "so life can go on."
        ],
        [
          "死者的话，",
          "The dead"
        ],
        [
          "还没有说完。",
          "have not finished speaking."
        ]
      ],
      [
        [
          "我们说祭祀是活人",
          "We say sacrifice is the last duty"
        ],
        [
          "对死者尽的最后一份责任，",
          "the living owe the dead,"
        ],
        [
          "却少有人问，",
          "yet we seldom ask"
        ],
        [
          "让死者安息，",
          "whether letting the dead rest"
        ],
        [
          "是为了死者，",
          "is for the dead"
        ],
        [
          "还是为了活人不再被打扰。",
          "or so the living are no longer disturbed."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "巫祭总有结束的时候。",
          "The rite, in the end, ends."
        ]
      ],
      [
        [
          "歌声低下去。",
          "The singing drops low."
        ],
        [
          "巫者收起铺在地上的布，",
          "The shaman gathers the cloth from the ground"
        ],
        [
          "撤下祭品。",
          "and clears the offerings."
        ],
        [
          "有人走过来，",
          "Someone comes over"
        ],
        [
          "帮着把桌椅搬回屋里。",
          "to help carry the tables and chairs inside."
        ],
        [
          "天亮以后，",
          "After daybreak"
        ],
        [
          "村里照旧生火做饭，",
          "the village will light its fires and cook,"
        ],
        [
          "照旧有人从那条路上走过。",
          "and people will go on passing along that road."
        ]
      ],
      [
        [
          "一切都回到原来的位置。",
          "Everything goes back to its place."
        ]
      ],
      [
        [
          "只是收布的时候，",
          "Only, when the cloth is gathered,"
        ],
        [
          "有一端，",
          "one end"
        ],
        [
          "始终没有人接。",
          "has no one to take it."
        ]
      ]
    ]
  },
  {
    "date": "2025-01-23",
    "title": "Can We Ever Go Home?",
    "slug": "can-we-go-home",
    "category": "Short stories",
    "book": {
      "cover": "yeosu_love.jpg",
      "title": "여수의 사랑 (Love of Yeosu)",
      "author": "한강 Han Kang",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Short story collection · 1995",
        "Han Kang’s first collection. In the title story, two women, one abandoned as a baby and one the sole survivor of her family, hold opposite feelings about the same coastal city."
      ]
    },
    "place": "于韩国首尔\nSeoul, South Korea",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "yeosu_love_reading.jpg",
      "alt": "Reading 여수의 사랑 in Seoul"
    },
    "prose": [
      ["故乡是什么？是我们出生的地方，是承载童年记忆的土地，还是一个无论走得多远，最终都能够接纳我们的归宿？读完韩江的《丽水之爱》，我开始怀疑，故乡或许从来不只是一个地理概念，而是我们对于归属、记忆与爱的某种想象。",
       "What is a hometown? Is it the place where we were born, the land that holds our childhood memories, or a refuge that will take us back no matter how far we have gone? After reading Han Kang’s *Love of Yeosu*, I began to suspect that a hometown was never only a geographical idea, but a kind of imagining of belonging, memory and love."],
      ["几天前，我刚去过丽水。那是我旅居世界这几年里，离家乡盐城最近的一次，大概只有六百多公里。我在山上眺望家乡方向西边的那片海，坦白说，站在那里，我并没有想起多少盐城的事。自从2008年去北京上大学，我就很少再回盐城了。这些年我不断搬去新的城市，真正生活、成长的地方一个接一个地变了，而盐城只是留在了原地，成了我“从哪里来”的一个答案，却不再是我生活的地方。对我来说，出生的地方并没有那么重要，它更像是表格上需要填写的一栏，而不是一个我会惦记、想回去的家。我真正看重的，是心里的那个故乡。",
       "A few days ago I was in Yeosu. It was the closest I had come to my hometown, Yancheng, in the years I have spent living around the world, only about six hundred kilometers. From a hill I looked out at the sea to the west, in the direction of home. To be honest, standing there I did not think much about Yancheng. I have rarely gone back since I left for university in Beijing in 2008. Over the years I kept moving to new cities, and the places where I actually lived and grew up changed one after another, while Yancheng stayed where it was, an answer to “where are you from?” rather than a place I live. To me the place where I was born has never mattered that much. It is more like a box on a form than a home I think about or want to return to. What I truly care about is the hometown in my mind."],
      ["小说中，자흔（Ja-heun）与叙述者정선（Jeong-seon）对丽水有着截然相反的感情。出生后便被遗弃的자흔，因为被遗弃的列车从丽水出发，便固执地相信那里是自己的故乡。她从未真正拥有过丽水，却将它视为人生的方向。而정선真正出生于丽水，却在那里经历了母亲的死亡、父亲携子女投海自杀的悲剧，成为唯一的幸存者。从此，丽水成了一个必须逃离、甚至不愿回忆的地方。",
       "In the story, Ja-heun (자흔) and the narrator Jeong-seon (정선) feel completely opposite things about Yeosu. Ja-heun, abandoned soon after she was born, stubbornly believes Yeosu is her hometown because the train she was abandoned on departed from there. She has never really possessed Yeosu, yet she treats it as the direction of her life. Jeong-seon, by contrast, was truly born in Yeosu, and it is where she lived through her mother’s death and her father’s suicide at sea with his children, of whom she was the only survivor. From then on, Yeosu became a place she had to flee, and did not even want to remember."],
      ["一个从未到过故乡，却终其一生渴望回去；一个真正拥有故乡，却用尽力气想要忘记它。这种矛盾让我意识到，我们对于故乡的感情，也许并不取决于那个地方本身，而取决于我们曾在那里得到什么，又失去了什么。",
       "One has never been to her hometown yet longs all her life to return; the other truly has a hometown yet uses all her strength to forget it. This contradiction made me realize that our feelings about a hometown may depend not on the place itself, but on what we once received there, and what we lost."],
      ["자흔所向往的，或许并不是真实的丽水，而是一个想象中能够解释自己从何而来、为何被遗弃的地方。对于一个从出生便失去归属的人而言，哪怕只是一个模糊的地名，也足以成为生命的寄托。她渴望回到丽水，也许并不是因为那里真的有人等待她，而是因为她需要相信，世界上至少存在一个自己可以回去的地方。",
       "What Ja-heun longs for may not be the real Yeosu at all, but an imagined place that could explain where she came from and why she was abandoned. For someone who lost any sense of belonging at birth, even a vague place name can be enough to hold a life. She longs to return to Yeosu, perhaps not because anyone is really waiting for her there, but because she needs to believe that somewhere in the world there is at least one place she can go back to."],
      ["而정선恰恰相反。丽水并非一个未知的希望，而是一段无法承受的记忆。정선试图通过离开故乡来摆脱过去，却发现地理上的距离并不能消除精神上的创伤。那些被压抑的恐惧与痛苦，最终仍然以洁癖、疏离和对亲密关系的矛盾态度，渗透进日常生活。",
       "Jeong-seon is exactly the opposite. For her, Yeosu is not an unknown hope but a memory she cannot bear. She tries to shake off the past by leaving her hometown, only to find that geographical distance cannot erase psychological trauma. The fear and pain she has suppressed still seep into daily life, as an obsession with cleanliness, as distance, and as an ambivalent attitude toward intimacy."],
      ["于是我开始觉得，자흔与정선看似走向两个相反的方向，实际上却都被同一种缺失所困。一个试图通过回到故乡寻找从未得到的爱，另一个试图通过逃离故乡忘记曾经失去的爱。她们真正寻找或逃避的，也许从来不是丽水，而是那个始终无法得到安放的自己。",
       "So I began to feel that Ja-heun and Jeong-seon, who seem to walk in opposite directions, are in fact trapped by the same lack. One tries to go back to her hometown to find a love she never had; the other tries to flee hers to forget a love she lost. What they are really looking for or running from may never have been Yeosu, but a self that has never been able to settle."],
      ["这也让我重新思考我们习以为常的“落叶归根”。我们总将故乡浪漫化为温暖的起点，仿佛无论经历多少漂泊，回去便意味着安宁与和解。但这种想象是否忽略了那些在故乡遭受伤害的人？如果一个人的故乡意味着遗弃、死亡与失去，我们又凭什么认为回归必然是一种救赎？",
       "It also made me reconsider the saying we take for granted, that fallen leaves return to their roots. We always romanticize the hometown as a warm beginning, as if, however much we have drifted, going back must mean peace and reconciliation. But does that picture overlook the people who were hurt in their hometowns? If someone’s hometown means abandonment, death and loss, on what grounds do we assume that returning must be a redemption?"],
      ["我自己的经历也说明，故乡未必是出生的地方。在我网站的 Steps 里，我给自己定了一条规则：把我从出生到现在，所有能记起、有记录的足迹都放进数据库，每到一座城市、一个国家就为它计一次数，计数最高的城市和国家，分别被标记为我的 home city 和 home country。2008年去北京读书，不到一年，北京就成了我的 home city。2012年去西雅图读书，到2014年8月，西雅图接替了北京。2017年来湾区工作，湾区却一直等到2023年10月，才超过西雅图。至于 home country，美国早在2015年6月就取代了中国。这些数字只记录我去过哪里，并不能告诉我归属在哪里。在我心里，我的故乡仍然是西雅图：在那里的生活深刻塑造了我是谁，也是我真正觉得有归属感的地方。",
       "My own experience suggests that a hometown is not necessarily where you were born. In Steps on this site I set myself a rule: every footprint I can remember or have a record of, from birth until now, goes into a database, and each city and country I reach gets one more count. The city and country with the highest counts are marked as my home city and home country. I went to university in Beijing in 2008, and in less than a year Beijing had become my home city. I went to school in Seattle in 2012, and by August 2014 Seattle had taken over from Beijing. After I came to work in the Bay Area in 2017, it did not overtake Seattle until October 2023. As for my home country, the United States had already replaced China in June 2015. These numbers only record where I have been, not where I belong. In my heart my hometown is still Seattle. My life there shaped who I am, and it is where I truly feel I belong."],
      ["小说的结尾，정선终于踏上了前往丽水的旅程，但韩江并没有告诉我们，她能否找到자흔，能否与过去和解，能否真正获得安宁。",
       "At the end of the story, Jeong-seon finally sets out on the journey to Yeosu, but Han Kang does not tell us whether she will find Ja-heun, whether she will reconcile with the past, or whether she will truly find peace."],
      ["我反而觉得，这种没有答案的结局恰恰揭示了故乡最复杂的意义。故乡不能保证我们重新获得失去的爱，也无法替我们抹去曾经的伤害。回去并不必然意味着治愈，离开也不等于真正的遗忘。",
       "If anything, I think an ending with no answer reveals the most complicated meaning of a hometown. A hometown cannot guarantee that we will win back the love we lost, nor can it erase the harm done to us. Going back does not necessarily mean healing, and leaving does not mean truly forgetting."],
      ["或许，故乡并不是一个我们终将回到的地方，而是一个我们终其一生都在试图理解的地方。而所谓的归乡，也许不是为了找回过去，而是为了有一天，我们能够不再被过去决定自己将去往何方。",
       "Perhaps a hometown is not a place we will eventually return to, but a place we spend our whole lives trying to understand. And what we call homecoming may not be about retrieving the past, but about reaching a day when the past no longer decides where we are going."]
    ]
  },
  {
    "date": "2025-07-07",
    "title": "Whose Paradise?",
    "slug": "whose-paradise",
    "category": "Novel",
    "place": "於台灣台北\nTaipei, Taiwan",
    "book": {
      "cover": "fang_si_chi.jpg",
      "title": "房思琪的初戀樂園 (Fang Si-Chi’s First Love Paradise)",
      "author": "林奕含 Lin Yi-han",
      "language": "Traditional Chinese",
      "country": "Taiwan",
      "original": "Chinese",
      "lines": ["Novel · 2017", "A teenage girl in Taipei is abused by her cram-school Chinese teacher, who presents it to her as love."]
    },
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      ["讀完林奕含的《房思琪的初戀樂園》，應該幾乎所有人都會自然問：為什麼是“樂園”？“樂園”本應象徵純真、自由與幸福，卻被用來命名一個充滿侵犯、壓迫與痛苦的故事。這當然是一種反諷，但我更想追問的是：為什麼一個充滿傷害的世界，仍然能夠以樂園的面貌存在？又是誰在維持這個樂園？",
       "After finishing Lin Yi-han’s *Fang Si-Chi’s First Love Paradise*, almost every reader will naturally ask the same thing: why “paradise”? A paradise should stand for innocence, freedom and happiness, yet here the word names a story full of violation, oppression and pain. It is irony, of course, but what I want to ask is something else: how can a world so full of harm go on existing in the guise of a paradise? And who is keeping that paradise going?"],
      ["小說中的李國華擁有教師的身份、文學的修養與知識的權威。他將侵犯包裝成愛情，將操控解釋為關懷，使暴力披上了文明與美的外衣。最令我不安的並非他如何利用語言欺騙房思琪，而是這些語言為什麼具有如此強大的說服力。",
       "In the novel, Li Guo-hua has the standing of a teacher, the refinement of a man of letters, and the authority of knowledge. He packages violation as love and explains control as care, so that violence puts on the clothes of civilization and beauty. What unsettles me most is not how he uses language to deceive Fang Si-Chi, but why that language is so persuasive."],
      ["我們相信教育意味著啟蒙，文學意味著高尚，愛情意味著美好。這些信念本身並沒有錯，但當我們過於相信它們時，也可能因此失去質疑的能力。我們因為相信老師值得尊敬，便難以接受老師也可能是施害者；因為相信愛情是美好的，便可能忽略親密關係中的權力與剝削。有時，我們不是因為看見了善才相信它，而是因為預先相信善的存在，才拒絕看見其中的惡。",
       "We believe that education means enlightenment, that literature means nobility, that love means something good. There is nothing wrong with those beliefs in themselves, but when we trust them too much we can lose the ability to question. Because we believe a teacher deserves respect, it is hard to accept that a teacher can also be an abuser; because we believe love is beautiful, we may overlook the power and exploitation inside an intimate relationship. Sometimes we do not believe in goodness because we have seen it; we refuse to see the evil inside it because we believe in goodness beforehand."],
      ["這讓我意識到，“樂園”或許不只是施害者製造的幻象，更是社會在長期習慣中共同維護的秩序。",
       "This made me realize that the “paradise” may be more than an illusion manufactured by the abuser. It may be an order that society maintains together, through long habit."],
      ["現實生活中，我們同樣習慣於用美好的詞彙解釋令人不安的事情。控制可以被稱為關心，服從可以被讚美為懂事，忍耐可以被歌頌為成熟。當受害者沒有反抗，我們質疑她為什麼沉默；當施害者擁有地位與聲望，我們又試圖為他的行為尋找解釋。我們未必有意縱容暴力，卻可能在一次次看似合理的解釋中，讓傷害逐漸變得正常。",
       "In real life we are just as used to explaining disturbing things in beautiful words. Control can be called concern, obedience can be praised as being sensible, endurance can be celebrated as maturity. When a victim does not resist, we question why she stayed silent; when an abuser has status and a reputation, we try to find an explanation for his behavior. We may not mean to condone violence, yet through one reasonable-sounding explanation after another, we can let harm slowly become normal."],
      ["而這種正常化，或許比刻意的掩蓋更加可怕。因為承認傷害的存在，有時意味著我們必須質疑自己一直信任的權威、價值與社會秩序。相比之下，將痛苦解釋為誤會、愛情或成長的代價，似乎更容易讓我們繼續安心生活。我們維護的未必是真相，而可能只是一個不需要我們重新認識的世界。",
       "That normalization may be more frightening than deliberate concealment. Admitting that harm exists can mean having to question the authorities, values and social order we have always trusted. By comparison, explaining the pain away as a misunderstanding, as love, or as the price of growing up seems to make it easier to go on living in comfort. What we protect may not be the truth, but only a world we do not have to learn to see again."],
      ["這也迫使我反思自己作為讀者的位置。面對房思琪的遭遇，我能夠清楚地辨認其中的殘酷。但如果我身處故事之中，只看到一位受人尊敬的老師和一個沉默、矛盾的女孩，而無法知曉她的內心，我是否仍然能夠作出同樣的判斷？",
       "It also forces me to reflect on my own position as a reader. Faced with what happens to Fang Si-Chi, I can recognize the cruelty clearly. But if I were inside the story, seeing only a respected teacher and a silent, conflicted girl whose inner life I could not know, would I still make the same judgment?"],
      ["我無法輕易給出肯定的回答。",
       "I cannot easily answer yes."],
      ["或許，這正是這本書最深刻的警示。暴力並不總是以野蠻的面貌出現，它也可能隱藏在我們最熟悉、最珍視的文明秩序之中。文學、教育與愛情並非暴力的根源，但當它們被賦予不容質疑的神聖性時，也可能成為遮蔽傷害的工具。",
       "Perhaps this is the book’s deepest warning. Violence does not always arrive looking savage; it can hide inside the civilized order we know best and prize most. Literature, education and love are not the roots of violence, but when they are given a sanctity that must not be questioned, they can become tools for covering harm."],
      ["因此，我不再認為“樂園”僅僅是對房思琪悲劇的反諷。它更像是一面鏡子，映照出我們如何透過語言、習慣與集體沉默，將某些人的痛苦轉化為另一些人眼中理所當然的秩序。",
       "So I no longer think of the “paradise” as merely an irony about Fang Si-Chi’s tragedy. It is more like a mirror, showing how, through language, habit and collective silence, we turn some people’s pain into an order that others take for granted."],
      ["我們總以為樂園的反面是地獄。但也許真正可怕的，並不是地獄被偽裝成樂園，而是我們早已習慣了它的模樣，甚至真誠地相信它就是樂園。",
       "We tend to assume the opposite of paradise is hell. But perhaps what is truly terrifying is not hell disguised as paradise; it is that we have long since grown used to how it looks, and sincerely believe it is paradise."],
      ["如果一個世界必須依靠受害者的沉默、旁觀者的麻木，以及對傷害的不斷粉飾才能維持其美好，那麼它究竟是誰的樂園？",
       "If a world can keep its beauty only through the victim’s silence, the bystander’s numbness, and the constant glossing over of harm, then whose paradise is it, really?"]
    ]
  },
  {
    "date": "2025-01-29",
    "title": "Stillness",
    "category": "Novel",
    "place": "Sokcho, Gangwon, Corée du Sud\nSokcho, Gangwon, South Korea",
    "languages": ["French", "English"],
    "book": {
      "cover": "sokcho.jpeg",
      "title": "Hiver à Sokcho",
      "author": "Élisa Shua Dusapin",
      "language": "French",
      "country": "Switzerland",
      "original": "French",
      "lines": [
        "Novel · Éditions Zoé, 2016",
        "A young woman, half French and half Korean, works at a guesthouse in the seaside town of Sokcho in winter, where a French comics artist comes to stay."
      ]
    },
    "photo": {
      "file": "stillness_notes.jpg",
      "alt": "A page of the book with handwritten notes in the margins"
    },
    "prose": [
      ["Une pension au bord de la mer, en hiver. La plage est vide, la pension l’est presque. Nous sommes près de la frontière avec la Corée du Nord, et le froid fige le monde en le dépouillant de ses artifices. C’est là, dans *Hiver à Sokcho*, que travaille la narratrice, moitié française, moitié coréenne. Elle n’appartient tout à fait à aucun des deux pays, et elle le sait.",
       "A guesthouse by the sea, in winter. The beach is empty, and the guesthouse nearly so. We are close to the border with North Korea, and the cold freezes the world while stripping it of its artifices. This is where the narrator of *Hiver à Sokcho* works, half French and half Korean. She belongs completely to neither country, and she knows it."],
      ["Puis arrive Yan Kerrand, un dessinateur français venu chercher l’inspiration pour sa prochaine bande dessinée. Elle lui prépare ses repas, elle le guide dans la ville. Elle espère enfin être regardée. Mais un dessinateur ne regarde pas comme les autres : son regard laisse une trace.",
       "Then Yan Kerrand arrives, a French artist who has come looking for inspiration for his next graphic novel. She cooks his meals and guides him around the town. She hopes, at last, to be seen. But an artist does not look the way other people do: his gaze leaves a trace."],
      ["Je pense à ce regard posé sur elle dans la salle presque vide. Nous désirons être compris, mais craignons d’être mis à nu. Ici, être compris et être mis à nu deviennent la même chose.",
       "I think of that gaze resting on her in the nearly empty room. We long to be understood, yet we fear being laid bare. Here, to be understood and to be laid bare become the same thing."],
      ["Le corps de la narratrice porte cette tension. Son petit ami Jun-oh voudrait qu’elle change de visage, et elle se compare sans cesse à ceux des magazines. Elle désire que quelqu’un la comprenne, et elle craint ce qu’on verrait en elle. Nous cherchons un refuge, mais l’appartenance n’est qu’un souffle.",
       "The narrator’s body carries this tension. Her boyfriend Jun-oh would like her to change her face, and she compares herself endlessly to the ones in magazines. She wants someone to understand her, and she fears what they would see. We look for a refuge, but belonging is only a breath."],
      ["Dans cette immobilité, il n’y a plus rien derrière quoi se cacher. Ce que j’en retiens, c’est que l’immobilité ne guérit pas la peur d’être vu ; elle la rend impossible à ignorer. Dans le silence de l’hiver, la narratrice se retrouve face à une question plus honnête sur qui elle est quand personne ne la regarde. C’est la seule vérité intérieure que le livre me laisse, et elle me suffit.",
       "In this stillness there is nothing left to hide behind. What I take from it is that stillness does not cure the fear of being seen; it makes it impossible to ignore. In the silence of winter, the narrator comes face to face with a more honest question about who she is when no one is looking at her. It is the only inner truth the book leaves me with, and it is enough."],
      ["Dehors, la plage reste vide.",
       "Outside, the beach stays empty."]
    ]
  },
  {
    "date": "2026-08-25",
    "title": "Severance and the Name I Keep",
    "slug": "severance",
    "category": "Novel",
    "book": {
      "cover": "severance.jpeg",
      "title": "Severance",
      "author": "Ling Ma",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · Farrar, Straus and Giroux, 2018",
        "A fever leaves its victims repeating the routines of their old lives. Candace Chen, a Bible production coordinator in New York, keeps going to work."
      ]
    },
    "place": "于麻省波士顿\nBoston, MA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["马凌的小说《断裂》里，Candace 每天仍走进那栋空楼上班。她在一家出版公司负责《宝石圣经》的生产协调。纽约渐渐空了，没有人再需要那些《圣经》，工作却还在继续。这算不上崇高的坚守，更像是习惯接管了她。",
       "In Ling Ma’s *Severance*, Candace still walks into that empty building to work every day. She coordinates the production of Gemstone Bibles at a publishing company. New York slowly empties, and nobody needs the Bibles anymore, yet the work goes on. It is hardly a noble stand. It looks more like habit taking her over."],
      ["另一个画面属于“申氏发热”的患者。他们没有变成扑向活人的怪物，只是一遍遍重复生前的日常：折叠衣物、维护陈列、按时打卡。这是一则末日寓言，讽刺就在这里：病的症状和上班的样子，几乎分不出来。",
       "Another picture belongs to the victims of the “Shen Fever.” They do not turn into monsters that hunt the living. They repeat the routines of their former lives over and over: folding clothes, tending displays, clocking in on time. This is an allegory of the end of the world, and the irony lies here: the symptoms of the illness and the look of a working day are almost impossible to tell apart."],
      ["小说里有一句话，把这一点说得很直白：“生活在一座城市里，就是参与并传播它那些荒谬的体系。早上醒来。上班。这同时也意味着享受这些体系，否则，谁能年复一年地重复同样的日常？”\n当然，《断裂》写的不只是惯性。Candace 是移民的女儿，疏离、旁观，多少还有些共谋；小说同样写消费、迁徙和怀旧。我只取它关于“被日常吞没”的一面，因为这一面离我自己最近。",
       "One line in the novel puts this plainly: “To live in a city is to take part in and to propagate its impossible systems. To wake up. To go to work in the morning. It is also to take pleasure in those systems because, otherwise, who could repeat the same routines, year in, year out?”\nOf course, *Severance* is about more than inertia. Candace is an immigrant’s daughter, detached, an onlooker, and to some degree complicit; the novel is just as much about consumption, migration and nostalgia. I take only the side about being swallowed by routine, because that side is the closest to me."],
      ["一年前，我主动从管理岗位转到不带人的岗位，大幅缩减了工作时间，还开始兼职开 Uber。我并不想证明什么，只是不愿意让“X公司”或任何一个头衔成为我唯一的名字。",
       "A year ago I moved from a management role to one with no reports, cut my working hours sharply, and began driving for Uber on the side. I did not set out to prove anything. I simply did not want “Company X,” or any title, to become my only name."],
      ["韩炳哲在《倦怠社会》里写道，今天的社会不再主要靠外部的禁令运转，而是靠“你可以”：个体被塑造成“自身的企业家”，自己给自己加码，自己剥削自己。他称之为功绩社会（Leistungsgesellschaft）。申氏发热的患者像是这种逻辑的极端版本：没有人命令他们，他们还在干活。",
       "In *The Burnout Society*, Byung-Chul Han writes that today’s society no longer runs mainly on outside prohibition but on “you can”: individuals are shaped into “entrepreneurs of themselves,” who raise their own quotas and exploit themselves. He calls this the achievement society (Leistungsgesellschaft). The Shen Fever victims look like an extreme version of that logic: no one orders them, and they keep working."],
      ["开 Uber 并没有让我挣脱自我剥削，它恰好是“自身的企业家”最标准的样子：自己排班，自己担风险，自己盯着评分和接单率。我只是换了它发生的地方。差别有两点。路况、车和身体的疲惫都抽象不掉：在大厂，我的工作停留在文档、会议和符号里，下班后常觉得自己飘着；开车时手在方向盘上，我知道自己在哪里。另外，这份活不是我的头衔。我能随时停下，因为它只是兼职，别处还有收入撑着；对靠它吃饭的司机来说，这一点并不成立。",
       "Driving for Uber did not free me from exploiting myself. It is exactly the standard form of the “entrepreneur of oneself”: I set my own schedule, carry my own risk, and watch my own ratings and acceptance rate. I have only moved where it happens. The difference is twofold. Traffic, the car and a tired body cannot be abstracted away: at the big company my work stayed in documents, meetings and symbols, and after hours I often felt I was floating, while when I drive my hands are on the wheel and I know where I am. And this work is not my title. I can stop at any time because it is only a side job and other income holds me up; for drivers who live on it, that is not true."],
      ["所以我不觉得自己“打破”了什么。《断裂》只提醒了我一件小事：习惯会在不知不觉中替人做决定，最早的警告，是你说不出自己除了这份工作还是谁。我的做法只是其中一种，换别的方式也许同样有效。我只想自己还能说出那个名字。",
       "So I do not feel I have “broken” anything. *Severance* reminded me of one small thing: habit makes decisions for you without your noticing, and the earliest warning is that you can no longer say who you are besides this job. My way is only one way, and others may work just as well. I only want to be able to say that name myself."]
    ]
  },
  {
    "date": "2026-02-28",
    "title": "The One-Inch Gap",
    "category": "Novel",
    "book": {
      "cover": "vuong.jpeg",
      "title": "大地上我们转瞬即逝的绚烂 (On Earth We’re Briefly Gorgeous)",
      "author": "王鸥行 Ocean Vuong",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": ["Novel · Simplified Chinese edition", "A letter from a son, nicknamed Little Dog, to his mother, who cannot read it."]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["《大地上我们转瞬即逝的绚烂》里，小狗对母亲说：“你打开前门，对着我人生中的第一场雪，耳语道：看。”（王鸥行 14）",
       "In *On Earth We’re Briefly Gorgeous*, Little Dog says to his mother: “You opened the front door to my first snow, whispered: Look.” (Vuong 14)"],
      ["母亲只说了一个字。她读不懂英文，在这个国家几乎没有什么权力，但她还能带儿子去看世界，并邀他一同看。她没有解释雪，只是开了门，让雪进入视野。母子二人不是站在景象之外的旁观者，各自都看得见对方在看。",
       "His mother says one word. She cannot read English and has little power in this country, but she can still point her son at the world and ask him to look with her. She does not explain the snow. She opens the door and lets it come into view. Mother and son are not spectators outside the scene; each can see the other looking."],
      ["雪和所有穿过瞳孔的东西一样，什么也留不下，它会融化。留不留得住不要紧，要紧的是在同一个瞬间一起看。",
       "Snow, like everything that passes through the pupil, leaves nothing behind. It will melt. Keeping it does not matter. Seeing it together, in the same moment, does."],
      ["同一页上，在这一句之前，小狗回忆母亲说过的一句关于眼睛的话：\n“你有一次告诉我，人的眼睛是神最孤独的创造。世上有多少东西会穿过瞳孔，可它什么都留不下。一只眼睛孤零零地待在自己的眼眶里，完全不知道一英寸之外，还有完全相同的另一只，一样饥渴，一样空洞。”（王鸥行 14）",
       "On the same page, just before that line, Little Dog recalls something his mother once said about the eye:\n“You told me once that the human eye is the most lonely creation of God. How much of the world passes through the pupil and still it holds nothing? The eye, alone in its socket, doesn’t even know there’s another one just like it, an inch away, equally hungry, equally empty.” (Vuong 14)"],
      ["王鸥行不奉承眼睛。它不是心灵的窗户，也不是笛卡尔式的透镜，把图像送给背后的某个大脑。梅洛-庞蒂说，感知的是“身体主体”（le corps-sujet）：整个身体，视觉受限于它站的位置和够得到的范围。眼睛“孤零零地待在自己的眼眶里”，汲取一切，什么也不留，也看不到一英寸之外的同伴。两只眼睛在同一个颅骨里，朝着同一个方向，彼此浑然不知。",
       "Vuong does not flatter the eye. It is not the window to the soul, and it is not the Cartesian lens that feeds images to a mind sitting behind it. For Merleau-Ponty the one who perceives is the body-subject (le corps-sujet): the whole body, whose seeing is bound by where it stands and what it can reach. The eye sits “alone in its socket,” takes in everything, keeps nothing, and cannot see its twin an inch away. Both eyes sit in the same skull, facing the same way, and neither knows the other is there."],
      ["这一英寸的间距，在书里被放大了。小狗和母亲共处一室，母亲读不懂英文，两人都无法把战争留下的创伤完整地交给对方。两只眼睛“一样饥渴，一样空洞”：相似，处境相同，却无法向对方确认。战争造成的流离，除了地图上的距离，还有身体内部的断裂，和同处一室的身体之间的隔阂。",
       "The book enlarges that one inch. Little Dog and his mother share a room, but she cannot read English, and neither can fully hand the other what the war left behind. The eyes are “equally hungry, equally empty”: alike, in the same condition, and unable to confirm it to each other. The displacement of war is distance on a map, and it is also a break inside the body and a gap between bodies in the same room."],
      ["战争过去常从远处看：从飞机上，在地图上，在伤亡数字里，在把难民归为编号、受害者和待处理案卷的文件里。王鸥行避开这种视角，去看那个正在看的肉身。梅洛-庞蒂主张，我们并非作为超然的旁观者去观察，而是以身体的形式，从特定之处，带着局限。在王鸥行手里，凝视不再是控制的工具，成了孤独与饥渴的象征。",
       "The war was often seen from a distance: from aircraft, on maps, in casualty counts, in paperwork that sorted refugees into numbers, victims and cases to be managed. Vuong turns away from that view and looks at the body that does the looking. Merleau-Ponty argued that we do not observe as detached spectators but as bodies, from one place, with limits. In Vuong’s hands the gaze stops being a tool of control and becomes a sign of loneliness and hunger."],
      ["远处官方的目光，靠计数、记录和占有来掌控所见。母亲的“看”什么也不要，只提供陪伴。瞳孔依然空洞，但那一刻，间距得到了回应，不靠语言，靠两个人对同一件事的共同见证。一页纸承载不了整部小说，却给出一种值得带进全书的读法：语言和历史失效时，共同的凝视还能说，我们在这里，并且活着。",
       "The distant, official view tries to master what it sees by counting it, recording it and holding on to it. The mother’s “Look” asks for none of that. It offers company. The pupils stay empty, but for a moment the gap is answered, by two people witnessing the same thing rather than by words. One page cannot carry a whole novel, but it gives a way of reading worth taking through the rest of the book: when language and history fail, shared seeing can still say that we are here and alive."],
      ["那场雪会融化。母亲和儿子都看见了它。",
       "The snow will melt. Mother and son both saw it."]
    ]
  },
  {
    "date": "2020-05-01",
    "title": "The Color of Law",
    "slug": "the-color-of-law",
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "category": "History",
    "book": {
      "cover": "color_of_law.jpg",
      "title": "The Color of Law",
      "author": "Richard Rothstein",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": ["History · Liveright, 2017", "A forgotten history of how government policy at every level segregated American neighborhoods."]
    },
    "blocks": [
      [
        "epi",
        "“种族隔离渗透到个体生活的方方面面，没有一个人可以置身事外，从起床到睡觉，从出生到死亡，甚至是早在你出生之前就早已决定的宿命。”",
        "“Segregation seeped into every part of an individual’s life. No one could stand outside it: from waking to sleeping, from birth to death, even a fate settled before you were born.”"
      ],
      [
        "p",
        "这个5月我读完并想推荐的，是几年前就名声大噪的纪实报告文学《法律的颜色》。",
        "This May, the book I finished and want to recommend is *The Color of Law*, the nonfiction report that made a splash a few years ago."
      ],
      ["h", "为什么想到看这本书", "Why I picked up this book", "01"],
      [
        "p",
        "从2012年我刚来美国直到现在，每个去过的城市，西雅图、芝加哥、巴尔的摩和底特律，事实上的居住隔离到处都是，甚至在过去经济复苏的黄金十年里愈演愈烈。2012年我刚来西雅图时的一些非裔社区在短短几年时间里已经全被新建的房地产取代，而生活成本的攀升使得非裔社区似乎一夜之间消失在了我们的生活中。(Beason, 2016)",
        "Ever since I came to the US in 2012, in every city I have been to, Seattle, Chicago, Baltimore and Detroit, de facto residential segregation is everywhere, and it grew worse even during the past golden decade of economic recovery. When I first came to Seattle in 2012, some Black neighborhoods were, within just a few years, entirely replaced by new development, and as the cost of living climbed, Black neighborhoods seemed to vanish from our lives overnight. (Beason, 2016)"
      ],
      [
        "p",
        "此外，今年年初在准备加州房产销售牌照申请的时候，在community college里上了Real Estate Principles/Practices这两门课。在课堂中我们被强调过，作为房产经纪和销售在买卖房屋的过程中，需要遵循的各种各样的种族平等伦理。不同实操情形下的案例能出100道迷惑人的选择题。",
        "Besides, earlier this year, while preparing my application for a California real estate salesperson license, I took two courses at a community college, Real Estate Principles and Real Estate Practices. In class we were told again and again about the ethics of racial equality that agents must follow when buying and selling homes. The case studies from different real-world situations could fill a hundred confusing multiple-choice questions."
      ],
      [
        "p",
        "而这本书吸引我的也正是，它从传统20世纪60年代对于宏观非裔民权运动的叙事，跨越到了美国内战前后至今，并以对美国政府住房政策的审视为切入点，深入探究了民间、政府、企业和法院各个行为个体在美国居住种族隔离中所扮演的角色以及其作为或不作为而产生的后果。",
        "What drew me to this book is that it moves beyond the traditional 1960s narrative of the broad Black civil rights movement and spans the time from around the Civil War to the present. Using a review of American government housing policy as its entry point, it digs into the roles that private citizens, government, business and the courts played in American residential segregation, and into the consequences of what they did and failed to do."
      ],
      ["h", "“非裔的原罪”", "“The Original Sin of Black America”", "02"],
      [
        "p",
        "我们往往会想起1968年小马丁路德金的遇刺以及后来包含了《公平住房法案》的扩大版1968年民权法案的通过来作为讨论有色人种民权的分水岭。似乎《公平住房法案》至少在法律上保障了有色人种自由房屋买卖的权利，非裔的住房权利就有了法律的保障。这样的想法现在看来就和1865年废除奴隶制后以为非裔民权就来到一样不负责任地过于乐观了。而这正是作者Richard Rothstein想要呈现给读者的一个更大的视角，即事实上光检视法律本身而忽视历史、政府以及社会的影响，我们是无法正确认识非裔居住种族隔离的实际状况的。",
        "We often take the assassination of Martin Luther King Jr. in 1968, and the passage soon afterward of the expanded Civil Rights Act of 1968, which included the Fair Housing Act, as the watershed in discussing the civil rights of people of color. It seems that the Fair Housing Act at least guaranteed in law the freedom to buy and sell homes, so that Black housing rights had legal protection. Looking back now, that thought is as irresponsibly optimistic as believing that Black civil rights arrived with the abolition of slavery in 1865. This is exactly the larger view that the author, Richard Rothstein, wants to give his readers: if we examine only the law itself and ignore the influence of history, government and society, we cannot correctly understand the real state of Black residential segregation."
      ],
      [
        "p",
        "在本书的前几章，作者详细地列举了从20世纪20年代到70年代大量的事实来佐证其核心论点，即种族隔离是由政府、法院到民间有意识地长期践行于社会生活方方面面的一项非成文的公共行为，而这一行为大大阻碍了非裔社群实现真正的财富增值融入中产阶级的权利。而随着社会贫富分化的日益加大，大部分的非裔社群已经彻底被剥夺了实现阶层跨越的可能性，社群内由经济主导的自发居住种族隔离而由此形成。这可不就是“非裔的原罪”吗？",
        "In the first chapters, the author lists a great many facts from the 1920s to the 1970s in support of his central argument: that segregation was an unwritten public practice, carried out consciously and over the long term, in every part of social life by government, courts and private citizens alike, and that it greatly obstructed the Black community’s right to build real wealth and enter the middle class. As the gap between rich and poor has widened, most of the Black community has been stripped entirely of any chance of crossing class lines, and an economically driven, spontaneous residential segregation has formed within the community itself. Isn’t that exactly the “original sin” of Black America?"
      ],
      ["sub", "", "If San Francisco, Then Everywhere?"],
      [
        "p",
        "要知道加州一直以来是美国自由和民主主义的急先锋，所以如果旧金山都成了这样了，但美国其他的地方呢？",
        "California has long been the vanguard of American liberty and democracy, so if even San Francisco turned out this way, what about the rest of America?"
      ],
      [
        "p",
        "20世纪50年代大量的非裔工人阶级涌入到加州旧金山湾区寻求更多的工作机会，而原有的各个社区风声鹤唳，Milpitas的业主们不得不立即通过紧急通过法案不允许建造公寓楼，迫使工作在Milpitas福特汽车工厂的非裔工人移居到更远的San Jose和Richmond。而在East Palo Alto，加州房地产委员会的主席Floyd Lowe采取的相反的方案，他立即呼吁所有的East Palo Alto的白人业主抛售他们的房产，使得East Palo Alto自发转变成一个非裔社区。",
        "In the 1950s, large numbers of Black working-class people poured into the San Francisco Bay Area in search of more work, and the existing neighborhoods were on edge. Homeowners in Milpitas had to rush through an emergency ordinance forbidding the construction of apartment buildings, forcing the Black workers at Milpitas’s Ford plant to move farther away, to San Jose and Richmond. In East Palo Alto, Floyd Lowe, the chairman of the California real estate board, took the opposite approach: he immediately called on all of East Palo Alto’s white homeowners to sell their properties, which turned East Palo Alto, on its own, into a Black community."
      ],
      [
        "p",
        "民间自发的力量尚且大到如此，政府和金融行业的暗箱配合使得居住种族隔离进一步更快地变为了现实。银行开始不愿意批准非裔购房者的抵押贷款申请，即使他们的收入和白人同事一样多，而联邦住房管理局更进一步，不但不批准非裔购房者在其他白人社区的购房申请，同时也拒绝了所有的白人购房者在多种族社区以及非裔社区的购房申请。",
        "If private forces alone could do this much, the quiet cooperation of government and the financial industry made residential segregation a reality even faster. Banks became unwilling to approve mortgage applications from Black buyers even when their income was the same as that of their white colleagues, and the Federal Housing Administration went further: it not only refused Black buyers’ applications to buy in white neighborhoods, but also refused all white buyers’ applications in mixed-race and Black neighborhoods."
      ],
      [
        "p",
        "民间、银行以及政府的多层联动最终在仅仅6年的时间里，把曾经完全是白人社区的East Palo Alto变为了82%非裔居民的名副其实的非裔社区。直到60年后的2010年，East Palo Alto的有色人种依然占据了高达93.8%。",
        "Through this layered coordination among private citizens, banks and government, in only six years East Palo Alto, once an entirely white neighborhood, became a Black community in every sense, with 82% Black residents. Sixty years later, in 2010, people of color still made up as much as 93.8% of East Palo Alto."
      ],
      ["h", "我们不能脱离经济来谈空洞的“公平”", "We can’t talk about empty “fairness” without talking about economics", "03"],
      [
        "p",
        "你可能会惊异于上文中所提到的，在20世纪50年代，同样在工厂里工作的非裔工人阶级和白人工人阶级薪资并无差别。然而短短70年的时间，如果算上1968年《公平住房法案》的颁布，也就是短短20-30年的时间，怎么就使得黑人与白人的阶层差异扩大到如此的地步呢？",
        "You may be surprised by what I mentioned above: in the 1950s, Black and white working-class people doing the same factory work were paid no differently. Yet in just 70 years, or, counting from the passage of the Fair Housing Act in 1968, just 20 to 30 years, how did the class gap between Black and white people grow this wide?"
      ],
      [
        "p",
        "作者Richard Rothstein以纽约长岛的Levittown小镇作为例子，阐述了二战结束至石油危机前后美国飞速发展的经济引擎是如何甩掉非裔群体的。1948年，Levittown的住房售价为8000美元（约合当前7万美元）。而现在，Levittown住宅售价为35万美金及以上。1948年买下这些住房的工人阶级白人家庭，在经过三代之后，积累了20多万美元的财富。而因为大多数非裔是无法在Levittown甚至成千上万个类似的小镇购置房产的。他们受居住种族隔离影响往往只能租住在一些贫困的社区，即使在被允许购置房产的区域购置了房产，其房产增值的价值远远落后于一些好的社区。比较Levittown小镇20多万美元的增值，非裔的近郊住宅区资产增值不过区区4.5万美元。",
        "Using Levittown, on Long Island in New York, as his example, the author Richard Rothstein explains how the American economic engine, which grew so fast from the end of World War II to around the oil crisis, left Black communities behind. In 1948, a house in Levittown sold for $8,000 (about $70,000 today). Today, Levittown homes sell for $350,000 and up. A white working-class family that bought one in 1948 had, three generations later, accumulated more than $200,000 in wealth. Most Black families could not buy a home in Levittown, or in the thousands of similar towns. Because of residential segregation they could often only rent in poor neighborhoods, and even when they bought in areas where they were allowed to, the appreciation lagged far behind that of better neighborhoods. Compared with Levittown’s appreciation of more than $200,000, the homes Black families owned in the suburbs gained a mere $45,000."
      ],
      [
        "p",
        "即便抛开区域限制，在购置房产的贷款申请上，联邦住房管理局给予中下层中产阶级白人购置房产各种各样的优惠和好处也进一步加深了种族间房地产所有权的差距。而使得这些充满种族歧视政策堂而皇之实行的背书，更是司法体系不惜纵容违宪而迎合白人社会和政府对于“种族融合政策导致冲突”的错误认识。",
        "Even setting aside regional restrictions, the many benefits the Federal Housing Administration gave lower-middle-class white buyers in mortgage applications widened the racial gap in home ownership further. The endorsement that let these discriminatory policies be carried out in broad daylight came from a judicial system that, even at the cost of tolerating unconstitutional acts, catered to the mistaken belief of white society and government that “integration policies lead to conflict.”"
      ],
      [
        "p",
        "受到诸多不公平公共政策的影响，经济的繁荣发展一点也没有给非裔工人阶级带来财富上的升值，从二战结束到60年代末，美国的GDP翻了一番，白人中产阶级的财富通过购置房产资本市场的参与而得到不断的积累升值。而与此同时，非裔工人阶级因为受限不能参与房地产投资获利，更要承受收入增长停滞和受通货膨胀影响房租开支增大的多重经济重压，因此与白人中产阶级的差距越拉越大，直到沦为下层中产阶级。",
        "Under the influence of many unfair public policies, economic prosperity brought the Black working class no rise in wealth. From the end of World War II to the end of the 1960s, American GDP doubled, and the wealth of the white middle class grew steadily through participation in the housing capital market. Meanwhile the Black working class, barred from profiting from real estate investment, also bore the double economic pressure of stagnant income growth and rent rising with inflation, so its gap with the white middle class kept widening until it was reduced to the lower middle class."
      ],
      [
        "p",
        "如果我们以1967/68年白人和非裔中产阶级的收入中位数为起点，从皮尤研究中心的数据可以看出，初期非裔中产阶级的低起点所带来的长期世代传递的收入差距的影响是如此深远的，以至于到2016年非裔人均年收入中位数还不及1970年白人换算通货膨胀后的年收入中位数。",
        "If we take the median income of white and Black middle-class families in 1967/68 as the starting point, Pew Research Center data show how deeply the long-term, generation-to-generation effect of the Black middle class’s low starting point reaches: by 2016, the median annual income of Black households was still below the median annual income of white households in 1970, once adjusted for inflation."
      ],
      ["h", "我们亚裔从来不会置身事外", "We Asian Americans have never stood outside", "04"],
      [
        "p",
        "作为亚裔，我们从来也永远不会置身于民权斗争之外。我想要特别提出的是，上文中提到的这些歧视性政策并不只针对非裔，华裔、日裔以及拉美裔等其他有色人种同样身在其中；直到80年代更多的亚裔新移民到来，美国才开始对亚裔进行种族细分。",
        "As Asian Americans, we have never been, and never will be, outside the struggle for civil rights. I want to point out that the discriminatory policies described above were not aimed at Black people alone: Chinese, Japanese, Latino and other people of color were caught up in them as well, and only in the 1980s, as more new Asian immigrants arrived, did the US begin to subdivide Asians as a racial category."
      ],
      [
        "p",
        "作为新一代高收入移民的亚裔在这里享有的基本生存、居住和受教育权，均是一代代黑人族裔带领其他有色人种共同奋斗多年的结果。在上世纪的民权运动中，我们亚裔也是积极的参与者，即使在亚裔收入比白人还高的现在，任何脱离黑人拉美族裔，而单独讨论亚裔普遍民权的想法都是片面化和虚妄的。",
        "The basic rights to live, to reside and to be educated that we enjoy here, as a new generation of high-income immigrants, are the result of generations of Black Americans leading other people of color in a long common struggle. In the civil rights movement of the last century, we Asian Americans were active participants too. Even now, when Asian incomes are higher than white incomes, any idea of discussing the civil rights of Asian Americans in general, apart from Black and Latino communities, is one-sided and illusory."
      ]
    ],
    "refs": [
      {
        "t": "Beason, Tyrone. “Seattle’s Vanishing Black Community.” *The Seattle Times*, The Seattle Times Company, 28 May 2016.",
        "u": "http://www.seattletimes.com/pacific-nw-magazine/seattles-vanishing-black-community/"
      },
      {
        "t": "“Chapter 3: Demographic & Economic Data, by Race.” *Pew Research Center’s Social & Demographic Trends Project*, 31 Dec. 2019.",
        "u": "http://www.pewsocialtrends.org/2013/08/22/chapter-3-demographic-economic-data-by-race/"
      },
      {
        "t": "“Demographic Profile: City of East Palo Alto.” *Bay Area Census*. MTC-ABAG Library. Retrieved June 6, 2017."
      },
      {
        "t": "Kochhar, Rakesh, and Anthony Cilluffo. “Income Inequality in the U.S. Is Rising Most Rapidly Among Asians.” *Pew Research Center’s Social & Demographic Trends Project*, 31 Dec. 2019.",
        "u": "http://www.pewsocialtrends.org/2018/07/12/income-inequality-in-the-u-s-is-rising-most-rapidly-among-asians/"
      },
      {
        "t": "Rothstein, Richard. *The Color of Law: A Forgotten History of How Our Government Segregated America*. Liveright, 2018."
      },
      {
        "t": "Semuels, Alana. “Chicago’s Awful Divide.” *The Atlantic*, Atlantic Media Company, 29 Mar. 2018.",
        "u": "http://www.theatlantic.com/business/archive/2018/03/chicago-segregation-poverty/556649/"
      }
    ]
  },
  {
    "date": "2017-12-20",
    "title": "The Things I Once Took for Granted",
    "slug": "the-things-i-once-took-for-granted",
    "category": "Novel",
    "book": {
      "cover": "kim_jiyoung.jpg",
      "title": "82年生的金智英 (Kim Ji-young, Born 1982)",
      "author": "趙南柱 Cho Nam-joo",
      "language": "Traditional Chinese",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Minumsa, 2016 · Traditional Chinese edition",
        "The life of an ordinary Korean woman from birth to motherhood, told like a case file, until she begins to speak in other women’s voices."
      ]
    },
    "place": "於加州聖克拉拉\nSanta Clara, CA",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      ["翻開《82年生的金智英》之前，我自認對韓國社會並不陌生。",
       "Before opening *Kim Ji-young, Born 1982*, I would have said I know Korean society well enough."],
      ["韓國家庭的禮節我熟悉，長輩與晚輩之間那些不必明說的規矩，我也看得懂。家庭聚會誰準備飯菜，結婚之後如何對待雙方父母，個人願望與家庭期待之間誰該讓步，這些在我看來都不遙遠。",
       "I know the etiquette of Korean families, and I can read the unspoken rules between elders and juniors. Who prepares the food at a family gathering, how one treats both sets of parents after marriage, who gives way when personal wishes meet family expectations: none of it looks far away to me."],
      ["開頭。金智英三十多歲，已婚，有了孩子，辭去工作，在家帶孩子。丈夫鄭大賢有穩定的職業，對她也不冷淡。她的生活看上去沒什麼值得一講。",
       "The opening. Kim Ji-young is in her thirties, married, with a child, and has quit her job to stay home with the baby. Her husband, Jung Dae-hyun, has a steady career and is not cold to her. Her life looks like it has nothing worth telling."],
      ["然後她開始用別的女人的口吻說話。有時像她自己的母親，有時像一位已經過世的女性。語氣、神態、說話的方式忽然都變了，像是另一個人暫時借走了她的身體。丈夫不安，帶她去看精神科醫生。",
       "Then she starts speaking in the voices of other women. Sometimes she sounds like her own mother, sometimes like a woman who has died. Her tone, bearing and manner of speech change all at once, as if someone else had borrowed her body for a while. Her husband is uneasy and takes her to a psychiatrist."],
      ["趙南柱沒有把這件事寫成懸疑。她把敘事慢下來，從金智英出生開始講。我喜歡這種近乎冷淡的安排：讀者想知道她為什麼病了，小說卻先要我們看她是怎樣長大的。",
       "Cho Nam-joo does not turn this into a mystery. She slows the narrative and starts from Kim Ji-young’s birth. I like this almost cold arrangement. The reader wants to know why she is ill, and the novel first asks us to see how she grew up."],
      ["她生於1982年。童年沒有戲劇性的災難，只有細小而持久的差別：男孩更受重視，女孩更早學會忍讓，家裡的許多安排似乎從來不必解釋。",
       "She is born in 1982. Her childhood has no dramatic disaster, only small and lasting differences. Boys are valued more, girls learn earlier to yield, and many arrangements in the family never seem to need explaining."],
      ["她的母親吳美淑，我記得特別清楚。年輕時為了供兄弟讀書，她很早就扛起家裡的經濟負擔。她並非沒有自己的願望，只是那些願望總要排在別人的需要後面。後來她做了母親，盼望女兒能有不同的人生。她明白自己失去了什麼，卻未必攔得住女兒以另一種形式再失去一次。這比單純的代際衝突更讓我難受。",
       "Her mother, Oh Mi-sook, stays with me most. As a young woman she took on the family’s money worries early, to put her brothers through school. She had wishes of her own, but they always had to wait behind other people’s needs. Later she becomes a mother and hopes her daughter will have a different life. She knows what she lost, and cannot necessarily stop her daughter from losing something similar in another form. This hurts me more than a plain quarrel between generations would."],
      ["學校，大學，職場。筆調一直克制。趙南柱沒有熱衷於寫某個十惡不赦的人，她寫招聘、升職、辦公室裡的來往，還有人們隨口說出、卻不覺得要負責的話。這些情節最叫人不安的地方，在於它們沒有明確的戲劇高潮。",
       "School, university, work. The tone stays restrained. Cho Nam-joo is not keen on writing some irredeemable villain. She writes about hiring, promotion, office dealings, and the things people say offhand without feeling they must answer for them. What unsettles me most about these episodes is that none of them has a clear dramatic climax."],
      ["金智英成了母親。咖啡館裡，她聽見陌生人叫她「媽蟲」。她只是帶孩子出來喝杯咖啡，就被歸進了依賴丈夫、不事生產的那種女人。事情不複雜，也沒有演變成激烈的衝突，但我覺得它比許多更嚴重的遭遇更能說明她的處境。她失去的不只是一份職業，連解釋自己日常生活的餘地也越來越小。",
       "Kim Ji-young is now a mother. In a café she hears strangers call her a “mom-roach.” She has only come out with her child for a cup of coffee, and she is filed at once under the woman who lives off her husband and produces nothing. The incident is simple and never grows into a fierce conflict, yet I feel it explains her situation better than many graver experiences. What she has lost is more than a career. She has less and less room even to explain her own daily life."],
      ["寫到這裡，我開始留意作者的寫法。這本書不像傳統心理小說那樣，帶我們走進主人公豐富而隱祕的內心。它更像一份關於普通人的社會檔案，依出生、求學、就業、婚姻、生育的順序逐項記錄。其間還穿插著真實的社會調查和統計資料。",
       "Here I start to notice how the author writes. The book does not take us deep into the protagonist’s rich, hidden inner life the way a traditional psychological novel would. It reads more like a social file on an ordinary person, recording her item by item in the order of birth, schooling, work, marriage and childbirth. Real social surveys and statistics are woven in between."],
      ["有時我覺得生硬。人物的經歷總是剛好能證明某個社會現象，金智英因此顯得太被動。她很少有與這些問題無關的慾望、缺點或任性。我們知道她遇到了什麼，卻不一定知道她喜歡什麼。把它當純文學來讀，這樣的人物塑造不能說沒有問題。",
       "At times it feels stiff to me. Her experiences always happen to prove some social phenomenon, and Kim Ji-young comes across as too passive. She rarely has a desire, flaw or whim unconnected to these problems. We know what she meets with, but not necessarily what she likes. Read as pure literature, this way of building a character has its problems."],
      ["但我慢慢覺得，趙南柱是有意犧牲了一部分人物的獨特。金智英這個名字本身就很普通，1982年也不是什麼有特殊歷史意義的年份。她不是英雄，也不是反抗者，甚至不太會表達自己。作者似乎不要我們記住一個與眾不同的女人，而要我們發現，自己可能早已遇見過許多個金智英。",
       "But slowly I feel Cho Nam-joo has given up part of the character’s uniqueness on purpose. The name Kim Ji-young is very ordinary, and 1982 is not a year of special historical weight. She is no hero, no rebel, and not even someone especially good at putting herself into words. The author seems not to want us to remember an exceptional woman, but to want us to find that we may already have met many Kim Ji-youngs."],
      ["這又把我帶回開頭那份熟悉感。我過去以為，理解一種文化就是知道它的禮節、習俗和家庭觀念，可這些知識多半來自旁觀者的位置。我知道一頓家庭聚餐該怎麼安排，卻沒有認真想過是誰在備這頓飯。我懂長輩對婚姻的期待，卻沒留意那些期待怎樣走進年輕人的私生活。熟悉有時會磨掉觀察的敏感。",
       "This brings me back to the familiarity I felt at the start. I used to think understanding a culture meant knowing its etiquette, customs and ideas about family, but that knowledge mostly comes from where an onlooker stands. I knew how a family dinner should be arranged and never thought seriously about who was cooking it. I understood elders’ expectations about marriage and never noticed how those expectations walk into young people’s private lives. Familiarity can wear down the sensitivity to look."],
      ["結尾，也是整本書最出色的地方，勝過她的成長經歷。一直用冷靜客觀的口吻講述她人生的，原來是替她看診的男精神科醫生。他聽完了她的故事，理解她的困境，也能用專業語言解釋她的症狀。可是診所一名女員工懷孕之後，他開始考慮聘一個不太會因生育離職的人。我讀到這裡，幾乎覺得趙南柱在捉弄讀者。整部小說花了大量篇幅讓我們相信，理解能帶來改變。最後，最完整掌握金智英人生的那個人，仍照自己熟悉的方式做了決定。他不缺知識，只是知識沒有改變他看待自己生活的方式。",
       "The ending, which is the finest part of the whole book, finer than her upbringing. The one who has been telling her life in that calm, objective tone turns out to be the male psychiatrist treating her. He has listened to her story, understands her predicament, and can explain her symptoms in professional language. Yet when a woman on his clinic staff becomes pregnant, he begins to consider hiring someone unlikely to leave over childbirth. Reading this, I almost feel Cho Nam-joo is teasing the reader. The novel has spent so many pages making us believe that understanding can bring change. In the end, the person who knows Kim Ji-young’s life most completely still decides the way he is used to. He does not lack knowledge. It simply has not changed how he looks at his own life."],
      ["這也讓開頭那些奇怪的聲音有了另一層意思。金智英不斷借用別的女人的口吻，她自己的人生，最後又由一位男醫生替她整理、講述。從頭到尾，我們幾乎沒有機會聽見一個不必被解釋、不必被診斷的金智英。我不知道這是作者有意安排的敘事諷刺，還是為了呈現社會問題所做的文學選擇。總之，這本有些直白的小說，在最後一頁忽然複雜起來。",
       "This gives the strange voices at the beginning another layer. Kim Ji-young keeps borrowing the voices of other women, and her own life is finally arranged and told for her by a male doctor. From start to finish we hardly get to hear a Kim Ji-young who does not need to be explained or diagnosed. I do not know whether this is a narrative irony Cho Nam-joo planned or a literary choice made to lay out a social problem. Either way, this rather plain novel turns complicated on its last page."],
      ["合上書。腦子裡浮起來的，沒有統計數字，也沒有哪一件特別令人憤怒的事，只有翻開書之前的那份自信：我以為自己夠熟悉這些家庭與社會關係，所以也夠理解。現在覺得，那可能只是一個不必付出同樣代價的人所擁有的熟悉。金智英說的是別人的話。那些我過去聽來再平常不過的話，我到底聽懂了多少，還在數。",
       "I close the book. What comes up has no statistics in it, and no single infuriating incident, only the confidence I had before opening it: I believed I was familiar enough with these family and social relationships, and so understood them well enough. Now I think it may have been only the familiarity of someone who does not pay the same price. Kim Ji-young speaks in other people’s words. Of the words that once sounded entirely ordinary to me, I am still counting how many I really heard."]
    ]
  },
  {
    "date": "2018-04-21",
    "title": "The Hand That Stayed Raised",
    "slug": "the-hand-that-stayed-raised",
    "category": "Novel",
    "book": {
      "cover": "crime_and_punishment.jpg",
      "title": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "language": "English",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · English translation by Michael R. Katz of the Russian original, first published 1866",
        "Raskolnikov, a poor student in Petersburg, murders a pawnbroker, and is slowly undone by what he has done."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "他杀了人。",
          "He has killed someone."
        ]
      ],
      [
        [
          "可是拿破仑。",
          "But Napoleon."
        ],
        [
          "拿破仑杀过多少人。",
          "How many did Napoleon kill."
        ]
      ],
      [
        [
          "那些将军，皇帝，立法者，",
          "The generals, the emperors, the lawgivers,"
        ],
        [
          "哪一个不是踩着尸体",
          "not one who did not climb over corpses"
        ],
        [
          "走向自己的纪念碑。",
          "toward his own monument."
        ]
      ],
      [
        [
          "历史替他们计算功绩，",
          "History tallies their achievements"
        ],
        [
          "却不肯一个一个",
          "and will not count the dead"
        ],
        [
          "清点死者的姓名。",
          "by name, one by one."
        ]
      ],
      [
        [
          "而他。",
          "And he."
        ],
        [
          "一个老太婆。",
          "An old woman."
        ],
        [
          "一个放高利贷的老太婆。",
          "A moneylending old woman."
        ]
      ],
      [
        [
          "他忽然觉得可笑。",
          "Suddenly it seems laughable."
        ],
        [
          "为了这样一个人，",
          "For such a person"
        ],
        [
          "他竟然发起烧来。",
          "he has actually come down with a fever."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "房间闷得喘不过气。",
          "The room is too stifling to breathe in."
        ],
        [
          "墙纸剥落。",
          "The wallpaper peels."
        ],
        [
          "窗外，马车碾过石板。",
          "Outside, a carriage rolls over the paving stones."
        ]
      ],
      [
        [
          "他第三次检查门闩。",
          "He checks the latch a third time."
        ],
        [
          "门明明锁着。",
          "The door is plainly locked."
        ],
        [
          "没有人知道。",
          "No one knows."
        ],
        [
          "即使有人知道，又能怎样。",
          "Even if someone knew, what then."
        ]
      ],
      [
        [
          "他躺下，",
          "He lies down,"
        ],
        [
          "又立刻坐起。",
          "and at once sits up."
        ]
      ],
      [
        [
          "楼梯上有人。",
          "Someone is on the stairs."
        ],
        [
          "脚步停了。",
          "The footsteps stop."
        ]
      ],
      [
        [
          "他屏住呼吸，",
          "He holds his breath."
        ],
        [
          "等了很久，",
          "He waits a long time"
        ],
        [
          "才发现那人",
          "before he finds the person"
        ],
        [
          "只是走进了隔壁的房间。",
          "has only gone into the next room."
        ]
      ],
      [
        [
          "多么荒唐。",
          "How absurd."
        ],
        [
          "他愤怒地笑了一声。",
          "He lets out an angry laugh."
        ],
        [
          "拿破仑也会这样吗？",
          "Would Napoleon do this?"
        ],
        [
          "在一间破阁楼里，",
          "In a wretched attic,"
        ],
        [
          "竖起耳朵，",
          "ears pricked,"
        ],
        [
          "听一个醉汉上楼。",
          "listening to a drunk climb the stairs."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "丽扎韦塔。",
          "Lizaveta."
        ],
        [
          "这个名字不知从哪里冒出来。",
          "The name has come from nowhere."
        ]
      ],
      [
        [
          "他没有想过她。",
          "He had not thought of her."
        ],
        [
          "此前没有，",
          "Not before,"
        ],
        [
          "此后也竭力不去想。",
          "and afterward he tried hard not to."
        ]
      ],
      [
        [
          "她只是忽然走进房间，",
          "She simply walked into the room,"
        ],
        [
          "站在那里，",
          "stood there,"
        ],
        [
          "没来得及喊叫。",
          "had no time to cry out."
        ]
      ],
      [
        [
          "他记得她举起的手。",
          "He remembers the hand she raised."
        ],
        [
          "为什么偏偏是那只手？",
          "Why that hand, of all things?"
        ]
      ],
      [
        [
          "她倒下的声音他记不清，",
          "The sound of her falling he cannot recall."
        ],
        [
          "手指却张开着，",
          "Her fingers, though, were spread open,"
        ],
        [
          "像要挡住什么，",
          "as if to ward something off,"
        ],
        [
          "又像什么也不打算挡。",
          "as if to ward off nothing."
        ]
      ],
      [
        [
          "他猛地翻过身。",
          "He turns over sharply."
        ],
        [
          "有什么可想的，",
          "What is there to think about."
        ],
        [
          "事情已经过去。",
          "It is over."
        ],
        [
          "死人不会再说话。",
          "The dead do not speak again."
        ]
      ],
      [
        [
          "可是那只手",
          "But the hand"
        ],
        [
          "始终举着。",
          "stays raised."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "后来，他对索尼娅讲起这一切。",
          "Later he tells Sonya all of it."
        ],
        [
          "他说得很快，",
          "He speaks quickly,"
        ],
        [
          "有时突然停住，",
          "sometimes stops short,"
        ],
        [
          "等她开口问。",
          "waiting for her to ask."
        ]
      ],
      [
        [
          "她不问。",
          "She does not ask."
        ],
        [
          "她只是望着他，",
          "She only looks at him,"
        ],
        [
          "那目光让他恼火。",
          "and the look irritates him."
        ]
      ],
      [
        [
          "他宁愿她害怕，",
          "He would rather she were afraid,"
        ],
        [
          "宁愿她责骂，",
          "rather she scolded,"
        ],
        [
          "宁愿她转身走开。",
          "rather she turned and left."
        ],
        [
          "可她哭了。",
          "But she weeps."
        ]
      ],
      [
        [
          "他不明白。",
          "He does not understand."
        ],
        [
          "她又不认识那个老太婆。",
          "She did not even know the old woman."
        ],
        [
          "他已经说得那么清楚，",
          "He has explained so clearly,"
        ],
        [
          "那么多理由，",
          "so many reasons,"
        ],
        [
          "那么多不得不如此的理由，",
          "so many reasons why it had to be,"
        ],
        [
          "她一句也没听进去。",
          "and she has not taken in a word."
        ]
      ],
      [
        [
          "他想再解释一遍，",
          "He wants to explain once more"
        ],
        [
          "却忘了刚才说到哪里。",
          "and has forgotten where he was."
        ],
        [
          "窗外天色渐暗。",
          "Outside the light is dimming."
        ],
        [
          "索尼娅仍坐在那里。",
          "Sonya still sits there."
        ]
      ],
      [
        [
          "他忽然想起，",
          "He suddenly remembers"
        ],
        [
          "丽扎韦塔认识她。",
          "that Lizaveta knew her."
        ]
      ],
      [
        [
          "这件事他早就知道，",
          "He had known this already,"
        ],
        [
          "直到此刻才觉得奇怪。",
          "and only now it seems strange."
        ],
        [
          "那个女人走进那间屋子之前，",
          "Before that woman walked into that room"
        ],
        [
          "也走进过别人的生活。",
          "she had walked into other lives."
        ],
        [
          "有人同她说过话，",
          "Someone had spoken with her,"
        ],
        [
          "有人认得她的声音。",
          "someone knew her voice."
        ]
      ],
      [
        [
          "某个傍晚，",
          "One evening"
        ],
        [
          "她也许像索尼娅现在这样，",
          "she may have sat as Sonya sits now,"
        ],
        [
          "坐在一扇窗前。",
          "at a window."
        ],
        [
          "他不愿再想下去。",
          "He does not want to think further."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "许久以后，西伯利亚。",
          "Long afterward, Siberia."
        ],
        [
          "他仍常想起自己的案子，",
          "He still often thinks of his case,"
        ],
        [
          "那些论证，",
          "those arguments,"
        ],
        [
          "那些曾让他彻夜不眠的念头。",
          "those ideas that once kept him up all night."
        ]
      ],
      [
        [
          "有时他觉得，",
          "Sometimes he feels"
        ],
        [
          "只要重新整理一遍，",
          "that if he could arrange them again"
        ],
        [
          "就能找出当初错在哪里。",
          "he would find where it went wrong."
        ],
        [
          "可那些念头",
          "But the ideas"
        ],
        [
          "已不如从前清楚。",
          "are no longer as clear as they were."
        ]
      ],
      [
        [
          "一天，索尼娅坐在他身旁。",
          "One day Sonya sits beside him."
        ],
        [
          "他握住她的手，",
          "He takes her hand"
        ],
        [
          "很久没有说话。",
          "and says nothing for a long time."
        ]
      ],
      [
        [
          "远处，河水在春天的阳光下流动。",
          "Far off the river flows in the spring sun."
        ],
        [
          "对岸有人走过，",
          "Someone passes on the far bank,"
        ],
        [
          "小得几乎认不出。",
          "too small to recognize."
        ]
      ],
      [
        [
          "他又想起那只举起的手。",
          "He remembers again the raised hand."
        ],
        [
          "这一次，",
          "This time"
        ],
        [
          "他不急着忘掉它。",
          "he is in no hurry to forget it."
        ]
      ]
    ]
  },
  {
    "date": "2018-06-20",
    "title": "Names Still on the Books",
    "slug": "names-still-on-the-books",
    "category": "Novel",
    "book": {
      "cover": "dead_souls.jpg",
      "title": "Мёртвые души (Dead Souls)",
      "author": "Николай Гоголь Nikolai Gogol",
      "language": "Russian",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · Russian original, first published 1842",
        "Chichikov travels the provinces buying the names of dead serfs that are still on the tax rolls."
      ]
    },
    "place": "于加州旧金山\nSan Francisco, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["果戈里先生：",
       "Dear Mr. Gogol,"],
      ["人死了，本是最简单的事。棺材钉好，泥土填平，亲戚哭过，神父祷告过，死者自己自然再没有意见。可您笔下俄罗斯帝国的账簿，并不这样看。一个人可以停止呼吸，却不能擅自停止纳税；可以离开人世，却不能未经核准离开财产名册。上帝收走了他的灵魂，地主留着他的名字，官府则很公正地认定，下一次人口清查没来之前，这个人仍然活着。",
       "A person’s death is the simplest of matters. The coffin is nailed shut, the earth leveled, the relatives have wept and the priest has prayed, and the dead man himself, naturally, has no more opinions. But the ledgers of the Russian Empire in your pages do not see it that way. A man may stop breathing but may not stop paying tax on his own say-so; he may leave the world but not the property register without approval. God has taken his soul, the landowner keeps his name, and the authorities, quite fairly, rule that until the next census arrives he is still alive."],
      ["您于是放乞乞科夫进来。他无意惊扰死者，倒对他们怀着活人难得的敬意：死人不逃跑，不酗酒，不生病，更不向主人要面包。他们是最理想的农奴，唯一的缺点是死了，而这点缺点，在一张盖了印章的文书面前，实在不算什么。",
       "So you let Chichikov in. He has no wish to disturb the dead, and holds for them a respect the living seldom earn: dead men do not run away, do not drink, do not fall sick, and above all do not ask their master for bread. They are ideal serfs, with the one flaw of being dead, and before a stamped document that flaw hardly counts."],
      ["要是有人问起这些人的生平，事情就麻烦了。叫彼得的也许有过妻子，叫斯捷潘的会做靴子，叫伊万的也许在某个冬天冻死在回家的路上。这些都是无关紧要的细节。账簿不必知道彼得爱没爱过妻子，只要知道他属于哪位地主；不必知道斯捷潘做过多少双靴子，只要知道名字还在不在册上。一个人活着时，未必有人愿意听他说话；死了以后，倒有许多人认真讨论他的价钱。",
       "If anyone asked about the lives of these men, things would get awkward. The one called Pyotr may have had a wife, the one called Stepan made boots, the one called Ivan may have frozen to death one winter on the road home. These are irrelevant details. The ledger need not know whether Pyotr loved his wife, only which landowner he belongs to; it need not know how many pairs of boots Stepan made, only whether his name is still on the list. While a man lives, there may be no one willing to hear him out. Once he is dead, many people earnestly discuss his price."],
      ["可您偏偏不肯让事情就此了结。您让纸上的名字重新长出面孔、手艺、脾气和命运，像在交易完成之后，不合时宜地插了一句：且慢，诸位先生，我们刚才卖掉的，究竟是什么人？",
       "But you will not let the matter end there. You let the names on the paper grow faces, trades, tempers and fates again, like someone who, after the deal is done, cuts in at the wrong moment: wait, gentlemen, what exactly was it that we have just sold?"],
      ["当然没有人回答。买卖成交，契约签了，官员们也尽了职。至于那些人曾经怎样活过，不在账簿管辖的范围之内。",
       "Of course no one answers. The sale is closed, the contract signed, the officials have done their duty. How those men once lived falls outside the ledger’s jurisdiction."]
    ]
  },
  {
    "date": "2018-09-05",
    "title": "Only One Son Left",
    "slug": "only-one-son-left",
    "category": "Novel",
    "book": {
      "cover": "and_quiet_flows_the_don.jpg",
      "title": "And Quiet Flows the Don",
      "author": "Mikhail Sholokhov",
      "language": "English",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · English translation of the Russian original, 1928–40",
        "Grigory Melekhov, a Don Cossack, is torn between Reds and Whites through war, revolution and civil war."
      ]
    },
    "place": "于夏威夷州檀香山\nHonolulu, HI",
    "languages": ["Chinese", "English"],
    "prose": [
      ["葛利高里回到家时，儿子米沙特卡还活着。",
       "When Grigory returns home, his son Mishatka is still alive."],
      ["肖洛霍夫在小说最后写道，葛利高里抱着儿子，站在自家的门前。这就是他生活中所剩下的一切，也是他与土地、与整个广阔世界之间仅存的联系。",
       "At the end of the novel Sholokhov writes that Grigory, holding his son, stands before the door of his own house. This is all that is left in his life, and the only remaining tie between him and the land, and the whole wide world."],
      ["我反复想到“所剩下”这三个字。",
       "I keep thinking of the words “what is left.”"],
      ["它意味着葛利高里的一生仿佛经历了一场漫长的减法。战争夺走父母，夺走妻子和情人，夺走兄弟与女儿，最后连他曾经相信的荣誉、正义和哥萨克的生活方式，也一并夺走。",
       "They mean that Grigory’s life has gone through a long subtraction. War takes his parents, his wife and his lover, his brother and his daughter, and finally even the honor, justice and Cossack way of life he once believed in."],
      ["但一个儿子，为什么能够成为一个人与整个世界之间最后的联系？",
       "But why can a son be the last tie between a person and the whole world?"],
      ["我想，并不是因为血缘能够弥补一切。",
       "I think it is not because blood can make up for everything."],
      ["恰恰相反，米沙特卡的存在使葛利高里不得不面对一个更加残酷的事实：**他还有未来，而那些死去的人已经没有了。**",
       "On the contrary, Mishatka’s existence forces Grigory to face a crueler fact: **he still has a future, and those who died have none.**"],
      ["对于一个失去一切的人，死亡有时反而是最容易理解的结局。它能够使苦难停止，使一个充满矛盾的人生获得某种确定的终点。但儿子还活着，意味着葛利高里不能把自己的故事就此结束。",
       "For a man who has lost everything, death is sometimes the most comprehensible ending. It can stop the suffering and give a life full of contradiction a certain end. But his son being alive means Grigory cannot end his story here."],
      ["他必须继续做父亲。",
       "He must go on being a father."],
      ["他必须面对孩子明天吃什么，冬天如何过，庄稼何时播种。那些在战争中显得微不足道的事情，重新成为他无法推卸的责任。",
       "He must face what the child will eat tomorrow, how to get through the winter, when to sow the crops. The things that seemed trivial in war become, again, a responsibility he cannot shirk."],
      ["而这种责任并不要求他先弄明白自己的一生。",
       "And this responsibility does not require him first to work out his own life."],
      ["米沙特卡不会因为父亲曾经站错队伍，就不再需要父亲；也不会因为父亲终于悔悟，便替他原谅过去的杀戮。",
       "Mishatka does not cease to need his father because his father stood on the wrong side; nor will he forgive past killings for his father because the father has finally repented."],
      ["孩子既不是审判者，也不是救赎者。",
       "The child is neither judge nor redeemer."],
      ["他只是一个仍然需要被照顾的人。",
       "He is simply someone who still needs to be cared for."],
      ["我觉得，这正是肖洛霍夫没有让葛利高里在结尾获得思想觉醒的原因。倘若他终于理解了革命，或者终于认识到自己全部的错误，那么这个结尾便很容易成为一种道德上的结算：一个人历尽苦难，终于懂得了什么。",
       "I think this is why Sholokhov does not give Grigory an intellectual awakening at the end. Had he finally understood the revolution, or finally recognized all his mistakes, the ending would easily become a moral settling of accounts: a man, after all his suffering, finally learns something."],
      ["但生活并不总是等待人们懂得之后才继续。",
       "But life does not always wait for people to understand before it goes on."],
      ["**有时，一个人还没有找到活下去的理由，就已经有人需要他活下去。**",
       "**Sometimes, before a person has found a reason to live on, someone already needs him to live on.**"],
      ["更深一层看，米沙特卡并不只是葛利高里仅存的亲人。他还是一个尚未被历史完全定义的人。",
       "Looked at more deeply, Mishatka is not only Grigory’s one remaining relative. He is also someone not yet fully defined by history."],
      ["在父亲的世界里，一个人必须是红军或白军，是革命者或反革命者，是忠诚者或叛徒。每一种身份都意味着选择，每一种选择都可能要求另一个人死去。",
       "In his father’s world, a person must be Red or White, revolutionary or counter-revolutionary, loyal or traitor. Every identity means a choice, and every choice may require another person to die."],
      ["但米沙特卡还只是米沙特卡。",
       "But Mishatka is still just Mishatka."],
      ["他尚未为任何旗帜杀人，也不需要为任何主义牺牲。他的未来尚未成为某种历史叙事的证据。",
       "He has not killed for any flag, nor does he need to sacrifice for any doctrine. His future has not yet become evidence for any historical narrative."],
      ["葛利高里抱着他，或许第一次不必通过敌我、胜负与忠诚来确认自己与另一个人的关系。",
       "Holding him, Grigory perhaps for the first time need not confirm his relation to another person through friend or foe, victory or defeat, loyalty."],
      ["然而，这里面仍然隐藏着一种令人不安的希望。",
       "Yet an unsettling hope is hidden here too."],
      ["父亲经历过的历史，并不会因为儿子年幼就停止。米沙特卡终究会长大，也终究会进入那个曾经摧毁父亲一生的世界。葛利高里无法保证儿子不会重复自己的命运，甚至无法保证自己能够陪伴他长大。",
       "The history the father went through does not stop because the son is young. Mishatka will grow up and in the end enter the world that once destroyed his father’s life. Grigory cannot guarantee that his son will not repeat his fate, nor even that he can accompany him as he grows up."],
      ["所以，这个拥抱不是胜利。",
       "So this embrace is not a victory."],
      ["它只是一个被历史反复剥夺的人，暂时握住了某种尚未被剥夺的东西。",
       "It is only a person repeatedly stripped by history, for the moment holding something not yet taken."],
      ["我想，肖洛霍夫最深刻的克制，就在于他没有告诉我们这个孩子后来怎样了。",
       "I think Sholokhov’s deepest restraint lies in not telling us what became of the child."],
      ["因为一旦写出米沙特卡的未来，我们便又会忍不住用结局衡量这个拥抱的意义。如果儿子后来幸福，父亲的苦难似乎终于获得补偿；如果儿子也遭遇不幸，这最后一点希望便仿佛失去了价值。",
       "Because once Mishatka’s future is written, we would again be unable to help measuring the meaning of this embrace by the ending. If the son later is happy, the father’s suffering seems finally compensated; if the son also meets misfortune, this last bit of hope seems to lose its value."],
      ["但孩子活着，本来就不需要由未来的幸福来证明其意义。",
       "But a child’s being alive never needed future happiness to prove its meaning."],
      ["**米沙特卡不是葛利高里苦难的补偿，更不是历史欠他的奖赏。他是一个独立的生命，不能被用来抵消那些已经失去的生命。**",
       "**Mishatka is not compensation for Grigory’s suffering, still less a reward history owes him. He is an independent life, and cannot be used to offset the lives already lost.**"],
      ["葛利高里也不知道这个孩子将来会怎样。自己走过的路，未必能使儿子少走一步。",
       "Grigory too does not know what will become of the child. The road he has walked may not spare his son a single step."],
      ["肖洛霍夫没有让他得到宽恕，也没有让他看见希望。",
       "Sholokhov does not let him receive forgiveness, nor see hope."],
      ["他只是回到了家门前。",
       "He has only come back to the door of his house."],
      ["怀里的孩子还小，往后的日子还长。有些事情葛利高里永远无法挽回，有些事情却仍然要由他亲手去做。",
       "The child in his arms is small, and the days ahead are long. Some things Grigory can never undo, and some things he must still do with his own hands."],
      ["他抱着儿子，站在那里。",
       "He holds his son, and stands there."]
    ]
  },
  {
    "date": "2017-09-20",
    "title": "A Cholera That Lasted Fifty-Three Years",
    "slug": "a-cholera-that-lasted-fifty-three-years",
    "category": "Novel",
    "book": {
      "cover": "love_in_the_time_of_cholera.jpg",
      "title": "Love in the Time of Cholera",
      "author": "Gabriel García Márquez",
      "language": "English",
      "country": "Colombia",
      "original": "Spanish",
      "lines": [
        "Novel · English translation of El amor en los tiempos del cólera, 1985",
        "Florentino Ariza waits fifty-three years for Fermina Daza, who marries a doctor in between."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["马格达莱纳河上，一艘轮船升起了黄色的旗。那是霍乱疫情的标记，为的是不让别的乘客上船。甲板上有两个老人。他们并没有生病。",
       "On the Magdalena River a steamer raises a yellow flag. It is the signal of a cholera outbreak, hoisted to keep other passengers from boarding. On deck sit two old people. Neither of them is ill."],
      ["在十九世纪的加勒比海世界，检疫旗意味着隔离，意味着港口可能拒绝船只靠岸，船上的人必须暂时退出正常的社会生活。如今两个老人主动借用这种被隔离的身份，躲开陆地上的年龄、家庭与社会秩序。这是整部小说最奇妙，也最残酷的玩笑。",
       "In the nineteenth-century Caribbean, a quarantine flag meant isolation: ports might refuse the ship, and those aboard had to withdraw for a time from ordinary social life. Now two old people take up that isolated status on purpose, to get away from the age, the family and the social order of the land. It is the most marvelous and the cruelest joke in the whole novel."],
      ["男人叫弗洛伦蒂诺·阿里萨。五十三年七个月零十一个昼夜里，他一直相信自己患着一种无法治愈的病。这病最怪的地方，在于病人不但拒绝痊愈，还把每一次复发当作生命仍值得继续的证据。",
       "The man is Florentino Ariza. For fifty-three years, seven months and eleven days and nights he has believed he suffers from an incurable disease. The strangest thing about it is that the patient not only refuses to recover but takes every relapse as proof that life is still worth continuing."],
      ["回到最初。故事发生在十九世纪末到二十世纪初的加勒比海沿岸，蒸汽轮船正在取代旧式航运，电报线把遥远的城市连在一起，霍乱仍能让整座港口陷入恐慌。年轻的弗洛伦蒂诺在电报局工作，懂得怎样让消息穿过漫长的距离，却始终没法让自己的爱抵达费尔明娜。他失眠，呕吐，吃不下东西，母亲甚至怀疑他染了霍乱。那时疾病顺着船只和河流传播，城市也没有可靠的公共卫生体系，爱情与瘟疫确有几分令人不安的相似。",
       "Back to the beginning. The story is set on the Caribbean coast between the late nineteenth and early twentieth centuries. Steamships are replacing the old shipping, telegraph lines join distant cities, and cholera can still throw a whole port into panic. The young Florentino works in the telegraph office and knows how to send a message across great distances, yet cannot make his love reach Fermina. He cannot sleep, he vomits, he cannot eat, and his mother even suspects he has caught cholera. Disease then travels with the ships and the rivers, and cities have no reliable public health system, so love and plague do share something unsettling."],
      ["费尔明娜的病好得比他快得多。市场里，她终于看清那个曾让她神魂颠倒的年轻人。没有背叛，没有争吵，没有一件足以写进家族史的变故。她只是忽然发现，自己爱上的不是眼前的人，而是情书、秘密和等待一起造出来的幻影。她叫他忘掉这一切，转身走了。弗洛伦蒂诺却决定用余生证明她错了。",
       "Fermina recovers much faster than he does. In the market she finally sees clearly the young man who once so enthralled her. There is no betrayal, no quarrel, no event worth entering in the family chronicle. She simply discovers that she had loved not the person in front of her but an illusion made together by the love letters, the secrecy and the waiting. She tells him to forget it all and walks away. Florentino decides to spend the rest of his life proving her wrong."],
      ["此后半个多世纪，他把等待经营得像一项世袭的事业。情人无数，却始终相信自己在精神上忠于费尔明娜。这在他眼里毫无矛盾，就像虔诚的信徒不会因为天天犯罪，就怀疑自己对上帝的忠诚。",
       "For more than half a century after that, he runs his waiting like a hereditary enterprise. He has countless lovers and still believes he is spiritually faithful to Fermina. In his eyes there is no contradiction, just as a devout believer does not doubt his loyalty to God because he sins every day."],
      ["与此同时，费尔明娜嫁给了乌尔比诺医生。他留学欧洲，信奉现代医学与城市卫生改革，要把一座仍满是污水、恶臭和疫病威胁的加勒比海港口改造成文明城市。他代表十九世纪拉丁美洲精英对欧洲进步观念的信仰：只要引进科学、公共卫生与现代制度，旧世界的混乱终将让位于秩序。",
       "Meanwhile Fermina marries Dr. Urbino. He studied in Europe and believes in modern medicine and urban sanitary reform, and he sets out to turn a Caribbean port still full of sewage, stench and the threat of epidemic into a civilized city. He stands for the nineteenth-century Latin American elite’s faith in European ideas of progress: bring in science, public health and modern institutions, and the chaos of the old world will in time give way to order."],
      ["可这位想消灭霍乱的医生，消灭不了自己婚姻里的琐碎争执。他和费尔明娜曾为浴室里一块没放好的肥皂陷入漫长的冷战。两人都知道事情早与肥皂无关，却谁也不肯先认错。半个世纪的婚姻就这样过去：爱情有时藏在一句问候里，有时消失在一顿晚饭中，有时又因一块肥皂变得不可收拾。",
       "But the doctor who sets out to wipe out cholera cannot wipe out the petty quarrels in his own marriage. He and Fermina once fall into a long cold war over a bar of soap left in the wrong place in the bathroom. Both know it stopped being about soap long ago, and neither will admit fault first. A half-century of marriage passes like this: love sometimes hides in a greeting, sometimes vanishes over a dinner, and sometimes gets out of hand over a bar of soap."],
      ["弗洛伦蒂诺不知道这些。他等的费尔明娜一直停在年轻时的市场里，好像只要耐心足够，她总有一天会从那个下午走出来，重新接过他的情书。",
       "Florentino knows none of this. The Fermina he waits for stays in the market of her youth, as though with enough patience she would one day walk out of that afternoon and take his letters again."],
      ["直到乌尔比诺医生为了捉一只鹦鹉，从梯子上摔下来死了。一个毕生用现代医学对抗疾病的人，最后死在一只不听话的鸟手里。马尔克斯让死亡以这样荒唐的方式降临，像在提醒我们，现代文明能修下水道，能架电报线，却不能让人的命运服从理性的安排。",
       "Until Dr. Urbino falls from a ladder and dies while trying to catch a parrot. A man who spent his life fighting disease with modern medicine dies at the hands of a disobedient bird. García Márquez lets death arrive in so absurd a way, and it reads like a reminder that modern civilization can build sewers and string telegraph wires but cannot make a human fate obey the arrangements of reason."],
      ["葬礼还没结束，弗洛伦蒂诺又向费尔明娜表白。他等了五十三年，几乎不能再多等一天。可对费尔明娜来说，这是她做寡妇的第一天，算不上旧情复燃的时刻。她愤怒地把他赶走，他却在这场羞辱里重新看见了希望。",
       "Before the funeral is over, Florentino declares his love to Fermina again. He has waited fifty-three years and can hardly wait one day more. To Fermina it is the first day of her widowhood, and no moment of rekindled love. She drives him away in anger, and in that humiliation he sees hope again."],
      ["我觉得弗洛伦蒂诺最让人不安之处，在于他几乎把等待本身当成了权利。五十三年在他心里积成一笔巨大的债，好像费尔明娜终有一天必须偿还。可她从没要求他等，更没答应拿余生去补偿。",
       "What disturbs me most about Florentino is how nearly he treats waiting itself as a right. Fifty-three years pile up in his mind into an enormous debt, as if Fermina must pay it back one day. But she never asked him to wait, and never promised to make up for it with the rest of her life."],
      ["后来，他们还是登上了那条船。那时哥伦比亚已经历十九世纪自由党与保守党反复的内战，以及1899年到1902年的千日战争。战争耗掉国家的财富，也毁了河岸边的村庄和森林。曾经繁盛的马格达莱纳河航运，见证过内陆与加勒比海港口之间的贸易，也见证了木柴燃料的需求、森林砍伐和战乱留下的荒凉。弗洛伦蒂诺年轻时乘船经过的河岸，到晚年已经陌生。",
       "In the end they do board the steamer. By then Colombia has lived through the repeated civil wars between Liberals and Conservatives in the nineteenth century and the Thousand Days’ War of 1899 to 1902. The wars drained the nation’s wealth and ruined villages and forests along the river. The once-busy Magdalena shipping saw trade between the interior and the Caribbean ports, and it also saw the demand for firewood fuel, the felling of forests and the desolation war left behind. The riverbanks Florentino passed by boat in his youth are strange to him now, in old age."],
      ["五十三年的等待没有让世界留在原地。河水照旧流，沿岸的森林却一点点消失。从前要几周才到的消息，现在电报就能送；政权更替，城市开始现代化，连霍乱也从无法解释的灾难，变成医学能认识、能防治的病。只有弗洛伦蒂诺坚持相信，自己年轻时染上的那场爱情从未变过。",
       "Fifty-three years of waiting have not held the world in place. The river runs as before, but the forests along it vanish bit by bit. News that once took weeks to arrive now goes by telegraph, governments change, cities begin to modernize, and even cholera has turned from an inexplicable calamity into a disease medicine can recognize and prevent. Only Florentino insists that the love he caught in his youth has never changed."],
      ["我不愿把这次航行简单读成爱情终于战胜了时间。弗洛伦蒂诺漫长的情史里有自欺、占有，也有浪漫叙事抹不掉的伤害。年少的阿梅丽卡·维库尼亚的悲剧，尤其让他所谓的忠贞永远带着阴影。一个人可以用五十三年证明自己始终爱着某个人，却未必能证明他懂得怎样善待别人。",
       "I am unwilling to read this voyage simply as love finally conquering time. Florentino’s long history of affairs holds self-deception, possessiveness, and harm that no romantic telling can wipe away. The tragedy of the young América Vicuña in particular leaves his so-called fidelity under a shadow for good. A person can spend fifty-three years proving he always loved someone and still not prove he knows how to treat others well."],
      ["费尔明娜最后选择登船，比弗洛伦蒂诺的等待更让我动容。年轻时她在市场里看清这个男人，拒绝了他。五十三年后再面对他，她已经知道爱情拦不住衰老，婚姻保证不了幸福，等待也不会让一个人天然值得被爱。她不再是那个相信情书的少女，却仍愿意在余生不多的时候，试一试没有人能预先担保结果的亲密。到最后，弗洛伦蒂诺仍不知道费尔明娜会爱他多久；而费尔明娜也不必再为任何人的等待，解释自己为什么愿意留下。",
       "Fermina’s choice to board moves me more than Florentino’s waiting does. In youth she saw this man clearly in the market and refused him. Fifty-three years later, facing him again, she already knows that love cannot stop aging, marriage cannot guarantee happiness, and waiting cannot make a person naturally worth loving. She is no longer the girl who believed in love letters, and still she is willing, with little of life left, to try an intimacy whose outcome no one can promise beforehand. To the end Florentino does not know how long Fermina will love him, and Fermina no longer has to explain, for anyone’s waiting, why she is willing to stay."],
      ["船长问他们打算这样航行多久。弗洛伦蒂诺答：“一生一世。”",
       "The captain asks how long they mean to go on sailing like this. Florentino answers: “Forever.”"],
      ["轮船沿河继续走，黄旗在风里飘。岸上的世界已进入新的世纪，蒸汽机、电报和现代医学正改变人们的生活；河上的两个人却借一场虚构的瘟疫，把自己暂时留在历史之外。",
       "The steamer goes on down the river, the yellow flag moving in the wind. On shore the world has entered a new century, and steam engines, telegraphs and modern medicine are changing how people live. On the river, two people use an invented plague to keep themselves, for a while, outside history."]
    ]
  },
  {
    "date": "2021-08-18",
    "title": "The Man Who Returned His Ticket",
    "slug": "the-man-who-returned-his-ticket",
    "category": "Novel",
    "book": {
      "cover": "brothers_karamazov.jpg",
      "title": "The Brothers Karamazov",
      "author": "Fyodor Dostoevsky",
      "language": "English",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · English translation of the Russian original, first published 1880",
        "The three Karamazov brothers and their father, a murder and a trial, with Ivan’s revolt against a world built on children’s suffering."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["他问：假如上帝亲口向伊万解释了一切，伊万还有什么理由拒绝？",
       "He asks: if God explained everything to Ivan in person, what reason would Ivan still have to refuse?"],
      ["我答：他已经看见了解释的全部内容。人类历史走到终点，战争结束，死者复活，所有曾经遭受的苦难都在永恒的和谐中获得意义。那个被猎犬撕碎的孩子也站在那里，不再哭泣，甚至已经原谅了将军。上帝问他：现在，你是否愿意接受这个世界？伊万没有回答，只问那个孩子当年为什么必须死。",
       "I answer: he has already seen the whole of the explanation. Human history has reached its end, war is over, the dead are resurrected, and all the suffering ever endured gains meaning in eternal harmony. The child torn apart by the hounds stands there too, no longer weeping, and has even forgiven the general. God asks him: now, are you willing to accept this world? Ivan does not answer. He only asks why that child had to die back then."],
      ["他问：上帝的回答还不够吗？",
       "He asks: wasn’t God’s answer enough?"],
      ["我答：上帝说，没有那些苦难，人类便无法抵达最终的幸福，每一滴眼泪都已得到补偿，每一种罪恶都在更高的秩序中获得了位置。伊万说：我并不怀疑您的智慧，我甚至相信您说的一切都是真的。但我仍然要把入场券还给您。",
       "I answer: God says that without that suffering humanity could not reach final happiness, that every tear has been compensated and every sin has found its place in a higher order. Ivan says: I do not doubt Your wisdom, and I even believe everything You say is true. But I still must return the ticket to You."],
      ["他问：既然都相信了，为什么还要拒绝？难道他不想看见那个孩子幸福吗？",
       "He asks: if he believes it all, why refuse? Doesn’t he want to see that child happy?"],
      ["我答：上帝也这样问他，伊万说他当然想。但他不明白，孩子的幸福为什么必须先经过那场死亡。孩子可以复活，可以原谅，可以在永恒中欢笑，可是当猎犬扑向他的时候，为什么没有人阻止？这个问题上帝始终没有回答。",
       "I answer: God asks him the same, and Ivan says of course he does. But he cannot understand why the child’s happiness must first pass through that death. The child can rise again, forgive, laugh in eternity, yet when the hounds sprang at him, why did no one stop them? God never answers that. God falls silent."],
      ["他问：站在永恒里看，那不过是一个瞬间。",
       "He asks: seen from eternity, it was only one moment."],
      ["我答：上帝拥有永恒，所以能从结局理解一切。可那个孩子只有八岁。他不知道人类未来的幸福，也不知道自己的眼泪将在何处得到补偿。他只知道自己在奔跑，母亲在呼喊，猎犬已经追上来了。上帝从永恒中看见的是秩序，孩子在那一刻经历的只有恐惧。",
       "I answer: God has eternity, so He can understand everything from the ending. But that child was only eight. He did not know humanity’s future happiness, nor where his tears would be compensated. He knew only that he was running, his mother was calling, and the hounds had caught up. What God sees from eternity is order; what the child went through in that moment was only terror."],
      ["他问：那你要为了一个瞬间，否定整个永恒吗？",
       "He asks: so you would deny the whole of eternity for the sake of one moment?"],
      ["我答：上帝对伊万说的正是这句话。伊万回答，恰恰相反，他只是拒绝让整个永恒来否定那个瞬间。",
       "I answer: God puts exactly that to Ivan. Ivan answers: quite the opposite. He only refuses to let the whole of eternity negate that moment."],
      ["他问：最终的和谐若是成立，岂不是说明一切都有意义？",
       "He asks: if the final harmony holds, doesn’t that show that everything had meaning?"],
      ["我答：和谐若要证明发生过的一切都是必要的，就必须证明那个孩子的死也是必要的。伊万无法接受这样的正义，它先替刽子手找到理由，才能给受害者安慰。上帝可以让母亲原谅将军，让孩子忘记痛苦，甚至让他亲眼看见他们在天堂拥抱。可是上帝不能要求他因此相信，那一天的猎犬本来就应该被放出去。",
       "I answer: if the final harmony must prove that everything that ever happened was necessary, it must prove that the child’s death was necessary too. Ivan cannot accept a justice that first finds reasons for the executioner before it can comfort the victim. God can make the mother forgive the general, make the child forget the pain, even let Ivan see with his own eyes the two embracing in heaven. But God cannot ask him to believe, because of that, that on that day the hounds should have been set loose."],
      ["他问：那他究竟想要什么？",
       "He asks: then what does he want?"],
      ["我答：他想要那个孩子活着。不是复活，不是补偿，不是永恒的幸福，只是在那个下午活着。孩子弄伤了猎犬，被人责骂几句，然后回到母亲身边，第二天醒来，继续过他那微不足道的一生。他可以长大，可以犯错，可以成为一个平庸的人，甚至终其一生都不理解上帝的伟大安排。他不必为了证明这个世界是公正的，先成为一个死去的孩子。",
       "I answer: he wants that child alive. Not resurrected, not compensated, not eternally happy, just alive that afternoon. After hurting the hound, the child is scolded a little and goes back to his mother. The next day he wakes and goes on with his insignificant life. He can grow up, make mistakes, become an ordinary man, even go through his whole life without understanding God’s great plan. He need not first become a dead child in order to prove that this world is just."],
      ["他问：上帝怎么说？",
       "He asks: and what does God say?"],
      ["我答：上帝久久没有说话。最后他问伊万：如果我允许你改变那一天，让那个孩子活下来，却因此使人类失去最终的和谐，你仍然愿意吗？伊万说，我愿意。因为我不明白，为什么人类的幸福必须如此昂贵，又为什么总是由那些没有能力拒绝的人来支付代价。",
       "I answer: God says nothing for a long time. At last He asks Ivan: if I allowed you to change that day and let the child live, but humanity thereby lost its final harmony, would you still be willing? Ivan says: I am. Because I do not understand why human happiness must be so expensive, nor why the price is always paid by those who have no power to refuse."],
      ["他问：然后呢？伊万就这样走了吗？",
       "He asks: and then? Ivan just leaves?"],
      ["我答：他把入场券放在桌上。上帝没有收下，也没有把它推回去。伊万站起身，走到门口时忽然停下来，仿佛还有什么事情没有想明白。他回过头，问了最后一个问题：如果您真的无所不能，为什么不能创造一个不需要那个孩子受苦，也同样值得被爱的世界？",
       "I answer: he puts the ticket on the table. God neither takes it nor pushes it back. Ivan stands to leave, and at the door he suddenly stops, as if there were something he had not yet worked out. He turns back and asks one last question: if You are truly all-powerful, why could You not create a world just as worthy of love that did not need that child to suffer?"],
      ["他问：上帝回答了吗？",
       "He asks: did God answer?"],
      ["我答：这一次，上帝没有回答。伊万也终于没有再等待答案。",
       "I answer: this time, God does not answer. And Ivan, at last, does not wait for an answer."]
    ]
  },
  {
    "date": "2021-09-21",
    "title": "Why Did We Survive, and Not the Neanderthals?",
    "slug": "why-we-survived",
    "category": "History",
    "book": {
      "cover": "sapiens.jpg",
      "title": "Sapiens: A Brief History of Humankind",
      "author": "Yuval Noah Harari",
      "language": "English",
      "country": "Israel",
      "original": "Hebrew",
      "lines": [
        "History · English translation of the Hebrew original, first published 2011",
        "Harari traces how Homo sapiens came to dominate the earth, from the Cognitive Revolution to the present."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1. 假如四万年前的欧洲有一位历史学家，他未必会认为智人是演化的最终胜利者。",
       "1. If there had been a historian in Europe forty thousand years ago, he would not necessarily have thought Homo sapiens the final victor of evolution."],
      ["2. 尼安德特人那时已在欧洲和西亚生活了数十万年。身材粗壮，肌肉发达，骨骼厚实，适应冰期欧洲的严酷气候。他们制造石器，猎杀大型动物，使用火，也照顾受伤的同伴。从非洲向欧亚大陆扩散的智人，不过是后来才到的另一种人类。",
       "2. The Neanderthals had by then lived in Europe and western Asia for hundreds of thousands of years. Stocky, muscular, heavy-boned, they were suited to the harsh climate of Ice Age Europe. They made stone tools, hunted large animals, used fire, and cared for injured companions. The sapiens spreading from Africa into Eurasia were just another kind of human, and a later arrival."],
      ["3. 今天能写下这段历史的，是我们。",
       "3. Today it is we who get to write this history."],
      ["4. 赫拉利《人类简史》里有一个看似简单的问题：为什么存活下来的是智人，而不是尼安德特人？比起书中关于货币、宗教和国家的宏大论述，我更在意它。",
       "4. Harari’s *Sapiens* contains a deceptively simple question: why was it Homo sapiens that survived, and not the Neanderthals? It held my attention more than his grand discussions of money, religion and the state."],
      ["5. 这个问题动摇了一种根深蒂固的想法：能延续下来的物种、文明与制度，必然有某种胜过失败者的优势。尼安德特人的命运说明，强壮未必意味着胜利，胜利也未必能证明全面的优越。",
       "5. The question shakes a deeply rooted assumption: that the species, civilizations and institutions that continue must hold some advantage over the defeated. The Neanderthals’ fate says that strength does not necessarily mean victory, and victory does not necessarily prove all-round superiority."],
      ["6. 远古的世界曾同时住着好几种人类：智人、尼安德特人、直立人，还有亚洲其他地区的古人类。如今只剩智人，于是我们容易以为演化原本就是一条从原始走向先进、最终抵达现代智人的路。",
       "6. The ancient world once held several kinds of human at the same time: sapiens, Neanderthals, Homo erectus, archaic humans in other parts of Asia. Now only sapiens remains, and it is easy to imagine that evolution was always a road from the primitive to the advanced, arriving at last at modern sapiens."],
      ["7. 演化不是一场预先知道终点的比赛。",
       "7. Evolution is not a race whose finish is known in advance."],
      ["8. 尼安德特人不是智人没做完的早期版本。两者有共同的祖先，沿不同的分支发展，并存了相当长的时间。粗壮的身体、较短的四肢，对当时的欧洲环境可能很有适应价值。",
       "8. The Neanderthals were not an unfinished early draft of sapiens. The two share a common ancestor, grew along different branches, and coexisted for a very long time. Stocky bodies and shorter limbs may have been worth a great deal in the Europe of the time."],
      ["9. 考古发现里的他们也远非迟钝野蛮的穴居人：能制造复杂石器，处理动物尸体，用火，有时还照顾长期受伤或患病的成员。一些遗址留下了颜料、装饰物和象征性行为的证据，具体含义仍有争论。",
       "9. Nor do the archaeological finds show dull, savage cave dwellers. They made complex stone tools, processed animal carcasses, used fire, and sometimes cared for members who were long injured or ill. Some sites hold evidence of pigments, ornaments and symbolic behavior, though what these meant is still debated."],
      ["10. 所以智人取代尼安德特人，不能简单读成聪明人战胜了愚笨人。",
       "10. So sapiens replacing the Neanderthals cannot simply be read as clever people defeating stupid ones."],
      ["11. 赫拉利给出一个很有吸引力的解释：智人的决定性优势可能在于更灵活的合作，而不在个体力量。",
       "11. Harari offers an attractive explanation: the decisive advantage of sapiens may have been a more flexible kind of cooperation, and had little to do with individual strength."],
      ["12. 一个尼安德特人或许比一个智人更强壮。可如果智人能用语言传播复杂信息，在更大的群体间交换资源、结成联盟，环境变化时重新组织合作，个体的身体优势便未必决定结果。",
       "12. One Neanderthal may have been stronger than one sapiens. But if sapiens could spread complex information through language, trade resources and form alliances across larger groups, and reorganize their cooperation when the environment changed, then bodily advantage in the individual would not necessarily decide the outcome."],
      ["13. 他把这种能力连到约七万年前开始的认知革命。智人不仅能交流现实中的危险与资源，也能围绕共同的故事建立关系。神话、祖先、群体身份和其他想象出来的秩序，让互不相识的人能够合作。",
       "13. He ties this capacity to the Cognitive Revolution that began some seventy thousand years ago. Sapiens could communicate real dangers and resources, and could also build relationships around shared stories. Myths, ancestors, group identity and other imagined orders let strangers cooperate."],
      ["14. 在我看来，这是《人类简史》最精彩的思想之一。",
       "14. In my view, this is one of the finest ideas in *Sapiens*."],
      ["15. 一头更强壮的动物，未必打得过一群懂得协调的动物。一个个体扛得住严寒、捉得到猎物，不等于他的群体能应对人口下降、资源短缺和环境变化。",
       "15. A stronger animal does not necessarily beat a group of animals that know how to coordinate. An individual who can endure the cold and catch prey does not make his group able to cope with falling numbers, scarce resources and a changing environment."],
      ["16. 但赫拉利的解释在这里需要格外谨慎地看。",
       "16. But Harari’s explanation needs especially careful scrutiny here."],
      ["17. 没有足够证据说尼安德特人缺乏复杂语言，也不能断言他们不会象征性思考。两者的认知差距有多大，考古学与古人类学仍在争论。人口规模、群体间的联系、气候波动、资源竞争，以及双方的杂交，都可能参与了尼安德特人作为独立人群的消失。",
       "17. There is not enough evidence that the Neanderthals lacked complex language, and no one can assert that they could not think symbolically. How large the cognitive gap between the two was remains a live debate in archaeology and paleoanthropology. Population size, ties between groups, climate swings, competition for resources, and interbreeding may all have played a part in the Neanderthals’ disappearance as a distinct people."],
      ["18. 遗传学还改变了“灭绝”一词的含义。",
       "18. Genetics has also changed what the word “extinction” means."],
      ["19. 今天许多非洲以外人群的基因组里，仍保留着大约百分之一至二的尼安德特人遗传成分。两个人群相遇，有竞争与取代，也有交配和后代。",
       "19. The genomes of many non-African populations today still carry about one to two percent Neanderthal ancestry. When the two peoples met there was competition and replacement, and there was also mating, and children."],
      ["20. 尼安德特人作为独立的人类群体消失了，他们的一部分遗传历史却没有就此终结。",
       "20. The Neanderthals vanished as a distinct human group, but a part of their genetic history did not end there."],
      ["21. 这让我怀疑，我们是否太习惯把演化写成胜利者淘汰失败者的历史。他们的部分基因至今还在智人体内，胜利与失败又该怎么划分？",
       "21. I begin to doubt that we should write evolution so readily as winners eliminating losers. Some of their genes are still inside sapiens today, so where would victory and defeat be divided?"],
      ["22. 可以明确地说，智人是今天唯一存续的人属物种。再往前一步，说这是因为智人必然更先进，就从历史事实滑向了目的论。",
       "22. It can be said plainly that sapiens is the only surviving species of the genus Homo. Go one step further and say this is because sapiens was necessarily more advanced, and fact has slid into teleology."],
      ["23. 有一个容易被忽略的逻辑问题：某种优势能解释一次成功，并不意味着所有成功都必须来自这种优势。",
       "23. One logical problem is easy to overlook: an advantage that can explain a success does not mean every success must come from that advantage."],
      ["24. 即使智人确有更广的社会网络，尼安德特人的消失也不见得完全由这一点决定。人口较少、分布分散的群体，可能在连续的环境冲击里逐渐衰退。偶然的迁徙、疾病或资源变化，也会改变不同人群的相对处境。",
       "24. Even if sapiens did have wider social networks, the Neanderthals’ disappearance was not necessarily decided by that alone. A small, scattered group may decline gradually under successive environmental shocks. A chance migration, a disease, a change in resources can also shift the relative position of different peoples."],
      ["25. 从结果反推原因，总比站在历史发生之前预测结果容易得多。",
       "25. Inferring causes from results is always far easier than predicting results before history happens."],
      ["26. 我们知道智人活了下来，便到智人身上去找成功的决定性品质。设想条件稍有不同：尼安德特人延续至今，智人只留下零星化石。后来的研究者是否也会从尼安德特人的身体结构、生态适应和社会组织里，找出他们注定成功的理由？",
       "26. We know that sapiens survived, so we look in sapiens for the decisive qualities of success. Suppose conditions had differed slightly: the Neanderthals continue to this day, and sapiens leaves only scattered fossils. Would later researchers not look in the Neanderthals’ body structure, ecological adaptation and social organization for the reasons they were destined to succeed?"],
      ["27. 我觉得这个假设，比任何关于强者生存的格言都更值得想。",
       "27. I find this hypothesis worth more thought than any maxim about the survival of the strong."],
      ["28. 历史上的幸存者保住了生命，也得到了讲述历史的机会。叙述本身又常常让偶然发生的结果显得合乎逻辑。",
       "28. The survivors of history kept their lives and also won the chance to tell history. And narration itself often makes what happened by chance look logical."],
      ["29. 我对赫拉利既欣赏，又有所保留。他想推翻智人天然优越的观念，说人类统治世界可能靠的是极特殊的集体合作能力，而非全面的生物学优越。可他关于认知革命的宏大解释，又容易让读者相信，智人的胜利终究有一个足够明确、足够漂亮的答案。",
       "29. I admire Harari, with reservations. He tries to overturn the idea that sapiens is naturally superior, saying humans may rule the world through an extremely special capacity for collective cooperation and any all-round biological superiority has little to do with it. Yet his grand account of the Cognitive Revolution easily persuades the reader that sapiens’s victory has, after all, an answer clear and elegant enough."],
      ["30. 尼安德特人最值得记住的地方，我以为在于他们成功地生活了那么久，而不在输给智人。数十万年的生存、迁徙、狩猎、繁衍与适应，不会因为一个物种最终消失便失去意义。",
       "30. What I think worth remembering about the Neanderthals is that they lived successfully for so long, and little in the fact that they lost to sapiens. Hundreds of thousands of years of survival, migration, hunting, reproduction and adaptation do not lose their meaning because a species finally disappears."],
      ["31. 如果只拿“今天是否还在”来衡量演化上的成功，就几乎是在要求过去的一切生命，都必须靠活到我们的时代来证明自己。这是个荒谬的标准。",
       "31. To measure evolutionary success only by “still here today” is almost to demand that every form of past life prove itself by surviving into our time. It is an absurd standard."],
      ["32. 尼安德特人不知道自己会成为后世教科书里被淘汰的人类。他们面对的是真实的冬天、饥饿、猎物和家庭，生活不是为了赢得与智人的竞争。当时的智人也想不到，后代有一天会把整个地球称作人类的世界。",
       "32. The Neanderthals did not know they would become the humans eliminated in later textbooks. What they faced were real winters, hunger, prey and family; they did not live in order to win a contest with sapiens. The sapiens of the time could not have known either that their descendants would one day call the whole earth the human world."],
      ["33. 读完《人类简史》，我记得最牢的是我们如何看待那些没有延续到今天的人类，其次才是智人怎么获胜。",
       "33. After finishing *Sapiens*, what stays with me first is how we regard the humans who did not continue to today, and only second how sapiens won."],
      ["34. 赫拉利让我们看到，个体的强壮不一定转化为群体的优势。我想再推一步：群体的成功，也不必然证明它有某种历史上的正当性或必然性。",
       "34. Harari lets us see that individual strength does not necessarily turn into group advantage. I would push one step further: a group’s success does not necessarily prove it had some historical legitimacy or necessity."],
      ["35. 我们今天能讨论尼安德特人为何消失，并不证明我们比他们优秀。只是四万年后，仍坐在这里提问的是我们。",
       "35. That we can discuss today why the Neanderthals disappeared proves nothing about our being better than they were. It is only that, forty thousand years later, we are the ones still sitting here asking."],
      ["36. 假如历史由尼安德特人书写，他们也许会为智人的消失给出一套同样令人信服的解释。",
       "36. If history had been written by the Neanderthals, they might have offered an equally convincing explanation for the disappearance of sapiens."],
      ["37. 那时被称作演化奇迹的，恐怕就不是我们了。",
       "37. And what would be called the miracle of evolution then would probably not be us."]
    ]
  },
  {
    "date": "2020-04-20",
    "title": "Freedom as Privilege",
    "slug": "freedom-as-privilege",
    "category": "Ethnography",
    "book": {
      "cover": "chungking_mansions.jpg",
      "title": "世界中心的貧民窟：香港重慶大廈 (Ghetto at the Center of the World: Chungking Mansions)",
      "author": "Gordon Mathews",
      "language": "Traditional Chinese",
      "country": "Hong Kong",
      "original": "English",
      "lines": [
        "Ethnography · Traditional Chinese edition, 3rd ed.",
        "An ethnography of Chungking Mansions in Hong Kong and the traders, migrants and asylum seekers who make a living there."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "chungking_mansions_reading.jpg",
      "alt": "The traditional Chinese edition of Chungking Mansions resting on an open illustrated book"
    },
    "prose": [
      ["翻开Gordon Mathews的《重庆大厦》，先看见的是一栋楼。香港的重庆大厦里，来自南亚、非洲等地的小商人、移民和寻求庇护者，守着有限的资本，绕过繁复的法律，靠并不稳固的身份寻一条活路。Mathews把这里的跨境贸易称作“低端全球化”。这里没有跨国企业的扩张，只有普通人在全球经济的缝隙里谋生。",
       "Opening Gordon Mathews’s *Chungking Mansions*, the first thing I see is a building. In Chungking Mansions in Hong Kong, small traders, migrants and asylum seekers from South Asia, Africa and elsewhere hold on to scarce capital, work around a tangle of legal rules, and look for a living on unstable status. Mathews calls the cross-border trade here “low-end globalization.” There is no multinational expansion in it, only ordinary people making a living in the cracks of the global economy."],
      ["我们总爱把自己的自由归功于独立的思想，忘了能自由选择怎样生活，本身就可能是一种特权。我原先也以为，流动就是自由。可对有些人，跨过国界是一种选择，对另一些人，是维持生计的必要条件。一个人能离开故乡，并不说明他同样有留下的自由。",
       "We tend to credit our freedom to independent thinking and forget that being free to choose how to live may itself be a privilege. I too used to think that mobility was freedom. But for some people crossing a border is a choice, and for others it is a condition of getting by. That a person can leave home does not mean he is equally free to stay."],
      ["再来是书里那些游走在法律灰色地带的交易，和身份、经历都难以核实的寻求庇护者。一个人承担不起拒绝的代价，他的选择还有几分自由？我们习惯用诚实、守法和个人责任衡量别人，却忽略了，人们并不总有同样的条件去实践这些原则。",
       "Then there are the deals in the book that run through legal gray areas, and the asylum seekers whose identities and histories are hard to verify. If a person cannot afford the cost of refusing, how free is his choice? We are used to measuring others by honesty, lawfulness and personal responsibility, and we overlook that people do not always have the same conditions in which to practice them."],
      ["理解处境不等于取消责任。贫困不能自动使欺骗正当化，生存的压力也不足以成为伤害他人的理由。但只强调个人责任、无视一个人面对的现实限制，所谓道德判断，可能只是把自己的生活条件当成了普遍标准。",
       "Understanding a situation does not cancel responsibility. Poverty cannot automatically justify deception, and the pressure to survive is not enough reason to harm others. But to stress only personal responsibility and ignore the constraints a person faces is to risk calling our own living conditions a universal standard and passing that off as moral judgment."],
      ["书中的人也并非只是被动地承受命运。他们在制度的限制里找缝隙，在不确定中织起跨国贸易的网络，能动性令人吃惊。越是如此，我越觉得不该把他们面对的困难浪漫化，当成奋斗精神的胜利。",
       "Nor are the people in the book simply passive before fate. They find openings within institutional limits and weave transnational trading networks out of uncertainty; their agency is striking. The more striking it is, the less I think their hardships should be romanticized as a triumph of striving."],
      ["读到这里，我回头看自己对自由的理解。我曾以为，自由就是有自己的价值标准，照自己认可的原则生活，既不顺从社会，也不为反抗而反抗。这个想法漏掉了一个前提：得先有一些现实条件，才担得起不服从的后果。我们称赞那些辞职、远行、追逐理想的人，很少问他们有没有承受失败的底子。我们鼓励人忠于自我，却忽略有些人光是活着，选择的余地就已用尽。我觉得自己比别人独立，也许只是我有更多不必妥协的条件。",
       "Here I turn back to my own idea of freedom. I used to think freedom meant having my own standards and living by principles I endorse, neither obeying society nor defying it for its own sake. That idea leaves out a precondition: one needs certain real conditions before one can bear the consequences of not complying. We applaud people who quit their jobs, travel far and chase their ideals, and seldom ask whether they had the means to bear failure. We encourage people to be true to themselves and overlook that, for some, merely staying alive has used up all room for choice. I felt more independent than others, and that may only mean I had more conditions under which I did not have to compromise."],
      ["自由大概有两面：独立判断如何生活的能力，以及把判断付诸实践的现实可能。缺了前者，人会成为社会期待的附庸；缺了后者，即使知道自己想要什么，也未必选得了。",
       "Freedom probably has two sides: the ability to judge independently how to live, and the real possibility of acting on that judgment. Without the first, a person becomes an appendage of social expectation; without the second, he may know what he wants and still be unable to choose it."],
      ["读完以后，我不再只问一个人为什么没有选另一种生活，也问他是否曾经有过那个选择。自由最深的不平等，在于有些人连选错、承担失败、再重新开始的余地都有。一个自由的社会，不该只赞美勇于选择的人，也该让尽可能多的人拥有选择的可能。",
       "Since finishing, I no longer ask only why a person did not choose another life. I also ask whether that choice was ever open to him. The deepest inequality of freedom is that some people have room even to choose wrongly, bear failure and begin again. A free society should not only praise those who are brave enough to choose; it should give as many people as possible the possibility of choosing."]
    ]
  },
  {
    "date": "2020-05-04",
    "title": "The Ignorance of the Successful",
    "slug": "ignorance-of-the-successful",
    "category": "Economics",
    "book": {
      "cover": "poor_economics.jpg",
      "title": "Poor Economics",
      "author": "Abhijit Banerjee and Esther Duflo",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Economics · PublicAffairs, 2011",
        "Two economists on how the poor actually live and decide, drawn from field experiments around the world."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "poor_economics_reading.jpg",
      "alt": "Poor Economics lying on a wooden table, on top of a Japanese sushi magazine"
    },
    "prose": [
      ["如果一个人的选择由环境塑造，我们说的个人成就，有多少真属于自己？《Poor Economics》研究的是穷人每天怎样做决定。那些看起来不够理性的选择，背后常有信息、资源和风险的限制。",
       "If a person’s choices are shaped by environment, how much of what we call personal achievement is really his own? *Poor Economics* studies how poor people make decisions day by day. Choices that look short of rational often sit behind limits of information, resources and risk."],
      ["贫困不等于缺乏判断力。它意味着，一个人即使判断对了，也未必有条件照着去做。想得再清楚，手里没有资源，没有可靠的消息，也没有退路，那一步还是迈不出去。",
       "Poverty does not mean a lack of judgment. It means that even when someone judges correctly, he may not be in a position to act on it. However clearly he thinks, without resources, reliable information or a way back, he still cannot take the step."],
      ["我们习惯称赞勤奋、自律、远见和理性，把它们当作成功者的个人品质。但这些品质要起作用，得先有东西垫在下面：好的教育，稳定的家庭，足够的资本，靠得住的人脉，甚至失败之后重新开始的机会。有些人的路，很早就有人替他铺好了，走在上面的人多半不记得了。",
       "We praise diligence, self-discipline, foresight and rationality, and count them as the personal qualities of the successful. But these qualities need something under them before they work: a good education, a stable family, enough capital, connections one can rely on, even a chance to start over after failing. For some people, the road was laid early by someone else, and those who walk it mostly do not remember."],
      ["让我不安的是成功者怎样把这些慢慢忘掉。一个人从没为某些资源付过代价，就容易觉得世界本来如此。一个人从没承担过失败的后果，就容易把别人的失败看成能力不足。",
       "What troubles me is how the successful slowly forget all this. A person who never paid for certain resources easily takes them as the way the world is. A person who never bore the consequences of failure easily reads other people’s failure as lack of ability."],
      ["于是幸运成了努力，优势成了才能，成功成了自己高人一等的证据。拥有最多选择的人，往往最相信人人都有同样的选择。",
       "So luck becomes effort, advantage becomes talent, and success becomes proof of one’s own superiority. The people with the most choices are often the readiest to believe everyone has the same ones."],
      ["承认环境的影响，不等于否定个人努力。一个人的勤奋和能力可以是真的，他享有的优势也是真的。要问的是，我们有没有资格把自己的成功经验当成普遍规律。",
       "Admitting the influence of environment does not deny individual effort. A person’s diligence and ability can be real, and so can his advantages. What I ask is whether we are entitled to turn our own experience of success into a universal law."],
      ["特权最隐蔽的样子，是拥有别人没有的资源，却从没发觉它们在那里。把成功全归给自己，就容易把失败全怪到别人头上。个人奋斗的故事因此不只是自我肯定，也可能替社会的不平等作辩护。",
       "Privilege hides best when a person has resources others lack and has never noticed them. Credit all your success to yourself and it is easy to blame others entirely for their failures. The story of individual striving then does more than affirm the self; it can defend social inequality."],
      ["该提防的，是成功者的无知，而不是他们的骄傲。他们可以真诚地相信一切都来自努力，却没想到，能够相信努力必有回报，本身也是一种运气。分清自己创造了什么、继承了什么，就是清醒的开始。",
       "What deserves watching is the ignorance of the successful, more than their pride. They can sincerely believe everything they have comes from effort, without noticing that being able to believe effort will be rewarded is itself a kind of luck. Telling what you created from what you inherited is where clear sight begins."]
    ]
  },
  {
    "date": "2023-12-15",
    "title": "Knowledge and Understanding",
    "slug": "knowledge-and-understanding",
    "category": "Novel",
    "book": {
      "cover": "when_we_cease.jpg",
      "title": "When We Cease to Understand the World",
      "author": "Benjamín Labatut",
      "language": "English",
      "country": "Chile",
      "original": "Spanish",
      "lines": [
        "Novel · Pushkin Press, 2020",
        "A fictionalized account of scientists and mathematicians, from Fritz Haber to Werner Heisenberg, at the edge of what can be understood."
      ]
    },
    "place": "于智利圣地亚哥\nSantiago, Chile",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "when_we_cease_reading.jpg",
      "alt": "When We Cease to Understand the World standing on a wooden table beside a succulent, a cup of coffee, an apple and a baked cheese roll"
    },
    "prose": [
      ["开始读《When We Cease to Understand the World》。头几页就让我放下一个旧想法：知识越多，未知越少，技术越先进，人越接近真理。我一直这样相信。",
       "I start *When We Cease to Understand the World*. The first pages make me put down an old idea: the more knowledge, the less the unknown; the more advanced the technology, the closer people come to the truth. I have always believed that."],
      ["读到量子力学那几章，想法松动了。人类能追溯宇宙的起源，预测很远的未来，用数学公式揭示肉眼看不见的自然规律。量子力学撑起现代科技的许多成就，却一直在挑战我们对现实、因果和确定性的直觉。一个理论可以被精确地使用，描述的世界却不一定能用熟悉的方式去理解。",
       "In the quantum mechanics chapters the idea loosens. Humans can trace the origin of the universe, predict the distant future, and use mathematical formulas to reveal laws of nature the eye cannot see. Quantum mechanics underpins many achievements of modern technology while it keeps challenging our intuitions about reality, causality and certainty. A theory can be applied with precision, and the world it describes still may not be understood in any familiar way."],
      ["在页边写下一句：我们掌握了操纵世界的工具，却未必有与这种力量相称的理解。",
       "I write one line in the margin: we hold the tools to manipulate the world, but not necessarily an understanding that matches that power."],
      ["继续读。让我不安的地方变清楚了。科学里有解释不了的现象，这没什么，麻烦在于理解和能力之间的距离越拉越大。数学已经不只是描述现实的语言，它撑起的技术和制度正在改写现实本身。我们造出越来越复杂的系统，却越来越难预见它们会怎样改变社会，甚至改变我们对“人”的理解。",
       "I keep reading. What unsettles me gets clearer. Science containing phenomena it cannot explain is nothing new; the trouble is the widening distance between understanding and capability. Mathematics is no longer only a language for describing reality, and the technologies and institutions it supports are rewriting reality itself. We build ever more complex systems and find it harder to foresee how they will change society, or even our understanding of what a human being is."],
      ["书里那些不断逼近知识边界的科学家，我读得很慢。他们越深入宇宙的秩序，越可能撞上一种说不出口的虚无。理性曾经给人确定感，到头来也可能逼着人去面对自己认知的限度。",
       "I read slowly through the scientists in the book who keep pressing against the edge of knowledge. The deeper they go into the order of the universe, the likelier they are to meet a void that cannot be spoken. Rationality once gave people certainty, and in the end it may force them to face the limits of their own cognition."],
      ["今天的笔记很短：最深的恐惧，也许不来自未知，而来自这个矛盾。我们明明知道得越来越多，却越来越说不准这些知识会把人带去哪里。",
       "Today’s note is short: the deepest fear may come not from the unknown but from this contradiction. We know more and more, and can say less and less where this knowledge will take us."],
      ["一个人无法想象或面对自己的未来时，焦虑就不再只是怕某个具体的危险，会变成对自身存在的怀疑。整个人类会不会也这样？科学技术走得超过了我们理解和预见后果的能力，我们是不是正在集体失去面对未来的确定感？这一段我还没想完。",
       "When a person cannot imagine or face his own future, anxiety stops being fear of some specific danger and can turn into doubt about his own existence. Might all of humanity be like this? When science and technology outrun our ability to understand and foresee their consequences, are we collectively losing our sense of certainty about the future? I have not finished thinking this through."],
      ["我不觉得这是理性的失败。科学的好处恰恰在于，它不停揭示人类认知的边界，逼我们修正曾经深信不疑的真理。危险的不是承认无知，是把能计算当成能理解，把能创造当成能控制。",
       "I don’t think this is the failure of reason. The strength of science is exactly that it keeps revealing the boundaries of human cognition and forces us to revise truths we once held unquestioningly. The danger is not admitting ignorance. It is mistaking the ability to calculate for the ability to understand, and the ability to create for the ability to control."],
      ["合上书的时候，我觉得知识最终的价值，大概不在让人征服世界，而在让我们更清楚自己和世界是什么关系。我们有了改变一切的力量，却说不准自己想成为什么样的人。需要重新理解的，可能已经是我们自己了。书我还放在桌上，没有收起来。",
       "As I close the book, I feel the final value of knowledge probably lies less in letting people conquer the world than in helping us see more clearly how we stand in relation to it. We have the power to change everything and cannot say what kind of people we want to be. What needs to be understood anew may already be ourselves. The book is still on my desk; I haven’t put it away."]
    ]
  },
  {
    "date": "2021-01-02",
    "title": "The Footnotes That Set Tara Free",
    "slug": "the-footnotes-that-set-tara-free",
    "category": "Memoir",
    "book": {
      "cover": "educated.jpg",
      "title": "Educated",
      "author": "Tara Westover",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Memoir · English original, first published 2018",
        "Tara Westover grows up in a survivalist family in Idaho, never attends school, and finds her way to Cambridge."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "塔拉一再写脚注。",
          "Tara writes footnotes, again and again."
        ],
        [
          "刚讲完一段童年，",
          "She finishes a piece of childhood"
        ],
        [
          "页下就有一行小字：",
          "and at the foot of the page there is a line of small type:"
        ]
      ],
      [
        [
          "哥哥泰勒记得不一样。",
          "her brother Tyler remembers it differently."
        ],
        [
          "母亲对某个细节另有说法。",
          "Her mother tells a detail another way."
        ],
        [
          "某件事发生在什么时候，",
          "When something happened,"
        ],
        [
          "她自己也不确定。",
          "she herself is not sure."
        ]
      ],
      [
        [
          "这些字很容易被略过。",
          "The words are easy to skip."
        ],
        [
          "比不上父亲的愤怒，",
          "They carry less drama than her father’s anger,"
        ],
        [
          "比不上肖恩的暴力，",
          "than Shawn’s violence,"
        ],
        [
          "比不上她最后离开家。",
          "than her leaving the family at last."
        ],
        [
          "它们还会打断阅读，",
          "They interrupt the reading,"
        ],
        [
          "让完整的故事裂开一道缝。",
          "and a crack opens in a story that was whole."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "在父亲的世界里，",
          "In her father’s world"
        ],
        [
          "一件事不能有两种解释。",
          "one thing cannot have two explanations."
        ],
        [
          "政府在谋划阴谋，",
          "The government plots,"
        ],
        [
          "医生会伤害病人，",
          "doctors harm patients,"
        ],
        [
          "上帝会护着这个家。",
          "God watches over this family."
        ]
      ],
      [
        [
          "没有证据，信念也不动摇，",
          "Without evidence the belief does not shake,"
        ],
        [
          "证据从来不是前提。",
          "for evidence was never the premise."
        ],
        [
          "先有答案，",
          "The answer comes first,"
        ],
        [
          "世界再被要求照它的样子。",
          "and then the world is asked to fit."
        ]
      ],
      [
        [
          "小时候的塔拉也住在这份确定里。",
          "As a child Tara lived inside that certainty too."
        ],
        [
          "她不必知道父亲为什么对，",
          "She did not need to know why he was right,"
        ],
        [
          "只需知道他不会错。",
          "only that he could not be wrong."
        ],
        [
          "怀疑他，",
          "To doubt him"
        ],
        [
          "就是怀疑撑着整个家的秩序。",
          "was to doubt the order holding up the house."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "后来她能写自己的故事了。",
          "Later she could write her own story."
        ],
        [
          "她离开了山，进了剑桥，",
          "She left the mountain, entered Cambridge,"
        ],
        [
          "拿到博士学位。",
          "earned the doctorate."
        ],
        [
          "她有父亲看不起的知识，",
          "She had the knowledge her father despised,"
        ],
        [
          "有把家事写成书的权力，",
          "the power to make the family into a book,"
        ],
        [
          "比任何家人都更有机会",
          "more chance than anyone in the family"
        ],
        [
          "让自己的版本成为外面唯一听到的。",
          "to make hers the only version the world hears."
        ]
      ],
      [
        [
          "她却留下了脚注。",
          "She kept the footnotes."
        ],
        [
          "一个博士，完全可以不留。",
          "A doctor of philosophy could so easily have left them out."
        ]
      ],
      [
        [
          "她写下自己记得的，",
          "She writes what she remembers"
        ],
        [
          "也承认别人可能记得不同。",
          "and admits others may remember otherwise."
        ],
        [
          "父亲否认她的经历，",
          "Her father denied her experience,"
        ],
        [
          "她没有因此不信自己。",
          "and she did not stop believing herself."
        ],
        [
          "她终于能反驳他，",
          "Now she can answer him,"
        ],
        [
          "也没有要求所有人毫无保留地信她。",
          "and she does not demand to be believed without reserve."
        ]
      ],
      [
        [
          "父亲容不下不确定，",
          "Her father cannot bear uncertainty,"
        ],
        [
          "承认可能错，",
          "for to admit he might be wrong"
        ],
        [
          "他的权威就没了根。",
          "is to lose the root of his authority."
        ],
        [
          "塔拉能说我可能错，",
          "Tara can say I might be wrong"
        ],
        [
          "而不觉得自己因此站不住。",
          "and not feel she can no longer stand."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "她没有把一切交给怀疑。",
          "She does not hand everything to doubt."
        ],
        [
          "有些伤害确实发生过，",
          "Some harm did happen."
        ],
        [
          "有些暴力，",
          "Some violence"
        ],
        [
          "别人否认了也不会变成虚构。",
          "does not turn to fiction when others deny it."
        ],
        [
          "承认记忆有限，",
          "To admit the limits of memory"
        ],
        [
          "不是放弃对事实的判断。",
          "is not to give up judging the facts."
        ],
        [
          "正因为不必永远正确，",
          "Because she no longer has to be always right,"
        ],
        [
          "她才能认真分开：",
          "she can sort with care:"
        ],
        [
          "哪些是确实知道的，",
          "what she knows,"
        ],
        [
          "哪些只是相信的，",
          "what she only believes,"
        ],
        [
          "哪些还说不定。",
          "what is still unsettled."
        ]
      ],
      [
        [
          "比起剑桥的学位，",
          "More than the Cambridge degree,"
        ],
        [
          "脚注更能说明",
          "the footnotes say"
        ],
        [
          "她受了怎样的教育。",
          "what kind of education she had."
        ],
        [
          "学位证明她掌握了知识，",
          "The degree proves she holds knowledge."
        ],
        [
          "脚注证明她换了",
          "The footnotes prove she has changed"
        ],
        [
          "与知识相处的方式。",
          "the way she lives with it."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "她父亲一辈子想消除世界的不确定，",
          "Her father spent his life trying to remove the world’s uncertainty"
        ],
        [
          "最后只把家变成了",
          "and ended by making his family a place"
        ],
        [
          "不许怀疑的地方。",
          "where doubt was not allowed."
        ],
        [
          "塔拉花了许多年逃出来，",
          "Tara spent years getting out,"
        ],
        [
          "父亲最珍视的那样东西，",
          "and the thing he prized most,"
        ],
        [
          "必须由自己握着最后答案的欲望，",
          "the need to hold the final answer oneself,"
        ],
        [
          "她没有带走。",
          "she did not take with her."
        ]
      ],
      [
        [
          "页下的小字还在那里，",
          "The small type is still at the foot of the page,"
        ],
        [
          "一行一行，",
          "line after line,"
        ],
        [
          "靠着正文。",
          "beside the text."
        ]
      ]
    ]
  },
  {
    "date": "2021-03-17",
    "title": "Love Beyond Reach",
    "slug": "when-love-cannot-reach",
    "category": "Novel",
    "book": {
      "cover": "a_little_life.jpg",
      "title": "A Little Life",
      "author": "Hanya Yanagihara",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · Doubleday, 2015",
        "Four friends in New York over several decades, and at the center of the book, the life of one of them, Jude."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "a_little_life_reading.jpg",
      "alt": "A Little Life standing on a bookshelf among other novels"
    },
    "prose": [
      ["亲爱的Jude：",
       "Dear Jude,"],
      ["读《A Little Life》，Hanya Yanagihara最让我难过的一笔，在于你受过的苦已经过去，危险已经消失，爱终于来到你身边，你却仍然没法相信自己值得被爱。",
       "Reading *A Little Life*, the saddest thing Hanya Yanagihara writes for me is this: your suffering is over, the danger has gone, love has at last come to you, and still you cannot believe you deserve it."],
      ["“我知道你爱我”和“我能感到自己值得被爱”，听起来相近，中间却可能隔着你全部的生命经验。前者是对别人感情的认识，后者关乎你怎样看待自己的价值。你能相信别人是真诚的，仍然不信自己配得上这份真诚。别人越温柔地待你，你越不安，因为这份爱和你长久以来对自己的认识冲突得太厉害。",
       "“I know you love me” and “I can feel that I am worthy of being loved” sound alike, yet they may be separated by your whole life’s experience. The first is knowledge of another person’s feelings; the second concerns how you understand your own worth. You can believe someone is sincere and still not believe you deserve that sincerity. The more gently they treat you, the more uneasy you get, because their love clashes so sharply with what you have long held to be true of yourself."],
      ["你的身体从来不只是装着创伤的容器。它像一段不听意志指挥的记忆：理智早就知道眼前的人不会伤害你，身体还是本能地往后缩。触碰可以是亲密，也能唤起恐惧，温柔有时恰好碰到你最受不了的地方。创伤改变的不只是你记得什么，还有你相信自己应得什么。痛苦成了你理解世界的方式之后，幸福就不只是难以得到，甚至是难以相信的。",
       "Your body has never been only a vessel that carries trauma. It is like a memory that does not obey the will: reason long ago learned that the person in front of you will not hurt you, and the body recoils all the same. Touch can mean intimacy and can summon fear; tenderness sometimes reaches the very place you cannot bear. Trauma changes not only what you remember but also what you believe you deserve. Once pain has become your way of understanding the world, happiness is not just hard to obtain, it is hard to believe in."],
      ["这也是你身上最叫人心碎的矛盾：你并不是没有人爱。Willem、Harold和Andy，各用各的方式关心你，想让你相信不必再一个人扛着一切。可这些爱越真，越显出你心里那段跨不过去的距离。你能知道别人眼里的你是什么样子，却没法借他们的眼睛重新认识自己。他们看见的温柔、聪慧和值得珍惜，在你自己的目光里，始终代替不了过去留下的羞耻和自我否定。",
       "This is also the most heartbreaking contradiction in you: you are not without love. Willem, Harold and Andy each care for you in their own way and try to make you believe you no longer have to carry everything alone. But the more real their love is, the more it shows the distance inside you that you cannot cross. You can know how others see you, yet cannot come to know yourself through their eyes. The tenderness, intelligence and worth they see in you can never, in your own gaze, replace the shame and self-negation the past left behind."],
      ["我们这些旁观的人，常常以为只要给足耐心、陪伴和善意，一个人终究会被治好。这种期待看着温柔，里面藏着一个要求：既然有人这样爱你，你怎么还不快乐？可爱能改变一个人所处的现实，未必能改变他理解自己的方式。痛苦并不总因缺少爱而存在，爱出现了，它也不会自动消失。",
       "We who look on often assume that enough patience, companionship and kindness will heal a person in the end. The expectation looks gentle and hides a demand: since someone loves you this much, why are you still not happy? But love can change the reality a person lives in without necessarily changing how he understands himself. Pain does not always exist for lack of love, and it does not vanish automatically once love arrives."],
      ["这不是说爱没有意义。书里那些细小的照料之所以动人，正因为它们不保证任何结果。陪着你，不一定救得了你；温柔，不一定胜得过记忆；它们依然是真的。爱最难的地方，也许是承认即使付出了全部，我们仍然没法替你感受你自己的价值，也没法替你决定怎样理解自己。我们总盼着爱是痛苦的答案，有时候它只是爱。",
       "None of this means love is meaningless. The small acts of care in the book move me because they promise no outcome. Being beside you may not rescue you, tenderness may not defeat memory, and both are real all the same. The hardest part of love may be to admit that even after giving everything, we still cannot feel your worth on your behalf, or decide for you how to understand yourself. We keep hoping love will be the answer to pain, and sometimes it is only love."],
      ["所以读完你的故事，我想的不只是你为什么接受不了爱，也想我们是否太习惯拿自己的善意，去期待另一个人改变。我想继续爱像你这样的人，而不把他的痊愈当作这份爱的凭证。",
       "So after your story I wonder about more than why you cannot accept love. I wonder whether we are too used to spending our own kindness on the hope that another person will change. I want to go on loving someone like you without treating his recovery as the proof of that love."]
    ]
  },
  {
    "date": "2026-09-24",
    "title": "Luck Is Not Fate",
    "slug": "the-histories",
    "category": "History",
    "book": {
      "cover": "histories.jpg",
      "title": "The Histories",
      "author": "Herodotus",
      "language": "English",
      "country": "Greece",
      "original": "Greek",
      "lines": [
        "History · c. 430 BCE",
        "Herodotus’s inquiry into the Greco-Persian Wars and the peoples around them. In its opening book, the Lydian king Croesus asks the Athenian Solon who is the happiest man in the world."
      ]
    },
    "place": "于加州斯坦福\nStanford, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["希罗多德《历史》中最让我印象深刻的，并不是波澜壮阔的希波战争，而是开篇吕底亚国王克洛伊索斯与雅典人梭伦的一段对话。拥有巨大财富与权力的克洛伊索斯，向梭伦展示自己的富足，期待被称为世上最幸福的人。梭伦却认为，在一个人的生命结束之前，我们无法真正判断他是否幸福。后来克洛伊索斯失去王国，才终于理解这句话的分量。",
       "What stayed with me most in Herodotus’s *Histories* was not the sweeping drama of the Greco-Persian Wars but a conversation near the start, between Croesus, king of Lydia, and the Athenian Solon. Croesus, possessed of vast wealth and power, shows Solon his riches and expects to be called the happiest man in the world. Solon holds instead that until a man’s life has ended, we cannot truly judge whether he was happy. Only after Croesus loses his kingdom does he finally understand the weight of those words."],
      ["初读时，这似乎只是一个关于人生无常的古老寓言。但仔细想来，克洛伊索斯真正的错误，或许并不是高估了自己的财富，而是将幸运误认为命运。幸运是某个时刻恰好降临于我们的有利境遇，而命运则是我们试图赋予整段人生的连续性与必然性。幸运意味着事情原本可能以另一种方式发生；当我们把幸运理解为命运，便是在相信，自己今天所拥有的一切，不仅是过去努力的结果，也是未来理应延续的秩序。",
       "At first it seems like no more than an ancient fable about life’s uncertainty. But on reflection, Croesus’s real mistake may not have been overestimating his wealth but mistaking luck for fate. Luck is a favorable circumstance that happens to arrive at some moment; fate is the continuity and inevitability we try to impose on a whole life. Luck means things could have gone another way. When we take luck for fate, we come to believe that everything we have today is not only the result of past effort but also an order that ought to continue into the future."],
      ["我们当然可以通过努力改变生活，但努力与结果之间，从来不存在完全确定的对应关系。一个人的成功，既可能来自能力与勤奋，也离不开出生的时代、家庭、社会环境，以及无数未曾意识到的偶然。然而，当成功持续得足够久，我们便容易逐渐忘记其中的偶然，把已经发生的事情理解为本来就应该发生的事情。幸运最隐蔽的地方，或许正是它会在时间的积累中，逐渐呈现出命运的模样。",
       "Of course we can change our lives through effort, but there has never been a fully determined link between effort and outcome. A person’s success may come from ability and diligence, but it also depends on the era they were born into, their family, their social environment, and countless accidents they never noticed. Yet when success lasts long enough, we easily forget the accidents in it and come to see what has happened as what was always meant to happen. The most hidden thing about luck, perhaps, is that over time it gradually takes on the look of fate."],
      ["克洛伊索斯拥有财富、军队与王国，因此相信自己已经掌握了幸福。但梭伦的回答提醒他，拥有某种境遇与能够永久保有这种境遇，是两件完全不同的事。财富能够扩大我们应对不确定性的能力，却无法消除不确定性本身。我们可以规划未来，却无法保证未来按照规划发生。命运之所以令人敬畏，恰恰因为它不会因我们曾经的成功而承诺任何事情。",
       "Croesus had wealth, an army and a kingdom, and so believed he had mastered happiness. But Solon’s answer reminds him that having a certain circumstance and being able to keep it forever are two entirely different things. Wealth can widen our capacity to cope with uncertainty, but it cannot remove uncertainty itself. We can plan for the future, but we cannot guarantee that it will follow the plan. Fate is awe-inspiring precisely because it promises us nothing on account of our past success."],
      ["这也让我重新思考财富与自由的关系。我们总以为，只要积累足够多的财富，终有一天便能够不再为生活担忧。但如果我们把安全感建立在财富必须不断增长、已有的一切必须永远保有的期待之上，那么财富越多，害怕失去的东西也可能越多。原本为了获得自由而进行的积累，反而可能让我们越来越难以接受生活中不可控制的部分。",
       "This also made me rethink the relationship between wealth and freedom. We tend to assume that once we have accumulated enough, we will one day be free of worry about our lives. But if we build our sense of security on the expectation that wealth must keep growing and that everything we have must be kept forever, then the more we have, the more we may fear losing. Accumulation that began as a way to gain freedom may make it harder and harder to accept the parts of life we cannot control."],
      ["或许，梭伦真正提醒我们的，并不是幸福只能在死亡之后才能被判断，而是一个人不能因为眼下的幸运，就提前宣告自己已经战胜了命运。我们可以为自己的努力感到骄傲，也可以珍惜已经获得的财富与成就，却不必因此相信，自己比那些遭遇不幸的人更加值得拥有幸福。",
       "Perhaps what Solon really reminds us of is not that happiness can only be judged after death, but that no one should, because of present luck, declare in advance that they have defeated fate. We can be proud of our effort and cherish the wealth and achievements we have gained, without believing that we deserve happiness more than those who met misfortune."],
      ["读到这里，我不禁觉得，成熟或许并不是终于拥有足够的能力掌控人生，而是在拥有越来越多的同时，依然能够承认其中有多少并非理所当然。",
       "Reading this, I cannot help feeling that maturity may not be finally having the power to control one’s life, but being able, even as one has more and more, to admit how much of it was never a given."],
      ["我们花费大半生试图将幸运变成一种可以永久保有的命运，却可能忘记，真正的自由并不是确保自己永远不会失去，而是在知道一切都可能失去之后，仍然能够珍惜此刻的拥有。",
       "We spend most of our lives trying to turn luck into a fate we can keep forever, and may forget that real freedom is not making sure we will never lose, but being able to cherish what we have now, knowing that everything can be lost."],
      ["如果我们今天所拥有的幸福，既来自自己的努力，也来自无数无法复制的偶然，那么我们究竟应该如何在为成功感到自豪的同时，不把自己的幸运误认为理所当然的命运？",
       "If the happiness we have today comes both from our own effort and from countless accidents that cannot be repeated, how should we take pride in our success without mistaking our luck for a fate we are owed?"]
    ]
  },
  {
    "date": "2015-10-06",
    "title": "Who Pays for Prudence?",
    "slug": "the-great-debate",
    "category": "Political thought",
    "book": {
      "cover": "great_debate.jpg",
      "title": "The Great Debate: Edmund Burke, Thomas Paine, and the Birth of Right and Left",
      "author": "Yuval Levin",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Political thought · Basic Books, 2013",
        "Levin retells the 1790s quarrel between Burke and Paine over the French Revolution, and argues that it set the terms of left and right in modern politics."
      ]
    },
    "place": "于华盛顿州雷德蒙德\nRedmond, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["当我们赞美一个社会的稳定时，是否想过，究竟是谁在享受稳定，又是谁在为稳定付出代价？读 Yuval Levin 的《The Great Debate》，最让我感兴趣的，并不是伯克与潘恩如何影响现代左右政治思想的形成，而是他们对政治正当性截然不同的理解：一个社会的制度，究竟应该从历史的延续中获得正当性，还是必须不断接受自由、平等与个人权利的检验？",
       "When we praise a society for its stability, have we asked who actually enjoys that stability, and who pays for it? In reading Yuval Levin’s *The Great Debate*, what interested me most was not how Burke and Paine shaped modern left and right political thought, but how differently they understood political legitimacy: should a society’s institutions draw their legitimacy from the continuity of history, or must they be tested again and again against liberty, equality and individual rights?"],
      ["在伯克看来，社会并不是某一代人凭借理性就能够重新设计的产物，而是无数世代在漫长历史中逐渐形成的复杂秩序。传统、习俗与制度不仅承载着集体经验，也维系着个人之间的责任与信任。政治社会不仅属于活着的人，也连接着过去与未来的世代。因此，改革并非不应该发生，而是必须考虑那些超越个人理解能力的社会关系。潘恩则认为，任何制度都不能仅仅因为存在已久便获得正当性。过去的世代无权永久支配今天的人，每一代人都应当拥有依据自身权利重新决定政治秩序的自由。",
       "For Burke, society is not something one generation can redesign by reason alone, but a complex order formed gradually by countless generations over a long history. Tradition, custom and institutions carry collective experience, and they also sustain the responsibility and trust between individuals. A political society belongs not only to the living but also links the generations of the past and the future. Reform, then, is not something that should never happen; it must take into account social relationships that lie beyond any individual’s understanding. Paine held that no institution earns legitimacy merely by having existed for a long time. Past generations have no right to govern the living forever, and every generation should be free to decide its political order anew according to its own rights."],
      ["我能够理解伯克对人类理性局限的警惕。他所捍卫的并不只是既有权力，更是一种对社会复杂性的谦逊。制度的价值未必能够完全通过抽象原则衡量，而那些看似陈旧的传统，也可能保护着个人免受任意权力的侵害。伯克并非一概反对变革，他对美国殖民地诉求的同情，以及对法国大革命的批评，恰恰体现了他对不同历史处境的判断：改革应当保存社会中值得延续的自由，而不是为了实现理想中的秩序，将已有的一切推倒重来。",
       "I can understand Burke’s wariness about the limits of human reason. What he defended was not only existing power but also a humility before the complexity of society. The value of an institution cannot always be fully measured by abstract principles, and traditions that look outdated may protect individuals from arbitrary power. Burke did not oppose change across the board. His sympathy for the claims of the American colonies and his criticism of the French Revolution show his judgment of different historical situations: reform should preserve the liberties worth continuing, rather than tear down everything that exists in order to realize an ideal order."],
      ["但相比之下，我仍然更认同潘恩对政治正当性的追问：如果一种制度本身就是不公的，那么它究竟需要延续多少年，才能让这种不公被称为传统？伯克提醒我们，理性无法完全理解历史；潘恩则提醒我们，历史也无法自动证明自身的正当性。前者担心改革者低估改变的风险，后者担心人们高估现存秩序的合理性。",
       "Even so, I am still more persuaded by Paine’s question about political legitimacy: if an institution is unjust in itself, how many years must it last before that injustice can be called tradition? Burke reminds us that reason cannot fully understand history; Paine reminds us that history cannot automatically prove its own legitimacy. The former worries that reformers underestimate the risks of change, the latter that people overestimate the soundness of the existing order."],
      ["美国女性选举权运动便让我想到这一矛盾。一个以自由与人民主权为建国理想的国家，却长期将女性排除在充分的政治参与之外。直到1920年，第十九修正案才在宪法层面禁止以性别为由剥夺选举权，而许多女性，尤其是非裔女性，仍须继续面对其他制度性障碍。回望这段历史，我们很容易将女性获得选举权理解为理所当然的进步，但当时关于家庭、社会秩序与政治参与的传统观念，同样曾被用来反对改革。不过，这并不能简单证明伯克式的渐进主义必然维护不公，因为选举权的扩展本身也可以通过既有宪政制度实现。它真正提出的问题是：当一种制度需要改变时，我们如何既不忽视改革的风险，也不让对风险的担忧成为无限期推迟正义的理由？",
       "The American women’s suffrage movement brings this tension to mind. A country founded on liberty and popular sovereignty long excluded women from full political participation. Only in 1920 did the Nineteenth Amendment write into the Constitution a ban on denying the vote on grounds of sex, and many women, Black women especially, still faced other institutional barriers. Looking back, it is easy to treat women’s suffrage as progress that was bound to come, but traditional ideas about family, social order and political participation were used at the time to oppose reform too. This does not simply prove that Burkean gradualism necessarily protects injustice, since the expansion of the vote could itself be achieved through existing constitutional institutions. The question it really raises is this: when an institution needs to change, how do we avoid both ignoring the risks of reform and letting worry about those risks become a reason to postpone justice indefinitely?"],
      ["更令我在意的是，传统从来不是由所有人平等创造和继承的。那些有能力将自身利益写入法律、习俗与社会规范的人，往往也更有机会将这些利益解释为值得尊重的历史经验。但反过来说，传统也并非只属于既得利益者。长期形成的法律保障、地方自治与社会组织，同样可能成为弱势群体抵抗权力的资源。历史既可能保存压迫，也可能保存自由；因此，问题并不在于传统是否值得尊重，而在于我们如何辨别其中哪些经验值得继承，哪些不公必须改变。",
       "What concerns me more is that tradition has never been created and inherited equally by everyone. Those able to write their own interests into law, custom and social norms are often also better placed to present those interests as historical experience worthy of respect. Yet tradition does not belong only to the beneficiaries. Long-established legal protections, local self-government and social organizations can also become resources with which the weak resist power. History can preserve oppression, and it can preserve freedom. So the question is not whether tradition deserves respect, but how we tell which of its experiences are worth inheriting and which injustices must be changed."],
      ["这也让我重新理解伯克与潘恩之间真正难以调和的分歧。伯克认为，政治首先需要对既有社会承担责任，不能轻易牺牲现实中的制度与关系去追求抽象的完美；潘恩则坚持，政治制度必须能够向每一个受其约束的人证明自身的正当性，不能让历史成为限制当代人自由的最终理由。两人所警惕的危险都是真实的：没有历史意识的改革可能摧毁自由，而没有权利原则约束的传统也可能延续不公。",
       "This also changed how I understand the divide between Burke and Paine that is truly hard to reconcile. Burke held that politics must first take responsibility for the society that exists, and must not lightly sacrifice real institutions and relationships in pursuit of abstract perfection. Paine insisted that political institutions must be able to justify themselves to every person they bind, and that history cannot be the final reason for limiting the freedom of people today. The dangers each of them feared are real: reform without a sense of history can destroy freedom, and tradition unconstrained by principles of rights can perpetuate injustice."],
      ["或许我更倾向于潘恩，并不是因为我相信人类理性能够设计出完美的社会，而是因为我认为，任何制度都不应该仅凭自身的延续获得道德上的优先权。但伯克也让我意识到，认识到改变的必要，并不意味着我们已经知道如何改变。改革者有责任解释新制度如何运作，维护现状的人也有责任说明既有制度为何值得保留。两者都不应免于质疑。",
       "Perhaps I lean toward Paine not because I believe human reason can design a perfect society, but because I think no institution should gain moral priority merely by continuing to exist. But Burke also made me see that recognizing the need for change does not mean we already know how to change. Reformers have a duty to explain how the new institution would work, and defenders of the status quo have a duty to explain why the existing one deserves to be kept. Neither should be exempt from questioning."],
      ["《The Great Debate》最终让我重新思考开篇那个关于稳定的问题。稳定当然值得珍惜，但它并不是一种不需要付出代价的状态。改变可能破坏已有的自由，不改变也可能让另一些人始终无法获得自由。真正的政治智慧，或许不在于永远选择改革或保守，而在于不让任何一方的代价因为另一方的安全而变得不可见。",
       "In the end, *The Great Debate* made me think again about the opening question of stability. Stability is certainly worth cherishing, but it is not a condition that costs nothing. Change may destroy the freedom we already have, and no change may leave others forever without it. Real political wisdom may lie not in always choosing reform or always choosing conservatism, but in not letting the cost borne by one side become invisible because of the safety of the other."],
      ["我仍然相信历史值得尊重，但尊重历史不应意味着服从历史。伯克教会我们怀疑自己改变世界的能力，潘恩则提醒我们怀疑现存世界的正当性。两种怀疑都不可或缺，但当我们以审慎之名要求一些人继续等待时，至少应该诚实地承认：我们所保护的稳定，未必是所有人共同享有的稳定。",
       "I still believe history deserves respect, but respecting history should not mean obeying it. Burke teaches us to doubt our ability to change the world; Paine reminds us to doubt the legitimacy of the world as it is. Both doubts are indispensable, but when we ask some people to keep waiting in the name of prudence, we should at least honestly admit that the stability we are protecting is not necessarily a stability everyone shares."],
      ["如果一种秩序的延续，必须以另一些人持续承受不公为代价，那么我们究竟是在审慎地保护社会，还是在让那些已经拥有自由的人，决定尚未拥有自由的人还需要等待多久？",
       "If an order can continue only at the price of others continuing to bear injustice, are we prudently protecting society, or letting those who already have freedom decide how much longer those who do not yet have it must wait?"]
    ]
  },
  {
    "date": "2022-12-20",
    "title": "An Era’s Progress, and a Lifetime",
    "slug": "social-classes-in-china",
    "category": "Social analysis",
    "book": {
      "cover": "social_classes.jpg",
      "title": "中国社会各阶层分析 (An Analysis of the Social Strata in China)",
      "author": "梁晓声 Liang Xiaosheng",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Social analysis · Shenzhen Publishing House",
        "Liang Xiaosheng’s analysis of how China’s social classes fared through reform and opening up, and who gained and who lost."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["郑娟一个人带着年迈的母亲和年幼的孩子。周秉昆明知这段关系会给家里添压力，还是一步步担起照顾她们的责任。后来周家出了变故，周母失去自理能力，又是郑娟长年守在床边。这些事没带来什么社会地位，也很难用收入或职业成就去量，一个家却靠它们撑着。读梁晓声的《人世间》，我最先想起的是这些。",
       "Zheng Juan is alone with her aged mother and a small child. Zhou Bingkun knows the match will bring pressure at home, and still takes up the care of them, bit by bit. Later trouble comes to the Zhou family, Mother Zhou can no longer look after herself, and it is Zheng Juan again who stays by the bed year after year. None of this brings social standing, and it is hard to measure in income or career, yet a household stands on it. Reading Liang Xiaosheng’s *Ordinary World*, these are the things I recall first."],
      ["同一个工人家庭里长大的三个孩子，走到了不同的地方。周秉义做了干部，参与城市的治理。周蓉凭着知识，有了更宽的选择。周秉昆留在普通劳动者的生活里。起点相同，命运没有相同。个人努力之外，教育的机会、社会资源、历史的际遇，一直在改变他们能够去的地方。",
       "The three children grew up in one worker’s family and ended up in different places. Zhou Bingyi became an official and took part in running the city. Zhou Rong, through learning, had a wider range of choices. Zhou Bingkun stayed in the life of an ordinary laborer. They began from the same point and their fates were not the same. Beyond personal effort, educational chances, social resources and the luck of history kept shifting where each of them could get to."],
      ["梁晓声在1990年代写过《中国社会各阶层分析》，看的是改革开放中各个阶层利益怎样分化、命运怎样变迁。《人世间》把那些抽象的社会关系写进了周家几代人的日子里。前一本解释社会如何塑造人，后一本让人看到，被塑造的人怎样过完自己的一生。",
       "In the 1990s Liang Xiaosheng wrote *An Analysis of the Social Strata in China*, which looks at how the interests of each class split apart and how their fortunes changed through reform and opening up. *Ordinary World* writes those abstract social relations into the days of several generations of the Zhou family. The first book explains how society shapes people. The second shows how a shaped person lives out a lifetime."],
      ["光字片是另一幅画面。周秉昆和国庆、赶超这些朋友，曾经过着相似的工人生活。市场化改革往深处走，原来的工作和生活保障慢慢变了，失业和谋生的压力改变了他们每个人。对一些人，改革是新的机会。对另一些人，是熟悉的生活秩序再也靠不住。《中国社会各阶层分析》谈城市平民的处境，到了小说里，所谓社会结构调整，就是一个家失去收入，一个人失去工作，原本稳定的身份一下子变得脆弱。",
       "Guangzi Block is another picture. Zhou Bingkun and friends such as Guoqing and Ganchao once lived much the same worker’s life. As market reform went deeper, the old jobs and the guarantees that came with them slowly changed, and unemployment and the pressure to make a living changed each of them. For some, reform was a new opportunity. For others, the familiar order of life could no longer be trusted. *An Analysis of the Social Strata* discusses the condition of ordinary city people, and in the novel the so-called restructuring of society comes down to a household losing its income, a person losing his job, and a once-steady identity suddenly turning fragile."],
      ["我不愿把这些普通人的艰辛写得太浪漫。周秉昆的善良，郑娟的坚韧，朋友之间的互相扶持，都令人动容，可它们并没有让贫困与不平等变得合理。赞美他们在困境里保持尊严，不该成为社会不必改善他们处境的理由。一个人能忍受多少苦，和他本来该不该受这些苦，是两回事。文学让人看见苦难中的人性，社会分析则说明，有些苦难并非命中注定，可以通过制度和资源的分配去改变。",
       "I do not want to romanticize the hardship of these ordinary people. Zhou Bingkun’s kindness, Zheng Juan’s toughness and the way friends hold each other up are moving, but they do not make poverty and inequality reasonable. Praising people for keeping their dignity in hardship should not become a reason for society to leave their situation alone. How much suffering a person can bear and whether he ought to bear it in the first place are two separate matters. Literature lets us see the humanity inside suffering. Social analysis says that some suffering is not fate and can be changed through institutions and the distribution of resources."],
      ["两本书互相补着。《中国社会各阶层分析》把人放进社会结构，指出个人选择背后的不平等。《人世间》再让人从阶层的标签里走出来，有统计概括不了的情感、责任和尊严。周秉义不只是干部，周蓉不只是知识分子，周秉昆也不只是普通劳动者。结构能解释他们有过怎样的机会，却解释不全他们怎样对待身边的人。人不是完全自由地创造自己的命运，也不是只能被动接受时代的安排。",
       "The two books fill in for each other. *An Analysis of the Social Strata* sets people inside a social structure and points to the inequality behind individual choices. *Ordinary World* then lets people step out of their class labels and have feelings, duties and a dignity that statistics cannot sum up. Zhou Bingyi is more than an official, Zhou Rong more than an intellectual, Zhou Bingkun more than an ordinary laborer. Structure can explain what chances they had, but it cannot fully explain how they treated those around them. People do not freely make their own fate, and they do not simply receive what the age arranges for them."],
      ["周秉义推动光字片改造，可见公共治理有可能改善普通人的居住条件。但街区终于翻新了，旧日生活里失去的亲人、错过的机会、没法挽回的遗憾，也不会回来。历史可以在下一代实现更充分的繁荣，补偿不了每个人已经过掉的岁月。大处的成功，抵不掉小处的遗憾。我越来越觉得，衡量一个社会的进步，不能只看多少人实现了阶层的跃升，也要看没有跃升的人，生活是否好了一些，像周秉昆那样留在普通生活里的人，用不着靠不断向上爬来证明自己的价值。",
       "Zhou Bingyi pushes through the rebuilding of Guangzi Block, which shows that public governance can improve the housing of ordinary people. But when the district is finally renewed, the relatives lost in the old life, the chances missed and the regrets that cannot be undone do not come back. History can bring fuller prosperity to the next generation, and it cannot repay each person the years already spent. Success on the large scale does not cancel regret on the small. More and more I think a society’s progress cannot be measured only by how many people leapt up a class. It also depends on whether those who did not leap are living somewhat better, and whether people like Zhou Bingkun, who stay in ordinary life, can do without climbing ever higher to prove their worth."],
      ["我们习惯从历史的终点回望一个时代，拿经济增长、社会流动和生活水平的提高，证明它的进步。可身在其中的人，走的不是一条已知终点的路。一个国家用几十年完成转型，对普通人来说，那几十年就是无法重新度过的一生。说一个时代变得更好的时候，是谁的生活变好了，这个问题我一直放不下。机会增加了，也不等于每个人都能重新选一次自己的人生。",
       "We are used to looking back at an era from its end point, citing economic growth, social mobility and rising living standards as proof of progress. The people inside it walk a road whose end they do not know. A country can finish its transformation in a few decades, and for an ordinary person those decades are the one life that cannot be lived again. When we say an era got better, whose life got better is a question I cannot put down. More opportunity does not mean everyone gets to choose their life a second time."],
      ["新盖的楼房立在原来的位置上。周秉昆还在那里过着他的日子。",
       "The new buildings stand where the old lanes were. Zhou Bingkun is still there, living his days."]
    ]
  },
  {
    "date": "2022-11-10",
    "slug": "ren-shi-jian",
    "sameAs": "social-classes-in-china",
    "category": "Novel",
    "book": {
      "cover": "renshijian.jpg",
      "title": "人世间 (Ren Shi Jian)",
      "author": "梁晓声 Liang Xiaosheng",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Novel · China Youth Press edition",
        "Liang Xiaosheng’s Mao Dun Prize-winning novel, following the three children of a working-class family in northeast China through decades of change."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA"
  },
  {
    "date": "2023-06-13",
    "title": "A Lifetime of Making Peace With the Past",
    "slug": "pinball-1973",
    "category": "Novel",
    "book": {
      "cover": "pinball.jpg",
      "title": "1973年的彈珠玩具 (Pinball, 1973)",
      "author": "村上春樹 Haruki Murakami",
      "language": "Traditional Chinese",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "Novel · Kodansha, 1980 · Traditional Chinese edition",
        "A man searches for a pinball machine he once loved, while his friend the Rat tries to leave the town and the life he cannot settle into."
      ]
    },
    "place": "於日本金澤\nKanazawa, Japan",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      ["堆滿廢棄機器的倉庫裡，「我」終於和那台彈珠遊戲機重逢。那不過是一件普通的舊物，沒有特別的價值，也改變不了他現在的生活，可這場尋找到了這一刻，似乎有了超出物品本身的意義。我想，他要找回的是曾經站在機器前面的自己，和那個還沒經歷後來種種失去的年代。那一刻，倉庫裡很靜。",
       "In a warehouse piled with discarded machines, the narrator finally meets the pinball machine again. It is an ordinary old object, of no special value, and it cannot change his present life, yet by this moment the search seems to carry a meaning beyond the thing itself. I think what he wanted back was the self who once stood in front of the machine, and the years before the later losses. For that moment the warehouse is quiet."],
      ["有人說，童年的陰影要用一生來治癒。我漸漸覺得，難以擺脫的，是那些早年的經歷在我們沒察覺時怎樣塑造了後來的人生。我們以為早已告別過去，卻可能仍按它留下的情感習慣生活。",
       "People say the shadow of childhood takes a lifetime to heal. I have come to think that what is hard to shake is how those early experiences shaped later life without our noticing. We think we have long said goodbye to the past and may still be living by the emotional habits it left."],
      ["同一時間，「鼠」往相反的方向走。他想離開熟悉的城市、酒吧和人際關係，擺脫一種始終融不進去的生活。他的物質條件相對優裕，內心卻得不到安定。「我」覺得過去藏著值得找回的東西，「鼠」卻把過去當成必須離開的束縛。一個靠近，一個拉開距離，但兩人都答不出自己究竟在找什麼。",
       "At the same time the Rat is going the other way. He wants to leave the familiar town, the bar and his web of acquaintances, to shake off a life he never fit into. He is comfortable materially and still cannot settle inside. The narrator feels the past holds something worth finding, while the Rat treats it as a bond he must leave behind. One moves toward it and the other away, and neither can say what he is looking for."],
      ["「我」至少能把失落放在一台具體的機器上，他的懷念有了方向，也有可以抵達的終點。「鼠」的不安沒有這樣清楚的對象。他和周圍世界的疏離，找回一件東西解決不了，連自己想離開的究竟是什麼，也未必說得清。有些人比較幸運，能給自己的失落取一個名字，另一些人只感到生活裡一直缺著什麼，卻不知道它從哪裡來。",
       "The narrator can at least rest his loss on a particular machine, so his longing has a direction and an end he can reach. The Rat’s unease has no such clear object. Finding something back would not settle his estrangement from the world around him, and he may not even be able to say what he wants to leave. Some people are luckier and can give their loss a name. Others only feel that something has always been missing from life, without knowing where it came from."],
      ["這讓我想起，我們懷念過去，常常是因為那時的自己還不知道將會失去什麼，和過去是否真的比現在好關係不大。年輕時的某些關係、期待和安全感，在當時平凡得不值得記住，等它們消失了，才發現那些小小的瞬間原來是自己的一部分。我們懷念的也許是那個仍能毫無保留相信一些事情的自己。",
       "It reminds me that when we miss the past it is often because the self back then did not yet know what would be lost, and whether the past was really better matters less. Certain relationships, hopes and securities of youth were too ordinary to remember at the time, and only after they were gone did those small moments turn out to be part of us. What we miss may be the self who could still believe in things without holding back."],
      ["我偶爾會想像，重新走進童年熟悉的街道，看到那些每天經過的建築，會是什麼感覺。街道多半還在，房屋也沒太大變化，我卻已經不能像當年那樣看它們。小時候覺得很長的路，現在幾分鐘就走完了。曾經以為永遠不會變的生活，早已消失在記憶裡。最讓我感傷的，是即使那些地方完全沒變，我也拿不回當時看世界的目光。時間帶走了擁有過的東西，也帶走了感受世界的方式。",
       "Now and then I imagine walking back into the streets I knew as a child and seeing the buildings I passed every day. The street is probably still there and the houses little changed, but I can no longer look at them as I did then. A road that felt long now takes a few minutes. A life I thought would never change has long since vanished into memory. What saddens me most is that even if the places had not changed at all, I could not get back the eyes I saw the world with. Time takes away what we had, and the way we felt the world with it."],
      ["「鼠」卻提醒我，不是每個人都想回到過去。有時我們想逃的，正是那個曾經的自己，以及過去給我們的身份和期待。一個人已經擁有旁人眼中值得羨慕的生活，仍然不快樂，他甚至很難為這份不快樂找到正當的理由。於是離開成了唯一能想像的改變，儘管他不知道離開之後會到哪裡。",
       "The Rat, though, reminds me that not everyone wants to go back. Sometimes what we want to flee is that earlier self, and the identity and expectations the past handed us. When a person has a life others envy and is still unhappy, he can hardly find a justified reason for the unhappiness. Leaving becomes the only change he can imagine, though he does not know where it will take him."],
      ["這樣看，「我」和「鼠」是兩種面對自我認同的方式。「我」靠記憶確認自己曾經是誰，「鼠」靠離開擺脫別人認為他應該成為的樣子。前者怕和過去斷了聯繫，後者怕永遠掙不脫過去的限制。兩個人共同面對的問題是，如果始終要透過過去來理解自己，我們還有多少自由，去成為不同的人。",
       "Seen this way, the narrator and the Rat are two ways of facing one’s identity. The narrator uses memory to confirm who he once was, and the Rat uses leaving to shed the person others think he should be. The first fears losing his tie to the past, the second fears never breaking free of its limits. The question they share is how much freedom we have to become someone different if we must always understand ourselves through the past."],
      ["那台終於找到的彈珠遊戲機，在我看來更像一場遲來的告別。機器還在，當時的時間卻回不來。「我」能再見到它，卻不能再成為當年站在它面前的人。「鼠」就算離開了熟悉的地方，也未必能把不安留在身後。一個人的尋找有了結果，另一個人的離開才剛開始，時間留下的問題兩人都沒有解決。找回與離開，有時只是人們改變自己與過去關係的兩種辦法。",
       "The pinball machine at last found seems to me more a belated farewell. The machine is still there and the time it belonged to cannot return. The narrator can see it again but cannot become the person who stood before it. The Rat, even after leaving the familiar place, may not leave his unease behind. One man’s search has ended and the other’s departure has only begun, and neither has settled what time left behind. Finding back and leaving behind are sometimes just two ways of changing one’s relation to the past."],
      ["最打動我的，是小說沒有給這兩種人生一個明確的答案。村上春樹沒說懷念比逃離更值得肯定，也沒讓人物因為一次重逢或一次離開，就忽然得到完整的自我。他們只是繼續生活，帶著那些說不清的缺失，慢慢走向不知道的明天。過去可以解釋我們為什麼成了今天的樣子，卻不必決定我們以後只能成為怎樣的人。",
       "What moved me most is that the novel gives neither life a clear answer. Murakami does not say longing is worth more than flight, and he does not let his characters gain a whole self from one reunion or one departure. They go on living with the lack they cannot explain, walking slowly toward a tomorrow they cannot see. The past can explain why we became who we are today, but it need not decide what we can become afterward."],
      ["找回來的東西，不能讓時間倒流。拋在身後的東西，也不會因此消失。我們既不能真的回到過去，也不能徹底逃離它。大概成長最難的地方，是不必再靠找回什麼、離開什麼，才允許自己繼續生活。",
       "What is found again cannot turn time back, and what is left behind does not vanish for being left. We can neither truly go back to the past nor escape it entirely. Perhaps the hardest part of growing up is no longer needing to find something or leave something before allowing ourselves to go on living."]
    ]
  },
  {
    "date": "2016-10-10",
    "title": "That Night, He Did Not Go Upstairs",
    "slug": "that-night-he-did-not-go-upstairs",
    "category": "Novel",
    "book": {
      "cover": "remains_of_the_day.jpg",
      "title": "The Remains of the Day",
      "author": "Kazuo Ishiguro",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1989",
        "Stevens, the butler of Darlington Hall, takes a motoring trip across England in 1956 and looks back on a life of service."
      ]
    },
    "place": "于华盛顿州柯克兰\nKirkland, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["史蒂文斯的父亲快死了。肯顿小姐已经把消息告诉他。楼上是一间卧室，楼下是一场宴会，中间隔着一段楼梯。\n他没有上去。",
       "Stevens’s father is dying. Miss Kenton has already told him. Upstairs is a bedroom and downstairs is a dinner party, with one flight of stairs between them.\nHe did not go up."],
      ["他当然有自己的解释。那天达林顿府在开一场重要的国际会议，欧洲的政治人物聚在这里，讨论战后的秩序。他是总管家，得保证一切顺利。这些解释听起来都合理。石黑一雄最擅长的，就是让一种荒谬的生活，在当事人的叙述里显得无可指摘。",
       "He has his explanations, of course. That day Darlington Hall was hosting an important international conference, with European politicians gathered to discuss the postwar order. As head butler he had to see that everything went smoothly. All of it sounds reasonable. Ishiguro’s great skill is to make an absurd way of living look blameless in the telling of the man who lived it."],
      ["我甚至觉得，要是有人当面问史蒂文斯后不后悔，他会先纠正对方对当晚工作安排的误会，再耐心说明那场会议的分量，最后才承认，父亲去世确实令人遗憾。他不撒谎。他只是永远知道从哪里开始讲，才能绕开真正的问题。",
       "I suspect that if someone asked Stevens to his face whether he regretted it, he would first correct the questioner’s idea of that night’s arrangements, then explain patiently how much the conference mattered, and only last admit that his father’s death was indeed regrettable. He does not lie. He simply always knows where to begin the story so as to steer around the real question."],
      ["多年以后，他竟把那个夜晚看成自己职业生涯的高峰。这就不只是一个人为工作牺牲家庭了。错过父亲临终，事后痛苦，不难理解。但他得把这件事解释成值得骄傲的成就，是因为承认那晚做错了，就得重新审视此前几十年相信的一切。",
       "Years later he even counts that night as the high point of his career. This is no longer just a man who gave up his family for his work. To miss a father’s last hour and suffer for it afterward is easy to understand. But he must explain it as something to be proud of, because admitting he was wrong that night would mean re-examining everything he had believed for decades."],
      ["他毕生追求的是所谓“尊严”。他相信伟大的管家不让私人情感干扰举止，相信个人的价值来自对一位伟大绅士的忠诚。可有个问题被他小心绕开了：达林顿勋爵凭什么值得他奉献一生？",
       "What he spent his life pursuing was what he called “dignity.” He believed a great butler lets no private feeling disturb his conduct, and that a man’s worth comes from loyalty to a great gentleman. But there is a question he carefully avoids. What made Lord Darlington worth a whole life?"],
      ["小说慢慢显出，达林顿勋爵的政治判断远不如史蒂文斯想的高明。他的好意、阶级教养和政治上的天真缠在一起，最后把他卷进对纳粹德国的绥靖。史蒂文斯可以说，政治不是管家的专业，他只管让宴会顺利，不管桌上的人在商议什么。石黑在这里写出的，是一种特别危险的无辜。",
       "The novel gradually shows that Lord Darlington’s political judgment was far poorer than Stevens imagined. His good intentions, his class upbringing and his political naivety were tangled together, and in the end they drew him into appeasing Nazi Germany. Stevens can say that politics is not a butler’s profession, that his task was to make the dinner go well and not to judge what the men at the table were deciding. What Ishiguro writes here is an especially dangerous kind of innocence."],
      ["再说那段楼梯。它算不上多难的道德抉择。没人要史蒂文斯在父亲和整个欧洲的命运之间选一个。楼下的会议也不会因为他离开一会儿就垮掉。拦住他的，是他早就把某种职业理想吸进了身体里，到了无法违背的地步。他不是被锁在楼下的。他已经不需要锁了。",
       "Back to the stairs. They are not much of a moral dilemma. Nobody asked Stevens to choose between his father and the fate of Europe. The conference downstairs would not have collapsed because he stepped away for a while. What held him was a professional ideal he had taken into himself so completely that he could not go against it. He was not locked below. He no longer needed a lock."],
      ["石黑没有替他安排一场迟来的忏悔，这一点我很欣赏。史蒂文斯讲往事时，总在解释、补充、修正。有时他快接近某种痛苦的认识了，又退回熟悉的礼貌和措辞里。读者比叙述者更早明白他的悲剧，却没法替他承认。他和肯顿小姐那段没有结果的感情，也不是毁在什么戏剧性的事件上。他们有过许多可以靠近的时刻，一次次让它们消失在客套、误解和沉默里。",
       "I admire that Ishiguro arranges no belated confession for him. When Stevens tells the past he is forever explaining, adding, correcting. Sometimes he comes close to a painful recognition and then retreats into the familiar politeness and phrasing. The reader understands his tragedy before the narrator does and cannot admit it for him. His unrealized feeling with Miss Kenton was not ruined by any dramatic event either. They had many moments in which they might have drawn close, and let them go one by one in civility, misunderstanding and silence."],
      ["小说最后，史蒂文斯坐在韦茅斯的海边，白天在过去，码头的灯就要亮了。他刚听肯顿小姐说，她对婚姻有过遗憾，却仍然选了自己已经建立的生活。他明白有一种可能永远结束了。可即便在这里，他还想着怎样练习和人开玩笑，好适应新雇主。",
       "At the end of the novel Stevens sits by the sea at Weymouth. The day is going and the lights on the pier are about to come on. He has just heard that Miss Kenton, though she has regrets about her marriage, still chooses the life she has built. He understands that one possibility has ended for good. Even here, he is thinking about how to practice joking with people, so as to suit his new employer."],
      ["我读到这里，没觉得可笑。几十年建起来的生活方式，怎么会因为一次旅行、一次谈话就变了？石黑不肯给史蒂文斯这种廉价的解脱，也没让他得到可以重新开始的人生。",
       "I did not find it funny when I read it. How could a way of life built over decades change because of one trip, one conversation? Ishiguro will not give Stevens that cheap release, and he does not give him a life he can begin again."],
      ["楼上是一个快要死去的父亲，楼下是一个自以为正在参与历史的儿子。史蒂文斯留了下来，他服务的那段历史，后来并没有给他期待的荣誉。几十年过去，他依然能准确回忆宴会的安排，却再也没有机会回到父亲的床边。",
       "Upstairs was a father who was dying, and downstairs a son who thought he was taking part in history. Stevens stayed, and the history he served did not later give him the honor he expected. Decades on, he can still recall the arrangements for that dinner exactly, and he has never had the chance to go back to his father’s bedside."]
    ]
  },
  {
    "date": "2016-12-31",
    "title": "Before Love Became Memory",
    "slug": "before-love-became-memory",
    "category": "Novel",
    "book": {
      "cover": "sea_wall.jpg",
      "title": "抵挡太平洋的堤坝 (The Sea Wall)",
      "author": "玛格丽特·杜拉斯 Marguerite Duras",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of Un barrage contre le Pacifique, 1950",
        "A widowed mother in French Indochina pours her savings into a plot of land the Pacific floods every year, while her daughter Suzanne is drawn toward a wealthy suitor."
      ]
    },
    "place": "于法国巴黎\nParis, France",
    "languages": ["Chinese", "English"],
    "prose": [
      ["刚翻开。读完《情人》再回到这本书，有点奇怪：那个戴男式毡帽、站在湄公河渡船上的少女，被放回了她活着的世界。这个世界没有多年后回忆里那么朦胧，也不好看。",
       "Just opened it. Coming back to *Un barrage contre le Pacifique* after *L’Amant* feels odd. The girl in the man’s felt hat on the Mekong ferry has been set down in the world she actually lived in, and that world is less hazy than the one remembered years later, and not as pretty."],
      ["先查了年份。《情人》写于1984年，这本出版于1950年。两本都取材于杜拉斯在法属印度支那的童年和青春，读起来却是两种东西：一本是衰老的女人回头看少女时代，一本更接近现实主义小说，写殖民地的贫困、家庭的绝望和青春的欲望。",
       "I check the dates first. *L’Amant* was written in 1984, this one published in 1950. Both draw on Duras’s childhood and youth in French Indochina, yet they read like two different things. One is an old woman looking back at her girlhood. The other is closer to a realist novel about colonial poverty, family despair and youthful desire."],
      ["母亲用多年积蓄买下一块殖民地土地，发现根本种不了东西。她修堤坝想挡住海水，修了又垮，到头来白费力气。读到这里想起古希腊悲剧：一个人去对抗远远超过自己力量的秩序，越是坚持，越被这份反抗吞掉。",
       "The mother spends her savings of many years on a piece of colonial land and finds nothing will grow on it. She builds a dike to hold back the sea, and it comes to nothing. This reads almost like Greek tragedy: a person pushes against an order far beyond her strength, and the harder she holds on, the more the pushing consumes her."],
      ["苏珊在这里还不是值得回忆的少女。她穷，母亲一年比一年老，愤怒，绝望，土地年年被太平洋淹没。我写《情人》书评时，最在意的是那张从未拍下的照片，杜拉斯多年后一次次回到渡船上，好像那一刻早就预示了后来的一生。而在这本书里，没有人在回头看。",
       "Here Suzanne is not yet a girl worth remembering. She is poor, her mother grows older, angrier and more desperate each year, and the land is swallowed by the Pacific every year. In my review of *L’Amant* what mattered most to me was the photograph that was never taken. Years later Duras keeps returning to the ferry, as if that moment had already foretold her life. In this book nobody is looking back."],
      ["母亲的贫困是真的，愤怒也有道理，可她把自己的绝望转给了儿女。杜拉斯没有让她成为可以无条件同情的悲剧英雄。苏珊慢慢变成这个家里最后一件能拿去交换的东西。",
       "The mother’s poverty is real and her anger is justified, but she passes her despair on to her children. Duras does not make her a tragic heroine to be pitied without condition. Suzanne slowly becomes the last thing the family has left to trade."],
      ["富有的约先生出现了，还有钻石、汽车，和一桩婚姻的可能。这让我重新看《情人》里少女和中国富商的关系。那里，男人的钱和少女的穷，被年老叙述者的记忆赋予了暧昧而复杂的意义，金钱和欲望缠在一起，总有一种说不清的感情罩在上面。这里却直接多了：钻石、汽车、婚姻，全都摆进了家庭的经济困境里。两本书的男人不能画等号，位置却彼此呼应。一个年轻女人的身体，在贫困家庭的期待中，怎样成了通往另一种生活的可能？",
       "Monsieur Jo appears, with his diamond, his car, and the possibility of a marriage. This makes me look again at the girl and the rich Chinese man in *L’Amant*. There, his wealth and her poverty take on an ambiguous, complicated meaning through the old narrator’s memory. Money and desire are tangled together under a feeling that is never fully explained. Here it is plainer: the diamond, the car and the marriage are set squarely inside the family’s money trouble. The men in the two books are not the same, but they stand in echoing places. How does a young woman’s body, under the expectations of a poor family, become a way into another life?"],
      ["苏珊并非完全被动。她想离开，想要爱情，想要某种自己还没弄懂的自由。可是每个选择都要先过钱这一关，那我们还能在多大程度上把她的决定叫作自由？",
       "Suzanne is not simply passive. She wants to leave, she wants love, she wants some freedom she does not yet understand. But every choice has to be weighed in money first, and how far can we call her decision free?"],
      ["这个疑问也回头落在《情人》上，我开始怀疑那个少女与年龄不相称的镇定。多年后的叙述者可以把自己的主动解释成欲望的觉醒，这本书却在提醒：早熟也可能只是穷逼着她，早早学会了大人世界的规则。",
       "The doubt carries back to *L’Amant*, to the girl’s composure that does not fit her age. The narrator, years on, can explain her initiative as desire waking up. This book reminds me that being precocious may only mean poverty forced her to learn the rules of the adult world early."],
      ["还有殖民地。母亲是法国人，却被殖民行政体系骗了；她在经济上受剥削，又仍然拥有殖民社会给欧洲人的身份优势。书里的当地人承受的是更根本的贫困与不平等。杜拉斯没有把殖民主义写成富有的白人压迫贫穷的亚洲人，她写出一种更复杂的权力结构：一个人可以同时是制度的受害者，又是制度特权的受益者。",
       "Then there is the colony. The mother is French, yet cheated by the colonial administration. She is exploited economically and still holds the status Europeans are given in colonial society. The local people in the book bear a deeper poverty and inequality. Duras does not reduce colonialism to rich whites oppressing poor Asians. She shows a more tangled structure of power, in which one person can be a victim of the system and a beneficiary of its privileges at once."],
      ["喜欢她这一点。她不让贫困自动换来道德上的干净，也不让爱情变成超出历史的避难所。人物都活在具体的物质条件里，而那些条件往往比他们自己的意愿更有力。",
       "I like this about her. She will not let poverty hand out moral purity automatically, and she will not let love become a refuge outside history. Her people live inside concrete material conditions, and those conditions are often stronger than what they want."],
      ["但最让我难过的，是这本书处理时间的方式。《情人》的时间可以反复回去：衰老的女人一遍遍写少女的面容、衣着和姿态，几十年后重新解释一次相遇，甚至把当年没弄懂的悲伤叫作爱情。这本书的时间几乎只有一个方向。母亲越来越老，堤坝一次次被毁，家里的希望一点点耗尽。人物没有足够的距离去理解自己的生活，只能继续过。",
       "What makes me saddest, though, is how this book handles time. In *L’Amant* time can be returned to again and again. An old woman can keep describing the girl’s face, clothes and bearing, reinterpret an encounter decades later, even name the sorrow she did not understand then as love. Here time runs almost one way. The mother grows older, the dike is destroyed again and again, the family’s hope is used up bit by bit. The characters have no distance from which to understand their lives. They can only go on living them."],
      ["写到这里先记一个想法：《情人》有回忆给的自由，这本书留着现实尚未结束时的重量。《情人》里，少女离开印度支那的船上响起音乐，她忽然哭了，多年后叙述者可以一次次回到那一刻，琢磨那场眼泪是什么意思。我在这本书里想到的却是母亲，站在被海水毁掉的堤坝前。她没有后来者的从容，也不知道自己的一生会被女儿写成文学。她只能站在那里，看着自己相信过的一切慢慢消失。",
       "A thought to set down here: *L’Amant* has the freedom memory gives, and this book keeps the weight of a reality that is not yet over. In *L’Amant*, music plays on the ship leaving Indochina and the girl suddenly weeps, and years later the narrator can go back to that moment again and again to work out what the tears meant. What I think of in this book is the mother standing before the dike the sea has wrecked. She has none of a later person’s calm, and she cannot know her life will be written into literature by her daughter. She can only stand there and watch everything she believed in slowly go."],
      ["一张照片想留住时间，一道堤坝想挡住时间。两样都输了。杜拉斯在这两次失败之间做了一件奇妙的事：年轻时，她写一个家庭怎样被现实毁掉；年老时，她又从那些破碎的现实里，重新认出一个少女的爱情。",
       "A photograph tries to keep time, a dike tries to hold time back. Both lose. Between the two failures Duras does something strange. When young she writes how a family is destroyed by reality. When old she picks out, from the same broken reality, a girl’s love."],
      ["越来越怀疑，我们能不能把《情人》当作对青春的最终解释。也许那不是杜拉斯终于发现了过去的真相，而是几十年之后，她终于有了用另一种方式讲述过去的自由。",
       "I doubt more and more that *L’Amant* can be taken as the final explanation of her youth. Maybe it is not that Duras finally found the truth of the past. Maybe decades later she simply got the freedom to tell it another way."],
      ["那个后来被反复回忆的少女，原来活在一个根本没空回忆的世界里。也许《情人》最动人的地方就在这里：生活不再要求她抵挡什么，她才有可能回过头去，重新想象那些当年只能忍受的岁月。这一点我还没想完。书合上了，眼前还是那道堤坝。",
       "The girl who would be remembered over and over lived in a world with no time for remembering. Maybe that is what moves me most in *L’Amant*: only once life stopped asking her to hold anything back could she turn around and imagine the years she once could only endure. I have not finished thinking about this. The book is closed, and what I still see is the dike."]
    ]
  },
  {
    "date": "2019-05-20",
    "title": "The Freedom to Leave, the Price of Staying",
    "slug": "because-i-hate-korea",
    "category": "Novel",
    "book": {
      "cover": "hate_korea.jpg",
      "title": "한국이 싫어서 (Because I Hate Korea)",
      "author": "장강명 Jang Gang-myeong",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Minumsa, 2015 · Original Korean edition",
        "A young woman leaves a stable job at a Korean financial company for a new life in Australia, and tries to explain why."
      ]
    },
    "place": "于马萨诸塞州剑桥\nCambridge, MA",
    "languages": ["Chinese", "English"],
    "blocks": [
      ["p", "我们常常赞美那些勇敢离开故乡、重新开始生活的人，仿佛只要有足够的勇气，每个人都能选择自己想要的人生。但读张康明的《한국이 싫어서》，我渐渐意识到，离开从来不只是勇气的问题。当一个人必须离开自己的国家，才能过上自己想要的生活，这究竟是个人自由的体现，还是一个社会无法容纳不同生活方式的结果？而那些没有能力离开的人，又是否拥有同样的选择权利？", "We often praise those who bravely leave their homeland and start life anew, as if anyone with enough courage could choose the life they want. But reading Jang Gang-myeong’s *한국이 싫어서*, I gradually realized that leaving has never been only a matter of courage. When a person has to leave their country in order to live the life they want, is that an expression of individual freedom, or the result of a society that cannot accommodate different ways of living? And do those who have no means to leave have the same right to choose?"],
      ["p", "小说中的桂娜并不是传统意义上的失败者。她受过教育，在韩国的金融公司拥有一份相对稳定的工作，也有可以预见的人生道路。然而，她依然决定辞职，前往澳大利亚。我觉得，理解桂娜的关键，并不在于她有多么讨厌韩国，而在于她最初甚至很难向别人解释，为什么一种看似正常的生活会让自己如此疲惫。", "Gyena, the novel’s protagonist, is not a failure in the conventional sense. She is educated, holds a fairly stable job at a financial company in Korea, and has a foreseeable path ahead of her. Yet she still decides to quit and go to Australia. I think the key to understanding Gyena is not how much she hates Korea, but that at first she can hardly explain to others why a seemingly normal life leaves her so exhausted."],
      ["p", "在韩国，桂娜的困境并不是缺少一条可以继续走下去的道路，而是那条道路似乎早已替她决定了终点。每天拥挤的通勤、重复的办公室工作、对收入与未来的焦虑，让她逐渐意识到，自己或许能够成为一个符合社会期待的人，却未必能够接受这种生活。她并不是没有能力参与竞争，而是开始怀疑，为什么人生必须以竞争的结果来衡量。", "In Korea, Gyena’s predicament is not that she lacks a road to keep walking, but that the road seems to have decided her destination in advance. The crowded daily commute, the repetitive office work and the anxiety about income and the future make her gradually realize that she may be able to become a person who meets society’s expectations, yet cannot accept that kind of life. It is not that she is unable to compete; she begins to wonder why life has to be measured by the results of competition."],
      ["p", "我觉得这正是小说最细腻的地方。一个人最深刻的困境，有时不是不知道自己应该做什么，而是明明知道社会希望自己做什么，却无法相信那就是自己应该过的一生。桂娜的痛苦不仅来自生活本身，也来自她无法让别人相信，这种痛苦是正当的。", "I think this is the most delicate part of the novel. A person’s deepest predicament is sometimes not that they do not know what they should do, but that they know perfectly well what society wants of them and cannot believe it is the life they ought to live. Gyena’s pain comes not only from her life itself but also from being unable to make others believe that her pain is legitimate."],
      ["p", "桂娜最终辞职，决定前往澳大利亚。她在仁川机场与男友智明告别，也意味着她必须放弃一部分原本熟悉的生活。智明并不是一个简单的反面人物，他所代表的稳定关系与未来生活，确实具有吸引力。因此，桂娜的离开并不是在毫无牵挂的情况下作出的轻松决定。她需要承认，自己可能失去一些真正珍贵的东西，却仍然无法因此说服自己留下。", "Gyena finally quits and decides to go to Australia. Saying goodbye to her boyfriend Jimyeong at Incheon Airport also means giving up part of the life she knows. Jimyeong is not a simple villain; the stable relationship and future life he represents are genuinely attractive. So Gyena’s departure is not an easy decision made without any attachments. She has to admit that she may lose something truly precious, and still cannot persuade herself to stay."],
      ["p", "不过，我不认为此时的桂娜已经完全理解了自己想要的人生。第一次离开韩国时，她更多是在否定一种无法忍受的生活，而不是已经找到另一种明确的方向。她知道自己不想继续，却未必知道重新开始意味着什么。她的勇气之中，仍然包含着迷茫。", "Still, I do not think Gyena fully understands the life she wants at this point. When she leaves Korea the first time, she is more rejecting a life she cannot bear than having found another clear direction. She knows she does not want to go on, but not necessarily what starting over means. Her courage still contains confusion."],
      ["p", "到了澳大利亚，这种迷茫并没有立即消失。她一边学习语言，一边在餐馆洗碗，从韩国金融公司的办公室进入一个更加陌生、经济上也更加不稳定的环境。如果按照传统的职业标准衡量，她似乎经历了一次向下流动。但我觉得，正是这种反差，让桂娜第一次有机会重新审视自己曾经相信的成功标准。", "In Australia the confusion does not vanish at once. She studies the language while washing dishes in a restaurant, moving from the office of a Korean financial company into a more unfamiliar and financially less stable environment. By conventional career standards, she seems to have moved downward. But I think it is precisely this contrast that gives Gyena, for the first time, a chance to re-examine the standard of success she once believed in."],
      ["p", "在韩国，她拥有一份体面的工作，却感到生活正在失去方向；在澳大利亚，她从事辛苦的兼职，却开始为自己选择的未来付出努力。两种生活都不轻松，但辛苦的意义已经发生变化。过去，她的努力主要是为了维持一种被社会认可的生活；现在，她必须亲自承担选择的后果，也因此逐渐获得了对生活的掌控感。", "In Korea she had a respectable job but felt her life losing direction; in Australia she does hard part-time work but begins to put effort into a future she chose herself. Neither life is easy, but the meaning of the hardship has changed. Before, her effort mainly went into maintaining a life that society approved of; now she has to bear the consequences of her choices herself, and in doing so gradually gains a sense of control over her life."],
      ["p", "然而，这种对照还有另一层值得注意的意义。桂娜在韩国拥有的学历、工作经验与社会关系，到了澳大利亚并不能自动转化为同等的职业地位。她必须从语言学习和基础劳动重新开始。这说明社会地位并不完全取决于一个人的能力，也取决于这些能力在特定社会中能否获得承认。所谓成功，从来不只是个人努力的结果，还与一个人所处的制度和环境密切相关。", "Yet this contrast has another meaning worth noting. The education, work experience and social connections Gyena had in Korea do not automatically turn into equal professional standing in Australia. She has to start over with language study and basic labor. This shows that social position does not depend wholly on a person’s abilities, but also on whether those abilities are recognized in a particular society. What we call success has never been only the result of individual effort; it is closely tied to the system and environment a person is in."],
      ["p", "这种变化并不意味着桂娜突然变得乐观或坚强，而是她开始理解，自由与不确定性往往同时出现。离开韩国并没有让她摆脱经济压力，也没有让她免于面对孤独、语言障碍和身份问题。她必须接受，自己选择的生活未必更加舒适，甚至可能比过去更加艰难。但与此前不同的是，她不再仅仅因为生活艰难，就认为自己一定走错了道路。", "This change does not mean Gyena suddenly becomes optimistic or strong; it means she begins to understand that freedom and uncertainty often arrive together. Leaving Korea does not free her from financial pressure, nor from loneliness, language barriers and questions of identity. She must accept that the life she chose may not be more comfortable, and may even be harder than before. But unlike before, she no longer assumes she must have taken the wrong road merely because life is hard."],
      ["p", "我想，这是一种更深刻的成长：一个人开始有能力区分，哪些痛苦来自被迫接受的生活，哪些痛苦则是自己愿意为某种可能性承担的代价。", "I think this is a deeper kind of growth: a person becomes able to tell which pain comes from a life they were forced to accept, and which pain is a price they are willing to pay for a possibility."],
      ["p", "桂娜后来继续学习，进入会计研究生项目，逐渐为自己建立新的生活基础。这里最重要的，并不是她终于重新走上了一条能够获得社会认可的职业道路，而是她与这条道路的关系已经不同。工作与学历逐渐成为实现生活目标的工具，而不再是决定自身价值的唯一标准。", "Gyena goes on to study, entering a graduate accounting program and gradually building a new foundation for her life. What matters most here is not that she has finally returned to a career path society recognizes, but that her relationship to that path is now different. Work and degrees gradually become tools for reaching her life goals, no longer the only standard that determines her worth."],
      ["p", "然而，我认为桂娜真正重要的变化，发生在她短暂返回韩国之后。", "Yet I think the truly important change in Gyena comes after her brief return to Korea."],
      ["p", "她重新与智明相处，看见他已经拥有相对稳定而优渥的生活，也再次面对两人共同生活的可能。如果她最初只是因为工作不顺利、收入不足或对未来缺乏安全感而离开，那么智明所能提供的稳定生活，似乎已经足以成为留下的理由。", "She spends time with Jimyeong again, sees that he now has a relatively stable and comfortable life, and faces once more the possibility of a life together. If she had originally left only because work was going badly, income was insufficient or she felt insecure about the future, the stable life Jimyeong can offer would seem reason enough to stay."],
      ["p", "但桂娜最终还是选择返回澳大利亚。", "But Gyena finally chooses to go back to Australia."],
      ["p", "我觉得，这个决定比她第一次离开韩国更加重要。第一次离开时，她需要通过距离来摆脱自己不喜欢的生活；第二次离开时，她已经能够在重新面对那种生活之后，确认它依然不是自己想要的。前者更接近对现实的不满，后者则是一种逐渐清晰的自我认识。", "I think this decision matters more than her first leaving of Korea. The first time, she needed distance to get away from a life she disliked; the second time, having faced that life again, she can confirm that it is still not what she wants. The former is closer to dissatisfaction with reality, the latter to a self-knowledge that is gradually becoming clear."],
      ["p", "她不再需要证明韩国有多么糟糕，才能为自己的离开寻找理由。她也不必否认智明的感情、稳定工作的价值，或者故乡值得留恋的部分。她只是终于明白，一种生活可以很好，却不一定适合自己；一个人可以真诚地爱着另一个人，却仍然不愿意接受对方所期待的未来。", "She no longer needs to prove how bad Korea is in order to justify leaving. Nor does she have to deny Jimyeong’s love, the value of a stable job, or the parts of home worth missing. She simply comes to understand at last that a life can be good without being right for her, and that one can love another person sincerely and still be unwilling to accept the future that person expects."],
      ["p", "这种变化让我尤其感动。年轻时，我们常常需要通过否定某些东西，才能确信自己的选择是正确的。我们会努力证明离开的地方不值得留恋，放弃的机会并没有那么好，失去的关系本来就不适合自己。仿佛只有这样，才能减轻选择所带来的不安。但桂娜的第二次离开，让我看到另一种可能：我们可以承认没有选择的那条道路同样具有价值，却依然不后悔自己的决定。", "This change moves me especially. When we are young, we often need to negate something in order to be sure our choice was right. We work to prove that the place we left was not worth missing, that the opportunity we gave up was not so good, that the relationship we lost was not right for us anyway, as if only that could ease the unease that choosing brings. But Gyena’s second leaving shows me another possibility: we can admit that the road not taken is just as valuable and still not regret our decision."],
      ["p", "不过，当我试着从桂娜的个人成长重新回望她最初的处境时，也开始意识到小说中存在着一种更深的矛盾。桂娜之所以能够逐渐摆脱韩国社会对成功的定义，并不只是因为她改变了自己的想法，还因为她真的能够离开那个环境。如果她始终留在原来的金融公司，每天乘坐同样拥挤的地铁，面对同样的工作压力，那么仅仅改变对幸福的理解，是否就足以改变她的生活？", "Yet when I try to look back at her original situation from the vantage of her personal growth, I begin to notice a deeper contradiction in the novel. Gyena is able to gradually shake off Korean society’s definition of success not only because she changed her mind, but because she was actually able to leave that environment. If she had stayed at the same financial company, riding the same crowded subway every day under the same work pressure, would merely changing her understanding of happiness have been enough to change her life?"],
      ["p", "这让我想到，个人的自由并不完全存在于内心。我们当然可以拒绝以收入和职位衡量自己的价值，但房租不会因此降低，工作时间不会因此缩短，家庭责任也不会因为我们不再认同某种社会标准而自动消失。一个人可以在思想上拒绝竞争，却未必能够在现实中承担退出竞争的后果。", "This makes me think that personal freedom does not exist wholly within the mind. We can of course refuse to measure our worth by income and position, but the rent will not drop because of it, working hours will not shorten, and family responsibilities will not disappear just because we no longer accept a social standard. A person can reject competition in thought without being able to bear the consequences of withdrawing from it in reality."],
      ["p", "桂娜的选择之所以能够实现，除了她自己的勇气与努力，也因为她拥有一定的教育背景、语言学习能力，以及承担重新开始风险的可能。即使这些条件远不足以保证移民成功，也已经意味着她拥有某些人难以取得的选择空间。对于那些必须照顾家人、缺乏积蓄，或者根本无法跨越国境的人而言，离开或许从来不是一个真正存在的选项。", "Gyena’s choice could be realized not only because of her own courage and effort but also because she has some educational background, the ability to learn a language, and the capacity to bear the risk of starting over. Even if these conditions fall far short of guaranteeing a successful emigration, they already mean she has room to choose that some people cannot obtain. For those who must care for family, lack savings, or cannot cross a border at all, leaving may never have been a real option."],
      ["p", "于是，小说最初那个关于个人幸福的问题，逐渐变成了一个关于社会结构的问题。如果一个人必须通过离开，才能摆脱某种令自己疲惫的生活，那么问题就不只是他有没有勇气作出选择，还包括为什么原有的社会无法为他提供其他可能。桂娜通过移民改变了自己与社会规则的关系，但那些仍然生活在原有规则之中的人，并不会因为她的离开而获得同样的自由。", "So the novel’s opening question about personal happiness gradually becomes a question about social structure. If a person must leave in order to escape a life that exhausts them, the issue is not only whether they have the courage to choose, but also why the society they came from could not offer them other possibilities. Through emigration Gyena changes her relationship to society’s rules, but those who still live within the old rules do not gain the same freedom because she left."],
      ["p", "当然，我并不认为桂娜有义务留下来改变韩国。个人没有责任为了社会进步而牺牲自己的一生。离开不必然是逃避，留下也不必然是勇敢。尤其当一个人已经清楚意识到原有的生活无法继续时，要求她为了家庭、故乡或集体期待而留下，或许只是另一种对个人自由的限制。", "Of course, I do not think Gyena has any duty to stay and change Korea. No individual is obliged to sacrifice their whole life for social progress. Leaving is not necessarily escape, and staying is not necessarily brave. Especially when someone has clearly realized that her old life cannot continue, demanding that she stay for family, homeland or collective expectation may be just another restriction on personal freedom."],
      ["p", "但同样重要的是，我们不能因为有人成功离开，就将留下者的困境归结为缺乏勇气或能力。当改变生活的建议总是换工作、换城市，甚至换国家时，原本属于社会结构的问题，便被悄悄转化成了个人选择的问题。仿佛只要足够努力，每个人都能够逃离；而那些没有离开的人，就应该为自己的处境负责。", "But it matters just as much that we not attribute the plight of those who stay to a lack of courage or ability merely because some have left successfully. When the advice for changing one’s life is always to change jobs, change cities, even change countries, problems that belong to the social structure are quietly turned into problems of personal choice. As if anyone could escape with enough effort, and those who did not leave should be held responsible for their own situation."],
      ["p", "因此，我认为《한국이 싫어서》最值得思考的，并不是韩国与澳大利亚哪一个国家更好，而是桂娜的经历同时揭示了个人选择的力量与局限。她从韩国金融公司的办公室走向澳大利亚的餐馆，从对原有生活的厌倦走向对自身选择的承担，最终能够在重新面对故乡时，确认自己愿意过怎样的人生。但她的成长并不能消除一个事实：并不是所有人都拥有重新选择生活环境的条件。", "So I think what is most worth pondering in *한국이 싫어서* is not which is better, Korea or Australia, but that Gyena’s experience reveals both the power and the limits of personal choice. She moves from the office of a Korean financial company to a restaurant in Australia, from weariness with her old life to bearing responsibility for her own choices, and is finally able, on facing her homeland again, to confirm what kind of life she wants to live. But her growth cannot erase a fact: not everyone has the means to choose their living environment anew."],
      ["p", "小说结束之后，我仍然会想到桂娜曾经挤过的地铁，以及那间她最终离开的金融公司。第二天清晨，地铁依然会挤满赶着上班的人，办公室里的工作也不会因为她的离开而停止。或许其中有人和她一样，早已厌倦了这样的生活，却因为房贷、父母、孩子，或仅仅因为没有足够的积蓄，而无法买下一张前往澳大利亚的机票。", "After the novel ends, I still think of the subway Gyena used to ride, and of the financial company she finally left. The next morning the subway will still be packed with people hurrying to work, and the work in the office will not stop because she is gone. Perhaps some among them are as weary of this life as she was, yet cannot buy a plane ticket to Australia because of a mortgage, parents, children, or simply too little savings."],
      ["p", "我当然为桂娜终于能够选择自己的人生感到欣慰。但我不愿意把她的离开当作所有人的答案。她可以辞职、出国、重新学习，最终决定自己愿意在哪里生活；而那些留下来的人，或许连失去一份工作的风险都承担不起。我们赞美前者的勇气，却不能因此把后者的困境解释为缺乏勇气。", "I am of course glad that Gyena can finally choose her own life. But I do not want to treat her leaving as the answer for everyone. She can quit, go abroad, study again, and in the end decide where she wants to live; those who stay may not even be able to afford the risk of losing a job. We praise the courage of the former, but cannot therefore explain the latter’s plight as a lack of courage."],
      ["p", "如果一个人必须离开自己的国家，才能摆脱一种令他窒息的生活，那么值得追问的，不只是他为什么选择离开，还有为什么原来的社会无法让他留下。", "If a person must leave their country in order to escape a life that suffocates them, what deserves asking is not only why they chose to leave, but also why the society they came from could not let them stay."],
      ["p", "桂娜最终离开了韩国，但那趟拥挤的早班地铁依然在那里。", "Gyena finally left Korea, but that crowded morning subway is still there."],
      ["p", "我想，一个社会真正值得骄傲的，不是它培养出了多少有能力走向世界的人，而是那些没有离开的人，是否也能在每天清晨走进地铁时，相信自己正在奔赴的，不只是一份不得不维持的生计，还有一个值得期待的人生。", "I think what a society can truly be proud of is not how many people it has raised who are able to go out into the world, but whether those who did not leave can also, stepping into the subway each morning, believe that what they are hurrying toward is not only a livelihood they have no choice but to keep, but also a life worth looking forward to."]
    ]
  },
  {
    "date": "2015-05-12",
    "title": "Why Do We Crave Being Moved?",
    "slug": "why-we-crave-being-moved",
    "category": "Novel",
    "book": {
      "cover": "insoutenable_legerete.jpg",
      "title": "L’Insoutenable Légèreté de l’être",
      "author": "Milan Kundera",
      "language": "French",
      "country": "France",
      "original": "Czech",
      "lines": [
        "Novel · Gallimard, 1984 · French edition of a Czech original",
        "Tomas, Tereza, Sabina and Franz, in and out of Prague after 1968, between lightness and weight, between love and kitsch."
      ]
    },
    "place": "于俄勒冈州尤金\nEugene, OR",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "我怀疑的，",
          "What I distrust"
        ],
        [
          "是人太容易",
          "is how easily people"
        ],
        [
          "相信自己的真诚。",
          "believe in their own sincerity."
        ]
      ],
      [
        [
          "一个人在集会上",
          "A man at a rally"
        ],
        [
          "为崇高的理想流泪。",
          "weeps for a lofty cause."
        ],
        [
          "一个国家",
          "A country"
        ],
        [
          "一遍遍歌颂",
          "sings its history"
        ],
        [
          "自己的历史和人民。",
          "and its people, again and again."
        ],
        [
          "一家企业说，",
          "A company says"
        ],
        [
          "我们正在改变世界。",
          "it is changing the world."
        ]
      ],
      [
        [
          "人们为这些画面感动，",
          "People are moved by these sights,"
        ],
        [
          "也因为和旁人",
          "and because they are moved"
        ],
        [
          "一同感动，",
          "together with others,"
        ],
        [
          "更加确信",
          "they grow surer still"
        ],
        [
          "眼前的一切值得相信。",
          "that all of it deserves belief."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "《不能承受的生命之轻》里，",
          "In The Unbearable Lightness of Being"
        ],
        [
          "我记得最牢的",
          "what I remember hardest"
        ],
        [
          "不是托马斯的爱情，",
          "is not Tomas’s love"
        ],
        [
          "是昆德拉说的“媚俗”。",
          "but what Kundera says about kitsch."
        ]
      ],
      [
        [
          "媚俗不是低劣的趣味。",
          "Kitsch is not bad taste."
        ],
        [
          "它是对现实的挑选：",
          "It is a selection from reality."
        ],
        [
          "难堪的，矛盾的，",
          "What is awkward, contradictory,"
        ],
        [
          "解释不了的，都排除，",
          "unexplainable is left out,"
        ],
        [
          "只留下大家能一起赞美的。",
          "and only what all can praise together is kept."
        ]
      ],
      [
        [
          "他甚至从排泄谈起。",
          "He even starts from excrement."
        ],
        [
          "这个近乎粗俗的例子，",
          "A nearly vulgar example,"
        ],
        [
          "我却觉得准。",
          "and to me an exact one."
        ],
        [
          "我们愿意赞美生命的美，",
          "We will praise the beauty of life"
        ],
        [
          "不愿承认它也有",
          "and won’t admit it holds"
        ],
        [
          "衰老，疾病，欲望，羞耻。",
          "age, illness, desire, shame."
        ],
        [
          "一个世界若要排除这些",
          "A world that must remove these"
        ],
        [
          "才能保持美丽，",
          "to stay beautiful"
        ],
        [
          "它自己就可疑。",
          "is itself suspect."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "萨宾娜讨厌",
          "Sabina hates"
        ],
        [
          "共产主义庆典上",
          "the communist festival’s"
        ],
        [
          "整齐的队伍，",
          "marching ranks,"
        ],
        [
          "挥舞的旗，",
          "waving flags,"
        ],
        [
          "幸福的脸。",
          "happy faces."
        ],
        [
          "她反感的不只是宣传，",
          "What repels her is more than propaganda."
        ],
        [
          "还有那种空气：",
          "It is the air itself,"
        ],
        [
          "不许任何人",
          "which lets no one"
        ],
        [
          "打断集体的感动。",
          "break the shared feeling."
        ]
      ],
      [
        [
          "昆德拉说有两滴眼泪。",
          "Kundera speaks of two tears."
        ],
        [
          "第一滴，",
          "The first"
        ],
        [
          "为眼前美好的景象。",
          "is for the lovely sight."
        ],
        [
          "第二滴，",
          "The second"
        ],
        [
          "为自己能和全人类",
          "is for being moved"
        ],
        [
          "一同感动。",
          "together with all mankind."
        ],
        [
          "第二滴眼泪，",
          "The second tear"
        ],
        [
          "才让媚俗成为媚俗。",
          "is what makes kitsch kitsch."
        ],
        [
          "我觉得这比批评",
          "I find this cuts deeper"
        ],
        [
          "某种政治制度更深。",
          "than criticizing a political system."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "媚俗不靠哪种意识形态。",
          "Kitsch needs no ideology."
        ],
        [
          "弗兰茨向往盛大的游行。",
          "Franz longs for the grand march."
        ],
        [
          "萨宾娜连流亡者",
          "Sabina cannot accept even the role"
        ],
        [
          "派给她的反抗英雄，",
          "of resistance hero"
        ],
        [
          "也不肯接受。",
          "that exile hands her."
        ],
        [
          "一个人可以反对极权，",
          "One can oppose totalitarianism"
        ],
        [
          "却仍然沉醉于",
          "and still be drunk on"
        ],
        [
          "自己代表自由与正义的样子。",
          "the picture of oneself as freedom and justice."
        ]
      ],
      [
        [
          "现实里许多彼此敌对的人群，",
          "Many groups at war in the world"
        ],
        [
          "相信的东西不同，",
          "believe different things"
        ],
        [
          "要的却一样：",
          "and need the same:"
        ],
        [
          "一个纯洁的自我，",
          "a pure self,"
        ],
        [
          "一群值得赞美的同伴，",
          "comrades worth praising,"
        ],
        [
          "和几个必须被排除的敌人。",
          "and a few enemies to be cast out."
        ]
      ],
      [
        [
          "政治成了情感上的归属。",
          "Politics becomes belonging by feeling."
        ],
        [
          "人们先确认",
          "First people confirm"
        ],
        [
          "自己站在善良这一边，",
          "they stand on the side of the good,"
        ],
        [
          "再决定",
          "then decide"
        ],
        [
          "哪些事实值得相信。",
          "which facts deserve belief."
        ],
        [
          "我警惕这种",
          "I am wary of this"
        ],
        [
          "道德上的自我满足。",
          "moral self-satisfaction."
        ]
      ],
      [
        [
          "理想越崇高，",
          "The loftier the ideal,"
        ],
        [
          "越不愿承认",
          "the less willing people are"
        ],
        [
          "它可能造成的伤害。",
          "to admit the harm it may do."
        ],
        [
          "一旦承认，",
          "To admit it"
        ],
        [
          "就得放下",
          "is to put down"
        ],
        [
          "那个关于自己正义的完美形象。",
          "the perfect picture of one’s own justice."
        ],
        [
          "媚俗让这种放下",
          "Kitsch makes that putting down"
        ],
        [
          "难以忍受。",
          "hard to bear."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "商业社会也一样。",
          "The world of commerce is the same."
        ],
        [
          "科技公司说自己改变世界，",
          "Tech firms say they change the world."
        ],
        [
          "广告一遍遍展示",
          "Ads show again and again"
        ],
        [
          "幸福，自由，自我实现。",
          "happiness, freedom, self-fulfillment."
        ],
        [
          "宏大的使命，精心的形象，",
          "The grand mission, the careful image,"
        ],
        [
          "令人激动的未来，",
          "the thrilling future"
        ],
        [
          "不一定是假的。",
          "need not be false."
        ]
      ],
      [
        [
          "它们省略的是",
          "What they leave out"
        ],
        [
          "没那么振奋的部分：",
          "is the part that stirs no one:"
        ],
        [
          "技术的局限，利益的冲突，",
          "the limits of technology, the clash of interests,"
        ],
        [
          "普通人的困境，",
          "ordinary people’s trouble,"
        ],
        [
          "进步要付的代价。",
          "the cost progress must pay."
        ],
        [
          "媚俗不一定要造谎。",
          "Kitsch need not make up lies."
        ],
        [
          "有时它只要决定，",
          "Sometimes it only decides"
        ],
        [
          "哪些真实的东西",
          "which true things"
        ],
        [
          "不该出现。",
          "should not appear."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我不想把萨宾娜",
          "I won’t take Sabina"
        ],
        [
          "当作小说里",
          "as the one"
        ],
        [
          "唯一清醒的人。",
          "lucid person in the novel."
        ],
        [
          "她不断背叛身份和归属，",
          "She betrays identity and belonging again and again,"
        ],
        [
          "不让自己的生活",
          "refuses to let her life"
        ],
        [
          "成为任何宏大叙事的象征。",
          "symbolize any grand narrative."
        ],
        [
          "这样的拒绝",
          "The refusal also keeps her"
        ],
        [
          "也让她无法安顿。",
          "from settling anywhere."
        ],
        [
          "她摆脱了集体的感动，",
          "She is free of shared feeling"
        ],
        [
          "没有摆脱孤独。",
          "and not free of loneliness."
        ]
      ],
      [
        [
          "昆德拉没有让她",
          "Kundera does not make her"
        ],
        [
          "成为战胜媚俗的英雄。",
          "a hero who conquers kitsch."
        ],
        [
          "那会造出另一种媚俗：",
          "That would make another kitsch,"
        ],
        [
          "永远清醒，永远独立，",
          "the one always lucid, always independent,"
        ],
        [
          "永远不受骗的人。",
          "never deceived."
        ],
        [
          "这是小说最让人不安的地方。",
          "This is what unsettles me most in the novel."
        ],
        [
          "我们批评别人",
          "When we fault others"
        ],
        [
          "沉醉于崇高的理想，",
          "for being drunk on lofty ideals,"
        ],
        [
          "或许正享受",
          "we may be enjoying"
        ],
        [
          "比别人清醒的优越。",
          "a lucidity above theirs."
        ],
        [
          "我们拒绝集体的感动，",
          "When we refuse the shared feeling,"
        ],
        [
          "也可能在为自己的独立",
          "we may be moved"
        ],
        [
          "而感动。",
          "by our own independence."
        ],
        [
          "昆德拉不让读者",
          "Kundera will not let the reader"
        ],
        [
          "舒舒服服地站在",
          "stand comfortably"
        ],
        [
          "批判者的位置上。",
          "in the critic’s place."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "书名说的是生命之轻。",
          "The title speaks of lightness."
        ],
        [
          "我越来越觉得，",
          "I feel more and more"
        ],
        [
          "媚俗是人为抵抗这种轻",
          "that kitsch was invented"
        ],
        [
          "而发明的东西。",
          "to resist it."
        ],
        [
          "生命只有一次，",
          "Life comes once,"
        ],
        [
          "没有预演，",
          "with no rehearsal,"
        ],
        [
          "也无从比较",
          "no way to compare"
        ],
        [
          "另一种人生是否更好。",
          "whether another life was better."
        ],
        [
          "所以我们想相信：",
          "So we want to believe"
        ],
        [
          "自己的爱情如命运必然，",
          "our love was fated,"
        ],
        [
          "自己的选择合乎历史的方向，",
          "our choices fit the direction of history,"
        ],
        [
          "自己的生活",
          "our lives"
        ],
        [
          "参与着值得赞美的事业。",
          "take part in a cause worth praise."
        ],
        [
          "媚俗给的，",
          "What kitsch gives"
        ],
        [
          "正是这份安心的确定。",
          "is exactly this settled certainty."
        ],
        [
          "昆德拉偏不给。",
          "Kundera refuses to give it."
        ]
      ],
      [
        [
          "媚俗要世界成为一个整体，",
          "Kitsch wants the world one whole"
        ],
        [
          "所有人都懂，都赞美。",
          "that everyone understands and praises."
        ],
        [
          "小说一次次让",
          "A novel keeps bringing back"
        ],
        [
          "不协调的，不体面的，",
          "what does not fit, what is not decent,"
        ],
        [
          "解释不了的，",
          "what cannot be explained,"
        ],
        [
          "重新出现。",
          "again and again."
        ],
        [
          "他没有要我们放弃理想，",
          "He does not ask us to give up ideals"
        ],
        [
          "也没有证明怀疑",
          "or prove that doubt"
        ],
        [
          "一定高过信仰。",
          "is nobler than faith."
        ],
        [
          "他只是让我看到：",
          "He only shows me"
        ],
        [
          "关于美好生活的想象，",
          "that no picture of the good life"
        ],
        [
          "都不该因此获得",
          "should win the power"
        ],
        [
          "排除现实的权力。",
          "to shut reality out."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "最该提防的，",
          "What I most must guard against"
        ],
        [
          "是我开始相信",
          "is coming to believe"
        ],
        [
          "凡是不愿同我们一起流泪的人，",
          "that whoever will not weep with us"
        ],
        [
          "一定错了。",
          "must be wrong."
        ]
      ]
    ]
  },
  {
    "date": "2012-07-10",
    "title": "Why Couldn’t Hassan Be a Little Selfish?",
    "slug": "why-couldnt-hassan-be-selfish",
    "category": "Novel",
    "book": {
      "cover": "kite_runner.jpg",
      "title": "追风筝的人 (The Kite Runner)",
      "author": "卡勒德·胡赛尼 Khaled Hosseini",
      "language": "Chinese",
      "country": "Afghanistan",
      "original": "English",
      "lines": [
        "Novel · Chinese translation of The Kite Runner, first published 2003",
        "Amir, a rich Pashtun boy in Kabul, betrays his Hazara servant Hassan and spends his life trying to atone."
      ]
    },
    "place": "于中国盐城\nYancheng, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["亲爱的哈桑：",
       "Dear Hassan,"],
      ["我对胡赛尼这本书最大的保留，就是你。你太善良了。你忠诚，勇敢，宽容，几乎从不嫉妒，也很少发怒。阿米尔背叛了你，你仍然沉默，甚至替他担下罪名。他呢，可以自私，虚荣，怯懦，可以渴望父亲的认可，可以在羞愧里一遍遍折磨自己。书里最自私的人拥有最丰富的人性，最无私的人却几乎没有机会做他自己。读你的故事，我一直摆脱不了这个矛盾。",
       "My largest reservation about Khaled Hosseini’s book is you. You are too good. You are loyal, brave and forgiving, and you almost never envy and rarely rage. Amir betrays you, and you stay silent and even take the blame for him. He, meanwhile, gets to be selfish, vain and cowardly, to crave his father’s approval, to torment himself over and over in shame. The most selfish person in the book has the richest humanity, and the most selfless has almost no chance to be himself. I could not shake that contradiction while reading about you."],
      ["你和阿米尔在喀布尔一起长大，在石榴树下读书，在冬天追风筝。你们亲密无间，却从来没有平等过。他是富裕的普什图家庭的少爷，你是哈扎拉仆人的儿子。他可以享受友谊，也可以随时退回主人的位置；你几乎没有这样的退路。你那句“为你，千千万万遍”很动人，也让我不安。大家夸你愿意为他付出一切，很少有人想到你其实没有拒绝的权利。一个人的善良里若从来没有说“不”的可能，我们赞美的是他的美德，还是他的顺从？",
       "You and Amir grew up together in Kabul, reading under the pomegranate tree, chasing kites in winter. You were close, and you were never equal. He was the young master of a wealthy Pashtun household, and you were the son of a Hazara servant. He could enjoy the friendship and step back into being the master whenever he liked. You had almost no such step back. Your line, “For you, a thousand times over,” is moving, and it also unsettles me. We praise you for giving him everything, and few of us notice that you had no right to refuse. If a person’s goodness never includes the possibility of saying no, is it his virtue we are praising, or his obedience?"],
      ["风筝比赛之后，你为了守住那只蓝风筝，被阿塞夫侵犯，阿米尔躲在巷口，没有上前。后来他又故意栽赃你偷东西，想把你赶出家门。你明明知道真相，还是认了罪。读到这里我甚至希望你发怒，希望你揭穿他，哪怕只有一次，不再替别人承担后果。可是胡赛尼没有给你这个机会。你越宽容，阿米尔就越显得卑劣；你越无私，他的悔恨就越有分量。于是你的善良不只是你的性格，也成了推动阿米尔精神成长的叙事工具。一个人靠不断牺牲自己，帮另一个人认识了他自己。",
       "After the kite tournament, you were raped by Assef for holding on to that blue kite, and Amir hid at the mouth of the alley and did not step forward. Later he deliberately framed you for theft to drive you from the house. You knew the truth, and you confessed anyway. At this point I even wanted you to be angry, to expose him, to refuse, just once, to carry the consequences for someone else. Hosseini never gave you that chance. The more forgiving you are, the more despicable Amir looks, and the more selfless you are, the heavier his remorse weighs. Your goodness becomes more than your character. It becomes a tool of the story to push Amir’s spiritual growth. One person, by sacrificing himself again and again, helps another come to know himself."],
      ["放在阿富汗的族群关系里看，这种安排尤其耐人寻味。你是哈扎拉人，活在普什图人占优势的秩序下，你的顺从有深刻的现实背景。可是小说既然想揭示这种不平等，就不该这样吝于写你自己的欲望。你是否嫉妒过阿米尔的教育和财富，是否怨过你父亲阿里一辈子低人一等的处境，是否想过离开那座房子，我们几乎无从知道。书让一个长期受歧视的人物赢得了读者的同情，却没有充分给他普通人该有的复杂。你仿佛只有足够无私才值得被看见，而阿米尔即使自私，也总有被理解的机会。",
       "Set within Afghanistan’s ethnic order, this arrangement is especially curious. You are Hazara, living under a society that favors Pashtuns, and your obedience has a deep real-world background. But if the novel means to expose that inequality, it should not be so stingy about your own wants. Whether you ever envied Amir’s education and wealth, resented the lowly place your father Ali held all his life, or thought of leaving that house, we can hardly know. The book wins readers’ sympathy for a long-despised character and does not give him the complexity an ordinary person deserves. You seem worth seeing only if you are selfless enough, while Amir, even selfish, always has the chance to be understood."],
      ["说起来，我反而更喜欢阿米尔的父亲。他慷慨，勇敢，重视荣誉，也固执，虚荣，还瞒着所有人你是他的亲生儿子。他能为陌生人的尊严冒险，却无法公开承认自己的孩子。这种矛盾让他显得真实：善行取消不了过错，过错也抹不掉勇气。你几乎没有得到同样的待遇。我甚至觉得，要是胡赛尼准你偶尔自私，嫉妒，说谎，或者恨阿米尔，你会更动人。自私并不总是堕落。有时一个人想为自己争取点什么，恰恰是他终于开始把自己当作一个值得重视的人。",
       "Frankly, I like Amir’s father better. He is generous, brave and devoted to honor, and also stubborn and vain, and he hid from everyone that you were his own son. He could risk himself for a stranger’s dignity and could not publicly acknowledge his child. That contradiction makes him real: his good deeds cannot cancel his wrongs, and his wrongs cannot erase his courage. You were given almost none of the same. I even think that if Hosseini had let you be selfish now and then, jealous, a liar, or let you hate Amir, you would be more moving. Selfishness is not always a fall. Sometimes when a person fights for something of his own, it means he has finally begun to treat himself as someone who matters."],
      ["后来阿米尔回到阿富汗，救出了你的儿子索拉博。他同样受了很深的创伤，却没有继承你那种近乎无条件的忠诚。他沉默，害怕，不愿说话，到了美国也不肯轻易信任阿米尔。我觉得这孩子比你更真实。他不必因为被救就立刻感激，也不必为了满足读者对美好结局的期待而很快高兴起来。他有权留着自己的痛苦，甚至有权拒绝别人的善意。最后，他看着阿米尔追风筝，脸上浮出一丝几乎看不出的微笑。这个细节之所以动人，是因为那是索拉博自己的反应，不是为了让阿米尔放心而必须做出的回应。",
       "Later Amir goes back to Afghanistan and rescues your son Sohrab. He too is deeply wounded, and he does not inherit your near-unconditional loyalty. He is silent, afraid, unwilling to speak, and even in America he does not easily trust Amir. I find this boy more real than you. He need not be grateful the instant he is saved, nor recover his happiness quickly to satisfy readers who want a good ending. He has the right to keep his pain, even to refuse other people’s kindness. At the end he watches Amir run a kite, and a barely visible smile crosses his face. The detail moves me because the smile is Sohrab’s own, and not a response he has to give so that Amir can feel at ease."],
      ["那句“为你，千千万万遍”，是整本书里我最忘不掉的。可我越来越觉得，它美，也因为说出它的人从没要求过任何回报。我们当然乐意爱这样的你，你的存在几乎不会向谁提任何要求。平等的友谊，难道不该允许双方都有欲望，有私心，甚至有让对方失望的时候吗？",
       "“For you, a thousand times over” is what I remember most from the whole book. But I increasingly feel it is beautiful partly because the one who says it never asks for anything back. Of course we are glad to love a you like that, since your existence asks nothing of anyone. Shouldn’t an equal friendship allow both people to want things, to have private motives, even to let each other down?"],
      ["我并不希望你变得自私。我只是希望你有资格自私。一个人拥有为自己而活的自由，他选择为别人付出时，才称得上无私。",
       "I don’t want you to turn selfish. I only want you to have the right to be. When a person is free to live for himself, then his choosing to give to others can be called selfless."],
      ["我常想给你补一个书里没有的下午：你厌烦了阿米尔，把手里的风筝放在地上，转身去做一件只为你自己的事。",
       "I keep wanting to give you an afternoon the book does not have. You are tired of Amir, you set the kite down on the ground, and you walk off to do one thing that is only for you."]
    ]
  },
  {
    "date": "2012-08-01",
    "title": "What Memory Makes of Love",
    "slug": "the-lover",
    "category": "Novel",
    "book": {
      "cover": "lamant.jpg",
      "title": "L’Amant",
      "author": "Marguerite Duras",
      "language": "French",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Éditions de Minuit, 1984",
        "An old woman remembers the affair she had at fifteen and a half with a wealthy Chinese man in French Indochina."
      ]
    },
    "place": "于越南胡志明市\nHo Chi Minh City, Vietnam",
    "languages": ["Chinese", "English"],
    "prose": [
      ["他问：你说《情人》写的是一个十五岁半的法国少女和中国情人的爱情，这还不够迷人吗，为什么偏要纠缠别的？\n我答：爱情当然在，可最让我着迷的是杜拉斯一直不肯让我们确定：我们读到的，究竟是少女当年真实的感受，还是一个年老的女人在漫长岁月之后，为那段经历找到的解释。",
       "He asked: You say *L’Amant* is about a fifteen-and-a-half-year-old French girl and her Chinese lover. Isn’t that love story enough? Why go digging for something else?\nI answered: The love is there, of course. What holds me most is that Duras never lets us settle whether we are reading what the girl really felt back then, or the explanation an old woman found for that time after a long stretch of years."],
      ["他问：可小说总得有个起点，它不就是从少女开始的吗？\n我答：它没有。开头先让我们看见一个衰老的女人，然后才突然回到湄公河的渡船，回到那个戴男式毡帽、穿旧丝裙、踩金色高跟鞋的少女。",
       "He asked: A novel needs a starting point, and doesn’t this one start with the girl?\nI answered: It doesn’t. It first shows us an aging woman, and only then cuts back to the ferry on the Mekong, to the girl in the man’s felt hat, the worn silk dress and the gold high-heeled shoes."],
      ["他问：那又怎样？那顶帽子，那双鞋，就是她当年的样子。\n我答：杜拉斯一遍遍描写这个形象，好像它是一张决定了她一生的照片，而那张照片其实从未被拍下。我觉得这个细节露出了全书最深的矛盾：记忆不只保存过去，也在不断重新创造过去。少女当年或许只是穿了自己能找到的衣服，多年之后，帽子和高跟鞋成了贫困、欲望与早熟的象征。这些意义属于当年的少女，还是后来一直回望她的女人，我们没法确定。",
       "He asked: So what? The hat and the shoes are simply how she looked then.\nI answered: Duras describes this figure over and over, as if it were a photograph that decided her whole life, and the photograph was never taken. I think this detail exposes the deepest contradiction in the book: memory does not only keep the past, it keeps remaking it. The girl may have worn only whatever clothes she could find, and years later the hat and the heels have become symbols of poverty, desire and early maturity. Whether those meanings belong to the girl then or to the woman who keeps looking back at her, we cannot tell."],
      ["他问：好，那至少两人的关系是清楚的吧？一个有钱的男人，一个穷少女。\n我答：没有那么简单。她出身贫穷的法国殖民者家庭，他是富裕的华人家庭的儿子，有钱，有汽车；她则拥有殖民社会给白人的身份优势。经济上他在上，种族等级上她在上。权力是交错的，所以这段关系既不能简单看成富人占有穷少女，也不能浪漫化成跨越阶级与种族的爱情。",
       "He asked: Surely the relationship itself is clear? A rich man and a poor girl.\nI answered: It isn’t that simple. She comes from a poor French colonial family, and he is the son of a wealthy Chinese family, with money and a car. She holds the status colonial society gives whites. Economically he is above her, and in the racial hierarchy she is above him. The power runs crosswise, so the relationship can’t be read as a rich man taking a poor girl, and can’t be romanticized as love that crosses class and race."],
      ["他问：可渡船上她那么镇定，男人反倒拘谨紧张。她明明很清楚自己要什么。\n我答：我始终怀疑，该不该完全相信这份镇定。一个十五岁半的少女，真能这样清楚地理解自己的欲望吗？还是年老的叙述者已经知道后来发生了什么，于是把清醒和主动，重新送给了当年的自己？",
       "He asked: But on the ferry she is so composed, and the man is tense and awkward. She clearly knows what she wants.\nI answered: I keep doubting whether that composure should be believed entirely. Could a girl of fifteen and a half really understand her own desire so clearly? Or does the old narrator, who already knows what happened later, hand that clarity and initiative back to her younger self?"],
      ["他问：堤岸街的房间里总该是真的吧？\n我答：那里更复杂。她与中国情人的亲密，一直连着金钱、家里的穷和身份的差异。她的家人收下他带来的好处，却仍然轻视他是中国人；他再富有，也逃不开父亲对他婚姻的安排。杜拉斯写的，我觉得不是爱情如何战胜这些限制，而是欲望如何在不平等之中发生。少女的主动消除不了贫困对选择的影响，男人的财富也没让他摆脱殖民社会和家庭秩序的束缚。",
       "He asked: Surely the room in Cholon is real?\nI answered: There it gets more tangled. Her intimacy with the Chinese lover is bound up with money, her family’s poverty and their differences in standing. Her family accepts what he brings and still looks down on him for being Chinese, and he, rich as he is, cannot escape his father’s arrangements for his marriage. What Duras writes, I think, is how desire arises inside inequality, and she does not show love overcoming these limits. The girl’s initiative cannot remove poverty’s influence on her choices, and his wealth does not free him from colonial society or the family order."],
      ["他问：但叙述不也能让我们靠近她吗？\n我答：叙述人称一直在变。有时说“我”，好像还摸得到少女当年的身体；有时把年轻的自己叫作“她”，像在看一个陌生人。那个少女确实是她，也已经不再是她。",
       "He asked: Doesn’t the narration at least bring us close to her?\nI answered: The grammatical person keeps shifting. Sometimes she says “I,” and it seems she can still touch the girl’s body of that time. Sometimes she calls her younger self “she,” as if watching a stranger. That girl is certainly her, and no longer her."],
      ["他问：总有一刻是真的吧，比如她离开的时候？\n我答：离开印度支那的轮船上，她听见音乐，突然哭了。此前她好像一直镇定，到真正离开，才第一次明白自己失去了什么。可我还是不确定，那场哭是不是意味着她终于知道自己爱着那个男人。当年的她也许只是感到一种说不清的悲伤，多年后的叙述者，才慢慢把这悲伤理解成爱情。",
       "He asked: There must be one moment that is true, surely, such as when she leaves?\nI answered: On the ship leaving Indochina she hears music and suddenly weeps. Until then she seems to have kept her composure, and only at the real departure does she seem to grasp for the first time what she has lost. Still I am not sure the weeping means she finally knew she loved him. The girl then may have felt only a sadness she could not explain, and the narrator years later slowly came to understand it as love."],
      ["他问：可结尾，多年后他在电话里告诉她，自己始终爱着她。这不就证明了一切吗？\n我答：在一般的爱情小说里，也许是的。在杜拉斯这里，它让我更犹豫。这句话只能从多年之后回到过去，给早已结束的时刻添上新的意义，证明不了少女当时懂得多少。而且就算爱情真的存在，也抹不掉金钱、种族和阶级塑造过他们关系的事实。爱情可以是真的，却未必因此就是平等的。",
       "He asked: But at the end, years later, he tells her over the phone that he has always loved her. Doesn’t that prove it all?\nI answered: In an ordinary love story it might. With Duras it makes me hesitate more. The sentence can only travel from years later back into the past, giving new meaning to moments long over, and it cannot prove how much the girl understood then. And even if the love was real, it cannot erase the fact that money, race and class shaped their relationship. Love can be real without being equal."],
      ["他问：读完以后，你留下的是什么？\n我答：还是那张从未拍摄的照片。十五岁半的少女站在湄公河的渡船上，不知道自己将遇见谁，也不知道那段经历会怎样留在她的生命里。多年以后，一个衰老的女人一次次回到那一刻，想从少女的姿态和目光里，认出后来那个自己的起点。她可以重新描写那个少女，却再也不能像她那样，对未来一无所知。",
       "He asked: What are you left with when you finish?\nI answered: The photograph that was never taken. A girl of fifteen and a half stands on the ferry on the Mekong, not knowing whom she will meet or how that time will stay in her life. Years later an aged woman returns to that moment again and again, trying to find in the girl’s posture and gaze the starting point of the person she became. She can describe that girl anew, and she can never again be her, knowing nothing of what comes."]
    ]
  },
  {
    "date": "2017-03-11",
    "title": "If Wealth Comes from Fair Exchange, May Society Still Redistribute It?",
    "slug": "wealth-and-redistribution",
    "category": "Philosophy",
    "book": {
      "cover": "anarchy_state_utopia.jpg",
      "title": "Anarchy, State, and Utopia",
      "author": "Robert Nozick",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Philosophy · English original, first published 1974",
        "Nozick argues for a minimal state and an entitlement theory of justice in holdings, in answer to Rawls."
      ]
    },
    "place": "于加州旧金山\nSan Francisco, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1. 诺齐克最让我着迷的地方，在于他不从贫富差距合不合理出发，先问的是：一个人凭什么有权干预另一个人的财产？",
       "1. What fascinates me most about Nozick is that he does not start from whether the gap between rich and poor is reasonable. He asks first by what right one person may interfere with another’s property."],
      ["2. 在他的权利理论里，分配是否正义，不看最后是否平等，只看财产是不是经由正当取得和自愿转让而来。",
       "2. In his theory of rights, the justice of a distribution does not depend on whether the outcome is equal. It depends on whether the holdings came through just acquisition and voluntary transfer."],
      ["3. 他和罗尔斯正好相对。罗尔斯想设计一个公平的社会基本结构；诺齐克质疑，任何预先定好的分配模式，是否都得靠持续干预个人的自由选择来维持。",
       "3. He stands squarely opposite Rawls. Rawls wants to design a fair basic structure for society. Nozick doubts that any pattern of distribution fixed in advance can be kept up without constant interference in people’s free choices."],
      ["4. 我靠工资、股票和房地产积累财富，所以很容易懂得诺齐克的吸引力。承担风险，延后消费，去投资，似乎就该拿到相应的成果。国家事后重新决定这些成果怎么分，我一时想不出它的依据。",
       "4. I build my wealth on a salary, stocks and real estate, so Nozick’s appeal is easy for me to feel. Taking risks, putting off spending and investing seem to earn a person the results. For the state to decide afterward how those results are divided, I can’t at once think what its ground would be."],
      ["5. 一套房子的价值，不全来自房主的努力。公共交通，学校，城市规划，无数纳税人共同建起的基础设施，都在里面。",
       "5. A house’s value does not come wholly from its owner’s effort. Public transport, schools, city planning and infrastructure built by countless taxpayers are all in it."],
      ["6. 股票的收益也一样，靠法律制度，公共教育，基础研究，和一个稳定的社会秩序。",
       "6. The same holds for stock returns, which lean on a legal system, public education, basic research and a stable social order."],
      ["7. 诺齐克要求的是正当取得，而这恰是他的理论里最难的部分。财富的形成若从来不是完全独立的个人行为，属于个人的那份正当权益，边界就很难画。",
       "7. What Nozick demands is just acquisition, and that is the hardest part of his theory. If wealth is never formed by wholly independent individuals, the line around the share that rightly belongs to the person is hard to draw."],
      ["8. 他没有忽略历史上的不正义，理论里有矫正不正当取得和转让的原则。可土地占有、制度歧视和财富继承纠缠成这样，现实社会找得到一个清楚的正当起点吗？",
       "8. He does not overlook historical injustice, and his theory has a principle of rectifying unjust acquisition and transfer. But with land seizures, institutional discrimination and inherited wealth so entangled, can any real society find a clean starting point?"],
      ["9. 这本书的价值，我想不在证明自由市场永远正确，而在逼着平等主义者认真回答：个人权利的边界在哪里。",
       "9. The book’s value, I think, lies less in proving that free markets are always right than in forcing egalitarians to answer seriously where the boundary of individual rights lies."],
      ["10. 它同样逼着相信财产权的人承认：要说保护财产是正当的，最终还得解释财产是怎么来的。",
       "10. It also forces believers in property rights to admit that defending the protection of property finally requires explaining how the property came to be."],
      ["11. 读完，我更珍惜个人自由了，也没有停止怀疑财富分配的历史基础。这两件事还各自摆在桌上。",
       "11. Having finished, I value individual freedom more, and I have not stopped doubting the historical basis of how wealth is distributed. Both still sit on the table."]
    ]
  },
  {
    "date": "2020-03-27",
    "title": "A History That Redistributes Luck to the Losers",
    "slug": "a-history-that-redistributes-luck",
    "category": "History",
    "book": {
      "cover": "guns_germs_steel.jpg",
      "title": "Guns, Germs, and Steel",
      "author": "Jared Diamond",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · English original, first published 1997",
        "Diamond explains why wealth, technology and power ended up so unevenly spread across the world, tracing it back to geography."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1532年，卡哈马卡。人数有限的西班牙征服者俘虏了印加皇帝阿塔瓦尔帕。戴蒙德把这一刻拆开来看：马匹、钢铁武器、文字、军事经验，还有传染病，一样一样摆在桌上。",
       "Cajamarca, 1532. A small band of Spanish conquistadors captures the Inca emperor Atahualpa. Diamond takes the moment apart and lays the pieces on the table one by one: horses, steel weapons, writing, military experience, infectious disease."],
      ["他再把西班牙人的胜利一路接回数千年前欧亚大陆的农业起源，历史忽然有了令人眩晕的纵深。这些解释十分精彩，我读到这里是服气的。",
       "Then he connects the Spaniards’ victory all the way back to the origins of agriculture in Eurasia thousands of years earlier, and history suddenly gains a dizzying depth. These explanations are superb, and at this point I am convinced."],
      ["可我同时想起书的另一头。新几内亚的政治人物耶利问过戴蒙德一个问题：为什么白人制造并带来了那么多物品，而新几内亚人拥有的相对很少？戴蒙德把它当作全书的起点，我却觉得最耐人寻味的是问题本身。",
       "Yet I also think of the other end of the book. The New Guinean politician Yali once put a question to Diamond: why did white people develop so much cargo and bring it to New Guinea, while New Guineans had so little of their own? Diamond takes it as the starting point of the whole book. To me the most intriguing thing is the question itself."],
      ["为什么要用拥有多少现代工业产品，来衡量两个社会的差异？这当然是值得研究的经济史问题，但它已经接受了现代工业社会的评价标准。耶利想知道差异从何而来，戴蒙德用农业起源、动物驯化与大陆轴线作答。我佩服这个回答的知识广度，却一直觉得有个问题没被充分讨论：我们为什么如此确信，这些差异就是理解人类历史最重要的差异？",
       "Why measure the difference between two societies by how many modern industrial products they have? It is of course a question of economic history worth studying, but it has already accepted the standards of evaluation of modern industrial society. Yali wants to know where the difference comes from, and Diamond answers with the origins of agriculture, animal domestication and the axes of the continents. I admire the breadth of knowledge in the answer, yet I have always felt that one question has not been fully discussed: why are we so sure these differences are the most important ones for understanding human history?"],
      ["一个没有发展出钢铁冶炼的社会，可能拥有极其复杂的生态知识；一个没有建立庞大帝国的民族，可能发展出更适应当地环境的生活方式。它们不会因为缺少欧洲式的国家机器，就只剩下等待解释的落后。戴蒙德当然明白这一点，他写新几内亚人的那些段落，满是对当地知识与能力的尊重。但整部书仍围绕现代世界的一个结果展开：为什么某些社会获得了征服其他社会的能力。",
       "A society that never developed steel smelting may hold extremely complex ecological knowledge; a people that never built a vast empire may have developed a way of life better adapted to its local environment. Lacking a European-style state apparatus, they are not left with nothing but a backwardness waiting to be explained. Diamond of course understands this, and the passages on New Guineans are full of respect for local knowledge and ability. But the whole book still unfolds around one outcome of the modern world: why some societies gained the ability to conquer others."],
      ["我对《枪炮、病菌与钢铁》有一种奇怪的感情。我赞同戴蒙德想纠正的偏见，却不完全喜欢他纠正的方法。这本书的雄心相当惊人，它想用一套跨越一万三千年的解释，回答历史上最令人不安的问题之一：财富、技术与权力，为什么如此不平等地分布在世界各地。他的答案几乎一句话就能说完：并非有些人比另一些人优秀，而是他们继承了不同的地理条件。",
       "I have a strange feeling about *Guns, Germs, and Steel*. I agree with the prejudice Diamond sets out to correct, but I do not entirely like the way he corrects it. The book’s ambition is astonishing: one explanation spanning thirteen thousand years, offered for one of the most unsettling questions in history, why wealth, technology and power are so unequally distributed around the world. His answer can almost be said in a sentence: it is not that some people are better than others, but that they inherited different geographical conditions."],
      ["这当然比十九世纪欧洲殖民者的种族与文明等级之说进步得多。读着读着，我却冒出一个不太礼貌的念头：戴蒙德似乎把过去归于欧洲人的一切成就，重新归给了欧亚大陆。欧洲人不再因为聪明而拥有钢铁，只是幸运地住在有小麦、马匹、牛羊，又利于技术传播的地方。胜利者的优越感取消了，胜利本身仍坐在整部历史的中心。",
       "This is of course far more progressive than the nineteenth-century European colonizers’ talk of race and a hierarchy of civilizations. But as I read, an impolite thought came to me: Diamond seems to take everything once credited to the Europeans and credit it instead to Eurasia. Europeans no longer have steel because they are clever; they are simply lucky to live where there are wheat, horses, cattle and sheep, and conditions suited to the spread of technology. The victors’ sense of superiority has been cancelled, and the victory itself still sits at the center of the whole history."],
      ["我开始觉得，这本书反对文明等级论，却没有完全摆脱文明竞赛的叙事框架。它改写了比赛结果的解释，很少怀疑比赛为什么值得成为历史的主线。",
       "I began to feel that the book opposes a hierarchy of civilizations without entirely escaping the narrative frame of a race between civilizations. It rewrites the explanation of the result, and rarely doubts why the race should be the main thread of history."],
      ["于是我想象另一种写法。假如书不从欧洲人为何征服美洲开始，而从安第斯山脉的农业开始。印加人在陡峭的山地上修梯田，利用不同海拔的生态差异组织生产，靠道路、仓储与行政体系维系一个横跨复杂地形的帝国。这些成就的历史意义，并不比欧亚大陆的牲畜驯化少，只是它们最终没有变成横渡大西洋的舰队。把征服能力从评价的中心移开，人类文明史的地图可能会完全不同。",
       "So I imagine another way of writing it. Suppose the book began not with why Europeans conquered the Americas but with agriculture in the Andes. The Inca built terraces on steep mountainsides, organized production around the ecological differences of altitude, and held together through roads, storehouses and administration an empire spanning complex terrain. These achievements have no less historical significance than the domestication of livestock in Eurasia; they simply did not turn, in the end, into fleets that crossed the Atlantic. Move the ability to conquer away from the center of evaluation, and the map of human civilization may look quite different."],
      ["我不想因此把印加帝国浪漫化。它也有等级、强制劳动与政治征服。文化之间没有天然的高低，不等于每一种文化实践都值得赞美。我们完全可以批评一种制度，而不必把批评扩大成对整个文明的裁决。",
       "I do not want to romanticize the Inca empire on this account. It too had hierarchy, forced labor and political conquest. That there is no natural ranking among cultures does not mean every cultural practice deserves praise. We can perfectly well criticize an institution without widening that criticism into a verdict on a whole civilization."],
      ["对殖民主义，我一直不肯让步。要紧的是征服者把技术、军事与经济上的优势变成了支配他人的权利，他们是否真有某些先进技术倒在其次。即使殖民统治带来了铁路、学校或新的生产方式，也不因此获得正当性。",
       "On colonialism I have never been able to yield. What matters is that the conquerors turned technological, military and economic advantage into a right to dominate others; whether they really had some advanced technology comes second. Even if colonial rule brought railways, schools or new modes of production, it does not thereby gain legitimacy."],
      ["不过我不想把这本书只读成一场关于殖民主义的道德辩论。戴蒙德真正让我受益的，是他让我重新看待历史中的运气。我生活在一个强调个人能力与努力的时代，习惯赞美成功者的远见、勤奋与执行力，却不太愿意承认，许多成功首先需要恰好出生在某个地方、进入某个时代，继承一套自己并未创造的条件。从个人命运延伸到国家历史，这一点尤其耐人寻味。但运气解释不了一切。地理环境提供机会，也施加限制；生活在其中的人仍要作选择，建立制度，处理冲突，承担行动的后果。",
       "Still, I do not want to read the book merely as a moral debate about colonialism. What benefited me in Diamond is that he made me see luck in history anew. I live in an age that stresses individual ability and effort, and we are used to praising the foresight, diligence and execution of the successful. We are less willing to admit that much success first requires being born in a certain place, entering a certain era and inheriting a set of conditions one did not create. Extended from individual fate to national history, this is especially thought-provoking. But luck cannot explain everything. Geography offers opportunities and also imposes limits; the people living in it still have to make choices, build institutions, handle conflicts and bear the consequences of their actions."],
      ["所以我最终没有把戴蒙德当作揭示历史终极答案的作者，更愿意把他看作一个出色的提问者。他逼我怀疑那些看似理所当然的胜利，也让我注意到历史教科书里常被省略的农业、生态与疾病。他已经完成了一件重要的事：把欧洲人从历史天然主角的位置上请了下来。",
       "So in the end I did not take Diamond as an author who reveals the final answer of history. I would rather see him as an excellent questioner. He forced me to doubt victories that seemed taken for granted, and made me notice the agriculture, ecology and disease so often omitted from history textbooks. He has done an important piece of work: asking the Europeans to step down from the position of natural protagonist of history."],
      ["读完之后，我发现自己不太关心皮萨罗为什么能打败阿塔瓦尔帕了。我更想知道，如果西班牙人从未抵达安第斯山脉，我们今天会怎样书写那片土地的历史，会不会同样认真地研究印加人的道路、梯田、仓储与宗教，把他们的制度创新看作人类文明的重要成就，而不只是一场著名征服的背景。这些问题，戴蒙德没有必要替我回答。我想做得更彻底一些：我甚至不希望由欧洲人的到来，来决定哪些人的历史值得被讲述。",
       "After finishing, I found I no longer cared much why Pizarro was able to defeat Atahualpa. I wanted to know how we would write the history of that land today if the Spaniards had never reached the Andes, whether we would study the Inca roads, terraces, storehouses and religion with the same seriousness, and regard their institutional innovations as important achievements of human civilization, not merely the backdrop to a famous conquest. Diamond has no need to answer these questions for me. I want to go further: I do not even want the arrival of the Europeans to decide whose history is worth telling."],
      ["我想读的那本书，大概就从安第斯山坡上的梯田开始，一层一层往上。",
       "The book I would like to read probably starts with the terraces on an Andean slope, one level rising above the next."]
    ]
  },
  {
    "date": "2017-05-03",
    "title": "The Self-Deception of the Lucid",
    "slug": "the-self-deception-of-the-lucid",
    "category": "Philosophy",
    "book": {
      "cover": "either_or.jpg",
      "title": "Either/Or",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, first published 1843",
        "Part I gathers the papers of an aesthetic young man, from the “Rotation of Crops” to “The Seducer’s Diary,” and shows a life lived at a distance from choice."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["先说《轮作法》。审美者在里面靠不断改变体验与观看世界的方式，抵御无聊。他并不缺洞察力，他太擅长观察、分析和解释生活，以至于现实本身也成了可以保持距离的审美对象。他拥有理解生活的自由，缺的是选择生活的勇气。读《非此即彼》第一卷，最令我不安的，是审美者这种以清醒逃避生活的能力，克尔凯郭尔对享乐主义的批判倒在其次。",
       "Start with “Rotation of Crops.” There the aesthete fends off boredom by constantly changing how he experiences and looks at the world. He does not lack insight; he is so good at observing, analyzing and explaining life that reality itself becomes an object of contemplation to be kept at a distance. He has the freedom to understand life and lacks the courage to choose it. What unsettled me most in the first volume of *Either/Or* was this ability of the aesthete to use lucidity to escape life; Kierkegaard’s critique of hedonism came second."],
      ["再是《诱惑者日记》。约翰内斯把爱情变成一场精心设计的审美实验。从《轮作法》的机智与冷漠，到这里的精密与残酷，审美者的才华与空虚始终缠在一起。我觉得这一卷最出色的地方，是克尔凯郭尔让审美者用自己的声音暴露自己的困境，没有站在道德高处简单地谴责。他最深的洞察在于，一个人不需要愚昧或放纵才会陷入绝望，过度的聪明、敏感与自我意识，同样可以成为逃避存在的工具。这使《非此即彼》超出了普通的道德说教，成为对现代人精神困境的心理剖析。",
       "Then “The Seducer’s Diary,” where Johannes turns love into a carefully designed aesthetic experiment. From the wit and coldness of the first essay to the precision and cruelty of this one, the aesthete’s talent and emptiness stay intertwined. I think the finest thing about this volume is that Kierkegaard lets the aesthete expose his own predicament in his own voice, without condemning from a moral height. His deepest insight is that one does not need ignorance or indulgence to fall into despair, and that excessive cleverness, sensitivity and self-consciousness can just as well be tools for evading existence. This lifts *Either/Or* above ordinary moral preaching and makes it a psychological dissection of the spiritual predicament of modern people."],
      ["然后是我住的硅谷，以及眼下近乎狂热的人工智能浪潮。我时常怀疑那些关于创新、颠覆与改变世界的宏大叙事：高昂的薪酬、精致的职业身份、不断膨胀的技术想象，真的对应着同等的社会价值吗？我们热衷展示创造力，强调工作的革命性，却未必认真追问这些成果改善了谁的生活。有时我觉得这里与琼·狄迪恩笔下的好莱坞相差不远，人们沉迷于自己创造的神话，好像叙事只要足够动人，现实就不再重要。",
       "Then Silicon Valley, where I live, and the almost feverish wave of artificial intelligence. I often doubt the grand narratives of innovation, disruption and changing the world: do the high salaries, polished professional identities and ever-expanding technological imaginations really correspond to an equal measure of social value? We love to show off our creativity and stress how revolutionary our work is, yet do not necessarily ask in earnest whose lives these results improve. Sometimes I feel the place is not so different from Joan Didion’s Hollywood, where people are absorbed in the myths they have made, as if reality no longer mattered once the story is moving enough."],
      ["我自己也在其中，这一点最难。我批判这个体系的虚荣，同时享受它给我的财富、身份与机会；我怀疑职业成功的意义，同时认真规划晋升、投资回报与财务自由。我可以在思想上否定这些标准，生活中却仍依赖它们。更难承认的是，我接受这些规则，也因为我诚心渴望成功带来的认可与安全感。我批判的正是我追求的，我鄙视的虚荣早已成了自我认同的一部分。",
       "I am in it myself, and that is the hardest part. I criticize the vanity of this system while enjoying the wealth, status and opportunities it gives me; I doubt the meaning of professional success while earnestly planning promotions, investment returns and financial freedom. I can reject these standards in thought and still depend on them in life. Harder to admit, I accept the rules partly because I sincerely long for the recognition and security that success brings. What I criticize is exactly what I pursue, and the vanity I despise has long since become part of my sense of who I am."],
      ["我曾以为财务自由能让我最终摆脱这个矛盾。积累足够的财富，就不必再依赖职业身份，不再被薪酬和绩效定义，可以去读书、写作、旅行，做那些值得花时间的事。克尔凯郭尔让我怀疑，这是不是另一种更精致的逃避。我一直在计算离自由还有几年，却很少追问，为什么我看重的事情必须等到未来才能开始。也许我是在用对未来生活的想象，安抚自己对现在的不满。",
       "I used to think financial freedom would finally free me from this contradiction. With enough wealth I could stop relying on a professional identity, stop being defined by pay and performance, and turn to reading, writing, travel and the things worth my time. Kierkegaard made me suspect this is just another, more refined kind of escape. I keep counting how many years remain until freedom, yet rarely ask why the things I value must wait for the future to begin. Perhaps I am using the image of a future life to soothe my dissatisfaction with the present one."],
      ["这正是审美者的处境：总是保留可能性，迟迟不肯把它变成现实，因为选择意味着放弃，意味着接受平凡、重复与不可逆转的后果。我对财务自由的向往，大概也藏着同样的愿望，想拥有足够多的选择，又不必立刻付出其中任何一种的代价。我要世俗的成功，也要超越世俗的精神独立；要体系的回报，又不肯承认自己依附于它；想同时做参与者与旁观者，不愿接受两者之间消除不掉的冲突。",
       "This is the aesthete’s situation exactly: he keeps possibilities open and is slow to turn them into reality, because a choice means giving something up and accepting the ordinary, the repetitive and the irreversible consequences. My longing for financial freedom probably hides the same wish, to have plenty of options without paying the price of any one of them right now. I want worldly success and a spiritual independence above the world; I want the system’s rewards and will not admit my dependence on it. I want to be participant and spectator at once, and I refuse to accept the conflict between the two that cannot be removed."],
      ["再有就是写这篇东西的时刻本身。我能看穿硅谷的幻象，批判自己的功利，还能把这种自我批判写成一篇看上去很深刻的哲学随笔。这不正是审美者的做法吗？约翰内斯把爱情转化成艺术，我可能把自己的虚伪转化成了思想。本该推动我改变的不安，到头来成了一种值得欣赏的智识体验。承认矛盾不需要我放弃任何东西，还给了我一个比盲目追逐成功更优雅的自我形象。",
       "And there is the moment of writing this very piece. I can see through the illusions of Silicon Valley, criticize my own utilitarianism, and even write that self-criticism up as a seemingly profound philosophical essay. Isn’t that precisely what the aesthete does? Johannes turns love into art, and I may be turning my own hypocrisy into thought. The unease that should have pushed me to change becomes, in the end, an intellectual experience to be admired. Admitting the contradiction costs me nothing, and it gives me a more elegant self-image than blindly chasing success."],
      ["最精致的自我欺骗，大概是相信自己已经看穿了这个虚假的世界，所以不必再改变。我在思想上反抗整个世界，行动上完全服从它；不断质疑成功的意义，仍然害怕失去成功；清醒地描述生活的荒谬，继续过着和昨天没有区别的生活。我的清醒没有使我摆脱幻象，它成了我心安理得留在里面的理由。",
       "The most refined self-deception may be believing I have already seen through a false world and so no longer need to change. I rebel against the whole world in thought and obey it completely in action; I keep questioning the meaning of success and still fear losing it; I describe the absurdity of life lucidly and go on living exactly as I did yesterday. My lucidity has not freed me from illusion. It has become the reason I can stay inside it with a clear conscience."],
      ["我也要对这本书说一句保留的话。它呈现审美生活时，有一种刻意的极端化。审美、反思与保持距离，未必意味着逃避责任；怀疑既有的价值，也可能是通向自主选择的必经之路。在一个把职业成功、生产效率与社会认可奉为圭臬的时代，不轻易许诺，有时是值得珍惜的独立。克尔凯郭尔的力量，在逼读者分辨自己的怀疑出自思想上的诚实，还是出自不愿承担选择后果的怯懦，他并没有证明审美生活注定失败。",
       "I also have a reservation about the book. It presents the aesthetic life with a certain deliberate exaggeration. Aesthetic sensibility, reflection and distance do not necessarily mean evading responsibility, and doubting inherited values may be a necessary step toward autonomous choice. In an age that treats professional success, productivity and social approval as gospel, refusing to commit too readily can be an independence worth treasuring. Kierkegaard’s strength lies in forcing the reader to work out whether their doubt springs from intellectual honesty or from a cowardly unwillingness to bear the consequences of choosing. He never proves the aesthetic life doomed."],
      ["克尔凯郭尔也没有要我们放弃美、财富或世俗生活。第一卷揭示的是，当反思与审美成了逃避选择的方式，一个人精神世界再丰富，也可能始终没有成为自己。对我，问题不在要不要离开硅谷，放弃现有的职业与财富，而在我是否愿意承认自己的选择，并为我声称相信的价值付出实际的代价。留下可以是一种选择，离开也可以。真正的逃避，是永远站在两者之间，用批评保持精神上的距离，让惯性替我决定人生。",
       "Kierkegaard is not asking us to give up beauty, wealth or worldly life either. What the first volume reveals is that when reflection and aesthetics become ways of avoiding choice, a person, however rich an inner world they have, may never become themselves. For me the question is not whether to leave Silicon Valley or give up my career and wealth, but whether I am willing to acknowledge my choices and bear the actual cost of the values I claim to believe in. Staying can be a choice, and so can leaving. The real evasion is to stand forever between the two, keeping a spiritual distance through criticism while inertia decides my life for me."],
      ["合上书，我知道得很清楚自己不想成为怎样的人，日子却仍照那个人的方式过着。清醒不等于自由，自我批判也未必通向真实，这是《非此即彼》留给我的。它没有给我一个怎样生活的答案，我也再没法不加追问地相信自己的清醒。",
       "Closing the book, I know quite clearly what kind of person I do not want to be, and the days still go on in that person’s way. Lucidity does not mean freedom, and self-criticism does not necessarily lead to authenticity; that is what *Either/Or* left me with. It did not hand me an answer about how to live, and I can no longer trust my own lucidity without question."]
    ]
  },
  {
    "date": "2017-10-10",
    "title": "From Aesthetic Escape to the Duty of Love",
    "slug": "from-aesthetic-escape-to-the-duty-of-love",
    "category": "Philosophy",
    "book": {
      "cover": "works_of_love.jpg",
      "title": "Works of Love",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, first published 1847",
        "A series of Christian deliberations on loving one’s neighbor, in which love is measured by deeds and duty rather than by feeling."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["克尔凯郭尔在《爱的作为》里触到的，是思想与行动之间的裂隙。他讲爱邻人，讲的是具体的责任。他不满足于把爱看成一种情感、吸引或精神体验。《非此即彼》里那个把生活不断变成审美对象的人，在这里被要求走出自己，承认别人不是自己情感与思想的附属品。爱不取决于我如何感受自己，取决于我如何对待另一个人。这个转变逼我重新审视自己追求的成功、自由与人生意义。",
       "What Kierkegaard touches in *Works of Love* is the rift between thought and action. He speaks of loving the neighbor, and what he speaks of is concrete responsibility. He is not content to treat love as a feeling, an attraction or a spiritual experience. The person in *Either/Or* who keeps turning life into an aesthetic object is asked here to step out of himself and recognize that others are not appendages of his feelings and thoughts. Love does not depend on how I feel about myself. It depends on how I treat another person. The shift forced me to re-examine the success, freedom and meaning in life that I pursue."],
      ["这让我想起自己。我常批评人工智能行业夸大创新、效率与社会价值，说很多人沉迷于改变世界的叙事，忽略了真实的人。但能指出这个矛盾，不等于我已经越过它。我也享受高薪、职业认可与财富，也容易把成功当作自己价值的证明。我能准确分析社会的问题，却未必肯拿出自己的时间与利益，去改善某一个人的处境。我分析得再准，也替代不了这一点。",
       "It made me look at myself. I often criticize the AI industry for exaggerating innovation, efficiency and social value, and say many people are absorbed in changing the world while neglecting real people. But pointing out the contradiction does not mean I have moved beyond it. I too enjoy a high salary, recognition and wealth, and I too treat success as proof of my worth. I can analyze society’s problems accurately and still not be willing to give my time and interests to improve one particular person’s situation. No amount of accurate analysis stands in for that."],
      ["思想上的同情太容易了，现实里的责任却很重。我们甚至会因为自己怀着这些高尚的关切，得到一点道德上的满足，然后觉得自己已经关心过了。",
       "Sympathy in thought is so easy, and responsibility in reality so heavy. We even take a little moral satisfaction in the fact that we hold such noble concerns, and then feel that we have already cared."],
      ["我想要的财务自由也该放在这里看。我希望将来摆脱工作的约束，能读书、旅行，自己支配时间。这些愿望本身没有错。但如果自由到头来只是不用再回应任何人的要求，我就得问它通向哪里。我积累财富，是为了有更多爱与担责的能力，还是为了有一天不被任何人打扰，我现在还说不清。",
       "The financial freedom I want belongs here too. I hope to be free of work one day, to read and travel and spend my time as I please. There is nothing wrong with those wishes. But if freedom comes down to no longer having to answer anyone’s demands, I have to ask where it leads. Whether I am accumulating wealth to have more capacity to love and bear responsibility, or so that one day nobody can disturb me, I cannot yet say."],
      ["这本书我最佩服的一点，是它不肯把爱简化成对自己的高尚感觉。爱邻人，意味着对象不能只限于让我愉快、与我相似、或能回报我的人。爱不挑选值得欣赏的人，它承认每个人都有一种不该被个人偏好抹去的价值。而且爱不能停在思想和语言里，要落到行为上。",
       "What I admire most in the book is that it will not reduce love to a noble feeling about oneself. Loving the neighbor means the objects of love cannot be limited to those who please me, resemble me or can repay me. Love does not pick out people worthy of admiration; it recognizes that everyone has a value that personal preference should not erase. And love cannot stay in thought and words. It has to show up in deeds."],
      ["有一处我想追问。克尔凯郭尔把基督教的爱之诫命放在正中，爱因此有了超越个人情感的普遍性，也留下一个难题：爱一旦成了义务，还能不能保有亲密关系里的自发、激情与独特？对所有人的平等关怀很重要，可我们对伴侣、家人、朋友的特殊责任，未必能全部装进爱邻人的普遍原则。他想调和两者，张力并没有消失。",
       "There is one place where I want to push back. Kierkegaard puts the Christian commandment of love at the center, which gives love a universality beyond personal feeling, and leaves a difficulty: once love is a duty, can it still keep the spontaneity, passion and uniqueness of intimate relationships? Equal care for everyone matters, but the special responsibilities we bear toward partners, family and friends may not fit entirely inside the universal principle of neighbor-love. He tries to reconcile the two, and the tension stays."],
      ["在我看来，这本书的分量不在于给出容易照做的道德准则，在于换掉了衡量人生的尺子。一个人可以有深刻的思想、锐利的批判和令人羡慕的成就，面对最基本的人际责任时仍然贫乏。《非此即彼》问我有没有选择自己的生活。这本书接着问，我的生活里有没有给别人留位置。",
       "To me the book’s weight lies less in giving moral rules that are easy to follow than in swapping the ruler by which a life is measured. A person can have profound thoughts, a sharp critical mind and enviable achievements and still look poor before the most basic interpersonal responsibilities. *Either/Or* asks whether I have chosen my own life. This book goes on to ask whether my life has any room left for others."],
      ["我们太会谈论爱、理解爱，甚至欣赏自己富有同情心的样子，却不愿付出爱要求的具体代价。我可以在思想里关怀整个世界，在行动上忽略身边的人。克尔凯郭尔让我看清，检验一个人的，大概不是他的社会批判有多深刻。是另一个人需要他的时候，他愿意拿出什么。这一点，我自己就常常站不稳。",
       "We are good at talking about love, understanding love, even admiring our own compassionate image, and unwilling to pay the concrete cost love asks. I can care for the whole world in thought and neglect the people beside me in action. Kierkegaard made me see that what tests a person is probably not how profound a social critique he can offer. It is what he is willing to hand over when someone else needs him. On this point I often stand on shaky ground myself."]
    ]
  },
  {
    "date": "2019-11-27",
    "title": "When the Self Becomes Its Own Prisoner",
    "slug": "when-the-self-becomes-its-own-prisoner",
    "category": "Philosophy",
    "book": {
      "cover": "sickness_unto_death.jpg",
      "title": "The Sickness Unto Death",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, first published 1849",
        "A close analysis of despair as the self’s failure to rightly become itself, and of faith as the way out."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["开头几十页，《致死的疾病》读得很慢。概念高度抽象，论证绕着自我、意识与绝望一圈圈地转，有时显得晦涩，也有点重复。可我慢慢看出这种近乎执拗的分析是它的力量所在。克尔凯郭尔不急着安慰人，他一层层剥掉我们用来解释和保护自己的理由。和《非此即彼》借人物与叙事展现存在困境不同，这本书用近乎严酷的概念分析，逼读者面对自我与自身的关系。它的价值不在给我一套令人安心的生活哲学，在让那些看似理所当然的自我认知重新变得可疑。",
       "The first few dozen pages of *The Sickness Unto Death* go slowly. The concepts are highly abstract, the argument circles around the self, consciousness and despair, and at times it seems obscure and a little repetitive. But I am beginning to see that this almost stubborn analysis is where its strength lies. Kierkegaard is in no hurry to console; he strips away, layer by layer, the reasons we use to explain and protect ourselves. Unlike *Either/Or*, which shows existential predicaments through characters and narrative, this book uses nearly harsh conceptual analysis to force the reader to face the self’s relation to itself. Its value lies not in offering a reassuring philosophy of life, but in making seemingly self-evident self-understanding doubtful again."],
      ["读到他把人说成有限与无限、可能性与必然性的综合，自我则是这种关系对自身的反思。我停下来，把这句话又读了一遍。自我意识并不天然意味着自由，这是目前最让我信服的一点，也是我以前读到“自由”二字时最容易跳过的一点。一个人可能沉进无限的可能性里，失去现实生活的根基；也可能被既定的身份与处境捆住，忘了自己还能改变。",
       "Now he describes the human being as a synthesis of the finite and the infinite, of possibility and necessity, and the self as the relation relating itself to itself. I stop and read the sentence again. That self-consciousness does not naturally mean freedom is what convinces me most so far, and the point I used to skip fastest whenever I read the word freedom. A person may sink into infinite possibilities and lose their footing in real life, or be bound by given identities and circumstances and forget that they can still change."],
      ["绝望，他说，不单来自某种缺失，来自自我内部关系的失衡。这个说法放不下。我们既逃不出自己的处境，也不可能只凭意志造出一个完全独立于现实的自己。两头缺哪一头，自我都站不稳。",
       "Despair, he says, does not simply come from some lack; it comes from an imbalance in the self’s inner relations. I cannot put this down. We can neither escape our situation nor create, by will alone, a self wholly independent of reality. Lose either side and the self cannot stand."],
      ["然后是他区分不同的自我关系，我觉得这是全书最精彩的地方。软弱的绝望表现为不愿成为自己，反抗的绝望是执意以自己的力量成为自己。后一种我读了两遍。一个人看似摆脱了外界评价，独立意识很强，却可能只是把自己变成了新的权威。他不肯接受自身的有限，想做自己存在的最终设计者，甚至把对命运的反抗当成身份的基础。越坚持绝对自主，越摆脱不了那个必须由自己创造、证明和维持的自我。",
       "Then he distinguishes different relations to the self, which I take to be the most brilliant part of the book. The despair of weakness shows itself as being unwilling to be oneself; the despair of defiance as insisting on becoming oneself by one’s own strength. I read the second one twice. A person who seems to have shed outside judgment and has a strong sense of independence may merely have made themselves the new authority. They refuse to accept their own finitude, try to be the final designer of their own existence, even make defiance of fate the basis of their identity. The more they insist on absolute autonomy, the less they can escape the self that has to be created, proved and maintained by themselves alone."],
      ["我忍不住拿这段去对照自己的工作。从大学毕业到进入新的环境，我一直把重要的成就当作人生阶段性的答案：理想的工作、更大的责任、别人的认可，似乎都说明我在接近想成为的那个人。可每实现一个目标，满足感很快被新的要求取代。我开始想下一次晋升、下一项成果，以及怎样证明自己仍配得上这些机会。本该带来肯定的成就，成了继续苛求自己的理由。这个循环我不是不知道，只是很难彻底跳出来。",
       "I cannot help holding this passage up against my own career. From graduating from university to entering new working environments, I have treated important achievements as provisional answers to my life: an ideal job, greater responsibility, others’ recognition all seemed to say I was getting closer to the person I hoped to become. Yet each time a goal is reached, the satisfaction is quickly replaced by new demands. I start thinking about the next promotion, the next result, and how to prove I still deserve these opportunities. Achievements that should bring affirmation become reasons to keep demanding more of myself. It is not that I am unaware of the cycle; I just find it hard to break out of it completely."],
      ["还有一层更细的矛盾，写在这里有点难为情。我不愿成为完全由职业身份定义的人，看重阅读、哲学和独立思考，也想对社会的成功标准保持怀疑。但我有时用同样的成就逻辑衡量自己的精神生活：读了多少书，懂了多少思想，是不是比以前成熟，判断是不是更独立。连自我反思，也可能被收进一个持续进步的叙事。我想靠不断完善自己得到自由，渐渐发现，那个必须不断变得更好的自己，也许正是我不得安宁的原因。",
       "There is a subtler contradiction, and writing it down is a little embarrassing. I do not want to be defined entirely by a professional identity; I value reading, philosophy and independent thinking, and I hope to stay skeptical of society’s standards of success. But sometimes I measure my inner life by the same logic of achievement: how many books I have read, how many ideas I have understood, whether I am more mature than before, whether my judgment is more independent. Even self-reflection can be folded into a narrative of continuous progress. I try to gain freedom by constantly perfecting myself, and I gradually find that the self that must always become better may be exactly why I cannot find peace."],
      ["这个矛盾在日常里也看得见。旅行、读书、和家人待在一起，本来是暂时放下目标与效率的时候，我却常不自觉地想怎样更充分地用这段时间，怎样让一次经历更有意义，好像只有产生了能被记住、解释或证明的价值，这段时间才没有被浪费。可生活里最珍贵的部分，往往没法提前规划，也不一定能变成成果。我想自由地生活，又放不下对自由本身的管理。",
       "I see the same contradiction in ordinary days. Traveling, reading or being with family should be moments of temporary release from goals and efficiency, yet I often catch myself thinking about how to make fuller use of the time, how to make an experience more meaningful, as if time is not wasted only when it produces value that can be remembered, explained or proved. But the most precious parts of life often cannot be planned in advance, and may not be convertible into any result. I want to live freely, yet find it hard to give up managing freedom itself."],
      ["接近后半部分，他的答案出来了：自我只有和建立它的力量，也就是上帝，建立起正确的关系，才能摆脱绝望。这个宗教性的结论让分析有了完整的结构，我却有点保留。对无法接受基督教信仰的人，难道就没有和自己和解的可能了？我更愿意从中读出对绝对自我主宰的质疑：人也许永远不能全靠自己的意志、理性与成就确立自己，因为我们的存在始终受他人、历史、偶然与有限生命的制约。当然，这样世俗化的读法，取代不了他原本的神学立场。",
       "Nearer the second half his answer arrives: the self can escape despair only by relating rightly to the power that established it, that is, God. This religious conclusion gives the analysis a complete structure, and I find myself holding something back. For those who cannot accept Christian faith, is there no possibility of being reconciled with oneself? I would rather read in it a questioning of absolute self-mastery: perhaps a person can never establish themselves wholly through their own will, reason and achievements, because our existence is always conditioned by other people, history, contingency and finite life. Of course this secularized reading cannot replace his original theological position."],
      ["快读完了，我在想，我们对自由的追求，是不是常建立在一个无法实现的愿望上：有一天彻底理解自己、掌握生活，成为不再矛盾、不再依赖任何外部条件的人。可人的存在本来就是有限、依赖与不确定的，那自由大概不在消除这些条件，在学会与它们共处。我们那么执着于成为理想中的自己，很少问为什么现实中的自己总是不值得被接受。最难逃出的那座牢，在克尔凯郭尔笔下好像不在外面，就是一个人与自己没完没了的对抗。我想在这里停一下，再看看自己白天是怎么对待自己的。这一段我还没想完，先往下读。",
       "Nearly finished, and I am wondering whether our pursuit of freedom is so often built on an unattainable wish: that one day we will fully understand ourselves, master our lives and become people who no longer contradict themselves or depend on any external condition. But if human existence itself means finitude, dependence and uncertainty, then freedom probably lies not in eliminating these conditions but in learning to live with them. We are so fixated on becoming our ideal selves, and rarely ask why the actual self never seems worthy of acceptance. The hardest prison to escape, in Kierkegaard’s picture, does not seem to be outside at all; it is a person’s unending struggle against himself. I want to pause here and look again at how I treat myself during the day. I have not finished thinking this through, and I read on."]
    ]
  },
  {
    "date": "2019-12-07",
    "title": "Between Losing and Regaining",
    "slug": "between-losing-and-regaining",
    "category": "Philosophy",
    "book": {
      "cover": "fear_and_trembling_repetition.jpg",
      "title": "Fear and Trembling / Repetition",
      "author": "Søren Kierkegaard",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, both first published 1843",
        "Two companion works: Abraham’s sacrifice of Isaac as a test of faith, and a young man’s failed attempt to repeat a happy trip to Berlin."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我一直相信，理性规划能够使人获得更大的自由。无论是职业发展、家庭生活，还是对未来的安排，我都习惯于分析风险、比较选择，并尽可能为各种结果做好准备。我曾将这种能力视为成熟与责任感的体现：一个人只有充分掌握自己的生活，才能更从容地承担对他人的责任。然而，克尔凯郭尔让我意识到一个更深刻的悖论：我越是努力为未来消除不确定性，就越可能失去面对不确定性的勇气。原本帮助我承担风险的理性，逐渐变成了推迟承担风险的理由。",
       "I have always believed that rational planning gives a person greater freedom. Whether in career, family life or arrangements for the future, I am used to analyzing risks, comparing options and preparing for every outcome as far as I can. I took this ability as a sign of maturity and responsibility: only someone who fully commands their life can bear responsibility for others with ease. But Kierkegaard made me see a deeper paradox: the harder I work to remove uncertainty from the future, the more likely I am to lose the courage to face uncertainty. The reason that was meant to help me bear risk has gradually become a reason to postpone it."],
      ["这种矛盾在亲密关系与家庭生活中尤其明显。我希望为所爱的人创造稳定的生活，因此习惯于提前考虑各种可能出现的问题。但爱与责任并不是一份能够通过充分准备来保证结果的契约。我们可以规划共同的未来，却无法保证彼此永远不会改变；可以尽力保护家人，却无法替他们安排命运。我曾以为，承担责任意味着尽可能避免失去，如今却开始怀疑，真正的责任是否恰恰意味着明知可能失去，仍然愿意毫无保留地投入其中。",
       "This contradiction is especially plain in intimate relationships and family life. I want to create a stable life for the people I love, so I am used to thinking ahead about every problem that might arise. But love and responsibility are not a contract whose outcome can be guaranteed by thorough preparation. We can plan a shared future, but cannot guarantee that we will never change; we can do our best to protect our family, but cannot arrange their fate for them. I used to think that bearing responsibility meant avoiding loss as far as possible. Now I begin to wonder whether real responsibility means, precisely, knowing one may lose and still being willing to give oneself in without reserve."],
      ["《恐惧与战栗》中亚伯拉罕的困境，使这种矛盾显得格外尖锐。无限弃绝的骑士能够接受失去，而信仰的骑士却在放弃一切的同时，仍然相信自己将重新获得所爱之物。克尔凯郭尔所描述的信仰，并不是对结果的乐观预测，而是一种无法从理性计算中推导出来的存在姿态。我当然无法将自己的日常选择与亚伯拉罕的宗教考验等同，但这个故事让我意识到，我所追求的确定性，可能恰恰是我不愿面对选择本身的表现。我希望先知道某种付出最终值得，再决定是否付出；希望先确认一段生活不会令我后悔，再允许自己真正选择它。",
       "Abraham’s predicament in *Fear and Trembling* makes this contradiction especially sharp. The knight of infinite resignation can accept loss, while the knight of faith, even as he gives up everything, still believes he will receive back what he loves. The faith Kierkegaard describes is not an optimistic prediction of outcomes but a way of existing that cannot be derived from rational calculation. I cannot, of course, equate my everyday choices with Abraham’s religious trial, but the story made me realize that the certainty I seek may be precisely a way of refusing to face choice itself. I want to know first that a sacrifice will turn out to be worth it, and only then decide whether to make it; I want to be sure a life will not leave me with regrets before I allow myself to really choose it."],
      ["而《重复》则从另一个方向揭示了这种困境。康斯坦丁试图通过重返柏林恢复过去的快乐，却发现相同的条件无法产生相同的体验。这让我意识到，理性能够帮助我们安排生活的外部条件，却无法保证生活本身的意义。我们可以精心规划一次旅行、一段关系，甚至未来几十年的人生，却无法确保那些真正重要的体验会如期发生。更重要的是，当现实不再符合最初的期待，我们是否仍然能够重新肯定自己的选择？重复并不是让过去原样归来，而是追问人在经历变化与失去之后，是否仍然可能重新获得自己的生活。",
       "*Repetition* reveals the same predicament from another direction. Constantin tries to recover a past happiness by returning to Berlin, only to find that the same conditions do not produce the same experience. This made me realize that reason can help us arrange the external conditions of life but cannot guarantee its meaning. We can carefully plan a trip, a relationship, even the decades ahead, but cannot make sure the truly important experiences will arrive as scheduled. More important, when reality no longer matches our first expectations, can we still affirm our choice anew? Repetition is not the past returning as it was, but a question: after change and loss, is it still possible to regain one’s own life?"],
      ["我逐渐发现，自己真正渴望的或许并不只是自由，而是一种不必承担自由之代价的自由。我希望拥有充分的选择权，却不愿放弃其他可能；希望建立持久的关系，却害怕不可逆转的承诺；希望生活充满意义，却又期待意义能够在行动之前得到证明。于是，我不断为未来创造更好的条件，却始终保留着一个理由：现在还不是完全投入的时候。我以为自己是在为生活作准备，却可能只是把准备本身变成了生活。",
       "I gradually find that what I truly crave may not be freedom alone, but a freedom that does not have to pay freedom’s price. I want full choice without giving up the other possibilities; lasting relationships without the fear of irreversible commitment; a life full of meaning, but with the meaning proved before I act. So I keep creating better conditions for the future while always keeping one reason in reserve: now is not yet the time to commit fully. I thought I was preparing for life, but I may only have turned the preparation itself into my life."],
      ["这或许才是两部作品对我最深刻的挑战。理性的局限并不意味着我们应该放弃判断，更不意味着盲目信仰值得赞美。恰恰相反，理性能够帮助我们理解选择的后果，却无法替我们完成选择；能够揭示风险，却无法消除存在本身的不确定性。我不需要停止规划，而是需要承认规划终究有其边界。真正的成熟，也许不是终于拥有足够的能力，使自己不再需要冒险，而是在已经尽力思考之后，仍然愿意承担那些无法保证结果的责任。",
       "This may be the deepest challenge the two works pose to me. The limits of reason do not mean we should give up judgment, still less that blind faith deserves praise. On the contrary, reason can help us understand the consequences of a choice but cannot make the choice for us; it can reveal risk but cannot remove the uncertainty of existence itself. I do not need to stop planning; I need to admit that planning has its limits. Real maturity may not be finally having enough capability that one no longer needs to take risks, but being willing, after thinking as hard as one can, to bear responsibilities whose outcomes cannot be guaranteed."],
      ["我一直努力让自己变得足够自由，以便有一天能够毫无顾虑地选择生活；但如果真正的自由只能通过选择来实现，那么我是否正在以追求自由之名，无限推迟自由本身？",
       "I have been working hard to make myself free enough that one day I can choose life without any misgivings; but if real freedom can only be realized through choosing, am I, in the name of pursuing freedom, endlessly postponing freedom itself?"]
    ]
  },
  {
    "date": "2015-09-19",
    "title": "Rules Still Need People",
    "slug": "rules-still-need-people",
    "category": "History",
    "book": {
      "cover": "the_nine.jpg",
      "title": "The Nine",
      "author": "Jeffrey Toobin",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · English original, first published 2007",
        "An inside account of the U.S. Supreme Court from the 1980s to the mid-2000s, told through the justices and the cases that divided them."
      ]
    },
    "place": "于华盛顿州贝尔维尤\nBellevue, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["美国最高法院在我的想象中，曾经代表着一种近乎理想化的制度理性：九位大法官依据宪法、先例与法律原则，对社会最复杂的争议作出最终判断。法律似乎应当超越个人的情绪、政治立场与时代偏见。然而，杰弗里·图宾在《九人》中揭示的，却是一个远比这种想象更加复杂的世界。那些决定宪法意义的人，同样拥有自己的信念、野心、友谊、偏见与局限。我们设计制度，是为了限制个人偏见与权力的任意性；但制度的解释、运行与维护，又不可避免地依赖那些需要被限制的人。",
       "In my imagination, the U.S. Supreme Court once stood for an almost idealized institutional reason: nine justices, guided by the Constitution, precedent and legal principle, delivering final judgment on society’s most complicated disputes. Law, it seemed, should rise above personal emotion, political allegiance and the prejudices of an age. But what Jeffrey Toobin reveals in *The Nine* is a world far more complicated than that. The people who decide what the Constitution means have their own convictions, ambitions, friendships, biases and limits. We design institutions to restrain personal bias and the arbitrariness of power; yet the interpreting, running and upholding of those institutions inevitably depends on the very people who need restraining."],
      ["《九人》最出色的地方，是它将最高法院从抽象的法律机构还原为一个充满人际关系、思想冲突与权力互动的现实组织。尤其是桑德拉·戴·奥康纳与安东尼·肯尼迪在诸多案件中的关键地位，使我意识到，宪法的实际意义不仅取决于文本本身，也取决于解释者如何理解自由、平等与国家权力。同一部宪法，在不同法官手中，可能产生截然不同的法律结论。制度试图消除个人意志的任意性，却又不得不赋予少数个人决定制度意义的巨大权力。",
       "The best thing about *The Nine* is that it turns the Supreme Court from an abstract legal body back into a real organization full of personal relationships, clashes of ideas and play of power. The pivotal position of Sandra Day O’Connor and Anthony Kennedy in so many cases in particular made me realize that the practical meaning of the Constitution depends not only on its text but on how its interpreters understand liberty, equality and state power. The same Constitution in different judges’ hands can yield very different legal conclusions. The institution tries to remove the arbitrariness of individual will, yet has to give a few individuals enormous power to decide what the institution means."],
      ["2000年的 *Bush v. Gore* 或许是这种悖论最鲜明的体现。佛罗里达州总统选举结果极其接近，各地对争议选票的人工重新计票缺乏统一标准。最高法院认为，这种差异违反了平等保护原则，而五位大法官最终认定，在既定期限内无法完成符合宪法要求的重新计票，从而使选举争议得到终结。问题在于，法院原本是为了维护选票平等而介入，却通过终止重新计票，作出了具有决定性政治后果的裁决。多数意见强调程序一致性，异议意见则质疑为何不能通过统一标准继续计票。法律程序究竟是在保护民主，还是在特定时刻限制了民主程序本身？这一案件最令人不安的，不只是它影响了总统选举结果，而是司法权威必须依靠自身的解释，来决定自己介入政治争议的边界。",
       "*Bush v. Gore* in 2000 may be the sharpest embodiment of this paradox. The Florida presidential result was extremely close, and the manual recounts of disputed ballots lacked uniform standards across the state. The Court held that these differences violated equal protection, and five justices finally concluded that a constitutionally adequate recount could not be completed within the deadline, which brought the election dispute to an end. The problem is that the Court stepped in to protect the equality of votes, yet by halting the recount it issued a ruling with decisive political consequences. The majority stressed procedural consistency, while the dissenters asked why the count could not continue under a uniform standard. Was legal procedure protecting democracy, or, at that moment, limiting democratic process itself? What is most disturbing about the case is not only that it affected the outcome of a presidential election, but that judicial authority must rely on its own interpretation to decide where its intervention in political disputes should stop."],
      ["1992年的 *Planned Parenthood v. Casey* 则揭示了另一种制度张力。法院以五比四的结果保留了 *Roe v. Wade* 所承认的堕胎权核心，同时以“不当负担”标准取代了原有的孕期框架，并允许宾夕法尼亚州的大部分限制措施继续实施。奥康纳、肯尼迪与苏特共同撰写的意见，尤其强调遵循先例对于法院制度正当性的重要意义。然而，先例究竟应当在多大程度上约束法官？如果先前的裁决被认为存在错误，维护制度稳定是否仍然值得优先考虑？这里的矛盾在于，遵循先例原本是为了限制法官个人判断，但决定何时坚持、何时推翻先例，本身又需要法官作出判断。法律的连续性并非自动产生，而是依赖解释者对稳定与变革的权衡。",
       "*Planned Parenthood v. Casey* in 1992 reveals another institutional tension. By a vote of five to four the Court preserved the core of the abortion right recognized in *Roe v. Wade*, while replacing the original trimester framework with an “undue burden” standard and allowing most of Pennsylvania’s restrictions to stand. The joint opinion of O’Connor, Kennedy and Souter stressed in particular how important adherence to precedent is to the Court’s institutional legitimacy. But how far should precedent bind judges? If an earlier ruling is thought to be wrong, is institutional stability still worth putting first? The contradiction is that following precedent exists to limit judges’ personal judgment, yet deciding when to hold to precedent and when to overturn it itself requires judges to exercise judgment. The continuity of law does not arise automatically; it depends on interpreters weighing stability against change."],
      ["2003年的 *Lawrence v. Texas* 进一步展示了司法解释如何改变自由的边界。最高法院以六比三推翻了得克萨斯州禁止成年人私下自愿同性性行为的刑事法律，并推翻1986年的 *Bowers v. Hardwick* 判例。肯尼迪撰写的多数意见强调个人尊严、自由与私人生活不应受到不当刑事干预，而斯卡利亚的异议则批评法院以自身判断取代民主立法。这使我意识到，宪法中的自由并不是一个完全静止的概念。法官必须决定哪些个人行为属于国家不得干涉的领域，而这种决定不可避免地涉及对社会价值与个人自主的理解。司法解释既可能保护少数人的权利免受多数意志侵害，也必须面对自身民主正当性的质疑。",
       "*Lawrence v. Texas* in 2003 shows further how judicial interpretation can move the boundaries of liberty. By six to three the Court struck down a Texas criminal law banning private, consensual same-sex sexual conduct between adults, and overruled the 1986 precedent *Bowers v. Hardwick*. Kennedy’s majority opinion stressed that personal dignity, liberty and private life should not suffer improper criminal interference, while Scalia’s dissent criticized the Court for substituting its own judgment for democratic legislation. This made me realize that liberty in the Constitution is not a wholly static concept. Judges must decide which personal conduct lies in a domain the state may not enter, and that decision inevitably involves an understanding of social values and individual autonomy. Judicial interpretation may protect minority rights from the will of the majority, but it must also face doubts about its own democratic legitimacy."],
      ["同样是在2003年，*Grutter v. Bollinger* 展现了平等原则内部的冲突。密歇根大学法学院在招生中将种族作为综合评价的因素之一，最高法院以五比四认定，在当时的严格审查框架下，该政策可以服务于学生群体多样性的重大教育利益。奥康纳撰写的多数意见试图在禁止种族歧视与承认历史和现实差异之间寻找平衡。然而，平等究竟意味着政府必须完全忽略种族，还是在某些条件下允许考虑种族，以回应既有的不平等？两种立场都可能援引宪法的平等保护原则，却导向不同的政策结果。这一案件让我看到，制度并不能单凭“平等”这样的抽象原则解决争议，因为真正的分歧往往发生在原则如何被定义和实践的层面。值得注意的是，该案确立的相关招生规则后来已在2023年的判决中被实质性推翻，这也进一步说明宪法解释并非一成不变。",
       "Also in 2003, *Grutter v. Bollinger* displays a conflict within the principle of equality. The University of Michigan Law School used race as one factor in a holistic review of applicants, and by five to four the Court held that, under the strict scrutiny framework of the time, the policy could serve a compelling educational interest in a diverse student body. O’Connor’s majority opinion tried to find a balance between prohibiting racial discrimination and acknowledging historical and present differences. But does equality mean that government must ignore race altogether, or may it, under certain conditions, take race into account to respond to existing inequality? Both positions can invoke the Constitution’s equal protection principle and lead to different policy results. This case showed me that an institution cannot settle disputes by an abstract principle like “equality” alone, because the real disagreement usually lies in how the principle is defined and put into practice. It is worth noting that the admissions rules the case established were later substantially overturned in a 2023 decision, which further shows that constitutional interpretation is not fixed."],
      ["2005年的 *Roper v. Simmons* 则将这一问题延伸至死刑。最高法院以五比四裁定，对犯罪时未满十八岁的人执行死刑违反第八修正案禁止残酷和非常刑罚的原则。肯尼迪的多数意见考虑了未成年人的责任能力、美国各州的法律实践，以及国际社会的相关标准；斯卡利亚等人的异议则反对法院过度依赖法官对社会共识与道德进步的判断。宪法中的“残酷”究竟应当按照制定时的理解解释，还是随着社会道德观念的变化而发展？如果宪法意义可以演变，谁有权判断这种演变已经发生？如果宪法意义完全固定，法律又如何回应新的社会认识？这一案件让我意识到，司法解释既需要历史的约束，也无法完全回避当下的道德判断。",
       "*Roper v. Simmons* in 2005 extends the question to the death penalty. By five to four the Court held that executing people who were under eighteen at the time of their crimes violates the Eighth Amendment’s ban on cruel and unusual punishment. Kennedy’s majority opinion considered the culpability of minors, the practice of the states, and relevant international standards; Scalia and the other dissenters objected that the Court relied too heavily on judges’ own sense of social consensus and moral progress. Should “cruel” in the Constitution be read as it was understood when written, or evolve as moral ideas in society change? If constitutional meaning can evolve, who has the right to judge that it has? If it is entirely fixed, how can law respond to new social understanding? This case made me realize that judicial interpretation needs the discipline of history and yet cannot wholly avoid present moral judgment."],
      ["2006年的 *Hamdan v. Rumsfeld* 则从另一个方向展示了司法制度的必要性。面对反恐战争中行政权力的扩张，最高法院以五比三认定，布什政府为关塔那摩被拘押者设立的军事委员会缺乏充分法律授权，其程序也不符合相关军事法律与《日内瓦公约》共同第三条的要求。这个案件提醒我，司法权力虽然同样受到个人判断的影响，却也是限制其他国家权力的重要机制。总统可以援引国家安全与战争需要，国会可以制定授权规则，而法院则必须判断行政行为是否超越法律边界。权力制衡并不是让任何一个机构完全摆脱政治，而是让不同机构的权力彼此受到约束。制度的价值，恰恰可能体现在这些不完美的权力之间持续存在的张力之中。",
       "*Hamdan v. Rumsfeld* in 2006 shows the necessity of the judicial system from another direction. Faced with the expansion of executive power in the war on terror, the Court held by five to three that the military commissions the Bush administration set up for Guantánamo detainees lacked sufficient legal authorization and that their procedures did not meet the requirements of the relevant military law and Common Article 3 of the Geneva Conventions. The case reminds me that judicial power, though equally shaped by individual judgment, is also an important mechanism for restraining other state powers. The president can invoke national security and the needs of war, Congress can write rules of authorization, and the courts must judge whether executive action exceeds the bounds of law. Checks and balances do not free any one institution from politics; they let the powers of different institutions bind one another. The value of the system may lie precisely in the continuing tension among these imperfect powers."],
      ["将这些案件放在一起，我逐渐意识到，司法制度最深刻的矛盾并不是法官偶尔受到政治影响，而是法律原则本身经常无法直接决定唯一的答案。平等可能意味着相同待遇，也可能要求关注现实差异；自由既可能需要司法保护，也可能与民主立法发生冲突；遵循先例能够维护稳定，却也可能延续错误；国家安全需要行政效率，却不能因此取消法律约束。法律并非缺少原则，而是不同原则之间的冲突，最终仍然需要人来判断。",
       "Putting these cases together, I gradually realized that the deepest contradiction of the judicial system is not that judges are occasionally swayed by politics, but that legal principles themselves often cannot dictate a single answer. Equality may mean identical treatment, or may require attention to real differences; liberty may need judicial protection, or may collide with democratic legislation; following precedent preserves stability but may perpetuate error; national security calls for executive efficiency but cannot cancel legal constraint. Law does not lack principles; it is that conflicts among principles in the end still have to be judged by people."],
      ["这种认识也让我重新审视自己对理性与制度的信任。我习惯于相信，清晰的规则、充分的证据与严谨的程序，能够帮助人们克服主观偏见。但我也逐渐发现，即使所有人都声称遵循相同的原则，他们对问题的定义、证据的选择以及价值的排序，仍然可能截然不同。更值得警惕的是，我自己也未必能够始终保持客观。当某项裁决符合我的价值判断时，我更容易赞赏法官的勇气与独立；当结果与我的立场相反时，我又可能指责他们将个人信念凌驾于法律之上。我所尊重的究竟是司法独立本身，还是司法独立恰好产生了我所赞同的结果？",
       "This realization also made me re-examine my trust in reason and institutions. I used to believe that clear rules, sufficient evidence and rigorous procedure could help people overcome subjective bias. But I gradually found that even when everyone claims to follow the same principles, they may define the problem, select the evidence and rank values in very different ways. More worrying, I may not always be objective myself. When a ruling fits my values, I am readier to praise the judges’ courage and independence; when the result runs against my position, I may accuse them of putting personal belief above the law. What do I actually respect: judicial independence itself, or judicial independence when it happens to produce results I agree with?"],
      ["不过，我也认为图宾的叙事存在值得警惕的局限。他擅长通过法官的性格、私人关系与思想冲突解释重大裁决，使复杂的法律历史具有小说般的可读性，却也容易让读者过度关注人物动机，而忽略法律论证自身的力量。他对温和派法官的欣赏，以及对保守派司法运动的批判，构成了全书鲜明的叙事立场。但一个法官的判断是否正当，不能仅凭其政治后果或个人背景来决定。司法理念之间存在真实而严肃的分歧，不能将所有分歧都还原为党派利益。尤其考虑到本书出版于2007年，它更适合作为理解特定历史阶段最高法院的政治与制度史，而非解释当代所有司法争议的完整框架。",
       "I also think Toobin’s narrative has limits worth being wary of. He is good at explaining major rulings through the judges’ characters, private relationships and clashes of ideas, giving a complicated legal history the readability of a novel, but this also makes it easy for readers to focus too much on personal motives and overlook the force of legal argument itself. His admiration for the moderate justices and his criticism of the conservative judicial movement give the book a distinct narrative stance. But whether a judge’s judgment is legitimate cannot be decided by its political consequences or the judge’s background alone. Real and serious disagreements exist between judicial philosophies, and not all of them can be reduced to partisan interest. Especially since the book was published in 2007, it serves better as a political and institutional history of the Court in a particular period than as a full framework for explaining every contemporary judicial dispute."],
      ["在我看来，《九人》最重要的贡献，是它既揭示了司法制度的脆弱，也让这种脆弱变得可以理解。制度不可能消除人性，因为制度本身就是由人设计、解释和维护的。真正成熟的制度，并不是假设掌权者永远公正，而是承认他们可能犯错、存在偏见，甚至滥用权力，并通过公开论证、程序约束、先例、异议意见与权力制衡，尽可能限制这些风险。九位大法官并非宪法真理的化身，他们的权威也不应来自个人的道德完美，而应来自其判断能够接受持续的法律与公共检验。",
       "To my mind, the most important contribution of *The Nine* is that it exposes the fragility of the judicial system and also makes that fragility understandable. An institution cannot eliminate human nature, because institutions are themselves designed, interpreted and upheld by people. A truly mature institution does not assume that those in power are always just; it admits that they may err, be biased, even abuse power, and tries to limit these risks through open argument, procedural constraint, precedent, dissenting opinions and checks and balances. The nine justices are not embodiments of constitutional truth, and their authority should come not from personal moral perfection but from the fact that their judgments can withstand continuing legal and public scrutiny."],
      ["读完《九人》，我对司法权威的理解不再那么理想化，却也并未因此走向犬儒。承认法律无法完全摆脱政治，不等于认为所有裁决都只是政治；承认法官具有个人偏见，也不意味着法律原则失去了独立价值。真正困难的，是在尊重制度的同时保有批判制度的能力，在质疑具体裁决的同时不轻易否定法治本身。我们建立制度，是因为不敢将权力完全托付给任何一个人；但制度最终仍然需要由人来守护。这不是制度可以彻底解决的缺陷，而是法治必须永远面对的条件。",
       "After finishing *The Nine*, my understanding of judicial authority is less idealized, but I have not turned cynical because of it. Admitting that law cannot fully escape politics does not mean believing that every ruling is merely political; admitting that judges have personal biases does not mean legal principles lose their independent value. The real difficulty is to keep the capacity to criticize an institution while respecting it, and to question particular rulings without lightly dismissing the rule of law itself. We build institutions because we dare not entrust power wholly to any one person; yet institutions in the end still have to be guarded by people. This is not a flaw that institutions can fully cure, but a condition the rule of law must always face."]
    ]
  },
  {
    "date": "2020-06-19",
    "title": "Philosophers Are Only Human",
    "slug": "philosophers-are-only-human",
    "category": "History",
    "book": {
      "cover": "existentialist_cafe.jpg",
      "title": "At the Existentialist Café",
      "author": "Sarah Bakewell",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "History · English original, first published 2016",
        "Sartre, Beauvoir, Heidegger, Camus, Merleau-Ponty and others, and the lives and quarrels behind existentialism and phenomenology."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1. 1933年，巴黎一家咖啡馆里，三个年轻人在谈哲学。雷蒙·阿隆向萨特介绍德国现象学，指着桌上的杏子鸡尾酒，说哲学甚至可以从眼前这杯酒开始。",
       "1. Paris, 1933, a café, three young people talking philosophy. Raymond Aron introduces Sartre to German phenomenology, points at the apricot cocktail on the table, and says philosophy can begin even with the drink in front of him."],
      ["2. 这个场景被反复讲述，几乎概括了《存在主义咖啡馆》的全部魅力。哲学可以始于一杯酒、一段爱情、一场争吵，或一个人对自己所处世界的困惑。",
       "2. The scene gets retold again and again, and it almost sums up the whole charm of *At the Existentialist Café*. Philosophy can begin with a drink, a love affair, a quarrel, or one person’s bewilderment about the world they find themselves in."],
      ["3. 贝克韦尔没有把萨特、波伏娃、海德格尔、加缪和梅洛-庞蒂写成永远正确的巨人。他们有欲望、偏见、嫉妒，也会犯错。",
       "3. Bakewell does not make Sartre, Beauvoir, Heidegger, Camus and Merleau-Ponty into giants who are always right. They have desires, prejudices and jealousy, and they make mistakes."],
      ["4. 他们谈自由，感情关系却纠缠不清；批判社会的虚伪，未必能诚实面对自己；想理解历史，到了历史的关键时刻又作出截然不同的政治选择。哲学成了这些人理解、辩护、有时也误解自己生活的方式。",
       "4. They talk about freedom and keep falling into tangled emotional relationships. They criticize society’s hypocrisy and cannot always face themselves honestly. They try to understand history, and at its critical moments make very different political choices. Philosophy becomes the way these people understood, justified and sometimes misunderstood their own lives."],
      ["5. 萨特与波伏娃的关系最让我感兴趣。他们想用自由与坦诚重新定义亲密，拒绝传统婚姻的占有与排他，实践中却造成了复杂的感情伤害。自由并没有自动带来平等。把波伏娃关于他者与女性处境的思想，和她自己的生活放在一起读，会碰到一个耐人寻味的矛盾：一个人能提出很深的伦理问题，却未必能在私人生活里答好它们。",
       "5. The relationship between Sartre and Beauvoir interested me most. They tried to redefine intimacy through freedom and candor, rejecting the possessiveness and exclusivity of traditional marriage, and in practice they caused complicated emotional harm. Freedom did not automatically bring equality. Read Beauvoir’s thinking on the Other and on women’s situation next to her own life, and you meet an intriguing contradiction: a person can raise very profound ethical questions and still fail to answer them well in private."],
      ["6. 海德格尔更让人不安。他关于本真性、死亡与日常沉沦的思考深刻影响了二十世纪哲学，他却公开支持纳粹政权。对人的处境分析得这样敏锐，政治判断为什么会错得这样严重？",
       "6. Heidegger is more disturbing. His thinking on authenticity, death and everyday fallenness deeply shaped twentieth-century philosophy, and he publicly supported the Nazi regime. Why would someone who analyzed the human condition so acutely judge politics so gravely wrong?"],
      ["7. 贝克韦尔不拿他的哲学成就替政治开脱，也不因政治污点否认他的影响。她让矛盾一直摆在那里，这比简单的道德审判有力。",
       "7. Bakewell does not excuse his politics by his philosophical achievements, and does not deny his influence because of his political stain. She lets the contradiction sit there, and that has more force than a simple moral verdict."],
      ["8. 我对梅洛-庞蒂的认同更强。萨特强调自由选择，梅洛-庞蒂提醒我们，人首先是有身体、有历史、有具体处境的存在。我们不是站在世界之外作决定的纯粹意识，早已身在世界之中。判断受经验塑造，行动受环境限制，连对自己的理解也离不开他人的目光。这种哲学没有否认自由，只是去掉了过于英雄主义的想象。",
       "8. I identify more strongly with Merleau-Ponty. Sartre stresses free choice; Merleau-Ponty reminds us that a person is first of all a being with a body, a history and a concrete situation. We are not pure consciousnesses standing outside the world and deciding. We are already in it. Our judgments are shaped by experience, our actions limited by circumstance, and even our understanding of ourselves cannot be separated from the gaze of others. This philosophy does not deny freedom. It only drops an overly heroic picture of it."],
      ["9. 我曾经很欣赏那种不受外界影响、完全按自己判断生活的人，现在越来越觉得，这种独立从未存在过。我的教育、职业、家庭，连读过的书，都在塑造我的价值判断。我自以为独立的思想，也许只是许多外部影响在我身上形成的一种独特组合。承认这一点，不等于放弃自主，只是不再把独立当成彻底摆脱他人的状态。",
       "9. I used to admire people who lived entirely by their own judgment, untouched by outside influence. Now I increasingly think that kind of independence never existed. My education, my career, my family, even the books I have read keep shaping my values. What I take for independent thought may simply be a distinctive combination of many outside influences coming together in me. Admitting this does not mean giving up autonomy. It only means I no longer take independence for a state of being completely free of other people."],
      ["10. 贝克韦尔不把哲学家的私生活当作无关紧要的轶事。友谊破裂、政治立场转变、爱情里的矛盾，常常给抽象概念添上更丰富的意义。萨特与加缪决裂，不只是性格冲突，也映出两人对革命暴力、历史责任与政治道德的不同理解。存在主义从来不只关乎个人怎样面对荒诞，它始终连着二十世纪欧洲的战争、极权主义和社会变革。",
       "10. Bakewell does not treat the philosophers’ private lives as irrelevant anecdote. Broken friendships, shifts of political position and contradictions in love often give abstract concepts a richer meaning. The break between Sartre and Camus was more than a clash of personalities. It reflected their different understandings of revolutionary violence, historical responsibility and political morality. Existentialism was never only about how an individual faces the absurd. It was always tied to the wars, totalitarianism and social change of twentieth-century Europe."],
      ["11. 这种写法有危险。哲学史讲得这样生动，读者容易因为喜欢某位哲学家的性格而接受他的思想，或因为讨厌他的行为而否定他的理论。传记帮我们理解思想产生的背景，代替不了对思想本身的论证。萨特对不对，不取决于他的私人关系成不成功；海德格尔的政治错误需要严肃审视，却不能自动回答他的存在论是否成立。",
       "11. There is a danger in this way of writing. When the history of philosophy is told so vividly, readers can accept a thinker’s ideas because they like his personality, or reject his theory because they dislike his conduct. Biography helps us understand the background of ideas, but it cannot replace argument about the ideas themselves. Whether Sartre is right does not depend on whether his private relationships succeeded. Heidegger’s political errors demand serious scrutiny, yet they cannot automatically answer whether his ontology holds."],
      ["12. 书里的存在主义不是一套统一完整的学说。萨特的自由、波伏娃的伦理、梅洛-庞蒂的身体经验、加缪对荒诞与反抗的思考，彼此有真实的分歧。他们共享时代的问题，答案各不相同，不断争论、修正，甚至否定彼此，这种不一致反而让存在主义更真实。哲学是一群具体的人，在共同的历史处境里，一次又一次尝试理解自己面对的问题。",
       "12. The existentialism in this book is not a unified, complete doctrine. Sartre’s freedom, Beauvoir’s ethics, Merleau-Ponty’s bodily experience and Camus’s thinking on the absurd and revolt differ from one another in real ways. They share the questions of their time and give different answers. They keep arguing, revising and even denying one another, and that inconsistency makes existentialism seem all the more real. Philosophy here is a group of particular people, in a shared historical situation, trying again and again to understand the problems they face."],
      ["13. 读完以后，我不再那么急着寻找一套能指导人生的哲学体系。以前读哲学，总希望从每位思想家那里带走清晰的结论，以为理解得够深，就能形成更成熟、更完整的世界观。贝克韦尔让我看到，思想自己也有历史，有偶然，有没解决的矛盾。最伟大的哲学家，终其一生也未必能让思想与生活完全一致。",
       "13. After finishing, I am less eager to find a philosophical system that can guide my life. I used to hope to take a clear conclusion from each thinker, as if understanding deeply enough would give me a more mature, complete worldview. Bakewell showed me that thought has its own history, contingency and unresolved contradictions. Even the greatest philosophers may never, in a whole lifetime, bring thought and life fully into line."],
      ["14. 哲学家并不因为理解人生就超越了人生。我们当然可以要求他们为自己的行为负责，却不必指望他们成为自身理论的完美化身。读哲学有意思的地方，大概是看见比我们敏锐的头脑同样困惑、犹豫、犯错，仍在不完美的生活里努力理解世界。他们最值得读的地方，也许正是始终没能解决自己提出的问题。",
       "14. Philosophers do not transcend life by understanding it. We can of course hold them responsible for their conduct, without expecting them to be perfect embodiments of their own theories. What is interesting in reading philosophy is probably to see minds sharper than ours just as puzzled, hesitant and error-prone, still trying to understand the world within imperfect lives. What makes them most worth reading may be that they never fully solved the problems they raised."]
    ]
  },
  {
    "date": "2014-11-19",
    "title": "The Lives That Might Have Been",
    "slug": "the-lives-that-might-have-been",
    "category": "Art",
    "book": {
      "cover": "possible_life_boltanski.jpg",
      "title": "The Possible Life of Christian Boltanski",
      "author": "Christian Boltanski & Catherine Grenier",
      "language": "English",
      "country": "France",
      "original": "French",
      "lines": [
        "Art · French original, first published 2007",
        "A long conversation between the artist and the curator Catherine Grenier about his childhood, his work on memory and archives, and death."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["地板下面藏着一个人。那是纳粹占领下的巴黎，克里斯蒂安·波尔坦斯基的犹太裔父亲躲在自家地板的夹层里，躲避迫害。1944年，波尔坦斯基在这座城市出生。一个人真实地活着，却必须从公共世界里消失；他的存在被保存下来，却未必留下任何可靠的证据。他的艺术从这里开始。我们习惯相信，记忆是身份的基础，照片、文字和档案为记忆提供客观的证据。记忆若能被制造，档案若能被重新排列，同一段人生若能被讲成截然不同的故事，我们就很难再确信自己拥有一段真实而完整的人生。",
       "Someone is hiding under the floorboards. This is Paris under the Nazi occupation, and Christian Boltanski’s Jewish father lies in a space beneath the floor of the family home, escaping persecution. In 1944 Boltanski is born in the same city. A person can be truly alive and yet have to vanish from the public world; a person’s existence can be preserved without leaving any reliable evidence. His art begins here. We tend to believe that memory is the foundation of identity and that photographs, words and archives supply objective evidence for it. If memories can be manufactured, archives rearranged, and one life told as very different stories, it becomes hard to be sure we have a real and complete life."],
      ["凯瑟琳·格勒尼耶与艺术家做了一场很长的访谈，谈他的童年、创作与死亡，成了这本《The Possible Life of Christian Boltanski》。书名里有一个词我看了很多遍：“Possible”。一个人回头看亲身过过的生活，为什么只能称它为一种“可能的人生”？",
       "Catherine Grenier sits down with the artist for a very long conversation about his childhood, his work and death, and the conversation becomes *The Possible Life of Christian Boltanski*. One word in the title I keep coming back to: “Possible.” Why can a person looking back on the life they actually lived call it only a “possible life”?"],
      ["在《Recherche et présentation de tout ce qui reste de mon enfance, 1944–1950》里，童年留下的痕迹被摆出来，像档案研究那样，真实的记忆与人为的重构之间的界线就模糊了。桌上有一张照片，能证明某个人曾在某个地方，说不出他当时的感受。旁边有一件旧物，能证明某段生活留下过痕迹，还原不了那段生活的意义。证据能证明某件事发生过，我们后来赋予它的解释，它证明不了。",
       "In *Recherche et présentation de tout ce qui reste de mon enfance, 1944–1950*, the traces left from childhood are laid out in the form of archival research, and the line between real memory and artificial reconstruction blurs. On the table is a photograph, which can prove that someone was once in some place but not what they felt then. Beside it is an old object, which can prove that a life left a trace but cannot restore that life’s meaning. Evidence can prove that something happened. It cannot prove the interpretation we later give it."],
      ["再往前走是《Monuments》。旧照片与灯光组成近似宗教祭坛的装置，陌生人的面孔有了纪念碑式的庄严。另一处是《Réserve》，衣物堆起来，缺席的身体几乎又能被感觉到。越是努力用物件保存一个人，越清楚那个人已经不在其中。照片没有记忆，衣服没有生命。它们令人悲伤，是因为我们知道，没法从中把那个曾经存在的人要回来。",
       "Further on is *Monuments*. Old photographs and lights make installations that resemble religious altars, and strangers’ faces take on a monumental solemnity. Elsewhere is *Réserve*, where clothing is piled up and absent bodies seem almost perceptible again. The harder we try to preserve a person through objects, the clearer it becomes that the person is no longer in them. Photographs have no memory and clothes have no life. They are sad because we know we cannot get back, through them, the person who once existed."],
      ["我自己也拍照。旅行时按下快门，想留住一个值得记住的瞬间；后来翻旧照片，已经说不准当时是什么心情。有些画面很陌生，照片里的人像是另一个人。把同一段经历讲给别人听，看对方是谁、自己当时心情如何，我会强调不同的细节。讲得多了，记住的就不再是事情最初的样子，而是反复讲出来的那个版本。我以为自己在回忆过去，也许是在用现在的自己重新发明它。",
       "I take photographs too. When I travel I press the shutter to keep a moment worth remembering, and later, going through the old pictures, I cannot say exactly how I felt. Some images feel strange, as if the person in them were someone else. When I tell the same experience to others, I stress different details depending on who is listening and what mood I am in. After enough tellings, what I remember is no longer how things first happened but the version I have told again and again. I think I am recalling the past. Perhaps I am reinventing it with the self I am now."],
      ["人生常被讲成一条有方向的路，过去的每个选择都在为今天做准备。这种连贯往往是事后铺上去的。没实现的愿望、放弃的计划、偶然改变的决定，回头看时被整理成必然的成长。我可以把自己的职业经历讲成一连串深思熟虑的选择，也可以讲成机遇、环境和偶然共同作用的结果。两种讲法都含着事实，没有一种能完整代表我的人生。",
       "A life is often told as a road with a direction, each past choice preparing for today. That coherence is usually laid down after the fact. Unfulfilled wishes, abandoned plans and decisions changed by chance get arranged, in retrospect, into inevitable growth. I can tell my career as a series of carefully considered choices, or as the joint result of opportunity, circumstance and accident. Both versions contain facts, and neither can fully represent my life."],
      ["波尔坦斯基的作品问了一个比遗忘更令人不安的问题：过去若不能完整保存，能不能至少诚实地讲述它？我读到的回答并不乐观。记忆不是等人发掘的仓库，它是不断发生的重构。记住什么、忽略什么、怎样解释从前的自己，都受现在的欲望与价值判断影响。自传于是既记录过去，也塑造当下的身份。我们是过去的产物，也在不断造出一个能解释现在的过去。",
       "Boltanski’s work asks a question more unsettling than forgetting: if we cannot preserve the past in full, can we at least tell it honestly? The answer I read in it is not optimistic. Memory is not a storehouse waiting to be excavated. It is a reconstruction that keeps happening. What we remember and ignore, and how we explain our former selves, are shaped by present desires and value judgments. An autobiography both records the past and shapes present identity. We are products of the past, and we are also constantly making a past that can explain the present."],
      ["但我不想把这种不确定推到极端。模糊真实与虚构的手法很有感染力，在伦理上也有风险，尤其当作品触及大屠杀和集体创伤的时候，历史事实不会因为记忆带有主观性就失去客观的地位。个人如何记住历史，与历史发生过什么，是两个问题。档案不完整，仍能提供可检验的证据；叙述有选择，也不是所有叙述同样可信。记忆不可靠，该使我们更小心地分清事实与解释，不该成为否定历史真实的理由。",
       "Still, I do not want to push this uncertainty to the extreme. Blurring the real and the fictional is powerfully affecting and carries an ethical risk. When the work touches the Holocaust and collective trauma, historical fact does not lose its objective standing because memory is subjective. How an individual remembers history and what actually happened in history are two different questions. Archives are incomplete, yet they can still provide evidence that can be tested. Narratives are selective, but that does not make all of them equally credible. The unreliability of memory should make us more careful in distinguishing fact from interpretation, and should not serve as a reason to deny historical truth."],
      ["访谈的形式让我既喜欢，又有所保留。格勒尼耶用提问重建艺术家的人生，波尔坦斯基的回答不断露出这种重建的局限。他的幽默、矛盾和自我修正，把自传变成了一场艺术表演。可是艺术家握着解释自己作品的主要话语权时，要提防把他的自述当成作品的最终意义。一个人怎样理解自己，不一定比别人怎样理解他更接近全部真相。",
       "The interview form I both like and hold back on. Grenier tries to rebuild the artist’s life through questions, and Boltanski’s answers keep exposing the limits of the rebuilding. His humor, contradictions and self-corrections turn the autobiography itself into an artistic performance. But when the artist holds the main authority to explain his own work, we have to be wary of mistaking his self-narration for the final meaning of the work. How a person understands himself is not necessarily closer to the whole truth than how others understand him."],
      ["读到最后，我对“真实”这个词的理解变了。真实的人生可能确实存在，却不等于我们能记住、记录、讲述的那一个。我们留下的照片、文字和物件只是有限的证据，赋予它们的意义随时间改变。波尔坦斯基并没有证明人生是虚构的。人生的真实与人生的叙述之间，有一道弥合不了的距离。我们确实经历过那些时刻，只能通过残缺的记忆再靠近它们；确实拥有自己的过去，却无法拥有对它的最终解释。令人不安的，大概不是死后被别人忘记，而是活着的时候已经无法完整记住自己。最真实的部分，也许就是那些档案证明不了、故事整理不了、连自己也再记不准的生活，像地板下面的那些日子。",
       "By the end, my understanding of the word “real” has changed. A real life may well exist, but it is not the one we can remember, record or tell. The photographs, words and objects we leave are only limited evidence, and the meaning we give them shifts with time. Boltanski does not prove that life is fiction. Between the reality of a life and its narration there is a distance that cannot be fully closed. We did live through those moments and can only approach them again through broken memory. We do have a past of our own and cannot have a final interpretation of it. What is unsettling is probably not that others will forget us after we die but that, while alive, we can no longer fully remember ourselves. The truest part may be the life that no archive can prove, no story can arrange, and even we can no longer accurately recall, like those days beneath the floorboards."]
    ]
  },
  {
    "date": "2026-02-05",
    "title": "When All the Words Already Exist",
    "slug": "when-all-the-words-already-exist",
    "category": "Literature",
    "book": {
      "cover": "borges_conversations.jpg",
      "title": "博尔赫斯谈话录 (Conversations with Borges)",
      "author": "豪尔赫·路易斯·博尔赫斯 Jorge Luis Borges",
      "language": "Chinese",
      "country": "Argentina",
      "original": "Spanish",
      "lines": [
        "Literature · Chinese translation",
        "Borges in conversation on language, poetry, time and philosophy, moving from a casual detail into the deepest questions."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["日记里，我曾问自己写作时最在意什么。答案是埋头字里行间时，偶然冒出来的那一瞬灵光。我管它叫 *aura*，一种难以解释、也没法刻意制造的神韵。那些连篇累牍、删了又改的废话，几乎都是在等它。写作最迷人的，是某个时刻语言忽然说出了连自己之前都没完全意识到的东西，最后留下什么倒在其次。",
       "In my journal I once asked myself what I care about most when I write. The answer was the flash of inspiration that turns up by chance while I am lost in the lines. I call it *aura*, a quality hard to explain and impossible to manufacture on purpose. All the rambling, deleted and rewritten nonsense is almost entirely waiting for it. The most fascinating thing about writing is the moment when language suddenly says something I had not fully realized before, and what is finally left behind matters less."],
      ["两三年前我特别爱读博尔赫斯。那时ChatGPT刚开始露头，我立刻想到了他的《巴别图书馆》。图书馆里有一切可能的书：真实的历史、虚假的传记、还没写出来的诗，还有无穷无尽毫无意义的字符组合。它近乎神性地完整，并没有因此有智慧。真理可能全都在里面，找到真理、认出真理却几乎不可能。",
       "Two or three years ago I especially loved reading Borges. ChatGPT had just begun to emerge, and I thought at once of his “The Library of Babel.” The library holds every possible book: true histories, false biographies, poems not yet written, and endless meaningless combinations of characters. Its completeness is almost divine, and it is not wise for that. All truths may be inside it, but finding a truth and recognizing it are almost impossible."],
      ["人工智能也像这样一座有些神性、却没有神韵的图书馆。它以惊人的速度生成文章、诗歌和论证，仿佛无数可能的表达都等着被调用。语言丰富，经验未必丰富。它可以准确写出马黛茶的苦涩，可以巧妙地重现博尔赫斯梦里的老虎，图书馆自己却既喝不到，也抓不着。它能排列关于世界的文字，仅凭排列，得不到文字所指向的那种生活。",
       "AI is also such a library, somewhat divine and without *aura*. It generates essays, poems and arguments at astonishing speed, as if countless possible expressions were waiting to be called up. Richness of language is not necessarily richness of experience. It can describe the bitterness of mate with precision and recreate the tiger in Borges’s dream with skill, yet the library itself can neither drink it nor grasp it. It can arrange words about the world, and by arranging words alone it cannot have the life they point to."],
      ["我并不认为人工智能写不出令人惊讶、有美感的东西，也不想说意义只属于人类。让我在意的是，文本的生成和意义的发生是两回事。一句话可以形式上毫无错处，却没有碰到写的人想说的东西；一句偶然写下、甚至不够完美的话，却可能因为和某段具体经验有联系，有了替换不了的分量。所有可能的文本都能被生成的时候，要问的就不再是还能写出什么，而是为什么偏偏这些字，对某个人有意义。",
       "I do not think AI cannot produce surprising or beautiful work, and I do not want to say meaning belongs only to humans. What concerns me is that the generation of a text and the occurrence of meaning are different things. A sentence can be formally flawless and still miss what the writer wanted to say. A sentence written by chance, even an imperfect one, can gain irreplaceable weight through its tie to a specific experience. When every possible text can be generated, the question is no longer what else can be written but why these particular words mean something to a particular person."],
      ["《皮埃尔·梅纳尔，〈堂吉诃德〉的作者》里，一位后世作家写出了和塞万提斯完全相同的文字，同样的句子因为作者和时代不同，有了截然不同的意义。这是我读博尔赫斯最重要的一把钥匙：文字不独自拥有意义，意义也在写作的处境里，在阅读的历史里，在文字与世界之间不断变化的关系里。图书馆就算穷尽了所有可能的文本，也穷尽不了这些文本在不同生命中产生的意义。",
       "In “Pierre Menard, Author of the *Quixote*,” a later writer produces words identical to Cervantes’s, and the same sentences take on entirely different meanings because the author and the age differ. This is the most important key I have for reading Borges: words do not own meaning alone. Meaning also lives in the circumstances of writing, in the history of reading, and in the ever-changing relation between words and the world. Even if a library exhausted every possible text, it could not exhaust the meanings those texts produce in different lives."],
      ["《小径分岔的花园》里，时间不再是从过去通向未来的一条路，成了无数可能同时展开的迷宫；《另一个人》里，年轻的博尔赫斯和年老的博尔赫斯碰了面，个人身份的连续性于是变得可疑。谈话中的博尔赫斯也一再回到这些问题。他似乎总在怀疑，我们所说的过去究竟以某种完整的形式存在，还是只存在于不断变化的记忆里。一个人今天记得的童年，和十年前记得的童年，哪一个更真实？",
       "In “The Garden of Forking Paths,” time is no longer a single road from past to future but a labyrinth in which countless possibilities unfold at once. In “The Other,” the young and the old Borges meet, and the continuity of personal identity becomes doubtful. The Borges of the conversations returns to these questions again and again. He seems always to doubt whether what we call the past exists in any complete form or only in ever-changing memory. Which is more real, the childhood a person remembers today or the one they remembered ten years ago?"],
      ["这种对时间的怀疑，改变了我对 *aura* 的理解。它不一定来自前所未有的原创，机器生成的文字也不一定没有美感。它也许只是一个瞬间：某些早就存在的词语，因为和自己的经验发生了意想不到的联系，忽然变得替换不了。我们反复修改，不是因为世上缺好句子，是因为那些现成的句子还没变成自己的表达。",
       "This doubt about time changes how I understand *aura*. It does not necessarily come from unprecedented originality, and machine-generated words do not necessarily lack beauty. It may be only a moment when words that have long existed suddenly become irreplaceable because they connect unexpectedly with one’s own experience. We revise again and again, not because the world lacks good sentences, but because those ready-made sentences have not yet become our own expression."],
      ["《博尔赫斯谈话录》里，让我欣赏的是他面对文学时那种近乎游戏的自由。他谈语言、诗歌、时间和哲学，常常从一个看似随意的细节走进深不可测的问题。他不急着建立严密的体系，也不总想证明某种终极真理，更享受思想在不同作品、不同语言之间意外相遇的时刻。我因此觉得，读和写未必为了积累知识或生产观点，有时只是为了让一种还没被注意到的联系忽然显现。",
       "What I admire in *Conversations with Borges* is his almost playful freedom toward literature. He talks about language, poetry, time and philosophy, often entering unfathomable questions through a seemingly casual detail. He is in no hurry to build a rigorous system and does not always try to prove some ultimate truth. He prefers the moments when ideas meet unexpectedly across different works and languages. That makes me feel reading and writing are not necessarily for accumulating knowledge or producing opinions. Sometimes they are only for letting a connection we had not yet noticed suddenly appear."],
      ["不过，他处理文学的方式我并不全盘认同。他迷恋无限、镜像、迷宫和虚构的文本，智识上美得惊人，有时却把真实的身体、情感和历史推到了背景里。文学一直成为关于文学的文学，语言会不会也慢慢离开它原本想触及的世界？在人工智能的时代，这个疑问更尖锐。我们生产文本的能力越来越强，对现实的经验未必更丰富。文学若只是无限地引用、改写、重组自己，最后也会成为另一座精巧而封闭的图书馆。",
       "Still, I do not wholly agree with how he treats literature. His fascination with infinity, mirrors, labyrinths and fictional texts has a stunning intellectual beauty, yet it sometimes pushes real bodies, feelings and history into the background. When literature keeps becoming literature about literature, might language also drift away from the world it first tried to reach? In the age of AI the doubt sharpens. Our power to produce text keeps growing, and our experience of reality is not necessarily richer. If literature only quotes, rewrites and recombines itself without end, it too becomes another exquisite, closed library."],
      ["可博尔赫斯自己不断在抵抗这种过于简单的读法。他爱古老语言的声音、诗歌的节奏、马黛茶的滋味，还有一再出现在梦和记忆里的老虎。他的文学满是抽象的结构，也始终留着一些极私人、近乎固执的意象。它们动人，不只因为能被巧妙地写进故事，也因为它们属于一个具体的人理解世界的方式。巴别图书馆可以包含所有关于老虎的描述，却没有博尔赫斯对老虎的迷恋。",
       "Yet Borges himself keeps resisting this too-simple reading. He loved the sound of ancient languages, the rhythm of poetry, the taste of mate, and the tigers that recur in his dreams and memories. His literature is full of abstract structures and always keeps some deeply private, almost stubborn images. They move us not only because they can be cleverly written into stories but because they belong to one particular person’s way of understanding the world. The Library of Babel can contain every description of tigers and still lack Borges’s fascination with them."],
      ["这本谈话录也有它的局限。谈话里的机智不等于严密的论证，作者对自己作品的解释，也没有最终的权威。但我喜欢它的不完整。博尔赫斯在这里不再只是一个关于无限与时间的文学符号，他是一个仍然会被一个词、一首诗、一种声音打动的人。",
       "The book has its limits. Wit in conversation does not amount to rigorous argument, and an author’s explanation of his own work has no final authority. But I like its incompleteness. Here Borges is no longer only a literary symbol of infinity and time. He is a person who can still be moved by a word, a poem, a sound."],
      ["我曾以为，《巴别图书馆》最可怕的地方，是它包含所有可能的书，让有价值的文字淹没在无穷的废话里。现在我觉得，问题不全在文字太多，在于我们太容易把文字的存在当成意义的存在。图书馆可以有所有关于爱情、死亡与幸福的句子，它没有爱过，没有死过，也没有幸福过。写作还值得继续，因为这样一段生活，图书馆没法替我们过。",
       "I used to think the most terrifying thing about “The Library of Babel” was that it holds every possible book and drowns the valuable words in endless nonsense. Now I think the problem is not only too many words but how easily we take the existence of words for the existence of meaning. The library can hold every sentence about love, death and happiness. It has not loved, died or been happy. Writing is still worth continuing, because this is a life the library cannot live for us."]
    ]
  },
  {
    "date": "2019-11-08",
    "title": "The Beautiful Boulevard and the Cracks Behind It",
    "slug": "fin-de-siecle-vienna",
    "category": "History",
    "book": {
      "cover": "fin_de_siecle_vienna.jpg",
      "title": "Fin-de-Siècle Vienna",
      "author": "Carl E. Schorske",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · English original, first published 1980",
        "Schorske’s study of how Vienna’s liberal crisis shaped Freud, Klimt, Schoenberg and the birth of modern culture."
      ]
    },
    "place": "于瑞士卢加诺\nLugano, Switzerland",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["维也纳环城大道上，议会大厦用古希腊风格，市政厅借鉴哥特式，大学和剧院用历史主义的形式宣告知识与文化的权威。卡尔·舒尔斯克在《世纪末的维也纳》里，从这条大道讲起。",
       "On the Ringstrasse in Vienna, the Parliament takes a Greek style, the City Hall borrows from the Gothic, and the university and theaters proclaim the authority of knowledge and culture in historicist forms. Carl Schorske’s *Fin-de-Siècle Vienna* starts from this boulevard."],
      ["它是十九世纪自由派资产阶级理想的建筑表达。他们相信理性、教育、法治和进步，想靠文化教养建立现代社会的共同价值。整条大道像一座关于文明进步的纪念碑。壮丽也盖住了一个问题：自由主义的社会基础开始动摇之后，这些建筑展示的历史秩序还能代表现实吗？",
       "It was the architectural expression of the ideal of the nineteenth-century liberal bourgeoisie. They believed in reason, education, the rule of law and progress, and hoped to build the shared values of a modern society through cultivation. The whole boulevard was like a monument to civilizational progress. Its grandeur also hid a problem: once the social foundations of liberalism began to shake, could the historical order the buildings displayed still represent reality?"],
      ["同一时期的维也纳，弗洛伊德在探索梦与无意识，克里姆特在摆脱古典绘画的规范，勋伯格在动摇传统音乐的调性秩序，文学、建筑和哲学也在发生深刻的变革。这座孕育了现代主义的城市，也是自由主义衰退、民族主义兴起、反犹主义政治化的舞台。为什么一个社会文化上这样有创造力，政治上却逐渐走向分裂？这个悖论最吸引我：文明的创造力可以达到前所未有的高度，对自身的理解却同时陷入危机。",
       "In the same years Freud was exploring dreams and the unconscious, Klimt was breaking away from the rules of classical painting, Schoenberg was shaking the tonal order of traditional music, and literature, architecture and philosophy were all changing deeply. The city that nurtured modernism was also the stage for the decline of liberalism, the rise of nationalism and the politicization of antisemitism. Why would a society so creative culturally drift toward political division? This paradox drew me most: a civilization’s creativity can reach unprecedented heights while its understanding of itself falls into crisis."],
      ["舒尔斯克没有把维也纳的现代主义写成一群天才忽然出现的故事。他把文化创新放进了奥匈帝国自由主义的历史困境里。",
       "Schorske does not tell Viennese modernism as the sudden appearance of a group of geniuses. He places cultural innovation inside the historical predicament of Habsburg liberalism."],
      ["政治上，矛盾更直接。他分析了舍纳勒尔、卢埃格尔和赫茨尔，看大众政治怎样摆脱自由派精英推崇的理性讨论，转向民族身份、集体情绪和政治动员。卢埃格尔利用反犹主义，说明现代政治不会随教育普及和社会发展自动变得更理性。一个社会可以有先进的文化机构、高度发达的公共生活，同时让偏见成为有效的政治资源。文明得到之后，并不会永远保住。",
       "In politics the contradiction is more direct. He analyzes Georg von Schönerer, Karl Lueger and Theodor Herzl, and shows how mass politics broke away from the rational discussion liberal elites prized and turned to national identity, collective emotion and mobilization. Lueger’s use of antisemitism shows that modern politics does not grow more rational on its own as education spreads and society develops. A society can have advanced cultural institutions and a highly developed public life and still let prejudice serve as an effective political resource. Civilization, once gained, is not kept forever."],
      ["弗洛伊德把这场危机从公共世界带进了人的内心。舒尔斯克把《梦的解析》放回维也纳自由主义的政治与文化背景里，认为他对无意识、压抑和父权关系的探索，也是对旧的理性主体观念的挑战。启蒙传统相信人能靠理性理解并掌握自己，精神分析却说，我们连自己为什么这样想、这样做都未必完全知道。弗洛伊德没有抛弃科学理性，他用科学的方法，去研究理性无法直接掌握的领域。现代主义否定旧秩序，也在旧秩序失效之后，寻找新的解释方式。",
       "Freud carried this crisis from the public world into the human interior. Schorske reads *The Interpretation of Dreams* against the political and cultural background of Viennese liberalism, and suggests that Freud’s exploration of the unconscious, repression and the father relationship can also be seen as a challenge to the old idea of the rational subject. The Enlightenment tradition believed people could understand and master themselves through reason. Psychoanalysis said we cannot even fully know why we think and act as we do. Freud did not abandon scientific rationality. He used scientific methods to study a realm reason cannot directly command. Modernism negated the old order, and it also looked for new ways of explanation after the old order had failed."],
      ["克里姆特画得更直接。维也纳大学委托的三幅学院画，《哲学》《医学》《法学》，本该歌颂知识、科学和法律的权威，到了他笔下，却是一个充满欲望、死亡和不可控力量的人类世界。它们引起争议，不只因为形式大胆，也因为拒绝给自由主义社会它所期待的理性与进步的形象。艺术不再装饰文明，开始揭出文明解释不了的部分。",
       "Klimt painted this change more directly. The three faculty paintings commissioned by the University of Vienna, *Philosophy*, *Medicine* and *Jurisprudence*, were meant to celebrate knowledge, science and the authority of law. In his hands they show a human world full of desire, death and uncontrollable forces. They caused controversy for more than their formal boldness: they refused to give liberal society the image of reason and progress it expected. Art no longer decorated civilization. It began to expose what civilization could not explain."],
      ["读到这里，我想起了硅谷。我们也生活在崇尚创新、效率和技术突破的环境里。人工智能的进步令人惊叹，资本、人才和社会的注意力，以前所未有的速度集中到少数技术领域。新模型、新产品、新能力不断出现，好像技术发展的速度本身就足以证明社会在进步。我越来越怀疑，我们是不是在用技术创新的繁荣，遮住自己对社会价值的贫乏理解。模型性能、计算效率、商业增长，我们可以衡量得越来越准；这些进步改善了谁的生活，又让谁的处境更脆弱，却很难用同样严谨的方式回答。",
       "Reading this, I thought of Silicon Valley. We too live in an environment that prizes innovation, efficiency and technological breakthrough. The progress of artificial intelligence is astonishing, and capital, talent and public attention are concentrating on a few technical fields at unprecedented speed. New models, products and capabilities keep appearing, as if the pace of technology were itself proof that society is advancing. I increasingly suspect we are using the boom of technological innovation to cover a poor understanding of social value. We can measure model performance, computing efficiency and business growth ever more precisely. Whose lives these advances improve, and whose positions they make more vulnerable, we can hardly answer with the same rigor."],
      ["这种怀疑也来自我对行业内部文化的观察。在高度重视创新的环境里，创造新东西容易变成一种自我证明。人们不断强调工作的突破性、影响力和未来潜力，这些判断多半建立在行业内部形成的评价体系上。一项技术可以在专业指标上进步显著，对社会的价值却未必相当。所有人都用相似的语言赞美创新时，追问它的实际意义反而显得不合时宜。我有时觉得，这和舒尔斯克笔下的维也纳资产阶级有些相像：一个群体可以有高度精致的文化，却慢慢失去从外部审视自身价值的能力。",
       "This doubt also comes from what I have observed of the industry’s internal culture. Where innovation is valued so highly, creating something new easily becomes a form of self-justification. People keep stressing the breakthrough, impact and future potential of their work, and these judgments are mostly built on evaluation systems formed inside the industry. A technology can make remarkable progress on professional metrics without producing comparable value for society. When everyone praises innovation in similar language, questioning its actual meaning can seem out of place. I sometimes feel this resembles Schorske’s Viennese bourgeoisie: a group can have a highly refined culture and gradually lose the ability to examine its own values from outside."],
      ["两者也有区别。世纪末维也纳的现代主义者常借创作揭出文明的裂缝：弗洛伊德质疑理性主体的透明，克里姆特拒绝用和谐的图像盖住生命的混乱，勋伯格去探索传统调性之外的表达。他们的创新不总是为了证明社会在变好，常常来自对既有秩序的不信任。今天的科技产业更习惯把创新说成解决问题的力量。我们不只创造新的工具，还不断创造关于这些工具将怎样改变世界的宏大叙事。维也纳的现代主义试图打破进步的幻觉，硅谷的技术文化却可能正在制造一种新的幻觉。",
       "There is a difference between the two. The modernists of fin-de-siècle Vienna often used their work to expose the cracks in civilization. Freud questioned the transparency of the rational subject, Klimt refused to cover life’s disorder with harmonious images, and Schoenberg explored expression beyond traditional tonality. Their innovations were not always meant to prove that society was getting better, and often came from distrust of the established order. Today’s tech industry is more used to describing innovation as a force for solving problems. We create new tools, and we also keep creating grand narratives about how those tools will change the world. Viennese modernism tried to break the illusion of progress, while Silicon Valley’s technology culture may be producing a new one."],
      ["这个比较有局限。维也纳的艺术革命和今天的技术发展，历史条件、社会结构、实际影响都不同。人工智能、医学、工程的进步确实能创造重要的公共价值，不能因为产业有夸大的宣传，就否认技术本身的意义。需要警惕的是把创新等同于进步的习惯。技术能力的增长一旦被自动读成社会价值的增长，我们就可能丧失分辨两者的能力。",
       "The comparison has its limits. Vienna’s artistic revolution and today’s technological development differ in historical conditions, social structures and real impact. Progress in AI, medicine and engineering can create important public value, and we cannot deny the meaning of technology itself because the industry exaggerates its claims. What calls for vigilance is the habit of equating innovation with progress. Once growth in technical capability is automatically read as growth in social value, we may lose the ability to tell them apart."],
      ["这也让我重新看自己在技术环境里的位置。我可以批评行业对创新的过度赞美，同时享受这种文化给的机会、认可和物质回报。我看得见其中的夸张与自我陶醉，仍然愿意参与，有时还用同样的语言解释自己的工作。这不说明所有参与都虚伪，只是提醒我，批判一个体系和摆脱一个体系从来是两回事。一个人可以在思想上看穿一种时代的神话，生活里仍然依赖它给的意义。难的也许是，自身利益和批判判断冲突的时候，还能诚实地衡量自己工作的价值。",
       "This also made me look again at my own place in the tech world. I can criticize the industry’s excessive praise of innovation, and I also enjoy the opportunities, recognition and material rewards this culture provides. I can see its exaggeration and self-intoxication and still be willing to take part, sometimes even using the same language to explain my own work. That does not make all participation hypocritical. It reminds me that criticizing a system and escaping it are never the same thing. A person can see through the myth of an age in thought and still depend, in life, on the meaning it gives. The hard part may be to weigh the value of one’s own work honestly when self-interest conflicts with critical judgment."],
      ["作为历史研究，我欣赏舒尔斯克跨学科的能力。政治史、建筑史、精神分析、文学和音乐被他连在一起，读者能看到同一时代不同的文化形式怎样回应共同的问题。这种宏大的综合也有局限。弗洛伊德、克里姆特、勋伯格固然受维也纳社会环境影响，却不能完全解释成自由主义衰退的结果。艺术家有自己的美学传统、技术问题和个人追求，现代主义的发展也受跨国思想交流的影响。历史解释越优美完整，越要看它有没有把复杂的偶然整理成过于整齐的因果。",
       "As historical scholarship, I admire Schorske’s ability to cross disciplines. He ties together political history, architectural history, psychoanalysis, literature and music, and readers see how different cultural forms of one era answered shared problems. Such grand synthesis also has limits. Freud, Klimt and Schoenberg were certainly shaped by Vienna’s social environment, yet they cannot be fully explained as results of liberalism’s decline. Artists have their own aesthetic traditions, technical problems and personal pursuits, and modernism also developed through the international exchange of ideas. The more elegant and complete a historical explanation, the more we must check whether it has tidied complex contingency into too neat a chain of cause and effect."],
      ["这本书迫使人放弃过于简单的进步观。一个社会可以在某些领域不断突破，在另一些领域停滞；可以有惊人的创造力，却建立不起与之相称的公共信任和社会共识。技术与文化的发展值得赞美，替代不了对政治、伦理和社会责任的讨论。",
       "The book forces us to give up an overly simple view of progress. A society can keep breaking through in some fields while stagnating in others, and can have astonishing creative power without building a matching public trust and social consensus. The development of technology and culture is worth celebrating, but it cannot replace discussion of politics, ethics and social responsibility."],
      ["世纪末的维也纳提醒我，文明的精致与文明的健全是两回事。创新还在以惊人的速度继续，我想记着多问一句：它在解决什么问题。",
       "Fin-de-siècle Vienna reminds me that a civilization’s refinement and its health are two different things. Innovation is still continuing at astonishing speed, and I want to remember to ask one more thing: what problem is it solving?"]
    ]
  },
  {
    "date": "2020-10-11",
    "title": "What the Passport Taught Zweig",
    "slug": "what-the-passport-taught-zweig",
    "category": "Memoir",
    "book": {
      "cover": "world_of_yesterday.jpg",
      "title": "昨日的世界 (The World of Yesterday)",
      "author": "斯蒂芬·茨威格 Stefan Zweig",
      "language": "Chinese",
      "country": "Austria",
      "original": "German",
      "lines": [
        "Memoir · Chinese translation of Die Welt von Gestern, 1942",
        "Zweig’s memoir of the Europe he grew up in, from Vienna before 1914 to exile and the wars."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["护照又出现了。这在《昨日的世界》里已经不知是第几次。茨威格年轻时，欧洲人可以相对自由地过境；到了晚年，他得靠签证、居留许可和各种证明，才换来暂时停留的权利。读到这里我停了一会儿。听上去只是手续变多，可一个人原本凭活在世上就有的行动自由，变成了得不停证明自己有资格待在世界的某个角落。",
       "The passport is back. In *The World of Yesterday* I have lost count of how many times. In Zweig’s youth a European could cross borders with relative ease; in his later years he needed visas, residence permits and all kinds of papers to buy the right to stay for a while. I stop here for a moment. It sounds like nothing more than extra paperwork, but a freedom a person once had simply by being alive has turned into something he must keep proving he deserves, in whatever corner of the world he happens to stand."],
      ["我想把护照当作进入这本书的门。那些宏大的历史变故，被它压成了一个人和一个国家之间很具体的关系。语言、文化、记忆、名声、朋友，一样不少地带在身上，一夜之间仍可能失去合法的归属。国家能承认你是谁，也能让你无处可去。所谓文明社会的安全感，靠的是平时没人留意的各种许可。",
       "I want to use the passport as my way into the book. It squeezes the grand upheavals of history into one very concrete relation between a person and a state. Someone can carry language, culture, memory, reputation and friends, all of it, and still lose his legal belonging overnight. The state can recognize who you are, and it can also leave you with nowhere to go. The security of a civilized society rests on permissions nobody notices in ordinary times."],
      ["读到维也纳的部分，我开始有点不信。哈布斯堡晚期的维也纳，文学、音乐、哲学、艺术合成一个超越民族与政治的精神共和国，读着让人眩晕。可茨威格出身富裕的犹太资产阶级家庭，受过良好教育，经济上自由，进得了欧洲文化精英的圈子。他体会到的国境开放与文明宽容，帝国里的贫苦农民、产业工人、受民族压迫的人未必有过。他失去的那个世界，并不是人人都有过的。",
       "In the Vienna chapters I start to doubt him a little. Late Habsburg Vienna, where literature, music, philosophy and art make up a spiritual republic above nation and politics, is dizzying to read about. But Zweig came from a wealthy Jewish bourgeois family; he was well educated, financially free, and admitted to the circles of Europe’s cultural elite. The open borders and the tolerance he knew were not necessarily something the poor peasants, the industrial workers or the nationally oppressed of the empire ever had. The world he lost was not one everybody had owned."],
      ["这没有削弱书的价值，只让它更复杂。茨威格的悲剧不单是一个好时代被野蛮摧毁，也是一个相信文化进步能保障政治文明的人，终于发现两者之间没有必然的联系。一个社会可以有最杰出的音乐家、最精密的科学、最繁荣的出版业，仍然拦不住自己走向野蛮。我想这是他留给后人最值得想的问题。",
       "This does not lessen the book; it only makes it more complicated. Zweig’s tragedy is partly a good age destroyed by barbarism, and partly the discovery, by a man who trusted cultural progress to guarantee political civilization, that the two are not necessarily linked. A society can have the finest musicians, the most exact science and a flourishing press, and still fail to stop itself from sliding into barbarism. I think this is the question he leaves behind that most deserves thinking about."],
      ["顺着往下想。我们习惯把经济发展、技术进步、教育普及和社会文明看成同一个过程，好像财富越多人越理性，知识传得越广偏见越少，贸易越密切越打不起仗。二十世纪的欧洲没有这样走。铁路运旅客，也运被驱逐的人；现代官僚制度保障福利，也能系统地剥夺权利；大众传播促进交流，也让谎言有了前所未有的规模。文明的工具和文明的目的，从来不是一回事。",
       "I follow the thought further. We tend to treat economic growth, technical progress, schooling and civilization as one process, as if more wealth made people more rational, wider knowledge left less room for prejudice, and closer trade made war less likely. Twentieth-century Europe did not go that way. Railways carried passengers and also carried the deported; modern bureaucracy secured welfare and could also strip people of their rights in an orderly fashion; mass communication spread knowledge and gave lies a scale they never had before. The tools of civilization and its purposes have never been the same thing."],
      ["合上书想想今天。我们有跨国流动的资本，即时翻译，几乎无限的信息。一个人能在几个国家同时有资产，为另一个大陆的公司工作，和从没见过面的人实时交谈。世界在经济和技术上从未这样紧密。联系的密度，却不等于理解的深度。几秒钟就知道远方发生了什么，不见得更愿意理解那里的人。人的价值也越来越容易被换算成收入、产出、竞争力。我不反对这些衡量，现代社会离不开经济计算和技术理性。麻烦出在手段变成目的之后，我们越来越富，却越来越说不清什么样的生活值得过。",
       "I put the book down and think about today. Capital crosses borders, translation is instant, information is nearly unlimited. A person can hold assets in several countries, work for a company on another continent, and talk in real time with someone he has never met. The world has never been so tightly bound together in economic and technical terms. Yet density of connection is not depth of understanding. We learn in seconds what is happening far away and are not necessarily more willing to understand the people there. A person’s worth is also easier and easier to convert into income, output, competitiveness. I have no quarrel with these measures; a modern society cannot run without economic calculation and technical reason. The trouble starts when the means turn into the end, and we grow richer while finding it harder to say what kind of life is worth wanting."],
      ["回头说茨威格的局限。他对欧洲文化共同体感情很深，却似乎不肯承认，文化上的相互欣赏替代不了政治上的制度保障。一个人可以爱贝多芬而拥护战争，熟读歌德而接受对邻人的迫害。文学和艺术丰富人的感受，却不保证人会把这种感受变成对他人的尊重。所以我不愿只把这本书当作献给旧欧洲的挽歌。到晚年他仍然想不通：一个文化上如此成熟的社会，怎么会在政治和道德上垮得这么快？",
       "Back to Zweig’s limits. His feeling for the European cultural community is deep, yet he seems unwilling to grant that mutual admiration in culture cannot stand in for political guarantees. A man can love Beethoven and back a war, know Goethe by heart and accept the persecution of his neighbor. Literature and art enrich what people feel, but they do not promise that the feeling will turn into respect for others. So I don’t want to take this book only as an elegy for old Europe. Even late in life he could not work out how a society so mature in culture could collapse so fast, politically and morally."],
      ["他大概相信文明是一种可以积累的财富。我倒觉得它更像一种得不断去做的关系，要看一个社会怎么对待陌生人、少数者、失败者，以及那些拿不出明显经济价值的人。看的不是这个国家有多少伟大的作家，而是普通人不需要伟大作家替自己辩护的时候，还能不能保有基本的尊严。",
       "He seems to have believed that civilization is wealth you can accumulate. I lean toward thinking it is a relation you have to keep practicing. It shows in how a society treats strangers, minorities, losers, and people who cannot show any obvious economic value. What counts is not how many great writers a country has, but whether ordinary people, when no great writer is there to speak up for them, still keep their basic dignity."],
      ["读到末尾。他1942年在巴西结束了生命，没有等到欧洲战争结束。我们知道后来的事：战争终结，欧洲重建，新的国际秩序慢慢成形，他怀念的一些自由得到恢复，另一些以完全不同的制度形式回来了。但我不觉得这些能反过来证明他的绝望是错的。后人总容易把已经发生的结局，当成当时的人本该看见的希望。",
       "I reach the end. He took his own life in Brazil in 1942, before the war in Europe was over. We know what came after: the war ended, Europe was rebuilt, a new international order slowly took shape, some of the freedoms he missed returned and others came back in entirely different institutional forms. Still, I don’t think any of this proves his despair wrong. People who come later find it easy to treat an outcome that has already happened as a hope the people at the time ought to have seen."],
      ["我们今天也住在自以为稳固的秩序里。相信职业、财产、国籍、教育和技术给的安全够用，相信即使出了危机，社会最后还是会朝一个能理解的方向走下去。也许我们是对的。茨威格年轻时的那些人，大概也这样想过。",
       "We too live inside an order we take to be solid. We trust that our jobs, property, nationality, education and technology give us enough safety, and that if a crisis comes, society will in the end go on in some direction we can understand. Maybe we are right. The people around Zweig in his youth probably thought the same."],
      ["这本书最该继承的，我想是对今天的怀疑。一个社会最危险的时候，未必是它已经意识到自己正在失去文明的时候，更可能是它仍然确信，有已有的繁荣、知识和成就，文明就不会离开。茨威格把这种确信叫作安全。后来，他用余生为它写了一本回忆录。",
       "What I would most want to take from the book is doubt about the present. A society may be in the most danger not when it knows it is losing civilization, but when it is still sure that its prosperity, knowledge and achievements will keep civilization from leaving. Zweig called that certainty security. Afterward he spent the rest of his life writing a memoir about it."]
    ]
  },
  {
    "date": "2020-11-15",
    "title": "The Weight of One",
    "slug": "the-weight-of-one",
    "category": "Philosophy",
    "book": {
      "cover": "trolley_problem.jpg",
      "title": "The Trolley Problem",
      "author": "Thomas Cathcart",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Philosophy · English original, first published 2013",
        "Full title: The Trolley Problem, or Would You Throw the Fat Guy Off the Bridge? A philosophical conundrum told as a comic courtroom trial."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["在哲学的诸多思想实验中，恐怕很少有比电车难题更加粗暴的。五个人被困在铁轨上，一辆失控的电车正迎面驶来，而你只需要扳动道岔，便能以一个人的死亡换取五个人的生存。问题似乎简单得近乎残忍，直到哲学家把场景移到一座天桥上：如果必须亲手将一个无辜的胖子推下去，才能阻止电车，我们还愿意作出同样的选择吗？数字没有改变，死亡的数量也没有改变，改变的只是我们与死亡之间的距离。",
       "Among philosophy’s many thought experiments, few are cruder than the trolley problem. Five people are trapped on the tracks, a runaway trolley is bearing down on them, and all you have to do is throw a switch to trade one person’s death for five lives. The problem seems almost cruelly simple, until the philosopher moves the scene to a footbridge: if you must push an innocent fat man off with your own hands to stop the trolley, would you still make the same choice? The numbers have not changed, nor has the number of deaths. What has changed is only our distance from the death."],
      ["托马斯·卡思卡特在《电车难题》中，将这个原本属于伦理学课堂的思想实验改写成一场荒诞的法庭审判。一个人因为将胖子推下桥而受到指控，律师、证人与哲学家轮番登场，试图为这场死亡寻找能够成立的道德解释。卡思卡特最巧妙的地方，是让那些通常安静地躺在哲学著作中的概念，突然拥有了法庭上的声音。功利主义、义务论与道德直觉不再只是抽象的理论，而成为彼此质询、相互拆台的辩护词。读者既像陪审员，又像那个站在桥上的人，不得不在各种看似合理的论证之间寻找自己的立场。",
       "In *The Trolley Problem*, Thomas Cathcart rewrites this thought experiment, which belongs to the ethics classroom, as an absurd courtroom trial. A man is charged with pushing a fat man off a bridge, and lawyers, witnesses and philosophers take the stand in turn, trying to find a moral explanation for the death that will hold up. Cathcart’s cleverest move is to give concepts that usually lie quietly in philosophy books a voice in court. Utilitarianism, deontology and moral intuition are no longer just abstract theories but arguments that cross-examine and undermine one another. The reader is both juror and the person standing on the bridge, forced to find a position among arguments that all seem reasonable."],
      ["但这场审判越是热闹，那个被推下桥的人反而越显得沉默。他没有复杂的过去，没有家庭，没有名字，甚至没有属于自己的声音。他存在的全部意义，似乎就是拥有足够的体重，可以阻挡一辆电车。这种近乎滑稽的设定，恰恰暴露了思想实验的某种残酷：为了使道德问题变得清晰，哲学首先必须剥夺人物的复杂性。五个人被简化为数字，一个人被简化为重量，而我们则被要求在这些经过精心删减的生命之间作出选择。",
       "But the livelier the trial becomes, the more silent the man pushed off the bridge seems. He has no complicated past, no family, no name, not even a voice of his own. The whole meaning of his existence seems to be having enough weight to stop a trolley. This almost comic setup exposes a certain cruelty in thought experiments: to make a moral problem clear, philosophy must first strip people of their complexity. Five people are reduced to a number, one person to a weight, and we are asked to choose among lives that have been carefully pared down."],
      ["我尤其在意这种抽象所带来的不安。功利主义的计算并不难理解，五条生命当然多于一条生命。但当一个人被描述为可以牺牲的单位时，我们似乎已经悄悄接受了某种前提：人的生命能够被放进同一张表格，并根据数量决定其价值。康德式的义务论试图抵抗这种计算，坚持人不能仅仅被当作实现其他目的的工具。然而，当我们拒绝推人下桥时，是否真的因为尊重人的尊严，还是仅仅因为无法忍受自己成为直接杀人的那个人？道德原则与个人情感之间的界限，远比哲学家希望的更加模糊。",
       "I am especially troubled by the unease this abstraction brings. Utilitarian calculation is not hard to understand: five lives are of course more than one. But when a person is described as a unit that can be sacrificed, we seem to have quietly accepted a premise: that human lives can be put in one table and their value decided by quantity. Kantian deontology tries to resist this calculation, insisting that a person must never be treated merely as a means to other ends. Yet when we refuse to push the man off the bridge, is it really out of respect for human dignity, or only because we cannot bear to be the one who kills directly? The line between moral principle and personal feeling is far blurrier than philosophers would like."],
      ["卡思卡特的幽默使这种矛盾显得格外尖锐。他并不急于告诉读者应该相信哪一种伦理学说，而是不断让某个看似无懈可击的论证遭遇新的反例。我们刚刚相信结果比意图重要，便发现这种逻辑可能允许牺牲无辜者；刚刚坚持绝不能主动伤害他人，又不得不面对袖手旁观所造成的死亡。每一种理论都试图为道德建立清晰的边界，却又不断被具体情境所破坏。哲学在这里不是消除困惑的工具，反而是一种使困惑更加精确的艺术。",
       "Cathcart’s humor makes the contradiction especially sharp. He is in no hurry to tell the reader which ethical theory to believe, but keeps letting a seemingly airtight argument meet a new counterexample. No sooner do we believe that outcomes matter more than intentions than we find this logic may permit sacrificing the innocent; no sooner do we insist that one must never actively harm others than we must face the deaths caused by standing by. Each theory tries to draw a clear boundary for morality, and each is repeatedly broken by concrete situations. Philosophy here is not a tool for dispelling confusion but an art of making confusion more precise."],
      ["我也逐渐意识到，电车难题之所以令人难忘，并不只是因为它考验我们的道德直觉，更因为它揭示了现代社会处理死亡的一种特殊方式。现实中的生命很少以如此直观的形式摆在我们面前。它们更多时候出现在统计报告、公共预算、风险评估与政策模型之中。我们可以冷静地讨论某项措施能够减少多少死亡，却很难想象自己亲手决定某个具体的人必须牺牲。数字让大规模的痛苦变得可以理解，也让个体的痛苦变得容易忽略。某种意义上，现代社会每天都在进行没有电车、没有天桥，也没有明确行动者的道德计算。",
       "I have also come to see that the trolley problem is memorable not only because it tests our moral intuitions but because it reveals a particular way modern society deals with death. Real lives are seldom set before us in such a vivid form. More often they appear in statistical reports, public budgets, risk assessments and policy models. We can calmly discuss how many deaths a measure would prevent, yet can hardly imagine deciding with our own hands that a specific person must be sacrificed. Numbers make mass suffering comprehensible and make individual suffering easy to ignore. In a sense, modern society carries out moral calculations every day with no trolley, no footbridge and no clear actor."],
      ["但我并不愿意因此否定计算的必要性。一个社会如果拒绝比较政策的后果，反而可能造成更多本可避免的伤害。真正令我怀疑的，是我们是否过于容易将计算的结果误认为道德的答案。一个模型能够告诉我们怎样减少总体风险，却无法仅凭数学证明谁应该承担剩余的风险。那些被称为最优的决定，往往只是在某些预先设定的价值标准下最优。卡思卡特的思想实验虽然极端，却使这些通常隐藏在制度语言背后的价值判断重新显露出来。",
       "But I do not want to deny the necessity of calculation. A society that refuses to compare the consequences of policies may cause even more avoidable harm. What I doubt is whether we too easily mistake the result of a calculation for a moral answer. A model can tell us how to reduce overall risk but cannot prove, by mathematics alone, who should bear the remaining risk. Decisions called optimal are often optimal only under certain preset standards of value. Cathcart’s thought experiment, extreme as it is, brings back into view the value judgments usually hidden behind institutional language."],
      ["作为一部哲学普及作品，《电车难题》的魅力来自它近乎戏剧性的叙事形式。卡思卡特善于利用法庭辩论的节奏，将复杂的伦理学争论转化为机智、荒诞而富有讽刺意味的对话。它不像严肃的哲学论文那样逐层建立论证，而是让不同立场在相互碰撞中暴露自身的局限。不过，这种轻巧也构成了本书的弱点。人物有时更像某种理论的代言人，而不是拥有独立生命的个体；哲学分歧则容易被压缩成一场聪明的语言游戏。读者可能记住了那些令人捧腹的反驳，却未必真正理解不同伦理传统背后更复杂的思想基础。",
       "As a work of popular philosophy, *The Trolley Problem* draws its charm from its almost theatrical narrative form. Cathcart makes good use of the rhythm of courtroom debate, turning complex ethical arguments into witty, absurd and satirical dialogue. Unlike a serious philosophy paper, it does not build an argument layer by layer but lets different positions expose their own limits as they collide. Yet this lightness is also the book’s weakness. Characters sometimes feel more like spokespeople for a theory than individuals with lives of their own, and philosophical disagreement is easily compressed into a clever language game. Readers may remember the laugh-out-loud rebuttals without really understanding the more complex intellectual foundations of the different ethical traditions."],
      ["更值得怀疑的，是思想实验本身所设置的封闭世界。在那里，电车必然失控，五个人必然被困，桥上的胖子必然能够阻止灾难，而我们只能在两个残酷的选项之间作出决定。所有能够改变问题的现实条件，都被哲学家提前排除。这种设计使道德冲突变得纯粹，却也让责任变得异常狭窄。我们只需要回答是否应该牺牲一个人，而不必追问为什么有人会被绑在铁轨上，为什么没有其他安全措施，或者是谁创造了这种必须以死亡换取生存的处境。思想实验的清晰，有时恰恰来自它对现实复杂性的拒绝。",
       "More doubtful still is the closed world the thought experiment sets up. There the trolley must be out of control, the five must be trapped, the fat man on the bridge must be able to stop the disaster, and we can only decide between two cruel options. All the real conditions that could change the problem are excluded in advance by the philosopher. This design makes the moral conflict pure, but it also makes responsibility strangely narrow. We need only answer whether to sacrifice one person, without asking why someone was tied to the tracks, why there are no other safety measures, or who created a situation in which survival must be bought with death. The clarity of a thought experiment sometimes comes precisely from its refusal of real-world complexity."],
      ["这也是我对卡思卡特既欣赏又有所保留的原因。他成功地让伦理学重新具有了文学的趣味，却也提醒我，哲学与文学处理人的方式并不相同。哲学为了检验原则，往往需要剥除人物的具体性；文学却恰恰通过恢复人物的名字、记忆与生活，使任何关于人的抽象判断变得困难。如果桥上的胖子不再只是一个足以阻挡电车的身体，而是一个拥有童年、爱人、恐惧与未完成愿望的人，那么我们或许便无法如此轻松地讨论他的死亡。",
       "This is why I both admire and have reservations about Cathcart. He succeeds in giving ethics the pleasures of literature again, but he also reminds me that philosophy and literature treat people differently. To test principles, philosophy often has to strip people of their particularity; literature, by restoring a person’s name, memories and life, makes any abstract judgment about people difficult. If the fat man on the bridge were no longer just a body big enough to stop a trolley, but a person with a childhood, a lover, fears and unfinished wishes, we might not be able to discuss his death so easily."],
      ["读完这本书，我仍然不知道自己会不会扳动道岔，更无法确信在天桥上会作出什么选择。但我开始觉得，电车难题真正令人不安的，并不是它没有提供一个令人满意的答案，而是它使我们如此轻易地接受了一个人可以被化约为一道算术题的前提。我们争论五是否大于一，却很少追问那个“一”究竟意味着什么。",
       "Having finished the book, I still do not know whether I would throw the switch, and I cannot be sure what I would choose on the footbridge. But I have begun to feel that what is truly disturbing about the trolley problem is not that it offers no satisfying answer, but that it makes us accept so easily the premise that a person can be reduced to an arithmetic problem. We argue over whether five is greater than one, and seldom ask what that “one” really means."],
      ["**也许电车难题最残酷的地方，并不是它要求我们牺牲一个人，而是为了让牺牲变得可以讨论，它首先必须让那个人失去作为一个人的全部重量。**",
       "**Perhaps the cruelest thing about the trolley problem is not that it asks us to sacrifice one person, but that, to make the sacrifice discussable, it must first strip that person of all the weight of being a person.**"]
    ]
  },
  {
    "date": "2018-09-22",
    "title": "The Voices History Cannot Absorb",
    "slug": "zinky-boys",
    "category": "Oral history",
    "book": {
      "cover": "zinky_boys.jpg",
      "title": "Zinky Boys",
      "author": "Svetlana Alexievich",
      "language": "English",
      "country": "Belarus",
      "original": "Russian",
      "lines": [
        "Oral history · Russian original, first published 1991",
        "Testimony from Soviet soldiers, nurses, mothers and widows of the war in Afghanistan, woven into a book with no single narrator."
      ]
    },
    "place": "于中国上海\nShanghai, China",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      ["1. 战争结束之后，士兵被装进锌皮棺材运回故乡。棺材被封死，家属甚至无法再看一眼死者的面容。一个活生生的人，就这样从儿子、丈夫、恋人，变成一具不能打开的棺材，以及一套关于英勇牺牲的官方说辞。",
       "1. After the war the soldiers came home in zinc coffins. The coffins were sealed, and the families could not even look once more at the faces of their dead. A living person, a son, a husband, a lover, had become a coffin that could not be opened, plus an official script about heroic sacrifice."],
      ["2. 斯维特兰娜·阿列克谢耶维奇的《锌皮娃娃兵》写的是苏联入侵阿富汗的战争，却几乎不关心战场上的胜负。她关心的是那些从战争中回来的人，或者更准确地说，那些再也无法真正回来的人。",
       "2. Svetlana Alexievich’s *Zinky Boys* is about the Soviet invasion of Afghanistan, and it hardly cares who won or lost on the battlefield. Her concern is the people who came back from the war, or more exactly, the ones who could never really come back."],
      ["3. 她没有用传统战争小说的写法。没有一个能代表战争经验的主人公，没有从天真到幻灭的成长，也没有一条解释战争怎么开始、怎么结束的因果线。她收集士兵、军官、护士、母亲和妻子的证言，把互相矛盾的声音编成一部没有单一中心的书。",
       "3. She does not use the method of the traditional war novel. There is no protagonist to stand for the experience of war, no growth from innocence to disillusion, no line of cause and effect to explain how the war began and ended. She collects testimony from soldiers, officers, nurses, mothers and wives, and weaves voices that contradict each other into a book with no single center."],
      ["4. 她不提供一个最终能解释所有证言的权威声音。读者一次又一次撞上彼此冲突的记忆，没有谁出来替他们裁决，也没有谁把这些记忆归拢成一个结论。",
       "4. She offers no final authoritative voice that could explain all the testimony. The reader meets conflicting memories again and again, with no one to rule among them and no one to gather them into a conclusion."],
      ["5. 有人还相信自己是为祖国而战。有人承认参与过残酷的杀戮。有人摆脱不了战场上的恐惧。有人只想知道自己的孩子为什么会死。这些声音并不总是互相理解，合起来却是一段统一叙事装不下的历史。",
       "5. Some still believe they fought for their country. Some admit to taking part in brutal killing. Some cannot shake the fear they learned at the front. Some only want to know why their child died. The voices do not always understand one another, and together they make a history that a unified narrative cannot hold."],
      ["6. 我越来越觉得，这种形式本身就是她的想法。无论歌颂英雄还是控诉暴行，传统的战争叙事总还需要一个中心：主人公，情节线，或者一个能统摄一切的历史判断。她让这个中心空着。战争在她手里是一堆无法互相还原的个人经验，没有哪个故事能把它们讲完整。",
       "6. I come to feel more and more that the form is itself her idea. Traditional war narratives, whether they praise heroes or accuse atrocities, still need a center: a protagonist, a plot, or a historical verdict that governs everything. She leaves the center empty. In her hands war is a heap of personal experiences that cannot be reduced to one another, and no single story can tell them whole."],
      ["7. 一场摧毁了生活秩序的战争，被讲得过于完整、过于和谐，在形式上也可能背叛战争的真实。",
       "7. If a war destroys the order of life, telling it too completely and too harmoniously may betray its truth in form."],
      ["8. 书里最令我难忘的是那些母亲的声音。战争在政治语言中意味着国家、边界、意识形态与历史使命，但对母亲而言，战争首先意味着一个曾经生活在自己身边的孩子突然消失了。她们记得儿子的童年、性格与生活中的琐事，却必须接受国家以某种庄严而抽象的语言解释他的死亡。",
       "8. What I remember most in the book is the voices of the mothers. In political language war means the state, borders, ideology and a historical mission; for a mother it first means that a child who lived at her side has suddenly disappeared. She remembers his childhood, his temper and the small things of daily life, and she must accept a solemn, abstract explanation of his death from the state."],
      ["9. 勋章、悼词、葬礼能给牺牲一个公共意义，回答不了那个更私人也更残酷的问题：为什么偏偏是我的孩子？",
       "9. Medals, eulogies and funerals can give a sacrifice public meaning. They cannot answer the more private and more cruel question: why my child, of all of them?"],
      ["10. 阿列克谢耶维奇并不试图将这些母亲塑造成某种象征。她让她们反复讲述、迟疑、愤怒，甚至说出彼此矛盾的话。正因为这种不整齐，悲伤始终是一种无法被解释完毕的经验，没有变成文学里一个可以被理解的主题。",
       "10. Alexievich makes no attempt to turn these mothers into symbols. She lets them repeat themselves, hesitate, rage, even say things that contradict each other. Because it is untidy, grief stays an experience that can never be finished being explained, and never becomes a theme literature can understand and file."],
      ["11. 她对士兵的书写同样拒绝简单的道德分类。许多人既是被战争伤害的人，也是伤害他人的人。他们可能曾经怀抱理想奔赴阿富汗，却在那里学会了杀戮、掠夺与对死亡的麻木。回到故乡之后，又被要求重新成为一个普通的儿子、丈夫或邻居。",
       "11. Her writing about soldiers refuses simple moral sorting too. Many were hurt by the war and also hurt others. They may have gone to Afghanistan with ideals and there learned killing, looting and numbness toward death. Back home, they were asked to become ordinary sons, husbands and neighbors again."],
      ["12. 一个人可以在战场上做出平时无法想象的事，回到故乡，却要被当作一个普通人对待，好像什么都没有发生过。",
       "12. A man can do on the battlefield what he could never have imagined in ordinary life, and at home he is expected to be treated as an ordinary man, as if nothing had happened."],
      ["13. 阿列克谢耶维奇没有替他们完成这种道德上的自我和解。她允许一个人同时值得同情与谴责，允许受害者的身份与加害者的责任并存。文学在这里拒绝让任何单一身份解释他们的全部经历，也不替人物寻找一个可以安放的位置。",
       "13. Alexievich does not complete this moral self-reconciliation for them. She allows a person to deserve sympathy and condemnation at once, and lets the standing of victim and the responsibility of perpetrator sit together. Literature here refuses to let any single identity explain everything they went through, and finds the characters no place to rest."],
      ["14. 这让我想到巴赫金说的复调，但她和陀思妥耶夫斯基的复调小说不一样。她的声音来自真实的历史见证者，没有一个是虚构的；声音之间的矛盾，除了思想立场的冲突，还牵涉记忆、创伤和自我辩护。",
       "14. This brings Bakhtin’s polyphony to mind, but she differs from Dostoevsky’s polyphonic novels. Her voices come from real witnesses of history, and none of them is invented; the contradictions among them go beyond clashes of ideas to touch memory, trauma and self-justification."],
      ["15. 一个士兵怎样解释战争，和一个母亲怎样理解儿子的死，可以截然不同。同一个人在不同的时候，也会改口。",
       "15. How a soldier explains the war and how a mother understands her son’s death can be entirely different. The same person will also tell it differently at a different time."],
      ["16. 她不急着消除这些不一致，让矛盾成为作品的结构，读者拿不到一个稳定、完整、让人安心的结论。",
       "16. She does not hurry to remove the inconsistencies. The contradictions become the structure of the work, and the reader never gets a stable, complete, reassuring conclusion."],
      ["17. 我自己的工作，无论是技术研发还是公共政策分析，都习惯于把复杂的问题转化为可以比较的指标、分类与结论。数据能够帮助我们识别趋势，模型能够帮助我们作出预测，报告则试图从大量事实中提炼出可供决策的判断。这些方法当然有其必要性，但也不可避免地要求我们舍弃某些细节。一个人的生活经验可能最终变成一条数据，一种复杂的社会处境可能被归入某个统计类别。",
       "17. In my own work, technical development and public policy analysis alike, I am used to turning complicated problems into indicators, categories and conclusions that can be compared. Data helps us identify trends, models help us predict, and reports try to distill judgments for decision-making out of a mass of facts. These methods are of course necessary, and they inevitably require us to drop certain details. A person’s lived experience may end up as one row of data, and a complex social situation may be filed under a statistical category."],
      ["18. 我们越是追求分析的清晰与可操作性，就越容易忘记那些无法被模型充分表达的差异。",
       "18. The more we chase clarity and usability in analysis, the easier it is to forget the differences a model cannot fully express."],
      ["19. 她的写作几乎朝着相反的方向前进。她不急于消除噪声，不将相互冲突的证言平均成某种共识，也不把个人经验压缩成一个用来证明结论的案例。她保留重复、停顿、情绪与叙述中的不一致，使那些在正式报告中通常会被删去的部分，成为作品的内容。",
       "19. Her writing moves in almost the opposite direction. She is in no hurry to remove noise, does not average conflicting testimonies into a consensus, and does not compress a personal experience into a case that proves a conclusion. She keeps the repetition, the pauses, the emotion and the inconsistencies in the telling, so that what a formal report would usually cut becomes the content of her work."],
      ["20. 我们以为自己在借抽象理解世界，有时也是在借抽象让世界变得更容易被自己接受。一份清晰的报告能让人看清问题的规模，却不一定让人明白，这个问题对某个具体的人意味着什么。",
       "20. We think we are understanding the world through abstraction; sometimes we are also using abstraction to make the world easier for us to accept. A clear report can show the scale of a problem without showing what the problem means to one particular person."],
      ["21. 不过，我并不认为这种文学形式天然比历史研究或数据分析更接近真相。阿列克谢耶维奇并非一个透明的记录装置。她决定采访谁、保留哪些话语、如何剪裁与排列证言，也决定了读者将如何理解这些声音。看似没有中心叙述者的作品，实际上仍然存在一个强大的作者意识。",
       "21. Still, I do not think this literary form is by nature closer to the truth than historical research or data analysis. Alexievich is not a transparent recording device. Whom she interviews, which words she keeps, how she cuts and arranges the testimony: all of that also decides how readers will understand these voices. A work that seems to lack a central narrator still has a powerful authorial mind behind it."],
      ["22. 她退到幕后，不同的证言才获得各自独立的空间；这也可能让读者忘记，这些声音早已经过文学的加工。",
       "22. By stepping back she gives each testimony room of its own, and that may also lead the reader to forget that these voices have already been through literary work."],
      ["23. 复调不是作者权力的消失，是权力从直接解释转到了选择与编排。",
       "23. Polyphony does not make the author’s power vanish. The power moves from direct explanation to selection and arrangement."],
      ["24. 《锌皮娃娃兵》出版后引发过争议。部分受访者及其家属对书中的呈现提出异议，作品也曾引发诉讼。这样的争议不能简单证明作者失实，也不能因为作品具有反战立场就被一笔带过。一个人愿意讲述自己的痛苦，并不必然意味着他愿意让这些话语在新的文学结构中获得作者赋予的意义。",
       "24. *Zinky Boys* stirred controversy after it was published. Some interviewees and their families objected to how they were presented, and the book led to lawsuits. This cannot simply be taken as proof that the author falsified, and it cannot be waved away because the book takes an antiwar side. A person willing to speak of his pain is not necessarily willing for those words to take on a meaning the author gives them inside a new literary structure."],
      ["25. 见证文学的困境在这里：想把被压抑的个人声音从官方历史里解放出来，又不可避免地把它们纳入作者自己的叙事。是让别人说话，还是借别人的话说自己？我想没有简单的答案，这却是她的写作最值得认真谈的部分。",
       "25. Here is the dilemma of witness literature: it wants to free suppressed individual voices from official history, and cannot help folding them into the author’s own narrative. Is it letting others speak, or borrowing their words to speak itself? I think there is no simple answer, and this is the part of her writing most worth discussing seriously."],
      ["26. 我们总希望历史给出一个完整的解释，好像只要明白战争为什么发生，就明白了战争里发生的一切。读她的书，我开始怀疑这一点。有些经验需要文学，是因为任何解释都说不尽它们。",
       "26. We always hope history will give a complete explanation, as if understanding why the war happened were understanding everything that happened in it. Reading her, I began to doubt this. Some experiences need literature because no explanation can exhaust them."],
      ["27. 这种复调之所以有强烈的反战力量，我想是因为它破坏了战争最依赖的叙事机制。战争需要一个高过个体生命的理由：国家安全、历史使命、集体荣誉，或者未来某种更好的秩序。只有当无数人的死亡能够被纳入一个共同的故事，牺牲才可能显得值得。",
       "27. The strong antiwar force of this polyphony comes, I think, from its breaking the narrative machinery war depends on most. War needs a reason that stands above individual lives: national security, a historical mission, collective honor, or some better order in the future. Only when countless deaths can be folded into one common story can sacrifice appear worthwhile."],
      ["28. 她把这个共同的故事不断拆成无法互相替代的私人记忆。一个母亲的悲伤抵消不了另一个母亲的，一个士兵的恐惧也不会因为别处的一场胜利消失。她反驳战争，靠的是让宏大理论再也解释不完整这些人的生活，新的宏大理论她一个也没提。",
       "28. She keeps taking that common story apart into private memories that cannot stand in for one another. One mother’s grief does not cancel another’s, and a soldier’s fear does not vanish because of a victory somewhere else. She answers war by making grand theory unable to account fully for these lives, and she offers no new grand theory of her own."],
      ["29. 文学代替不了历史学。苏联为什么入侵阿富汗，战争怎样改变国际政治，具体的军事决策怎样酿成灾难，这些都需要更广的史料和制度分析。她的书不给这种全景，也不该被要求给。它的价值恰在揭示全景装不下的东西。历史学解释事件怎么发生；见证文学提醒我们，事件解释了，人的痛苦也未必因此被理解。",
       "29. Literature cannot replace history. Why the Soviet Union invaded Afghanistan, how the war changed international politics, how particular military decisions brought disaster: all of this calls for wider sources and institutional analysis. Her book gives no such panorama and should not be asked to. Its value is in showing what the panorama cannot hold. History explains how events happened; witness literature reminds us that once the events are explained, the pain of people is not necessarily understood."],
      ["30. 文学不必给出历史的全景，它的位置在全景装不下的地方。她的书留住那些没处安放的人，苏联为什么入侵，留给别人回答。",
       "30. Literature need not give the panorama of history; its place is where the panorama cannot hold. Her book keeps hold of the people with nowhere to put them and leaves the question of why the Soviets invaded to others."],
      ["31. 读完，我记得的是那些始终归纳不成结论的声音。关于战争的某个结论，我一个也没带走。它们重复讲同样的恐惧，记住旁人看来微不足道的细节，在回忆里不断改变对自己的理解。她没有给它们整齐的结局，因为现实里的悲伤不按文学的节奏收场。",
       "31. When I finish, what I remember is the voices that never reduce to a conclusion. I carried no conclusion about war away with me. They repeat the same fear, hold on to details that look trivial to others, and keep changing how they understand themselves as they remember. She gives them no tidy ending, because grief in life does not close at the pace of literature."],
      ["32. 战争可以结束，政权可以更换，历史评价也可以推翻，母亲的孩子还是回不来。那些曾被赋予崇高意义的牺牲，一旦政治上失去正当性，会让活着的人受第二次伤害：他们不只失去了亲人，也失去了曾用来理解这种失去的理由。",
       "32. A war can end, a regime can change, a historical verdict can be overturned, and the mother’s child still does not return. When a sacrifice once given a lofty meaning loses its political legitimacy, the living are hurt a second time: they lose not only their dead but the reason they once used to make sense of the loss."],
      ["33. 她不替战争另找一个更好的故事。那些被战争毁掉的人生，在她的书里拒绝成为任何故事中可以轻易安放的一部分。",
       "33. She does not look for a better story for the war. In her book the lives the war broke refuse to become a part that can be easily fitted into any story at all."],
      ["34. 历史总想把无数人的命运整理成一条看得懂的路。她让我们听见，路两旁那些永远带不走的声音。",
       "34. History keeps trying to arrange the fates of countless people into a road that can be understood. She lets us hear the voices along both sides of it that can never be carried away."],
      ["35. 一个母亲先失去孩子，后来又失去国家给过她的理由。两样东西，一前一后，都走了。",
       "35. A mother first loses her child and later loses the reason the state once gave her. Two things, one after the other, both gone."],
      ["36. 战争一旦结束，大家就可以说它是过去的事。母亲们不这样说。",
       "36. Once a war ends, everyone can say that it is past. The mothers do not say so."],
      ["37. 路的两旁，那些带不走的声音还在。棺材封着，没有人去打开。",
       "37. Along both sides of the road the voices that could not be taken away are still there. The coffin stays sealed, and no one opens it."]
    ]
  },
  {
    "date": "2018-10-12",
    "title": "Snow Falls on Varykino",
    "slug": "snow-falls-on-varykino",
    "category": "Novel",
    "book": {
      "cover": "doctor_zhivago.jpg",
      "title": "Doctor Zhivago",
      "author": "Boris Pasternak",
      "language": "English",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · Russian original, first published 1957",
        "A doctor and poet lives through the Russian Revolution and civil war, and his love for Lara in a snowbound house at Varykino."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["瓦雷金诺的冬天，房子被积雪围着，窗玻璃上结了厚厚的冰霜。日瓦戈和拉拉暂时躲开了战争，住进这座几乎与外界断了联系的房子。白天为取暖、食物和零碎的日常事忙；夜里，日瓦戈又开始写诗。屋外的俄国在革命和内战里翻腾，屋里却有人读书，有人相爱，有人留意雪地上的光。读《日瓦戈医生》，我记得最牢的是这间屋子。帕斯捷尔纳克愿意花那么多笔墨，写历史看来微不足道的时刻。",
       "Winter at Varykino: the house is hemmed in by snow, and the window glass is thick with frost. Zhivago and Lara have slipped away from the war to live in a house almost cut off from the world. By day they are busy with warmth, food and small chores; at night Zhivago begins to write poems again. Outside, Russia is churning through revolution and civil war, while inside someone reads, two people love each other, someone notices the light on the snow. Reading *Doctor Zhivago*, what stays with me most is this room. Pasternak is willing to spend so many pages on moments that history would count as nothing."],
      ["先退回到游击队里的日瓦戈。他是医生，也是诗人，听得懂革命最初的理想，却受不了革命渐渐要求每个人用同一种语言思考、生活。他被迫随军行动，看着暴力把一个个具体的人变成敌我两边的符号。帕斯捷尔纳克没有让他做勇敢的反抗者。他犹豫，没有行动力，连自己珍视的人也保护不了。这样的主人公很难叫人崇拜，小说却因为他的不坚定，没有变成另一份政治宣言。",
       "Step back to Zhivago among the partisans. He is a doctor and a poet; he can follow the first ideals of the revolution but cannot bear its slow demand that everyone think and live in the same language. He is forced to move with the army and watches violence turn specific people into symbols for friend and enemy. Pasternak does not make him a brave rebel. He hesitates, he lacks the power to act, he cannot even protect the people he cherishes. A hero like this is hard to worship, yet his wavering keeps the novel from becoming another political declaration."],
      ["可是我不愿把他的遭遇只读成革命摧毁了个人自由。旧俄国的贫困、土地分配的不公、阶级特权和专制，同样是实打实的暴力，只是来得更慢，更容易被日常生活盖住。对一个读诗、行医、有私人生活的知识分子，革命是秩序崩溃；对长期被挡在这种生活之外的人，革命可能是第一次有机会改变命运。革命最后背叛了自己的理想，那些理想最初回应过的苦难仍是真的。否认这一点，对革命暴力的批判就会不知不觉变成对旧秩序的怀念。",
       "Still, I do not want to read his fate only as the revolution crushing personal freedom. The poverty of old Russia, the unjust distribution of land, class privilege and autocracy were just as real a violence, only slower and easier for daily life to cover. For an intellectual who reads poetry, practices medicine and has a private life, revolution means the collapse of order; for those long shut out of such a life, it may be the first chance to change their fate. The revolution in the end betrayed its ideals, but the suffering those ideals first answered was real. To deny that is to let the critique of revolutionary violence drift into longing for the old order."],
      ["斯特列利尼科夫站在这条缝里。拉拉的丈夫帕维尔·安季波夫，本来有私人的感情和理想，后来把自己改造成了革命意志的执行者。他相信历史必须朝一个方向走，个人的幸福可以为它牺牲。日瓦戈没法把自己变成历史的工具，斯特列利尼科夫几乎不再允许自己做一个普通人。我不认为他的悲剧证明了革命信念本身必然错误。可怕的是，一个人确信自己代表历史的正确方向，就会慢慢失去怀疑自己行为的能力。革命原本想让人摆脱被支配的命运，掌权以后，却可能要求人们用服从革命来证明自己已经获得解放。",
       "Strelnikov stands in this crack. Lara’s husband, Pavel Antipov, once had private feelings and ideals and then remade himself into an instrument of the revolutionary will. He believes history must move in one direction and that personal happiness can be sacrificed to it. Zhivago cannot turn himself into a tool of history, while Strelnikov hardly allows himself to be an ordinary man. I don’t think his tragedy proves the revolutionary conviction itself must be wrong. What frightens me is that a man sure he represents history’s right direction slowly loses the ability to doubt his own acts. The revolution meant to free people from being ruled, and once in power it may demand that people prove they are free by obeying it."],
      ["日瓦戈的道德敏感也有边界。他拒绝把个人生命化约成政治目的，却很少提得出改变社会不公的办法。他珍视日常生活，令人动容，可这种生活需要教育、闲暇和物质条件，旧俄国并不是人人都有。一个人可以正当地反对革命暴力，仍然得回答：不经过革命，原来的压迫怎么结束？帕斯捷尔纳克让我们深切感到革命毁掉了什么，却很少让那些本来没什么可失去的人得到同样充分的表达。这是小说的立场，也是它的局限。",
       "Zhivago’s moral sensitivity has limits too. He refuses to reduce an individual life to a political purpose, but he rarely offers a way to remedy social injustice. His regard for everyday life is moving, yet that life needs education, leisure and material means that not everyone in old Russia had. A person can rightly oppose revolutionary violence and still owe an answer: if not through revolution, how was the old oppression to end? Pasternak makes us feel deeply what the revolution destroyed, and gives those who had little to lose far less room to speak. That is the novel’s position and also its limit."],
      ["回到屋外的雪。帕斯捷尔纳克写自然，雪、森林、春天的融水、窗边的光，都不只是人物命运的背景。革命者相信历史有明确的方向，人的生活要服从未来的某种秩序；自然照自己的节奏生长、衰败、复苏。瓦雷金诺的雪不会因为革命胜利停止落下，春天也不会因为某种政治理想提前到来。他让两种时间在小说里并存，一种由历史事件构成，一种存在于季节、身体和日常感受里。可自然的美替代不了社会正义。一个人在雪景里得到的精神自由，不能让另一个人的贫困变得可以接受。",
       "Back to the snow outside. When Pasternak writes nature, the snow, the forest, the meltwater of spring, the light at a window, it is more than backdrop to the characters’ fates. Revolutionaries believe history has a clear direction and that lives must serve some future order; nature grows, decays and revives at its own pace. The snow at Varykino does not stop falling because the revolution wins, and spring does not come early for any political ideal. He lets two kinds of time sit side by side in the novel, one made of historical events, the other of seasons, bodies and everyday feeling. But the beauty of nature cannot stand in for social justice. The inner freedom one person finds in a snowy landscape does not make another person’s poverty acceptable."],
      ["拉拉和日瓦戈的爱情，就落在这两种时间的缝隙里。他们在瓦雷金诺有了一段短暂的共同生活，这份幸福从一开始就带着长不了的预感。日瓦戈仍牵挂妻子冬妮娅和孩子，拉拉也有自己的家庭和过去。帕斯捷尔纳克没有真正解决这些感情之间的冲突。他对拉拉的爱是真的，对冬妮娅的亏欠也是真的。一个人能敏锐地感受生活的美，不见得就有处理生活的勇气。小说的诗意在这里显出一点残酷：美不替人承担责任。",
       "The love of Lara and Zhivago falls into the gap between those two times. At Varykino they have a short life together, and the happiness carries from the start a sense that it will not last. Zhivago still cares for his wife, Tonya, and the children; Lara has a family and a past of her own. Pasternak does not truly resolve the conflict among these loves. His love for Lara is real and so is what he owes Tonya. A person can feel the beauty of life keenly without having the courage to handle life. Here the poetry of the novel shows a touch of cruelty: beauty does not bear responsibility for anyone."],
      ["小说的叙事有些奇怪。人物在辽阔的俄国大地上一再偶遇，不少情节巧得近乎不可信，人物有时突然说出一大段关于历史与生命的议论。拿托尔斯泰式的现实主义来量，这些安排不算严密。可帕斯捷尔纳克先是个诗人，他在意意象之间的呼应，多过事件之间无懈可击的因果。一盏灯，一场雪，远处出现的一个人影，隔了许多章才重新有了意义。历史不断想把人的命运组织成一条可以解释的路，小说却让生活保持偶然、散乱、不可预料。",
       "The storytelling is odd. Characters meet again and again across the vast Russian land, many plot turns are so coincidental as to strain belief, and characters sometimes break into long speeches about history and life. Measured against Tolstoyan realism, none of this is tight. But Pasternak was a poet first, and he cares more about echoes between images than about flawless chains of cause between events. A lamp, a snowfall, a figure appearing in the distance gain their meaning again many chapters later. History keeps trying to arrange people’s fates into a road that can be explained, while the novel keeps life accidental, scattered and unpredictable."],
      ["读的时候，我也想到自己对生活的安排。我们习惯给未来做计划，相信事业、家庭和物质条件稳定下来，就会有更多自由。瓦雷金诺的冬天提醒我，生活不会等一切安排妥当才开始。真正难忘的时刻，常常不合计划，也没法事后补回。可能只是一场雪，一顿晚饭，或者某个下午忽然发觉自己正在幸福。我又不愿意把这种私人幸福浪漫化到否定社会变革的必要。一个人有权珍惜自己的生活，另一个人同样有权要求改变让他没法正常生活的制度。",
       "While reading I also think of how I arrange my own life. We make plans for the future and believe that once career, family and means settle down, we will have more freedom. The winter at Varykino reminds me that life does not wait until everything is arranged before it begins. The moments we really remember seldom fit the plan, and cannot be made up for afterward. It may be only a snowfall, a dinner, an afternoon when you suddenly notice you are happy. Yet I don’t want to romanticize private happiness so far that it denies the need for social change. One person has the right to cherish his life, and another has the same right to demand a change in the system that keeps him from living normally."],
      ["革命的难处大概就在这里。不否定现存的秩序，许多不公可能永远延续；可当否定成了革命唯一的语言，它又会失去对具体生命的尊重。我们不能要求所有被压迫的人无限期等温和的改革，也不能因为某种未来的正义值得追求，就允许现在的人被无限牺牲。革命的正当性，既不能只凭它反对了什么来证明，也不能只凭它最后建立了什么来衡量，还得经得起那些在途中受伤的人的质问。",
       "The difficulty of revolution probably sits here. Without a refusal of the existing order, many injustices may last forever; but when refusal becomes the only language of revolution, it loses respect for concrete lives. We cannot ask all the oppressed to wait indefinitely for mild reform, nor allow the people of the present to be sacrificed without limit because some future justice is worth pursuing. The legitimacy of a revolution can be proved neither by what it opposed nor measured by what it finally built; it must also stand up to the questions of those who were hurt along the way."],
      ["小说结尾附着日瓦戈的诗。这些诗挽不回他的爱情，改不了他逐渐衰败的命运，也没给历史换个结局。但读它们，人又想起那个曾站在窗前、看见雪光的人。他没成为革命的英雄，也没成为自己生活的主人，留下的只有几首诗，和被诗留住的感受。",
       "The novel ends with Zhivago’s poems appended. They cannot win back his love, change his slow decline or give history another ending. But reading them, one remembers again the man who once stood at a window and saw the light on the snow. He did not become a hero of the revolution or the master of his own life. What he left was a few poems and the feelings the poems kept."],
      ["合上书，我想到的还是瓦雷金诺那座被雪盖着的房子。它没有保护过谁，连短短的幸福也散了。可我也知道，屋外那些想改变自己命运的人，并不比屋里的人更不值得被理解。他们的人生同样具体，同样无法替代。窗外的雪还在落。",
       "Closing the book, I still think of the house at Varykino under its snow. It protected no one, and even the short happiness there came apart. But I also know that the people outside who wanted to change their fates were no less deserving of understanding than those inside. Their lives were just as concrete and just as irreplaceable. Beyond the window, the snow is still falling."]
    ]
  },
  {
    "date": "2019-02-03",
    "title": "A Man Who Would Not Speak Plainly",
    "slug": "a-man-who-would-not-speak-plainly",
    "category": "Philosophy",
    "book": {
      "cover": "kierkegaard_anthology.jpg",
      "title": "A Kierkegaard Anthology",
      "author": "Søren Kierkegaard, edited by Robert Bretall",
      "language": "English",
      "country": "Denmark",
      "original": "Danish",
      "lines": [
        "Philosophy · Danish original, selections from 1843 to 1855",
        "Excerpts from Kierkegaard’s works under his many pseudonyms, from the aesthete of *Either/Or* to the Abraham of *Fear and Trembling*."
      ]
    },
    "place": "于丹麦哥本哈根\nCopenhagen, Denmark",
    "languages": ["Chinese", "English"],
    "prose": [
      ["读了几十页，我还不知道克尔凯郭尔到底赞成什么。他爱绕圈子，爱反讽，本可以直说的话，交给一个虚构人物，再让另一个虚构人物提出异议。他似乎很享受这种不便，甚至有意让读者困惑。比起努力把思想讲清楚的哲学家，他更像一个才华横溢、脾气古怪的小说家，总怀疑读者理解得太快。实在不算一个讨人喜欢的作家。",
       "Dozens of pages in, I still don’t know what Kierkegaard actually favors. He likes to go in circles and to be ironic; something that could be said directly he hands to an invented figure and then lets another invented figure object. He seems to enjoy the inconvenience, and even to want the reader confused. Compared with philosophers who work to make their thoughts clear, he is more like a gifted, eccentric novelist who suspects the reader of understanding too fast. He is not an author one takes to easily."],
      ["《A Kierkegaard Anthology》由罗伯特·布雷塔尔编选，把他不同年代、不同笔名的作品放在一起。前一篇还用近乎轻浮的口吻谈怎样避免无聊，下一篇就严肃地想亚伯拉罕献祭以撒的恐怖；刚遇见一个玩弄爱情的审美主义者，转眼又听见某个基督徒对世俗生活下近乎苛刻的判决。这些声音相距太远，有时让人怀疑出自同一个人。选集这样读，倒让我看到他并不总用同一种方式思考：幽默得近乎刻薄，虔诚得难以接近，有时像心理学家，有时像剧作家，有时像一个对整个时代失去耐心的布道者。",
       "Robert Bretall’s *A Kierkegaard Anthology* sets side by side works from different years and different pseudonyms. One piece is talking in a nearly frivolous tone about how to avoid boredom, and the next is gravely considering the horror of Abraham offering Isaac; I have just met an aesthete who plays with love when I hear a Christian pass a nearly harsh sentence on worldly life. The voices stand so far apart that I sometimes wonder whether one man wrote them. Reading it this way shows me he does not always think in the same manner: humorous to the point of cruelty, devout to the point of being unapproachable, now a psychologist, now a playwright, now a preacher who has lost patience with his whole age."],
      ["我最喜欢的，仍是《非此即彼》里那些带恶意的聪明话。《轮作法》把生活比作要不断换作物的土地，避免无聊好像比追求幸福更要紧。读到这里我笑了，随后觉得有点不安：这些话确实写得漂亮。克尔凯郭尔深知审美主义的诱惑，因为他自己就是个出色的审美主义作家。他批判的不是一种他陌生的生活，是一门他比许多拥护者更精通的艺术。",
       "What I like best remains the malicious cleverness in *Either/Or*. “The Rotation of Crops” likens life to a field that needs its crops changed again and again, as though avoiding boredom mattered more than pursuing happiness. I laughed at this, and then felt a little uneasy: it really is beautifully written. Kierkegaard knew the temptation of aestheticism well, because he was himself a brilliant aesthetic writer. What he criticizes is no life foreign to him but an art he has mastered better than many of its defenders."],
      ["到了《诱惑者日记》，约翰内斯把爱情经营成一场精密的艺术活动。他观察，等待，安排偶遇，欣赏自己对别人感情的操纵。他的残酷写得太精巧，读者容易先欣赏他的聪明，之后才想起受伤的柯黛莉娅。克尔凯郭尔也许正想制造这种不适，可文学有它自己的力量。一段写得出色的诱惑，放进道德批判的框架，也不会自动失去诱惑力。作者能安排人物最终失败，管不住读者读着读着爱上了谁。我有时甚至怀疑，他是不是太享受自己谴责的东西。",
       "In “The Seducer’s Diary,” Johannes runs love as a precise artistic enterprise. He watches, waits, arranges chance meetings, and admires his own manipulation of another’s feelings. His cruelty is written so finely that a reader first admires his cleverness and only afterward remembers the wounded Cordelia. Kierkegaard may well have meant to cause that discomfort, but literature has a force of its own. A brilliantly written seduction does not lose its pull automatically by being set inside a moral critique. An author can arrange for a character to fail in the end; he cannot control whom the reader falls for while reading. Sometimes I even suspect he enjoyed too much what he condemned."],
      ["《恐惧与战栗》里，亚伯拉罕带着以撒走向摩利亚山。结局人人都知道，克尔凯郭尔偏不让读者轻松走到那里。他一遍遍想象父子之间可能有的沉默、误解和恐惧，把圣经里简短的叙述展成一连串几乎令人窒息的心理场景。可怕的地方在于，即使知道以撒会活下来，也消不掉那个父亲举刀的恐怖。这里显出来的，与其说是哲学家的论证能力，不如说是小说家把一个瞬间拉长的本事。",
       "In *Fear and Trembling*, Abraham walks with Isaac toward Mount Moriah. Everyone knows how it ends, and Kierkegaard will not let the reader reach the end easily. Over and over he imagines the silence, misunderstanding and fear that may have passed between father and son, stretching the Bible’s brief account into a series of nearly suffocating psychological scenes. The terror is that even knowing Isaac will live does not remove the horror of the father with the knife raised. What shows here is less a philosopher’s power of argument than a novelist’s skill at lengthening a single moment."],
      ["再往后读到他的宗教激情，我就和他保持距离了。他笔下的信仰常要求近乎绝对的内在诚实，好像任何妥协都是自欺。这很令人敬佩，也容易让普通生活显得可疑。人要工作，要维持关系，要处理琐事，也需要一点不那么深刻的快乐。犹豫不一定就是绝望，安逸也不一定就是精神堕落。他太擅长发现生活里的虚伪，以至于不太愿意承认，生活在不那么彻底的状态里也可以是值得肯定的。",
       "Further on, when I reach his religious passion, I keep my distance. The faith he writes often demands an almost absolute inner honesty, as if any compromise were self-deception. This is admirable, and it also makes ordinary life look suspect. People have to work, keep up relationships, deal with trivia, and want some pleasure that is not so profound. Hesitation is not always despair, and comfort is not always a spiritual fall. He is so good at spotting hypocrisy in life that he seems unwilling to admit that life can be worth affirming in a less thorough state."],
      ["哥本哈根的公众生活是另一个场景。他讽刺它，恨人云亦云，反对把个人判断交给抽象的公众，却又极在意公众怎么看他。他和报刊的冲突，对丹麦国教会的激烈批评，一再换用笔名的写法，让他的作者形象格外矛盾。一边希望人摆脱社会的认可，一边又不断通过写作和整个社会争辩。这种没法真正置身事外的处境，也许正是他的文字那样紧张、有生命力的原因。",
       "Public life in Copenhagen is another scene. He satirizes it, hates people parroting each other, objects to handing individual judgment over to an abstract public, and yet cares intensely how the public sees him. His quarrel with the press, his fierce criticism of the Danish state church and his habit of writing under changing pseudonyms make his image as an author especially contradictory. He hopes people will free themselves from social approval while arguing with society through his writing without pause. That inability to stand truly outside may be why his prose has such tension and life."],
      ["选集的缺陷也摆在这里。克尔凯郭尔的作品很依赖文体、人物身份和上下文，摘录会让缓缓展开的反讽损失一部分效果。不同笔名的文字被放在“克尔凯郭尔思想”的标题下，读者容易忘记说话的人并不等于作者本人。布雷塔尔的编排给了一条方便的阅读路径，也让这些本来充满歧义的文本显得太连贯。对一个擅长制造误解的作家，过于清楚的介绍反而是一种损失。",
       "The anthology’s defects are on show here as well. Kierkegaard depends heavily on genre, the identity of the speaker and context, and excerpts cost the slowly unfolding irony some of its effect. When writings under different pseudonyms are put beneath the title “Kierkegaard’s thought,” a reader easily forgets that the speakers are not simply the author. Bretall’s arrangement offers a convenient path through, and it makes texts that are full of ambiguity look too coherent. For a writer so gifted at producing misunderstanding, an introduction that is too clear can be a loss."],
      ["合上书，我没有得到更坚定的生活信念。我不太相信克尔凯郭尔能教人怎么生活，他太极端，太敏感，太容易把普通人的妥协当成精神上的失败。但我欣赏他识破那些听起来高尚、实则可疑的自我解释的本事。他笔下的人总能为自己的行为找到漂亮的理由，读者嘲笑完他们，才隐约发现自己也说过类似的话。我反而对那些过于坚定地解释生活的人多了几分怀疑，包括他自己。他能那么精确地写人的自欺，未必躲得过自己的执念；那么严厉地要求真诚，却又借无数虚构的身份说话。这些矛盾没有削弱他的作品，他因此不只是哲学史上一座让人敬畏的纪念碑。",
       "Closing the book, I have not gained a firmer faith about how to live. I doubt Kierkegaard can teach anyone how to live; he is too extreme, too sensitive, too quick to take ordinary people’s compromises as spiritual failure. But I admire his skill at seeing through self-explanations that sound lofty and are in fact doubtful. His characters can always find fine reasons for what they do, and a reader, after laughing at them, faintly sees that he has said much the same. What I have gained is more suspicion of people who explain life too firmly, himself included. He could describe self-deception so precisely and not escape his own obsessions; he demanded sincerity so sternly and yet spoke through countless invented identities. These contradictions do not weaken his work, and they keep him from being only an awe-inspiring monument in the history of philosophy."],
      ["我最终喜欢的，是他那些有点刻薄、偶尔好笑、常让人不舒服的句子，不是他给出的答案。他读起来不总让人愉快，却很难彻底忘掉。书合上了，那些声音还在，每一个都用着不同的名字。",
       "What I end up liking are his sentences, a little spiteful, occasionally funny, often uncomfortable, and not the answers he gives. He is not always pleasant to read and is hard to forget entirely. The book is closed, and the voices are still there, each under a different name."]
    ]
  },
  {
    "date": "2019-02-14",
    "title": "Wealth Has Its Own Time",
    "slug": "wealth-has-its-own-time",
    "category": "Economics",
    "book": {
      "cover": "le_capital_au_xxie_siecle.jpg",
      "title": "Le Capital au XXIe siècle",
      "author": "Thomas Piketty",
      "language": "French",
      "country": "France",
      "original": "French",
      "lines": [
        "Economics · Éditions du Seuil, 2013",
        "Two centuries of tax, inheritance and income records, and the argument that when capital grows faster than the economy, the past comes to rule the future."
      ]
    },
    "place": "于加州桑尼维尔\nSunnyvale, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["伏脱冷对年轻的拉斯蒂涅说过一番话，皮凯蒂在书里引了它：靠勤奋与才华挣来的职业收入，远不如通过婚姻得到一笔像样的财产。那是巴尔扎克《高老头》里的场景。在那个世袭财富占主导的社会，一个人的经济前途，往往早已由家庭背景决定。",
       "Vautrin tells the young Rastignac something that Piketty quotes in the book: the income from a profession, earned by diligence and talent, is far less than a decent fortune obtained through marriage. The scene is from Balzac’s *Père Goriot*. In that society, dominated by inherited wealth, a person’s economic future was often already decided by family background."],
      ["现代社会当然不同。教育、专业能力和技术创新确实带来了真实的流动机会，我自己的职业经历也让我相信，劳动和知识能明显改变一个人的处境。可是随着资产一点点积累，我也清楚，将来的生活会越来越少取决于下一年的工资，越来越多取决于已经得到的财富。巴尔扎克笔下那个靠继承决定命运的世界没有完全消失，它和今天的职业竞争并存。",
       "Modern society is of course different. Education, professional skill and technological innovation do create real chances to move up, and my own career has convinced me that labor and knowledge can markedly change a person’s situation. But as my assets build up bit by bit, I also see that my future life will depend less on next year’s salary and more on wealth already gained. Balzac’s world, where inherited property settles one’s fate, has not entirely gone. It sits alongside today’s professional competition."],
      ["每个月收到租金，我都会想到一件简单的事：这笔收入不要求我此刻在工作。房客付钱，我持有房产，收入按合同发生。我的工资来自另一种交换，要不断投入时间、知识和精力才有报酬。两笔钱都以美元进账，与我生活的关系却很不一样。劳动需要我一直在场，资本在我缺席时照样运转。",
       "Each month when the rent comes in, I think of a simple fact: this income does not need me to be working at that moment. The tenant pays, I own the property, and the money arrives under the contract. My salary comes from a different kind of exchange, one where I must keep putting in time, knowledge and energy to be paid. Both land in my account in dollars, yet they stand in very different relation to my life. Labor needs me present all the time. Capital keeps running while I am away."],
      ["读托马斯·皮凯蒂的《二十一世纪资本论》，我头一回这样清楚地看到，财富不只是购买力，也是一个人和时间的关系。他最有名的公式是 *r > g*：在一些长期的历史条件下，资本回报率高于经济增长率。积累下来的财富比整体经济增长得更快，过去就可能慢慢获得支配未来的力量。",
       "Reading Thomas Piketty’s *Capital in the Twenty-First Century*, I saw for the first time how clearly wealth is more than purchasing power: it is also a person’s relation to time. His most famous formula is *r > g*: under certain long-run historical conditions, the return on capital is higher than the rate of economic growth. When accumulated wealth grows faster than the economy as a whole, the past can slowly gain the power to govern the future."],
      ["他用几个世纪的税收、遗产和收入资料，展示财富集中在不同制度与历史条件下怎样变化。印象最深的是，二十世纪中叶那种相对平等的社会并不是资本主义自然的终点，很大程度上是战争、通货膨胀、税收改革和特殊的增长条件共同造成的。我们今天习以为常的机会平等，也许建立在一段并不寻常的历史经验上。",
       "From centuries of tax, inheritance and income records, he shows how the concentration of wealth has changed under different institutions and historical conditions. What stayed with me most is that the fairly equal societies of the mid-twentieth century were not where capitalism naturally ends up. To a large extent they were produced together by war, inflation, tax reform and unusual conditions of growth. The equality of opportunity we now take for granted may rest on a stretch of history that was far from ordinary."],
      ["这本书最吸引我的，是我能从自己的积累过程里认出一种更普遍的经济机制。我有两处出租房产，也持续买股票和指数基金，主要的新增收入仍然来自专业工作。劳动与资本在我这里不是两个对立的世界，是一个正在进行的转换：用劳动挣收入，把收入变成资产，希望有一天少依赖劳动。这在个人层面完全合理，也算审慎的安排。",
       "What draws me most to the book is that I can recognize, in my own accumulation, a more general economic mechanism. I own two rental properties and keep buying stocks and index funds, while most of my new income still comes from professional work. Labor and capital are not two opposed worlds for me. They are one conversion under way: earn income through labor, turn the income into assets, and hope someday to lean less on labor. At the personal level this is entirely reasonable, even a prudent way to arrange a life."],
      ["可是换上皮凯蒂的历史眼光再看，里面有个问题值得认真想：为什么一个人获得自由的理想方式，常常是逐渐拥有不必亲自劳动也能生钱的资产？",
       "But seen again through Piketty’s historical eye, a question in it deserves real thought: why is the ideal route to freedom so often to come to own assets that earn money without one’s own labor?"],
      ["房地产让这种矛盾最具体。对我来说，出租房产是长期投资，也是家庭财务安全的重要来源，租金帮着承担其他住房开支，让我在职业选择和未来规划上多一些余地。对租客，同一笔租金首先是必须不断支付的生活成本。房产增值会抬高我的净资产，也可能意味着后来进入市场的人要付更高的价格。",
       "Real estate makes this tension most concrete. For me a rental property is a long-term investment and an important part of my family’s financial security. The rent helps pay for other housing costs and gives me a little more room in career choices and plans. For the tenant, the same rent is first of all a cost of living that has to be paid again and again. Appreciation raises my net worth, and may also mean that people who enter the market later must pay more."],
      ["我不认为房东的收入天然缺乏正当性：房产要投入资本、维护和风险，也提供真实的居住服务。可是同一项资产，既能是一个家庭获得财务自由的工具，也能是另一个家庭难以积累财富的原因。读过皮凯蒂，我没法再只用投资回报来看房价和租金。",
       "I do not think a landlord’s income is illegitimate by nature: property takes capital, upkeep and risk, and it provides a real service of housing. Yet the same asset can be one family’s tool for financial freedom and the reason another family cannot build wealth. After Piketty, I can no longer look at house prices and rents in terms of investment return alone."],
      ["股票上我有类似的感受。我定期投入，分散配置，相信长期持有能分享经济增长的收益。这些原则在财务上站得住，也让我能比较有纪律地积累。但复利最重要的前提不是投资者多聪明，而是他先有一笔可以长期不动的本金。",
       "I feel something similar about stocks. I put money in at regular intervals, spread my assets, and trust that holding for the long term shares in the gains of growth. These principles are financially sound and let me accumulate with some discipline. But the first condition of compounding is not how clever the investor is. It is that he already has principal he can leave untouched for a long time."],
      ["收入够付生活开支的人，市场下跌是继续买入的机会；没有积蓄、随时要付房租或医药费的人，同样的下跌可能逼他在最糟的时候卖出。面对同一个市场，两个人拥有的投资机会并不一样。财富最大的优势之一，也许不在回报更高，而在允许持有者等待。",
       "For someone whose income covers living expenses, a market fall is a chance to keep buying. For someone with no savings, who may have to pay rent or a medical bill at any moment, the same fall can force a sale at the worst time. Facing one market, the two do not hold the same investment opportunity. One of the great advantages of wealth may lie not in higher returns but in letting its holder wait."],
      ["这也让我对“财务自由”的理解复杂了。我希望靠长期投资，在相对年轻时过上不必完全依赖工资的生活。这个目标对我，还意味着有权决定怎么使用时间：可以继续工作，也可以少工作；可以追求新的兴趣，不必先算它能不能带来收入。",
       "It has also made my idea of “financial freedom” more complicated. I hope that through long-term investing I can, while still relatively young, live without depending entirely on a salary. For me the goal also means having the right to decide how to spend my time: to keep working or work less, to follow a new interest without first calculating whether it will bring income."],
      ["皮凯蒂提醒我，这种自由不是单靠个人意志造出来的。它靠资本市场、产权制度、租赁关系和长期的经济增长，也靠我已有的教育、职业机会和积累本金的能力。我的努力是真的，让努力变成持续财富的社会条件，同样是真的。",
       "Piketty reminds me that this freedom is not made by individual will alone. It rests on capital markets, property rights, rental relationships and long-run growth, and also on the education, career opportunities and capacity to build principal that I already have. My effort is real. So are the social conditions that let effort turn into lasting wealth."],
      ["我也不想接受过于简单的财富批判。资本不只是把收入从劳动者手里转走的工具，它也支持企业投资、技术创新、住房供给和经济活动。资本回报含有风险补偿，并不总是稳定，也不是必然。*r > g* 对历史有很强的解释力，却不能单独决定分配的全部结果。税收、储蓄、继承、资产价格和制度设计同样重要。",
       "Nor do I want to accept an over-simple critique of wealth. Capital is not only a tool for moving income away from workers. It also supports corporate investment, technological innovation, housing supply and economic activity. Returns on capital include compensation for risk and are neither always stable nor guaranteed. *r > g* explains a great deal of history but cannot decide every outcome of distribution by itself. Taxes, saving, inheritance, asset prices and institutional design matter just as much."],
      ["今天，靠专业劳动积累股票的人，和靠庞大家族遗产生活的人，都有资本收入，所处的社会位置未必相同。把所有资本所有者看成同质的一个阶级，会漏掉现代财富结构里值得分析的差别。",
       "Today, someone who has built up stock holdings through professional work and someone living on a vast family inheritance both have capital income, yet they do not necessarily stand in the same social position. Treating every owner of capital as one uniform class overlooks differences in modern wealth structure that deserve analysis."],
      ["对皮凯蒂提出的累进资本税和国际税收协调，我理解他的动机，对具体做法仍有疑问。财富过度集中，可能把经济优势变成教育、政治和代际机会上的优势，这值得公共政策介入。但税制得考虑资产估值、流动性、投资激励，以及跨境执行的困难。",
       "As for Piketty’s progressive tax on capital and international tax coordination, I understand the motive and still have questions about the means. Excessive concentration of wealth can turn economic advantage into advantage in education, politics and opportunity across generations, and that deserves public policy. But a tax system has to weigh asset valuation, liquidity, investment incentives and the difficulty of enforcing across borders."],
      ["更要紧的是，税收不该成为谈机会平等的唯一语言。住房供给、教育机会、公共服务和劳动者的议价能力，同样决定一个没有继承财富的人能否慢慢积累资产。值得追求的，是让更多人有现实的机会获得经济安全和生活自主权，而不只是限制富人能拥有多少。",
       "More important, taxation should not be the only language for talking about equal opportunity. Housing supply, educational opportunity, public services and workers’ bargaining power also decide whether someone with no inheritance can gradually build assets. What is worth pursuing is a real chance for more people to reach economic security and control over their lives, and not only a limit on how much the rich may own."],
      ["作为文字，《二十一世纪资本论》不算优雅。它冗长，满是统计表和史料，有些论证反复出现。我反倒欣赏它近乎固执的实证态度。皮凯蒂没有把不平等只写成道德问题，他努力把它变成能被历史检验、被公众讨论的经济事实。",
       "As writing, *Capital in the Twenty-First Century* is not elegant. It is long, packed with statistical tables and historical material, and some arguments come round again. I rather admire its almost stubborn empirical manner. Piketty does not write inequality up as only a moral problem. He works to make it an economic fact that history can test and the public can debate."],
      ["他引用巴尔扎克和简·奥斯汀，让数字回到人的生活里：财产决定婚姻，遗产改变命运，收入差异塑造人与人的关系。统计表里抽象的财富分配，到了文学里，就是一个人能爱谁、住哪里，有没有资格拒绝某种生活。",
       "His quotations from Balzac and Jane Austen bring the numbers back into human lives: property decides marriages, inheritance changes fates, differences in income shape how people stand toward one another. The distribution of wealth, abstract in a statistical table, becomes in literature whom a person can love, where they can live, and whether they are entitled to refuse a certain life."],
      ["读完皮凯蒂，我不打算放弃自己的投资计划。我仍然认为积累资产是合理而必要的个人选择，仍然希望靠资本收入获得更多自由。只是我不再愿意把这个选择的成功简单看成个人能力的证明。一个人能通过劳动逐渐成为资本所有者，说明社会流动还在；但如果只有少数人完成得了这种转换，就不能据此断言整个制度已经足够公平。",
       "Having read Piketty, I do not plan to give up my investments. I still hold that building assets is a reasonable and necessary personal choice, and I still hope to gain more freedom from capital income. I am only no longer willing to read the success of that choice simply as proof of personal ability. That a person can become an owner of capital through labor shows that mobility still exists. If only a few can complete the conversion, though, it does not follow that the whole system is fair enough."],
      ["我越来越觉得，财富改变的是一个人面对生活时拒绝的余地，能买多少东西倒在其次。可以拒绝不合适的工作，可以承担一次失败，可以等市场恢复，可以在没有收入的日子里继续体面地生活。这些自由对我都很珍贵。也因为知道它们有多珍贵，我更难忽略那些缺少资产的人，为什么不得不接受自己本不愿接受的条件。",
       "I increasingly feel that what wealth changes is how much room a person has to refuse when facing life, and how much he can buy matters less. He can turn down an unsuitable job, bear a failure, wait for the market to recover, and go on living decently through days without income. All of these freedoms are precious to me. Because I know how precious, it is harder to ignore why people without assets must accept conditions they would otherwise refuse."],
      ["皮凯蒂让我重新看自己的财务目标。我希望资本最终能让我不必为了生存不停出售时间；而一个值得向往的社会，不应要求每个人先成为资本所有者，才能有尊严地安排自己的时间。",
       "Piketty has made me look again at my own financial goal. I hope capital will eventually let me stop selling my time over and over just to survive. A society worth wanting should not require everyone to become an owner of capital first before they may arrange their own time with dignity."],
      ["租金仍然每个月按时进账，那一天，我不需要工作。",
       "The rent still arrives every month, and on that day I do not have to be working."]
    ]
  },
  {
    "date": "2012-07-27",
    "title": "What Does a Child Who Won’t Go to School Refuse?",
    "slug": "the-child-who-would-not-go-to-school",
    "category": "Novel",
    "book": {
      "cover": "summer_rain.jpg",
      "title": "夏雨 (Summer Rain)",
      "author": "玛格丽特·杜拉斯 Marguerite Duras",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of La Pluie d’été, 1990",
        "Ernesto, a boy from an immigrant family, refuses to go to school yet reads with astonishing ease."
      ]
    },
    "place": "于越南美奈\nMui Ne, Vietnam",
    "languages": ["Chinese", "English"],
    "prose": [
      ["今天很热，我在越南美奈翻开《夏雨》，想弄明白杜拉斯为什么会对一个拒绝学校教育、阅读能力却惊人的孩子这样着迷。",
       "It is hot today, and in Mui Ne, Vietnam, I open *La Pluie d’été*, trying to work out why Duras is so taken with a child who refuses school and reads with astonishing ease."],
      ["读到埃内斯托那句有名的话：他不想去学校，因为学校教给他的，是他不知道的事情。乍一听近乎荒谬。再想一下，教育最基本的前提就晃了：一个人该怎样认识世界，谁来决定什么值得认识？",
       "I reach Ernesto’s famous line: he does not want to go to school, because school would teach him things he does not know. At first it sounds almost absurd. Then the most basic premise of education starts to shake: how should a person come to know the world, and who decides what is worth knowing?"],
      ["他拒绝的好像不是知识，是知识必须经权威认证才算数的那套秩序。",
       "What he refuses seems to be not knowledge but the order in which knowledge counts only after an authority has certified it."],
      ["杜拉斯没有把他写成传统意义上的天才儿童。他家里穷，是移民，父母的语言、文化和社会地位都在法国主流社会的边缘。他的特别之处恰恰在于，现有的教育制度解释不了他。他的知识不全来自学校，也不听从学校的分类。",
       "Duras does not make him a gifted child in the usual sense. His family is poor and immigrant, and their language, culture and standing are all at the edge of mainstream French society. What marks him out is exactly that the existing education system cannot fully account for him. His knowledge does not all come from school, and it does not follow school’s categories."],
      ["在越南读这本书，有一点错位。杜拉斯的文学世界总和法属印度支那的殖民记忆缠在一起。故事虽然发生在法国，她对语言、身份和权威的不信任，读起来还是带着殖民地生活留下的痕迹。",
       "Reading it here in Vietnam, I feel a slight displacement. Duras’s literary world is always tangled up with the colonial memory of French Indochina. The story is set in France, but her distrust of language, identity and authority still reads as if it carries a trace left by colonial life."],
      ["我们用漫长的一生学着做一个被社会承认的聪明人，很少问这个社会到底允许我们用几种方式理解世界。",
       "We spend a long life learning to be clever people whom society recognizes, and seldom ask in how many ways this society lets us understand the world."],
      ["还没读完。到这里为止，杜拉斯一直没有替埃内斯托回答这个问题。我接着往下读。",
       "I have not finished. So far Duras has not answered that question on Ernesto’s behalf. I read on."]
    ]
  },
  {
    "date": "2012-05-21",
    "title": "A Photograph That No Longer Exists",
    "slug": "a-photograph-that-no-longer-exists",
    "category": "Novel",
    "book": {
      "cover": "nineteen_eighty_four.jpg",
      "title": "1984",
      "author": "George Orwell",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1949",
        "Winston Smith, who rewrites the past for the Party, tries to keep a truth of his own and is broken by it."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "温斯顿手里",
          "Winston holds in his hand"
        ],
        [
          "一张照片",
          "a photograph"
        ],
        [
          "能证明政府撒谎",
          "that could prove the government lies"
        ]
      ],
      [
        [
          "几分钟后",
          "A few minutes later"
        ],
        [
          "他亲手烧了它",
          "he burns it with his own hands"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "琼斯，阿伦森，卢瑟福",
          "Jones, Aaronson, Rutherford"
        ],
        [
          "三位革命元老",
          "three veterans of the Revolution"
        ],
        [
          "曾经身居高位",
          "who once held high office"
        ],
        [
          "后来被宣布为叛徒",
          "and were later declared traitors"
        ]
      ],
      [
        [
          "公开审判上",
          "At the public trials"
        ],
        [
          "他们承认",
          "they confessed"
        ],
        [
          "曾为敌人做间谍",
          "to having spied for the enemy"
        ]
      ],
      [
        [
          "温斯顿偶然发现的旧报纸照片里",
          "In the old newspaper photograph Winston happens upon"
        ],
        [
          "供认叛国的那一天",
          "on a day they confessed to treason"
        ],
        [
          "三个人在纽约",
          "the three stand in New York"
        ],
        [
          "参加党的活动",
          "at a Party function"
        ]
      ],
      [
        [
          "它不能证明他们从未犯罪",
          "It cannot prove they never committed a crime"
        ],
        [
          "只能证明",
          "It proves only"
        ],
        [
          "至少有一份供词是伪造的",
          "that at least one confession was forged"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "温斯顿明白这意味着什么",
          "Winston knows what this means"
        ],
        [
          "他在真理部上班",
          "He works at the Ministry of Truth"
        ],
        [
          "每天照指示改旧报纸",
          "where each day he alters old newspapers as instructed"
        ],
        [
          "让过去合上党最新的说法",
          "so the past agrees with the Party’s latest line"
        ]
      ],
      [
        [
          "错了的产量预测要更正",
          "Wrong production forecasts are corrected"
        ],
        [
          "失宠的官员得消失",
          "fallen officials must disappear"
        ],
        [
          "昨天的敌人",
          "yesterday’s enemy"
        ],
        [
          "可以成为今天的盟友",
          "may become today’s ally"
        ]
      ],
      [
        [
          "旧文件投进记忆洞",
          "Old documents drop into the memory hole"
        ],
        [
          "送往焚化炉",
          "and go to the incinerator"
        ],
        [
          "新版本重新归档",
          "the new versions are refiled"
        ],
        [
          "像它一直就是那个样子",
          "as if they had always been that way"
        ]
      ],
      [
        [
          "可这一次",
          "But this time"
        ],
        [
          "他手里的不是等着修改的报道",
          "what he holds is no report awaiting revision"
        ],
        [
          "是能证明修改本身",
          "it is evidence that can prove"
        ],
        [
          "是一场骗局的证据",
          "the revising itself is a fraud"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我想，奥威尔最精巧的安排",
          "I think Orwell’s finest touch"
        ],
        [
          "是让温斯顿亲手毁掉它",
          "is that Winston destroys it with his own hands"
        ]
      ],
      [
        [
          "他不是一直守着真理",
          "He is no hero who held to the truth"
        ],
        [
          "最后被暴力击败的英雄",
          "and was beaten in the end by force"
        ]
      ],
      [
        [
          "发现证据的瞬间",
          "At the very moment he finds the evidence"
        ],
        [
          "他已经知道自己会怎么处理它",
          "he already knows what he will do with it"
        ],
        [
          "思想还在反抗",
          "His mind still resists"
        ],
        [
          "双手早就学会了服从",
          "his hands learned long ago to obey"
        ]
      ],
      [
        [
          "多年重复的工作",
          "Years of repeated work"
        ],
        [
          "让销毁文件",
          "have made destroying papers"
        ],
        [
          "成了近乎本能的动作",
          "an almost instinctive motion"
        ],
        [
          "这一次",
          "This time"
        ],
        [
          "他甚至没有为自己的信念",
          "he does not even stop for his own belief"
        ],
        [
          "多停留片刻",
          "for a moment"
        ]
      ],
      [
        [
          "他憎恨党篡改历史",
          "He hates the Party’s tampering with history"
        ],
        [
          "却靠篡改历史过日子",
          "and lives by tampering with history"
        ],
        [
          "他渴望证明真相存在",
          "He longs to prove that truth exists"
        ],
        [
          "真相落到手里",
          "and when truth falls into his hand"
        ],
        [
          "他亲自让它消失",
          "he makes it vanish himself"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "奥威尔1948年写这本书",
          "When Orwell wrote in 1948"
        ],
        [
          "斯大林时代的莫斯科审判",
          "the Moscow trials of the Stalin era"
        ],
        [
          "早已摆在那里",
          "had long been on show"
        ]
      ],
      [
        [
          "权力怎样制造供词",
          "how power manufactures confessions"
        ],
        [
          "清洗昔日的革命同志",
          "purges old revolutionary comrades"
        ],
        [
          "重写官方历史",
          "rewrites official history"
        ]
      ],
      [
        [
          "琼斯，阿伦森，卢瑟福",
          "Jones, Aaronson and Rutherford"
        ],
        [
          "让人想起那些",
          "recall the ones"
        ],
        [
          "参与创造了革命",
          "who helped make the revolution"
        ],
        [
          "又被革命抹去的人",
          "and were erased by it"
        ]
      ],
      [
        [
          "奥威尔没有让温斯顿",
          "Orwell does not make Winston"
        ],
        [
          "成为揭露一切的勇敢记者",
          "the brave journalist who exposes it all"
        ],
        [
          "他让他当档案修改者",
          "He makes him an editor of records"
        ]
      ],
      [
        [
          "于是这本小说讲的",
          "So the novel is about"
        ],
        [
          "不只是独裁者怎样撒谎",
          "more than how dictators lie"
        ],
        [
          "也是普通人",
          "It is about ordinary people"
        ],
        [
          "明知谎言存在",
          "who know the lies exist"
        ],
        [
          "仍然参与制造它们",
          "and still take part in making them"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "更让人不安的是",
          "More disturbing"
        ],
        [
          "温斯顿并不总是讨厌这份工作",
          "Winston does not always dislike his work"
        ],
        [
          "有时他享受",
          "Sometimes he enjoys"
        ],
        [
          "改写历史要的技巧和创造力",
          "the skill and creativity that altering history takes"
        ]
      ],
      [
        [
          "他为一个从未存在的奥吉尔维同志",
          "For a Comrade Ogilvy who never existed"
        ],
        [
          "编出完整的革命生涯",
          "he invents a full revolutionary career"
        ],
        [
          "虚构的人留下的官方记录",
          "The fictional man leaves more official record"
        ],
        [
          "比真实活过的人还多",
          "than people who actually lived"
        ]
      ],
      [
        [
          "他知道自己在造谎",
          "He knows he is making lies"
        ],
        [
          "却从一个造得足够完美的谎里",
          "and still takes from a lie made perfectly"
        ],
        [
          "得到一点职业的满足",
          "a small professional satisfaction"
        ]
      ],
      [
        [
          "所以照片揭出的",
          "So what the photograph exposes"
        ],
        [
          "不只是党的虚伪",
          "is not only the Party’s hypocrisy"
        ],
        [
          "也有温斯顿自己的处境",
          "but Winston’s own position"
        ]
      ],
      [
        [
          "他不站在谎言之外",
          "He does not stand outside the lies"
        ],
        [
          "清白地望着一个腐败的世界",
          "looking innocently at a corrupt world"
        ],
        [
          "他是这个世界的熟练工匠",
          "He is a skilled craftsman of that world"
        ],
        [
          "还懂得欣赏自己的手艺",
          "who even knows how to admire his craft"
        ]
      ],
      [
        [
          "要是这张照片",
          "Had the photograph"
        ],
        [
          "出现在别人的办公桌上",
          "turned up on another man’s desk"
        ],
        [
          "他或许早已按程序销毁",
          "he might long ago have destroyed it by procedure"
        ],
        [
          "不会有一点迟疑",
          "without a moment’s hesitation"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "可是他仍然渴望真相",
          "And yet he still longs for truth"
        ]
      ],
      [
        [
          "他偷偷写日记",
          "He secretly writes a diary"
        ],
        [
          "留住不能公开说的念头",
          "to keep the thoughts that cannot be said in public"
        ]
      ],
      [
        [
          "他向年老的普通人",
          "He questions old ordinary people"
        ],
        [
          "追问革命之前的生活",
          "about life before the Revolution"
        ],
        [
          "想从破碎的记忆里",
          "hoping to find in broken memories"
        ],
        [
          "找到一个不归党管的过去",
          "a past the Party does not control"
        ]
      ],
      [
        [
          "他在旧货店",
          "In an antique shop"
        ],
        [
          "买下一枚嵌着珊瑚的玻璃镇纸",
          "he buys a glass paperweight with a piece of coral"
        ],
        [
          "迷上里面那个小小的世界",
          "and is entranced by the little world inside"
        ],
        [
          "看上去与现实隔开",
          "which seems cut off from reality"
        ]
      ],
      [
        [
          "照片，日记，镇纸",
          "The photograph, the diary, the paperweight"
        ],
        [
          "在他心里渐渐成了同一样东西",
          "gradually become one thing in his mind"
        ],
        [
          "一个不必经党许可",
          "a past that can exist alone"
        ],
        [
          "也能独自存在的过去",
          "without the Party’s permission"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "他的怀旧同样充满矛盾",
          "His nostalgia is full of contradiction too"
        ],
        [
          "向往革命之前的年代",
          "He yearns for the time before the Revolution"
        ],
        [
          "却几乎不知道那时是什么样子",
          "and hardly knows what it was like"
        ]
      ],
      [
        [
          "他相信过去一定有",
          "He believes the past must have held"
        ],
        [
          "比现在更实在的生活",
          "a more real life than the present"
        ],
        [
          "却只能靠零碎的回忆",
          "but can imagine it only from scattered memories"
        ],
        [
          "和偶然找到的物件去想象",
          "and objects found by chance"
        ]
      ],
      [
        [
          "党不停地制造假历史",
          "The Party keeps manufacturing false history"
        ],
        [
          "温斯顿有时也用自己的愿望",
          "and Winston sometimes fills the gaps"
        ],
        [
          "去填历史的空白",
          "with his own wishes"
        ]
      ],
      [
        [
          "区别在于",
          "The difference is"
        ],
        [
          "他至少还承认自己可能记错",
          "he at least still admits he may have remembered wrongly"
        ],
        [
          "还盼着找到能纠正他的证据",
          "and still hopes for evidence that can correct him"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "所以那张照片格外重要",
          "So the photograph matters especially"
        ],
        [
          "它不是让人安慰的想象",
          "It is not a comforting imagining"
        ],
        [
          "是能检验的事实",
          "it is a fact that can be checked"
        ]
      ],
      [
        [
          "三个男人某一天出现在纽约",
          "Three men appeared in New York on a certain day"
        ],
        [
          "温斯顿喜欢他们也好",
          "Whether Winston likes them"
        ],
        [
          "厌恶他们也好",
          "or loathes them"
        ],
        [
          "这件事已经发生了",
          "it has happened"
        ]
      ],
      [
        [
          "照片不必赞同他的政治立场",
          "The photograph need not agree with his politics"
        ],
        [
          "也不必满足他对过去的怀念",
          "or satisfy his longing for the past"
        ],
        [
          "它只是在那里",
          "It simply exists"
        ],
        [
          "沉默着",
          "silently"
        ]
      ],
      [
        [
          "然而他还是把它烧了",
          "And yet he burned it"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我想，他后来对奥勃良的信任",
          "I think his later trust in O’Brien"
        ],
        [
          "延续着同一个矛盾",
          "carries on the same contradiction"
        ]
      ],
      [
        [
          "他明明知道党无处不在",
          "He knows the Party is everywhere"
        ],
        [
          "却想相信党内有个掌权的人",
          "and still longs to believe a man with power inside it"
        ],
        [
          "能够懂他",
          "can understand him"
        ]
      ],
      [
        [
          "他一个人扛不住反抗的孤独",
          "Alone, he cannot bear the loneliness of resistance"
        ],
        [
          "就把希望放在一个",
          "so he puts his hope in a man"
        ],
        [
          "看起来也怀疑制度的人身上",
          "who seems to doubt the system too"
        ]
      ],
      [
        [
          "他厌恶权力垄断真理",
          "He hates power’s monopoly on truth"
        ],
        [
          "又等着权力内部的人",
          "and still waits for someone from inside power"
        ],
        [
          "告诉他，他的判断是对的",
          "to tell him his judgment is right"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "到了友爱部",
          "At the Ministry of Love"
        ],
        [
          "奥勃良终于让他看到",
          "O’Brien finally shows him"
        ],
        [
          "这份期待的代价",
          "the price of that expectation"
        ]
      ],
      [
        [
          "奥勃良举起四根手指",
          "O’Brien holds up four fingers"
        ],
        [
          "要他看见五根",
          "and demands that he see five"
        ]
      ],
      [
        [
          "他又把那张早已消失的照片",
          "He brings out again the long-vanished photograph"
        ],
        [
          "当着温斯顿的面毁掉",
          "destroys it before Winston’s eyes"
        ],
        [
          "然后否认它存在过",
          "and then denies it ever existed"
        ]
      ],
      [
        [
          "那一刻，温斯顿面对的",
          "At that moment what Winston faces"
        ],
        [
          "已不只是身体的痛",
          "is no longer only bodily pain"
        ],
        [
          "是他一生里最解不开的冲突",
          "it is the conflict of his life he cannot resolve"
        ]
      ],
      [
        [
          "他相信现实独立于人的意志",
          "He believes reality is independent of human will"
        ],
        [
          "却越来越想靠服从别人的意志",
          "and more and more longs to end his suffering"
        ],
        [
          "来结束痛苦",
          "by submitting to another’s will"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "酷刑终于让他屈服",
          "Torture finally makes him submit"
        ],
        [
          "奥威尔却不满足于",
          "but Orwell is not content"
        ],
        [
          "让他说出违心的话",
          "with having him say what he does not mean"
        ]
      ],
      [
        [
          "说谎",
          "Lying"
        ],
        [
          "仍然意味着心里留着真相",
          "still means keeping the truth in one’s heart"
        ],
        [
          "党要毁掉的",
          "What the Party wants to destroy"
        ],
        [
          "是他心里最后那块",
          "is the last place in him"
        ],
        [
          "能分辨两者的地方",
          "that can tell the two apart"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "小说结尾",
          "At the end of the novel"
        ],
        [
          "温斯顿坐在栗树咖啡馆里",
          "Winston sits in the Chestnut Tree Café"
        ],
        [
          "听着战争的消息",
          "listening to news of the war"
        ],
        [
          "终于觉得自己爱老大哥",
          "and finally feels that he loves Big Brother"
        ]
      ],
      [
        [
          "他不用再偷偷留着照片",
          "He no longer needs to keep photographs in secret"
        ],
        [
          "不用再为四根手指和五根手指争辩",
          "nor argue about four fingers and five"
        ],
        [
          "曾经折磨他的矛盾",
          "The contradiction that once pained him"
        ],
        [
          "好像终于解决了",
          "seems at last resolved"
        ]
      ],
      [
        [
          "这份平静",
          "But this calm"
        ],
        [
          "比他先前的恐惧更可怕",
          "is more terrible than his earlier fear"
        ]
      ],
      [
        [
          "到了最后",
          "By the end"
        ],
        [
          "他不再需要背叛自己的信念",
          "he no longer needs to betray his convictions"
        ],
        [
          "那个曾经能被他背叛的自己",
          "The self he could once have betrayed"
        ],
        [
          "已经不在了",
          "is no longer there"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "我记得温斯顿",
          "I remember the moment"
        ],
        [
          "把照片投进记忆洞的那一刻",
          "Winston drops the photograph into the memory hole"
        ]
      ],
      [
        [
          "那时他至少还知道",
          "Then he at least still knew"
        ],
        [
          "自己在销毁什么",
          "what he was destroying"
        ],
        [
          "他的手服从了党",
          "His hand obeyed the Party"
        ],
        [
          "思想却还能判断这个动作",
          "but his mind could still judge the act"
        ]
      ],
      [
        [
          "他还会恐惧",
          "He could still fear"
        ],
        [
          "还会后悔",
          "still regret"
        ],
        [
          "还会因为一张照片",
          "still feel, because of one photograph"
        ],
        [
          "觉得整个世界荒谬",
          "the absurdity of the whole world"
        ]
      ]
    ]
  },
  {
    "date": "2012-06-30",
    "title": "Nothing Went Wrong, and Yet the Zest Was Gone",
    "slug": "nothing-went-wrong",
    "category": "Novel",
    "book": {
      "cover": "little_horses_tarquinia.jpg",
      "title": "塔尔奎尼亚的小马 (The Little Horses of Tarquinia)",
      "author": "玛格丽特·杜拉斯 Marguerite Duras",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of Les Petits Chevaux de Tarquinia, 1953",
        "French holidaymakers idle on the Italian coast while a young man’s death hangs over the summer."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["亲爱的杜拉斯女士：",
       "Dear Madame Duras,"],
      ["我正处在不停盼着未来的年纪。下个月我要去您写过的印度支那，再往后是去美国留学的日子。刚读《塔尔奎尼亚的小马》时，我对书里那些在意大利海边度假的成年人没有多少同情。他们整天闲聊、喝酒、游泳，有闲暇，有旅行，有爱的可能，却总摆脱不了沉闷。他们为什么还这样疲惫？",
       "I am at an age when I keep looking ahead. Next month I travel to the Indochina you wrote about, and after that comes my life as a student in America. When I first read *The Little Horses of Tarquinia*, I had little sympathy for the grown-ups holidaying on the Italian coast. They chat, drink and swim all day. They have leisure, travel, the chance of love, and still they cannot shake off the dullness. Why are they so tired?"],
      ["您没有给这份疲惫安排一个明确的原因，这是您高明的地方。炎热的天气，重复的谈话，实现不了的欲望，把那里的生活弄得几乎静止。一个年轻的排雷工人死了，他的父母守着遗体，这个看似轻浮的度假世界一下露出了残酷的底色。游客们谈爱情、婚姻和离开的可能，死者的父母却固执地守着儿子。两边没有交流。死亡没有给活着的人什么启示，连他们的日常也没有打断。",
       "You give that tiredness no clear cause, and that is your skill. The heat, the repeated conversations and the desires that cannot be met leave life there almost motionless. A young mine-clearing worker dies, his parents keep watch over the body, and the seemingly frivolous holiday world shows its cruel underside. The tourists talk of love, marriage and leaving. The dead man’s parents stubbornly stay with their son. The two sides do not speak to each other. Death gives the living no revelation and does not even interrupt their days."],
      ["后来我又读了一遍，才开始懂得这种并置的力量。",
       "Only when I read it again did I begin to understand the force of that juxtaposition."],
      ["现代生活里，选择多得让任何一种生活都显得可以替换。旅行能换一个国家，工作能换一家公司，关系能重新开始，可没人能确定哪一种改变会改变自己。萨拉面对另一段爱情的诱惑，迟迟迈不出那一步。您不急着判断她是胆怯、忠诚，还是已经没了爱的能力。您只让欲望在热空气里慢慢发酵，直到我看出，令人窒息的是她对自己欲望的不确定，婚姻倒在其次。",
       "In modern life there are so many choices that any one life looks replaceable. We can change country by travelling, change company at work, begin a relationship again, and no one can be sure which change will change them. Sara, faced with the pull of another love, cannot take the decisive step. You are in no hurry to judge whether she is timid, faithful, or has lost the capacity to love. You only let desire ferment slowly in the hot air, until I saw that what suffocates is her uncertainty about her own desire, with marriage coming second."],
      ["您写了一部几乎拒绝情节推进的小说，它最深的地方就在这份拒绝。年轻时，我们以为人生的痛苦来自得不到想要的东西。后来才发现更难解释的是：终于有了选择的自由，我们仍不知道自己要去哪里。",
       "You wrote a novel that almost refuses to move its plot forward, and its depth lies in that refusal. When young, we think life’s pain comes from not getting what we want. Later we find the harder thing to explain: that having finally won the freedom to choose, we still do not know where we want to go."],
      ["下个月，我就要出发去印度支那了。",
       "Next month I set out for Indochina."],
      ["您的读者，Haotian",
       "Your reader, Haotian"]
    ]
  },
  {
    "date": "2011-04-15",
    "title": "History Has No Rehearsal",
    "slug": "history-has-no-rehearsal",
    "category": "History",
    "book": {
      "cover": "sternstunden.jpg",
      "title": "人类的群星闪耀时 (Sternstunden der Menschheit)",
      "author": "斯蒂芬·茨威格 Stefan Zweig",
      "language": "Chinese",
      "country": "Austria",
      "original": "German",
      "lines": [
        "History · Chinese translation of Sternstunden der Menschheit, 1927",
        "Historical miniatures of fateful moments, among them Napoleon’s defeat at Waterloo."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["北京的四月，风里还带着沙尘。身边的人似乎都在为尚未发生的事情做准备，有人准备考试，有人修改简历，有人讨论出国。仿佛只要准备得足够充分，未来便会按照预想的方式展开。",
       "April in Beijing, and the wind still carries dust. Everyone around me seems to be preparing for something that has not yet happened: some for exams, some revising résumés, some talking about going abroad. As if, with enough preparation, the future would unfold just as imagined."],
      ["我刚读完茨威格的《人类的群星闪耀时》，却对这本书产生了一种复杂的反感。",
       "I have just finished Zweig’s *Sternstunden der Menschheit*, and yet I feel a complicated aversion to the book."],
      ["这种反感主要来自格鲁希。",
       "That aversion comes mainly from Grouchy."],
      ["1815年6月18日，拿破仑与威灵顿在滑铁卢决战，格鲁希率领法军部队追击普鲁士军队。远处传来炮声，部下建议向主战场靠拢，他却坚持执行既定命令。茨威格把这个决定写成拿破仑帝国覆灭的关键时刻：一个缺乏独立判断力的将领，因为没能及时行动，错过了改变欧洲历史的机会。",
       "On 18 June 1815, Napoleon and Wellington fight the decisive battle at Waterloo, while Grouchy leads a French force in pursuit of the Prussians. Cannon fire sounds in the distance, his subordinates urge him to move toward the main battle, but he insists on carrying out his standing orders. Zweig writes this decision as the crucial moment in the fall of Napoleon’s empire: a general without independent judgment, failing to act in time, misses the chance to change the history of Europe."],
      ["初读时，我几乎也被这种解释说服。毕竟，我们已经知道滑铁卢的结局，知道普鲁士军队最终赶到战场，也知道拿破仑再没有机会重建他的帝国。",
       "On first reading I was almost persuaded by this account. After all, we already know how Waterloo ends, that the Prussian army did reach the field, and that Napoleon never again had the chance to rebuild his empire."],
      ["但我很快意识到，自己其实站在一个极不公平的位置上。",
       "But I soon realized that I was standing in a very unfair position."],
      ["我知道格鲁希不知道的事情。",
       "I know what Grouchy did not."],
      ["他听见炮声，却不知道主战场的完整态势；他知道自己奉命追击普鲁士军队，却无法确定擅自改变部署会带来什么后果。他必须在信息残缺的情况下行动，而我却可以在近两百年后，舒舒服服地坐着，根据已经发生的结局判断他的对错。",
       "He hears the guns but does not know the whole picture of the main battle; he knows he was ordered to pursue the Prussians but cannot be sure what would follow if he changed the deployment on his own. He must act on incomplete information, while I, nearly two hundred years later, can sit comfortably and judge his right and wrong by an outcome that has already happened."],
      ["茨威格的叙述正是利用了这种不对称。",
       "Zweig’s narration exploits precisely this asymmetry."],
      ["他把格鲁希的谨慎写成平庸，把服从写成怯懦，把没有发生的另一种可能写成几乎触手可及的胜利。然而，倘若格鲁希真的违抗命令，最终仍然失败，历史是否又会责备他轻率、鲁莽、不懂得军事纪律？",
       "He writes Grouchy’s caution as mediocrity, his obedience as cowardice, and the possibility that never happened as a victory almost within reach. Yet had Grouchy truly disobeyed his orders and still failed, would history not blame him for being rash, reckless and ignorant of military discipline?"],
      ["我开始怀疑，所谓历史人物的性格，究竟有多少是他们真正拥有的，又有多少是后人根据结果替他们塑造的。",
       "I began to wonder how much of a historical figure’s character is truly his own, and how much was shaped for him by later generations according to the result."],
      ["这种怀疑很快变得私人起来。",
       "This doubt soon became personal."],
      ["这种怀疑很快变得私人起来。我也面对着类似的选择：留在熟悉的道路上，还是离开已经建立的生活，去一个陌生的地方重新开始？",
       "This doubt soon became personal. I face a similar choice: stay on the familiar road, or leave the life I have built and start over somewhere unfamiliar?"],
      ["我还没有答案。",
       "I do not have an answer yet."],
      ["这样的决定很容易被想象得很有勇气，但事情并没有那么浪漫。我并不比其他人更清楚未来，只是对另一种生活抱有期待。每一步都有具体的理由，却没有任何一步能够保证最终的结果。",
       "Such a decision is easy to imagine as courageous, but it is not so romantic. I do not see the future any better than anyone else; I simply hold hopes for a different life. Each step has its concrete reasons, and none guarantees the final result."],
      ["如果说格鲁希面对的是远处传来的炮声，那么我面对的便是各种各样的声音。",
       "If Grouchy faced cannon fire from afar, what I face are voices of every kind."],
      ["有人说远方有更好的机会，有人提醒我代价与风险，也有人认为，既然已经熟悉眼前的环境，何必重新开始。我无法验证这些判断，只能根据自己掌握的有限信息，决定相信哪一种未来。",
       "Some say there are better opportunities far away; some warn me of the cost and risk; others ask why start over when I already know my surroundings. I cannot verify any of these judgments, and can only decide, from the limited information I have, which future to believe in."],
      ["更重要的是，即使做出决定，选择也不会就此结束。",
       "More importantly, even once I decide, the choosing will not end there."],
      ["成功的故事总是讲得很清楚：某个决定性的机会，只要足够敏锐，就能够及时抓住。",
       "Stories of success are always told clearly: there is a decisive opportunity, and if one is sharp enough, it can be seized in time."],
      ["可是对于身处其中的人，未来远没有这些故事描绘得那样清晰。",
       "But for the person inside the story, the future is far less clear than such stories paint it."],
      ["每一个决定都可能影响后面的选择，而我无法预先知道哪一个才是关键。",
       "Every decision may affect the choices that follow, and I cannot know in advance which one is the key."],
      ["格鲁希至少有一份明确的军事命令。",
       "Grouchy at least had a clear military order."],
      ["我却发现，现代社会提供给年轻人的往往是许多彼此矛盾的命令：要追求理想，也要考虑现实；要敢于冒险，也要保持稳定；要独立思考，也要遵守规则；要尽早规划未来，却又要随时准备改变方向。",
       "What modern society offers the young, I find, is often many contradictory orders: pursue your ideals, but be realistic; dare to take risks, but stay stable; think independently, but follow the rules; plan the future early, yet be ready to change course at any time."],
      ["如果格鲁希的困境是服从还是违抗，那么我的困境则是，究竟应该服从哪一种关于成功的定义。",
       "If Grouchy’s dilemma was whether to obey or disobey, mine is which definition of success to obey."],
      ["我不愿意简单地把自己比作格鲁希。一个年轻人的选择，与决定数万士兵命运的军事行动，当然不能相提并论。但我们面对着同一种认识上的限制：必须在未来尚未发生时做出决定，却很可能在未来发生以后，才被告知当初究竟应该怎样选择。",
       "I do not want to simply compare myself to Grouchy. A young person’s choice cannot of course be put beside a military operation that decided the fate of tens of thousands of soldiers. But we face the same epistemic limit: we must decide before the future has happened, and are likely to be told how we should have chosen only after it has."],
      ["茨威格没有充分承认这种限制。",
       "Zweig does not fully acknowledge this limit."],
      ["他太热衷于寻找那个本来可以拯救历史的瞬间，以至于忽略了身处其中的人并不知道自己正在参加一场决定性的考试。格鲁希在他的笔下，仿佛因为没有看见未来而犯下了错误。",
       "He is so eager to find the moment that might have saved history that he overlooks that the people inside it do not know they are sitting a decisive exam. In his pages, Grouchy seems to have erred by not seeing the future."],
      ["这是一种奇怪的历史道德。",
       "This is a strange kind of historical morality."],
      ["它要求一个人不仅对自己的行为负责，还要对自己无法预见的结果负责。",
       "It demands that a person answer not only for his actions but for consequences he could not foresee."],
      ["我尤其不喜欢茨威格把格鲁希的失败归结为平庸。因为平庸在这里几乎成了一种原罪：一个人只要没有表现出超越时代的洞察力，便不配得到历史的宽容。",
       "I especially dislike Zweig’s attributing Grouchy’s failure to mediocrity. Because mediocrity here becomes almost an original sin: a person who has not shown insight beyond his time does not deserve history’s forgiveness."],
      ["但如果每个人都必须拥有改变历史的能力，才能证明自己的判断值得尊重，那么绝大多数人的人生，从一开始便注定失败。",
       "But if everyone must have the power to change history to prove that their judgment deserves respect, then the lives of the great majority are doomed to failure from the start."],
      ["我想到身边那些普通人。我们努力了解这个社会的规则，并不是因为缺乏勇气，而是因为现实中的选择从来不发生在完全自由的条件下。",
       "I think of the ordinary people around me. We try to learn this society’s rules not for lack of courage, but because real choices never happen under completely free conditions."],
      ["有时候，遵守规则本身就是一种冒险；有时候，改变方向也未必意味着真正的独立。",
       "Sometimes following the rules is itself a risk; sometimes changing direction does not necessarily mean true independence."],
      ["格鲁希的问题因此比茨威格愿意承认的更加复杂。他的判断也许确实存在严重失误，但这并不意味着他的失败能够被简化为性格上的缺陷。一个人可能在充分履行自己职责的情况下做出错误决定，也可能因为偶然的成功而被误认为具有非凡的远见。",
       "Grouchy’s problem is therefore more complicated than Zweig is willing to admit. His judgment may indeed have been seriously mistaken, but this does not mean his failure can be reduced to a defect of character. A person may make a wrong decision while fully discharging his duty, and may be mistaken for a man of extraordinary foresight because of a chance success."],
      ["结果可以检验行动的后果，却不能自动证明行动者当时的判断是否合理。",
       "An outcome can test the consequences of an action, but cannot automatically prove whether the actor’s judgment at the time was reasonable."],
      ["这一点对我格外重要。",
       "This matters especially to me."],
      ["如果几年以后，一切顺利，今天的决定大概会被解释为勇敢而明智。倘若事情不如人意，同样的决定又可能被看作年轻时的一次冒险。",
       "If in a few years all goes well, today’s decision will probably be read as brave and wise. If things go badly, the same decision may be seen as a youthful gamble."],
      ["但无论结局如何，都不应该改变我今天做出选择时的处境。",
       "But whatever the ending, it should not change the situation I am in as I choose today."],
      ["我无法要求现在的自己拥有未来的知识，也不愿意因为某个尚未发生的结果，提前否定此刻认真思考过的判断。",
       "I cannot ask my present self to have future knowledge, nor do I want to dismiss in advance, because of some outcome not yet come, a judgment I have thought through with care."],
      ["**历史没有彩排。真正的不公平，不是我们只有一次机会做出选择，而是后人总喜欢拿着已经写好的剧本，责备当事人为什么没有按照结局行动。**",
       "**History has no rehearsal. The real unfairness is not that we have only one chance to choose, but that later generations like to hold a script already written and blame the people involved for not acting according to the ending.**"],
      ["今晚风终于停了。我明天还有事情要做，还有没有读完的书，还有许多暂时看不清结果的事情。",
       "Tonight the wind has finally stopped. Tomorrow I have things to do; there are books still unread, and many things whose outcomes I cannot yet see."],
      ["格鲁希听见炮声的时候，并不知道那是滑铁卢。",
       "When Grouchy heard the guns, he did not know it was Waterloo."],
      ["我走在夜色里，也不知道自己究竟正在走向哪里。",
       "Walking through the night, I do not know where I am heading either."],
      ["我当然希望自己的选择最终能够得到好的结果。但如果有一天，它们没有通向我所期待的生活，我希望那时的自己至少能够记得：2011年春天做出这些决定的人，并不是一个明知结局却故意走错方向的傻瓜。",
       "Of course I hope my choices will in the end turn out well. But if one day they do not lead to the life I hope for, I want my later self at least to remember: the person who made these decisions in the spring of 2011 was not a fool who knew the ending and deliberately went the wrong way."],
      ["他只是一个站在人生岔路口、试图为自己寻找未来的年轻人。",
       "He was only a young man at a fork in his life, trying to find a future for himself."],
      ["正如两百年前的格鲁希，他只能根据当时听见的炮声，决定下一步该往哪里走。",
       "Like Grouchy two hundred years ago, he could only decide, by the guns he heard at the time, which way to go next."]
    ]
  },
  {
    "date": "2016-08-01",
    "title": "The Complicity of the Clear-Sighted",
    "slug": "complicity-of-the-clear-sighted",
    "category": "Novel",
    "book": {
      "cover": "burmese_days.jpg",
      "title": "Burmese Days",
      "author": "George Orwell",
      "language": "English",
      "country": "United Kingdom",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1934",
        "In colonial Burma, the English timber merchant Flory is caught between the Club’s racism and his friendship with Dr. Veraswami."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["弗洛里最令人厌恶的地方，恰恰是他并不令人厌恶。",
       "What is most repellent about Flory is precisely that he is not repellent."],
      ["他鄙视英国人的傲慢，厌倦欧洲人俱乐部里粗俗的种族偏见，也能够欣赏缅甸文化。在一群自诩文明、实际上却狭隘而庸俗的殖民者中间，他几乎是唯一值得同情的人。",
       "He despises English arrogance, is weary of the vulgar racial prejudice of the European Club, and is able to appreciate Burmese culture. Among a set of colonists who think themselves civilized but are in fact narrow and coarse, he is almost the only one worth sympathy."],
      ["但我怀疑，这种同情恰恰是奥威尔设置的陷阱。",
       "But I suspect that this sympathy is precisely the trap Orwell sets."],
      ["弗洛里与印度医生维拉斯瓦米的友谊，是小说中最值得玩味的关系。医生希望获得欧洲人俱乐部的接纳，因为这种身份意味着声望，也意味着面对地方官员吴波金的政治陷害时多一层保护。弗洛里理解朋友的处境，却始终顾虑公开支持他所需付出的社会代价。",
       "Flory’s friendship with the Indian doctor, Veraswami, is the most intriguing relationship in the novel. The doctor hopes to be admitted to the European Club, because that status means prestige and also an added layer of protection against the political plotting of the local official U Po Kyin. Flory understands his friend’s position, but keeps worrying about the social cost of publicly supporting him."],
      ["这里存在一种根本的不对称：对弗洛里而言，种族平等是一项可以赞同、讨论甚至为之痛苦的原则；对维拉斯瓦米而言，它却关乎现实生活中的安全与尊严。",
       "There is a fundamental asymmetry here: for Flory, racial equality is a principle he can endorse, discuss and even suffer over; for Veraswami, it concerns safety and dignity in real life."],
      ["更令人不安的是，维拉斯瓦米并不是一个试图从根本上反抗帝国秩序的人。他对英国统治怀有近乎天真的信任，赞美英国带来的医学、教育与行政制度，甚至在与弗洛里的争论中，常常由他来为帝国辩护。",
       "More unsettling still, Veraswami is no one trying to resist the imperial order at its root. He holds an almost naive trust in British rule, praises the medicine, education and administrative system the British brought, and in his arguments with Flory it is often he who defends the empire."],
      ["一个英国人批判帝国，一个印度人赞美帝国。奥威尔安排的这种角色倒置，远比简单的压迫者与受害者对立更加尖锐。",
       "An Englishman criticizes the empire, an Indian praises it. Orwell’s reversal of roles is far sharper than a simple opposition of oppressor and victim."],
      ["维拉斯瓦米的忠诚当然可以被理解为殖民教育塑造的结果，但我不愿意轻易把他归结为一个缺乏独立意识的人。他知道英国人的认可意味着什么，也知道自己在殖民官僚体系中的地位有多么脆弱。他所追求的不是抽象的政治解放，而是在既定规则下尽可能保全自己的职业、声誉与生活。",
       "Veraswami’s loyalty can of course be understood as a product of colonial education, but I am unwilling to dismiss him as lacking independent consciousness. He knows what English recognition means and how fragile his position in the colonial bureaucracy is. What he seeks is not abstract political liberation but to preserve his career, reputation and life as far as possible under the given rules."],
      ["因此，他的沉默并不完全是思想上的屈服，也可能是一种被迫形成的生存理性。",
       "So his silence is not entirely an intellectual surrender; it may also be a survival rationality formed under compulsion."],
      ["真正值得追问的是：为什么维拉斯瓦米必须通过赞美统治者，才能证明自己值得被平等对待？",
       "The question really worth asking is: why must Veraswami praise his rulers in order to prove he deserves equal treatment?"],
      ["他拥有医学知识、专业能力和社会地位，却仍然需要一个英国朋友为自己提供政治庇护。他可以成为优秀的医生，可以接受西方教育，甚至可以比某些英国人更热情地维护帝国的价值观，却始终无法凭借这些成就摆脱种族身份带来的限制。",
       "He has medical knowledge, professional ability and social standing, yet still needs an English friend to give him political cover. He can be an excellent doctor, can accept a Western education, can even defend the empire’s values more warmly than some Englishmen, and still cannot, by these achievements, escape the limits imposed by his racial identity."],
      ["所谓文明与进步，在这里显露出令人难堪的矛盾：殖民者声称要通过教育使当地人获得现代文明，却又拒绝承认受过教育的当地人与自己拥有同等资格。",
       "Here so-called civilization and progress reveal an embarrassing contradiction: the colonizers claim to bring modern civilization to the natives through education, yet refuse to recognize that educated natives hold equal standing with themselves."],
      ["维拉斯瓦米越努力证明自己符合英国人的标准，越暴露出这些标准并不真正向他开放。",
       "The harder Veraswami works to prove he meets the English standards, the more it exposes that those standards are not truly open to him."],
      ["然而，小说并没有充分进入他的内心。",
       "Yet the novel does not fully enter his inner life."],
      ["我们听见他滔滔不绝地赞美英国，听见他与弗洛里争论，也看见他在吴波金的阴谋中逐渐失去地位，却很少有机会知道，在这些公开表达之外，他究竟如何理解自己的屈辱。",
       "We hear him praise England at length, hear him argue with Flory, and see him gradually lose his position in U Po Kyin’s plot, but we rarely get to know how, beyond these public expressions, he understands his own humiliation."],
      ["他是否曾经怀疑过自己对帝国的忠诚？是否意识到弗洛里的友谊无法真正跨越种族等级？当他发现专业能力和政治忠诚都不足以保护自己时，又如何重新理解此前信奉的秩序？",
       "Did he ever doubt his loyalty to the empire? Did he realize that Flory’s friendship could not truly cross the racial hierarchy? When he found that neither professional ability nor political loyalty could protect him, how did he come to understand anew the order he had believed in?"],
      ["奥威尔没有给予这些问题与弗洛里的精神危机同等的叙述空间。",
       "Orwell does not give these questions the same narrative space as Flory’s spiritual crisis."],
      ["这使维拉斯瓦米的沉默具有了双重意义。",
       "This gives Veraswami’s silence a double meaning."],
      ["一方面，他在殖民社会中缺少能够独立决定自身命运的政治声音；另一方面，即使在一部批判殖民统治的英国小说里，他仍然主要通过与英国主人公的关系获得文学上的存在。",
       "On one hand, in colonial society he lacks a political voice with which to decide his own fate; on the other, even in an English novel critical of colonial rule, he gains his literary existence mainly through his relationship with the English protagonist."],
      ["弗洛里的矛盾被写成复杂的人性，维拉斯瓦米的矛盾却更多表现为一种具有讽刺意味的政治处境。",
       "Flory’s contradictions are written as complex humanity; Veraswami’s appear more as an ironic political predicament."],
      ["我并不认为奥威尔完全忽略了这种不平等。恰恰相反，他对维拉斯瓦米的塑造已经超越了许多同时代殖民文学的刻板印象。但他的同情仍然受到叙述视角的限制：他能够揭露英国人的虚伪，却未必能够充分想象一个印度人不以英国人为中心的精神世界。",
       "I do not think Orwell entirely ignores this inequality. On the contrary, his portrait of Veraswami goes beyond the stereotypes of much contemporary colonial literature. But his sympathy is still limited by the narrative viewpoint: he can expose English hypocrisy, but cannot necessarily imagine fully an Indian’s inner world that is not centered on the English."],
      ["这让我对弗洛里的悲剧产生了另一种理解。",
       "This gave me another understanding of Flory’s tragedy."],
      ["弗洛里占据了小说最丰富的心理空间。他的孤独、羞耻、欲望与自我厌恶，都得到细致描写。他最终走向毁灭，读者自然容易将他的死亡理解为帝国对个人良知的摧残。",
       "Flory occupies the richest psychological space in the novel. His loneliness, shame, desire and self-loathing are all finely described. When he is finally destroyed, the reader easily takes his death as the empire’s crushing of an individual conscience."],
      ["维拉斯瓦米却活了下来。",
       "Veraswami, however, survives."],
      ["但这种幸存并不意味着胜利。他失去了职业地位和声望，也失去了曾经寄托希望的英国朋友。他必须继续生活在那个已经证明不会公平对待他的社会之中。",
       "But survival does not mean victory. He loses his professional standing and reputation, and the English friend in whom he had placed hope. He must go on living in a society that has proved it will not treat him fairly."],
      ["弗洛里可以通过死亡结束自己的矛盾，维拉斯瓦米却必须承受矛盾继续存在的后果。",
       "Flory can end his contradiction through death; Veraswami must bear the consequences of the contradiction continuing."],
      ["这里隐藏着一种文学上的不公平：死亡容易获得悲剧的形式，屈辱的延续却很难成为同样动人的故事。",
       "A literary unfairness is hidden here: death easily takes the form of tragedy, while the continuation of humiliation rarely becomes an equally moving story."],
      ["奥威尔让弗洛里成为一个令人难忘的悲剧人物，却让维拉斯瓦米的命运逐渐退入小说的背景。前者的精神崩溃获得了完整的叙述，后者失去的生活则更多留给读者自己想象。",
       "Orwell makes Flory an unforgettable tragic figure but lets Veraswami’s fate recede gradually into the background. The former’s mental collapse gets a full telling, while the life the latter loses is left largely to the reader’s imagination."],
      ["或许正因为如此，我越来越觉得，《缅甸岁月》最值得重新阅读的，并不是弗洛里的死亡，而是维拉斯瓦米的幸存。",
       "Perhaps for this reason, I increasingly feel that what is most worth rereading in *Burmese Days* is not Flory’s death but Veraswami’s survival."],
      ["一个人因为无法忍受不公正的世界而毁灭，固然令人悲伤；另一个人明明遭受了这种不公，却连公开否定它的自由都没有，甚至必须继续使用统治者的语言为自己争取生存空间。",
       "That one person is destroyed because he cannot bear an unjust world is sad enough; that another, who has actually suffered that injustice, lacks even the freedom to deny it publicly, and must go on using the ruler’s language to win room to live, is something else."],
      ["**弗洛里的悲剧，是他无法成为自己希望成为的人；维拉斯瓦米的悲剧，则是他必须先成为英国人希望他成为的人，才有资格争取属于自己的生活。**",
       "**Flory’s tragedy is that he cannot become the person he wants to be; Veraswami’s is that he must first become the person the English want him to be before he is entitled to fight for a life of his own.**"],
      ["而奥威尔最耐人寻味的局限，也正在这里。",
       "And Orwell’s most intriguing limitation lies right here."],
      ["他能够让我们深切理解一个英国人为什么无法忍受帝国，却没有同样充分地告诉我们，一个印度人究竟如何忍受帝国。",
       "He lets us understand deeply why an Englishman cannot bear the empire, but does not tell us as fully how an Indian bears it."],
      ["弗洛里的痛苦被写成文学。",
       "Flory’s pain is written into literature."],
      ["维拉斯瓦米的沉默，却仍然留在历史之中。",
       "Veraswami’s silence remains in history."]
    ]
  },
  {
    "date": "2011-01-05",
    "title": "Retelling Modern China as a Search for a State",
    "slug": "modern-china-search-for-a-state",
    "category": "History",
    "book": {
      "cover": "great_chinese_revolution.jpg",
      "title": "伟大的中国革命 (The Great Chinese Revolution)",
      "author": "费正清 John King Fairbank",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · Chinese translation of The Great Chinese Revolution, 1800–1985",
        "Fairbank’s account of modern China from 1800 to 1985."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1. 学校教给我的历史是一条路：鸦片战争、洋务运动、戊戌变法、辛亥革命、五四运动、国民革命、共产党革命。每一次失败，都像在为下一次革命备好条件。",
       "1. The history I was taught at school is a road: the Opium War, the Self-Strengthening Movement, the Hundred Days’ Reform, the 1911 Revolution, the May Fourth Movement, the National Revolution, the Communist revolution. Each failure looks like it was setting the stage for the next revolution."],
      ["2. 读费正清，我第一次认真问自己，这条路是否真有那么必然。",
       "2. Reading Fairbank, I asked myself for the first time, and seriously, whether the road was ever that inevitable."],
      ["3. 在他笔下，近现代中国是一个传统帝国在内外压力下解体的过程，新的政治组织、社会力量和国家制度在其中彼此竞争。革命只是这个过程的一部分。",
       "3. In his telling, modern China is a traditional empire coming apart under pressure from inside and out, while new political organizations, social forces and state institutions compete with one another. Revolution is one part of that process."],
      ["4. 晚清的改革者不知道清朝注定灭亡。辛亥的参与者看不到此后几十年的军阀混战。国民党和共产党起初也没有后来历史替它们定好的位置。",
       "4. The late Qing reformers did not know the dynasty was doomed. The people of 1911 could not see the decades of warlord war ahead. The Nationalists and the Communists did not begin with the places later history assigned them."],
      ["5. 他的框架有局限。他对现代化的理解带着战后美国中国研究的传统，有时把中国史放进从传统走向现代的大叙事。这恰好是我觉得他值得读的原因。",
       "5. His framework has limits. His idea of modernization carries the tradition of postwar American China studies, and at times he fits Chinese history into a grand story of passage from tradition to modernity. That is exactly why I find him worth reading."],
      ["6. 历史可以有不止一种讲法。换一个观察的尺度，原本理所当然的因果就显得陌生。",
       "6. History can be told in more than one way. Change the scale of observation and a cause and effect that seemed obvious turns strange."],
      ["7. 一个国家总把自己的过去讲成通向今天的唯一道路，历史研究要做的一件事，就是把那些曾经存在、最终没有实现的可能性找回来。",
       "7. When a country keeps telling its past as the one road that leads to today, one job of historical study is to recover the possibilities that existed and never came to pass."],
      ["8. 费正清留给我的，是一种看历史的方法，而没有留下关于中国革命的哪一条结论。",
       "8. What Fairbank left me is a way of looking at history. He left no single conclusion about the Chinese revolution."],
      ["9. 2011年的北京，是政治权力的中心，也是一座不断被拆除、重建、改名的城市。在这里读革命史，会觉得历史没有结束，它以城市规划、社会制度和个人生活的样子继续存在。",
       "9. Beijing in 2011 is the center of political power and also a city that is constantly torn down, rebuilt and renamed. Reading the history of the revolution here, you feel that history has not ended. It goes on as urban planning, social institutions and individual lives."]
    ]
  },
  {
    "date": "2011-01-22",
    "title": "China as America’s Mirror",
    "slug": "china-as-americas-mirror",
    "category": "History",
    "book": {
      "cover": "us_and_china.jpg",
      "title": "美国与中国 (The United States and China)",
      "author": "费正清 John King Fairbank",
      "language": "Chinese",
      "country": "United States",
      "original": "English",
      "lines": [
        "History · Chinese translation of The United States and China, first published 1948",
        "Fairbank’s introduction to Chinese history and to the relations between the two countries."
      ]
    },
    "place": "于中国盐城\nYancheng, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["如果一切顺利，明年9月我就要去美国读研究生了。现在我脑子里的美国，是用书、新闻、大学和流行文化一块一块搭起来的想象。费正清的这本书，恰好把我转向了相反的方向：美国的知识界，是怎么看中国的？",
       "If all goes well, I will go to America next September for graduate school. The America in my head right now is put together piece by piece from books, news, universities and popular culture. Fairbank’s book happens to turn me the other way around: how did the American intellectual world see China?"],
      ["他多年向美国读者解释中国的历史结构、政治传统和社会变迁。在他看来，中国不能被当成西方国家体系里的普通一员。帝国官僚制度、儒家政治伦理、地方社会组织，再加上近代以来的外部冲击，一起造出了与西方很不一样的历史经验。",
       "For years he explained to American readers China’s historical structure, political traditions and social change. In his view China could not be treated as an ordinary member of the Western state system. The imperial bureaucracy, Confucian political ethics, local social organization and the shocks from outside since the modern age together made a historical experience very unlike the West’s."],
      ["读着读着，我的兴趣转到了另一处：他为什么需要这样解释中国。",
       "As I read, my interest moves to another place: why he needed to explain China this way."],
      ["美国对中国的认识，一直连着自己的外交利益和意识形态焦虑。传教士时代的文化想象，二战时期盟友的样子，冷战时期共产主义的对手，中国在美国公共讨论里的位置一变再变。变的也有美国自己。",
       "American knowledge of China has always been tied to America’s own diplomatic interests and ideological anxieties. The cultural imagination of the missionary era, the ally of the Second World War, the communist adversary of the Cold War: China’s place in American public debate keeps shifting. America shifts too."],
      ["费正清想建立一种超出敌友关系的历史理解，却没法完全离开他那个时代的知识结构。美国的中国研究从来不只是关于中国的学问，它也是美国认识世界、界定自己的责任与权力的一部分。",
       "Fairbank tried to build a historical understanding that went beyond friend and enemy, yet he could not fully leave the intellectual structures of his time. American China studies has never been only knowledge about China. It is also part of how America knows the world and defines its own responsibility and power."],
      ["我开始怀疑，跨文化的理解最难的地方，在于承认自己习以为常的那些解释，到了另一个社会可能根本站不住，学会用另一种语言讲自己的国家反倒容易些。",
       "I begin to suspect that the hardest part of understanding across cultures is admitting that the explanations you take for granted may not stand at all in another society. Learning to describe your own country in another language is easier."],
      ["在我动身去美国之前，这本《美国与中国》先让我看见，美国怎样看中国，又怎样借这个样子看自己。",
       "Before I leave for America, *The United States and China* has first shown me how America looks at China, and how it uses that look to see itself."]
    ]
  },
  {
    "date": "2016-01-02",
    "title": "How Authority Becomes Truth",
    "slug": "how-authority-becomes-truth",
    "category": "History",
    "book": {
      "cover": "red_sun.jpg",
      "title": "红太阳是怎样升起的 (How the Red Sun Rose)",
      "author": "高华 Gao Hua",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "History · Origins and development of the Yan’an Rectification Movement",
        "How the Yan’an Rectification of 1942–45 built Mao Zedong’s authority inside the Party."
      ]
    },
    "place": "于加拿大列治文\nRichmond, BC, Canada",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1942年，王实味发表《野百合花》，批评延安干部之间的等级与特权。随后，中央研究院接连开了批判会。他被说成“托派”“特务”，靠的不是哪一项确凿的证据，而是一套不断改写他过去言行含义的解释。",
       "In 1942 Wang Shiwei published “Wild Lilies,” criticizing the hierarchy and privilege among the Yan’an cadres. Denunciation meetings followed one after another at the Central Research Institute. He was called a “Trotskyite” and a “spy,” and this rested on no single firm piece of evidence. It rested on a set of interpretations that kept rewriting what his words and deeds had meant."],
      ["高华的书改变了我理解权力如何形成的方式，这比那些我先前不熟悉的历史细节更让我震动。传统叙述常把延安整风写成思想统一和组织建设，高华借大量史料，把它放回党内具体的权力关系里。整风要求的也不止是服从某项决定，它要求每个人重新解释自己的过去：思想经历、政治立场，乃至私人关系，都可能要交代、受审查、被重新定义。通过学习、批评与自我批评，组织规范成员的行为，也慢慢塑造他们理解自身经历的方式。",
       "Gao Hua’s book changed how I understand the way power is formed, and that shook me more than the historical details I had not known. Older accounts often describe the Yan’an Rectification as ideological unification and organization building. Gao Hua, drawing on a great many sources, puts it back among the concrete power relations inside the Party. The rectification asked for more than obedience to a decision. It asked everyone to reinterpret his own past. A person’s intellectual history, political stance and even private relationships could be demanded in account, examined and redefined. Through study, criticism and self-criticism, the organization regulated its members’ conduct and slowly shaped how they understood their own experience."],
      ["细看一点：交代自己的过去",
       "A closer look: accounting for one’s past", "h"],
      ["1943年的“抢救运动”把同一套逻辑推到了极端。康生主持审干，许多人被要求交代自己是否曾被敌人收买。压力之下，大量虚假的“坦白”冒了出来，这些坦白转过身又成了怀疑下一个人的“证据”。",
       "In 1943 the “Rescue Campaign” pushed the same logic to an extreme. Under the cadre screening led by Kang Sheng, many people were required to say whether they had ever been bought by the enemy. Under pressure a flood of false “confessions” appeared, and these in turn became the “evidence” for suspecting the next person."],
      ["我在这里停得最久的，是“坦白”的双重作用。表面上，它在查明事实；实际上，它在建立一种关系。一个人越努力证明自己清白，就越承认组织有权审查他的全部过去。坦白的人交出的不只是信息，还有解释自己经历的权利。",
       "This is where I stay longest, on the double function of “confession.” On the surface it establishes facts. In effect it builds a relationship. The harder a person tries to prove his innocence, the more he concedes that the organization has the right to examine his whole past. The one who confesses hands over information and also the authority to interpret his own experience."],
      ["1944年，据记载，毛泽东公开向被错误审查的干部道歉，抢救运动被宣布“搞错了”。这减轻了许多人的处境。可纠正错误的人，同时也是握着审查权力的人，这次纠正是削弱了权威，还是让它更牢固？一个既能制造恐惧、又能解除恐惧的权力，要求的已经超过服从，它要求感激。",
       "In 1944, by the record, Mao Zedong apologized in public to the cadres who had been wrongly investigated, and the Rescue Campaign was declared a mistake. This eased the position of many. But the one who corrected the error also held the power of review, so did the correction weaken authority or make it firmer? A power that can create fear and also lift it asks for more than obedience. It asks for gratitude."],
      ["1945年，《关于若干历史问题的决议》对党的历史作出统一结论，同年的七大把毛泽东思想写进党章。回头看，这是一个完整的循环：先让每个人重新讲述自己的过去，再由组织讲出整个党的过去。个人的历史和集体的历史，被同一只手改写。毛泽东的权威没有在哪一天突然确立，它在路线争论、干部审查、历史解释和组织改造里一点点形成。谁有权决定过去发生了什么，谁就在很大程度上握有决定当下何为正确的能力。高华最深的发现之一，就在这里。",
       "In 1945 the “Resolution on Certain Questions in the History of Our Party” reached a unified verdict on the Party’s past, and the Seventh Congress that year wrote Mao Zedong Thought into the Party constitution. Looking back, it is a complete cycle: first everyone retells his own past, then the organization gives the account of the whole Party’s past. The individual’s history and the collective’s history are rewritten by the same hand. Mao’s authority was not set up on any single day. It formed bit by bit through disputes over line, cadre review, the interpretation of history and the remaking of the organization. Whoever has the right to decide what happened in the past largely holds the power to decide what is correct in the present. This is one of Gao Hua’s deepest findings."],
      ["由此我对二十世纪中国政治史有了一种不同于道德谴责的兴趣。个人崇拜当然该批判，可只把它归于一位领袖的野心，就容易看漏组织制度、思想动员和集体心理怎样一起造出了权威。政治权力最该警惕的时刻，未必是它公开要求服从的时候，而是它开始要求人们用同一种方式理解历史、解释自己，甚至判断自己的想法对不对的时候。一个社会失去思想自由的标志，也许是人们渐渐失去了用另一种方式解释自身经历的能力。",
       "From this I take an interest in twentieth-century Chinese political history that differs from moral condemnation. The cult of personality certainly deserves criticism, but to trace it only to one leader’s ambition is to overlook how organizational institutions, ideological mobilization and collective psychology together produced authority. The moment power most deserves wariness is not necessarily when it openly demands obedience. It is when it begins to demand that people understand history in one way, explain themselves in one way, and even judge in one way whether their own thinking is correct. The sign that a society has lost freedom of thought may be that people gradually lose the ability to explain their own experience differently."],
      ["2016年，我在加拿大，离延安很远。正是在这么远的地方，我第一次这样清楚地看到，历史研究的价值不止在重新评价某个人物，也在弄懂某种权力机制为什么运转得起来。高华写的是延安整风，读的人却会想到所有试图垄断真理的政治组织。",
       "In 2016 I am in Canada, very far from Yan’an. It is from this distance that I see for the first time so clearly that the value of historical study lies in reassessing a figure and also in understanding why a certain mechanism of power can run. Gao Hua writes about the Yan’an Rectification, and a reader still ends up thinking of every political organization that tries to monopolize truth."]
    ]
  },
  {
    "date": "2023-11-21",
    "title": "What Can Literature Say for Someone History Has Killed?",
    "slug": "what-literature-can-say",
    "category": "Novel",
    "book": {
      "cover": "human_acts.jpg",
      "title": "소년이 온다 (Human Acts)",
      "author": "한강 Han Kang",
      "language": "Korean",
      "country": "South Korea",
      "original": "Korean",
      "lines": [
        "Novel · Korean original, first published 2014",
        "The Gwangju uprising of May 1980, told through the dead, the survivors and those who remember."
      ]
    },
    "place": "于韩国釜山\nBusan, South Korea",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1980年5月，光州。少年东浩在临时停尸场，帮忙辨认和照料遇难者的遗体。腐败的气味，一天天变样的尸体，认不出身份的死者。韩江从死者的身体写起，国家暴力在这里不再是教科书里的政治事件，成了一种几乎无法承受的身体经验。",
       "May 1980, Gwangju. The boy Dong-ho helps identify and tend the bodies of the dead at a makeshift morgue. The smell of decay, bodies that change from day to day, the dead no one can name. Han Kang begins from the bodies of the dead, and state violence stops being a political event in a textbook and becomes an almost unbearable bodily experience."],
      ["小说没有让死亡做终点。幸存者还活着，有人受过审讯和酷刑，有人长年被羞耻、恐惧和负罪感折磨。制度变了，历史重新评价了，创伤也不会因此自动消失。",
       "The novel does not let death be the end. The survivors are still alive. Some have been interrogated and tortured, and some are tormented for years by shame, fear and guilt. The system changes and history is reassessed, and the trauma does not vanish on its own."],
      ["韩江不肯把光州写成英雄史诗。她关心的是，在宏大的民主化叙事之外，那些被牺牲的人身上还剩下多少无法解释的痛苦。",
       "Han Kang will not write Gwangju as a heroic epic. She cares about how much unexplained pain remains in the people who were sacrificed, outside the grand story of democratization."],
      ["东亚的现代史里有一种常见的讲法，用后来的进步给先前的苦难找意义：战争带来独立，革命带来变革，镇压最终促成民主化。这些话未必全错，但容易滑向一种想法，好像后来的结果只要足够重要，先前的死亡就有了道理。韩江的小说拒绝这种道理。",
       "Modern East Asian history has a familiar way of speaking, in which later progress supplies meaning for earlier suffering: war brings independence, revolution brings change, repression finally leads to democratization. These statements are not necessarily wrong, but they slide toward a thought that if the later result is important enough, the earlier deaths are reasonable. Han Kang’s novel refuses that reasoning."],
      ["她不断换叙述的视角，让死者、幸存者和后来追忆的人轮流开口。这些声音拼不成一幅完整的图。后来的人对有些经验，始终无法彻底理解。",
       "She keeps shifting the point of view, letting the dead, the survivors and those who remember later speak in turn. The voices do not add up to a complete picture. Some experiences the people who come after can never fully grasp."],
      ["2023年，我们从韩国社会的公共记忆里，已经能看到光州在当代民主政治中的位置。公共纪念和个人哀悼之间，却有一道合不上的缝。国家可以认错，历史可以重写，纪念碑可以立起来。她不去证明那些年轻人没有白死，只是一再追问：一个人的生命，为什么必须靠牺牲才能得到历史的承认？",
       "In 2023, through South Korea’s public memory, we can already see the place Gwangju holds in contemporary democratic politics. Between public commemoration and private mourning, though, a gap stays open. A state can admit its wrong, history can be rewritten, monuments can be raised. She does not try to prove the young people did not die in vain. She keeps asking why a person’s life has to be recognized by history through sacrifice."],
      ["她拒绝让历史的正义顶替一个人的死亡。那个没有活到今天的少年，仍然没有回来。",
       "She refuses to let historical justice stand in for one person’s death. The boy who did not live to see today has still not come back."]
    ]
  },
  {
    "date": "2013-10-11",
    "title": "On the Other Side of the Hill",
    "slug": "on-the-other-side-of-the-hill",
    "category": "Novel",
    "book": {
      "cover": "saka_no_ue_no_kumo.jpg",
      "title": "坂の上の雲 (Clouds Above the Hill)",
      "author": "司馬遼太郎 Shiba Ryōtarō",
      "language": "Japanese",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "Novel · Japanese original, serialized 1968–72",
        "Three young men from Matsuyama, the brothers Akiyama and the poet Masaoka Shiki, grow up with Meiji Japan through the Sino-Japanese and Russo-Japanese wars."
      ]
    },
    "languages": ["Chinese", "English"],
    "prose": [
      ["读司马辽太郎的《坂上之云》，开头，伊予松山。秋山好古、秋山真之、正冈子规，后来分别是骑兵将领、海军参谋和近代俳句革新的代表。可司马一开始不急着给他们历史的分量。读完之后，我记得最牢的是这几个年轻人，比东乡平八郎在日本海海战里的胜利记得更牢。",
       "Reading Shiba Ryōtarō’s *Saka no ue no kumo*. The start, Iyo-Matsuyama. Akiyama Yoshifuru, Akiyama Saneyuki, Masaoka Shiki: later a cavalry commander, a naval staff officer and a leading figure in the renewal of modern haiku. But Shiba does not hurry to give them the weight of history. When I finish the book, what I will remember best is these young men, better than Tōgō Heihachirō’s victory in the Battle of the Sea of Japan."],
      ["好古家里穷，年轻时为了谋生和求学四处辗转，后来选了军人这条路。他不喜欢繁文缛节，生活简朴，甚至有点不近人情。这个后来的日本骑兵之父，眼下先是个得认真想办法养活自己的青年。",
       "Yoshifuru’s family is poor. In his youth he drifts about to earn a living and to study, and later chooses the soldier’s path. He dislikes ceremony, lives simply, and is even a little unsociable. The future father of Japan’s cavalry is, for now, a young man who has to think hard about how to feed himself."],
      ["真之完全是另一种人。聪明，敏感，爱思考，也有年轻人常有的犹豫。他靠近过子规的文学世界，最后进了海军。两个本可能一起走向文学的朋友，就这样被时代带向不同的方向。",
       "Saneyuki is another kind of person entirely. Clever, sensitive, given to thought, with the hesitation young people often have. He draws close to Shiki’s literary world and in the end enters the navy. Two friends who might have walked toward literature together are carried by the age in different directions."],
      ["我特别喜欢他写这些人还没成名的样子。他们不知道自己会成为历史人物，更不知道日本要经历怎样的战争。对他们来说，明治首先是一个可以靠个人才能改变命运的社会。",
       "I especially like how he writes them before they are famous. They do not know they will be historical figures, still less what wars Japan will go through. For them, Meiji is first of all a society where talent can change a person’s fate."],
      ["想到书名里那朵云。山坡上的年轻人抬起头，好像看见了一个靠努力就能够到的未来。明治日本在司马笔下最迷人的地方，就是这种还没被结局定下来的可能性。",
       "I think of the cloud in the title. Young men on a hillside raise their heads and seem to see a future within reach of effort. What is most captivating about Meiji Japan in Shiba’s hands is this possibility that the ending has not yet fixed."],
      ["作为中国读者，我懂这种热情，却很难毫无保留地分享。我从小熟悉的十九世纪末，不是这样充满希望的年代。在中国近代史里，1894年是甲午战争，是北洋舰队覆灭，是《马关条约》，是一个自认居于东亚中心的帝国忽然发现自己守不住原来的国际地位。同一段历史，在司马笔下成了一个年轻国家渐渐有了自信的过程。这种视角的错位，让我没法把它当作单纯的励志小说来读。",
       "As a Chinese reader I understand this enthusiasm but can hardly share it without reservation. The end of the nineteenth century I grew up knowing was not so hopeful an age. In modern Chinese history, 1894 is the First Sino-Japanese War, the destruction of the Beiyang Fleet, the Treaty of Shimonoseki, an empire that thought itself the center of East Asia suddenly finding it could not hold its old international standing. The same stretch of history becomes, in Shiba, the process by which a young nation gains confidence. This dislocation of viewpoint keeps me from reading it as a simple inspirational novel."],
      ["秋山真之这个人，我格外在意。书里的他不是只凭勇气打仗的军人。他重视研究、推演和判断，想把战争变成一门可以靠理性分析掌握的复杂技术。日俄战争之前，他去美国学海军战略，读美国海军理论家马汉的著作，考察美国海军的作战经验。后来他参与联合舰队的作战计划，成了东乡平八郎身边重要的参谋。",
       "Akiyama Saneyuki is the figure I care about most. In the book he is not a soldier who fights on courage alone. He values study, simulation and judgment, and wants to turn war into a complex technique that rational analysis can master. Before the Russo-Japanese War he goes to the United States to study naval strategy, reads the American naval theorist Mahan, and examines the American navy’s combat experience. Later he takes part in the Combined Fleet’s operational planning and becomes an important staff officer at Tōgō’s side."],
      ["很佩服司马写这种专业精神的方式。他没有把日本的胜利简单归给民族意志或士兵的勇敢，而是让读者看到，一个现代国家如何通过教育、训练、组织和技术，把个人才能变成实际的军事能力。",
       "I admire how Shiba writes this professional spirit. He does not simply credit Japan’s victory to national will or the soldiers’ courage. He lets the reader see how a modern state, through education, training, organization and technology, turns individual talent into real military capability."],
      ["可是越欣赏真之，越有一种甩不掉的矛盾。这些令人钦佩的才能，最后服务的是一场场真实的战争。",
       "But the more I admire Saneyuki, the more a contradiction clings to me. These admirable talents end up serving real wars."],
      ["读到日俄战争，小说的气氛明显变了。好古指挥骑兵对俄军作战，真之在海军参谋的位置上筹划怎么迎击波罗的海舰队。当年在松山为生计和前途奔忙的兄弟，如今参与决定成千上万人的命运。",
       "With the Russo-Japanese War the mood of the novel changes markedly. Yoshifuru commands cavalry against the Russian army, and Saneyuki, at his staff post in the navy, plans how to meet the Baltic Fleet. The brothers who once scrambled in Matsuyama for a livelihood and a future now help decide the fates of thousands."],
      ["旅顺攻防战把这种变化写得更残酷。乃木希典指挥日军反复进攻俄军的防御阵地，面对坚固的工事和猛烈的火力，伤亡极其惨重。司马对乃木的指挥并不宽容，一再追问，为什么这么多的生命要耗在没有成效的正面进攻里。",
       "The siege of Port Arthur makes the change crueler. Nogi Maresuke commands the Japanese army in assault after assault on the Russian positions, and against strong fortifications and fierce fire the casualties are extremely heavy. Shiba is not lenient toward Nogi’s command and asks again and again why so many lives had to be spent on frontal attacks that achieved so little."],
      ["读到这里，我想起开头的松山。那些年轻人曾经相信，个人的努力可以让国家摆脱贫弱。几十年后，国家的强大却开始要另一批年轻人用生命来证明它。司马没有回避这种残酷，只是他的叙述里一直留着对明治的深深眷恋。在他看来，明治日本还有后来昭和军国主义丢掉的务实与理性，秋山兄弟代表的，是一个还懂得学习、肯承认自身局限的日本。",
       "Here I think back to Matsuyama at the start. Those young men believed that personal effort could free the nation from weakness and poverty. Decades later, the nation’s strength begins to ask another generation of young men to prove it with their lives. Shiba does not avoid the cruelty. His narrative simply keeps a deep fondness for the Meiji era all the way through. In his view Meiji Japan still had the pragmatism and rationality that Shōwa militarism later lost, and the Akiyama brothers stand for a Japan that still knew how to learn and would admit its limits."],
      ["我理解这个判断，但它留下一个我放不下的问题：一个国家的现代化，如果最终让它有了支配别国的力量，该怎样评价推动这场现代化的人？真之的聪明是真的，日本军事改革的成效也是真的，可这些事实回答不了，日本凭什么有权靠战争扩大自己的势力。",
       "I understand this judgment, but it leaves a question I cannot put down: if a nation’s modernization finally gives it the power to dominate other nations, how should we judge those who drove it? Saneyuki’s cleverness is real, and so are the results of Japan’s military reforms, but these facts cannot answer by what right Japan expanded its power through war."],
      ["对日本读者，日俄战争或许意味着一个亚洲国家终于能与欧洲强国抗衡。对中国读者，这场战争打在中国东北的土地上，双方争的是中国无力自己做主的利益。旅顺、辽阳、奉天，在小说里是日俄两军的战场，在中国历史里是另一层意思。这大概就是我的阅读位置里最甩不掉的东西。",
       "For Japanese readers the Russo-Japanese War may mean an Asian nation finally able to stand against a European power. For Chinese readers it was fought on the soil of the Northeast, over interests China was powerless to decide for itself. Port Arthur, Liaoyang, Mukden: in the novel they are battlefields of the Japanese and Russian armies, and in Chinese history they carry another meaning. This is probably what I cannot shake off in where I stand as a reader."],
      ["司马能让我欣赏真之的才智，理解好古的坚韧，甚至为日本海海战里联合舰队的胜利生出叙事上的激动。但这种激动盖不住我对同一段历史的另一种认识。",
       "Shiba can make me admire Saneyuki’s intellect, understand Yoshifuru’s tenacity, and even feel a narrative excitement at the Combined Fleet’s victory in the Battle of the Sea of Japan. But the excitement cannot cover my other understanding of the same history."],
      ["我也佩服他的文学技巧。他把一个国家的成长写进几个年轻人的命运里。我们跟着他们求学、受挫、得到机会，渐渐懂了他们的抱负，自然盼着他们成功。等他们终于站上历史舞台，国家的胜利好像就成了个人奋斗的圆满结局。这样的叙事极高明，也让我留意到历史小说里一种不易察觉的力量：读者一旦爱上人物，就可能不知不觉接受了人物所服务的历史。",
       "I admire his literary skill too. He writes a nation’s growth into the fates of a few young men. We follow them as they study, meet setbacks and win chances, we come to understand their ambitions, and we naturally hope they succeed. By the time they stand on the stage of history, the nation’s victory seems to be the fulfilling end of their personal struggle. It is an extremely skilful narrative, and it also makes me notice a force in the historical novel that is hard to see: once a reader loves the characters, he may unknowingly accept the history they serve."],
      ["我不想因此否定司马。相反，《坂上之云》值得读，恰恰因为它逼我去理解一种和自己熟悉的历史记忆很不一样的感情。我懂明治青年的理想，也忘不了日本崛起给中国和朝鲜带来的代价。两种认识同时在，谁也取消不了谁。",
       "I do not want to dismiss Shiba for this. On the contrary, *Saka no ue no kumo* is worth reading because it pushes me to understand a feeling quite unlike the historical memory I know. I can understand the ideals of Meiji’s young men, and I cannot forget what Japan’s rise cost China and Korea. Both understandings are there at once, and neither cancels the other."],
      ["子规没有像秋山兄弟那样走上战场。他长年被病折磨，大半生困在病榻上，仍然写，在俳句和短歌里找新的表达。他的存在，给这部小说另一种不同于军事胜利的尺度。兄弟俩参与了国家的崛起，子规在有限的生命里改变了日本文学。他们都属于明治，接近山坡上那朵白云的方式却各不相同。",
       "Shiki does not go to the battlefield as the Akiyama brothers do. Illness torments him for years and keeps him on a sickbed for most of his life, and he still writes, looking for new ways of expression in haiku and tanka. His presence gives the novel a measure other than military victory. The brothers take part in the nation’s rise, and Shiki, in a short life, changes Japanese literature. They all belong to Meiji, and each approaches the white cloud on the hillside in a different way."],
      ["合上书，我最怀念的不是对马海峡上的联合舰队，而是开头松山的三个年轻人。那时他们不知道未来会发生什么，后来的历史也还没给他们胜利者的身份。山坡上的云还远，路好像都还开着。我愿意相信，他们当时抬头望见的，只是一朵云。后来的人怎样把它变成一个帝国的方向，是另一段历史了，这一段我还没想完。",
       "Closing the book, what I miss most is not the Combined Fleet in the Tsushima Strait but the three young men of Matsuyama at the start. Then they did not know what the future held, and later history had not yet made them victors. The cloud over the hillside is still far away, and every road seems open. I want to believe that what they looked up at then was only a cloud. How later people turned it into the direction of an empire is another history, and I have not finished thinking about that one."]
    ]
  },
  {
    "date": "2014-03-21",
    "title": "A Forgotten Nose",
    "slug": "a-forgotten-nose",
    "category": "Novel",
    "book": {
      "cover": "goodbye_columbus.jpg",
      "title": "Goodbye, Columbus",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novella and stories · English original, first published 1959",
        "Neil Klugman, a library clerk from Newark, falls for Brenda Patimkin, a daughter of the prosperous suburbs, over one summer."
      ]
    },
    "place": "于加拿大温哥华\nVancouver, Canada",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我觉得《再见，哥伦布》中最耐人寻味的细节，是布伦达做过鼻部整形手术。",
       "I think the most intriguing detail in *Goodbye, Columbus* is that Brenda has had a nose job."],
      ["对于一个出生在富裕犹太家庭的美国女孩而言，这似乎只是一次普通的美容选择。但在罗斯笔下，鼻子从来不只是鼻子。它关乎一个人如何看待自己的出身，又希望别人如何辨认自己。",
       "For an American girl born into a wealthy Jewish family, this seems an ordinary cosmetic choice. But in Roth’s hands a nose is never just a nose. It concerns how a person sees her origins and how she wants others to recognize her."],
      ["布伦达的父辈通过经商积累财富，从纽瓦克走向富裕的郊区。他们已经获得了上一代犹太移民梦寐以求的物质生活：宽敞的住宅、游泳池、大学教育，以及不再需要为生计焦虑的子女。",
       "Brenda’s parents built their wealth in business and moved from Newark to the affluent suburbs. They already have the material life the previous generation of Jewish immigrants dreamed of: a spacious house, a swimming pool, college education, and children who no longer need to worry about making a living."],
      ["但布伦达改变鼻子的形状，却让我觉得，这种成功似乎还没有完成。",
       "But Brenda’s reshaping of her nose makes me feel that this success is somehow not yet complete."],
      ["财富能够改变居住的街区，却不能自动改变一个人的身体。她可以离开纽瓦克，却仍然带着某些被认为属于纽瓦克的特征。",
       "Wealth can change the neighborhood one lives in, but not automatically one’s body. She can leave Newark yet still carry certain features thought to belong to Newark."],
      ["于是，社会流动最终变成了一场对身体的修饰。",
       "And so social mobility ends up as a refinement of the body."],
      ["更有意思的是，尼尔对此并非毫无察觉。他来自仍然保留着犹太工人阶层生活气息的纽瓦克，对布伦达一家既向往又不屑。他看得出郊区生活中的虚荣，却同样被它吸引。",
       "More interesting, Neil is not unaware of this. He comes from a Newark that still keeps the feel of working-class Jewish life, and both longs for and scorns Brenda’s family. He sees the vanity in suburban life yet is drawn to it all the same."],
      ["我想，尼尔对布伦达的迷恋，某种程度上也是对她所代表的生活的迷恋。他爱她，却不断审视她；渴望进入她的世界，又不愿承认自己渴望进入。",
       "I think Neil’s infatuation with Brenda is also, to some degree, an infatuation with the life she represents. He loves her yet keeps scrutinizing her; he longs to enter her world and will not admit he longs to."],
      ["而布伦达的鼻子，恰好使这种矛盾变得可见。",
       "And Brenda’s nose happens to make this contradiction visible."],
      ["尼尔可以嘲笑富裕阶层对身份的修饰，却无法否认，自己也在用另一套标准衡量布伦达：她是否足够真实，是否背叛了自己的出身，是否还能理解他所熟悉的世界。",
       "Neil can mock the affluent class’s refinement of identity, yet cannot deny that he too measures Brenda by another set of standards: whether she is real enough, whether she has betrayed her origins, whether she can still understand the world he knows."],
      ["在这里，罗斯没有安排一个无辜者与一个虚荣者。他写的是两个都无法摆脱阶级目光的人。",
       "Here Roth does not set up an innocent and a vain person. He writes two people neither of whom can escape the gaze of class."],
      ["我尤其觉得，鼻部整形这个细节揭示了美国同化叙事中一种不易察觉的残酷：一个群体经过几代人的努力，终于有能力进入主流社会，却可能开始把自己原本的特征视为需要修正的缺陷。",
       "I especially feel that the nose job reveals a subtle cruelty in the American narrative of assimilation: a group, after generations of effort, finally gains the means to enter the mainstream, and may begin to see its own original features as defects to be corrected."],
      ["然而，布伦达并不一定认为自己正在背叛犹太身份。对她而言，这或许只是一次个人选择。正是这种无须解释的自然，才说明阶级变化已经深入日常生活。",
       "Yet Brenda need not think she is betraying her Jewish identity. To her this may be only a personal choice. It is precisely this unexplained naturalness that shows how deeply class change has entered everyday life."],
      ["上一代人努力改变的是自己的命运，下一代人甚至可以改变自己的面孔。",
       "The previous generation worked to change its fate; the next can even change its face."],
      ["《再见，哥伦布》最令我欣赏的地方，是罗斯没有直接告诉读者这种变化究竟意味着解放还是丧失。他只是让尼尔注视着布伦达，让欲望、阶级与身份在一次亲密的凝视中纠缠起来。",
       "What I admire most in *Goodbye, Columbus* is that Roth never tells the reader outright whether this change means liberation or loss. He simply lets Neil look at Brenda, and lets desire, class and identity tangle in one intimate gaze."],
      ["我想，尼尔最终失去的也许不只是布伦达。他曾经如此接近那个有游泳池、有宽敞草坪、有着另一种生活秩序的世界，却始终无法确定，自己究竟是在爱一个女人，还是在爱一种可以通过她抵达的人生。",
       "I think what Neil finally loses may be more than Brenda. He came so close to that world of the swimming pool, the wide lawn, another order of life, yet could never be sure whether he was loving a woman or a life he could reach through her."],
      ["而布伦达或许从来没有意识到，自己身上那个早已消失的特征，在尼尔眼中竟承载着如此沉重的意义。",
       "And Brenda perhaps never realized that a feature of hers, long since gone, carried such heavy meaning in Neil’s eyes."],
      ["**她已经不再需要那只鼻子了。可尼尔似乎仍然需要它，来辨认她究竟从哪里来。**",
       "**She no longer needs that nose. But Neil seems to still need it, to recognize where she really comes from.**"]
    ]
  },
  {
    "date": "2015-08-19",
    "title": "When Memory Is No Longer Content to Be Told",
    "slug": "when-memory-is-no-longer-content-to-be-told",
    "category": "Novel",
    "book": {
      "cover": "lamant_chine_du_nord.jpg",
      "title": "L’Amant de la Chine du Nord",
      "author": "Marguerite Duras",
      "language": "French",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Gallimard, 1991",
        "Duras retells the story of L’Amant as a film-like novel, putting the girl and her Chinese lover back into scenes."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["亲爱的杜拉斯女士：",
       "Dear Madame Duras,"],
      ["2012年，我在西贡读完了您的《情人》，那里曾经是法属印度支那。湄公河的水，渡船，潮湿的空气，殖民时代留下的房子，都让书里的地理忽然有了重量。您笔下那个戴男式毡帽、穿金色高跟鞋的法国少女，站在驶向西贡的渡船上，身旁停着一辆黑色轿车。我几乎看得见那个中国男人望向她的一瞬间。",
       "In 2012 I finished *L’Amant* in Saigon, once part of French Indochina. The water of the Mekong, the ferry, the humid air and the houses left from the colonial years gave the book’s geography a sudden weight. Your French girl in the man’s felt hat and gold high-heeled shoes stands on the ferry bound for Saigon, a black limousine beside her. I could almost see the moment the Chinese man looked at her."],
      ["三年后，我读了您的另外几部作品，又读了《中国北方的情人》。那时我才发现，自己记住的并不全是一个爱情故事，还有《情人》讲述爱情的方式。",
       "Three years later I had read several of your other books, and then *L’Amant de la Chine du Nord*. Only then did I see that what I had kept was not entirely a love story. I had also kept the way *L’Amant* tells it."],
      ["《情人》里的时间是碎的。年老的叙述者一次次回到十五岁半的自己，从不按事情发生的先后讲。渡船上的相遇，堤岸的房间，母亲的绝望，哥哥的暴力，离开印度支那的轮船，彼此穿插，记忆不再听从年月，只听从一种消不下去的感情。",
       "Time in *L’Amant* is broken. Your aged narrator goes back again and again to herself at fifteen and a half, and never tells things in the order they happened. The ferry meeting, the room on the embankment, the mother’s despair, the brother’s violence, the ship leaving Indochina cut across one another. Memory stops obeying the calendar and obeys a feeling that will not go down."],
      ["我记得开篇。一个陌生男人先夸您衰老的脸，然后您忽然退回少女时代。衰老和青春没有一前一后，它们同时在叙述里。我读到那个少女时，总知道有一个老妇人在后面看着她。所以我一直觉得，《情人》的主人公是那个老了的女人，她还在设法弄懂自己年轻时的欲望，少女反倒在其次。",
       "I remember the opening. A stranger praises your aged face, and then you step back into girlhood. Age and youth do not follow one another; they sit together in the telling. Whenever I saw the girl, I knew an old woman stood behind her, looking. So I have taken the protagonist of *L’Amant* to be that old woman, still working to understand her young desire, with the girl second."],
      ["《中国北方的情人》却几乎走了反方向。",
       "*L’Amant de la Chine du Nord* goes almost the other way."],
      ["您不再满足于让往事从记忆里突然浮上来。您把人物放回场景，让他们走路，说话，互相看。整部小说接近电影剧本的写法，动作，空间的位置，声音的出现和消失，都清楚得像舞台指示。",
       "You are no longer content to let the past surface suddenly from memory. You put the characters back into scenes, where they walk, talk and look at one another. The book is written close to a film script, and movements, positions in space, the coming and going of sounds are as clear as stage directions."],
      ["在《情人》里，一句话能跨过几十年，把少女的身体接到老年的记忆上。在《中国北方的情人》里，一个眼神可能要等一段很长的沉默才能完成。前者靠叙述的跳跃造出距离，后者靠场景的持续，逼人物留在原地。",
       "In *L’Amant* one sentence can leap decades and join the girl’s body to an old woman’s memory. In *L’Amant de la Chine du Nord* one look may wait out a long silence before it is complete. The first makes distance by leaping in the telling; the second keeps the scene running and holds the characters in place."],
      ["我最在意您怎样对待那个中国情人。在《情人》里，他常常是一道被记忆照亮多次、却始终没有完全显影的轮廓。他的钱，他的软弱，他的欲望和恐惧，都经过那个女人的回忆才到读者面前。他活在她的叙述里，也就逃不出她的解释。",
       "What I care about most is how you treat the Chinese lover. In *L’Amant* he is often an outline lit again and again by memory and never fully developed. His wealth, weakness, desire and fear reach the reader only through the woman’s recollection. He lives inside her telling, and so cannot escape her interpretation."],
      ["到了新的这本，他有了更多对话，更多动作，也有了沉默。您似乎在试着把这个被自己讲了很久的男人从回忆里放出来，让他在读者面前独立地站一会儿。",
       "In the new book he has more dialogue, more action, and silence of his own. You seem to be trying to let this man, narrated by you for so long, out of memory, and to let him stand on his own for a while before the reader."],
      ["这里有一个很深的悖论：人物被写得越具体，过去反而越不确定。因为我们读过《情人》，知道同一段经历曾有另一种样子。年龄，容貌，相处的方式，连一些细节，都对不上了。您并没有在修订一份等人校正的历史记录，您让同一个过去长出了第二个文学的现实。",
       "There is a deep paradox here. The more concretely the characters are drawn, the less certain the past becomes. We have read *L’Amant* and know the same experience once looked different. The ages, the faces, the ways of being together, even some details no longer match. You are not revising a historical record that waits for correction. You are letting one past grow a second literary reality."],
      ["两本书用沉默的方式也不同。《情人》的沉默在叙述的断口之间。有些事被突然略过，有些句子没解释完就转向另一段往事，读者得在空白里自己找线。它的力量来自没有说完的部分。",
       "The two books use silence differently. The silence of *L’Amant* sits in the breaks of the narration. Some things are passed over abruptly, some sentences turn to another memory before they are explained, and the reader must find the thread in the blanks. Its force comes from what is left unfinished."],
      ["《中国北方的情人》的沉默在场景里面。两个人已经面对面站着，仍然说不出全部的感情。镜头可以继续停留，时间也可以拉长，语言却不会因此更充分。一种是记忆讲不完整的沉默，另一种是人物重新见面，仍然彼此不懂的沉默。",
       "The silence of *L’Amant de la Chine du Nord* sits inside the scene. The two already stand face to face and still cannot say all they feel. The camera can stay on and time can stretch, but language grows no fuller for it. One is the silence of memory that cannot be fully told; the other is the silence of people who meet again and still cannot understand each other."],
      ["这两种形式，都离不开法国统治下的印度支那。少女贫穷，却属于殖民者的一方。中国情人富有，却被种族的等级和家族的秩序管着。他们从来不是简单的穷人与富人，男人与女人之间的爱。钱，种族，年纪，殖民的权力，在两具身体之间交错，连亲密本身也成了一种不平等。",
       "Neither form can be separated from Indochina under French rule. The girl is poor yet belongs to the colonizers. The Chinese lover is rich yet bound by racial hierarchy and family order. They were never simply poor and rich, or man and woman, in love. Money, race, age and colonial power cross between their bodies, and intimacy itself becomes an unequal thing."],
      ["初读《情人》，我被您写的热带气息，河流，殖民地颓败的美吸引。现在我开始留意，您怎样用文学的形式处理这段历史。《情人》把殖民地写成一串被记忆反复叫回来的碎片；《中国北方的情人》让人物重新走进那些地方，像是在回忆结束之后，再给他们一次开口的机会。",
       "When I first read *L’Amant*, I was drawn to the tropical air, the river and the decayed beauty of the colony in your pages. Now I notice how you handle this history through form. *L’Amant* makes the colony a string of fragments that memory calls back again and again. *L’Amant de la Chine du Nord* lets the characters walk into those places again, as if to give them one more chance to speak after the remembering is over."],
      ["但形式上的重演不能让历史重新开始。少女还是要走，中国情人还是被那个社会限制着。您能改动叙述的次序，拉长人物的沉默，改不了他们已经过完的生活。因此我不愿把这本书只看作《情人》的补充或修订。1984年的《情人》，写的是记忆怎样被写下来；1991年的这本，更像在写写作怎样反过来改动记忆。前者把经历变成文学，后者让已经成了文学的经历重新陌生。",
       "But a replay in form cannot start history over. The girl must still leave, and the Chinese lover is still held in by that society. You can change the order of the telling and stretch the characters’ silence, but you cannot change the lives they have already lived. So I do not want to read this book as a supplement or revision of *L’Amant*. The *L’Amant* of 1984 is about how memory is written down; the book of 1991 is more about how writing in turn changes memory. The first turns experience into literature, and the second makes experience that was already literature strange again."],
      ["三年前，我在越南的河边读《情人》，以为眼前真实的风景能让我走近您的过去。现在我读着同一段爱情的另一个版本，才明白河一直在那里，没有固定下来的，是站在渡船上的那个少女。她在第二本书里再一次走向那个中国男人，我已经说不准，是谁在回忆谁。",
       "Three years ago I read *L’Amant* by a river in Vietnam, thinking the real landscape in front of me would bring me closer to your past. Now, reading another version of the same love, I understand that the river was always there, and that the one who has not been fixed is the girl on the ferry. In the second book she walks toward the Chinese man once more, and I can no longer say who is remembering whom."],
      ["我记着的还是那条渡船，和船上戴毡帽的女孩。",
       "What I still see is the ferry, and the girl in the felt hat standing on it."],
      ["您的读者",
       "Yours, a reader"]
    ]
  },
  {
    "date": "2014-09-30",
    "title": "When the American Dream Has Come True",
    "slug": "when-the-american-dream-has-come-true",
    "category": "Novel",
    "book": {
      "cover": "american_pastoral.jpg",
      "title": "American Pastoral",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1997",
        "Seymour “the Swede” Levov, a successful second-generation Jewish American, sees his daughter Merry turn to radical politics and violence."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["他问：你刚来美国读书，西摩·利沃夫是在美国出生的第二代犹太移民后裔，你和他隔着这么远，凭什么说你读得懂《美国牧歌》里的他？",
       "He asked: You have only just come to America to study, and Seymour Levov is the American-born descendant of Jewish immigrants. You sit far apart. What makes you think you can read him in *American Pastoral*?"],
      ["我答：我读的时候，确实总觉得和他之间有一段奇怪的距离。我是成年以后才来读书的，还没有决定将来留不留。我们对美国的理解显然不同。可我很容易明白，他为什么那样相信自己手里的生活。",
       "I answered: While reading I did feel a strange distance between us. I came as an adult to study and have not decided whether to stay. Our understandings of America are plainly different. Still, I can easily see why he believes so firmly in the life he holds."],
      ["他问：他的生活有什么值得相信的？不就是运气好，生在了好时候。",
       "He asked: What is there to believe in? He was lucky, born at a good time."],
      ["我答：他几乎实现了上一代移民对美国的全部期待。他英俊，擅长运动，接过父亲的手套生意，娶了一位新泽西小姐，住进漂亮的乡间住宅。这样的生活像是一个证明：移民家庭经过两代人的努力，可以摆脱原来的社会限制，成为地道的美国人。我觉得这种成功对移民有一层意义，生在本土的人未必完全懂。",
       "I answered: He has realized almost everything the earlier generation of immigrants hoped for. He is handsome and athletic, took over his father’s glove business, married a former Miss New Jersey, and settled in a beautiful country house. That life looks like a proof: an immigrant family, after two generations of effort, can shed its old social limits and become American in the fullest sense. I think this success carries a meaning for immigrants that the American-born may not fully grasp."],
      ["他问：什么意义？美国不就是一个国家吗？",
       "He asked: What meaning? America is just a country."],
      ["我答：对第一代移民来说，美国起初不是抽象的政治理念，是一连串很具体的选择。在哪里读书，毕业后能不能留下，怎么找工作，怎么建立信用，买下房子，什么时候拿到永久居留，最后能不能成为公民。这些事没做完以前，每一件都悬着。等它们一件件办成，人很容易把自己的经历当成证据，觉得这个社会还值得信。我自己也刚走上类似的路，从申请学校，办签证，到在这里读书，适应新生活。我已经从这里的教育和社会制度里得到不少机会，也开始想象以后那些一件件可能办成的事。",
       "I answered: For a first-generation immigrant, America is at first no abstract political idea but a run of concrete choices. Where to study, whether you can stay after graduating, how to find a job, how to build credit and buy a home, when you get permanent residency, and finally whether you can become a citizen. Until each is done, it hangs in the air. When they are finished one by one, a person easily takes his own experience as evidence that this society is still worth believing in. I have just set out on a similar road myself, from applying to schools and arranging a visa to studying here and adapting to a new life. I have already gained quite a few opportunities from the education and social institutions here, and I have begun to imagine the things that may one day come true."],
      ["他问：那你是在替他辩护了。你不想像别的评论者那样，笑一笑这个美国梦吗？",
       "He asked: Then you are defending him. You won’t do what other commentators do and smile at the American dream?"],
      ["我答：我不想站在局外，轻易地嘲笑。我能理解他的满足，也理解他为什么不愿怀疑。罗斯最狠的一笔，是偏偏让这样一个人，碰上一个他完全不懂的女儿。",
       "I answered: I do not want to stand outside and mock so easily. I can understand his contentment, and why he is unwilling to doubt it. Roth’s cruelest stroke is to give such a man a daughter he cannot understand at all."],
      ["他问：梅丽有什么不懂的？她什么都有。",
       "He asked: What is there to not understand about Merry? She has everything."],
      ["我答：正因为什么都有。她生在西摩已经建好的富裕家庭里。她不必像祖父那样靠做生意脱贫，也不必像父亲那样证明犹太移民的孩子进得了美国主流。父亲拼来的一切，她一出生就有，最后却反抗这个家代表的生活。她卷入反越战的激进政治，参与了一次造成死亡的爆炸。",
       "I answered: Precisely because she has everything. She is born into the prosperous family Seymour has already built. She need not escape poverty by running a business as her grandfather did, nor prove, as her father did, that the children of Jewish immigrants can enter the American mainstream. She has from birth what her father fought for, and in the end rebels against the life this family stands for. She is drawn into radical anti-Vietnam War politics and takes part in a bombing that causes a death."],
      ["他问：那就是他教育失败了。",
       "He asked: Then he failed as a father."],
      ["我答：这里值得想的，我觉得不是一个富裕的家庭为什么养出这样激进的女儿，是西摩为什么始终相信，自己的成功应该能解释女儿的幸福。他给了梅丽好的生活，尽力做一个负责的父亲，也相信自己对人一向善意。这些保证不了女儿认同他的价值，更保证不了她用同样的方式理解美国。对西摩，美国是机会，宽容，努力，社会流动。对梅丽，美国还有越南战争，政治暴力，和她接受不了的社会矛盾。同一个国家，同一个家，两个不同的美国。",
       "I answered: What seems worth thinking about is not why a wealthy family would raise so radical a daughter, but why Seymour always believes his success should explain his daughter’s happiness. He gives Merry a good life, tries to be a responsible father, and believes he has always been kind to others. None of that guarantees she will share his values, still less see America as he does. For Seymour, America is opportunity, tolerance, effort and social mobility. For Merry, it also holds the Vietnam War, political violence and social contradictions she cannot accept. One country, one family, two different Americas."],
      ["他问：那你说，是谁看对了？",
       "He asked: Then say it, who saw it right?"],
      ["我答：我不觉得哪一边一定更对。主动选择来美国的人，会不停拿这里和曾经住过的地方比。我们知道自己为什么离开，记得当初想得到什么，所以更容易用个人生活的改善来衡量这个国家。美国出生的下一代，没有这样比较过。美国对他们不是比过之后的选择，是一开始就得面对的现实，他们不一定因为父母得到过机会，就对这个社会有同样的感激。一个国家对不同世代的人，可以有完全不同的意义。",
       "I answered: I do not think either side is necessarily more right. Those of us who chose to come keep comparing America with the places we lived before. We know why we left and remember what we hoped to gain, so we more readily measure the country by the improvement of our own lives. The American-born next generation has not made that comparison. For them America is no choice made after weighing; it is a reality they face from the start, and they need not feel the same gratitude just because their parents found opportunity here. A country can mean entirely different things to different generations."],
      ["他问：罗斯总该有个立场吧？西摩错在哪里？",
       "He asked: Surely Roth has a position. Where is Seymour wrong?"],
      ["我答：我喜欢的正是，罗斯没有直接告诉读者。西摩不虚伪，也没有存心忽略家庭的责任，许多地方甚至值得尊敬。可他越努力理解梅丽，越发现自己熟悉的那套道德语言解释不了她。这种无力，比任何直接批判美国梦的文字都更让我难忘。",
       "I answered: What I like is that Roth never tells the reader outright. Seymour is no hypocrite and does not deliberately neglect his duties; in many ways he is admirable. But the harder he tries to understand Merry, the more he finds that the moral language he knows cannot explain her. That helplessness stays with me more than any text that directly criticizes the American dream."],
      ["他问：这和你有什么关系？你的生活不是挺顺利的？",
       "He asked: What has this to do with you? Your life is going well enough."],
      ["我答：顺利正是问题。个人生活的成功，很容易给人一种错觉：既然我靠努力得到了现在的一切，这个社会的运作，至少在根本上该是合理的。在西雅图这样的科技城市，这种想法几乎到处都是。我们习惯相信教育，能力，技术创新和个人努力之间，有一种可以不断复制的关系。谁得到了好工作，收入和资产，就容易把结果当成对自己选择的肯定。可这些经历，能说明美国社会的现实有多少？我在这里得到的机会是真的，梅丽反抗的社会问题也是真的。前者取消不了后者，正如西摩的善良和成功，也不能证明他懂得女儿生活的那个世界。",
       "I answered: The going well is the problem. Personal success easily creates an illusion: since I got everything I have through effort, the way this society works must at least be fundamentally reasonable. In a tech city like Seattle the thought is nearly everywhere. We are used to believing in a repeatable relation among education, ability, technological innovation and personal effort. Whoever gets a good job, income and assets easily takes the result as an affirmation of his choices. But how much of American reality can such experiences tell us? The opportunities I found here are real, and so are the social problems Merry rebels against. The first cannot cancel the second, just as Seymour’s goodness and success do not prove he understands the world his daughter lives in."],
      ["他问：那你至少能相信小说里的西摩吧？",
       "He asked: At least you can trust the Seymour in the novel."],
      ["我答：这也要留意。我们认识的西摩，很大程度上是通过内森·祖克曼的想象立起来的。祖克曼最初记得的，是少年时代那个近乎完美的瑞典佬，像是越过了族裔的限制，实现了美国的理想。后来他想通过这个家庭的悲剧，重新理解自己曾崇拜的人。他懂了吗？我一直有些怀疑，他讲的西摩可能同样是被想象，被重新组织过的。那个完美的美国人，既是西摩想成为的自己，也是祖克曼曾希望美国成为的样子。所以在我看来，整部小说除了是一个家庭的悲剧，也是一个人不断修改自己对美国的理解的过程。",
       "I answered: That needs care too. The Seymour we know is largely built through Nathan Zuckerman’s imagination. What Zuckerman first remembers is the nearly perfect Swede of his boyhood, who seemed to have crossed the limits of ethnicity and realized the American ideal. Later he tries, through this family’s tragedy, to understand anew the man he worshipped. Does he succeed? I have always had my doubts. The Seymour he tells may likewise be imagined and reassembled. That perfect American is both the self Seymour strove to be and what Zuckerman once hoped America could be. So to me the whole novel is the tragedy of one family and also the process by which a person keeps revising his understanding of America."],
      ["他问：读完以后，你还信那个梦吗？",
       "He asked: Having finished, do you still believe in the dream?"],
      ["我答：信。我仍然相信美国给个人选择和改变命运的机会，这种信不只来自某种政治理念，也来自我自己的生活。可读完以后，我对另一件事多了戒心：不要因为自己的美国梦正在实现，就以为已经懂了美国。年轻时我们容易把美国看成一个努力就能进去的世界。进去了，有了期待过的生活，才慢慢发现，成功不会自动带来对这个社会的理解。西摩的悲剧，也许不在于他信了一个全然虚假的梦，而在于这个梦在他身上实现得太完整，他越来越难想象，还有人用完全不同的眼睛看同一个国家。",
       "I answered: Yes. I still believe America gives individuals the chance to choose and to change their fate, and the belief comes not only from a political idea but from my own life. But after the book I am warier of one thing: not to assume I understand America because my own American dream is coming true. When young, we readily see America as a world we can enter through effort. Having entered and got the life we hoped for, we slowly find that success does not bring understanding of this society by itself. Seymour’s tragedy may lie not in believing a wholly false dream, but in the dream coming true in him so completely that he found it ever harder to imagine anyone seeing the same country with different eyes."],
      ["他问：那你自己呢？以后要留下来吗？",
       "He asked: And you? Will you stay?"],
      ["我答：还没有决定。如果留下，成了美国人，我希望自己仍然肯承认，我经历的美国，只是这个国家无数种现实里的一种。",
       "I answered: I have not decided. If I stay and become American, I hope I will still be willing to admit that the America I have lived is only one of this country’s countless realities."]
    ]
  },
  {
    "date": "2014-10-16",
    "title": "Who Is a Real American?",
    "slug": "who-is-a-real-american",
    "category": "Novel",
    "book": {
      "cover": "i_married_a_communist.jpg",
      "title": "I Married a Communist",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1998",
        "Radio star Ira Ringold, a communist, is destroyed in the McCarthy era, his story told by Murray Ringold to Nathan Zuckerman."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["艾拉·林戈尔德出身工人阶级，打过仗，后来成了广播明星。他信共产主义，脾气冲，缺点也多，不少地方招人讨厌。到了麦卡锡主义盛行的年代，这些复杂的经历忽然都不作数了。人们先看见一个共产党员，然后才轮到一个人。",
       "Ira Ringold came from the working class, fought in the war, and became a radio star. He believed in communism, had a temper, and had plenty of flaws that made people dislike him. In the age of McCarthyism all that complicated history suddenly counted for nothing. People saw a communist first, and only after that a person."],
      ["我读《我嫁给了一个共产党员》时，一直停在这里。艾拉没有丢掉美国国籍，却慢慢丢掉了被当作美国人对待的资格。他的婚姻，他的朋友，他过去说过的话，都能被改写成政治上的罪证。妻子伊芙出于私人恩怨的揭发，在反共的浪潮里，也成了维护国家利益的正当行为。",
       "I kept stopping at this point in *I Married a Communist*. Ira never loses his citizenship, yet slowly loses the standing to be treated as an American. His marriage, his friends, what he once said can all be rewritten as political proof of guilt. His wife Eve’s exposure of him, driven by private grievance, becomes in the anti-communist wave a rightful act in defense of the nation."],
      ["迫害最可怕的地方在这里：它不一定要捏造事实，只要改变解释事实的办法。愤怒被解释成危险，沉默被解释成心虚，辩解又被解释成狡猾。人一旦先被认定是敌人，几乎什么都能拿来当证据。",
       "This is what is most frightening about persecution: it need not fabricate facts, only change how facts are read. Anger is read as danger, silence as guilt, defense as cunning. Once a man is decided to be an enemy, nearly anything can serve as evidence."],
      ["我是来美国以后才有这种矛盾的印象的。这个国家比别处更强调个人的自由，又特别热衷于判断谁才是美国人。我当初选择来这里，是因为一个人不必生在这里，也能靠读书，工作和自己的努力，一点点成为这个社会的一部分。",
       "I came to this contradictory impression only after arriving in America. The country stresses individual freedom more than anywhere else, and is especially eager to judge who is an American. I chose to come because a person need not be born here to become, bit by bit, part of this society through study, work and his own effort."],
      ["可我忍不住想，哪天一个人的美国身份不再由法律决定，而要看他合不合某种文化或政治上的期待，像我这样的外来者，什么时候才不算外人？",
       "But I cannot help thinking: if one day a person’s Americanness stops being settled by law and depends on whether he meets some cultural or political expectation, when would an outsider like me stop being a stranger?"],
      ["我也觉得美国以后还会出现类似麦卡锡主义的狂热，只是下一回被指着的未必是共产党员。有人会告诉美国人，他们的国家正在被移民，少数族群，或者持不同意见的人夺走。有人会出现，特别会利用这种情绪，把复杂的社会问题说成一些人对美国的背叛。我不知道这会不会发生。我只知道，让人相信自己正在失去本来属于自己的东西，比让人弄懂社会为什么变，容易得多。",
       "I also feel America may see a fervor like McCarthyism again, only that next time the one pointed at may not be a communist. Someone will tell Americans their country is being taken from them by immigrants, minorities or people who think differently. A politician will appear who is good at using that mood, who explains complicated social problems as some people’s betrayal of America. I do not know whether it will happen. I only know it is far easier to make people believe they are losing what was theirs than to make them understand why society is changing."],
      ["罗斯的安排，我很喜欢。我们认识的艾拉，来自多年后默里的回忆，再经祖克曼转述。小说读完，我们也不能确定自己懂了他。我们对一个人的判断，有多少出自他的经历，有多少出自别人希望我们怎样看他？麦卡锡主义者要一个危险的共产党员，艾拉的支持者也许要一个无辜的受害者。罗斯偏不让他完全成为哪一种。",
       "I like Roth’s arrangement. The Ira we know comes from Murray’s memories years later, passed through Zuckerman. Even after the whole novel we cannot be sure we understand him. How much of our judgment of a man comes from his experience, and how much from how others want us to see him? The McCarthyites need a dangerous communist, and Ira’s supporters may need an innocent victim. Roth will not make him wholly either."],
      ["政治急着告诉我们，一个人站在哪一边。文学让我们看到，他也许根本没法这样分类。读完以后，我觉得一个社会最危险的时候，未必是公开反对自由的时候，而是开始相信，为了保住自己的自由，得先把一些人排除出去。当我们认定一个人不属于“我们”，往往就不觉得还要听懂他在说什么。",
       "Politics hurries to tell us which side a man is on. Literature shows us he may not be classifiable that way at all. Having finished, I feel a society’s most dangerous moment is not necessarily when it openly opposes freedom, but when it begins to believe that to keep its own freedom it must first shut some people out. Once we are sure a man does not belong to “us,” we often feel no need to understand what he says."],
      ["艾拉曾经是广播里的明星。",
       "Ira was once a star on the radio."]
    ]
  },
  {
    "date": "2014-10-31",
    "title": "Personal Effort Cannot Explain Fate",
    "slug": "personal-effort-cannot-explain-fate",
    "category": "Novel",
    "book": {
      "cover": "nemesis_roth.jpg",
      "title": "Nemesis",
      "author": "Philip Roth",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 2010",
        "In Newark in the summer of 1944, playground director Bucky Cantor faces a polio epidemic that strikes the children in his care."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1944年夏天的纽瓦克，脊髓灰质炎在蔓延。年轻的体育教师巴基·坎托尔因为视力不好无法参军，留在家乡照看孩子。他认真负责，把保护孩子当成自己在战争年代能担起的使命。可疾病不管他善不善良，孩子们还是一个接一个地感染，死去。",
       "Newark, summer of 1944, and polio is spreading. Bucky Cantor, a young physical education teacher, cannot enlist because of his eyesight and stays home to look after children. He is conscientious and treats protecting them as the mission he can bear in wartime. But the disease does not care whether he is good, and the children are infected and die, one after another."],
      ["在美国的课堂和办公室里，我听得最多的一句话是：你的人生，由你自己负责。这话对我有吸引力。出国留学，本身就是对个人奋斗的相信。我肯离开熟悉的环境，重新适应语言，教育制度和生活方式，很大程度上因为我相信，人生不该完全由出生的地方决定。",
       "In American classrooms and offices, the line I hear most is: your life is yours to answer for. It appeals to me. Studying abroad was itself a belief in personal effort. I was willing to leave a familiar place and readjust to a new language, education system and way of life largely because I believed a life should not be settled entirely by where one is born."],
      ["可我慢慢发现，美国对个人选择的强调，有时到了让人不安的程度。在学校里，人们常谈目标，规划和未来。成绩，实习，职业发展，好像都能靠合理安排和持续努力变好。谁成功了，我们夸他自律有能力；谁失败了，我们又容易转过来怀疑，他是不是不够努力。我自己也一样。刚来时英语说得不自然，我觉得是练得少；面对陌生的课程和学术要求，我也先检讨自己准备得够不够。这样想让我更独立，也慢慢让我相信，生活里大多数的难处，都该找得到个人的原因。",
       "But I slowly found that America’s emphasis on personal choice sometimes goes to an unsettling degree. At school people often talk about goals, plans and futures. Grades, internships and career development all seem improvable through sensible arrangement and sustained effort. When someone succeeds we praise his discipline and ability; when someone fails we easily turn around and suspect he did not try hard enough. I was no different. When I first came, my English did not flow, and I felt I had not practiced enough; facing unfamiliar courses and academic demands, I first examined whether I was prepared enough. This made me more independent, and it also slowly led me to believe that most difficulties in life should have a personal cause."],
      ["巴基后来怀疑，是自己把病毒带进了夏令营。他把这场悲剧归到自己的选择上。读罗斯的《复仇女神》，我第一次认真怀疑这种信念的边界。他最难接受的，我想，是疾病本身以外的事：自己已经尽了责任，却还是没能阻止不幸。",
       "Bucky later suspects that he himself brought the virus to the summer camp, and he puts the tragedy down to his own choices. Reading Roth’s *Nemesis*, I questioned the limits of that belief seriously for the first time. What he cannot accept, I think, lies beyond the disease itself: he has done his duty and still could not stop the misfortune."],
      ["我在美国越来越习惯把生活看成一连串选择：选什么课，怎么安排时间，怎样为将来做准备，每个决定都该有一个能预料的结果。但我有时想，一个学生足够努力，却因为家里的条件不得不中断学业；一个人认真工作，却因为经济环境失去了收入；一个善良的人忽然生了病，我们还应该从他个人的选择里找解释吗？",
       "In America I have grown used to seeing life as a series of choices: which courses to take, how to arrange my time, how to prepare for the future, each decision owed a predictable result. But sometimes I think of a student who works hard enough yet must stop his studies because of family circumstances; of someone who works diligently and loses income because of the economy; of a kind person who suddenly falls ill. Should we still look for the explanation in his personal choices?"],
      ["巴基的悲剧，在于他不肯承认责任有边界。他要为自己做过的事负责，还想为所有没能阻止的事负责。我喜欢罗斯没有让他从苦难里得到什么人生的智慧。他到最后没有学会和偶然和解，放弃了爱情，把余生过成对自己的惩罚。",
       "Bucky’s tragedy is that he cannot admit responsibility has limits. He wants to answer for what he has done and for everything he failed to prevent. I like that Roth does not let him gain some wisdom from suffering. He never learns to make peace with chance, gives up love, and turns the rest of his life into a punishment of himself."],
      ["罗斯甚至没有让巴基自己讲这场悲剧。我们认识的巴基，来自多年以后幸存者阿诺德·梅斯尼科夫的回忆。阿诺德同样得过脊髓灰质炎，身体留下了终身的损伤，却没有因此放弃生活。两个人经历相似的灾难，对自己命运的理解却完全不同。我开始怀疑，巴基的悲剧有多少来自疾病，有多少来自他后来给疾病的意义。",
       "Roth does not even let Bucky tell the tragedy himself. The Bucky we know comes from the memories, years later, of Arnie Mesnikoff, a survivor. Arnie also caught polio and was left with lifelong physical damage, yet did not give up on life. The two men lived through a similar disaster and understood their fates in entirely different ways. I began to wonder how much of Bucky’s tragedy came from the disease and how much from the meaning he later gave it."],
      ["小说叫《复仇女神》，容易让人想起古希腊惩罚人类傲慢的涅墨西斯。但罗斯的世界里没有一位主持正义的神。疾病不会因为巴基善良就放过他，也不会因为他自责就停止传播。他越是找自己该受惩罚的理由，越像在替一位不存在的神完成审判。俄狄浦斯最后弄清了命运背后的真相，巴基却始终说不准，自己相信的罪责到底成不成立。他毁掉自己，因为受不了可能根本没有真相。",
       "The novel is called *Nemesis*, which recalls the Greek goddess who punishes human arrogance. But Roth’s world has no god who administers justice. The disease does not spare Bucky for his goodness, nor stop spreading because he blames himself. The harder he searches for the reason he deserves punishment, the more he seems to carry out the judgment of a god who does not exist. Oedipus finally learns the truth behind his fate; Bucky can never say whether the guilt he believes in even holds. He destroys himself because he cannot bear the possibility that there is no truth."],
      ["读到最后，我觉得罗斯写的是一个人怎样把偶然发生的灾难，重新讲成自己应得的惩罚。巴基需要一个有罪的自己，才能相信世界还有某种道德秩序。小说始终没有证明这种秩序存在。",
       "By the end I feel Roth is writing about how a person retells a disaster that came by chance as a punishment he deserves. Bucky needs a guilty self in order to believe the world still has some moral order. The novel never proves that order exists."]
    ]
  },
  {
    "date": "2015-02-21",
    "title": "The Night Fugui Lost",
    "slug": "the-night-fugui-lost",
    "category": "Novel",
    "book": {
      "cover": "huozhe.jpg",
      "title": "活着 (To Live)",
      "author": "余华 Yu Hua",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Novel · Chinese original, first published 1993",
        "Fugui, once a gambling landlord’s son, lives through the upheavals of twentieth-century China, losing those he loves."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["龙二被枪毙的那天，福贵站在围观的人群里。",
       "The day Long Er is shot, Fugui stands in the crowd that has come to watch."],
      ["那个赢走他全部家产的人，就跪在前面。福贵看着，忽然明白过来：当年要是没输掉那些田地，今天挨枪的就是他自己。",
       "The man who won his whole fortune kneels up front. Fugui watches, and it comes to him all at once: had he not lost those fields back then, he would be the one taking the bullet today."],
      ["这话听起来近乎荒唐。他是地主家的少爷，迷上赌博，把祖辈攒下的田和房子全输给了龙二，父亲被气死，妻子和孩子跟着受穷。按中国人熟悉的因果，这是再清楚不过的败家故事：不惜祖业的人，终于遭了报应。",
       "It sounds almost absurd. He was a landlord’s son who fell for gambling and lost every field and house his forebears had saved to Long Er. His father died of anger, and his wife and children went poor along with him. By the cause and effect Chinese people know well, it is the plainest tale of a wastrel: a man who did not cherish the family land and finally got his retribution."],
      ["几年后土改来了。龙二因为有那些田产，被划成地主，拉出去枪决。",
       "A few years later land reform comes. Because he owns those fields, Long Er is classed as a landlord and taken out to be shot."],
      ["福贵年轻时，祖产就是家族的延续。父亲攒下，儿子接着种，孙子接着活。一个人留给后代多少东西，几乎决定他这一辈子算不算成功。所以赌博可耻，不只在挥霍，还在亲手断了这条往下传的线。",
       "In Fugui’s youth, ancestral land meant the family going on. The father saves, the son keeps farming, the grandson keeps living. How much a man leaves his descendants nearly decides whether his life counts as a success. So the gambling is shameful, and not only for the waste: he cut that line with his own hands."],
      ["后来历史改了财产的意思。昨天象征家族体面的土地，今天成了要清算的罪证。昨天的不肖子孙，因为一无所有，反倒有了活路。",
       "Then history changes what property means. Yesterday the land stood for the family’s good name; today it is evidence to be settled. Yesterday’s disgrace of a son has nothing, and so he has a way to live."],
      ["龙二赢了赌局，并没有因此更坏；福贵输了，也没有因此更好。可是历史一到，两人从前的举动忽然有了截然不同的分量。他们的命运，取决于几年前一场赌局的输赢。余华只用这一次对换，就让一整套传统的道德秩序晃了起来。",
       "Long Er did not turn worse by winning the game, and Fugui did not turn better by losing it. But when history arrives, what each man did before is given a completely different weight. Their fates hang on the result of a game played years earlier. With this one swap, Yu Hua sets a whole traditional moral order swaying."],
      ["福贵活了下来。",
       "Fugui lives."],
      ["比起后面接连发生的死亡，这件事更能说明《活着》的残酷。他的幸存从一开始就不是什么值得夸的本事。他没有预见历史，也没有选对什么，只是犯了一个错，而这个错碰巧把他送到了能活的位置上。",
       "This says more about the cruelty of *To Live* than the deaths that follow one after another. His survival was never an ability worth praising. He did not foresee history and did not choose rightly. He made one mistake, and the mistake happened to carry him to a place where he could live."],
      ["余华也没有让福贵因此看懂历史。他还是种地、吃饭、养孩子，还是在往后的岁月里失去珍爱的一切。当年一无所有，让他躲过了死；后来攒下的善良和勤劳，却换不回儿子有庆的命。",
       "Yu Hua does not let Fugui understand history because of it. He still farms, eats, raises his children, and in the years after still loses everything he loves. Having nothing once kept him clear of death; the goodness and hard work he stored up later cannot buy back the life of his son Youqing."],
      ["所以我不愿把《活着》读成一部夸中国人坚韧的小说。夸福贵受尽苦难仍然活着，很容易忘了龙二也曾认真经营自己的日子，有庆更没有做错什么。如果活下来的人都有值得夸的品质，那些没能活下来的人，该怎么算？",
       "So I do not want to read *To Live* as a novel praising the toughness of the Chinese. Praise Fugui for living through all that suffering, and it is easy to forget that Long Er also worked at his own life, and that Youqing did nothing wrong. If survivors all have some quality worth praising, how are we to account for the ones who did not survive?"],
      ["福贵这一生，赶上了中国社会最剧烈的几次转变。少爷成了农民，败家子成了幸存者，最后是一个孤独的老人。那场赌局一直没有散。只是后来坐在桌子对面的，不再是龙二。",
       "Fugui’s life ran through the sharpest turns of Chinese society. The young master became a peasant, the wastrel became a survivor, and in the end an old man alone. The game never broke up. It is only that the one sitting across the table was no longer Long Er."]
    ]
  },
  {
    "date": "2012-05-02",
    "title": "In the Cracks of the World",
    "slug": "in-the-cracks-of-the-world",
    "category": "Novel",
    "book": {
      "cover": "1q84.jpg",
      "title": "1Q84",
      "author": "Haruki Murakami",
      "language": "English",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "Novel · English translation of the Japanese original, 2009–10",
        "Aomame climbs down an expressway stairwell in Tokyo and finds herself in a world with two moons."
      ]
    },
    "place": "于中国长沙\nChangsha, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["翻开第一章。东京的高速公路上，车一辆接一辆，停在本该流动的车道里。车窗外是被道路、桥梁、隧道和时间表精密组织起来的城市，车窗里放着雅纳切克的《小交响曲》。青豆坐在出租车后座，看着前面望不到头的车流。她有一个不能迟到的约会，而这座以速度著称的城市，此刻一步也不肯让她往前。",
       "I open the first chapter. On the Tokyo expressway the cars sit one behind another, still in lanes that are meant to flow. Outside the window is a city organized down to the finest detail by roads, bridges, tunnels and timetables; inside, Janáček’s Sinfonietta is playing. Aomame sits in the back of a taxi, looking at traffic with no end in sight. She has an appointment she cannot be late for, and this city famous for its speed will not let her move one step."],
      ["读到这里停下来。我觉得《1Q84》最精彩的地方，就藏在这场堵车里。高速公路是现代文明相当自信的发明：把城市从地面抬起，人不必再受街巷曲折、行人和路口等待的拖累，能以更快的速度去更远的地方。它有明确的入口和出口，有规定的方向，有越不过去的护栏。一旦驶入，人就不用再决定怎么走，只要相信路已经替自己做了最合理的安排。",
       "I stop here. I think the best thing in *1Q84* is hidden in this traffic jam. The expressway is a rather confident invention of modern civilization: it lifts the city off the ground, so that people no longer bear the winding lanes, the pedestrians, the waiting at crossings, and can go farther at greater speed. It has clear entrances and exits, a set direction, guardrails that cannot be crossed. Once you drive in, you no longer have to decide how to go; you only trust that the road has made the most reasonable arrangement for you."],
      ["车一停，这份自由露出古怪的另一面。人有车却不能动，有目的地却不能选路。高速公路不许犹豫，也不许回头。它以效率的名义取消了岔路，效率失灵的时候，又把所有人困在同一个方向里。",
       "Once the cars stop, this freedom shows its strange other side. You have a car and cannot move; you have a destination and cannot choose a route. The expressway allows no hesitation and no turning back. In the name of efficiency it removed the side roads, and when efficiency fails it traps everyone in the same direction."],
      ["司机告诉青豆一条不寻常的出路：附近有一道紧急楼梯，可以从高速公路下到地面。他说那不是给普通行人用的，又用一种捉摸不透的口气提醒她，一旦做了和平常不同的事，周围的景象也可能跟着变。",
       "The driver tells Aomame about an unusual way out: nearby there is an emergency staircase that leads from the expressway down to the ground. He says it is not meant for ordinary pedestrians, and in an elusive tone he warns her that once she does something out of the ordinary, the scenery around her may change too."],
      ["这话由一个出租车司机说出来，平静得过分。他没有神秘的身份，没有预言者的架势，只是坐在方向盘后面，像介绍一条少有人知的近路那样，指出现实的一道裂缝。村上很会写这种不动声色的荒诞。让人不安的东西往往不必以惊人的面貌出现，它可能只是一个普通人在一个普通的下午，说了一句过后才显得意味深长的话。",
       "Coming from a taxi driver, the remark is almost too calm. He has no mysterious identity and no prophet’s bearing; he sits behind the wheel and points out a crack in reality the way you would mention a shortcut few people know. Murakami is good at this deadpan absurdity. What unsettles us seldom needs a startling face. It can be an ordinary person on an ordinary afternoon saying something that only later seems loaded."],
      ["青豆下了车，翻过护栏，找到那道窄楼梯。她穿着短裙、丝袜和高跟鞋，只好小心地调整身体，一级一级往下走。没有闪电，没有迷雾，没有任何预告世界将要改变的奇迹，只有高跟鞋和台阶之间别扭的接触，和一个怕弄坏衣服而动作笨拙的女人。",
       "Aomame gets out, climbs over the guardrail, and finds the narrow staircase. In a short skirt, stockings and high heels she has to adjust her body with care and go down step by step. No lightning, no mist, no miracle announcing that the world is about to change. Only the awkward contact of heels with stairs, and a woman clumsy because she does not want to ruin her clothes."],
      ["我喜欢村上在这里对身体的坚持。高跟鞋、丝袜、短裙，都是青豆在都市生活里精心挑选的装束，适合某种安排好的走法，不适合翻护栏、爬应急楼梯。离开正常的路，身体先感到的是不便，不是自由。现代生活仿佛早已替我们练好了一套姿态：怎么坐，怎么站，怎么优雅地穿过街道，怎么在规定的空间里保持体面。一旦离开那些空间，连最熟悉的身体也陌生起来。",
       "I like how Murakami sticks to the body here. Heels, stockings and a short skirt are what Aomame chose with care for city life; they suit a certain arranged way of walking and do not suit climbing rails and emergency stairs. Leaving the normal road, the body feels inconvenience first, not freedom. Modern life seems to have trained us in a set of postures ahead of time: how to sit, how to stand, how to cross a street gracefully, how to stay presentable in the spaces assigned. Step out of those spaces and even the most familiar body turns strange."],
      ["这道楼梯最吸引我的一点，是它并不属于另一个世界。它属于高速公路。同一套工程造出来，纳入同一套安全规范，只是平常不该被使用。高速公路要保证自己运转，就得预先承认运转可能中断；要让人始终朝规定的方向走，又不得不留一条许人离开的路。现代秩序在最隐蔽的地方，给自己留了一个出口。青豆并不是发现了一条秩序之外的路，她发现的是，秩序从来没有它声称的那样完整。",
       "What draws me most about this staircase is that it does not belong to another world. It belongs to the expressway. Built by the same engineering, brought under the same safety code, it is simply not supposed to be used in normal times. To keep itself running, the expressway has to admit beforehand that running may stop; to keep people going in the set direction, it has to leave a road that lets them leave. Modern order has left itself an exit in its most hidden place. Aomame has not found a road outside the order; she has found that the order was never as complete as it claimed."],
      ["她的离开甚至算不上反抗。青豆不讨厌高速公路，也没打算摆脱都市生活。她走下楼梯，只因为不想迟到。她仍然相信钟表，相信约定，相信时间可以精确分配，一个人应当照计划完成自己的事。越是忠于现代生活对效率的要求，她越得违背维持这效率的规则。有一点卡夫卡式的反讽：为了遵守秩序，得先逃离秩序。",
       "Her leaving hardly counts as rebellion. Aomame does not hate the expressway and has no plan to shake off city life. She goes down the stairs only because she does not want to be late. She still believes in clocks, in appointments, in time that can be precisely divided, in a person finishing what she set out to do on schedule. The more faithful she is to modern life’s demand for efficiency, the more she must break the rules that keep that efficiency going. There is something Kafkaesque in the irony: to keep the order, she has to flee it first."],
      ["走到地面，东京没有戏剧性的变化。建筑和街道依旧，人们仍忙着各自的生活。没有废墟，也没有遥远的国度。后来她才慢慢觉出细微而不安的偏差：警察的装备和记忆里不同，某些大事似乎发生过，她却毫不知情。直到抬头看见两个月亮，她才明白，自己活着的年份可能已经不是1984。她管它叫1Q84。",
       "On the ground, Tokyo has not changed dramatically. The buildings and streets are the same and people are busy with their lives. No ruins, no distant country. Only later does she slowly notice small and uneasy differences: the police are equipped unlike what she remembers, and certain major events seem to have happened without her knowing. Not until she looks up and sees two moons does she understand that the year she is living in may no longer be 1984. She calls it 1Q84."],
      ["夹在数字之间的那个Q，是一个问号。它不像另一种纪年，更像一道无法愈合的裂痕。1984原本是确定的：一个年份，一段历史，所有人共同承认的现实。青豆在里面插进了怀疑。世界没有消失，只是从此不能再毫无保留地相信。",
       "The Q wedged between the numbers is a question mark. It looks less like another calendar than a crack that will not heal. 1984 was fixed: a year, a stretch of history, a reality everyone agreed on. Aomame has put doubt into it. The world has not vanished; it simply can no longer be trusted without reservation."],
      ["我想，两个月亮吓人，不在天文上的不可能，在它们的沉默。它们悬在那里，照着同一座东京，没有人向青豆解释为什么。城市照常运转，地铁照常到站，商店照常营业，报纸照常报道。整个社会好像拥有一种比个人感官更强的确定性：只要生活没有停，现实就无须质疑。我忍不住回头去看开头的高速公路。我们活在庞大的制度和知识网络里，靠地图认方向，靠新闻理解世界，靠档案确认过去，靠别人的判断建立自己的判断。这种秩序让现代社会成为可能，也让我们渐渐习惯相信，凡是没被共同承认的东西，就不值得相信。青豆的困境在于，她的眼睛和世界的共识分了岔。所有人都说天上只有一轮月亮，看见两轮的人，先怀疑的往往是自己。",
       "What frightens me about the two moons, I think, is not their astronomical impossibility but their silence. They hang there lighting the same Tokyo, and no one explains to Aomame why. The city runs as usual, trains arrive as usual, shops open as usual, newspapers report as usual. The whole society seems to hold a certainty stronger than any individual’s senses: as long as life has not stopped, reality needs no questioning. I cannot help looking back at the expressway of the opening. We live inside a vast network of institutions and knowledge, using maps to find direction, news to understand the world, archives to confirm the past, other people’s judgment to build our own. This order makes modern society possible, and it also teaches us to believe that whatever is not commonly acknowledged is not worth believing. Aomame’s trouble is that her eyes and the world’s consensus have parted ways. When everyone says the sky has one moon, the person who sees two usually doubts herself first."],
      ["村上没有把走下高速公路写成简单的觉醒。1Q84不是一片自由的土地。那里有封闭的宗教团体，有难以辨认的权力，有Little People，还有比交通规则更难捉摸的支配。她从一套看得见的秩序里离开，进入另一套连边界都无法确定的秩序。她得到了怀疑现实的能力，却没有因此得到解释现实的权力。这让小说躲开了廉价的浪漫。路的外面不一定是旷野，怀疑之后也不一定是真理。人能从一种束缚里逃脱，却未必知道自己会落到哪里。",
       "Murakami does not write the descent from the expressway as a simple awakening. 1Q84 is no land of freedom. There is a closed religious group, a power hard to make out, the Little People, and a kind of control harder to grasp than traffic rules. She leaves one order she can see and enters another whose edges cannot even be determined. She gains the ability to doubt reality and gains no power to explain it. That keeps the novel clear of cheap romance. Outside the road is not necessarily open country, and after doubt there is not necessarily truth. A person can escape one constraint without knowing where she will land."],
      ["那道楼梯是否真的改变了世界，也值得怀疑。也许青豆是下了楼梯才进入1Q84，也许世界早已悄悄改变，她一直坐在自己的生活里，沿着熟悉的路前进，没有机会察觉。我们太需要一个清晰的转折点，才会把那道楼梯当成两个世界的边界。人生里许多根本的变化，并没有明确发生的瞬间。只是某一天突然发现，自己回不到从前那种确信无疑的状态了。",
       "Whether the staircase really changed the world is also open to doubt. Maybe Aomame entered 1Q84 after going down the stairs; maybe the world had already changed quietly, and she had been sitting inside her life, moving along familiar roads, with no chance to notice. We need a clear turning point so badly that we take the staircase for the border between two worlds. Many of the basic changes in a life have no clear moment of happening. One day we simply find that we cannot go back to the old unquestioning certainty."],
      ["到这里，最打动我的画面不是青豆仰望两个月亮，是她穿着高跟鞋，独自走下那道不起眼的楼梯。在她头顶，汽车仍停在高速公路上。无数人坐在各自的车厢里，等路恢复畅通，等重新被允许向前。他们焦躁，疲惫，却没有理由怀疑自己所在的世界。只有青豆离开了车流，沿着那条本不该使用的通道，慢慢往下走。她不知道下面有什么等着自己。她甚至不知道，自己是在离开一个世界，还是第一次看见它。",
       "At this point the image that moves me most is not Aomame looking up at two moons but Aomame in heels, alone, going down that unremarkable staircase. Above her head the cars are still stopped on the expressway. Countless people sit in their separate compartments, waiting for the road to clear, waiting to be allowed forward again. They are impatient and tired, and have no reason to doubt the world they are in. Only Aomame has left the stream of cars and walks slowly down the passage that was never meant to be used. She does not know what waits below. She does not even know whether she is leaving a world or seeing it for the first time."],
      ["还想再写一句，关于那些仍在车里的人，他们大概已经忘了护栏外面还有地面。没写完。先把书放在这一页。",
       "One more line I want to write, about the people still in their cars: they have probably forgotten that beyond the guardrail there is ground. It is not finished. I leave the book open at this page."]
    ]
  },
  {
    "date": "2019-11-24",
    "title": "Why Didn’t Daisy Make the Call?",
    "slug": "why-didnt-daisy-make-the-call",
    "category": "Novel",
    "book": {
      "cover": "great_gatsby.jpg",
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1925",
        "Nick Carraway watches his neighbor Jay Gatsby chase the past, and Daisy Buchanan, across Long Island."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "盖茨比死前",
          "Before he died, Gatsby"
        ],
        [
          "一直在等电话",
          "kept waiting for the phone"
        ],
        [
          "一直到死",
          "right up to his death"
        ],
        [
          "都在等",
          "he waits"
        ]
      ],
      [
        [
          "菲茨杰拉德最残忍的安排",
          "The cruelest thing Fitzgerald arranges"
        ],
        [
          "是他到最后",
          "is that at the end"
        ],
        [
          "仍然相信它会响",
          "he still believes it will ring"
        ],
        [
          "他等的那个电话",
          "the call he waits for"
        ],
        [
          "也许会响",
          "might still come"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "黛西为什么不打",
          "Why didn’t Daisy call"
        ]
      ],
      [
        [
          "她可以真心爱过一个人",
          "She could truly love someone"
        ],
        [
          "却不肯让这份爱",
          "and still refuse to let that love"
        ],
        [
          "约束自己的生活",
          "tie down her own life"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "一个电话",
          "One phone call"
        ],
        [
          "不必许诺婚姻",
          "needs no promise of marriage"
        ],
        [
          "不必背叛汤姆",
          "no betrayal of Tom"
        ],
        [
          "连我爱你也不必说",
          "not even I love you"
        ]
      ],
      [
        [
          "只要拿起听筒",
          "She only has to lift the receiver"
        ],
        [
          "承认那一头",
          "and admit that at the other end"
        ],
        [
          "有个人在等她",
          "someone is waiting for her"
        ]
      ],
      [
        [
          "她不肯",
          "She will not"
        ]
      ],
      [
        [
          "她可以拿起听筒",
          "She could lift the receiver"
        ],
        [
          "也可以让它搁在那里",
          "or leave it where it lies"
        ],
        [
          "她选了后者",
          "She chooses the second"
        ]
      ],
      [
        [
          "打了电话",
          "Once she calls"
        ],
        [
          "他就仍与她有关",
          "he is still hers to answer"
        ],
        [
          "他的等待要回应",
          "His waiting asks a reply"
        ],
        [
          "他的牺牲成了债",
          "his sacrifice turns into debt"
        ],
        [
          "他的命运",
          "his fate"
        ],
        [
          "再不容易置身事外",
          "no longer easy to stand outside of"
        ]
      ],
      [
        [
          "不打",
          "If she doesn’t"
        ],
        [
          "这份爱就能",
          "the love can end"
        ],
        [
          "不告而别地结束",
          "with no goodbye"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "财富给黛西最深的特权",
          "The deepest privilege money gives Daisy"
        ],
        [
          "是可以不必面对",
          "is that she need not face things"
        ]
      ],
      [
        [
          "她能在衬衫前流泪",
          "She can weep over the shirts"
        ],
        [
          "能为错过的五年惋惜",
          "can grieve the five years missed"
        ],
        [
          "却不必承担",
          "and still carry none of"
        ],
        [
          "这些感情的后果",
          "what those feelings cost"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "盖茨比读不懂这沉默",
          "Gatsby cannot read this silence"
        ]
      ],
      [
        [
          "他用五年积累财富",
          "Five years he piled up money"
        ],
        [
          "买下豪宅",
          "bought the mansion"
        ],
        [
          "要让过去再发生一次",
          "to make the past happen again"
        ]
      ],
      [
        [
          "到最后他还信",
          "At the end he still trusts"
        ],
        [
          "电话一响",
          "that if the phone rings"
        ],
        [
          "一切就有挽回的可能",
          "all might yet be mended"
        ]
      ],
      [
        [
          "对一个随时能退出",
          "For someone who can leave"
        ],
        [
          "又不必解释的人",
          "at any time without explaining"
        ],
        [
          "沉默本身就是权力",
          "silence is itself power"
        ]
      ],
      [
        [
          "他在等一个答案",
          "He waits for an answer"
        ],
        [
          "她已经决定",
          "She has already decided"
        ],
        [
          "不再回答",
          "to stop answering"
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "他的等待",
          "His waiting"
        ],
        [
          "对她来说",
          "for her"
        ],
        [
          "只是一件可以不去回应的事",
          "is something she can leave unanswered"
        ]
      ],
      [
        [
          "最悲哀的是",
          "Saddest of all"
        ],
        [
          "他直到生命结束",
          "until his life ended"
        ],
        [
          "都没有明白",
          "he never understood"
        ],
        [
          "他当作一生归宿的爱情",
          "that the love he took for a lifelong home"
        ],
        [
          "在另一个人那里",
          "in another person’s hands"
        ],
        [
          "连一句正式的告别",
          "did not even need"
        ],
        [
          "也不需要",
          "a formal goodbye"
        ]
      ],
      [
        [
          "电话没有响",
          "The phone did not ring"
        ]
      ]
    ]
  },
  {
    "date": "2015-03-06",
    "title": "Why Must One Weep for a Mother’s Death?",
    "slug": "why-must-one-weep",
    "category": "Novel",
    "book": {
      "cover": "letranger.jpg",
      "title": "局外人 (The Stranger)",
      "author": "阿尔贝·加缪 Albert Camus",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Novel · Chinese translation of L’Étranger, 1942",
        "Meursault buries his mother without tears, then kills a man on an Algerian beach, and is tried as much for the one as for the other."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["默尔索：",
       "Meursault,"],
      ["你的第一句话我记得很清楚：“今天，妈妈死了。也许是昨天，我不知道。”读到这里，我就有些不安，到现在也没有放下。你被判处死刑，似乎并不完全因为你在海滩上杀死了一个阿拉伯人，也因为你在母亲的葬礼上没有哭。",
       "I remember your first words well: “Maman died today. Or maybe yesterday, I don’t know.” They unsettled me when I read them, and I have not put them down since. You were sentenced to death, it seems, not entirely for killing an Arab on the beach, but also because you did not weep at your mother’s funeral."],
      ["你乘车去养老院，觉得疲倦，喝了咖啡，在母亲的遗体旁抽烟。守灵时，你注意到房间里的灯光、老人们的面孔，还有自己抵挡不住的睡意。第二天送葬，阿尔及利亚的太阳灼烧着你，汗不停地流，你只想快点结束这场漫长的仪式。加缪几乎没有写你内心的哀伤，却用了大量笔墨写你的身体：炎热，疲劳，口渴，困倦。这些细小的感官经验占了本该属于悲痛的位置。读的人因此不安，因为我们习惯相信，母亲去世时，一个人应该先感到悲伤，而不是天气。",
       "You rode out to the home, felt tired, drank coffee, smoked beside your mother’s body. At the vigil you noticed the lamplight, the faces of the old people, and a drowsiness you could not fight. The next day, at the burial, the Algerian sun burned you and the sweat would not stop, and you wanted only for the long ceremony to be over. Camus hardly writes your inner grief, and spends many lines on your body: heat, fatigue, thirst, sleepiness. These small sensations take the place that grief was supposed to hold. Readers are unsettled by it, because we are used to believing that when a mother dies a person should feel sorrow first, not the weather."],
      ["可我不认为你的冷漠只是没有感情。你没有说母亲的死毫无意义，也没有刻意摆出无动于衷的样子。你只是不肯把自己还没有明确感到的情绪，变成别人期待看见的姿态。对你来说，阳光确实刺眼，咖啡确实温热，身体确实疲惫，这些比一个尚未成形的情感判断更确定。你不懂得怎样悲伤，这并不是你的问题；你的问题在于不愿为了证明自己是个正常人，去表演一种社会认可的悲伤。",
       "But I do not think your coldness was simply a lack of feeling. You never said your mother’s death meant nothing, and you did not put on a show of indifference. You only refused to turn an emotion you had not clearly felt into the gesture others expected to see. For you the sun really was glaring, the coffee really was warm, the body really was tired, and these were more certain than a feeling that had not yet taken shape. Not knowing how to grieve was never your trouble. Your trouble was that you would not perform an approved grief to prove you were a normal man."],
      ["最残酷的是，这场葬礼没有随着母亲下葬而结束。它在后来审判你的法庭上又出现了。",
       "The cruelest thing is that the funeral did not end when your mother was buried. It came back in the courtroom where you were tried."],
      ["你在海滩上开枪杀了那个阿拉伯人。那天同样炎热，阳光从海面反射过来，落在对方的刀刃上。汗流进你的眼睛，太阳压着你的额头，整个世界好像都朝你的身体逼近。你扣了扳机，随后又向倒下的人开了四枪。这当然是严重的罪行。加缪没有理由因为你厌恶阳光就免除你的责任。尤其是后面那四枪，任何想把谋杀全推给环境的解释，在它们面前都显得苍白。一个人可以被阳光折磨，却不能因此获得杀人的权利。",
       "On the beach you shot the Arab. That day was just as hot, and the sun came off the sea onto the blade in his hand. Sweat ran into your eyes, the sun pressed on your forehead, and the whole world seemed to close in on your body. You pulled the trigger, and then fired four more times at the man who had fallen. It is of course a grave crime. Camus has no reason to excuse you because you hated the sun. Those four shots especially make any explanation that blames the murder wholly on the setting look pale. A person can be tormented by sunlight and still not gain a right to kill."],
      ["然而进了法庭，事情奇怪地转移了。检察官一再提到你在葬礼上的表现：没有哭，喝了咖啡，抽了烟；葬礼后不久，你又和玛丽去游泳、看喜剧电影，并开始亲密的关系。这些行为被一件件组织成关于你人格的证据。检察官像是要证明，一个没有按社会规范哀悼母亲的人，必然也缺少对别的生命的尊重。法庭本该审理一个人做了什么，却渐渐开始审判他是怎样的人。你杀人的事实并不需要靠母亲的葬礼来证明，检察官仍然抓着那些私人生活的细节不放，因为它们能帮陪审团看到一个更完整、更可憎的罪犯。你犯的是谋杀罪，法庭却好像还要你为没有表现出悲伤而认罪。",
       "Yet in court the matter shifted strangely. The prosecutor kept returning to your conduct at the funeral: you did not cry, you drank coffee, you smoked; soon after the burial you went swimming with Marie, watched a comedy, and began an intimacy. One by one these acts were arranged into evidence about your character. The prosecutor seemed to be proving that a man who did not mourn his mother by social rules must also lack respect for other lives. The court was supposed to try what a man did, and it slowly began to try what kind of man he was. The fact that you killed did not need your mother’s funeral to prove it, but the prosecutor held on to those private details, because they helped the jury see a fuller and more hateful criminal. You were guilty of murder, and the court seemed to want you to confess to the crime of not looking sad."],
      ["这里有一个很微妙的悖论。社会当然有理由谴责你的暴力，却似乎容不得你在感情上的不合群。杀人要由法律来罚，不流泪则触犯了另一套没有明文、同样强大的秩序。人们可以接受一个罪犯表达悔恨，因为悔恨说明他仍承认共同的道德语言；却很难接受一个罪犯拒绝使用这套语言，因为你的沉默让审判者没法确定，自己的价值是否也得到了被告的承认。",
       "There is a delicate paradox here. Society certainly has grounds to condemn your violence, yet it seems unable to bear your lack of fellowship in feeling. Killing is punished by law, while not weeping offends another order, unwritten and just as strong. People can accept a criminal who voices remorse, since remorse shows he still acknowledges the shared moral language; they can hardly accept one who refuses to use it, because your silence left your judges unable to tell whether their own values were acknowledged by the accused."],
      ["所以你成了一个奇怪的局外人。你不是先被社会排除在外才失去归属，而是因为拒绝照社会的要求解释自己，才一点点被认定为不可理解的人。",
       "So you became a strange sort of outsider. You were not first pushed out of society and then left without a place; you were declared incomprehensible little by little because you refused to explain yourself as society required."],
      ["我还一直记着那个始终没有名字的阿拉伯死者。你的疲倦、欲望、童年的记忆、身体的感受，都得到了叙述的空间，被你杀死的人却主要以一个模糊的身份存在。他没有自己的声音，甚至没有机会成为一个有完整生活的人。故事发生在法国殖民统治下的阿尔及利亚，这种不对称很难当作无关紧要的背景。加缪让我们进入一个法国殖民者的意识，细细体会他的孤独与荒诞，却没有同样深入地写被殖民者的生命。于是，小说在揭示社会怎样剥夺你的复杂性时，也留下了另一种更难忽略的剥夺：一个阿拉伯人的死，竟主要成了法国人讨论罪责、诚实和存在意义的机会。这不会让这本书的哲学问题失效，只会让它更尖锐。",
       "I also keep thinking of the dead Arab, who is never given a name. Your tiredness, desire, childhood memories and bodily sensations all receive room in the telling, while the man you killed exists mostly as a vague identity. He has no voice of his own, nor even the chance to be a person with a whole life. The story takes place in Algeria under French colonial rule, and this asymmetry is hard to treat as irrelevant background. Camus takes us into the mind of a French colonizer and lets us feel his loneliness and absurdity at length, without going as deep into the life of the colonized. So while the novel shows how society strips you of complexity, it also leaves another stripping that is harder to ignore: an Arab’s death becomes mainly an occasion for the French to discuss guilt, honesty and the meaning of existence. This does not void the book’s philosophical question. It sharpens it."],
      ["我们可以批评法庭不该凭你哭没哭来判断你的罪责，同时也得承认，你确实杀了一个人。我们可以理解你的沉默，却不必赞美你的冷漠。一个人拒绝虚伪，并不就此在道德上清白。",
       "We can criticize the court for judging your guilt by whether you wept, and we must also admit that you did kill a man. We can understand your silence without praising your coldness. A person who refuses hypocrisy is not thereby morally clean."],
      ["最后神父来到牢房，想劝你接受上帝和来世。你终于爆发出此前极少显露的愤怒。你拒绝把死亡解释成某个更高计划的一部分，也不愿为了临终的安慰去接受自己不信的东西。面对将到的处决，你感到世界对人的命运漠不关心，并在这漠然里得到一种奇异的平静。我不觉得这是传统意义上的精神胜利。你没有证明自己比别人清醒，也没有靠死亡得到什么崇高的意义。你只是终于不必再向任何人解释，为什么没有照他们期待的方式活。",
       "At the end the chaplain came to your cell and tried to persuade you toward God and an afterlife. You finally burst out in an anger you had rarely shown. You refused to explain death as part of some higher plan, and would not accept what you did not believe for the sake of a dying comfort. Facing the execution to come, you felt the world’s indifference to human fate, and found in that indifference a strange calm. I do not take this for a spiritual victory in the traditional sense. You did not prove yourself clearer-sighted than others, nor win some lofty meaning through dying. You simply no longer had to explain to anyone why you had not lived as they expected."],
      ["但我仍然没办法完全站在你这一边。你的诚实有一种叫人不安的局限：你忠于自己的感受，却很少走进别人的处境。你不愿假装悲伤，也没有表现出多少理解他人痛苦的能力。社会要你表演感情，固然荒谬，可一个人若只承认自己能直接感到的东西，是否就会忽略那些进不了自己感官的生命？我觉得这是你比一则关于荒诞的哲学寓言更复杂的地方。你与法庭之间不是真实与虚伪的简单对立。法庭想用现成的道德叙事吞下一个人，你则几乎拒绝一切超出自己经验的解释。前者太急着给世界意义，后者又太吝惜给别人意义。",
       "But I still cannot stand wholly on your side. Your honesty has a limit that troubles me: you are faithful to your own sensations and seldom step into another person’s situation. You would not pretend to grieve, and you showed little ability to understand anyone else’s pain. It is absurd that society demanded you perform feeling, but if a person admits only what he can feel directly, does he not overlook the lives that cannot enter his senses? That, I think, makes you more complicated than a philosophical fable about the absurd. You and the court are not simply truth against falsehood. The court wanted to swallow a man in a ready-made moral story, while you refused almost every explanation beyond your own experience. The one is too eager to give the world meaning, the other too stingy in giving meaning to others."],
      ["结尾你希望处决那天有很多观众，用仇恨的喊声来迎你。你终于愿意和这个世界建立一种明确的关系，却是通过彼此的敌意。",
       "At the end you hoped for a crowd of spectators on the day of the execution, to greet you with cries of hate. You were at last willing to have a clear relation with this world, and it was through mutual hostility."],
      ["我想起的仍是你母亲葬礼上的那杯咖啡。一杯咖啡本来证明不了什么，证明不了一个人爱不爱自己的母亲，更证明不了他有没有杀人的天性。可在你的审判里，它得到了近乎道德证物的地位。有人真的犯了谋杀罪，社会却仍觉得，他没有流下的眼泪，比死者流出的血更能说明他是谁。那杯咖啡，就放在养老院的桌上，冒着热气。",
       "What I come back to is still the cup of coffee at your mother’s funeral. A cup of coffee should prove nothing: not whether a man loves his mother, still less whether he has a nature that kills. Yet in your trial it was given the standing of something close to moral evidence. A man did commit murder, and society still felt that the tears he did not shed said more about who he was than the blood the victim shed. The coffee sits on the table at the home, still steaming."]
    ]
  },
  {
    "date": "2015-04-05",
    "title": "After the Rock Rolls Down",
    "slug": "after-the-rock-rolls-down",
    "category": "Philosophy",
    "book": {
      "cover": "myth_of_sisyphus.jpg",
      "title": "西西弗神话 (The Myth of Sisyphus)",
      "author": "阿尔贝·加缪 Albert Camus",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Philosophy · Chinese translation of Le Mythe de Sisyphe, 1942",
        "Camus asks whether life is worth living without a given meaning, and answers through the figure of Sisyphus."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["西西弗斯最孤独的时刻，不是在推石上山的时候，而是在巨石滚落之后，独自走下山坡的那段路上。他用肩膀抵住巨石，双脚陷进泥土，几乎触及山顶时，石头却再次脱离双手，沿着山坡滚落。他站在原地，望着刚刚走过的道路，然后转身下山。诸神不必监督他，因为他知道自己必须回去。石头不会消失，山也不会变矮。明天、后天，甚至一千年之后，他仍然要重复同样的劳动。",
       "Sisyphus’s loneliest moment is not when he pushes the rock uphill but after it has rolled down, on the walk down the slope alone. He braces the rock with his shoulder, feet sunk in the earth, and just as he nearly touches the summit the stone slips from his hands and rolls down the slope again. He stands in place, looks back at the road he has just walked, then turns and goes down. The gods need not watch over him, because he knows he must go back. The rock will not vanish, nor will the mountain grow lower. Tomorrow, the day after, even a thousand years from now, he will still repeat the same labor."],
      ["1942年，加缪在战争笼罩下的欧洲出版《西西弗斯神话》。他从一个近乎残酷的问题开始：如果生命没有预先赋予的意义，人为什么还要继续活着？他描写人们每天起床、乘车、工作、吃饭、睡觉，直到某一天突然问自己：为什么？荒诞便诞生于这个瞬间。人渴望生活具有目的，世界却始终沉默。加缪既不愿以死亡结束这种冲突，也不愿像克尔凯郭尔那样，通过信仰的跃迁寻找超越理性的答案。他坚持让问题保持悬而未决，让人不依靠最终的救赎而继续生活。",
       "In 1942, in a Europe shrouded in war, Camus published *The Myth of Sisyphus*. He begins from a nearly cruel question: if life has no meaning given in advance, why go on living? He describes people getting up every day, taking the tram, working, eating, sleeping, until one day they suddenly ask themselves: why? The absurd is born in that moment. Man longs for life to have a purpose, and the world stays silent. Camus is unwilling to end this conflict with death, and equally unwilling, like Kierkegaard, to seek an answer beyond reason through a leap of faith. He insists on leaving the question unresolved, and on letting a person go on living without a final salvation."],
      ["西西弗斯正是这种处境最极端的化身。诸神不仅剥夺了他的自由，还剥夺了劳动获得成果的可能。他没有希望，也没有值得等待的终点。但加缪偏偏认为，西西弗斯走下山坡时的清醒，构成了他的反抗。推石时，他的身体完全属于劳动；下山时，他终于能够审视自己的命运。诸神可以命令他继续推动巨石，却不能规定他如何理解自己的苦难。**他不再期待巨石永远停留在山顶，也就不再把自己全部的生命交给那个永远不会到来的时刻。**",
       "Sisyphus is the most extreme embodiment of this condition. The gods have deprived him not only of freedom but of any chance for labor to bear fruit. He has no hope, and no endpoint worth waiting for. Yet Camus holds that Sisyphus’s lucidity as he walks down the slope constitutes his revolt. Pushing the rock, his body belongs wholly to the labor; going down, he can finally examine his fate. The gods can order him to keep pushing the rock but cannot prescribe how he understands his suffering. **He no longer expects the rock to stay on the summit forever, and so no longer gives his whole life to a moment that will never come.**"],
      ["我却始终对这种反抗有所保留。一个被迫终生重复劳动的人，即使能够在精神上拒绝屈服，也并不因此摆脱了劳动。石头仍然沉重，山坡仍然陡峭。尤其当加缪在结尾写下“必须想象西西弗斯是幸福的”，我忍不住想问：为什么必须？西西弗斯难道不能愤怒、厌倦，甚至在某个清晨不愿伸手触碰巨石？倘若连面对惩罚时的心情都必须符合哲学家的期待，那么诸神之外，似乎又多了一位要求他保持幸福的审判者。",
       "I have always held some reservation about this revolt. A person forced to repeat labor all his life, even if he can refuse to submit in spirit, is not thereby freed from labor. The rock is still heavy and the slope still steep. Especially when Camus writes at the end, “One must imagine Sisyphus happy,” I cannot help asking: why must one? Could Sisyphus not be angry, bored, or on some morning unwilling even to reach out and touch the rock? If even his mood in the face of punishment must meet the philosopher’s expectation, then beyond the gods there seems to be one more judge, demanding that he stay happy."],
      ["但加缪并不是要人热爱自己的苦难。他真正拒绝的，是为了忍受现实而替现实编造一个崇高的理由。这与《局外人》中默尔索拒绝神父的临终劝慰遥相呼应：一个面对即将结束的生命，一个面对永远无法结束的劳动，却都不愿以自己并不相信的救赎换取安慰。西西弗斯的巨石不会变成神圣的使命，山顶也不会突然出现奖赏。**没有意义，并不意味着必须放弃生活；继续生活，也不意味着必须替痛苦寻找意义。**",
       "But Camus does not ask anyone to love their suffering. What he truly refuses is to invent a lofty reason for reality in order to endure it. This echoes Meursault’s refusal of the priest’s deathbed consolation in *L’Étranger*: one faces a life about to end, the other a labor that can never end, yet neither will trade a salvation he does not believe in for comfort. Sisyphus’s rock will not turn into a sacred mission, nor will a reward suddenly appear on the summit. **Having no meaning does not mean one must give up living; and continuing to live does not mean one must find a meaning for suffering.**"],
      ["我因此越来越喜欢加缪选择的那个下山的瞬间。上山时，西西弗斯仍然像一个英雄，奋力对抗重量，朝着明确的目标前进；下山时，所有关于胜利、进步与回报的叙事都失效了。他只是沿着熟悉的道路返回，知道山脚有什么在等待自己。我宁愿不去想象他是否幸福，而是想象他偶然停下脚步，望了一会儿远处的天空。山还是那座山，巨石仍然停在山脚，诸神的判决没有改变。",
       "So I increasingly like the moment of descent that Camus chooses. Going up, Sisyphus still looks like a hero, struggling against weight and advancing toward a clear goal; going down, all narratives of victory, progress and reward lose effect. He simply returns along a familiar road, knowing what waits for him at the foot. I would rather not imagine whether he is happy, but imagine that he happens to stop for a moment and look at the distant sky. The mountain is still the same mountain, the rock still rests at its foot, and the gods’ sentence has not changed."],
      ["**只是那一刻，他不需要相信山顶有什么东西正在等待他，也不需要为了继续活着，向这个沉默的世界索取一个答案。**",
       "**Only, in that moment, he does not need to believe something is waiting for him on the summit, nor to demand an answer from this silent world in order to go on living.**"]
    ]
  },
  {
    "date": "2011-04-05",
    "title": "Why Didn’t Odysseus Recognize His Own Home at Once?",
    "slug": "why-odysseus-did-not-recognize-home",
    "category": "Epic poem",
    "book": {
      "cover": "odyssey.jpg",
      "title": "The Odyssey",
      "author": "Homer",
      "language": "English",
      "country": "Greece",
      "original": "Ancient Greek",
      "lines": [
        "Epic poem · English translation by Robert Fagles of the Greek original",
        "Odysseus spends ten years wandering home from Troy and must prove himself to the wife and household he left."
      ]
    },
    "place": "于中国盐城\nYancheng, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["奥德修斯漂泊了二十年，终于回到伊萨卡。",
       "After twenty years of wandering, Odysseus finally returns to Ithaca."],
      ["但雅典娜用迷雾遮蔽了故乡，又改变了他的容貌，使他看起来像一个衣衫褴褛的乞丐。他站在自己熟悉的土地上，却无法立刻辨认眼前的一切。",
       "But Athena veils his homeland in mist and alters his appearance, so that he looks like a ragged beggar. He stands on land he knows, yet cannot at once recognize anything before him."],
      ["我一直觉得，荷马在这里写出了比海上漂泊更加深刻的流亡：**一个人终于抵达了他想要回去的地方，却发现归来并不意味着重新拥有。**",
       "I have always felt that Homer writes here an exile deeper than wandering at sea: **a person finally reaches the place he wanted to return to, and finds that coming back does not mean having it again.**"],
      ["二十年来，奥德修斯拒绝过卡吕普索许诺的不朽，经历过独眼巨人、塞壬与无数次死亡的威胁。他始终相信，伊萨卡是一个确定的终点。只要回到那里，漫长的苦难便会获得意义。",
       "For twenty years Odysseus has refused the immortality Calypso offered, and lived through the Cyclops, the Sirens and countless threats of death. He has always believed Ithaca is a fixed endpoint: once he gets back, the long suffering will gain meaning."],
      ["然而，真正踏上故土，他却必须隐藏姓名，观察自己的家，试探那些曾经最亲近的人。",
       "Yet when he truly sets foot on his native soil, he must hide his name, observe his own home and test those who were once closest to him."],
      ["他不能因为自己是国王，就立刻重新成为国王；不能因为自己是丈夫，就要求妻子立即相信他。",
       "He cannot become king again at once because he is a king, nor demand that his wife believe him immediately because he is her husband."],
      ["最耐人寻味的是，佩涅洛佩最终用一张婚床确认他的身份。",
       "Most intriguing is that Penelope finally uses a marriage bed to confirm his identity."],
      ["那张床由奥德修斯亲手围绕一棵活橄榄树建造，树根仍然扎在土地里。佩涅洛佩故意吩咐仆人把床搬出去，奥德修斯立刻指出，这张床根本无法移动，除非有人砍断树干。",
       "Odysseus built that bed with his own hands around a living olive tree, whose roots are still planted in the earth. Penelope deliberately tells her servant to move the bed out, and Odysseus at once points out that the bed cannot be moved at all unless someone cuts through the trunk."],
      ["二十年的漂泊，最后竟然由一件无法搬动的家具结束。",
       "Twenty years of wandering end, in the end, with a piece of furniture that cannot be moved."],
      ["但我觉得，真正重要的不是婚床象征着爱情的坚贞，而是佩涅洛佩没有因为眼前这个男人声称自己是奥德修斯，就立即接受他。",
       "But I think what truly matters is not that the bed symbolizes the constancy of love but that Penelope does not accept the man before her at once just because he claims to be Odysseus."],
      ["她要求证据。",
       "She demands proof."],
      ["那个在海上凭借智慧战胜无数敌人的英雄，最终必须接受妻子的判断。他不能靠自己的名字、苦难或功绩获得承认，只能通过两个人共同拥有、外人无法轻易知道的记忆，重新建立信任。",
       "The hero who defeated countless enemies by wit at sea must in the end accept his wife’s judgment. He cannot win recognition by his name, his suffering or his deeds, but can only rebuild trust through a memory the two share and outsiders cannot easily know."],
      ["**故乡不是一个人有权返回的地方，而是一个人回来以后，仍然需要被重新认识的地方。**",
       "**Home is not a place one has the right to return to, but a place where, after returning, one still needs to be recognized anew.**"],
      ["婚床的树根没有移动，但围绕它生活的人已经经历了二十年。",
       "The roots of the marriage bed have not moved, but the people who live around it have gone through twenty years."],
      ["奥德修斯想回到过去，佩涅洛佩却必须确认眼前这个人是否仍然值得相信。",
       "Odysseus wants to go back to the past, while Penelope must confirm whether the man before her is still worth trusting."],
      ["荷马没有让他们简单地回到二十年前，而是让两个人在一张从未移动的床前，重新选择彼此。",
       "Homer does not let them simply return to twenty years ago, but lets the two choose each other anew before a bed that has never moved."],
      ["也许《奥德赛》最深刻的地方就在这里：人可以穿越整个世界回到原点，却无法真正回到从前。",
       "Perhaps this is the deepest thing about the *Odyssey*: a person can cross the whole world to return to the starting point, yet cannot truly return to what was before."],
      ["**归乡不是终于找到了一个从未改变的地方，而是在一切都已经改变之后，仍然有人愿意为你重新打开家门。**",
       "**Homecoming is not finding at last a place that has never changed, but, after everything has changed, still having someone willing to open the door to you anew.**"]
    ]
  },
  {
    "date": "2011-10-11",
    "title": "The Empty Seat in the Theater",
    "slug": "the-empty-seat-in-the-theater",
    "category": "Novel",
    "book": {
      "cover": "anna_karenina.jpg",
      "title": "安娜·卡列尼娜 (Anna Karenina)",
      "author": "托尔斯泰 Leo Tolstoy",
      "language": "Chinese",
      "country": "Russia",
      "original": "Russian",
      "lines": [
        "Novel · Chinese translation of Anna Karenina, first published 1878",
        "A married woman in Petersburg society falls in love with Count Vronsky and loses her place in the world she knew."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["浅色丝绸礼服，领口缀着精致的花边，乌黑的头发衬着裸露的肩膀。安娜走进彼得堡剧院的时候，台上演的是一出歌剧，可那天晚上的戏并不在台上。托尔斯泰特意写了她的美：灯火通明的剧院里，她格外醒目。",
       "A pale silk gown, fine lace at the neckline, dark hair against bare shoulders. When Anna walks into the Petersburg theater, an opera is on stage, but the drama that night is not up there. Tolstoy takes care to write her beauty: in the bright, crowded house she stands out."],
      ["她坐在包厢里，身旁是雅什温，一个仍愿意公开与她来往的军官。她没有躲，也没有摆出羞愧的样子，还像从前那样带着熟悉的从容，看着周围的人。",
       "She sits in her box beside Yashvin, an officer still willing to be seen with her. She does not hide, and she makes no show of shame. With the same ease as before, she looks around at the people near her."],
      ["渥伦斯基知道事情没有这么简单。在安娜决定去剧院之前，他就明白这次露面是一场冒险。她已经不是彼得堡上流社会承认的卡列宁夫人，而是离开丈夫、公开与情人同住的女人。他自己可以进俱乐部，赴宴会，继续和熟人往来，安娜面对的却是另一套规则。他劝过她，她还是去了。她像是执意要证明，自己没有因为爱情就失去坐在剧院里的资格。",
       "Vronsky knows it is not that simple. Before Anna decided to go, he had understood that showing herself would be a gamble. She is no longer Madame Karenina, acknowledged by Petersburg society. She is a woman who left her husband and lives openly with her lover. He can go on entering clubs, attending dinners and seeing his acquaintances, while Anna faces a different set of rules. He tried to talk her out of it, and she went anyway. She seems set on proving that love has not cost her the right to sit in a theater."],
      ["起初几乎一切如常。观众举起望远镜，互相辨认，寒暄。安娜坐在包厢里，仿佛仍属于这个熟悉的世界。接着，托尔斯泰让剧院里的目光慢慢从舞台移开，转向她的包厢。人们留意谁和她说话，谁向她致意，谁又故意避开。她的出现成了一件需要议论的事。",
       "At first it all looks almost normal. People raise their opera glasses, pick out one another, exchange greetings. Anna sits in her box as if she still belongs to this familiar world. Then Tolstoy lets the gaze of the house drift from the stage toward her. People note who speaks to her, who bows, who pointedly looks away. Her presence has become something to be discussed."],
      ["羞辱来自邻近包厢的卡尔塔索夫夫妇。卡尔塔索夫夫人拒绝与安娜交往，丈夫一和安娜接触，她就当众发怒。这份愤慨很快引来周围的注意。没有人正式驱逐安娜，没有人宣布她不得入场，她却已经站在众人的目光里。那些本来用来看歌剧的望远镜，成了审判她的工具。",
       "The humiliation comes from the Kartasovs in the next box. Madame Kartasova refuses to have anything to do with Anna, and when her husband speaks to her she flares up in public. The anger draws attention at once. No one expels Anna, no one announces that she may not enter, yet she is held in plain view. The glasses meant for watching the opera have become instruments of judgment."],
      ["我觉得托尔斯泰挑剧院做这场羞辱的地方，用得很准。",
       "I think Tolstoy chooses the theater for this humiliation with great precision."],
      ["在彼得堡上流社会，婚外情并不稀罕。安娜的哥哥奥勃朗斯基背叛妻子，朋友们照样欢迎他。贝特西公爵夫人的沙龙里，也满是心照不宣的暧昧。人们不要求每个人忠贞，只要求把欲望藏在体面的婚姻背后。安娜最不可饶恕的地方，在于她不肯继续做卡列宁的妻子，爱上渥伦斯基倒在其次。",
       "In Petersburg society, affairs are nothing rare. Anna’s brother Oblonsky betrays his wife and his friends welcome him all the same. Princess Betsy’s salon is full of understood intimacies. No one demands that everyone be faithful. They ask only that desire be kept behind a respectable marriage. What Anna cannot be forgiven is that she will not go on playing Karenin’s wife. Falling in love with Vronsky comes second."],
      ["于是剧院里出现了一种奇怪的颠倒。台上的演员可以扮演背叛丈夫的女人，观众可以为她的爱与痛苦鼓掌。一个真实的女人坐进包厢，不肯再演社会分配给她的角色，观众就受不了了。",
       "So the theater shows a strange reversal. An actress on stage can play a woman who betrays her husband, and the audience can applaud her love and her pain. When a real woman sits down in a box and refuses to keep playing the part society assigned her, the audience cannot bear it."],
      ["安娜没有哭着离开，也没有当众向谁求饶。她仍然试着保持镇定。托尔斯泰看得很细，写出了这镇定后面的痛：一个人明明已被羞辱，还得维持优雅，好像只要脸上的表情不变，尊严就还是完整的。",
       "Anna does not leave in tears, and she begs no one in front of the house. She keeps trying to stay composed. Tolstoy looks closely and writes the pain behind that composure: a person already humiliated who must still keep her grace, as though her dignity stays whole as long as her expression does not change."],
      ["渥伦斯基随后赶到，看见的就是这个难堪的局面。他为安娜受的侮辱愤怒，也对她明知后果还执意来感到不满。在他看来，她本可以避免这一切。可他不明白，安娜为什么非来不可。",
       "Vronsky arrives afterward and finds this painful scene. He is angry at the insult she has suffered, and annoyed that she came knowing what would follow. In his view she could have avoided all of it. He cannot grasp why Anna had to come."],
      ["因为他从来没有失去过坐在这里的权利。他可以为爱情牺牲一部分仕途，却不必牺牲整个社会身份。他仍是军官、贵族、朋友，一个可以在不同场合过不同生活的男人。安娜剩下的身份却越来越少，只有一个：渥伦斯基的情人。她来剧院，不只是为了看歌剧，也为了证明自己仍能作为一个独立的人，出现在众人面前。",
       "Because he has never lost the right to sit there. He can give up part of his career for love without giving up his whole social standing. He is still an officer, a nobleman, a friend, a man who can lead a different life in each setting. Anna is left with fewer and fewer roles, and finally with one: Vronsky’s mistress. She comes to the theater not only for the opera, but to show that she can still appear before people as a person in her own right."],
      ["所以我一直不能把她的举动简单看成任性。她当然知道自己可能受辱，还是穿上礼服，梳好头发，坐进包厢。那些看起来虚荣的装饰，在这个晚上带着一点悲壮。她没有要求社会称赞她的爱情，只是想像过去一样，出现在公共场合而不必请求宽恕。",
       "That is why I cannot treat what she does as mere willfulness. She knows she may be humiliated, and still she puts on the gown, does her hair, and sits down in the box. The adornments that look like vanity take on something close to tragic grandeur that night. She does not ask society to praise her love. She wants only to appear in public, as she used to, without having to beg forgiveness."],
      ["托尔斯泰没有给她这个机会。",
       "Tolstoy does not give her that chance."],
      ["歌剧还在继续。演员在台上唱，乐队照着乐谱奏，观众在幕间谈论刚才发生的事。安娜的羞辱不过成了一场社交风波，世界照常运转，没有受到一点妨碍。",
       "The opera goes on. The singers sing, the orchestra plays from the score, and between the acts the audience talks over what has just happened. Anna’s humiliation becomes one more social stir, and the world turns on without the slightest hindrance."],
      ["后来，安娜越来越怕失去渥伦斯基，越来越受不了他的冷淡。人们容易把这种变化归咎于她的嫉妒和偏执。我却总想起剧院里的那个晚上。一个女人连独自坐在人群里的权利都没有了，她把全部希望压在唯一还愿意陪着她的人身上，又怎么会不是这样？",
       "Later Anna fears more and more that she will lose Vronsky, and can bear his coldness less and less. It is easy to blame the change on her jealousy and her obsession. But I keep coming back to that night at the theater. When a woman has lost even the right to sit alone among a crowd, how could she not rest all her hope on the one person still willing to stay by her?"],
      ["小说最后让安娜死在铁轨上。但我觉得，她的悲剧在剧院里就已经显出来了。那天晚上，她没有要求谁给她让座，只是坐在一张本来属于任何一位购票观众的椅子上，而整个彼得堡都认为，她不该坐在那里。",
       "The novel finally ends Anna’s story on the railway tracks. But I think her tragedy shows itself already in the theater. That night she asks no one to give up a seat. She sits in a chair that belongs to any ticket-holder, and all of Petersburg has decided she should not be sitting there."]
    ]
  },
  {
    "date": "2012-06-15",
    "title": "When One No Longer Needs to Prove Oneself",
    "slug": "when-one-no-longer-needs-to-prove-oneself",
    "category": "Memoir",
    "book": {
      "cover": "reveries_solitary_walker.jpg",
      "title": "一个孤独的散步者的梦 (Reveries of the Solitary Walker)",
      "author": "让-雅克·卢梭 Jean-Jacques Rousseau",
      "language": "Chinese",
      "country": "France",
      "original": "French",
      "lines": [
        "Memoir · Chinese translation by Li Pingou, The Commercial Press",
        "Rousseau’s last, unfinished book, ten walks through memory, nature and self-defense, from an afternoon adrift on Lake Bienne to a tenth walk cut off by his death."
      ]
    },
    "place": "于中国北京\nBeijing, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["一个下午，卢梭躺在圣皮埃尔岛的小船里，不急着去任何地方。湖水轻轻推着船身，水波拍着船舷，时间慢慢地流。没有要做完的工作，没有必须回的信，没有人等着他解释。这个一生都在同公众争论、为自己辩护的人，把这样一个几乎什么也没发生的下午，记成最接近幸福的时刻。",
       "One afternoon Rousseau lies in a boat off the Island of Saint-Pierre, in no hurry to reach anywhere. The lake nudges the hull, the water slaps the side, and time passes slowly. There is no work to finish, no letter that must be answered, and nobody waiting for an explanation. This man who spent his life arguing with the public and defending himself remembers an afternoon in which almost nothing happened as the closest he came to happiness."],
      ["读《第五次散步》，我有一种奇特的羡慕。我习惯把时间排得很满，也相信生活能靠持续的努力变好。事业要推进，财务要规划，家庭的未来要准备，连读书也常常带着记录和整理。我喜欢这种主动塑造生活的感觉，也从中得到许多自由。可是卢梭躺在湖上的那个下午，让我看到，我追求的自由总在未来：等某个目标实现，某些条件具备，某项责任完成，我才允许自己自由地用时间。",
       "Reading the Fifth Walk, I feel a strange envy. I am used to filling my time, and I believe a life improves through steady effort. Work has to move forward, money has to be planned, the family’s future has to be prepared, and even my reading usually comes with notes and sorting. I like this sense of shaping my life, and I have gained a lot of freedom from it. But in that afternoon on the lake I see that the freedom I chase always sits in the future. Once some goal is met, some conditions are in place, some duty is done, then I will let myself use my time freely."],
      ["规划本身没有错。我一直相信，经济上的独立能给人更多选择。积累资产、减少对工资的依赖，在我看来为了财富之外的一件事：有一天能自己决定怎么生活。可卢梭带来一个有点讽刺的可能：一个人花几十年精心安排生活，最后只是为了换来一个不必再安排的下午。我们争取时间的自主权，却可能在途中慢慢丢掉了无所事事的能力。",
       "Planning itself is not wrong. I have always believed that financial independence gives a person more choices. Building assets and relying less on a salary, to my mind, is for something besides wealth: so that one day I can decide for myself how to live. But Rousseau raises a slightly ironic possibility: a person may spend decades arranging his life carefully, only to earn an afternoon in which nothing needs arranging. We fight for control of our time, and on the way we may lose the ability to do nothing."],
      ["卢梭在这本书里却谈不上超脱。最让人不安的是，他一再说自己已不再需要公众的认可，又几乎停不下来地回想公众对他的误解和伤害。他认为朋友背叛了他，知识界排斥他，舆论迫害他，一遍遍为过去的行为辩护。他说已经放弃说服世人，文字里却满是解释和申诉。一个人越坚持自己不在乎别人怎么评价，读者越难相信他真不在乎。",
       "Yet in this book Rousseau is hardly detached. What unsettles me most is that he keeps saying he no longer needs the public’s approval, and can hardly stop recalling how the public misjudged and hurt him. He believes friends betrayed him, the intellectuals shut him out, and public opinion persecuted him, and he defends his past conduct again and again. He says he has given up persuading the world, while his pages are full of explanation and complaint. The more firmly a man insists he does not care what others think, the harder it is for a reader to believe him."],
      ["这一点我并不陌生。我看重自己的工作，也希望努力得到合理的理解和认可。一项工作牵涉许多人，需要复杂的协调和长期的投入，我很难完全不在意别人是否懂得它的价值。有时事情已经有了进展，我还是会反复想怎样把它解释得更准确，怎样让自己的判断被认可。这有实际的意义：工作要沟通，合作要信任，成果也要被人看见。但读卢梭，我开始怀疑，解释和证明是不是会慢慢变成习惯，没有人要求，我们心里也已经备好下一场辩论。",
       "I know this feeling. I take my work seriously and want my effort to be understood and recognized fairly. When a project involves many people, intricate coordination and long commitment, I can hardly be indifferent to whether anyone sees its value. Sometimes the thing has already moved forward and I still turn over how to explain it more exactly, how to get my judgment accepted. There is practical sense in that: work needs communication, cooperation needs trust, and results need to be seen. But reading Rousseau, I start to suspect that explaining and proving can turn into a habit, so that even when nobody asks, we have the next debate ready in our heads."],
      ["卢梭的痛苦，在于他似乎始终接受不了自己在别人眼里可能是另一个人。他对自己的动机有完整的解释，却管不了别人怎样理解他的行为。《第四次散步》里，他反复谈诚实、谎言和自己的过错，想在道德上给自己划出精确的区分。这些文字显出非凡的自省，也露出他的局限：他能细致地解释自己为什么那样做，却不总愿意让别人的感受占同样充分的位置。一个人对自己的理解越复杂，有时就越容易相信，别人误解他只是因为理解得不够深。",
       "Rousseau’s pain is that he seems never able to accept that in other people’s eyes he might be someone else. He has a complete account of his own motives and no control over how others read his actions. In the Fourth Walk he goes over honesty, lies and his own faults again and again, trying to draw precise moral lines in his favor. These pages show remarkable self-examination, and they also show his limit: he can explain in fine detail why he acted as he did, but is not always willing to give other people’s feelings the same full place. The more intricate a person’s understanding of himself, the easier it can be to believe that others misjudge him only because they have not understood deeply enough."],
      ["我不愿全盘认同这种自我辩护。我们有权解释自己的动机，但不能因为知道动机，就认为自己对行为的后果有最终解释权。人与人之间，善意不会自动消除伤害，判断正确也不保证表达得当。卢梭让我看到，强烈的自我意识可以带来诚实，也可能让人越来越难承认：别人不必照他理解自己的方式来理解他。",
       "I do not want to accept this self-defense whole. We have the right to explain our motives, but knowing them does not give us the last word on what our actions did. Between people, good intentions do not cancel harm, and a correct judgment does not guarantee a fitting way of putting it. Rousseau shows me that a strong self-awareness can bring honesty, and can also make it harder and harder to admit that others need not understand him the way he understands himself."],
      ["所以我更喜欢他写植物的段落。晚年的卢梭迷上植物学，采集，辨认，整理标本。他不急着研究植物的经济用途，也不用这些观察建立什么宏大的理论。路边一株草，一朵不起眼的花，就能让他暂时离开那些关于名誉、正义和迫害的争论。和植物在一起，他不用证明自己是怎样的人，植物也不会要求他解释过去。",
       "So I like his passages on plants better. In his last years Rousseau is taken with botany: he gathers, identifies and arranges specimens. He is in no hurry to find uses for plants in the economy, and he builds no grand theory out of what he sees. A weed by the road, an unremarkable flower, can take him for a while out of the quarrels over reputation, justice and persecution. With plants he need not prove what kind of person he is, and the plants do not ask him to explain the past."],
      ["这又牵出我对知识的另一种矛盾。我喜欢学习，也习惯把知识连到实际的用处：帮助工作，改善判断，理解社会，给未来多一些选择。可读文学，研究语言和思想的时候，我常常得到另一种快乐。一个词的来历，小说里出人意料的一段描写，一位早已去世的思想家的奇怪念头，本身就够让一个下午有意思。它们不必提高我的职业能力，也不为任何长期计划服务。卢梭的植物学让我更珍惜这种不求产出的好奇。",
       "This brings up another tension of mine about knowledge. I like learning, and I tend to tie it to some practical use: it helps at work, sharpens my judgment, explains society, gives the future more options. But when I read literature, or study language and ideas, I often find a different pleasure. The origin of a word, an unexpected passage in a novel, a strange notion of a long-dead thinker is enough to make an afternoon interesting. None of it has to raise my professional skills or serve any long-term plan. Rousseau’s botany makes me value this curiosity that asks for no output."],
      ["孤独也解决不了所有问题。卢梭离社会越远，越容易把自己受的伤害讲成一个完整封闭的故事。他能在独处里得到宁静，也失去了许多被别人纠正的机会。我尤其警惕把自我保护当成精神独立。独立也许是既能独处，也能承受别人不同的意见，不必时时寻求认可，也不把每一条批评都当成对自己的否定。",
       "Solitude does not solve everything either. The farther Rousseau goes from society, the more easily he tells the harm done to him as a complete, closed story. He can find calm in being alone, and he loses many chances to be corrected by others. I am especially wary of mistaking self-protection for independence. Independence may be the ability both to stay alone and to bear other people’s disagreement, without seeking approval all the time and without taking every criticism as a denial of oneself."],
      ["从文学上看，这部书最动人的地方，是它始终没有完成一次彻底的自我和解。十篇“散步”在回忆、自然观察和自我辩护之间来回游移。卢梭这一页还沉在湖水的宁静里，下一页又陷回过去的争执。结构并不整齐，却比一部井然有序的精神自传可信。人的内心本来就不按哲学论证的顺序走。我们可能在某个下午真诚地平静，第二天又被早已决定放下的事缠住。",
       "As literature, what moves me most in the book is that it never completes a full reconciliation with the self. The ten “walks” drift among memory, observation of nature and self-defense. On one page Rousseau is lost in the calm of the lake, and on the next he is back in an old quarrel. The structure is untidy, and more believable than a well-ordered spiritual autobiography. The inside of a person never moves in the order of a philosophical argument. We may feel sincerely at peace one afternoon and be tangled up the next day in something we had already decided to drop."],
      ["第十次散步在卢梭去世时还没写完。他又回到年轻时与华伦夫人相识的往事，文字却在刚要展开的地方断了。一个一生都在解释自己的人，最后没有留下最后的解释。这个偶然形成的结尾，比任何关于幸福与孤独的总结更有力量。",
       "The Tenth Walk is still unfinished when Rousseau dies. He turns back to the time he met Madame de Warens as a young man, and the text breaks off just as it begins to unfold. A man who spent his life explaining himself leaves no last explanation. This ending, which came about by chance, carries more force than any summing-up of happiness and solitude."],
      ["我不想像卢梭那样退出社会，也不打算放弃对事业、家庭和未来的安排。我仍然相信，积极参与世界比单纯远离它更接近我想要的生活。但我开始觉得，值得追求的自由，也许不只是有足够的财富、能力和地位，不必接受不愿接受的生活。它还包括一种更细的能力：事情没做完，有人没理解自己，未来还不确定，也能允许某个下午只属于自己。",
       "I do not want to withdraw from society as Rousseau did, and I do not plan to give up arranging my work, family and future. I still believe that taking an active part in the world is closer to the life I want than simply staying away from it. But I begin to think the freedom worth seeking is perhaps more than having enough wealth, ability and standing to avoid a life I would refuse. It also includes a finer ability: to let one afternoon belong only to me while things are still unfinished, some people still do not understand me, and the future is still undecided."],
      ["卢梭在湖面上没有得到任何可以带走的成就。他随着水波漂着，暂时忘了那个必须不断解释自己的卢梭。我想学的，就是不等所有目标实现、所有争论结束、所有人都认可，就开始享受已经拥有的生活。",
       "On the lake Rousseau gains nothing he can carry away. He drifts with the water and for a while forgets the Rousseau who has to keep explaining himself. What I want to learn is to start enjoying the life I already have without waiting until every goal is met, every argument is over and everyone approves."]
    ]
  },
  {
    "date": "2018-11-01",
    "title": "I Am a Beneficiary of Globalization",
    "slug": "i-am-a-beneficiary-of-globalization",
    "category": "Economics",
    "book": {
      "cover": "globalization_discontents.jpg",
      "title": "Globalization and Its Discontents Revisited",
      "author": "Joseph E. Stiglitz",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Economics · English original, W. W. Norton, 2017 (first published 2002)",
        "A Nobel laureate and former World Bank chief economist on how the IMF and the global financial system failed the countries they were meant to help."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["我在西雅图的华盛顿大学读书，毕业后留在硅谷工作。同时，我用房地产和股票把自己的经济生活，连到不同地区、不同国家的市场上。教育、职业、资本，三条本来可能被地域限住的路，因为世界更开放，接在了一起。要我反对全球化，我大概找不出一个有说服力的理由。",
       "I studied at the University of Washington in Seattle and stayed on to work in Silicon Valley. Meanwhile, through real estate and stocks, I tied my financial life to markets in different regions and countries. Education, career and capital, three roads that geography might have confined, were joined because the world had opened up. If I were asked to argue against globalization, I could hardly find a convincing reason."],
      ["可是读约瑟夫·斯蒂格利茨的《全球化及其不满》，我一直有点不舒服。我熟悉的那种全球化，正是这本书提醒我们不能当成普遍经验的那一种。",
       "But reading Joseph Stiglitz’s *Globalization and Its Discontents*, I have felt uneasy the whole time. The globalization I know is exactly the kind this book warns us not to take for everyone’s experience."],
      ["先说留学。我得到的当然有知识，但更重要的，是进入了一个原本不在我生活范围里的社会。另一套教育制度，另一个职业市场，另一些人际关系，一个人的未来不再全由出生地决定。后来能留在美国工作，这段跨国的经历就从一次求学变成了长久的生活选择。",
       "Start with studying abroad. I gained knowledge, of course, but more important, I entered a society that had been outside my life. A different school system, a different job market, different relationships, and a future no longer settled entirely by where I was born. Later I could stay and work in America, and an episode of study abroad became a long-term way of living."],
      ["我很珍惜这份选择权。但出国读书要有钱，要有语言能力，要有制度的许可。毕业后能不能留下，还要看工作机会和移民制度。我们爱把留学和职业发展写成个人努力的故事，这有它的真实。可是同样努力的人，也许因为国籍、家境或制度的限制，连走上这条路的机会都没有。",
       "I value that freedom to choose. But studying abroad takes money, language ability and a system that lets you in. Staying afterward depends on jobs and on immigration rules. We like to tell the story of study and career as one of personal effort, and it is true as far as it goes. But people who worked just as hard may never get onto this road at all, because of nationality, family means or institutional limits."],
      ["在苹果做语音相关的工作，又给了我一层理解。语音技术看上去能跨地域通用，可一旦面对全世界的使用者，语言、口音、文化和使用习惯的差异就绕不过去。一个在英语环境里表现很好的模型，换到另一个市场，不会自动听懂当地人怎么说话。要让技术服务不同地区的用户，需要数据，需要参与者，需要工程能力，还需要跨团队、跨地区的长期合作。",
       "My speech-related work at Apple added another layer. Speech technology looks as if it works anywhere, but once it faces users around the world, the differences in language, accent, culture and habit cannot be avoided. A model that does well in English will not understand how local people talk just because it is deployed in another market. Serving users in different regions takes data, participants, engineering capacity, and long cooperation across teams and regions."],
      ["我的工作是让不同地区的真实使用者参与语音数据的贡献和模型的评估，不只靠少数技术团队事先设计好的测试场景。做这件事，我体会到，所谓全球化的技术产品，并不是把同一套模型复制到更多国家就行。一个模型可以部署到全世界，对某些语言、口音或说法仍然听不太懂。",
       "What I do is bring real users from different regions into contributing speech data and evaluating models, instead of relying only on test scenarios a few technical teams designed beforehand. Doing this, I have come to feel that a globalized tech product is more than copying one model into more countries. A model can be deployed worldwide and still understand some languages, accents or ways of speaking poorly."],
      ["这和斯蒂格利茨批评国际金融机构的方式有点呼应。国际货币基金组织曾想用相对统一的经济政策，去处理制度条件截然不同的国家。斯蒂格利茨认为，这忽略了各地的金融结构、社会保障和政治制度。语音模型和宏观经济政策当然是两回事，但它们都提醒我：在一种环境里有效的方法，不会因为能大规模推广，就自动适用于所有地方。",
       "It echoes a little the way Stiglitz criticizes the international financial institutions. The IMF tried to apply fairly uniform economic policy to countries whose institutions were quite different. Stiglitz argues that this ignored local financial structures, social protection and political systems. A speech model and macroeconomic policy are different things, of course, but both remind me that a method that works in one setting does not apply everywhere automatically just because it can be rolled out at scale."],
      ["在技术工作里我也越来越清楚，决定什么算成功，本身就是一种权力。我们可以用平均性能衡量模型，却可能盖住某些口音或语言群体较差的体验。可以用数据总量衡量进展，却仍要追问数据来自哪些人。斯蒂格利茨谈经济增长率、资本流动和财政赤字，面对的也是这类问题。指标可以准确，却不一定完整。一国的金融市场恢复了稳定，那些在危机里丢了工作和住房的人，未必也回到了原来的生活。",
       "In technical work it has also become clearer to me that deciding what counts as success is itself a form of power. We can measure a model by average performance and so hide the worse experience of some accent or language groups. We can measure progress by the total amount of data and still have to ask whose data it is. When Stiglitz discusses growth rates, capital flows and fiscal deficits, he faces the same kind of problem. A figure can be accurate and still incomplete. A country’s financial market may settle down again, and the people who lost jobs and homes in the crisis have not necessarily got their old lives back."],
      ["教育和技术让我尝到全球化的机会，投资则让我更直接地看到它怎样分配财富。",
       "Education and technology gave me a taste of what globalization offers. Investing showed me more directly how it distributes wealth."],
      ["我持有美国、法国和日本的房产，也通过股票参与美国和国际市场。房租、企业利润、股价、各国的经济增长，都会以某种方式影响我的资产。我没有亲自经营那家公司，也能靠持股分到它的成果。我不在出租房产的地方工作，房子也照样产生收入。资本可以跨时间、跨地域积累，人不用一直待在资本创造收益的地方。",
       "I own property in the United States, France and Japan, and I take part in American and international markets through stocks. Rents, company profits, share prices and the growth of various economies all affect my assets in some way. I do not run the company myself, yet I share in its results by holding its stock. I do not work where my rental property stands, and it still produces income. Capital can build up across time and place, and its owner does not have to be where it earns."],
      ["这正是全球资本市场吸引我的地方。财富不必完全靠一个人的劳动时间，投资者也能分散地域和行业的风险。我不认为这套机制天然有什么不正当。资本承担风险，支持企业融资和经济活动，长期投资也是个人取得财务安全的重要路径。",
       "This is what draws me to global capital markets. Wealth does not have to depend wholly on one person’s working hours, and an investor can spread risk across regions and industries. I do not think the mechanism is inherently improper. Capital bears risk, supports corporate financing and economic activity, and long-term investing is an important path to financial security for an individual."],
      ["但读斯蒂格利茨，我更留意到，同样的国际资本流动，对不同的人意思完全不同。",
       "But reading Stiglitz, I notice more that the same international capital flow means entirely different things to different people."],
      ["我投资海外股票，可以随市场调整配置。哪个经济体前景变坏，我可以减少相关的资产。生活在当地的人未必能这样退出。他们的工作、住房、家人和社会关系都在那里。对投资者，资本撤离也许只是一次风险管理。对靠当地经济过日子的人，大规模撤资可能意味着失业、货币贬值和企业倒闭。",
       "When I invest in foreign stocks, I can adjust my holdings as markets move. If one economy’s outlook worsens, I can cut my exposure to it. People who live there cannot necessarily leave the same way. Their jobs, homes, families and social ties are all in that place. For an investor, capital flight may be just a piece of risk management. For people who live off the local economy, a large-scale withdrawal can mean unemployment, a falling currency and failing businesses."],
      ["1997年的亚洲金融危机集中显出了这种不对称。国际货币基金组织想靠提高利率、财政紧缩恢复投资者的信心，斯蒂格利茨认为这些政策在某些情况下反而加深了衰退。他对危机的解释，我并不全接受。一些亚洲经济体本来就有短期外债多、企业杠杆高、金融监管不足的问题，不能全怪国际机构。但他提出的根本质疑我赞同：为什么恢复资本市场的信心可以是政策的第一目标，而普通人付出的社会代价，却容易被当成必要的调整成本？",
       "The Asian financial crisis of 1997 shows this asymmetry in concentrated form. The IMF tried to restore investor confidence through higher interest rates and fiscal austerity, and Stiglitz argues that in some cases these policies deepened the recession. I do not accept all his explanations of the crisis. Some Asian economies already had heavy short-term foreign debt, highly leveraged firms and weak financial supervision, and the international institutions cannot be blamed for everything. But I agree with his basic challenge: why can restoring capital-market confidence be the first aim of policy, while the social cost paid by ordinary people is so easily counted as a necessary cost of adjustment?"],
      ["我不想把这个问题简化成富人对穷人、发达国家对发展中国家的道德对立。全球资本流动确实支持过许多国家的工业化和经济增长。没有国际贸易、技术交流和跨境投资，不少发展的机会也不会有。我自己的职业和投资，就证明开放能创造实在的价值。",
       "I do not want to flatten the issue into a moral contest between rich and poor, or developed and developing countries. Global capital flows have supported the industrialization and growth of many countries. Without international trade, technology exchange and cross-border investment, many chances to develop would not exist. My own career and investments show that openness can create real value."],
      ["可是全球化带来的机会不是平均分配的。我能留在美国，因为有教育、专业能力和相应的制度条件。我能做跨国投资，因为已经攒下了一些资本。我能从技术全球化里受益，因为恰好有这个产业需要的技能。这些条件里有个人的努力，也有许多并不由个人决定的机会。",
       "Still, the opportunities of globalization are not evenly shared. I could stay in America because I had an education, professional skills and the right institutional conditions. I could invest across borders because I had already saved some capital. I could benefit from the globalization of technology because I happened to have the skills the industry needs. These conditions include personal effort, and also many chances that no individual decides."],
      ["所以我越来越不喜欢一种简单的成功叙事：我能靠教育、工作和投资改善生活，别人应该也能。这个推论忘了一件事。全球化给不同人的起点并不相同，它给的是一个让某些优势不断变成新优势的世界。",
       "So I like less and less a simple story of success: since I improved my life through education, work and investment, others should be able to as well. That inference forgets something. Globalization does not give different people the same starting point. It gives a world in which some advantages keep turning into new advantages."],
      ["读了斯蒂格利茨，我也不会就此放掉投资，或者否认跨国教育和技术产业的价值。我仍然想靠长期积累取得财务自由，也仍然相信全球合作能创造比封闭市场更多的机会。只是我不再愿意光凭自己有没有从中得益，来判断一种经济制度公不公平。",
       "Having read Stiglitz, I will not give up investing or deny the value of study abroad and the tech industry. I still want financial freedom through long accumulation, and I still believe global cooperation creates more opportunity than closed markets. I am just no longer willing to judge whether an economic system is fair only by whether I have gained from it."],
      ["这本书最让我不安的，是我能那么自然地懂得国际资本的立场。市场波动时，我看流动性、利率和资产价格。企业扩大国际业务时，我看增长、效率和竞争优势。这些都是合理的问题。斯蒂格利茨提醒我，除了这些，还有人不能轻易换工作的地方，不能分散家里的收入来源，也不能靠持有全球资产去对冲当地经济的风险。",
       "What unsettles me most in this book is how naturally I understand the position of international capital. When markets swing, I look at liquidity, interest rates and asset prices. When a company expands abroad, I look at growth, efficiency and competitive advantage. These are reasonable questions. Stiglitz reminds me that beyond them are people who cannot easily change where they work, cannot spread their family’s income across sources, and cannot hedge the risks of the local economy by holding global assets."],
      ["《全球化及其不满》不算文笔优雅的书。里面满是政策争论、对机构的批评和经济案例，作者的愤怒有时压过了论证的耐心。但我渐渐欣赏这种带着立场的写法。斯蒂格利茨没有把自己装成局外的观察者，他写作的身份，是曾在制度内部、又对制度深感失望的人。书里最有力的部分，常常在于他把那些被叫做“必要调整”的决定，一次次还原成具体的人经历的失业、贫困和尊严的丧失。",
       "*Globalization and Its Discontents* is not an elegantly written book. It is full of policy disputes, criticism of institutions and economic cases, and the author’s anger sometimes outruns the patience of his argument. But I have come to appreciate this writing with a stand. Stiglitz does not pose as an outside observer. He writes as someone who was inside the system and is deeply disappointed in it. The strongest parts of the book are often the way he keeps turning decisions called “necessary adjustment” back into the unemployment, poverty and loss of dignity that particular people went through."],
      ["这也改变了我看全球化的方式。它不再只是一个关于市场开放和经济增长的大叙事。它是许多不同的命运共同写成、却没有同一个叙述者的历史。我在里面读到教育、职业和财富带来的可能。另一些人读到的，是产业衰落、生活失序，和没法选择的离别。",
       "It has also changed how I see globalization. It is no longer only a grand story about open markets and economic growth. It is a history written by many different fates with no single narrator. In it I read of the possibilities that education, career and wealth bring. Others read of failing industries, lives thrown out of order, and partings they could not choose."],
      ["我依然喜欢全球化。我熟悉的那个开放而慷慨的世界，在这部历史里只是一章，刚好由我来讲。",
       "I still like globalization. The open and generous world I know is one chapter of this history, and it happens to be the one I tell."]
    ]
  },
  {
    "date": "2024-08-19",
    "title": "Outside the Ripples",
    "slug": "outside-the-ripples",
    "category": "Sociology",
    "book": {
      "cover": "xiangtu_zhongguo.jpg",
      "title": "乡土中国",
      "author": "费孝通 Fei Xiaotong",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Sociology · Chinese original, first published 1947 (English: From the Soil)",
        "Fei Xiaotong’s essays on how rural Chinese society is organized: the web of kinship and acquaintance, and the “differential mode of association” that spreads outward like ripples."
      ]
    },
    "languages": ["Chinese", "English"],
    "prose": [
      ["读到“差序格局”这一章，先想起一件事。一个人到陌生的城市，替父亲去医院挂专家号。清晨就去排队，排到窗口，被告知当天的名额没有了。",
       "Reading the chapter on the “differential mode of association,” I first think of a scene. A man in an unfamiliar city goes to the hospital to get his father a specialist appointment. He lines up at dawn, reaches the window, and is told the day’s places are gone."],
      ["旁边有人打了一通电话，不久就被领进诊室。他不知道那人有没有预约，是不是病情更急，也不知道那通电话起了什么作用。他只知道，自己没有一个能拨的号码。",
       "Beside him someone makes a phone call and is soon led into a consulting room. He does not know whether that person had booked, or was more urgently ill, or what the call actually did. He knows only that he has no number to dial."],
      ["往下想：要是第二天有人说，一位远房亲戚恰好认识这家医院的医生，他大概毫不犹豫就打过去了。得了帮助，还会真心感谢那位亲戚，觉得人情可贵就在这里。他怀疑的关系，正是他需要时最想有的关系。我把这句话在页边写了两遍。",
       "Thinking further: if someone told him the next day that a distant relative happened to know a doctor at this hospital, he would call without hesitation. Once helped, he would sincerely thank the relative and feel that this is what is precious about human ties. The relationship he doubted is the one he most wants to have when he needs it. I write this line twice in the margin."],
      ["这大概是“差序格局”最该细看的矛盾。它不简单地把人分成有特权的和受害的。我们希望别人不靠关系得到优待，又很难拒绝关系可能给自己的方便。我们赞成公共事务按统一的规则办，也相信照顾亲友是一种值得珍惜的德行。",
       "This is probably the contradiction in “differential association” that deserves a close look. It does not simply sort people into the privileged and the wronged. We want others not to be favored through connections, and find it hard to refuse the convenience connections might bring us. We approve of public matters following uniform rules, and also believe that looking after relatives and friends is a virtue worth keeping."],
      ["费孝通把传统中国的关系比作石子投进水里，向外散开的波纹。每个人都是自己那圈关系的中心，亲疏远近随着具体的人和事变。道德义务不是平均分给所有人的，它顺着关系一层一层往外展开。",
       "Fei Xiaotong compares relations in traditional China to the ripples that spread out after a stone drops in water. Each person is the center of his own circles, and nearness and distance shift with particular people and affairs. Moral duty is not handed out evenly to everyone. It unfolds outward layer by layer along the ties."],
      ["照这样看，一个人可以是很孝顺的儿子，慷慨的朋友，可靠的邻居，却不一定是个公正的公共事务参与者。这几样品质之间没有必然的连续。但这不等于他的善意是假的。",
       "By this reading, a man can be a very devoted son, a generous friend and a dependable neighbor, and still not be a fair participant in public affairs. These qualities have no necessary continuity. That does not make his goodwill false."],
      ["麻烦正在这里：差序格局靠的感情往往真实又可贵。父母照顾子女，朋友相互扶持，邻里在难处互助，本身没什么可责备。要是一个人对自己的母亲和素不相识的路人毫无区别，我们大概也不会觉得他的境界更高。问题不在人爱亲人胜过陌生人，在于这种私人感情一旦进入公共资源的分配，陌生人就可能替它付代价。",
       "The trouble sits right there: the feelings differential association relies on are usually real and valuable. Parents caring for children, friends supporting each other, neighbors helping in hard times, none of that deserves blame. If someone treated his own mother no differently from a stranger on the street, we would hardly think him morally higher. The problem is not that people love their kin more than strangers. It is that once this private feeling enters the distribution of public resources, strangers may pay for it."],
      ["几个问题我答不上来。替朋友介绍医生，是关怀还是优待？向熟人打听办事的程序，是获取信息还是利用关系？光看当事人的善意，回答不了。同一件事，对圈子里的人是责任，对圈子外的人可能是不公。",
       "A few questions I cannot answer. Introducing a friend to a doctor, is that care or favoritism? Asking an acquaintance how some procedure works, is that getting information or using a connection? The actor’s goodwill alone cannot settle it. The same act is a duty to those inside the circle and may be an injustice to those outside."],
      ["我不想把这归成中国人的文化缺陷。费孝通谈的是特定社会条件下形成的结构，不是某种不变的民族性格。乡土社会人口流动少，共同生活很稳定，熟悉本身就是信用机制：谁可靠，谁能托付，谁该担什么责任，大家都知道。关系带来方便，也带来监督、义务和躲不开的社会评价。",
       "I do not want to file this under a cultural defect of the Chinese. Fei is describing a structure formed under particular social conditions, not a fixed national character. In a rural society with little movement and a very stable common life, familiarity is itself a credit system: everyone knows who is reliable, who can be trusted, who should bear which duty. Connections bring convenience, and also supervision, obligation and a social judgment that cannot be dodged."],
      ["所以离开乡土，也不一定就摆脱了这种结构。今天人们靠同学、同事、校友和职业圈子建立联系，通讯录代替了村庄，关系仍然能跨地域起作用。现代社会要问的，不是人情为什么还没消失，而是一个谁也不认识的人，能不能不靠人情，得到他应得的对待。",
       "So leaving the village does not necessarily shake off this structure. Today people build ties through classmates, colleagues, alumni and professional circles, an address book takes the place of the village, and connections still work across regions. What modern society has to ask is not why favors have not disappeared, but whether someone who knows nobody can get the treatment he is due without them."],
      ["回到医院里的那个人。他不一定想要特权，只是担心父亲的病，怕耽误治疗。有人愿意帮忙，他没有理由拒绝。可另一个同样着急、同样担心父亲，却没有任何熟人的人，只能留在窗口外。",
       "Back to the man at the hospital. He does not necessarily want a privilege. He is worried about his father’s illness and afraid of delaying treatment. If someone is willing to help, he has no reason to refuse. Another man, just as anxious and just as worried about his father, has no acquaintance at all, and stays outside the window."],
      ["两个人的私心都不难理解。他们的处境却不一样。这比简单的道德谴责更让我不安。社会的不平等不总是出自明确的恶意，也可能来自无数个说得通的私人选择：父母对子女的爱，朋友间的义气，每个人在难处希望得到一点额外照顾。难的，是建立一套人人赞同的公平原则以后，当它和自己珍惜的关系冲突，我们还肯不肯承认它的约束，这才是难处。这一段我没读完就停下了。",
       "Neither man’s self-interest is hard to understand. Their situations are not the same. This unsettles me more than plain moral condemnation. A society’s inequality does not always come from clear ill will. It can come from countless understandable private choices: a parent’s love for a child, loyalty among friends, each person’s wish for a little extra care when things are hard. The difficult part comes after a fairness principle everyone agrees on is in place. When it collides with a relationship we cherish, whether we still accept its limits is the real difficulty. I stop here without finishing the passage."],
      ["又想起医院里的那个人。要是有一天他认识了那位医生，不用再排队，不用再担心挂不上号，他会怎么看当年站在窗口前的自己，我不知道。可能觉得终于有了依靠。可能把医生的联系方式留给朋友，朋友再转给自己的亲戚。一次出于好意的帮助，就这样顺着关系的波纹向外传。得到帮助的人都心怀感激，提供帮助的人都觉得自己做了件好事。",
       "I think again of the man at the hospital. Suppose one day he comes to know the doctor and no longer has to queue or worry about missing a place. I do not know how he will see himself, standing at the window back then. Maybe he will feel he finally has something to lean on. Maybe he will leave the doctor’s contact with a friend, who passes it to a relative. One kind act of help travels outward along the ripples like this. Everyone helped is grateful, and everyone who helps feels they did a good thing."],
      ["至于那些仍然站在窗口前的人，没有人刻意为难他们。他们只是恰好不在任何一道波纹里。",
       "As for the people still standing at the window, nobody sets out to make things hard for them. They happen to be outside every one of the ripples."]
    ]
  },
  {
    "date": "2024-07-01",
    "title": "Home Is Not an Easy Place to Go Back To",
    "slug": "home-is-not-an-easy-place-to-go-back-to",
    "category": "Sociology",
    "book": {
      "cover": "xiangzheng.jpg",
      "title": "乡争 (Competition in Chinese Villages)",
      "author": "杨华 Yang Hua",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "Sociology · Chinese original, Peking University Press",
        "How competition over land, resources and local power shapes everyday life in rural China, and what it means that some people can leave and others have to stay and contend."
      ]
    },
    "place": "于中国湖州\nHuzhou, China",
    "languages": ["Chinese", "English"],
    "prose": [
      ["他问：你在美国读书、工作，日子过得不错。一本写中国村庄纠纷的书，和你有什么关系？",
       "He asked: You studied and worked in the United States, and you’ve done well. What does a book about village disputes in China have to do with you?"],
      ["我答：我没有亲身经历过杨华研究的那些乡村纠纷，也不想把自己的成长和中国农民的处境混为一谈。正是这段距离，让我翻开了《乡争》。我离开中国，到美国学习、工作、生活，慢慢有了自己的职业与经济基础。这段经历很容易讲成一个关于教育、努力和个人选择的故事。读杨华的书时，我才留意到它的另一面：当某种竞争变得难以承受，我往往还有别的机会可以去找。",
       "I answered: I have not lived through the rural disputes Yang Hua studies, and I don’t want to blur my own upbringing into the situation of Chinese farmers. The distance is what drew me to *Xiang Zheng* (*Competition in Chinese Villages*). I left China to study, work and live in the United States, and slowly built a professional and economic footing. That can easily be told as a story of education, effort and personal choice. Reading Yang Hua, I noticed its other side: when a competition became unbearable, I usually had other opportunities to look for."],
      ["他问：那两种生活的差别，不就是有人更勤奋、更聪明吗？",
       "He asked: Isn’t the difference between those two lives just that some people work harder or are smarter?"],
      ["我答：未必。书里的人要围绕土地、资源、基层权力和社会关系，不断协调，有时是争夺。我熟悉的现代职业生活，则允许一个人靠教育、就业和迁移，在不同的制度与市场之间寻找机会。两种生活最大的差别，在于谁拥有离开的条件。",
       "I answered: Not necessarily. The people in the book have to keep negotiating, and sometimes fighting, over land, resources, grassroots power and social ties. The modern professional life I know lets a person use education, employment and migration to look for openings among different institutions and markets. The biggest difference between the two lives is who has the means to leave."],
      ["他问：乡下的争执，说到底不过是田埂上的小事，你为什么看得这么重？",
       "He asked: Village quarrels are small matters over the edge of a field. Why do you give them so much weight?"],
      ["我答：杨华笔下的乡村没有田园诗意。村里的利益冲突、人情和权力结构，让许多看似简单的事变得复杂。土地与资源的分配不只是经济问题，还牵涉家族关系、地方声望和多年积下的矛盾。一个人在某次争执里占了上风，也仍要和对方住在同一个村子里。一场争论结束了，竞争并没有结束。",
       "I answered: Yang Hua’s countryside has nothing idyllic about it. Conflicts of interest, favors and power structures inside the village complicate many things that look simple. Dividing land and resources is not only an economic matter. It involves family ties, local standing and grievances built up over years. A person who wins one quarrel still has to go on living in the same village as the other side. When the argument ends, the competition does not."],
      ["他问：可经济学不是说，人会比较成本和收益，然后作出选择吗？",
       "He asked: But doesn’t economics say people weigh costs and benefits and then choose?"],
      ["我答：我们习惯把个人看作能按成本与收益行动的人，现实里的选择却从不是无限的。一个人的住房、家庭、社会关系和收入若都在同一个地方，离开就要付出极高的代价。对流动机会多的人，某种不公平只是一个要避开的环境；对走不了的人，它是必须长期面对的生活条件。这一点我最放不下。",
       "I answered: We like to treat the individual as someone who acts on costs and benefits, but real choices are never unlimited. If a person’s housing, family, social ties and income all sit in one place, leaving costs a great deal. For someone with many options to move, a certain unfairness is an environment to avoid. For someone who cannot leave, it is a condition to live with for good. That is the point I can’t put down."],
      ["他问：那你自己的奋斗呢？难道不算数？",
       "He asked: And your own striving? Doesn’t that count?"],
      ["我答：算数。我一直相信教育、专业能力和长期规划能改善处境，自己的留学和工作经历也给了我理由相信这种流动是真的。但这条路靠许多前提撑着：能接受跨国教育的机会，能进入的就业市场，合法居留和工作的制度条件，还有足以承担转变成本的资源。个人努力确实重要，可它单独解释不了，为什么有人能换一个环境，有人只能在原来的环境里争。",
       "I answered: It counts. I have always believed that education, professional skill and long-term planning can improve a person’s situation, and my own years of study and work give me reason to think that mobility is real. But the road rests on many conditions: the chance at an international education, a job market I could enter, the legal conditions for residence and work, and resources enough to absorb the cost of the move. Personal effort matters, yet it cannot alone explain why some people can change their surroundings and others can only compete inside them."],
      ["他问：钱又和这些有什么关系？",
       "He asked: What does money have to do with it?"],
      ["我答：我如今靠工作和投资慢慢积累资产，对这种差别感受更深。经济上的安全不只是消费能力，也是遇到不利条件时可以拒绝或等待的余地。有储蓄，就撑得过一段失业；有专业技能，就能考虑换工作；收入和投资分布在不同地区，就不必把全部未来押在一处的经济变化上。乡村居民最重要的资源可能是土地和地方社会关系，可这些也让他们的生活更难从当地的利益冲突里分出来。",
       "I answered: I now build assets slowly through work and investing, and I feel the difference more sharply. Economic security is not only spending power. It is also room to refuse or to wait when conditions turn against you. With savings, you can get through a stretch of unemployment. With professional skills, you can consider changing jobs. With income and investments spread across regions, you need not stake your whole future on the economy of one place. Land and local ties may be a villager’s most important resources, and they also make it harder to separate one’s life from local conflicts of interest."],
      ["他问：这么说，离开的人就比留下的人高一等？",
       "He asked: So those who leave stand a step above those who stay?"],
      ["我答：我不这么认为。离开可能是更多自由，也可能是与原有社会关系的疏远；留下可能带着责任、归属感，和市场换算不出的价值。村里的人也不是被动困在原地，他们有自己的判断、策略和行动能力。杨华写到的那些争夺，有时恰是人们在有限条件下维护自己利益的努力。",
       "I answered: I don’t think so. Leaving can mean more freedom, and it can mean drifting from the social ties one began with. Staying can carry responsibility, belonging and values the market cannot price. Villagers are not passively stuck in place. They have their own judgment, strategies and capacity to act. The contests Yang Hua describes are sometimes just people defending their interests under limited conditions."],
      ["他问：那这本书是不是在说，乡村落后，所以才争得厉害？",
       "He asked: Then is the book saying the countryside is backward, and that is why people fight so hard?"],
      ["我答：我不愿这样读。村里的竞争不一定来自什么特殊的乡村性格。资源有限、制度执行不均、权力缺乏约束，城市、企业乃至国际社会也会出现类似的争夺。乡村只是把这些关系压得更集中，也更难回避。",
       "I answered: I don’t want to read it that way. Competition inside a village need not come from some special rural character. Where resources are limited, institutions are enforced unevenly and power goes unchecked, cities, companies and even the international community see similar contests. The countryside only packs these relations more tightly and makes them harder to avoid."],
      ["他问：一本讲利益之争的书，对你来说价值在哪里？",
       "He asked: For a book about contests of interest, where does its value lie for you?"],
      ["我答：在写法上。基层治理、资源分配、社会秩序，我们习惯用宏观概念谈论。杨华把它们放回具体的人际关系里。在理论中，这些概念相对清楚；走进村庄，就成了谁和谁熟，谁有能力动员关系，谁承担得起冲突的成本。制度的实际效果不能只从规则推断，还要看人们在日常里怎样使用、解释，甚至改变规则。",
       "I answered: In its method. We usually discuss local governance, resource allocation and social order through large concepts. Yang Hua puts them back inside particular relationships. In theory those concepts are fairly clear. Inside a village they turn into who knows whom, who can mobilize ties, and who can bear the cost of a conflict. The actual effect of an institution cannot be inferred from its rules alone. You have to watch how people use, interpret and even change those rules in daily life."],
      ["他问：只盯着利益竞争，会不会把乡村写得太紧张？",
       "He asked: Might focusing on competition make village life look too tense?"],
      ["我答：会有这个风险。合作、互助、亲情和地方认同同样是乡村社会的一部分。中国各地的经济结构、人口流动和治理方式差别很大，不能把某些地方的冲突当成所有乡村的共同命运。我把杨华的分析当作观察中国基层社会的一个视角，不当作对乡村生活的最终定义。",
       "I answered: There is that risk. Cooperation, mutual help, family feeling and local identity are just as much a part of rural society. Economic structures, population movement and modes of governance differ greatly across China, and the conflicts of some places cannot stand for the fate of every village. I take Yang Hua’s analysis as one angle for looking at China’s grassroots society, not as a final definition of rural life."],
      ["他问：读完以后，你自己怎么想“离开”这件事？",
       "He asked: After finishing, how do you think about leaving yourself?"],
      ["我答：我没有去想自己离开的是怎样一个故乡，想的是离开本身意味着什么。以前我更习惯把跨国教育、职业发展和积累财富看作个人选择的结果，现在也把它们看成一块逐渐扩大的行动空间。它让我能在不同的地方找机会，也让我不必把生活全部交给某一套地方关系去决定。对杨华书里的人来说，同一种不利处境摆在面前，有些人可以走，有些人只能留下来争。",
       "I answered: I did not end up thinking about what kind of hometown I had left. I thought about what leaving itself means. I used to see international education, a career and accumulated wealth as results of personal choice. Now I also see them as a widening space to act. It lets me look for opportunities in different places, and it means I don’t have to hand my whole life over to one set of local relations. For the people in Yang Hua’s book, the same unfavorable situation sits in front of everyone, and some can go while others can only stay and contend."]
    ]
  },
  {
    "date": "2016-11-06",
    "title": "Whose American Dream?",
    "slug": "whose-american-dream",
    "category": "Memoir",
    "book": {
      "cover": "hillbilly_elegy.jpg",
      "title": "Hillbilly Elegy",
      "author": "J.D. Vance",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Memoir · English original, first published 2016",
        "Vance recalls growing up in a struggling Appalachian family in Ohio, and what it says about a culture in crisis."
      ]
    },
    "place": "于华盛顿州贝尔维尤\nBellevue, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1. 读J.D. 万斯的《乡下人的悲歌》，读完两天后就是总统大选。特朗普的“让美国重新伟大”已经印在随处可见的标语上。",
       "1. I read J.D. Vance’s *Hillbilly Elegy* two days before the presidential election. Trump’s “Make America Great Again” was already on slogans everywhere."],
      ["2. 万斯笔下的美国，比特朗普的出现古老得多，也比一场选举复杂。",
       "2. The America in Vance’s pages is much older than Trump’s arrival, and more complicated than one election."],
      ["3. 他的外祖父母从肯塔基州阿巴拉契亚山区搬到俄亥俄州米德尔敦，赶上了二十世纪美国工业的扩张。钢铁厂给他们稳定的工资，也给了一种能代代相传的生活秩序。",
       "3. His grandparents moved from the Appalachian hills of Kentucky to Middletown, Ohio, and caught the twentieth-century expansion of American industry. The steel mill gave them a steady wage and an order of life that could be handed down."],
      ["4. 他们带来的，除了对好日子的指望，还有山区长久养成的家族忠诚、荣誉观念，以及对外面世界的不信任。工业化改变了他们的收入，没有同时改变他们理解社会的方式。",
       "4. Besides hope for a better life, they carried the family loyalty, the sense of honor and the distrust of the outside world that the hills had long bred. Industry changed their income. It did not change at the same time how they understood society."],
      ["5. 更早的裂痕一直都在：南北战争前的蓄奴制和地区冲突，重建时期没有解决的种族等级，十九世纪末工业资本与劳工运动的对抗。美国从来不是一个共享同一种生活经验的社会。",
       "5. The older fractures were always there: slavery and sectional conflict before the Civil War, the racial hierarchy Reconstruction left unresolved, the clash between industrial capital and the labor movement at the end of the nineteenth century. America has never been a society that shared one kind of life experience."],
      ["6. 战后制造业的繁荣，替一部分白人工人家庭缓和了经济上的焦虑，地区、阶级和种族之间的深层差异却没有消失。工厂衰落以后，被增长暂时盖住的问题又浮了上来。",
       "6. The postwar manufacturing boom eased the economic anxiety of some white working-class families, but the deep differences among regions, classes and races did not go away. After the factories declined, the problems that growth had covered for a while came back up."],
      ["7. 万斯最留意的是家里的破坏。母亲药物成瘾，童年被争吵和搬家一次次打断。最后让他走向大学的，是那位粗鲁、暴烈却始终护着他的外祖母。",
       "7. What Vance watches most closely is the damage inside the home. His mother was addicted to drugs, and his childhood was cut up by quarrels and moves. In the end it was his grandmother, rough and violent and always protecting him, who put him on the road to college."],
      ["8. 他强调个人责任，也批评某些让贫困延续下去的文化习惯。我尊重这种亲历者的叙述，对把一个人的经历推广成整个阶层的解释，却始终犹疑。",
       "8. He stresses personal responsibility and criticizes some cultural habits that keep poverty going. I respect an account from someone who lived it. I stay unsure about stretching one person’s experience into an explanation for a whole class."],
      ["9. 我住在深蓝州的大都会，看到的是美国全球化与知识经济的一面。我能读万斯的故事，能查制造业衰退的数据，却没有经历过一个工业城镇一点点失去工作、人口和尊严。",
       "9. I live in a metropolis in a deep blue state, and what I see is the globalized, knowledge-economy side of America. I can read Vance’s story and look up the data on manufacturing decline. I have not lived through an industrial town losing its jobs, its people and its dignity bit by bit."],
      ["10. 我生活在机会相对多的地方，这并不给我资格去告诉铁锈带的人该怎样理解自己的困境，也不该把他们的愤怒归给懒惰、偏见或拒绝改变。",
       "10. Living where opportunity is relatively plentiful gives me no standing to tell people in the Rust Belt how to understand their trouble, or to put their anger down to laziness, prejudice or refusal to change."],
      ["11. 我同样不愿把他们的生活简化成全球化的牺牲品。经济结构重要，家庭、文化和个人选择也在塑造命运。要问的是它们怎样彼此作用，不能拿其中一个，去免掉另一个的责任。",
       "11. I also don’t want to flatten their lives into victims of globalization. Economic structure matters, and so do family, culture and personal choice in shaping a fate. What needs asking is how they act on one another. One of them can’t be used to excuse the others."],
      ["12. 我越来越怀疑，美国社会的隔阂，除了人们对未来期待不同，还在于对过去的记忆不同。对一些人，美国梦是不断搬往新的城市、新的产业；对另一些人，是不必离开故乡，也有一份体面的工作。",
       "12. I increasingly suspect that the gap in American society lies not only in different hopes for the future but in different memories of the past. For some, the American dream means moving on to new cities and new industries. For others, it means a decent job without having to leave home."],
      ["13. 选举结果还没出来。我不知道赢的是希拉里还是特朗普，也不知道他的政治承诺能改变多少人的生活。",
       "13. The result isn’t in yet. I don’t know whether Hillary or Trump will win, or how many people’s lives his political promises will change."]
    ]
  },
  {
    "date": "2016-10-25",
    "title": "How a Piece of Cloth Becomes an Institution",
    "slug": "how-a-piece-of-cloth-becomes-an-institution",
    "category": "Graphic memoir",
    "book": {
      "cover": "persepolis.jpg",
      "title": "Persepolis",
      "author": "Marjane Satrapi",
      "language": "English",
      "country": "France",
      "original": "French",
      "lines": [
        "Graphic memoir · English translation of the French original, 2000–03",
        "Marjane Satrapi’s childhood and youth in Iran during and after the Islamic Revolution, drawn in black and white."
      ]
    },
    "place": "于华盛顿特区\nWashington, DC",
    "languages": ["Chinese", "English"],
    "pairStanzas": [
      [
        [
          "《我在伊朗长大》的开头，",
          "At the start of Persepolis (in Chinese, I Grew Up in Iran),"
        ],
        [
          "女孩们刚刚被要求戴上头巾，",
          "the girls have just been told to wear the veil,"
        ],
        [
          "却还不知道这东西有什么用。",
          "and do not yet know what it is for."
        ]
      ],
      [
        [
          "有人拿它跳绳，",
          "Some use it to skip rope,"
        ],
        [
          "有人蒙住自己的眼睛，",
          "some cover their own eyes with it,"
        ],
        [
          "还有人把它当作缰绳，",
          "and others treat it as reins,"
        ],
        [
          "骑在同伴身上玩耍。",
          "riding on a companion’s back."
        ]
      ],
      [
        [
          "莎塔碧画下这一幕时很冷静。",
          "Satrapi draws the scene calmly."
        ],
        [
          "她没有急着告诉读者，",
          "She is in no hurry to tell us"
        ],
        [
          "这些孩子即将失去多少自由。",
          "how much freedom these children are about to lose."
        ]
      ],
      [
        [
          "她只是让一块布，",
          "She lets a piece of cloth,"
        ],
        [
          "本应象征庄严与服从，",
          "meant to stand for solemnity and obedience,"
        ],
        [
          "在孩子手中",
          "become, in children’s hands,"
        ],
        [
          "变成毫无意义的玩具。",
          "a toy with no meaning."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "头巾没有改变任何一个女孩。",
          "The veil did not change a single girl."
        ],
        [
          "它改变的，",
          "What it changed"
        ],
        [
          "是别人看她们的方式。",
          "was how others look at them."
        ]
      ],
      [
        [
          "1979年革命之后，",
          "After the revolution of 1979,"
        ],
        [
          "头巾不再只属于个人的信仰，",
          "the veil no longer belonged only to personal faith,"
        ],
        [
          "不再只属于家庭的传统",
          "or family tradition,"
        ],
        [
          "或文化的习惯。",
          "or cultural habit."
        ]
      ],
      [
        [
          "强制着装的规定一点点确立，",
          "As compulsory dress rules took hold, bit by bit,"
        ],
        [
          "它成了国家的一枚标记，",
          "it became a mark of the state,"
        ],
        [
          "用来看一个女人",
          "by which to see"
        ],
        [
          "是否遵守公共秩序。",
          "whether a woman obeys public order."
        ]
      ],
      [
        [
          "女人要多穿一件衣服，",
          "A woman must wear one more garment."
        ],
        [
          "这还算小事。",
          "That is the small part."
        ],
        [
          "大事是她们的身体",
          "The large part is that her body"
        ],
        [
          "从此成了一份证件，",
          "has become a document,"
        ],
        [
          "随时可能被检查。",
          "liable to inspection at any moment."
        ]
      ],
      [
        [
          "在学校，",
          "At school,"
        ],
        [
          "老师可以纠正女孩的穿着。",
          "a teacher can correct a girl’s dress."
        ],
        [
          "在街上，",
          "In the street,"
        ],
        [
          "陌生人看见一缕露出的头发，",
          "a stranger sees a strand of exposed hair"
        ],
        [
          "便可以判断她是否端庄。",
          "and judges whether she is modest."
        ]
      ],
      [
        [
          "在公共场所，",
          "In public places,"
        ],
        [
          "衣服不再只是个人的选择，",
          "clothing is no longer only a personal choice."
        ],
        [
          "它成了别人",
          "It becomes a reason"
        ],
        [
          "干预她的理由。",
          "for others to intervene."
        ]
      ],
      [
        [
          "制度甚至不必时时出现。",
          "The system does not even need to be present."
        ],
        [
          "女孩只要知道",
          "A girl need only know"
        ],
        [
          "有人可能检查，",
          "that someone may check,"
        ],
        [
          "出门前便会反复整理头巾，",
          "and she adjusts her veil again and again before going out,"
        ],
        [
          "经过街角时，",
          "and at a corner,"
        ],
        [
          "下意识地拉低布边。",
          "by reflex, tugs the edge down."
        ]
      ],
      [
        [
          "权力最彻底的时候，",
          "Power is most complete"
        ],
        [
          "有人命令你遮住头发",
          "when no one orders you to cover your hair,"
        ],
        [
          "已经是次要的了。",
          "for that comes second."
        ],
        [
          "最彻底的是，",
          "The most complete is this:"
        ],
        [
          "无人命令时，",
          "with no one ordering,"
        ],
        [
          "你已学会替他们检查自己。",
          "you have learned to inspect yourself on their behalf."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "莎塔碧没有把戴头巾的女性",
          "Satrapi does not write the women who wear the veil"
        ],
        [
          "写成同一种人。",
          "as one kind of person."
        ]
      ],
      [
        [
          "她质疑的不是那块布，",
          "She is not questioning the cloth,"
        ],
        [
          "更不是女性",
          "still less the faith"
        ],
        [
          "自己选择佩戴它的信仰。",
          "of women who choose to wear it."
        ]
      ],
      [
        [
          "她质疑的是选择被取消之后，",
          "She questions what happens once choice is taken away:"
        ],
        [
          "个人的虔诚",
          "personal piety"
        ],
        [
          "与对国家规定的服从，",
          "and obedience to state rules"
        ],
        [
          "变得无法区分。",
          "become indistinguishable."
        ]
      ],
      [
        [
          "一个女人可以真诚地相信",
          "A woman can sincerely believe"
        ],
        [
          "遮发的意义，",
          "in the meaning of covering the hair,"
        ],
        [
          "也可以厌恶它。",
          "and can also dislike it."
        ]
      ],
      [
        [
          "可当两个人",
          "But when both"
        ],
        [
          "都必须以同样的方式出现在街上，",
          "must appear in the street in the same way,"
        ],
        [
          "外人再也无法",
          "outsiders can no longer"
        ],
        [
          "从衣着辨认其中的区别。",
          "tell the difference from their clothing."
        ]
      ],
      [
        [
          "制度制造了整齐，",
          "The system produces uniformity,"
        ],
        [
          "把人的差异藏了起来。",
          "and hides people’s differences."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "回头看开篇那几个玩耍的女孩。",
          "Back to the girls playing at the start."
        ],
        [
          "她们还不懂政治，",
          "They do not yet understand politics,"
        ],
        [
          "可她们仍然拥有",
          "yet they still have"
        ],
        [
          "解释一件东西的自由。",
          "the freedom to interpret a thing."
        ]
      ],
      [
        [
          "头巾可以是绳子，",
          "The veil can be a rope,"
        ],
        [
          "可以是缰绳，",
          "can be reins,"
        ],
        [
          "可以蒙住眼睛，",
          "can cover the eyes,"
        ],
        [
          "也可以被随手扔在一旁。",
          "or be tossed aside."
        ]
      ],
      [
        [
          "它的意义还没有固定。",
          "Its meaning is not yet fixed."
        ],
        [
          "孩子们按自己的想象",
          "The children use it anew"
        ],
        [
          "重新使用它。",
          "as their imagination suggests."
        ]
      ],
      [
        [
          "后来，",
          "Later,"
        ],
        [
          "她们学会了正确的戴法。",
          "they learn the correct way to wear it."
        ]
      ],
      [
        [
          "有人告诉她们，",
          "Someone tells them"
        ],
        [
          "布应该遮住哪里，",
          "where the cloth should cover,"
        ],
        [
          "头发不能露出多少，",
          "how much hair may not show,"
        ],
        [
          "什么样的穿着才算合宜。",
          "what dress counts as proper."
        ]
      ],
      [
        [
          "那些曾经用来玩耍的动作，",
          "The motions once used for play"
        ],
        [
          "渐渐有了对错。",
          "gradually acquire right and wrong."
        ]
      ],
      [
        [
          "*",
          ""
        ]
      ],
      [
        [
          "莎塔碧画下的，",
          "What Satrapi draws"
        ],
        [
          "不只是一代伊朗女孩",
          "is more than how a generation of Iranian girls"
        ],
        [
          "如何被迫戴上头巾。",
          "were made to put on the veil."
        ]
      ],
      [
        [
          "也是一个孩子",
          "It is also a child,"
        ],
        [
          "在长大的过程中，",
          "in growing up,"
        ],
        [
          "慢慢失去了",
          "slowly losing"
        ],
        [
          "把一块布当作一块布的权利。",
          "the right to treat a piece of cloth as a piece of cloth."
        ]
      ],
      [
        [
          "多年以后，",
          "Years later,"
        ],
        [
          "她们也许早已忘记",
          "they may have long forgotten"
        ],
        [
          "小时候怎样拿头巾跳绳。",
          "how they skipped rope with the veil as children."
        ]
      ],
      [
        [
          "但每次出门，",
          "But every time they go out,"
        ],
        [
          "手仍会不自觉地伸向额前，",
          "a hand still reaches, without thinking, toward the forehead,"
        ],
        [
          "摸一摸",
          "to feel"
        ],
        [
          "有没有头发露出来。",
          "whether any hair is showing."
        ]
      ]
    ]
  },
  {
    "date": "2016-11-05",
    "title": "Who Has the Right to Tell a Family’s Past?",
    "slug": "who-has-the-right-to-tell-a-familys-past",
    "category": "Novel",
    "book": {
      "cover": "sound_and_the_fury.jpg",
      "title": "The Sound and the Fury",
      "author": "William Faulkner",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1929",
        "The decline of the Compson family in Mississippi, told in four parts, by Benjy, Quentin and Jason and then in a final section centred on Dilsey, around the absent Caddy."
      ]
    },
    "place": "于华盛顿州贝尔维尤\nBellevue, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["桌上摊着一张我自己画的时间表。一个女儿离开了家，一个儿子自杀，一个儿子整天抱怨，最小的那个连话都说不清楚。我第一次读《喧哗与骚动》，想把这些事按先后排好，以为排完就能看见康普生家为什么败落。",
       "A timetable I had drawn myself lay spread across the desk. One daughter had left home, one son had killed himself, one son complained all day, and the youngest could not even say clearly what he meant. Reading *The Sound and the Fury* for the first time, I wanted to put these events in order, sure that once they were lined up I would see why the Compsons fell."],
      ["表越画越长，我却越看越不对。整个家都在围着凯蒂讲过去，凯蒂自己一句话也没有，连一个让她开口的章节都没有。",
       "The chart grew longer and looked more wrong. The whole family was telling the past around Caddy, and Caddy herself never spoke. There was not even a chapter in which she was given the chance."],
      ["那几年我刚到西雅图念书，第一次长时间离开父母。白天是课程、考试、朋友，和对将来的各种打算，每天都有新事，我也渐渐习惯自己拿主意。晚上和父母通电话，话题又回到老地方：家里的事，以前认识的人，我小时候的习惯，他们对我将来的期待。我觉得自己变了不少，可在他们的叙述里，我好像仍然是离家以前的那个人。我的家当然和康普生家不是一回事。我只是看到，人离开了家，家人对他的记忆并没有放他走。",
       "Those were my first years in Seattle, and the first time I had been away from my parents for long. By day there were classes, exams, friends and plans for the future. Something new happened every day, and I was getting used to making my own decisions. In the evening, on the phone with my parents, the talk went back to the old places: things at home, people we used to know, the habits I had as a child, what they expected of my future. I felt I had changed a lot, yet in their telling I seemed to be still the person I was before I left. My family is of course not the Compsons. I only saw that when a person leaves home, the family’s memory of him does not let him go."],
      ["班吉的意识不按时间走。一种气味，一个声音，过去就整个回来。凯蒂走了很多年，对他来说她仍旧待在那些散不去的感觉里。起初我觉得这样的叙述难读，后来想，它可能比规整的回忆更贴近某些真实的感情。在西雅图，有时听见一句熟悉的中文，或闻到一种食物的味道，另一边的生活会忽然站到眼前，比周围的街道还清楚。我分得清过去和现在，班吉分不清。可日历上那样整齐的时间，在人的记忆里从来没有过。",
       "Benjy’s mind does not run on a clock. A smell, a sound, and the past is whole again. Caddy left many years ago, and for him she still lives in those feelings that will not fade. At first I found this narration hard to read. Later I thought it might come closer to some real feelings than tidy memory does. In Seattle, hearing a familiar phrase of Chinese or catching the smell of some food, I would find the life on the other side suddenly standing before me, clearer than the street around me. I can tell the past from the present, and Benjy cannot. But time as neat as the days on a calendar has never existed in anyone’s memory."],
      ["昆丁离开密西西比，去了哈佛，地理上已经进入另一个世界，心里还留在南方家族的荣誉观里。他对凯蒂贞洁的执念，几乎成了他理解全世界的办法。我也是离开故乡、到美国读书的人，对这种身体走了、观念还留在原地的样子格外敏感。刚来时，一些从小习以为常的家庭观念，在这里并不理所当然：个人该在多大程度上服从家庭的期待，父母有没有权决定孩子的人生，一个人的选择先属于自己，还是属于整个家。我不总是赞同美国式的个人独立，却开始明白昆丁为什么容不下凯蒂有自己的生活。他护着的不只是妹妹的贞洁，还有一个男人可以解释、甚至决定女人命运的旧世界。",
       "Quentin leaves Mississippi for Harvard. Geographically he has entered another world, while inwardly he stays inside the honor code of a Southern family. His fixation on Caddy’s chastity has almost become his way of understanding the whole world. I, too, left home to be educated in America, and I am especially alert to this state of the body gone and the mind left behind. When I first arrived, some family ideas I had taken for granted since childhood were not taken for granted here: how far an individual should bow to family expectations, whether parents may decide a child’s life, whether a person’s choices belong first to themselves or to the whole family. I don’t always agree with American-style independence, but I began to see why Quentin cannot accept that Caddy has a life of her own. What he guards is not only his sister’s chastity but an old world in which a man may interpret, and even decide, a woman’s fate."],
      ["凯蒂几乎是小说的中心，却没有一章是她自己的。我们只能从兄弟们的记忆里认识她：班吉需要她的温柔，昆丁需要她的纯洁，杰生把自己的失败算在她头上。这最让我不安。离家以后，我也发现父母记得的某件往事，和我记得的并不完全一样。同一件事，他们看是关心，我看是干涉；他们记得自己付出了什么，我记得的是自己当时多想离开。我不认为谁在说谎。家里的事也许本来就没有一个所有人都同意的版本。",
       "Caddy is almost the center of the novel, yet not one chapter is hers. We can only know her through her brothers’ memories: Benjy needs her tenderness, Quentin needs her purity, and Jason blames his failures on her. This unsettled me most. Since leaving home I have found that my parents’ memory of some past event does not quite match mine. What looks like care to them can look like interference to me. They remember what they gave up for me, and I remember how badly I wanted to leave. I don’t think anyone is lying. Family life may never have had a version everyone agrees on."],
      ["杰生的章节，是另一个我更熟悉的美国。他不再执着荣誉，一直在算钱、算机会、算自己受的不公。来美国以后，我慢慢习惯了这里讲个人奋斗和经济成功的话，所以听杰生抱怨时，觉得格外讽刺。他总觉得自己本该有更好的生活，只是被人夺走了，却从没认真怀疑过自己看世界的方式。昆丁把过去变成荣誉，杰生把过去变成债务。他们像是两个时代的人，都要凯蒂替自己没能实现的人生担责。",
       "Jason’s chapter is another America, one I know better. He no longer clings to honor. He keeps counting money, chances and the wrongs done to him. Since coming to the United States I have grown used to its language of personal striving and economic success, so Jason’s grievances struck me as especially ironic. He always feels he should have had a better life and that others took it from him, and he never seriously doubts his own way of seeing the world. Quentin turns the past into honor, and Jason turns the past into debt. They seem to belong to different eras, yet both need Caddy to carry the blame for the lives they could not have."],
      ["到了最后一部分，叙述离开康普生兄弟，转向迪尔西，我才发现自己一直几乎全盘接受了这个白人家庭对世界的定义。迪尔西照顾这个家，看着它败落，却没有把康普生家的命运当成整个世界的命运。她让我想起美国南方历史里那些长期被挡在家族荣誉和地方传统之外的人。美国课堂上的南方史，常被整理成奴隶制、内战、重建和现代化的一条线。在福克纳这里，历史不是一条能完整复原的线，它散在不同人的记忆里，有些人甚至从没得到讲述自己的机会。",
       "In the last section the narration leaves the Compson brothers for Dilsey, and I saw that I had almost wholly accepted this white family’s definition of the world. Dilsey looks after the household and watches it decay, but she does not take the Compsons’ fate for the fate of the world. She reminded me of the people in Southern history who were long kept outside family honor and local tradition. In American classrooms, Southern history is often arranged into a single line of slavery, civil war, Reconstruction and modernization. In Faulkner, history is not a line that can be fully recovered. It is scattered through different people’s memories, and some were never given the chance to tell theirs."],
      ["我最后收起了那张时间表。刚来美国时，我以为离开故乡就能重新开始，过去会变成一段已经完成的历史。读完以后，我怀疑所谓重新开始，只是我们给自己选的一种讲法。在父母的记忆里，在自己的回忆里，在别人的期待里，同一个人可能一直过着几种不同的人生。福克纳没有去调和这些矛盾：班吉停在感觉里，昆丁困在时间里，杰生关在怨恨里，凯蒂始终不在场。四个部分看似一步步走近真相，其实一直在提醒，讲述变多了，并不等于理解变完整。",
       "In the end I put the timetable away. When I first came to America, I thought leaving home meant a fresh start, and that the past would become a finished piece of history. After finishing the novel, I doubt that a fresh start is more than a way of telling that we choose for ourselves. In my parents’ memory, in my own recollection, in what others expect, the same person may keep living several different lives. Faulkner makes no attempt to reconcile these contradictions: Benjy stays inside sensation, Quentin is trapped in time, Jason is shut in resentment, and Caddy is never present. The four parts seem to move step by step toward the truth, but they keep reminding us that more telling does not mean fuller understanding."],
      ["我本来想知道康普生家为什么败落。现在我更想知道，要是凯蒂能讲自己的故事，要是迪尔西从一开始就是叙述者，我们嘴里的那个康普生家，还会是同一个家吗？那张画满箭头的纸，被我压在书底下。",
       "I had set out to learn why the Compsons fell. Now I would rather know whether, if Caddy could tell her own story, or if Dilsey had been the narrator from the start, the family we call the Compsons would still be the same family. The sheet covered with arrows is under the book now."]
    ]
  },
  {
    "date": "2012-08-04",
    "title": "I Stopped at the Year My Father Left",
    "slug": "i-stopped-at-the-year-my-father-left",
    "category": "Memoir",
    "book": {
      "cover": "first_they_killed_my_father.jpg",
      "title": "First They Killed My Father",
      "author": "Loung Ung",
      "language": "English",
      "country": "Cambodia",
      "original": "English",
      "lines": [
        "Memoir · English original, first published 2000",
        "Loung Ung recalls, from a child’s view, the Khmer Rouge years in Cambodia and the loss of her family."
      ]
    },
    "place": "于柬埔寨金边\nPhnom Penh, Cambodia",
    "languages": ["Chinese", "English"],
    "prose": [
      ["父亲叫我不要害怕的那一天，我已经学会了挨饿。",
       "On the day my father told me not to be afraid, I had already learned to go hungry."],
      ["我记得他的话。后来我才想到，他说这句话的时候，自己或许比我更害怕。那一年我也学会了不哭，学会在陌生人面前忘掉他从前的身份，那些事我至今记得很清楚。",
       "I remember his words. Only later did I think that when he said them, he may have been more afraid than I was. That year I also learned not to cry, and to forget in front of strangers who he used to be. I still remember those things clearly."],
      ["他被带走以后，我问过他什么时候回来。每问一次，大人就不再看我的眼睛。后来我就不问了。",
       "After he was taken away, I asked when he would come back. Each time I asked, the grown-ups stopped looking me in the eye. After a while I stopped asking."],
      ["许多年后，我离开柬埔寨，用另一种语言讲自己的童年，才知道那些人为什么带走他，知道他的职业怎么成了罪名，一个国家怎样把杀人叫作革命。知道了这些，我能解释他的死，却还是不明白，那天他为什么必须离开我。",
       "Many years later I left Cambodia and told my childhood in another language. I learned why those men took him, how his profession became a crime, how a country can call killing revolution. With all that I can explain his death. I still don’t understand why he had to leave me that day."],
      ["有时我怕自己已经记不清他的声音。那些关于他的记忆，是我亲眼见过的，还是后来想念他时一次次拼起来的，我分不清。",
       "Sometimes I am afraid I no longer remember his voice. I can’t tell whether my memories of him are things I saw with my own eyes or things I pieced together, each time I missed him."],
      ["人们说我活了下来，说我勇敢。我已经比父亲离开时的自己大了许多，可一想起他，我还是那个不敢哭出声的孩子。",
       "People say I survived, and that I am brave. I am much older now than I was when my father left, but when I think of him I am still the child who dared not cry out loud."]
    ]
  },
  {
    "date": "2013-06-11",
    "title": "A War Already Lost?",
    "slug": "a-war-already-lost",
    "category": "History",
    "book": {
      "cover": "history_of_sino_japanese_war.jpg",
      "title": "甲午战争史 (History of the First Sino-Japanese War)",
      "author": "戚其章 Qi Qizhang",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "History · Chinese original, Shanghai People’s Publishing House",
        "A history of the 1894–95 war between Qing China and Meiji Japan, from the Beiyang Fleet’s ironclads to the Treaty of Shimonoseki."
      ]
    },
    "place": "于华盛顿州西雅图\nSeattle, WA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["1894年夏天，大沽口外停着北洋舰队的定远和镇远。两艘都是铁甲舰，在当时的东亚有威慑力。站在岸上的人没有什么理由相信，一年之内清朝会输得那么惨。",
       "In the summer of 1894 the Beiyang Fleet’s *Dingyuan* and *Zhenyuan* lay off Dagu. Both were ironclads, and both carried weight in East Asia at the time. A man on the shore had little reason to believe the Qing would lose so badly within a year."],
      ["这两艘船不是旧帝国的遗物。清朝办了三十多年洋务，建兵工厂，架电报，修铁路，派留学生，还有一支让东亚各国看重的海军。日本的明治维新成效不小，但也受财政和军事风险的限制。战争开打前，胜负远没有后来的教科书写得那么清楚。",
       "They were not relics of an old empire. The Qing had spent more than thirty years on the Self-Strengthening Movement. It built arsenals, strung telegraph lines, laid railways and sent students abroad, and it had a navy the countries of East Asia took seriously. Japan’s Meiji reforms had done well, but they too were bound by finances and military risk. Before the war began, the outcome was far less clear than later textbooks make it."],
      ["一年以后，北洋舰队覆灭，清朝签下《马关条约》，割让台湾和澎湖列岛，赔付巨额款项。一项花了几十年、寄托着富国强兵希望的工程，第一次碰上国家级的战争，就露出这么严重的缺陷。",
       "A year later the Beiyang Fleet was gone. The Qing signed the Treaty of Shimonoseki, ceded Taiwan and the Penghu Islands, and paid a huge indemnity. A project of several decades, carrying hopes of a rich and strong country, showed such serious flaws the first time it met a national war."],
      ["读戚其章的《甲午战争史》，我最想弄清的是清朝为什么曾经有理由相信自己不会输。我们总是从1895年的结局回头看1894。北洋舰队的腐败，清廷的犹疑，李鸿章的保守，慈禧的奢靡，样样都能当战败的理由，历史便成了一份写好的判决书，人物只是照着结局犯错。这样的解释让人满意，却把历史里该研究的部分拿走了：当时的人知道什么，不知道什么，在有限的信息里为什么那样决定。",
       "Reading Qi Qizhang’s *History of the First Sino-Japanese War*, what I most wanted to understand was why the Qing once had reason to think it would not lose. We always look back at 1894 from the ending of 1895. The fleet’s corruption, the court’s hesitation, Li Hongzhang’s conservatism, Cixi’s extravagance, each can serve as a reason for defeat, and history turns into a verdict already written, with its figures merely making mistakes toward a known end. That explanation is satisfying, but it takes away the part of history worth studying: what people then knew and did not know, and why they decided as they did with limited information."],
      ["黄海海战要这样看。北洋舰队有定远、镇远这样的重型铁甲舰，部分装备占优，但航速、速射火力、训练和战术协同都不足。这不是先进武器打败落后武器，是两套作战体系在真实战场上相撞。中国舰队不缺勇敢的官兵，许多舰坚持打到最后。勇敢代替不了训练，单舰的装甲也补不了整体战术的短处。",
       "The Battle of the Yellow Sea has to be seen this way. The Beiyang Fleet had heavy ironclads like *Dingyuan* and *Zhenyuan* and an edge in some equipment, but it was short on speed, rapid-fire guns, training and tactical coordination. This was not advanced weapons beating backward ones. It was two systems of fighting colliding on a real battlefield. The Chinese fleet did not lack brave sailors, and many ships fought to the end. Courage cannot stand in for training, and one ship’s armor cannot make up for the limits of the whole tactic."],
      ["威海卫之战更让我停下来。北洋舰队最后的覆灭，不全发生在两支舰队的海上决战里，和陆上防御失守、港口被围、指挥体系崩溃连在一起。一支海军再有先进战舰，也要靠陆军、港口防御、后勤和国家财政一起撑着。军舰可以从欧洲买来，让军舰有效作战的国家制度，却买不到。",
       "The battle at Weihaiwei made me stop longer. The fleet’s final destruction did not happen wholly in a decisive clash at sea. It was tied to the loss of the land defenses, the siege of the harbor and the collapse of command. A navy with the best ships still depends on the army, harbor defenses, supply and national finances all holding up together. Warships can be bought in Europe. The state system that lets them fight effectively cannot be bought."],
      ["这让我想起自己在大型技术组织里的工作。一个复杂系统能不能成，往往不看哪个部件最先进，要看不同团队能否围绕同一个目标调配资源、划清责任、及时决策。一个项目有优秀的工程师、先进的模型和足够的设备，也可能因为各组织的目标不一致，发挥不出该有的能力。现代企业当然不能和十九世纪的国家战争相比，可甲午战争里有相似的困局：局部能力不断提高，整体制度没有跟着变，先进技术反倒容易造出一种虚假的安全感。北洋舰队的铁甲舰不只是军事装备，也是清廷相信自己已经富强的象征。危险的或许是把看得见的现代化成果，当成整个制度已经转型的证明。",
       "This brought to mind my own work inside a large technical organization. Whether a complex system succeeds often depends less on which component is most advanced than on whether teams can align resources, fix responsibility and decide in time around one goal. A project can have excellent engineers, advanced models and ample equipment and still fail to use its ability because the organizations’ goals do not match. A modern company is of course no match for a nineteenth-century national war, yet the Sino-Japanese War shows a similar bind: when local capability keeps rising and the whole system does not change with it, advanced technology can create a false sense of security. The ironclads were not only military equipment but a symbol of the court’s belief that it had become rich and strong. The danger may lie in taking visible results of modernization as proof that the entire system has been transformed."],
      ["李鸿章在这场战争里的位置，也比旧叙事复杂。他知道北洋舰队的实力和局限，知道清朝财政和军事动员的难处。他想用外交拖住战争，里面有保守和误判，也有对实力差距的认识。他主持的洋务体系，最终没能建起撑得住现代战争的国家能力。把他写成卖国者容易。难的是解释，为什么清朝最积极推动军事现代化的大臣，仍没能让这些成果合成一股有效的力量。",
       "Li Hongzhang’s place in the war is also more complicated than the old account allows. He knew the fleet’s strength and its limits, and the difficulty of Qing finances and military mobilization. He tried to hold off the war through diplomacy, which held both conservatism and misjudgment, and also a knowledge of the gap in strength. The Self-Strengthening apparatus he led never built the state capacity that could carry a modern war. Writing him off as a traitor is easy. The hard part is explaining why the Qing minister who pushed military modernization hardest still could not make its results add up to an effective force."],
      ["日本走的是另一条路。它同样有政治矛盾、财政压力和军事局限，却在中央集权、征兵制度、教育改革和国家动员上推进得更成系统。胜负不能解释成日本民族性格比中国优越，也不能归于所谓文明高低。拉开差距的，是两国在特定历史条件下建起的制度能力，以及这些制度能不能把资源变成持续的军事行动。",
       "Japan took another road. It too had political strains, financial pressure and military limits, but it advanced more systematically in centralization, conscription, educational reform and national mobilization. The result cannot be explained by a Japanese national character superior to the Chinese, nor by some supposed height of civilization. What separated the two was the institutional capacity each built under particular historical conditions, and whether those institutions could turn resources into sustained military action."],
      ["我也提防那种把日本的胜利全归功于现代化的说法。日本的军事改革值得研究，但它发动战争，扩大对朝鲜和中国的控制，同样是近代帝国主义的扩张逻辑。制度有效率，不等于政治上有正当性。一个国家能更有效地组织军队，不能证明它有权发动侵略。现代化可以同时用于国家建设和对外侵略，这是甲午战争最该想的地方之一。",
       "I am also wary of the account that credits Japan’s victory wholly to modernization. Japan’s military reforms deserve study, but its launching of the war and its widening control over Korea and China followed the same expansionist logic of modern imperialism. An efficient system does not make for political legitimacy. A state that can organize an army more effectively has not thereby shown it has the right to wage a war of aggression. That modernization can serve nation-building and foreign aggression at once is one of the things most worth thinking about in this war."],
      ["1895年的《马关条约》让清朝割让台湾和澎湖，承认朝鲜独立，承担巨额赔款。后果远超一场军事失败：它动摇了清朝长久以来的东亚秩序观，也推动了后来的维新和政治改革。但我不想把这些写成一场失败终于唤醒民族的故事。灾难不会因为后来有了改革，就变得必要。战争里死去的人，也不该被事后解释成现代化不可避免的代价。",
       "The Treaty of Shimonoseki in 1895 made the Qing cede Taiwan and Penghu, recognize Korean independence and pay a huge indemnity. The consequences went far beyond a military defeat. It shook the Qing’s long-held idea of the East Asian order and pushed later reform movements and political change. But I don’t want to write these as a story of defeat finally waking a nation. A disaster does not become necessary because reform followed. Those who died in the war should not be explained afterward as the unavoidable price of modernization."],
      ["写甲午，容易落进两种叙事。一种是民族屈辱的道德审判，把失败归于腐败、怯懦和卖国。另一种是制度现代化的目的论，把日本的胜利看成先进制度必然战胜落后制度。前者太靠人物的善恶，后者容易忽略战争里的偶然、决策失误和具体的军事过程。我更欣赏两者之间还留着复杂性的研究：既讲清朝制度上的长期弱点，也认真对待战争中每一次本可能不同的选择。",
       "Writing about 1894 invites two kinds of narrative. One is a moral judgment of national humiliation that ascribes defeat to corruption, cowardice and betrayal. The other is a teleology of institutional modernization that sees Japan’s victory as the inevitable triumph of an advanced system over a backward one. The first leans too much on the good and evil of persons. The second neglects chance, errors of decision and the concrete course of the fighting. I prefer research that keeps complexity between the two, explaining the Qing’s long institutional weakness and also taking seriously each choice in the war that could have gone differently."],
      ["读这段历史，我不想提炼出什么简单的民族教训。今天的中国、日本和十九世纪的东亚已经完全不同，但甲午仍提醒我，国家实力不是几件先进装备、几项经济指标或一套宏大口号量得完的。真正的能力在不容易展示的地方：财政怎么运转，组织怎么协调，信息怎么传递，错误怎么被纠正，决策的人肯不肯承认现实和期待之间的差距。",
       "Reading this history, I don’t want to distill a simple national lesson. China, Japan and East Asia today are entirely different from the nineteenth century, yet the war still reminds me that national strength cannot be measured by a few advanced weapons, a few economic indicators or a grand slogan. Real capability sits in places that are hard to put on show: how finances run, how organizations coordinate, how information travels, how errors get corrected, and whether decision makers are willing to admit the gap between reality and expectation."],
      ["合上书，我又想到1894年夏天停在港口里的定远和镇远。钢铁装甲，巨炮，庞大的舰身，都是真实的现代化成果，并非虚饰。所以它们后来的结局，格外让人难过。",
       "Closing the book, I thought again of *Dingyuan* and *Zhenyuan* at anchor in the harbor that summer of 1894. The steel armor, the big guns, the great hulls were real products of modernization, not empty show. That is why what became of them is so sad."]
    ]
  },
  {
    "date": "2017-12-03",
    "title": "An Age That Needed No Usurpation",
    "slug": "an-age-that-needed-no-usurpation",
    "category": "History",
    "book": {
      "cover": "dongjin_menfa_zhengzhi.jpg",
      "title": "東晉門閥政治 (Aristocratic Politics of the Eastern Jin)",
      "author": "田餘慶 Tian Yuqing",
      "language": "Chinese",
      "country": "China",
      "original": "Chinese",
      "lines": [
        "History · Traditional Chinese edition, Open Page",
        "How the Eastern Jin throne and a handful of great clans, the Wang, Yu, Huan and Xie, kept one another in balance for a century."
      ]
    },
    "place": "於加州洛杉磯\nLos Angeles, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["剛讀到第一章，322年。王敦從武昌起兵，沿江東下，攻入建康。晉元帝司馬睿名義上是天子，卻攔不住這位琅琊王氏的軍事強人。王敦得勝之後沒有立刻廢掉司馬氏，仍以晉臣的身份掌著朝政。我在這裡停了下來。一個人已經能用武力壓過皇帝，為什麼還要留著皇帝？王氏既然這麼強，為什麼不乾脆取而代之？",
       "Just into the first chapter: the year is 322. Wang Dun raises troops at Wuchang, goes east down the Yangtze and enters Jiankang. Emperor Yuan of Jin, Sima Rui, is Son of Heaven in name but cannot stop this military strongman of the Langya Wang clan. After winning, Wang Dun does not abolish the Sima throne. He keeps running the court as a minister of Jin. I stop here. If a man can already overpower the emperor by force, why keep the emperor? If the Wangs are this strong, why not simply take his place?"],
      ["田餘慶的《東晉門閥政治》，看來整本書都在繞著這類問題打轉。我們讀慣了皇帝與權臣爭奪至尊的故事，東晉初年的結構卻複雜得多。司馬氏要靠高門士族才坐得穩，士族也要皇室給一個名義上的合法性。王敦打得贏皇帝，卻未必能讓別的士族接受一個王氏王朝。",
       "Tian Yuqing’s *Aristocratic Politics of the Eastern Jin* seems to circle questions like this one all the way through. I am used to stories of emperors and powerful ministers fighting for the supreme seat, but the structure of the early Eastern Jin is far more tangled. The Simas need the high gentry clans to sit securely, and the clans need the imperial house to supply nominal legitimacy. Wang Dun can beat the emperor, but cannot necessarily make the other clans accept a Wang dynasty."],
      ["讀到「王與馬，共天下」。以前只當它是形容王氏顯赫的俗語，現在看，它說的是一個很特殊的事實：東晉皇權不完整，門閥的權力也彼此牽制。這個政權撐得下去，因為爭奪一直都在，只是沒有哪一方能輕易把爭奪變成獨占。",
       "Now the phrase “the Wangs and the Simas share the realm.” I used to take it as a saying about how eminent the Wang clan was. Here it describes a peculiar fact: imperial power in the Eastern Jin is incomplete, and the power of the great clans holds one another in check. The regime lasts because the contention never stops, and no side can easily turn it into monopoly."],
      ["王導和王敦同出琅琊王氏，做法卻是兩個樣子。王敦靠兵力控制長江中游；王導留在建康，幫司馬睿搭起朝廷，在南渡的北方士族與江東地方勢力之間來回協調。西晉末年北方戰亂，許多士族南遷，到了江南，當地社會並不會自動承認他們。司馬睿自己兵力不足，在江東也沒有根基，只能借王導的人脈與聲望。",
       "Wang Dao and Wang Dun come from the same Langya Wang clan, yet they go about things in two different ways. Wang Dun holds the middle Yangtze with troops. Wang Dao stays in Jiankang, helps Sima Rui put a court together, and goes back and forth between the northern gentry who have moved south and the local powers of Jiangdong. At the end of Western Jin, war in the north sends many clans south, but on reaching Jiangnan they are not automatically recognized by local society. Sima Rui has too little force of his own and no roots in Jiangdong, so he has to borrow Wang Dao’s connections and prestige."],
      ["王導的本事，在於他明白新政權光靠南渡士族撐不起來。他一直在爭取江東士族的合作，讓原本隔著地域的各路人慢慢肯接受同一個朝廷。這種工作沒有戰場上的戲劇性，東晉能在江南站穩腳跟，卻少不了它。",
       "Wang Dao’s gift is knowing that the new regime cannot stand on the southern-migrating clans alone. He keeps working to win over the Jiangdong clans, so that groups once divided by region slowly agree to one court. The work has none of the drama of a battlefield, and the Eastern Jin could not have found its footing in Jiangnan without it."],
      ["我過去比較容易欣賞桓溫那樣的強人，對王導這樣的協調者沒什麼耐心。現在參與大型技術項目，才開始懂他的難處。項目可以有明確的負責人，負責人手裡卻未必握著所有資源。模型研發、應用工程、基礎設施、數據團隊，各有各的目標和優先級。每個團隊都很優秀，沒有共同的行動安排，整件事照樣會停在原地。",
       "I used to find it easier to admire strongmen like Huan Wen, and had little patience for coordinators like Wang Dao. Now I am working on large technology projects, and I am starting to understand his difficulty. A project can have a clear owner who still does not hold all the resources. Model research, application engineering, infrastructure and data teams each have their own goals and priorities. Every team can be excellent, and without a shared plan of action the whole effort still sits where it is."],
      ["這當然不能直接拿來解釋古代政治，但我讀王導的方式變了。我不再把妥協簡單看成缺乏決斷。有時最難的，是讓彼此都不願服從的各方相信，繼續合作比馬上爭奪划算。",
       "Of course this cannot directly explain ancient politics, but it changes how I read Wang Dao. I no longer see compromise as simply a lack of resolve. Sometimes the hardest task is to make parties who refuse to obey one another believe that cooperating further pays better than contending right now."],
      ["往下是蘇峻之亂。王導的政治，並不表示門閥之間有穩定的團結。王敦之亂過後，權力格局一直在變。327至329年蘇峻作亂，建康又遭嚴重破壞。庾亮想加強朝廷控制，處理蘇峻的問題時出了大錯，終於引發叛亂。庾氏的影響力沒有因此消失，但這場危機露出了朝廷對地方軍事力量的依賴，中央權威的脆弱也一併顯出來。",
       "Next comes Su Jun’s rebellion. Wang Dao’s politics does not mean the great clans enjoy a stable unity. After Wang Dun’s revolt the balance of power keeps shifting. In 327–329 Su Jun rebels and Jiankang is badly damaged again. Yu Liang wants to tighten the court’s control, makes a serious mistake in handling Su Jun, and so provokes the revolt. The Yu clan’s influence does not vanish, but the crisis shows how much the court depends on regional military forces, and how fragile central authority is."],
      ["田餘慶讓我佩服的一點，是他不把這些事件孤立地算在某個人的野心或失誤上。王敦之亂、蘇峻之亂、庾氏勢力的起落，都連著東晉政權內部的權力分配。所謂門閥政治，並不是幾個著名家族輪流當宰相，而是皇室、士族、地域勢力和軍事資源一起撐住的一套結構。",
       "What I admire in Tian Yuqing here is that he refuses to pin these events, one by one, on somebody’s ambition or blunder. Wang Dun’s revolt, Su Jun’s revolt, the rise and fall of the Yu clan all tie back to how power is distributed inside the Eastern Jin regime. Aristocratic politics is not a few famous families taking turns as chancellor. It is a structure held up together by the imperial house, the gentry clans, regional powers and military resources."],
      ["桓溫這一段最能看出這套結構的邊界。347年他領兵滅成漢，控制益州，之後幾次北伐，軍事聲望極高。371年他廢黜晉廢帝司馬奕，改立司馬昱為簡文帝，皇位歸誰幾乎由他說了算。可是能廢立皇帝，不等於能當皇帝。他既要保住軍事優勢，也得面對其他士族的態度，以及司馬氏皇統代表的合法性。晚年他想再抬高政治地位，改朝換代始終沒有完成。373年他去世，桓氏還有相當的影響力，東晉的權力格局卻開始動了。",
       "The Huan Wen chapters show the edges of this structure best. In 347 he leads an army to destroy Cheng-Han and takes Yizhou; after that come several northern expeditions and very high military prestige. In 371 he deposes the Emperor Fei of Jin, Sima Yi, and installs Sima Yu as Emperor Jianwen, so that he almost decides who holds the throne. But being able to depose and install emperors is not the same as being able to become one. He has to keep his military edge, and he also has to face the attitude of the other clans and the legitimacy the Sima line carries. In his last years he tries to raise his standing further, and the change of dynasty is never completed. When he dies in 373 the Huan clan still holds considerable influence, but the Eastern Jin balance of power begins to move."],
      ["我覺得這比單講桓溫的野心有意思。人們常以為權力可以一直累積，直到某個人坐上最高的位子。桓溫有軍事優勢，也有廢立的能力，仍然被合法性和其他士族的力量拘束。軍事權力能逼皇帝讓步，造不出一個人人接受的新王朝。",
       "I find this more interesting than a plain account of Huan Wen’s ambition. People tend to assume power can pile up without limit until someone takes the top seat. Huan Wen has military superiority and the ability to depose and install, and is still bound by legitimacy and by the strength of the other clans. Military power can force an emperor to yield. It cannot make a new dynasty that everyone accepts."],
      ["到了謝安。383年淝水之戰，前秦苻堅領兵南下，東晉靠謝玄等人統率的北府兵取得決定性勝利。後人愛講謝安聽到捷報仍從容下棋，彷彿整個東晉的命運都濃縮在一位名士的鎮定裡。我也喜歡這個故事，田餘慶卻讓我去看棋盤之外。北府兵的形成，與京口一帶的北方流民、軍事組織，以及謝氏掌握相關軍權有密切關係。謝玄能帶這支軍隊，不只靠個人軍事才能，東晉長期的政治與人口變化，也慢慢造出了這樣的軍事基礎。",
       "Then Xie An. At the Battle of Fei River in 383, Fu Jian of Former Qin leads his army south, and the Eastern Jin wins decisively with the Beifu army commanded by Xie Xuan and others. Later generations love to tell how Xie An kept calmly playing chess when news of the victory came, as if the fate of the whole Eastern Jin were condensed into one famous scholar’s composure. I like the story too, but Tian Yuqing sends me looking beyond the chessboard. The Beifu army grew out of the northern refugees around Jingkou, out of military organization, and out of the Xie clan’s hold on the relevant command. Xie Xuan can lead it through more than personal talent: the Eastern Jin’s long political and demographic changes have slowly built that military base."],
      ["淝水之戰因此除了是以少勝多的名戰，也改變了東晉內部的力量關係。謝氏的政治聲望到了高峰，北府兵成為此後軍事政治裡不能忽視的力量。東晉末年，劉裕正是靠北府兵系統崛起，420年取代司馬氏，建立劉宋。我很欣賞田餘慶處理這種連續性的方式。一場戰爭的意義不會隨戰役結束而結束，它可能改變軍隊的組織、將領的政治地位，以及之後幾十年的權力分配。我們常用淝水的勝利證明謝安的卓越，卻容易忽略，那場勝利所靠的軍事力量，最後也參與了門閥政治的終結。",
       "So Fei River is a famous victory of the few over the many, and it also changes the balance of forces inside the Eastern Jin. The Xie clan’s prestige reaches its peak, and the Beifu army becomes a force that military politics can no longer ignore. At the end of the dynasty Liu Yu rises on the strength of the Beifu system and in 420 replaces the Simas to found the Liu Song. I admire how Tian Yuqing handles this continuity. The meaning of a war does not end with the battle. It can change how armies are organized, where generals stand politically, and how power is divided for decades. We often cite the victory at Fei River as proof of Xie An’s brilliance, and easily overlook that the force behind it later took part in ending aristocratic politics."],
      ["對他的方法，我有一點保留。他很會從任職、家族關係和政治事件裡辨認出門閥之間的利益結構，但歷史被解釋得太完整時，我偶爾會懷疑，是不是高估了當事人對自身處境的認識。王導、桓溫、謝安當然在意家族利益，卻未必每一步都清楚算著整個門閥體系的平衡。歷史學家隔了幾百年看得見結構，當時的人只能在有限的信息裡做選擇。",
       "A small reservation about his method. He is good at picking out the structure of interests among the clans from officeholding, family ties and political events, but when history is explained this completely I sometimes wonder whether we overrate how well the participants knew their own situation. Wang Dao, Huan Wen and Xie An surely care about family interests, yet they do not necessarily count the balance of the whole clan system at every step. A historian centuries later can see a structure. People at the time can only choose on limited information."],
      ["另外，我不想因為這套權力平衡精巧，就忽略它的社會排他性。「王與馬，共天下」的「共」，從來不是天下人一起參與政治，是少數高門和皇室分享統治權。琅琊王氏、潁川庾氏、譙國桓氏、陳郡謝氏之間的競爭固然複雜，普通人並沒有平等進場的資格。",
       "Also, I do not want the neat balance of power to make me overlook how socially exclusive it is. The “share” in “the Wangs and the Simas share the realm” was never all the people taking part in politics together. It was a few high families and the imperial house dividing rule between them. The competition among the Langya Wang, Yingchuan Yu, Qiao-state Huan and Chen-commandery Xie clans is complex enough, and ordinary people have no equal right to enter it."],
      ["這也在改寫我對魏晉風度的印象。我喜歡王羲之的書法、謝安的從容，喜歡士人看重玄學、山水和個人性情。這種文化上的自由，卻和門第制度提供的教育與社會地位分不開。一個人能從容談精神獨立，部分原因可能正是他不必像普通人那樣，為了得到社會承認從頭證明自己的資格。",
       "This also redraws my picture of the Wei-Jin spirit. I like Wang Xizhi’s calligraphy and Xie An’s composure, and the way the scholars prize metaphysical talk, landscape and individual temperament. Yet that cultural freedom cannot be separated from the education and social standing the clan system provides. A man can talk calmly about spiritual independence partly because he does not have to prove his qualifications from scratch, as ordinary people do, to win social recognition."],
      ["就寫作來看，這本書最可貴的地方，是田餘慶幾乎拒絕了傳統歷史敘事裡最容易讓人滿足的部分。他不願只講王敦多跋扈、桓溫多有野心、謝安如何臨危不亂，一直追問這些人為什麼能待在各自的位置，權力從哪裡來，又受到什麼限制。讀他的書有時像在拆一座老建築，最華麗的裝飾先被移開，藏在後面的梁柱和支撐結構才慢慢露出來。",
       "As historical writing, what is most valuable here is that Tian Yuqing nearly refuses the most easily satisfying parts of traditional narrative. He will not just tell how overbearing Wang Dun was, how ambitious Huan Wen was, how unruffled Xie An was in danger. He keeps asking why these men could hold their positions, where their power came from, and what limited it. Reading him is sometimes like taking an old building apart: the most gorgeous decorations are moved aside first, and the beams and supports behind them slowly come into view."],
      ["想給這一頁記下一句總結：東晉最有意思的矛盾，在於皇帝和士族各自握著對方不容易取代的東西，這個時代的政治就在互相依賴、互相提防、又始終擺脫不掉對方的關係裡展開。合上書，腦子裡還是322年王敦進建康的畫面，一個能打敗皇帝的人，仍要以皇帝的臣子自居。半個世紀後桓溫能廢立皇帝，同樣沒有篡位。直到東晉末年，門閥結構衰落、軍事力量重新組合，劉裕才結束了司馬氏的統治。",
       "One line to put down as a summary: the most interesting contradiction of the Eastern Jin is that emperor and clans each hold something the other cannot easily replace, and the politics of the age plays out in a relationship of mutual dependence and mutual wariness that neither can shake off. I close the book, and what stays in my head is still the scene of 322, Wang Dun entering Jiankang, a man who could already defeat the emperor still presenting himself as the emperor’s subject. Half a century later Huan Wen can depose and install emperors, and likewise does not usurp. Only at the end of the Eastern Jin, once the clan structure has declined and military forces have recombined, does Liu Yu end Sima rule."]
    ]
  },
  {
    "date": "2025-07-22",
    "title": "We All Came to California, but Reached Two Americas",
    "slug": "two-americas",
    "category": "Novel",
    "book": {
      "cover": "grapes_of_wrath.jpg",
      "title": "The Grapes of Wrath",
      "author": "John Steinbeck",
      "language": "English",
      "country": "United States",
      "original": "English",
      "lines": [
        "Novel · English original, first published 1939",
        "Dispossessed Oklahoma farmers, the Joad family, travel Route 66 to California in search of work and find hunger and exploitation."
      ]
    },
    "place": "于加州蒙特雷\nMonterey, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      ["亲爱的斯坦贝克先生：",
       "Dear Mr. Steinbeck,"],
      ["2025年7月，我在蒙特雷读您的《愤怒的葡萄》。萨利纳斯谷离这里不远，您就是在那里长大的。沿公路往北，是我工作的硅谷；往东，是加州大片的农田。",
       "In July 2025 I read *The Grapes of Wrath* in Monterey. The Salinas Valley, where you grew up, is not far from here. The highway north leads back to Silicon Valley, where I work; to the east lie California’s vast farmlands."],
      ["读到一半，我想起一个让人不太舒服的事实：1930年代，乔德一家为了活下去来到加州；将近九十年后，我为了过上更好的生活，也来到这里。我们都相信加州意味着机会，可我们手里的选择，从一开始就完全不同。",
       "Partway through, I thought of an uncomfortable fact. In the 1930s the Joads came to California to stay alive; nearly ninety years later I came here too, to live a better life. We both believed California meant opportunity, and the choices in our hands were entirely different from the start."],
      ["乔德一家离开俄克拉荷马，是因为土地已经养不活他们。银行收回土地，拖拉机推倒房屋，他们没有决定去找更好的生活，只是失去了留下来的可能。我是自己走的。十多年前，我从中国去西雅图留学。那个熟悉的国家并没有容不下我，我只是相信美国的大学、职业市场和社会环境能给我更多机会。我可以申请学校，选专业，规划未来。哪怕前途不确定，我也有一样乔德一家没有的自由：选择想去的地方。",
       "The Joads left Oklahoma because the land could no longer feed them. The bank took the land and the tractors knocked down the houses; they never decided to look for a better life, they simply lost the chance to stay. I left of my own accord. More than ten years ago I went from China to study in Seattle. The familiar country I left still had room for me; I simply believed that American universities, the job market and the social environment could give me more. I could apply to schools, choose a major, plan a future. Even with the uncertainty, I had a freedom the Joads lacked: choosing where to go."],
      ["他们一家挤在破旧的卡车上，沿66号公路穿过荒漠。我提着行李，坐飞机飞过太平洋。他们担心车会不会半路抛锚，老人能不能撑到加州，到了有没有活干。我担心的是英语跟不跟得上课堂，成绩够不够好，毕业后找不找得到理想的工作。这些担忧都是真的，可它们不在同一种生存境地里。",
       "They crowded the family onto a battered truck and crossed the desert on Route 66. I carried my luggage and flew over the Pacific. They worried whether the car would break down, whether the old would last to California, whether there would be work on arrival. I worried whether my English would keep up in class, whether my grades were good enough, whether I would find the job I wanted after graduating. All of these worries were real, but they did not belong to the same condition of survival."],
      ["后来我从西雅图搬到加州，进了硅谷的科技行业。如今是2025年，我有了稳定的职业，也慢慢搭起自己的生活。要是把我的经历写成一篇美国梦的故事，很容易给它一个让人满意的结局。您的小说让我看到，这个梦最不公平的地方，在于有些人从一开始就比别人多握着许多实现它的条件。",
       "Later I moved from Seattle to California and entered Silicon Valley’s tech industry. Now, in 2025, I have a stable career and have slowly built a life of my own. If my story were written as an American dream, it would be easy to give it a satisfying ending. Your novel shows me that the most unfair thing about that dream is how some people start out holding far more of the conditions for achieving it than others."],
      ["我格外在意乔德一家抵达加州之后的失望。他们原以为这里到处有活，果园里的水果摘不完，只要肯干就不会挨饿。可成千上万的流民一起涌进来，农场主就有了压低工资的本事。劳动者越急着要活干，劳动就越不值钱。",
       "I care most about the Joads’ disappointment after they arrive. They had thought work would be everywhere, the orchards full of fruit that could never all be picked, and that anyone willing to labor would not go hungry. But tens of thousands of migrants poured in together, and the growers gained the power to push wages down. The more desperately the laborers needed work, the less their labor was worth."],
      ["我想到自己在硅谷的处境。我进的是一个争抢技术人才的市场，工程能力、教育背景和专业经验，能换来更高的薪酬和更多选择。公司需要人才，劳动者多少有些议价的底气。乔德一家正相反。他们一样肯干，可随时有人能顶替，连糊口的工资都争不到。",
       "It made me think of my own position in Silicon Valley. I entered a market that competes for technical talent, where engineering ability, education and professional experience turn into higher pay and more options. Companies need talent, so workers have some bargaining power. The Joads were the opposite. They were just as willing to work, but anyone could replace them at any time, and they could not even fight for a wage to live on."],
      ["过去我很容易把这种差别看成教育和技能的回报。读了您的书，我开始问：一个人的劳动对社会同样不可缺少，他得到的尊严，为什么这么依赖他在市场上稀不稀缺？加州需要软件工程师，也需要摘水果的人。我们住在同一片土地上，却可能从没走进过彼此的世界。",
       "I used to read this difference as the return on education and skill. Your book made me start asking why, if a person’s labor is equally indispensable to society, the dignity he receives depends so much on whether he is scarce in the market. California needs software engineers, and it needs people who pick fruit. We live on the same land and may never have entered each other’s worlds."],
      ["在硅谷，我每天面对人工智能、工程技术和未来的种种可能。我们谈效率、创新、生产力，好像技术进步本身就等于社会在变好。可从蒙特雷往内陆走，经过萨利纳斯谷的农田，我又会想起您笔下为了几美分工资抢活干的人。今天的农业当然早不是1930年代的样子，这个地理上的对照还是让我不安：同一个地方，既有世界上最先进的技术产业，也有靠低工资劳动撑着的农业体系。",
       "In Silicon Valley I deal every day with artificial intelligence, engineering and the many possibilities of the future. We talk about efficiency, innovation and productivity, as if technological progress by itself meant society was getting better. But when I drive inland from Monterey, past the farmland of the Salinas Valley, I think of your people fighting for work at a few cents’ wage. Farming today is of course nothing like the 1930s, yet the geographical contrast still troubles me: one place holds both the most advanced technology industry in the world and a farming system kept going by low-wage labor."],
      ["书里最让我忘不掉的，是农产品在饥饿的人面前被毁掉的场景。土地不贫瘠，人也不是不肯干活。麻烦就在这里：食物存在，并不等于饥饿的人有权得到它。您写的是经济制度造出来的荒诞：丰收和饥饿可以同时发生。",
       "What I cannot forget in the book is the scene of produce being destroyed in front of hungry people. The land is not barren, and the people are not unwilling to work. The trouble is exactly here: the existence of food does not give the hungry a right to it. What you write is an absurdity produced by an economic system, where abundance and hunger can arrive together."],
      ["我也在重新看书里的银行和土地所有者。做留学生时，我主要从劳动者的角度理解美国：靠教育得到技能，再靠工作改善生活。如今我有了房产和股票，开始站在资产所有者的角度考虑收益、风险和长期规划。所以我没法轻易把书里的经济关系分成善良的穷人和邪恶的富人。许多单看都合理的个人决定，加在一起，会产生极不合理的社会后果。但我想，您关心的不是怎样让每个人都成为成功的投资者，而是市场不再需要一个人的时候，他是否还应当有活下去的尊严。",
       "I am also looking again at the banks and landowners in the book. As a student I understood America mainly as a laborer: gain skills through education, then improve my life through work. Now I own property and stocks, and I have begun to weigh returns, risk and long-term plans as an owner of assets. So I cannot easily sort the novel’s economic relations into good poor and evil rich. Many decisions that look reasonable one at a time add up to deeply unreasonable social results. But what you care about, I think, is not how to make everyone a successful investor, but whether a person still deserves the dignity of survival once the market no longer needs him."],
      ["小说后半部分，乔德一家的变化最让我感动。起初他们只想保住自己的家。随着土地、住所和亲人一个个失去，马·乔德开始把陌生人的苦难当成自己的事，汤姆也慢慢明白，个人的困境光靠个人奋斗解决不了。这和我的美国经历形成另一种对照。我来美国，是为了得到更多个人选择；乔德一家来到加州，却渐渐发现，只有和别人联合，才可能重新有选择。我追求的是独立，他们最后找到的是相互依赖。您好像在提醒我，一个社会不能只靠那些有能力独立生活的人来定义自由。",
       "The Joads’ change in the second half moves me most. At first they only want to keep their own family together. As land, shelter and relatives are lost one after another, Ma Joad begins to treat strangers’ suffering as her own concern, and Tom slowly understands that individual hardship cannot be solved by individual effort alone. This sets up another contrast with my life in America. I came to gain more personal choices; the Joads came to California and gradually found that only by joining with others could they have any choice again. I sought independence, and what they found in the end was interdependence. You seem to remind me that a society cannot define freedom only by those able to live independently."],
      ["结尾，罗莎莎用乳汁喂一个快要饿死的陌生男人。这一幕让人不安，整部小说却一下子越过了对贫困、迁徙和经济制度的讨论。乔德一家几乎失去了所有财产，仍能给一个陌生人某种维持生命的东西。在一个总用价格衡量土地、劳动和人的世界里，您最后选了一次没法被市场定价的给予。",
       "At the end, Rose of Sharon feeds a starving stranger with her own milk. The scene is unsettling, and it lifts the whole novel at once beyond any talk of poverty, migration and economic systems. The Joads have lost nearly everything they owned, and they can still give a stranger something that keeps him alive. In a world that keeps measuring land, labor and people by price, you chose in the end a gift no market can price."],
      ["我想，这也是为什么您没有让乔德一家找到工作、买下土地、重新成功。那样的结局，只会让它成为另一篇美国梦的故事。您追问的，是那些没有成功的人，是否仍然值得被这个社会接纳。我越来越觉得，您最了不起的地方，是没有让那些抵达成功的人，替仍然流离失所的人讲述美国梦。",
       "I think this is also why you did not let the Joads find work, buy land and succeed again. That ending would only have made the book another American dream story. What you ask is whether those who have not succeeded still deserve to be accepted by this society. More and more I feel that the most remarkable thing about you is that you did not let those who arrived at success tell the American dream on behalf of those still displaced."],
      ["我确实抵达了当年想象中的美国，乔德一家也抵达了他们想象中的加州。我的旅程，是从拥有选择走向拥有更多选择；他们的旅程，从失去选择开始，最后不得不重新去找作为人的尊严。我们走向同一片土地，经历的却是两个截然不同的美国。",
       "I did reach the America I once imagined, and the Joads reached the California they imagined. My journey went from having choices to having more choices; theirs began with losing choice and ended in having to search anew for human dignity. We walked toward the same land and lived through two entirely different Americas."],
      ["2025年夏天，我坐在蒙特雷的海边，想到自己从一个跨越太平洋的留学生，逐渐成为加州科技经济的受益者。信就写到这里。\n\n您的读者 Haotian",
       "In the summer of 2025 I am sitting by the sea in Monterey, thinking of how I went from an international student crossing the Pacific to a beneficiary of California’s tech economy. I will stop the letter here.\n\nYour reader,\nHaotian"]
    ]
  },
  {
    "date": "2024-10-09",
    "title": "Ten Visits, Never the Same Kyoto",
    "slug": "ten-visits-never-the-same-kyoto",
    "category": "History",
    "book": {
      "cover": "kyoto_hayashiya.jpg",
      "title": "京都 (Kyoto)",
      "author": "林屋辰三郎 Hayashiya Tatsusaburō",
      "language": "Japanese",
      "country": "Japan",
      "original": "Japanese",
      "lines": [
        "History · Japanese original, Heibonsha, Rekishi to Bunka vol. 1: Politics and Commerce",
        "Kyoto’s history from the founding of Heian-kyō in 794 through war, townspeople and trade, as the stage of changing politics, religion and city life."
      ]
    },
    "place": "于日本京都\nKyoto, Japan",
    "languages": ["Chinese", "English"],
    "prose": [
      ["把几次京都之行的照片摊在一起，大多是相似的画面：寺院的屋檐，庭园里的石径，一条被行人踩得发亮的街道。单看这些照片，很难分出哪一张拍于哪一年。",
       "Spread the photographs from several trips to Kyoto side by side and most of them look alike: a temple roof, a stone path through a garden, a street worn bright by footsteps. Looking at them alone, it is hard to tell which year each was taken."],
      ["我前前后后去过京都不下十次。",
       "I have been to Kyoto no fewer than ten times, on and off."],
      ["第一次是学生时代。寺院、庭园、街道，以及那些在书本和照片里见过的日本传统文化，都隔着一层陌生而迷人的距离。那时的京都，是一座值得参观的古都，我关心的是它有什么可看。",
       "The first time was in my student days. The temples, gardens, streets, and the Japanese tradition I had seen in books and photographs all sat behind a strange and enchanting distance. Kyoto was an ancient capital worth visiting, and what I cared about was what it had to show."],
      ["第二次，我已经开始工作。城市似乎没有太大的变化，走在同样的街上，我却在想自己能在这里过上怎样的生活。后来，我先后带父母和妻子来到这里。再后来，我在京都买下一套投资房产，此后又陆陆续续去了好几次。那时的京都，不再是旅行结束就能轻易离开的地方。",
       "By the second visit I had begun working. The city did not seem to have changed much, yet walking the same streets I found myself wondering what kind of life I could have here. Later I brought my parents, and then my wife. Later still I bought an investment property in Kyoto and went several more times, here and there. By then Kyoto was no longer a place one could simply leave when the trip ended."],
      ["带父母和妻子同行的几次，旅行变了模样。从前是我一个人探索陌生的世界，现在是带着家人重访一座自己熟悉的城市。我希望他们看见当年吸引我的地方，却渐渐发现，站在同一处景观前，父母、妻子和我看到的并不相同。每个人都在形成自己的京都。",
       "The trips with my parents and my wife changed the shape of travel. Once I had explored an unfamiliar world alone; now I was bringing family back to a city I knew. I hoped they would see what had drawn me, and gradually found that standing before the same landscape, my parents, my wife and I saw different things. Each of us was forming a Kyoto of our own."],
      ["这样的场景，让我读林屋辰三郎的《京都》时格外留意一件事：城市的面貌会变，看城市的人也会变。",
       "Scenes like these made me notice one thing while reading Hayashiya Tatsusaburō’s *Kyoto*: a city’s face changes, and so do the people who look at it."],
      ["公元794年，桓武天皇迁都平安京。城市借鉴中国都城的规划，朱雀大路笔直地贯穿中轴，宫城坐落在北部，整齐的空间秩序里写着律令国家的政治理想。",
       "In 794, Emperor Kanmu moved the capital to Heian-kyō. The city drew on the planning of Chinese capitals: Suzaku Avenue ran straight along the central axis, the palace sat in the north, and the political ideals of the *ritsuryō* state were written into an orderly arrangement of space."],
      ["可是图纸很快就被生活改写。右京逐渐衰落，城市的活动向左京聚拢，寺院、贵族宅邸与市场按照实际需要，一点点移动自己的位置。京都从来没有停留在它被设计出来的样子。",
       "But life soon rewrote the drawing. The Right Capital declined, activity gathered in the Left Capital, and temples, aristocratic mansions and markets shifted their positions bit by bit according to need. Kyoto never stayed as it was designed."],
      ["这一点尤其吸引我。我们习惯把京都看作日本传统的象征，容易忘记它起初是一次大规模的制度创新，借来的是中国大陆的城市规划与政治文化。后来，独特的日本审美、文学与社会生活，就在这些外来的形式里慢慢长了出来。",
       "This especially draws me. We are used to seeing Kyoto as a symbol of Japanese tradition, and easily forget that it began as a large-scale institutional innovation, borrowing the urban planning and political culture of the Chinese mainland. Then, within those foreign forms, a distinctive Japanese aesthetic, literature and social life slowly grew."],
      ["我从中国去美国留学、工作，长期生活在不同的文化之间，对这种生长格外有感触。文化身份未必要始终保持原样。京都能从外来的制度里造出自己的传统，一个人也可以在不同的社会之间不断吸收新的经验，同时不失去与过去的联系。",
       "I went from China to study and work in the United States and have long lived between cultures, so this growth speaks to me. Cultural identity need not stay as it was. Kyoto could make its own tradition out of foreign institutions, and a person can keep absorbing new experience among different societies without losing the connection to the past."],
      ["游客眼里的京都安静得多。老街、传统建筑、缓慢的节奏，像一幅摊开的画。但书里的京都吵闹、动荡，也不总是体面。",
       "The Kyoto in a visitor’s eyes is much quieter: old streets, traditional buildings, a slow rhythm, like a painting unrolled. The Kyoto in the book is noisy and turbulent, and not always dignified."],
      ["平安时代的贵族文化留下了《源氏物语》、和歌和精致的宫廷审美，而它的底下是藤原氏的摄关政治和森严的等级。十二世纪末，镰仓幕府建立，京都不再独占全国的政治权力。1467年应仁之乱爆发，战火延续十余年，大片城区被毁。今天看上去象征永恒的寺院、街道与建筑，许多都经历过损毁、重建与重新解释。",
       "The aristocratic culture of the Heian period left *The Tale of Genji*, *waka* poetry and a refined court aesthetic, and beneath it lay the regency politics of the Fujiwara and a rigid hierarchy. At the end of the twelfth century the Kamakura shogunate was founded, and Kyoto no longer monopolized national political power. In 1467 the Ōnin War broke out and burned for more than ten years, destroying large parts of the city. Many of the temples, streets and buildings that now look like symbols of permanence went through destruction, rebuilding and reinterpretation."],
      ["回头想自己的几次重访，也是同一回事。有些景象始终熟悉，我与它们的关系却在不知不觉中变了。学生时代的我，刚开始工作的我，陪着父母的我，后来在京都有了房产的我，站在不同的处境里，面对的是同一个地方。",
       "My own return visits are the same story. Some sights stay familiar, yet my relationship to them changed without my noticing. The student, the newly employed me, the me walking with my parents, and the me who later owned property in Kyoto stood in different situations and faced the same place."],
      ["这也改变了我对文化传承的想象。我们总以为传承是把某样东西完整地交给下一代，生活里的传承更像一次又一次的重新认识。城市没有要求所有人接受同一种解释，它只是留出一块地方，容得下这些不同的经验。",
       "It also changed how I picture the passing down of culture. We tend to think of transmission as handing something whole to the next generation, but in life it is closer to recognizing it again and again. The city does not demand that everyone accept one interpretation. It simply leaves room that can hold these different experiences."],
      ["林屋辰三郎笔下的京都就是这样。它先是天皇与贵族的都城，后来成了武家政治、寺社势力和城市居民一起登场的舞台。中世社会向前走，商人、手工业者与町众也逐渐参与到文化的创造中。祇园祭是一场宗教活动，也牵连着町众的组织、财富与地方认同。",
       "The Kyoto in Hayashiya’s pages is like that. It was first the capital of emperor and aristocrats, and later a stage where warrior government, temple and shrine powers, and city dwellers appeared together. As medieval society moved on, merchants, artisans and the *machishū* townspeople gradually took part in making its culture. The Gion Festival was a religious event, and it was tied as well to the organization, wealth and local identity of the townspeople."],
      ["京都的文化因此不是某个时代一次造好的。不同阶层的人不断走进这座城市，也不断改变它的意思。",
       "Kyoto’s culture was therefore never finished in a single age. People of different classes kept walking into the city and kept changing what it meant."],
      ["在京都买下投资房产之后，我又换了一副眼睛。从前我是旅行者，把老街、传统建筑和缓慢的生活节奏当作风景来享受。成为投资者，我得去想完全不同的问题：房产的长期价值，租赁需求，维护成本，当地经济，人口与旅游可能带来的变化。",
       "Buying the investment property gave me another pair of eyes. I used to be a traveler, enjoying old streets, traditional buildings and a slow rhythm of life as scenery. As an investor I had to think about entirely different things: the property’s long-term value, rental demand, maintenance costs, the local economy, and the changes that population and tourism might bring."],
      ["我依然喜欢京都的历史文化，也开始明白，一座城市不能只靠游客的欣赏活下去。寺院要维护，町屋要修缮，居民要工作和住房，传统工艺也得面对现实的经济条件。",
       "I still love Kyoto’s history and culture, and I began to see that a city cannot live on visitors’ admiration alone. Temples need upkeep, *machiya* townhouses need repair, residents need work and housing, and traditional crafts must face real economic conditions."],
      ["我曾以为京都和硅谷代表两种截然相反的价值：硅谷追逐创新、增长与效率，京都珍惜历史、传统与延续。有了京都的房产，我不愿再这样简单地分。传统同样需要经济活动来支撑。历史建筑的保护可能与现代开发冲突，旅游创造收入，也可能改变居民的日常。文化遗产无法脱离市场与社会关系独自存在，它需要持续的投入，也免不了利益如何分配的问题。",
       "I used to think Kyoto and Silicon Valley stood for two opposite values: Silicon Valley chasing innovation, growth and efficiency, Kyoto cherishing history, tradition and continuity. Once I owned property in Kyoto, I no longer wanted to divide them so simply. Tradition needs economic activity to sustain it too. Preserving historic buildings may collide with modern development, and tourism brings income and may also change residents’ daily lives. Cultural heritage cannot exist apart from markets and social relations. It needs continuous investment, and it cannot avoid the question of how interests are shared out."],
      ["在美国的工作和投资，让我习惯用效率、风险和长期回报来判断事情。京都提醒我，经济价值和文化价值时常互相影响，却不能画上等号。一套房产可以算出租金收益，一座寺院可以估出维护费用，一条传统商业街可以量出游客带来的收入。这些数字解释不了人们为什么愿意一再来到这里，为什么某些建筑值得一代又一代人修复，为什么一场延续数百年的祭典能成为城市身份的一部分。",
       "My work and investing in the United States have trained me to judge by efficiency, risk and long-term return. Kyoto reminded me that economic value and cultural value, though they often affect each other, cannot be set equal. A property’s rental yield can be calculated, a temple’s maintenance cost estimated, a traditional shopping street’s visitor income measured. These numbers cannot explain why people keep coming back, why certain buildings are worth restoring generation after generation, or why a festival that has lasted for centuries becomes part of a city’s identity."],
      ["我也提防着自己把京都浪漫化。拥有一套投资房产，不等于了解京都居民的日常。我的工作与主要生活仍在美国，可以从外面欣赏它的历史，经济条件允许时选择前往；长期住在京都的人，要面对当地的就业、住房、人口变化与旅游带来的压力。旅行者眼中的文化价值，未必总与居民的现实利益一致。我自己也成了这座城市经济关系的一部分，不再是毫无牵连的旁观者。",
       "I am also wary of romanticizing Kyoto. Owning an investment property does not mean I understand the daily life of its residents. My work and main life are still in the United States; I can appreciate its history from outside and choose to go when means allow, while those who live in Kyoto long-term must face local employment, housing, demographic change and the pressure of tourism. The cultural value in a traveler’s eyes does not always match residents’ real interests. I have myself become part of the city’s economic relations, no longer an onlooker with no stake."],
      ["所以我欣赏林屋辰三郎的历史视角。他没有把京都只写成名胜古迹组成的风景，而是把它放回政治权力、宗教组织、社会阶层与经济活动的变化里。平安的贵族、室町的武士、町众，以及近现代的市民，各自造出不同的京都。今天被称作传统的东西，常常是这些历史变化一层层沉积下来的结果。",
       "This is why I appreciate Hayashiya’s historical perspective. He does not write Kyoto as a landscape of famous sites alone; he puts it back into the changes of political power, religious organization, social classes and economic activity. The Heian aristocrats, the Muromachi warriors, the townspeople and the modern citizens each made a different Kyoto. What is called tradition today is often the result of these historical changes settling layer upon layer."],
      ["以京都为中心来理解日本历史，也有可能带来文化上的偏见。京都长期被看作日本古典文化的代表，而日本的历史不只有贵族文学、佛教寺院与传统工艺。江户的商业社会、地方的农村，以及其他地区的历史，同样构成了日本文化。京都的重要，不该让它成为衡量一切日本文化的唯一尺度。",
       "Understanding Japanese history with Kyoto at its center can also breed a cultural bias. Kyoto has long stood for Japanese classical culture, but Japanese history holds more than aristocratic literature, Buddhist temples and traditional crafts. The commercial society of Edo, rural villages and the histories of other regions make up Japanese culture just as much. Kyoto’s importance should not make it the one yardstick for all of it."],
      ["合上书，我觉得自己一次次去京都，和这座城市的历史之间有一种呼应。平安京、贵族之都、战乱中的京都、町众的京都、今天的文化与旅游之城，并不是彼此全然不同的地方。它们在同一片土地上叠加，后来的人总是在前人留下的空间里重新安排自己的生活。",
       "Closing the book, I felt an echo between my repeated trips and the city’s history. Heian-kyō, the aristocrats’ capital, Kyoto in the wars, the townspeople’s Kyoto, and today’s city of culture and tourism are not entirely different places. They pile up on the same land, and those who come later always rearrange their lives within the space the earlier ones left."],
      ["我的京都也是如此。学生时代的京都没有因为我开始工作而消失，与父母、妻子同行的记忆，也没有盖过当初独自认识这座城市时的好奇。后来买下的房产，让我与京都有了新的经济联系，没有抹去它作为文化与情感空间的意义。每一次重访，都会唤回过去的一段经历，再给这座城市添上新的记忆。",
       "My Kyoto is the same. The Kyoto of my student days did not vanish because I began working; the memories of traveling with my parents and my wife did not cover the curiosity of first getting to know the city alone. The property I bought later gave me a new economic tie to Kyoto and did not erase its meaning as a cultural and emotional space. Each return calls back a stretch of the past and adds new memories to the city."],
      ["我不知道以后还会去京都多少次，也不知道和它的关系还会怎样变化。我已经不再期待找到一个最真实、最原初的京都。",
       "I do not know how many more times I will go to Kyoto, or how my relationship with it will change. I no longer expect to find the most authentic, most original Kyoto."],
      ["它值得一再回去，因为它容许不同时代的人，把各自的生活留在同一座城市里。那些我反复走过的街道，早已不只属于日本的历史，也慢慢成了我自己人生的年轮。",
       "It is worth going back to because it lets people of different ages leave their lives in the same city. The streets I have walked again and again no longer belong to Japanese history alone; they have slowly become the growth rings of my own life."]
    ]
  }
];
