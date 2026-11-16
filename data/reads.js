// EDIT ME: your reads, newest first (the page sorts by date anyway). Book reviews and reader responses; your own stories and words go in notes.js.
// Same fields as a note: date, title, slug, category (the genre of the book, shown above the title in the pop-up: Novel, Memoir, History, Poetry...), place, languages, prose: [[original paragraph, translation], ...] (or blocks / poem / stanzas / body), photo, video.
// book: { cover: "file.jpg" (in assets/photos/), title, author, lines: ["detail", ...] } is the book the response is about; the cover is what the Reads page shows.
// sameAs: "other-slug" makes a read share another read's title and text (one response to two books); give it its own date, slug, book and place.
// slug: optional short link name (needed when the title isn't plain English letters).
window.READS = [
  {
    "date": "2025-09-11",
    "title": "Heirs to the California Dream",
    "category": "Novel",
    "book": {
      "cover": "run_river.jpg",
      "title": "Run River",
      "author": "Joan Didion",
      "language": "English",
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
      [
        "Didion 的加州从来不只是一个地理空间，而是一部不断更新的美国精英自我神话史。",
        "Didion’s California was never only a geographic space, but a constantly updated history of the self-mythology of America’s elite."
      ],
      [
        "在《Run River》中，萨克拉门托河谷的旧式地主家族将土地、血统与家族记忆视为自身优越性的证明。他们怀念一个逐渐消失的加州，却很少意识到，所谓美好的过去，不过是自身特权尚未受到挑战的时代。Didion 所描绘的，不仅是一个家族的衰败，更是一个阶级如何将自身的历史误认为整个社会的历史。",
        "In *Run River*, an old landowning family of the Sacramento Valley treats land, bloodline and family memory as proof of its own superiority. They long for a vanishing California, yet rarely realize that the so-called beautiful past was simply an era in which their privilege had not yet been challenged. What Didion portrays is not only the decline of one family but how a class mistakes its own history for the history of the whole society."
      ],
      [
        "六十多年后，在同一片加州土地上，新的精英早已取代旧的地主。土地与血统让位于算法、资本和技术创新，家族荣耀变成了创业传奇，而曾经关于西部开拓与无限机会的美国梦，如今则被重新包装为人工智能革命。",
        "More than sixty years later, on the same California land, a new elite has long since replaced the old landowners. Land and bloodline have given way to algorithms, capital and technological innovation, family glory has become the startup legend, and the American dream of western settlement and limitless opportunity is now repackaged as the AI revolution."
      ],
      [
        "两者看似截然不同，却共享着相似的精神结构：都相信自己站在历史进步的中心，都习惯将自身的成功解释为能力与远见的证明，也都倾向于将少数人的利益与想象，叙述为整个社会的共同未来。",
        "The two seem entirely different, yet they share a similar spiritual structure: both believe they stand at the center of historical progress, both are used to explaining their success as proof of ability and foresight, and both tend to narrate the interests and imaginings of a few as the common future of the whole society."
      ],
      [
        "作为今天硅谷技术浪潮的参与者，我越来越难以忽视这种相似性。我亲眼见证技术的真实进步，也参与创造这些进步，但与此同时，我也看到一个行业如何不断生产关于自身重要性的叙事。我们拥有惊人的薪酬、资本与技术资源，热衷于讨论如何重新定义人类未来，却未必同样认真地追问：我们究竟为普通人的生活创造了多少可以感知的价值？",
        "As a participant in today’s Silicon Valley technology wave, I find it harder and harder to ignore this similarity. I have witnessed real technical progress with my own eyes, and I have helped create it, but at the same time I also see how an industry keeps producing narratives about its own importance. We have astonishing pay, capital and technical resources, and we love to discuss how to redefine humanity’s future, but we do not necessarily ask with the same seriousness: how much perceptible value have we actually created for ordinary people’s lives?"
      ],
      [
        "这并不是对技术进步本身的否定，而是对技术进步被神话化的怀疑。人工智能当然具有改变社会的潜力，但潜力不等于贡献，市场估值不等于社会价值，技术上的突破也不必然意味着人类生活的改善。我们似乎越来越擅长衡量模型的能力，却越来越不愿衡量这些能力究竟服务于谁。",
        "This is not a denial of technological progress itself, but a suspicion of technological progress being made into myth. AI of course has the potential to change society, but potential is not contribution, market valuation is not social value, and a technical breakthrough does not necessarily mean an improvement in human life. We seem to be getting better and better at measuring what models can do, and less and less willing to measure whom those abilities serve."
      ],
      [
        "更令我不安的是，我并非站在这个世界之外的批评者。我也是它的受益者、参与者，甚至是它所制造的幻觉的共同生产者。我同样享受这个行业给予的物质回报，也曾相信那些关于创造力、创新和改变世界的宏大叙事。因此，对硅谷的怀疑，最终也成为对自身的审视。",
        "What troubles me more is that I am not a critic standing outside this world. I am also its beneficiary and participant, even a co-producer of the illusions it makes. I too enjoy the material rewards this industry gives, and I too once believed in those grand narratives of creativity, innovation and changing the world. So my doubt about Silicon Valley ends up becoming an examination of myself."
      ],
      [
        "这或许正是重读 Didion 最有意义的地方。她笔下的加州精英始终在讲述关于自己的故事，却很少意识到，故事之外还有一个更加复杂、更加不平等的现实。",
        "This may be exactly where rereading Didion is most meaningful. The California elites in her writing are always telling stories about themselves, yet rarely realize that beyond the story lies a more complicated, more unequal reality."
      ],
      [
        "从萨克拉门托河谷的土地贵族，到好莱坞的文化精英，再到今天硅谷的人工智能工程师，加州不断更换着梦想的语言，却始终重复着关于财富、优越性与历史使命的自我神话。",
        "From the land aristocrats of the Sacramento Valley, to the cultural elite of Hollywood, to today’s AI engineers of Silicon Valley, California keeps changing the language of its dream, yet keeps repeating the same self-mythology of wealth, superiority and historical mission."
      ],
      [
        "而这一次，我也身在其中。",
        "And this time, I am in it too."
      ]
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
      [
        "“We tell ourselves stories in order to live.”",
        ""
      ],
      [
        "Joan Didion 以这句话开篇，却在整本书中不断质疑它。1960年代末的加州，嬉皮士的自由理想、好莱坞的繁华、政治激进主义、种族与阶级冲突交织在一起。每个人都试图赋予时代某种意义，但这些宏大的叙事往往只是混乱现实之上的自我安慰。",
        "Joan Didion opens with this sentence, yet throughout the book keeps questioning it. In California in the late 1960s, the hippies’ ideal of freedom, Hollywood’s glitter, political radicalism, and conflicts of race and class were all tangled together. Everyone was trying to give the era some meaning, but these grand narratives were often only self-consolation laid over a chaotic reality."
      ],
      [
        "Didion 的敏锐，在于她既不相信美国社会制造的神话，也不完全相信自己作为观察者的判断。她以冷静、疏离而碎片化的笔触，记录一个正在失去共同现实的社会。那些彼此断裂的人物、事件与场景，并非等待被重新组织的故事，而恰恰揭示了故事本身的失效。她所描绘的美国，已经无法用进步、自由或反叛这样简单的概念加以解释。",
        "Didion’s sharpness lies in the fact that she believes neither the myths American society manufactures nor, entirely, her own judgment as an observer. In a cool, detached, fragmentary style, she records a society that is losing its shared reality. The characters, events and scenes, broken off from one another, are not stories waiting to be reorganized; they reveal precisely the failure of story itself. The America she portrays can no longer be explained by simple concepts such as progress, freedom or rebellion."
      ],
      [
        "尤其值得注意的是，她笔下的反文化运动并不天然代表真正的社会解放。许多自称反抗体制的人，依然沉迷于个人身份、精神体验与自我表达，却对更深层的阶级结构、种族不平等和社会责任缺乏真正的回应。反叛逐渐成为一种生活方式，甚至一种可供消费的文化姿态。",
        "What is especially notable is that the counterculture in her writing does not naturally stand for genuine social liberation. Many who called themselves rebels against the system remained absorbed in personal identity, spiritual experience and self-expression, with no real answer to deeper class structures, racial inequality and social responsibility. Rebellion gradually became a lifestyle, even a cultural pose available for consumption."
      ],
      [
        "半个多世纪后，这种精神困境在当代美国，尤其是硅谷，呈现出惊人的相似性。",
        "More than half a century later, this spiritual predicament shows a startling resemblance in contemporary America, and especially in Silicon Valley."
      ],
      [
        "如果说 Didion 时代的好莱坞不断生产关于自由、创造力和个人成功的幻觉，那么今天的硅谷则将同样的神话包装成技术创新与人工智能革命。人人都在谈论改变世界、重新定义人类未来，却很少认真追问这些技术究竟改善了谁的生活，又为社会创造了多少真实价值。巨额资本、惊人的薪酬与持续膨胀的自我评价，构成了一套几乎自我封闭的价值体系。在这里，创造力往往由市场估值衡量，社会意义则被产品发布会、技术指标和宏大愿景所取代。",
        "If the Hollywood of Didion’s day kept producing illusions of freedom, creativity and individual success, then today’s Silicon Valley packages the same myth as technological innovation and the AI revolution. Everyone talks about changing the world and redefining humanity’s future, but few seriously ask whose lives these technologies actually improve, and how much real value they create for society. Vast capital, astonishing pay and a steadily swelling self-regard make up an almost self-enclosed system of values. Here, creativity is often measured by market valuation, and social meaning is replaced by product launches, technical metrics and grand visions."
      ],
      [
        "更讽刺的是，这些自称颠覆传统秩序的精英，往往与他们声称要改变的社会现实保持着惊人的距离。正如昔日好莱坞将个人情感包装成普遍的人类经验，今天的科技产业也倾向于将少数人的技术想象包装成全人类的共同未来。技术进步是真实的，但围绕它建立的文化神话，却未必经得起同样严格的审视。",
        "More ironic still, these elites who claim to overturn the traditional order often keep a startling distance from the social realities they say they will change. Just as the Hollywood of old packaged personal feeling as universal human experience, today’s tech industry also tends to package the technological imagination of a few as the common future of all humanity. Technological progress is real, but the cultural myths built around it may not withstand the same rigorous scrutiny."
      ],
      [
        "当然，Didion 的冷峻本身也值得质疑。她能够以如此疏离的姿态观察社会崩塌，某种程度上也源于她所处的文化与阶级位置。她看穿了反文化运动的虚伪，却未必真正走近那些被美国社会结构性排斥的人。她的怀疑主义揭示了叙事的局限，却不一定提供走出困境的可能。",
        "Of course, Didion’s coolness itself deserves questioning. That she could watch a society collapse from such a detached stance also stems, to some degree, from the cultural and class position she occupied. She saw through the hypocrisy of the counterculture, yet did not necessarily come close to the people structurally excluded by American society. Her skepticism reveals the limits of narrative, but does not necessarily offer a way out of the predicament."
      ],
      [
        "或许这正是《The White Album》留给今天最重要的问题：当一个社会越来越擅长讲述自己如何改变世界，却越来越难以证明自己真正改善了世界，我们究竟是在创造未来，还是在不断消费关于未来的幻觉？",
        "Perhaps this is exactly the most important question *The White Album* leaves us today: when a society grows ever better at telling how it changes the world and ever less able to prove that it has truly improved the world, are we creating the future, or just consuming illusions about the future?"
      ],
      [
        "Didion 写下的是1960年代美国神话的破裂，而今天的美国，似乎仍在用新的语言，讲述同一个故事。",
        "What Didion wrote down was the breaking of the American myth of the 1960s, and today’s America seems still to be telling the same story in a new language."
      ]
    ]
  },
  {
    "date": "2026-11-06",
    "title": "When Everyone Thinks They Are Changing the World",
    "category": "Novel",
    "book": {
      "cover": "play_it_as_it_lays.jpg",
      "title": "Play It as It Lays",
      "author": "Joan Didion",
      "language": "English",
      "lines": [
        "Novel · English edition",
        "Didion’s novel of Hollywood and Los Angeles, and of Maria Wyeth, who keeps driving the freeways with no destination."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": [
      "Chinese",
      "English"
    ],
    "prose": [
      [
        "读琼·狄迪恩的《Play It as It Lays》时，我不断想到今天的硅谷。",
        "Reading Joan Didion’s *Play It as It Lays*, I kept thinking of today’s Silicon Valley."
      ],
      [
        "小说描写的是好莱坞，一个充满金钱、名望与创造力的世界。这里的人们拍摄电影、参加聚会、讨论新的项目，似乎每个人都在创造某种重要的东西。然而，在这些令人羡慕的生活背后，狄迪恩呈现的却是一种令人不安的空虚：人们不断制造故事，却越来越无法理解自己的生活。",
        "The novel is set in Hollywood, a world full of money, fame and creativity. People there make films, go to parties and talk about new projects, and everyone seems to be creating something important. Behind these enviable lives, though, Didion shows an unsettling emptiness: people keep making stories while understanding their own lives less and less."
      ],
      [
        "半个世纪之后，我觉得，人工智能热潮中的硅谷正在呈现某种相似的景象。",
        "Half a century later, I think, Silicon Valley in the middle of the AI boom is showing something similar."
      ],
      [
        "今天的科技行业同样聚集了惊人的财富与人才。人们谈论颠覆、创新、改变世界，仿佛每一项技术突破都意味着人类社会即将进入一个全新的时代。薪酬、估值与资本投入不断刷新纪录，而身处其中的人，也越来越习惯于将自己的工作理解为推动文明进步的一部分。",
        "Today’s tech industry likewise gathers astonishing wealth and talent. People talk about disruption, innovation and changing the world, as if every technical breakthrough meant human society were about to enter a new era. Salaries, valuations and capital investment keep setting records, and the people inside grow more and more used to seeing their work as part of the advance of civilization."
      ],
      [
        "但我时常怀疑，这些关于进步的叙述，究竟有多少真正来自社会的需要，又有多少只是行业内部不断重复的自我肯定？",
        "But I often wonder how much of these narratives of progress truly comes from society’s needs, and how much is just self-affirmation that the industry keeps repeating to itself."
      ],
      [
        "在狄迪恩笔下，好莱坞最令人不安的地方，并不是那里的人缺乏才华，而是他们逐渐生活在一个由自己制造的意义体系之中。电影可以被拍摄，形象可以被塑造，成功可以被衡量，但这些东西未必能够回答一个更简单的问题：它们究竟让人的生活变得更好了吗？",
        "What is most unsettling about Hollywood in Didion’s pages is not that its people lack talent, but that they gradually come to live inside a system of meaning they have made themselves. Films can be shot, images can be shaped, success can be measured, but none of that necessarily answers a simpler question: did it actually make people’s lives better?"
      ],
      [
        "今天的硅谷似乎也面临同样的矛盾。",
        "Today’s Silicon Valley seems to face the same contradiction."
      ],
      [
        "我们拥有越来越精密的模型、越来越庞大的计算资源，以及越来越令人惊叹的技术演示。行业内部能够清楚地衡量性能提升、产品增长与市场价值，却未必同样清楚地衡量，这些成就究竟改善了多少普通人的实际生活。",
        "We have ever more sophisticated models, ever larger computing resources, and ever more astonishing technical demos. Inside the industry, gains in performance, product growth and market value can be measured clearly, but it is not necessarily as clear how much these achievements have improved the actual lives of ordinary people."
      ],
      [
        "我并不否认人工智能的价值，也不认为科技工作者缺乏创造力。恰恰相反，真正令我困惑的是：当如此多聪明的人投入如此巨大的努力时，为什么他们所创造的价值，有时仍然与社会最迫切的问题保持着如此遥远的距离？",
        "I do not deny the value of AI, nor do I think tech workers lack creativity. Quite the opposite: what really puzzles me is this. When so many smart people put in such enormous effort, why does the value they create sometimes remain so far from society’s most urgent problems?"
      ],
      [
        "我们可以花费大量资源，让机器更加擅长模仿人的表达，却仍然无法轻易解决住房、教育、医疗与社会不平等的问题。技术能力的增长是真实的，但它并不会自动转化为公共福祉。",
        "We can spend vast resources making machines better at imitating human expression, and still not easily solve housing, education, healthcare and social inequality. The growth in technical capability is real, but it does not automatically turn into public welfare."
      ],
      [
        "这让我想到小说中的玛丽亚·怀思。",
        "This brings me to Maria Wyeth in the novel."
      ],
      [
        "她不断驾驶汽车穿越洛杉矶的高速公路，专注于车速、车道与出口。她始终在移动，却没有明确的目的地。驾驶让她暂时不必面对那些无法回答的问题，也让她在不断行动之中获得某种秩序。",
        "She keeps driving across the freeways of Los Angeles, absorbed in speed, lanes and exits. She is always moving, yet has no clear destination. Driving lets her avoid, for a while, the questions she cannot answer, and gives her a kind of order in constant motion."
      ],
      [
        "我觉得，这个画面几乎可以成为今天硅谷的隐喻。",
        "I think this image could almost be a metaphor for today’s Silicon Valley."
      ],
      [
        "我们不断训练更大的模型，追逐更高的指标，发布更新的产品。每一步都有清楚的技术目标，每一次进步都可以得到证明。但当所有人都专注于如何开得更快时，似乎很少有人停下来追问，我们究竟要去哪里。",
        "We keep training bigger models, chasing higher benchmarks, releasing newer products. Every step has a clear technical goal, and every advance can be demonstrated. But when everyone is focused on how to drive faster, few seem to stop and ask where we are actually going."
      ],
      [
        "玛丽亚的问题不是她不会驾驶，而是驾驶本身逐渐取代了目的地。",
        "Maria’s problem is not that she cannot drive, but that the driving itself has gradually replaced the destination."
      ],
      [
        "而硅谷的危险，或许也不是缺乏创新，而是创新本身逐渐取代了创新原本应该服务的目标。",
        "And the danger for Silicon Valley may likewise not be a lack of innovation, but that innovation itself has gradually replaced the goal it was supposed to serve."
      ],
      [
        "当然，技术行业与好莱坞并不完全相同。人工智能确实可能带来广泛的生产力提升，也可能改善医疗、科研与教育。但可能性并不等于已经实现的社会价值。一个行业对未来的承诺，也不能自动成为它在当下获得财富、地位与资源的正当理由。",
        "Of course, the tech industry is not quite the same as Hollywood. AI may indeed bring broad gains in productivity, and may improve healthcare, research and education. But possibility is not the same as social value already realized. An industry’s promises about the future cannot automatically justify the wealth, status and resources it takes in the present."
      ],
      [
        "尤其令我不安的是，当一个行业拥有极高的薪酬与社会声望时，身处其中的人很容易将这些外部奖励理解为自身贡献的证明。",
        "What troubles me especially is that when an industry enjoys very high pay and social prestige, the people inside it can easily take these external rewards as proof of their own contribution."
      ],
      [
        "然而，市场愿意支付多少，与一个人真正为社会创造多少价值，从来不是同一个问题。",
        "Yet how much the market is willing to pay and how much value a person actually creates for society have never been the same question."
      ],
      [
        "好莱坞通过票房、明星与影像制造成功的象征；硅谷则通过估值、算力与技术指标制造进步的象征。两者的成就未必虚假，但它们都可能让行业内部的评价体系，逐渐取代对外部世界的真实关切。",
        "Hollywood makes its symbols of success from box office, stars and images; Silicon Valley makes its symbols of progress from valuations, compute and technical benchmarks. The achievements of both are not necessarily false, but both can let the industry’s internal system of evaluation gradually replace real concern for the world outside."
      ],
      [
        "这也是为什么我觉得，狄迪恩的小说并没有因为时代变化而失去锋芒。",
        "This is also why I think Didion’s novel has not lost its edge as times have changed."
      ],
      [
        "她所描写的，不只是好莱坞的空虚，而是一种更普遍的现代处境：当人们拥有越来越多创造、选择与行动的能力时，却未必因此更加清楚这些能力应该用于什么。",
        "What she describes is not only Hollywood’s emptiness but a more general modern condition: as people gain more and more capacity to create, choose and act, they do not necessarily become any clearer about what that capacity is for."
      ],
      [
        "小说结尾，玛丽亚没有获得一个能够解释自己人生的答案。她仍然必须面对生活本身，而不是生活应该呈现出的样子。",
        "At the end of the novel, Maria does not get an answer that explains her life. She still has to face life itself, not the way life is supposed to look."
      ],
      [
        "我想，今天的硅谷或许也需要这样的时刻。",
        "I think today’s Silicon Valley may need such a moment too."
      ],
      [
        "不是再一次宣布我们将如何改变世界，而是暂时放下那些关于未来的宏大叙事，认真看看已经被我们改变的世界，以及那些始终没有被触及的人。",
        "Not another announcement of how we will change the world, but a pause in the grand narratives about the future, and a serious look at the world we have already changed, and at the people who have never been reached."
      ],
      [
        "读完小说，我最难忘的仍然是玛丽亚独自驾驶的画面。洛杉矶的高速公路不断向前延伸，她熟练地变换车道，汽车始终保持着速度。",
        "After finishing the novel, what I remember most is still the image of Maria driving alone. The freeways of Los Angeles stretch on and on, she changes lanes with practiced ease, and the car never loses speed."
      ],
      [
        "但道路不会因为我们开得足够快，就自动通向一个值得抵达的地方。",
        "But a road does not automatically lead somewhere worth reaching just because we drive fast enough."
      ],
      [
        "或许，我们这个时代最需要警惕的，并不是技术停止进步，而是当所有人都沉醉于进步的速度时，已经没有人认真追问，进步究竟是为了谁。",
        "Perhaps what our age most needs to guard against is not technology ceasing to advance, but that, while everyone is intoxicated by the speed of progress, no one is seriously asking who the progress is for."
      ]
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
    "prose": [
      [
        "琼·狄迪恩一生都在观察美国。她观察加利福尼亚的繁荣神话、政治语言背后的权力，以及人们如何通过讲述故事，让充满矛盾的现实显得合理。但面对《Joan Didion: What She Means》，我最感兴趣的却是一个反过来的问题：当一个终生拆解社会神话的作家，自己也成为被观看、被解释的对象时，我们是否也应该用她的方法，重新审视她留给我们的形象？",
        "Joan Didion spent her life observing America. She observed California’s myth of prosperity, the power behind political language, and the way people tell stories to make a contradictory reality seem reasonable. But reading *Joan Didion: What She Means*, what interests me most is a question that runs the other way: when a writer who spent her life taking social myths apart herself becomes the one who is looked at and interpreted, shouldn’t we use her method to re-examine the image she has left us?"
      ],
      [
        "这本由希尔顿·阿尔斯策划的同名展览衍生出的图录，通过摄影、艺术作品与档案材料，将狄迪恩的写作放回她所经历的美国文化之中。但我觉得，这种形式最有意思的地方，恰恰在于它改变了狄迪恩的位置。过去，她是观察者，决定如何描写别人；如今，她成为被观察的人，由别人决定哪些照片、文字与经历能够代表她。",
        "This catalogue, which grew out of the exhibition of the same name curated by Hilton Als, uses photographs, artworks and archival material to set Didion’s writing back into the American culture she lived through. But what I find most interesting about the form is precisely that it changes Didion’s position. In the past she was the observer, deciding how to describe other people; now she is the one being observed, and others decide which photographs, words and experiences can stand for her."
      ],
      [
        "这种转变让我想到《我从哪里来》。",
        "This shift reminded me of *Where I Was From*."
      ],
      [
        "在那本书中，狄迪恩重新审视自己成长于其中的加利福尼亚。她曾经继承关于西部开拓、个人独立与家族奋斗的故事，却逐渐发现，这些看似自然的价值观，掩盖了土地、资本、政府政策与历史机遇之间复杂的关系。",
        "In that book, Didion re-examines the California she grew up in. She had inherited stories of western settlement, individual independence and family struggle, only to find gradually that these seemingly natural values concealed a complicated web of land, capital, government policy and historical opportunity."
      ],
      [
        "尤其值得注意的是，她并没有将自己的家族排除在批判之外。她意识到，自己关于故乡的记忆，也曾受到那些神话的塑造。所谓独立与自力更生，并不完全是个人品格的结果；许多被讲述为个人奋斗的成就，同样依赖公共资源与制度安排。",
        "What is especially notable is that she does not exempt her own family from the critique. She realized that her memories of home had also been shaped by those myths. Independence and self-reliance were not entirely the result of individual character; many achievements told as personal striving also depended on public resources and institutional arrangements."
      ],
      [
        "我觉得，狄迪恩真正重要的，并不只是揭露美国神话的不完整，而是承认自己也曾经相信它。她并非站在历史之外揭穿别人的幻觉，而是在重新审视自己赖以理解世界的故事。",
        "What matters most about Didion, I think, is not only that she exposes how incomplete America’s myths are, but that she admits she once believed them herself. She does not stand outside history and puncture other people’s illusions; she re-examines the stories she had relied on to understand the world."
      ],
      [
        "那么，当我们今天观看狄迪恩时，是否也正在重复类似的过程？",
        "So when we look at Didion today, are we not repeating a similar process?"
      ],
      [
        "在公众记忆中，她已经拥有一套几乎固定的形象：瘦削的身体、深色墨镜、冷静的目光，以及仿佛能够洞察美国一切混乱的文字。那些肖像极具魅力，也让她逐渐成为某种独立、清醒与知识分子气质的象征。",
        "In public memory she already has an almost fixed image: the slight frame, the dark sunglasses, the cool gaze, and prose that seems able to see through all of America’s chaos. Those portraits are enormously charming, and they have gradually made her a symbol of independence, clarity and the intellectual temperament."
      ],
      [
        "但这是否也是一种神话？",
        "But is this, too, a kind of myth?"
      ],
      [
        "加利福尼亚曾经将复杂的历史压缩成开拓者的勇气与独立；而我们是否也正在将狄迪恩复杂的一生，压缩成一个永远冷静、永远清醒的观察者？",
        "California once compressed a complicated history into pioneer courage and independence; are we, in the same way, compressing Didion’s complicated life into an observer who is forever cool and forever clear-eyed?"
      ],
      [
        "这两种叙事的相似之处，不在于它们都是虚假的，而在于它们都选择性地保留某些事实，让一个复杂的对象变得容易理解、容易欣赏，也容易被纪念。",
        "What these two narratives have in common is not that they are false, but that both selectively keep certain facts, making a complicated subject easy to understand, easy to admire, and easy to commemorate."
      ],
      [
        "在《白色专辑》中，狄迪恩曾经写到自己无法再依靠熟悉的故事理解正在发生的事情。她笔下的美国并不是一个等待聪明观察者揭示真相的世界，而是一个连观察者自身都难以把握的现实。",
        "In *The White Album*, Didion wrote that she could no longer rely on familiar stories to understand what was happening. The America in her writing is not a world waiting for a clever observer to reveal the truth, but a reality that even the observer herself can hardly grasp."
      ],
      [
        "这让我觉得，狄迪恩写作中最珍贵的，或许不是她的确定，而是她的不确定。她能够敏锐地发现社会叙事中的裂缝，却并不因此拥有一个可以解释一切的答案。",
        "This makes me feel that what is most precious in Didion’s writing may not be her certainty but her uncertainty. She could sharply find the cracks in social narratives without therefore having an answer that explains everything."
      ],
      [
        "然而，当她成为文化偶像时，这种不确定性反而最容易消失。她的怀疑被简化为洞察力，她的疏离被理解为风格，她在历史与个人经验之间的挣扎，也可能被整理成一种令人羡慕的精神姿态。",
        "Yet when she becomes a cultural icon, that uncertainty is the first thing to disappear. Her doubt is simplified into insight, her detachment is read as style, and her struggle between history and personal experience may be tidied into an enviable spiritual pose."
      ],
      [
        "于是，一个不断质疑故事如何被制造的作家，最终也成为了一个被故事制造出来的人物。",
        "And so a writer who kept questioning how stories are made has herself become a figure made by stories."
      ],
      [
        "我并不认为这意味着我们应该拒绝纪念狄迪恩。相反，图录将她与其他艺术家的作品并置，恰恰提供了一种重新观看她的可能。它提醒我们，狄迪恩并不是独自站在美国历史之外的观察者。她的写作同样产生于特定的阶级、地域、文化与时代之中。",
        "I do not think this means we should refuse to commemorate Didion. On the contrary, by placing her alongside the work of other artists, the catalogue offers just the chance to look at her again. It reminds us that Didion was not an observer standing alone outside American history. Her writing, too, came out of a particular class, region, culture and era."
      ],
      [
        "但如果我们真正希望理解她，就不能只寻找那些能够证明她伟大的材料。我们也应该追问：哪些经历被反复展示，哪些矛盾被淡化？为什么某些照片逐渐成为她的象征，而她对自身局限的承认，却没有获得同样广泛的记忆？",
        "But if we truly want to understand her, we cannot look only for the material that proves her greatness. We should also ask: which experiences are shown again and again, and which contradictions are played down? Why have certain photographs gradually become her symbol, while her admission of her own limits has not been remembered as widely?"
      ],
      [
        "这也使书名中的 *What She Means* 显得格外耐人寻味。",
        "This also makes the *What She Means* in the title especially intriguing."
      ],
      [
        "它既可以指狄迪恩究竟想表达什么，也可以指她对后来的读者意味着什么。但两者之间始终存在距离。一个作家的思想，并不等于后人赋予她的文化意义；正如加利福尼亚真实的历史，也不等于人们愿意相信的加利福尼亚。",
        "It can mean what Didion actually meant to say, and it can mean what she means to later readers. But there is always a distance between the two. A writer’s thought is not the same as the cultural meaning posterity gives her, just as California’s real history is not the same as the California people are willing to believe in."
      ],
      [
        "读完这本图录所提出的观看方式，我越来越觉得，对狄迪恩最好的纪念，或许不是将她塑造成一个永远正确的观察者，而是将她曾经用来审视美国的怀疑，重新用于审视她本人。",
        "Having read the way of looking that this catalogue proposes, I increasingly feel that the best way to commemorate Didion may not be to shape her into an observer who is always right, but to turn the doubt she once used to examine America back on herself."
      ],
      [
        "如果她能够重新追问自己的家族如何参与了加利福尼亚神话的形成，那么我们也应该追问，自己如何参与了狄迪恩神话的形成。",
        "If she could ask again how her own family took part in making the California myth, then we should also ask how we ourselves take part in making the Didion myth."
      ],
      [
        "毕竟，一个终生提醒我们警惕故事如何掩盖现实的作家，或许最值得我们尊重的方式，就是不让关于她的故事，最终掩盖了她自己。",
        "After all, for a writer who spent her life warning us how stories cover up reality, perhaps the most respectful thing we can do is not let the stories about her end up covering up her."
      ]
    ]
  },
  {
    "date": "2025-08-29",
    "title": "Doubt and Origin",
    "slug": "where-i-was-from",
    "category": "Memoir",
    "book": {
      "cover": "where_i_was_from.jpg",
      "title": "Where I Was From",
      "author": "Joan Didion",
      "language": "English",
      "lines": ["Memoir · Knopf, 2003", "Didion’s memoir of California and her family, and of the pioneer myth she grew up inside."]
    },
    "place": "于加州伯克利\nBerkeley, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "where_i_was_from_reading.jpg",
      "alt": "Reading Where I Was From in front of a bookshelf"
    },
    "prose": [
      [
        "我们究竟是谁？是我们真实经历过的一切，还是我们选择相信的、关于自己的一段故事？",
        "Who are we, really? Everything we have actually lived through, or a story about ourselves that we have chosen to believe?"
      ],
      [
        "读 Joan Didion 的《Where I Was From》，我逐渐意识到，我们对于自身身份的理解，或许远没有想象中那么真实而稳定。",
        "Reading Joan Didion’s *Where I Was From*, I gradually realized that our understanding of our own identity may be far less real and stable than we imagine."
      ],
      [
        "Didion 从小生活在加利福尼亚的拓荒神话之中。勇敢的先驱者凭借坚韧、独立与个人奋斗建立新的生活。这不仅是一个关于加州历史的故事，也是她理解自身家族与身份的方式。然而，当她重新审视这段历史时，却发现所谓的自力更生，始终离不开政府支持、历史机遇与社会结构。那些被歌颂为个人奋斗的成就，并不完全属于个人。",
        "Didion grew up inside California’s pioneer myth: brave settlers who built new lives through grit, independence and individual striving. It was not only a story about the history of California; it was how she understood her own family and identity. Yet when she looked at that history again, she found that so-called self-reliance had always depended on government support, historical opportunity and social structure. The achievements celebrated as individual struggle did not belong entirely to the individual."
      ],
      [
        "这让我开始思考：我们究竟是在认识自己的过去，还是在不断选择一种能够让自己接受的过去？",
        "This made me wonder: are we getting to know our past, or are we continually choosing a past we can accept?"
      ],
      [
        "我们每个人都在为自己的人生编写故事。我们将成功归因于努力，将失败解释为成长，将某些经历视为命运的转折点，再将这些零散的记忆连接成一个连贯的自我。这样的叙事给予我们归属感，也让我们相信今天的自己有迹可循。",
        "Each of us is writing a story for our own life. We attribute success to effort, explain failure as growth, treat certain experiences as turning points of fate, and then link these scattered memories into one coherent self. Such a narrative gives us a sense of belonging, and lets us believe that the person we are today has traceable roots."
      ],
      [
        "但问题在于，我们往往只愿意保留那些能够支持自我认同的部分。我们记得自己的奋斗，却容易忽略时代的机遇；珍视家族的荣耀，却可能回避其中的特权；怀念故乡的美好，却不愿面对它所承载的伤害与不公。",
        "But the problem is that we often keep only the parts that support our sense of who we are. We remember our own striving but easily overlook the opportunities of the age; we treasure the glory of our family but may avoid the privilege within it; we cherish the beauty of our hometown but are unwilling to face the harm and injustice it carries."
      ],
      [
        "我们并非总是在欺骗自己，而是太需要相信自己的故事，以至于逐渐忘记它也只是一种解释。因此，当 Didion 开始质疑加州的神话时，她所面对的不只是历史认知的改变，更是一种身份上的动摇。如果自己曾经引以为傲的价值并不如想象中纯粹，那么建立在这些价值之上的自我，又该如何存在？",
        "We are not always deceiving ourselves; we simply need to believe our stories so much that we gradually forget they are only an interpretation. So when Didion began to question the myth of California, what she faced was not just a change in her understanding of history but a shaking of her identity. If the values she once took pride in were not as pure as she imagined, how could the self built on those values go on existing?"
      ],
      [
        "但我逐渐觉得，怀疑自己的故事，并不意味着否定自己的人生。我们无法改变过去，却可以重新理解过去。承认成功包含运气，并不会抹去努力；承认家族历史中的不公，也不意味着必须否定其中所有值得珍惜的记忆。真正需要放弃的，也许不是我们的身份，而是那个必须始终正确、完整而值得骄傲的自我形象。",
        "But I have come to feel that doubting our own story does not mean denying our life. We cannot change the past, but we can understand it anew. Admitting that success includes luck does not erase effort; admitting the injustice in a family’s history does not mean we must reject every memory in it worth cherishing. What we may really need to give up is not our identity, but the self-image that must always be right, complete and worth being proud of."
      ],
      [
        "然而，问题并没有到此结束。即使我们揭穿了旧有的神话，是否就能获得一个真正独立、完全属于自己的身份？恐怕也不能。",
        "But the question does not end there. Even if we expose the old myth, can we gain an identity that is truly independent and wholly our own? I am afraid not."
      ],
      [
        "我们用来质疑过去的语言、价值观与判断标准，本身也来自我们试图审视的社会。我们以为自己已经摆脱了家庭的期待，却可能只是接受了另一种文化的价值；我们以为自己终于能够独立思考，却未必意识到，所谓独立的思想，同样受到时代与环境的塑造。",
        "The language, values and standards of judgment we use to question the past themselves come from the society we are trying to examine. We think we have escaped our family’s expectations, but we may only have accepted the values of another culture; we think we can finally think independently, but we do not necessarily realize that so-called independent thought is shaped by its time and surroundings too."
      ],
      [
        "如果连我们用来反抗过去的思想，都无法完全摆脱过去的影响，那么自由究竟意味着什么？",
        "If even the thoughts we use to resist the past cannot fully escape its influence, what does freedom mean?"
      ],
      [
        "我开始觉得，自由或许从来不是彻底摆脱一切外部影响。那样的自由几乎不可能存在。我们无法选择自己的出生、家庭、语言与最初接受的价值观，也无法站在历史之外，重新创造一个完全纯粹的自我。",
        "I have begun to feel that freedom may never be a complete escape from all outside influence. That kind of freedom can hardly exist. We cannot choose our birth, our family, our language or the values we first absorbed, and we cannot stand outside history to create a wholly pure self from scratch."
      ],
      [
        "但这是否意味着，我们只能被动地成为环境的产物？我并不这样认为。或许，自由真正开始的地方，恰恰是我们意识到自己并非完全自由的那一刻。当我们开始追问自己的信念从何而来，为什么相信某些事情，又为什么排斥另一些事情时，我们便不再只是无意识地重复过去。",
        "But does that mean we can only passively be products of our environment? I do not think so. Perhaps freedom truly begins at the very moment we realize we are not entirely free. When we start to ask where our beliefs come from, why we believe some things and reject others, we are no longer merely repeating the past without knowing it."
      ],
      [
        "我们未必能够彻底摆脱这些影响，却可以重新审视它们，决定哪些值得继承，哪些需要拒绝，以及哪些仍然值得怀疑。这也让我重新理解了 Didion 对故乡的反思。她并没有因为发现加州神话的矛盾，就能够彻底摆脱自己与加州的联系。她依然来自那里，依然受到那段历史的塑造。但她不再需要通过美化故乡，来证明自身身份的价值。",
        "We may not be able to shake off these influences entirely, but we can re-examine them, deciding which are worth inheriting, which to reject, and which still deserve doubt. This also changed how I understand Didion’s reflection on her home. Discovering the contradictions in the California myth did not free her entirely from her ties to California. She still came from there, and was still shaped by that history. But she no longer needed to beautify her home in order to prove the worth of her identity."
      ],
      [
        "真正成熟的归属感，也许不是终于确信自己来自一个值得骄傲的地方，而是在看清它的复杂与不完美之后，仍然能够诚实地承认自己与它的联系。同样，真正的自我认识，也不是终于找到一个不受任何影响的纯粹自我，而是能够接受自己始终处于历史、社会与个人选择的交汇之中。我们无法选择自己最初如何被世界塑造，但至少可以选择，是否终其一生都不去质疑这种塑造。",
        "A truly mature sense of belonging may not come from finally being certain that we come from a place to be proud of, but from being able, after seeing its complexity and imperfection, to honestly acknowledge our connection to it. Likewise, real self-knowledge is not finally finding a pure self untouched by any influence, but being able to accept that we always stand at the meeting point of history, society and personal choice. We cannot choose how the world first shaped us, but we can at least choose whether to go through life without ever questioning that shaping."
      ],
      [
        "读完《Where I Was From》，我开始觉得，Didion 所寻找的并不只是她来自何方，而是当那些关于来处的神话逐渐瓦解之后，她还能如何理解自己。",
        "After finishing *Where I Was From*, I have begun to feel that what Didion was looking for was not only where she came from, but how she could still understand herself once the myths about her origins had begun to fall apart."
      ],
      [
        "或许，我们每个人都需要一个关于自己的故事，才能在复杂而偶然的人生中找到某种连续性。但真正的自由，并不意味着终于拥有了一个完整、正确且永不改变的故事，而是拥有不断重新审视、修正，甚至推翻它的勇气。",
        "Perhaps each of us needs a story about ourselves in order to find some continuity in a complicated and accidental life. But real freedom does not mean finally having a story that is complete, correct and never changing; it means having the courage to keep re-examining it, revising it, even overturning it."
      ],
      [
        "我们无法决定自己从哪里来，却不必让关于来处的故事，决定我们最终成为谁。而真正的自我认识，或许不是终于知道自己是谁，而是终于能够接受，自己并不完全是那个一直以来相信的自己。",
        "We cannot decide where we come from, but we need not let the story about where we come from decide who we finally become. And real self-knowledge may not be finally knowing who we are, but finally being able to accept that we are not entirely the person we have always believed ourselves to be."
      ]
    ]
  },
  {
    "date": "2026-08-16",
    "title": "Rebellion and Freedom",
    "slug": "rebellion-and-freedom",
    "category": "Poetry",
    "book": {
      "cover": "ginsberg.jpg",
      "title": "The Essential Ginsberg",
      "author": "Allen Ginsberg",
      "language": "English",
      "lines": ["Poetry · Edited by Michael Schumacher, 2015", "A selection of Allen Ginsberg’s poems, including “Howl”."]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "ginsberg_reading.jpg",
      "alt": "The Essential Ginsberg on a table in front of a bookshelf, with a Books Not Bombs card"
    },
    "prose": [
      [
        "读艾伦·金斯堡的诗歌，我始终在思考一个问题：反抗社会的规范，是否就意味着一个人已经获得了自由？在《嚎叫》中，金斯堡将那些被主流社会视为疯狂、堕落与失败的人置于诗歌的中心。诗的开头便是：“我见过我们这代人的翘楚在癫狂中毁灭，在歇斯底里的赤裸中挨饿。”他以近乎失控的语言，控诉一个崇尚秩序、效率与物质繁荣，却不断压抑个体精神的社会。在他的笔下，疯狂有时反而比所谓的正常更加清醒，反叛也因此成为对社会虚伪的一种揭露。",
        "Reading Allen Ginsberg’s poems, I kept coming back to one question: does rebelling against the norms of society mean a person has become free? In “Howl,” Ginsberg puts at the center of the poem the people the mainstream considers mad, degraded and failed. It opens: “I saw the best minds of my generation destroyed by madness, starving hysterical naked.” In language that borders on losing control, he accuses a society that prizes order, efficiency and material prosperity while ceaselessly suppressing the individual spirit. In his hands, madness is sometimes clearer-sighted than so-called normality, and rebellion becomes a way of exposing society’s hypocrisy."
      ],
      ["然而，我并不认为反抗本身就意味着自由。", "Yet I do not believe that rebellion by itself means freedom."],
      [
        "我们习惯于将服从与反抗视为对立的两端：服从意味着失去自我，反抗则象征着独立。但仔细想来，两者或许都存在同一种依赖。服从者需要社会的认可，而反抗者则需要社会作为自己的对立面。一个通过遵循规则定义自己，另一个通过拒绝规则确认自己的存在。",
        "We are used to treating obedience and rebellion as opposite ends: obedience means losing oneself, rebellion stands for independence. But on reflection, both may rest on the same dependence. The obedient need society’s approval, and the rebellious need society as their opposite. One defines himself by following the rules, the other confirms his existence by refusing them."
      ],
      [
        "如果一个人必须不断证明自己与社会不同，才能感受到自由，那么他的自由是否仍然由社会决定？这让我开始重新理解真正的独立。",
        "If a person must keep proving that he is different from society in order to feel free, is his freedom still decided by society? This made me begin to understand real independence in a new way."
      ],
      [
        "自由或许并不意味着拒绝一切社会规范，而是拥有建立自身价值标准的能力。一个人可以选择遵循某些传统，也可以拒绝另一些期待，但这些选择不应仅仅来自对认可的渴望，或对权威的愤怒，而应来自对自己真正相信什么、愿意如何生活的清醒认识。",
        "Freedom may not mean rejecting all social norms, but having the ability to set one’s own standards of value. A person can choose to follow some traditions and refuse other expectations, but those choices should not come only from a hunger for approval or anger at authority; they should come from a clear understanding of what one truly believes and how one is willing to live."
      ],
      ["在这个意义上，真正的自由甚至可能表现为一种与社会的和解。", "In this sense, real freedom may even take the form of a reconciliation with society."],
      [
        "这种和解并不是屈服，更不是对不公的沉默，而是不再需要通过社会的评价来证明自己。我们可以承认社会的存在，理解它的复杂与局限，却不必让它决定我们的全部价值。我们可以反抗值得反抗的事情，也可以坦然接受那些与自身原则并不冲突的规则。",
        "This reconciliation is not surrender, still less silence in the face of injustice; it means no longer needing society’s judgment to prove ourselves. We can acknowledge that society exists and understand its complexity and its limits, without letting it decide our whole worth. We can rebel against what is worth rebelling against, and calmly accept the rules that do not conflict with our own principles."
      ],
      [
        "我想，这或许就是一种更成熟的 *don't give a fuck*：不是对世界漠不关心，而是不再执着于世界如何看待自己。",
        "I think this may be a more mature kind of *don’t give a fuck*: not indifference to the world, but no longer clinging to how the world sees us."
      ],
      [
        "当然，这并不意味着金斯堡的反抗失去了意义。恰恰相反，他的诗歌提醒我们，有些社会规范本身就值得质疑，而自由也需要人们敢于打破那些压抑个体的界限。但反抗可以是通往自由的道路，却不应成为自由的全部定义。",
        "Of course, this does not mean Ginsberg’s rebellion has lost its meaning. On the contrary, his poems remind us that some social norms are themselves worth questioning, and that freedom also needs people who dare to break the limits that repress the individual. But rebellion can be a road to freedom without being the whole definition of it."
      ],
      [
        "读完这些诗歌，我越来越觉得，真正困难的并不是对世界说“不”，而是在不需要反抗的时刻，依然知道自己是谁。真正自由的人，既不害怕与社会相同，也不执着于与社会不同。",
        "After reading these poems, I increasingly feel that the truly hard thing is not saying “no” to the world, but still knowing who you are at the moments when no rebellion is needed. A truly free person is neither afraid of being the same as society nor attached to being different from it."
      ]
    ]
  },
  {
    "date": "2024-11-08",
    "title": "Who Remembers Us",
    "slug": "when-those-who-remember-us-leave",
    "category": "Memoir",
    "book": {
      "cover": "stay_true.jpg",
      "title": "Stay True",
      "author": "Hua Hsu",
      "language": "English",
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
      [
        "在《寻梦环游记》中，一个人真正的死亡，并不是生命的终结，而是当世界上最后一个记得他的人也将他遗忘。我们害怕被遗忘，因为那意味着自己曾经存在过的痕迹，终于从世界上彻底消失。但读完 Hua Hsu 的《Stay True》，我开始思考另一种恰好相反的失去：我们不仅害怕自己被别人遗忘，也害怕失去那些记得自己的人。前者是害怕从别人的世界里消失，后者是害怕自己的一部分随着别人一同消失。",
        "In *Coco*, a person’s true death is not the end of life but the moment the last person in the world who remembers them forgets them too. We fear being forgotten because it would mean that the traces of our having existed finally vanish from the world altogether. But after finishing Hua Hsu’s *Stay True*, I began to think about a loss that runs the other way: we fear not only being forgotten by others, but also losing the people who remember us. The first is the fear of disappearing from other people’s worlds; the second is the fear that a part of ourselves disappears along with them."
      ],
      [
        "我们习惯于认为记忆属于自己，仿佛过去只要曾经发生，就会永远成为生命中不可剥夺的一部分。但事实上，一个人的过去从来不完全由自己保存。父母记得我们尚未形成记忆时的模样，朋友记得我们早已忘记的言语，爱人记得那些连自己都不曾察觉的细节。那些记忆未必存在于我们的意识之中，却依然构成了我们是谁。",
        "We tend to think of memory as our own, as if whatever has happened will forever remain an inalienable part of our lives. In truth, a person’s past has never been kept entirely by that person. Our parents remember what we looked like before we could form memories; our friends remember words we long ago forgot; our lovers remember details we never noticed ourselves. Those memories may not live in our own consciousness, yet they still make up who we are."
      ],
      [
        "在《Stay True》中，Ken 的突然离世，不仅让 Hua 失去了一位朋友，也让他们共同经历的青春失去了一位见证者。那些一起听过的音乐、说过的玩笑、度过的夜晚，原本属于两个人的记忆，从此再也无法通过彼此的回忆得到补充与修正。更令人难过的是，Hua 仍然可以继续成长，重新理解过去，而 Ken 却再也无法参与这种理解。他无法告诉 Hua 哪些细节被记错了，哪些瞬间对自己同样重要，也无法再以自己的目光看见多年以后已经改变的 Hua。于是，失去一个人，也意味着失去了一种认识自己的方式。",
        "In *Stay True*, Ken’s sudden death costs Hua not only a friend but also the witness to the youth they shared. The music they listened to together, the jokes they told, the nights they spent: memories that belonged to two people can no longer be supplemented or corrected through each other’s recollections. Sadder still, Hua can go on growing and re-understanding the past, while Ken can no longer take part in that understanding. He cannot tell Hua which details were misremembered or which moments mattered to him as well, nor can he see, through his own eyes, the Hua who has changed over the years. To lose a person, then, is also to lose a way of knowing oneself."
      ],
      [
        "《寻梦环游记》中的遗忘，是活着的人逐渐抹去逝者的存在；《Stay True》中的死亡，却让逝者带走了活着的人一部分无法重建的过去。一个人可能仍然清晰地记得自己的朋友，却再也无法知道，自己在那位朋友的记忆中究竟是什么模样。这两种失去看似相反，却揭示了同一种脆弱：我们的存在，从来不完全属于自己。我们依赖他人的记忆，确认自己曾经存在；也依赖他人的目光，理解自己曾经是谁。",
        "The forgetting in *Coco* is the living gradually erasing the existence of the dead; the death in *Stay True* is the dead carrying away a part of the living’s past that can never be rebuilt. A person may still remember a friend clearly and yet never again learn what they looked like in that friend’s memory. The two losses seem opposite, but they reveal the same fragility: our existence has never belonged entirely to ourselves. We depend on other people’s memories to confirm that we once existed, and on other people’s gaze to understand who we once were."
      ],
      [
        "因此，Hua 对 Ken 的书写让我感到一种格外复杂的悲伤。他试图通过文字留下 Ken，却也在保存那个只有 Ken 曾经认识的年轻的自己。书写能够让一个人的故事继续被讲述，却无法让那个曾经与我们共同拥有故事的人，再次回应我们的记忆。《寻梦环游记》让我们相信，只要还有人记得，逝去的人便没有真正消失。而《Stay True》让我意识到，即使我们从未遗忘一个人，他的离开仍然可能带走一部分永远无法找回的自己。",
        "That is why Hua’s writing about Ken filled me with a particularly complicated sadness. He tries to keep Ken through words, but in doing so he also preserves the young self that only Ken ever knew. Writing can keep a person’s story being told, but it cannot make the one who once shared that story with us answer our memories again. *Coco* lets us believe that as long as someone remembers, the dead have not truly disappeared. *Stay True* made me realize that even if we never forget a person, their leaving may still take away a part of ourselves that can never be found again."
      ],
      [
        "我们总以为遗忘是对逝者的第二次死亡，却很少想到，当一个人离开时，活着的人也可能经历某种局部的消逝。如果一个人的存在需要他人的记忆来证明，那么当最后一个记得我们曾经模样的人离开，即使我们仍然活着，那个曾经的自己，是否也已经从世界上消失了？",
        "We always think of forgetting as the second death of the dead, but seldom consider that when a person leaves, the living may also undergo a kind of partial vanishing. If a person’s existence needs other people’s memories to prove it, then when the last person who remembers what we once were is gone, even though we are still alive, has that former self also disappeared from the world?"
      ]
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
      [
        "一个社会可以在经济上越来越自由，却不意味着生活在其中的每个人都同样自由。",
        "A society can grow ever freer economically without everyone living in it being equally free."
      ],
      [
        "《棉花帝国》让我重新理解了资本主义的起源。贝克特揭示，现代资本主义并非单纯诞生于自由贸易、技术创新与市场竞争，而是深深依赖殖民扩张、土地掠夺、奴隶劳动与国家权力。自由市场的形成，恰恰曾以无数人的不自由为前提。",
        "*Empire of Cotton* changed how I understand the origins of capitalism. Beckert shows that modern capitalism was not born simply of free trade, technological innovation and market competition; it depended deeply on colonial expansion, the seizure of land, enslaved labor and state power. The making of the free market was premised, precisely, on the unfreedom of countless people."
      ],
      [
        "这让我想到，今天的人工智能革命，是否正在以一种截然不同的形式，延续资本主义历史中相似的矛盾？棉花帝国的关键，不只是纺织机器提高了生产效率，而是谁控制棉田、原料、工厂与贸易网络。机器创造了前所未有的生产力，但真正决定财富分配的，是围绕机器建立起来的所有权与权力关系。",
        "This made me wonder whether today’s AI revolution is carrying forward, in a very different form, the same contradictions in the history of capitalism. What mattered in the empire of cotton was not only that textile machines raised productivity, but who controlled the cotton fields, the raw materials, the factories and the trade networks. Machines created productive power on an unprecedented scale, but what truly decided how wealth was divided were the relations of ownership and power built around them."
      ],
      [
        "人工智能时代或许也是如此。我们惊叹于模型能够替代多少劳动，却很少追问谁拥有训练模型所需的数据、算力、基础设施与资本。正如工业革命的纺织机器离不开全球棉花供应链，今天看似无所不能的人工智能，同样依赖庞大的能源、矿产、数据与人类劳动体系。技术越是呈现出自动化的面貌，支撑它的社会关系反而越容易被忽略。",
        "The age of AI may be no different. We marvel at how much labor models can replace, yet seldom ask who owns the data, computing power, infrastructure and capital needed to train them. Just as the textile machines of the Industrial Revolution could not do without the global cotton supply chain, today’s seemingly omnipotent AI likewise depends on a vast system of energy, minerals, data and human labor. The more a technology presents the face of automation, the more easily the social relations that sustain it are overlooked."
      ],
      [
        "更值得思考的是，棉花帝国通过控制劳动者创造财富，而人工智能可能使资本在某些领域逐渐减少对劳动者的依赖。两者的机制不同，却指向同一个问题：生产力的增长，是否必然意味着创造或曾经创造这些财富的人能够分享增长的成果？",
        "What is more worth thinking about is that the empire of cotton created wealth by controlling laborers, whereas AI may allow capital, in some fields, to depend less and less on laborers. The mechanisms differ, but they point to the same question: does growth in productivity necessarily mean that those who create, or once created, this wealth can share in its gains?"
      ],
      [
        "当机器可以承担越来越多的工作，劳动本应从生存的负担逐渐转变为个人的选择。但如果收入、社会保障与生活尊严仍然高度依赖就业，那么劳动被替代也可能意味着一个人失去维持生活的能力。这或许是人工智能时代最深刻的悖论：社会越有能力摆脱劳动的必要，个人却未必越有能力摆脱对工作的依赖。",
        "As machines take on more and more work, labor should gradually shift from a burden of survival to a matter of personal choice. But if income, social security and a life of dignity still depend heavily on employment, then having one’s labor replaced may mean losing the ability to sustain a life. This may be the deepest paradox of the age of AI: the more capable a society becomes of escaping the necessity of labor, individuals may be no more capable of escaping their dependence on work."
      ],
      [
        "当然，历史并不注定重演。人工智能也可能使知识、创造与生产工具更加普及，让更多人获得过去只有少数人拥有的能力。但《棉花帝国》提醒我，技术本身不会决定这些可能最终属于谁。决定这一点的，仍然是所有权、制度与权力的分配。",
        "Of course, history is not destined to repeat itself. AI may also make knowledge, creativity and the tools of production more widely available, giving more people abilities that once belonged to only a few. But *Empire of Cotton* reminds me that technology itself will not decide to whom these possibilities finally belong. That is still decided by the distribution of ownership, institutions and power."
      ],
      [
        "从棉花到人工智能，资本主义不断改变生产财富的方式，却始终留下一个尚未解决的问题：当生产力越来越强大，我们究竟是在让更多人获得自由，还是在让拥有生产资料的人获得更大的自由？",
        "From cotton to AI, capitalism keeps changing the way wealth is produced, yet it always leaves one problem unresolved: as productive power grows ever stronger, are we freeing more people, or giving greater freedom to those who own the means of production?"
      ],
      [
        "或许，真正值得期待的人工智能革命，不是一个人类终于不再需要劳动的世界，而是一个人类终于不再必须通过出卖劳动，才能获得生存与自由的世界。",
        "Perhaps the AI revolution truly worth hoping for is not a world in which humans finally no longer need to work, but one in which humans finally no longer have to sell their labor in order to gain survival and freedom."
      ]
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
      [
        "读完韩江的《素食者》，最令我不安的并不是英惠逐渐走向极端的行为，而是那些自认为正常的人，竟然能够如此自然地以关心、责任与爱的名义侵犯她的自由。",
        "After finishing Han Kang’s *The Vegetarian*, what unsettled me most was not Yeong-hye’s gradual slide into extremes, but how naturally the people who consider themselves normal could violate her freedom in the name of concern, duty and love."
      ],
      [
        "小说从英惠决定不再吃肉开始。一个看似微不足道的个人选择，却引发了丈夫的不满、父亲的愤怒与整个家庭的反对。对他们而言，问题似乎从来不是英惠为什么拒绝吃肉，而是她为什么不能像其他人一样正常生活。",
        "The novel begins with Yeong-hye’s decision to stop eating meat. A seemingly trivial personal choice provokes her husband’s displeasure, her father’s anger, and the opposition of the whole family. For them, the question never seems to be why Yeong-hye refuses meat, but why she cannot live normally like everyone else."
      ],
      [
        "这让我开始思考：究竟是谁定义了正常？而正常，又从什么时候开始成为一种必须服从的义务？",
        "This set me thinking: who defines what is normal? And when did normal become an obligation we must obey?"
      ],
      [
        "我们习惯于将不符合社会期待的人视为异常，却很少质疑那些期待本身是否合理。一个人选择不同的生活方式，我们往往首先想到的不是理解，而是纠正。更值得警惕的是，我们不仅习惯于干涉他人的选择，还习惯于将这种干涉理解为一种善意。",
        "We are used to seeing people who fall short of social expectations as abnormal, yet we rarely ask whether those expectations are reasonable. When someone chooses a different way of life, our first thought is often not to understand but to correct. More worrying still, we are used not only to interfering in other people’s choices but to taking that interference as a kind of kindness."
      ],
      [
        "英惠的丈夫认为她的行为破坏了正常的家庭生活，父亲则试图以暴力迫使她恢复原状。在他们眼中，自己的行为或许都有着合理的解释：维护家庭、履行责任，甚至是为了英惠好。然而，当关心不再以理解对方为前提，而是以改变对方为目的时，它与控制之间究竟还有多少区别？",
        "Yeong-hye’s husband believes her behavior ruins normal family life, and her father tries to force her back to how she was with violence. In their own eyes, each act may have a reasonable explanation: protecting the family, fulfilling a duty, even doing it for Yeong-hye’s own good. Yet when concern no longer rests on understanding the other person but aims at changing her, how much difference is left between it and control?"
      ],
      [
        "尤其令我印象深刻的是，小说中的暴力并不总是以恶意的形式出现。它也可能隐藏在习以为常的家庭秩序中，隐藏在长辈的权威、伴侣的期待，以及那些看似理所当然的社会规范之中。施加控制的人未必认为自己正在伤害别人，因为他们早已将自己的生活方式视为唯一正确的标准。",
        "What impressed me especially is that the violence in the novel does not always take the form of malice. It can also hide in a family order taken for granted, in the authority of elders, in a partner’s expectations, and in social norms that seem natural. The people exercising control do not necessarily think they are hurting anyone, because they long ago took their own way of life as the only correct standard."
      ],
      [
        "这让我想到现实生活中，我们也常常以类似的方式对待身边的人。父母以爱之名决定子女的人生，伴侣以关心之名限制彼此的自由，社会则以成熟、责任与体面为标准，要求每个人遵循相似的人生轨迹。我们或许并没有意识到，自己所谓的善意，有时不过是无法容忍他人与自己不同。",
        "This made me think of how, in real life, we often treat the people around us in similar ways. Parents decide their children’s lives in the name of love, partners limit each other’s freedom in the name of care, and society, with maturity, responsibility and respectability as its standards, asks everyone to follow a similar path through life. We may not realize that what we call goodwill is sometimes nothing more than an inability to tolerate people being different from us."
      ],
      [
        "最令人不安的，也许不是我们有意控制别人，而是我们真诚地相信，控制别人是在帮助他们。",
        "What is most unsettling may not be that we deliberately control others, but that we sincerely believe that controlling them is helping them."
      ],
      [
        "然而，韩江并没有将英惠的拒绝描绘成一场简单的自由胜利。她试图摆脱暴力，拒绝参与自己无法接受的生存方式，却最终将这种拒绝推向了自身生命的边缘。她的痛苦提醒我，反抗并不必然带来自由，而一个人有权拒绝社会期待，也不意味着她只能通过伤害自己来证明这种权利。",
        "Yet Han Kang does not portray Yeong-hye’s refusal as a simple victory for freedom. She tries to break free of the violence and to refuse a way of living she cannot accept, but ends up pushing that refusal to the edge of her own life. Her suffering reminds me that resistance does not necessarily bring freedom, and that a person’s right to refuse social expectations does not mean she can prove that right only by harming herself."
      ],
      [
        "姐姐仁惠的存在，使这种矛盾更加复杂。她既试图照顾英惠，也不得不面对英惠可能失去生命的现实。她的关心不能简单地等同于父亲的强迫，却同样让我们看到一个困难的问题：当尊重一个人的意愿与保护她的生命发生冲突时，我们究竟应当如何理解真正的关怀？",
        "Her older sister In-hye makes the contradiction more complicated. She tries to look after Yeong-hye, and also has to face the reality that Yeong-hye may lose her life. Her care cannot simply be equated with her father’s coercion, yet it shows us a hard question too: when respecting a person’s wishes conflicts with protecting her life, how should we understand real care?"
      ],
      [
        "或许，关怀与控制之间的界限，并不只取决于我们的动机是否善良，更取决于我们是否愿意承认对方是一个拥有独立意志的人，是否能够在必要的保护之外，仍然尊重她的尊严。",
        "Perhaps the line between care and control depends not only on whether our motives are kind, but on whether we are willing to recognize the other as a person with an independent will, and whether, beyond the protection that may be necessary, we can still respect her dignity."
      ],
      [
        "读完《素食者》，我开始怀疑，我们所说的正常，究竟是一种自然存在的秩序，还是多数人在长期服从中逐渐接受的规则？当一种生活方式被普遍认可，我们便容易忘记，它未必适合每一个人，更不应成为衡量他人价值的唯一标准。",
        "After finishing *The Vegetarian*, I began to wonder whether what we call normal is an order that exists naturally, or rules that most people have gradually come to accept through long obedience. When a way of life is widely approved, we easily forget that it may not suit everyone, and that it should not be the only standard by which others are measured."
      ],
      [
        "或许，真正值得恐惧的不是一个人逐渐偏离了正常，而是那些自认为正常的人，早已失去了理解不同的能力。",
        "Perhaps what is truly to be feared is not that a person drifts away from the normal, but that the people who consider themselves normal have long since lost the ability to understand difference."
      ],
      [
        "而一个真正尊重个体的社会，不应仅仅允许人们说“不”，更应当让他们在说“不”之后，依然能够有尊严地生活。",
        "And a society that truly respects the individual should not merely allow people to say “no”; it should let them go on living with dignity after they have said it."
      ]
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
      "lines": [
        "History · 1990",
        "In 1768, rumors that sorcerers were stealing souls by clipping queues swept the Qing empire, and the Qianlong emperor turned a village panic into a nationwide hunt for conspirators."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "孔飞力的《叫魂》还是十年前读的。当时只觉得，1768年大清帝国那场由剪辫、摄魂的谣言引发，最终席卷全国的群体性疯狂，荒诞得近乎不可思议。我曾以为，这不过是皇权专制与民智未开共同作用下的历史闹剧。只要社会不断进步，教育逐渐普及，科学取代迷信，这样的荒诞自然也就失去了生存的土壤。",
        "I read Philip Kuhn’s *Soulstealers* ten years ago. At the time, the mass hysteria of 1768, set off by rumors of queue-clipping and soul-stealing and spreading across the whole Qing empire, struck me as absurd almost beyond belief. I thought it was no more than a historical farce produced by imperial despotism and an unenlightened populace. As society progressed, education spread and science replaced superstition, such absurdity would naturally lose the soil it grew in."
      ],
      [
        "十年后重读，才发现2012年的自己或许忽略了这本书最令人不安的地方。《叫魂》真正揭示的，并不是一个时代的人有多么愚昧，而是一套政治机制如何将原本零散的恐惧，转化为席卷整个社会的集体歇斯底里。",
        "Rereading it ten years later, I realize that in 2012 I may have missed the most disturbing thing about the book. What *Soulstealers* reveals is not how ignorant people of one era were, but how a political mechanism can turn scattered fears into a collective hysteria that sweeps an entire society."
      ],
      [
        "在1768年的中国，关于妖术的传言最初只是民间的不安与猜疑。但当乾隆皇帝将其视为对统治秩序的潜在威胁，地方官员便不得不在皇权的压力下追查嫌犯。原本可以通过调查逐渐平息的谣言，反而在层层上报、严刑逼供与政治猜忌中不断获得新的生命。越是缺乏确凿证据，越容易被解释为阴谋隐藏得足够深；越是有人试图淡化事态，越可能被怀疑是在掩盖问题。",
        "In China in 1768, rumors of sorcery began as nothing more than popular unease and suspicion. But once the Qianlong emperor saw them as a potential threat to the ruling order, local officials had no choice but to hunt for suspects under the pressure of imperial power. Rumors that investigation might have gradually put to rest instead found new life in reports passed up the chain, torture-extracted confessions and political suspicion. The less hard evidence there was, the easier it was to conclude that the conspiracy was hidden deeply enough; the more someone tried to play the matter down, the more likely they were to be suspected of covering something up."
      ],
      [
        "最可怕的地方在于，这套机制并不需要每个人都真正相信妖术的存在。皇帝担心权威受到挑战，官员担心被指责失职，百姓则可能借助政治恐慌宣泄私怨。每个人都在自己的处境中作出看似合理的选择，最终却共同制造了一场荒诞的灾难。当说真话的代价高于附和，当提出质疑的风险大于参与指控，个体出于自保的理性选择，反而可能汇聚成整个社会的非理性。",
        "The most frightening part is that this mechanism does not require everyone to truly believe in sorcery. The emperor feared his authority was being challenged, officials feared being blamed for dereliction, and ordinary people could use the political panic to settle private grudges. Each person made a choice that seemed reasonable in their own situation, and together they produced an absurd catastrophe. When telling the truth costs more than going along, and doubting is riskier than joining the accusations, individually rational choices made for self-protection can add up to the irrationality of a whole society."
      ],
      [
        "这让我想到2022年的中国，尤其是持续三年的疫情防控在最后一年所呈现出的种种荒诞。核酸检测、健康码、层层加码的封控，以及地方政府在政治责任与现实困境之间的挣扎，与1768年的叫魂恐慌当然不是同一件事。疫情是真实的公共卫生威胁，妖术却是虚构的恐惧。但两者在某些政治运行机制上的相似，恰恰值得警惕：当某种威胁被提升为不容质疑的政治任务，基层便可能更在意是否贯彻上级意志，而不是政策本身是否仍然合理；当纠正错误意味着承担政治风险，维持错误反而可能成为最安全的选择。",
        "This makes me think of China in 2022, and especially the many absurdities of the third and final year of pandemic control: PCR tests, health codes, lockdowns tightened layer upon layer, and local governments caught between political responsibility and practical difficulty. This is of course not the same thing as the sorcery scare of 1768. The pandemic was a real public health threat, while sorcery was an imagined fear. But the similarity in how the politics worked is exactly what deserves vigilance: when a threat is raised to an unquestionable political task, the grassroots may care more about carrying out the will of the higher level than about whether the policy still makes sense; when correcting a mistake means taking a political risk, keeping the mistake going can become the safest choice."
      ],
      [
        "回想2012年第一次读《叫魂》的自己，我甚至有些难以理解当时那种近乎理所当然的乐观。那时我相信，历史中的荒诞之所以令人震惊，正是因为我们已经走出了那个时代。十年后，最让我感到不安的，却不是发现历史竟然如此相似，而是发现自己曾经如此轻易地相信，时代的进步足以保护我们免于重蹈覆辙。过去读到官员层层加码、百姓相互猜疑，我只觉得不可思议；后来再看到现实中人们为了避免承担责任而选择沉默、为了证明立场而放弃质疑，才逐渐理解，许多荒诞并不需要一个社会中的大多数人真正相信它，只需要大多数人认为反对它不值得。",
        "Thinking back to myself reading *Soulstealers* for the first time in 2012, I can hardly understand that almost taken-for-granted optimism. I believed that the absurdities of history shock us precisely because we have left that era behind. Ten years on, what unsettles me most is not finding that history is so similar, but realizing how easily I once believed that the progress of the age was enough to keep us from repeating it. When I read about officials piling on demands and ordinary people suspecting one another, I found it simply unbelievable; only later, seeing people in real life stay silent to avoid taking responsibility and give up questioning to prove their loyalty, did I slowly understand that many absurdities do not need most people in a society to truly believe in them. They only need most people to decide that opposing them is not worth it."
      ],
      [
        "这种认识上的转变，比历史本身更让我难过。因为它意味着，我们曾经以为理所当然的常识、理性与自由，原来并没有想象中那么稳固。一个人可以清楚地知道某件事不合理，却依然选择服从；一个社会可以拥有无数聪明而善良的人，却仍然无法阻止集体性的错误。最令人无力的，或许正是看见许多人都在各自的处境中努力维持正常生活，而这些看似无可指责的选择，却可能共同维系着一种谁都不愿承担后果的荒诞。",
        "This change in understanding saddens me more than history itself, because it means that the common sense, reason and freedom we took for granted were never as solid as we imagined. A person can know clearly that something makes no sense and still choose to comply; a society can have countless intelligent and kind people and still be unable to stop a collective error. What feels most helpless, perhaps, is watching so many people try to keep life normal in their own circumstances, while these seemingly blameless choices may together sustain an absurdity whose consequences no one is willing to bear."
      ],
      [
        "从1768年到2022年，科学技术、教育水平与国家治理能力早已不可同日而语。但技术能够改变执行政策的效率，却未必能够改变权力制造恐惧的方式。一个社会可以拥有最先进的信息系统，却未必允许真实的信息充分流通；可以培养无数受过高等教育的人，却未必给予他们公开质疑错误的空间。现代技术甚至可能让一套缺乏纠错机制的政治体系，以过去难以想象的效率执行错误的决定。",
        "From 1768 to 2022, science and technology, levels of education and the capacity of the state to govern are no longer even comparable. But technology can change how efficiently policy is carried out without necessarily changing the way power produces fear. A society can have the most advanced information systems without necessarily allowing real information to circulate freely; it can educate countless people to a high level without necessarily giving them room to question mistakes in public. Modern technology may even let a political system with no mechanism for self-correction carry out wrong decisions with an efficiency once unimaginable."
      ],
      [
        "更令我感慨的是，文化大革命结束后，中国曾经经历过一次难得的拨乱反正。改革开放以及此后四十余年的发展，一度让我相信，这个国家终于从政治狂热的灾难中汲取了教训。然而2022年的经历让我重新意识到，经济繁荣并不必然带来政治理性，历史的教训也不会因为曾经付出过惨痛代价，就自动成为不可逆转的制度约束。我曾经把过去数十年的变化理解为一种不断向前的进步，如今却越来越觉得，那或许也是特定历史条件下，一代人艰难争取而来的成果，并没有任何力量能够保证它永远延续。",
        "What moves me even more is that after the Cultural Revolution ended, China went through a rare period of setting things right. Reform and opening up, and the more than forty years of development since, once led me to believe that the country had finally learned from the catastrophe of political fanaticism. But the experience of 2022 made me realize again that economic prosperity does not necessarily bring political rationality, and that the lessons of history do not automatically become irreversible institutional constraints just because they were paid for dearly. I used to understand the changes of recent decades as steady forward progress; now I increasingly feel that they were also the hard-won achievement of one generation under particular historical conditions, and that nothing guarantees they will last forever."
      ],
      [
        "《叫魂》最令人不安的，最终不是乾隆皇帝的猜忌，也不是民间对妖术的恐惧，而是当整个官僚体系逐渐失去向权力讲述真相的能力，统治者便只能从自己制造的回声中认识世界。一个王朝的衰败，未必始于人才的匮乏，也可能始于那些最有能力认识现实的人，逐渐不再敢于表达自己的判断。",
        "What is most disturbing about *Soulstealers* is, in the end, neither the Qianlong emperor’s suspicion nor the popular fear of sorcery, but that once the whole bureaucracy gradually loses the ability to tell power the truth, the ruler can only know the world through the echo he himself has made. A dynasty’s decline does not necessarily begin with a shortage of talent; it may begin when those most capable of understanding reality gradually stop daring to voice their judgment."
      ],
      [
        "2012年读《叫魂》，我看到的是大清帝国的荒诞；2022年再读，我看到的却是自己曾经对历史进步的天真。十年间改变的不是这本书，而是我终于意识到，历史从来不会因为我们已经读懂它，就不再重演。",
        "In 2012, reading *Soulstealers*, I saw the absurdity of the Qing empire; rereading it in 2022, I see my own former naivety about historical progress. What changed over those ten years was not the book, but that I finally realized history never stops repeating itself just because we have learned to read it."
      ],
      [
        "如果一个社会已经拥有足够的知识辨别荒诞，却依然缺乏公开指出荒诞、及时纠正错误的制度空间，那么它究竟比1768年的大清帝国进步了多少？",
        "If a society already has enough knowledge to recognize absurdity, yet still lacks the institutional space to point it out openly and correct mistakes in time, how much further has it really advanced than the Qing empire of 1768?"
      ]
    ]
  },
  {
    "date": "2022-11-24",
    "title": "Will We Become the Adults We Hate?",
    "slug": "lying-life-of-adults",
    "category": "Novel",
    "book": {
      "cover": "lying_life.jpg",
      "title": "The Lying Life of Adults",
      "author": "Elena Ferrante",
      "language": "English",
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
      [
        "读完 Elena Ferrante 的《那不勒斯四部曲》之后，我始终对她笔下的世界念念不忘。得知《The Lying Life of Adults》已经被 Netflix 改编成电视剧，我却选择花三个晚上读完原著。或许比起再次看到那不勒斯的街道，我更想重新进入 Ferrante 笔下那个充满欲望、矛盾与谎言的精神世界。",
        "After finishing Elena Ferrante’s Neapolitan Novels, I could not let go of the world she had written. When I learned that *The Lying Life of Adults* had been adapted by Netflix into a series, I chose to spend three evenings reading the original instead. Perhaps more than seeing the streets of Naples again, I wanted to reenter the inner world Ferrante builds, full of desire, contradiction and lies."
      ],
      [
        "小说从 Giovanna 无意间听见父亲对自己容貌的贬低开始。原本象征理性、教养与道德的父母，逐渐显露出虚伪与自私；而一直被描述为粗俗、丑陋的姑姑 Vittoria，却展现出另一种复杂的人性。Giovanna 开始怀疑自己从小接受的一切，试图在成年人的谎言之外寻找真实。",
        "The novel begins when Giovanna accidentally overhears her father belittling her looks. Her parents, who had stood for reason, upbringing and morality, gradually reveal their hypocrisy and selfishness, while her aunt Vittoria, always described as vulgar and ugly, shows a different, more complicated humanity. Giovanna starts to doubt everything she was raised to believe, and tries to look for something real beyond the adults’ lies."
      ],
      [
        "然而，最令我不安的并不是她如何逐渐揭穿这些谎言，而是她在这个过程中发生的变化。",
        "Yet what unsettles me most is not how she gradually exposes those lies, but how she changes in the process."
      ],
      [
        "Giovanna 并非通过揭穿谎言而逃离成人世界，而是在揭穿谎言的过程中，逐渐成为成人世界的一部分。",
        "Giovanna does not escape the adult world by exposing its lies; in exposing them, she gradually becomes a part of it."
      ],
      [
        "这让我想到中文社交媒体上经常出现的一句话：“我们最终成为了自己以前讨厌的样子。”",
        "This reminds me of a line that often appears on Chinese social media: “In the end, we became what we used to hate.”"
      ],
      [
        "小时候，我们总以为真实与虚伪、善良与自私之间有着清晰的界限。我们不理解成年人为什么言行不一，为什么为了利益妥协，为什么明明知道什么是对的，却依然选择错误。我们相信自己绝不会成为那样的人。",
        "As children, we always assume there is a clear line between truth and hypocrisy, between kindness and selfishness. We do not understand why adults say one thing and do another, why they compromise for the sake of self-interest, why they choose wrong even when they know what is right. We believe we will never become people like that."
      ],
      [
        "然而，成长似乎并不是一个不断接近理想自我的过程。随着我们逐渐进入成年人的世界，曾经无法理解的行为开始有了理由。沉默是为了避免冲突，隐瞒是为了保护关系，妥协是为了适应现实。我们并没有突然放弃原则，只是在一次次看似合理的选择中，逐渐模糊了自己曾经坚信的界限。",
        "Yet growing up does not seem to be a process of steadily approaching an ideal self. As we gradually enter the adult world, behavior we once could not understand begins to have reasons. Silence is meant to avoid conflict, concealment to protect a relationship, compromise to fit in with reality. We do not suddenly give up our principles; through one reasonable-looking choice after another, we slowly blur the lines we once held firmly."
      ],
      ["更令人不安的是，我们甚至可能没有意识到自己正在改变。", "More unsettling still, we may not even realize that we are changing."],
      [
        "Giovanna 曾经如此厌恶成年人的虚伪，却逐渐学会了隐瞒、试探与自我辩解。她不是突然决定成为一个虚伪的人，而是在面对自己的欲望与矛盾时，发现那些曾经令她反感的行为，也可以被自己解释得合情合理。",
        "Giovanna once loathed adult hypocrisy so much, yet she gradually learns to conceal, to probe, and to justify herself. She does not suddenly decide to become a hypocrite; faced with her own desires and contradictions, she finds that the very behavior that once repelled her can be made to seem perfectly reasonable by her own explanations."
      ],
      [
        "这让我重新思考《那不勒斯四部曲》中反复出现的问题：我们究竟能够在多大程度上摆脱自己的出身与成长环境？Elena 试图通过教育与写作离开原来的世界，却始终无法完全摆脱它的影响。而 Giovanna 同样试图通过识破父母的谎言获得独立，却发现自己早已深深受到那个世界的塑造。",
        "This made me reconsider a question that recurs in the Neapolitan Novels: to what extent can we escape where we come from and how we were brought up? Elena tries to leave her old world through education and writing, yet never fully escapes its influence. Giovanna likewise tries to gain independence by seeing through her parents’ lies, only to find that she has long since been deeply shaped by that world."
      ],
      [
        "也许，成长最残酷的地方，并不是我们发现成年人并不完美，而是我们终于开始理解他们为什么不完美，甚至开始为自己寻找同样的借口。",
        "Perhaps the cruelest part of growing up is not discovering that adults are imperfect, but that we finally begin to understand why they are imperfect, and even begin to find the same excuses for ourselves."
      ],
      [
        "但我并不认为 Ferrante 是在告诉我们，人注定会变得虚伪。相反，她让我意识到，理解人性的复杂，并不意味着必须接受所有妥协。我们无法永远保持童年时简单而坚定的道德判断，却仍然可以选择不让现实成为一切行为的借口。",
        "But I do not think Ferrante is telling us that people are doomed to become hypocrites. On the contrary, she made me realize that understanding the complexity of human nature does not mean having to accept every compromise. We cannot hold forever the simple, firm moral judgments of childhood, but we can still choose not to let reality become the excuse for everything we do."
      ],
      [
        "真正值得恐惧的，或许不是我们最终成为了自己讨厌的大人，而是当那一天到来时，我们已经不再觉得自己有什么值得讨厌。",
        "What is truly worth fearing may not be that we end up as the adults we hate, but that when that day comes, we no longer find anything in ourselves worth hating."
      ],
      [
        "也许，成熟并不是终于学会如何适应这个充满谎言的世界，而是在理解了谎言为何存在之后，依然保有质疑自己的能力。",
        "Perhaps maturity is not finally learning how to adapt to a world full of lies, but, having understood why the lies exist, still keeping the ability to question ourselves."
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
      [
        "故乡是什么？是我们出生的地方，是承载童年记忆的土地，还是一个无论走得多远，最终都能够接纳我们的归宿？读完韩江的《丽水之爱》，我开始怀疑，故乡或许从来不只是一个地理概念，而是我们对于归属、记忆与爱的某种想象。",
        "What is a hometown? Is it the place where we were born, the land that holds our childhood memories, or a refuge that will take us back no matter how far we have gone? After reading Han Kang’s *Love of Yeosu*, I began to suspect that a hometown was never only a geographical idea, but a kind of imagining of belonging, memory and love."
      ],
      [
        "几天前，我刚去过丽水。那是我旅居世界这几年里，离家乡盐城最近的一次，大概只有六百多公里。我在山上眺望家乡方向西边的那片海，坦白说，站在那里，我并没有想起多少盐城的事。自从2008年去北京上大学，我就很少再回盐城了。这些年我不断搬去新的城市，真正生活、成长的地方一个接一个地变了，而盐城只是留在了原地，成了我“从哪里来”的一个答案，却不再是我生活的地方。对我来说，出生的地方并没有那么重要，它更像是表格上需要填写的一栏，而不是一个我会惦记、想回去的家。我真正看重的，是心里的那个故乡。",
        "A few days ago I was in Yeosu. It was the closest I had come to my hometown, Yancheng, in the years I have spent living around the world, only about six hundred kilometers. From a hill I looked out at the sea to the west, in the direction of home. To be honest, standing there I did not think much about Yancheng. I have rarely gone back since I left for university in Beijing in 2008. Over the years I kept moving to new cities, and the places where I actually lived and grew up changed one after another, while Yancheng stayed where it was, an answer to “where are you from?” rather than a place I live. To me the place where I was born has never mattered that much. It is more like a box on a form than a home I think about or want to return to. What I truly care about is the hometown in my mind."
      ],
      [
        "小说中，자흔（Ja-heun）与叙述者정선（Jeong-seon）对丽水有着截然相反的感情。出生后便被遗弃的자흔，因为被遗弃的列车从丽水出发，便固执地相信那里是自己的故乡。她从未真正拥有过丽水，却将它视为人生的方向。而정선真正出生于丽水，却在那里经历了母亲的死亡、父亲携子女投海自杀的悲剧，成为唯一的幸存者。从此，丽水成了一个必须逃离、甚至不愿回忆的地方。",
        "In the story, Ja-heun (자흔) and the narrator Jeong-seon (정선) feel completely opposite things about Yeosu. Ja-heun, abandoned soon after she was born, stubbornly believes Yeosu is her hometown because the train she was abandoned on departed from there. She has never really possessed Yeosu, yet she treats it as the direction of her life. Jeong-seon, by contrast, was truly born in Yeosu, and it is where she lived through her mother’s death and her father’s suicide at sea with his children, of whom she was the only survivor. From then on, Yeosu became a place she had to flee, and did not even want to remember."
      ],
      [
        "一个从未到过故乡，却终其一生渴望回去；一个真正拥有故乡，却用尽力气想要忘记它。这种矛盾让我意识到，我们对于故乡的感情，也许并不取决于那个地方本身，而取决于我们曾在那里得到什么，又失去了什么。",
        "One has never been to her hometown yet longs all her life to return; the other truly has a hometown yet uses all her strength to forget it. This contradiction made me realize that our feelings about a hometown may depend not on the place itself, but on what we once received there, and what we lost."
      ],
      [
        "자흔所向往的，或许并不是真实的丽水，而是一个想象中能够解释自己从何而来、为何被遗弃的地方。对于一个从出生便失去归属的人而言，哪怕只是一个模糊的地名，也足以成为生命的寄托。她渴望回到丽水，也许并不是因为那里真的有人等待她，而是因为她需要相信，世界上至少存在一个自己可以回去的地方。",
        "What Ja-heun longs for may not be the real Yeosu at all, but an imagined place that could explain where she came from and why she was abandoned. For someone who lost any sense of belonging at birth, even a vague place name can be enough to hold a life. She longs to return to Yeosu, perhaps not because anyone is really waiting for her there, but because she needs to believe that somewhere in the world there is at least one place she can go back to."
      ],
      [
        "而정선恰恰相反。丽水并非一个未知的希望，而是一段无法承受的记忆。정선试图通过离开故乡来摆脱过去，却发现地理上的距离并不能消除精神上的创伤。那些被压抑的恐惧与痛苦，最终仍然以洁癖、疏离和对亲密关系的矛盾态度，渗透进日常生活。",
        "Jeong-seon is exactly the opposite. For her, Yeosu is not an unknown hope but a memory she cannot bear. She tries to shake off the past by leaving her hometown, only to find that geographical distance cannot erase psychological trauma. The fear and pain she has suppressed still seep into daily life, as an obsession with cleanliness, as distance, and as an ambivalent attitude toward intimacy."
      ],
      [
        "于是我开始觉得，자흔与정선看似走向两个相反的方向，实际上却都被同一种缺失所困。一个试图通过回到故乡寻找从未得到的爱，另一个试图通过逃离故乡忘记曾经失去的爱。她们真正寻找或逃避的，也许从来不是丽水，而是那个始终无法得到安放的自己。",
        "So I began to feel that Ja-heun and Jeong-seon, who seem to walk in opposite directions, are in fact trapped by the same lack. One tries to go back to her hometown to find a love she never had; the other tries to flee hers to forget a love she lost. What they are really looking for or running from may never have been Yeosu, but a self that has never been able to settle."
      ],
      [
        "这也让我重新思考我们习以为常的“落叶归根”。我们总将故乡浪漫化为温暖的起点，仿佛无论经历多少漂泊，回去便意味着安宁与和解。但这种想象是否忽略了那些在故乡遭受伤害的人？如果一个人的故乡意味着遗弃、死亡与失去，我们又凭什么认为回归必然是一种救赎？",
        "It also made me reconsider the saying we take for granted, that fallen leaves return to their roots. We always romanticize the hometown as a warm beginning, as if, however much we have drifted, going back must mean peace and reconciliation. But does that picture overlook the people who were hurt in their hometowns? If someone’s hometown means abandonment, death and loss, on what grounds do we assume that returning must be a redemption?"
      ],
      [
        "我自己的经历也说明，故乡未必是出生的地方。在我网站的 Steps 里，我给自己定了一条规则：把我从出生到现在，所有能记起、有记录的足迹都放进数据库，每到一座城市、一个国家就为它计一次数，计数最高的城市和国家，分别被标记为我的 home city 和 home country。2008年去北京读书，不到一年，北京就成了我的 home city。2012年去西雅图读书，到2014年8月，西雅图接替了北京。2017年来湾区工作，湾区却一直等到2023年10月，才超过西雅图。至于 home country，美国早在2015年6月就取代了中国。这些数字只记录我去过哪里，并不能告诉我归属在哪里。在我心里，我的故乡仍然是西雅图：在那里的生活深刻塑造了我是谁，也是我真正觉得有归属感的地方。",
        "My own experience suggests that a hometown is not necessarily where you were born. In Steps on this site I set myself a rule: every footprint I can remember or have a record of, from birth until now, goes into a database, and each city and country I reach gets one more count. The city and country with the highest counts are marked as my home city and home country. I went to university in Beijing in 2008, and in less than a year Beijing had become my home city. I went to school in Seattle in 2012, and by August 2014 Seattle had taken over from Beijing. After I came to work in the Bay Area in 2017, it did not overtake Seattle until October 2023. As for my home country, the United States had already replaced China in June 2015. These numbers only record where I have been, not where I belong. In my heart my hometown is still Seattle. My life there shaped who I am, and it is where I truly feel I belong."
      ],
      [
        "小说的结尾，정선终于踏上了前往丽水的旅程，但韩江并没有告诉我们，她能否找到자흔，能否与过去和解，能否真正获得安宁。",
        "At the end of the story, Jeong-seon finally sets out on the journey to Yeosu, but Han Kang does not tell us whether she will find Ja-heun, whether she will reconcile with the past, or whether she will truly find peace."
      ],
      [
        "我反而觉得，这种没有答案的结局恰恰揭示了故乡最复杂的意义。故乡不能保证我们重新获得失去的爱，也无法替我们抹去曾经的伤害。回去并不必然意味着治愈，离开也不等于真正的遗忘。",
        "If anything, I think an ending with no answer reveals the most complicated meaning of a hometown. A hometown cannot guarantee that we will win back the love we lost, nor can it erase the harm done to us. Going back does not necessarily mean healing, and leaving does not mean truly forgetting."
      ],
      [
        "或许，故乡并不是一个我们终将回到的地方，而是一个我们终其一生都在试图理解的地方。而所谓的归乡，也许不是为了找回过去，而是为了有一天，我们能够不再被过去决定自己将去往何方。",
        "Perhaps a hometown is not a place we will eventually return to, but a place we spend our whole lives trying to understand. And what we call homecoming may not be about retrieving the past, but about reaching a day when the past no longer decides where we are going."
      ]
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
      "lines": ["Novel · 2017", "A teenage girl in Taipei is abused by her cram-school Chinese teacher, who presents it to her as love."]
    },
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      [
        "讀完林奕含的《房思琪的初戀樂園》，應該幾乎所有人都會自然問：為什麼是“樂園”？“樂園”本應象徵純真、自由與幸福，卻被用來命名一個充滿侵犯、壓迫與痛苦的故事。這當然是一種反諷，但我更想追問的是：為什麼一個充滿傷害的世界，仍然能夠以樂園的面貌存在？又是誰在維持這個樂園？",
        "After finishing Lin Yi-han’s *Fang Si-Chi’s First Love Paradise*, almost every reader will naturally ask the same thing: why “paradise”? A paradise should stand for innocence, freedom and happiness, yet here the word names a story full of violation, oppression and pain. It is irony, of course, but what I want to ask is something else: how can a world so full of harm go on existing in the guise of a paradise? And who is keeping that paradise going?"
      ],
      [
        "小說中的李國華擁有教師的身份、文學的修養與知識的權威。他將侵犯包裝成愛情，將操控解釋為關懷，使暴力披上了文明與美的外衣。最令我不安的並非他如何利用語言欺騙房思琪，而是這些語言為什麼具有如此強大的說服力。",
        "In the novel, Li Guo-hua has the standing of a teacher, the refinement of a man of letters, and the authority of knowledge. He packages violation as love and explains control as care, so that violence puts on the clothes of civilization and beauty. What unsettles me most is not how he uses language to deceive Fang Si-Chi, but why that language is so persuasive."
      ],
      [
        "我們相信教育意味著啟蒙，文學意味著高尚，愛情意味著美好。這些信念本身並沒有錯，但當我們過於相信它們時，也可能因此失去質疑的能力。我們因為相信老師值得尊敬，便難以接受老師也可能是施害者；因為相信愛情是美好的，便可能忽略親密關係中的權力與剝削。有時，我們不是因為看見了善才相信它，而是因為預先相信善的存在，才拒絕看見其中的惡。",
        "We believe that education means enlightenment, that literature means nobility, that love means something good. There is nothing wrong with those beliefs in themselves, but when we trust them too much we can lose the ability to question. Because we believe a teacher deserves respect, it is hard to accept that a teacher can also be an abuser; because we believe love is beautiful, we may overlook the power and exploitation inside an intimate relationship. Sometimes we do not believe in goodness because we have seen it; we refuse to see the evil inside it because we believe in goodness beforehand."
      ],
      [
        "這讓我意識到，“樂園”或許不只是施害者製造的幻象，更是社會在長期習慣中共同維護的秩序。",
        "This made me realize that the “paradise” may be more than an illusion manufactured by the abuser. It may be an order that society maintains together, through long habit."
      ],
      [
        "現實生活中，我們同樣習慣於用美好的詞彙解釋令人不安的事情。控制可以被稱為關心，服從可以被讚美為懂事，忍耐可以被歌頌為成熟。當受害者沒有反抗，我們質疑她為什麼沉默；當施害者擁有地位與聲望，我們又試圖為他的行為尋找解釋。我們未必有意縱容暴力，卻可能在一次次看似合理的解釋中，讓傷害逐漸變得正常。",
        "In real life we are just as used to explaining disturbing things in beautiful words. Control can be called concern, obedience can be praised as being sensible, endurance can be celebrated as maturity. When a victim does not resist, we question why she stayed silent; when an abuser has status and a reputation, we try to find an explanation for his behavior. We may not mean to condone violence, yet through one reasonable-sounding explanation after another, we can let harm slowly become normal."
      ],
      [
        "而這種正常化，或許比刻意的掩蓋更加可怕。因為承認傷害的存在，有時意味著我們必須質疑自己一直信任的權威、價值與社會秩序。相比之下，將痛苦解釋為誤會、愛情或成長的代價，似乎更容易讓我們繼續安心生活。我們維護的未必是真相，而可能只是一個不需要我們重新認識的世界。",
        "That normalization may be more frightening than deliberate concealment. Admitting that harm exists can mean having to question the authorities, values and social order we have always trusted. By comparison, explaining the pain away as a misunderstanding, as love, or as the price of growing up seems to make it easier to go on living in comfort. What we protect may not be the truth, but only a world we do not have to learn to see again."
      ],
      [
        "這也迫使我反思自己作為讀者的位置。面對房思琪的遭遇，我能夠清楚地辨認其中的殘酷。但如果我身處故事之中，只看到一位受人尊敬的老師和一個沉默、矛盾的女孩，而無法知曉她的內心，我是否仍然能夠作出同樣的判斷？",
        "It also forces me to reflect on my own position as a reader. Faced with what happens to Fang Si-Chi, I can recognize the cruelty clearly. But if I were inside the story, seeing only a respected teacher and a silent, conflicted girl whose inner life I could not know, would I still make the same judgment?"
      ],
      ["我無法輕易給出肯定的回答。", "I cannot easily answer yes."],
      [
        "或許，這正是這本書最深刻的警示。暴力並不總是以野蠻的面貌出現，它也可能隱藏在我們最熟悉、最珍視的文明秩序之中。文學、教育與愛情並非暴力的根源，但當它們被賦予不容質疑的神聖性時，也可能成為遮蔽傷害的工具。",
        "Perhaps this is the book’s deepest warning. Violence does not always arrive looking savage; it can hide inside the civilized order we know best and prize most. Literature, education and love are not the roots of violence, but when they are given a sanctity that must not be questioned, they can become tools for covering harm."
      ],
      [
        "因此，我不再認為“樂園”僅僅是對房思琪悲劇的反諷。它更像是一面鏡子，映照出我們如何透過語言、習慣與集體沉默，將某些人的痛苦轉化為另一些人眼中理所當然的秩序。",
        "So I no longer think of the “paradise” as merely an irony about Fang Si-Chi’s tragedy. It is more like a mirror, showing how, through language, habit and collective silence, we turn some people’s pain into an order that others take for granted."
      ],
      [
        "我們總以為樂園的反面是地獄。但也許真正可怕的，並不是地獄被偽裝成樂園，而是我們早已習慣了它的模樣，甚至真誠地相信它就是樂園。",
        "We tend to assume the opposite of paradise is hell. But perhaps what is truly terrifying is not hell disguised as paradise; it is that we have long since grown used to how it looks, and sincerely believe it is paradise."
      ],
      [
        "如果一個世界必須依靠受害者的沉默、旁觀者的麻木，以及對傷害的不斷粉飾才能維持其美好，那麼它究竟是誰的樂園？",
        "If a world can keep its beauty only through the victim’s silence, the bystander’s numbness, and the constant glossing over of harm, then whose paradise is it, really?"
      ]
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
      [
        "Nous désirons être compris, mais craignons d’être mis à nu. Nous cherchons un refuge, mais l’appartenance n’est qu’un souffle.",
        "We long to be understood, yet we fear being laid bare. We look for a refuge, but belonging is only a breath."
      ],
      [
        "Dans Hiver à Sokcho, ce double mouvement tient dans une pension au bord de la mer. La narratrice, moitié française, moitié coréenne, y travaille en hiver, près de la frontière avec la Corée du Nord. Elle n’appartient tout à fait à aucun des deux pays, et elle le sait.",
        "In Hiver à Sokcho, this double movement fits inside a guesthouse by the sea. The narrator, half French and half Korean, works there in winter, near the border with North Korea. She belongs completely to neither country, and she knows it."
      ],
      [
        "Quand arrive Yan Kerrand, un dessinateur français venu chercher l’inspiration pour sa prochaine bande dessinée, elle espère être enfin regardée. Elle lui prépare ses repas et le guide dans la ville. Mais un dessinateur ne regarde pas comme les autres : son regard laisse une trace. Être compris et être mis à nu deviennent alors la même chose.",
        "When Yan Kerrand arrives, a French artist who has come looking for inspiration for his next graphic novel, she hopes to be seen at last. She cooks his meals and guides him around the town. But an artist does not look the way other people do: his gaze leaves a trace. To be understood and to be laid bare become the same thing."
      ],
      [
        "Le corps de la narratrice est le lieu de cette tension. Son petit ami Jun-oh voudrait qu’elle change de visage, et elle se compare sans cesse à ceux des magazines. Elle désire que quelqu’un la comprenne, et elle craint ce qu’on verrait en elle.",
        "The narrator’s body is where this tension plays out. Her boyfriend Jun-oh would like her to change her face, and she compares herself endlessly to the ones in magazines. She wants someone to understand her, and she fears what they would see."
      ],
      [
        "Le froid fait le reste. L’hiver de Sokcho fige le monde tout en le dépouillant de ses artifices : la plage est vide, la pension l’est presque, et dans cette immobilité il n’y a plus rien derrière quoi se cacher.",
        "The cold does the rest. The winter of Sokcho freezes the world while stripping it of its artifices: the beach is empty, the guesthouse nearly so, and in this stillness there is nothing left to hide behind."
      ],
      [
        "Ce que j’en retiens, c’est que l’immobilité ne guérit pas la peur d’être vu ; elle la rend impossible à ignorer. Dans le silence de l’hiver, la narratrice se retrouve face à une question plus honnête sur qui elle est quand personne ne la regarde. C’est la seule vérité intérieure que le livre me laisse, et elle me suffit.",
        "What I take from it is that stillness does not cure the fear of being seen; it makes it impossible to ignore. In the silence of winter, the narrator comes face to face with a more honest question about who she is when no one is looking at her. It is the only inner truth the book leaves me with, and it is enough."
      ]
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
      "lines": [
        "Novel · Farrar, Straus and Giroux, 2018",
        "A fever leaves its victims repeating the routines of their old lives. Candace Chen, a Bible production coordinator in New York, keeps going to work."
      ]
    },
    "place": "于麻省波士顿\nBoston, MA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "马凌的小说《断裂》里的“申氏发热”是一则末日寓言，它的讽刺在于：患者并没有变成扑向活人的怪物，而是一遍遍重复生前的日常：折叠衣物、维护陈列、按时打卡。女主角 Candace 在一家出版公司负责《宝石圣经》的生产协调。纽约渐渐空了，她仍然每天走进那栋空楼上班。这算不上什么崇高的坚守，更像是习惯接管了她：没有人再需要那些《圣经》，工作却还在继续。病的症状和上班的样子，在这里几乎分不出来。",
        "The “Shen Fever” in Ling Ma’s novel *Severance* is an allegory of the end of the world, and its irony is this: the infected do not turn into monsters that hunt the living. They repeat, over and over, the routines of their former lives: folding clothes, tending displays, clocking in on time. The protagonist, Candace, coordinates the production of Gemstone Bibles at a publishing company. New York slowly empties, and she still walks into that empty building to work every day. It is hardly a noble stand. It looks more like habit taking her over: nobody needs those Bibles anymore, yet the work goes on. Here, the symptoms of the illness and the look of a working day are almost impossible to tell apart."
      ],
      [
        "小说里有一句话，把这一点说得很直白：“生活在一座城市里，就是参与并传播它那些荒谬的体系。早上醒来。上班。这同时也意味着享受这些体系，否则，谁能年复一年地重复同样的日常？”",
        "One line in the novel puts this plainly: “To live in a city is to take part in and to propagate its impossible systems. To wake up. To go to work in the morning. It is also to take pleasure in those systems because, otherwise, who could repeat the same routines, year in, year out?”"
      ],
      [
        "当然，《断裂》写的不只是惯性。Candace 是移民的女儿，疏离、旁观，多少还有些共谋；小说同样写消费、迁徙和怀旧。我在这里只取它关于“被日常吞没”的一面，因为这一面让我想到了自己。",
        "Of course, *Severance* is about more than inertia. Candace is an immigrant’s daughter, detached, an onlooker, and to some degree complicit; the novel is just as much about consumption, migration, and nostalgia. I take only one side of it here, the side about being swallowed by routine, because that side made me think of myself."
      ],
      [
        "一年前，我主动从管理岗位转到不带人的岗位，大幅缩减了工作时间，还开始兼职开 Uber。我并不想证明什么，只是不愿意让“X公司”或任何一个头衔成为我唯一的名字。",
        "A year ago, I moved from a management role to one with no reports, cut my working hours sharply, and began driving for Uber on the side. I did not set out to prove anything. I simply did not want “Company X,” or any title, to become my only name."
      ],
      [
        "韩炳哲在《倦怠社会》中指出，今天的社会不再主要靠外部的禁令运转，而是靠“你可以”：个体被塑造成“自身的企业家”，自己给自己加码，自己剥削自己。他把这种社会称为功绩社会（Leistungsgesellschaft）。申氏发热的患者像是这种逻辑的极端版本：没有人命令他们，他们还在干活。",
        "In *The Burnout Society*, Byung Chul Han argues that today’s society no longer runs mainly on outside prohibition but on “you can”: individuals are shaped into “entrepreneurs of themselves,” who raise their own quotas and exploit themselves. He calls this the achievement society (Leistungsgesellschaft). The Shen Fever victims look like an extreme version of that logic: no one orders them, and they keep working."
      ],
      [
        "我并不是说开 Uber 让我挣脱了自我剥削。恰恰相反，它正是“自身的企业家”最标准的样子：自己排班，自己担风险，自己盯着评分和接单率。我只是换了自我剥削发生的地方。真正的差别有两点。第一，路况、车和身体的疲惫都是抽象不掉的东西。在大厂，我的工作停留在文档、会议和符号里，下班后常常觉得自己是飘着的；开车的时候，手在方向盘上，我知道自己在哪里。第二，这份活不是我的头衔。我能随时停下，是因为它只是兼职，别处还有收入撑着；对靠它吃饭的司机来说，这一点并不成立。",
        "I am not saying that driving for Uber freed me from exploiting myself. On the contrary, it is exactly the standard form of the “entrepreneur of oneself”: I set my own schedule, carry my own risk, and watch my own ratings and acceptance rate. I have only moved where it happens. The real difference is twofold. First, traffic, the car, and a tired body cannot be abstracted away. At the big company, my work stayed in documents, meetings, and symbols, and after hours I often felt I was floating; when I drive, my hands are on the wheel and I know where I am. Second, this work is not my title. I can stop at any time because it is only a side job and other income holds me up; for drivers who live on it, that is not true."
      ],
      [
        "所以我不觉得自己“打破”了什么。《断裂》只提醒了我一件小事：习惯会在不知不觉中替人做决定，最早的警告，是你已经说不出自己除了这份工作还是谁。我的做法只是其中一种，换别的方式也许同样有效。重要的是，还能自己说出那个名字。",
        "So I do not feel I have “broken” anything. *Severance* reminded me of only one small thing: habit makes decisions for you without your noticing, and the earliest warning is that you can no longer say who you are besides this job. My way is only one way, and others may work just as well. What matters is that you can still say that name yourself."
      ]
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
      "lines": ["Novel · Simplified Chinese edition", "A letter from a son, nicknamed Little Dog, to his mother, who cannot read it."]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "在《大地上我们转瞬即逝的绚烂》中，王鸥行不断将越战的历史缩小至单个器官的尺寸，而眼睛则是他处理得最为锐利之处。这场战争过去常常是从远距离被审视的：从飞机上、在地图上、在伤亡数字中，以及后来在将难民归类为编号、受害者和待处理案卷的文件里。王鸥行避开了那种视角，转而投向那个进行凝视的肉身。在此，莫里斯·梅洛-庞蒂的理论大有裨益，因为他主张我们并非作为超然的旁观者去观察。我们是以身体的形式、从特定之处、带着局限去观察的。在王鸥行的手中，凝视不再是控制的工具，而成为了孤独与饥渴的象征。",
        "In *On Earth We’re Briefly Gorgeous*, Ocean Vuong keeps shrinking the history of the Vietnam War down to the size of a single organ, and the eye is where he does it most sharply. The war was often seen from a distance: from aircraft, on maps, in casualty counts, and later in the paperwork that sorted refugees into numbers, victims, and cases to be managed. Vuong turns away from that view and toward the body that does the looking. Here Maurice Merleau-Ponty is useful, because he argued that we do not see as detached observers. We see as bodies, from one place, with limits. In Vuong’s hands the gaze stops being a tool of control and becomes a sign of loneliness and hunger."
      ],
      ["这一转变发生在小狗对母亲说话、回忆起关于眼睛的一句评语时：", "The turn comes when Little Dog, speaking to his mother, recalls a remark about the eye:"],
      [
        "“你有一次告诉我，人的眼睛是神最孤独的创造。世上有多少东西会穿过瞳孔，可它什么都留不下。一只眼睛孤零零地待在自己的眼眶里，完全不知道一英寸之外，还有完全相同的另一只，一样饥渴，一样空洞。”（王鸥行 14）",
        "“You told me once that the human eye is the most lonely creation of God. How much of the world passes through the pupil and still it holds nothing? The eye, alone in its socket, doesn't even know there's another one just like it, an inch away, equally hungry, equally empty.” (Vuong 14)"
      ],
      [
        "王鸥行拒绝奉承眼睛。它不是心灵的窗户，也不是笛卡尔式那种将图像传输给背后某个大脑的透镜景象。对梅洛-庞蒂而言，进行感知的是“身体主体”（le corps-sujet）：即整体的身体，其视觉受限于它所处的位置和所能触及的范围。王鸥行向我们展示了处于极度局限中的身体。眼睛“孤零零地待在自己的眼眶里”，汲取一切却一无留存（“可它什么都留不下”），甚至无法看见一英寸之外的同伴。这道间距虽微小却无法逾越。双眼处于同一个颅骨内，朝向同一个方向，却彼此浑然不知。",
        "Vuong refuses to flatter the eye. It is not the window to the soul, and it is not the Cartesian picture of a lens that feeds images to a mind sitting somewhere behind it. For Merleau-Ponty, the one who perceives is the body-subject (le corps-sujet): the whole body, whose seeing is bound by where it stands and what it can reach. Vuong gives us that body at its most limited. The eye sits “alone in its socket,” takes in everything and keeps none of it (“still it holds nothing”), and cannot see its twin an inch away. The gap is tiny and cannot be crossed. Both eyes sit in the same skull, facing the same way, and neither knows the other is there."
      ],
      [
        "那微小的间距象征着一道更大的鸿沟。小狗与母亲共处一室，但母亲读不懂英文，两人都无法将战争留下的创伤完整地递交给对方。双眼“一样饥渴，一样空洞”：彼此相似，处于相同的境遇，却无法向对方确认这一点。在这幅图景中，战争造成的流离失所不仅是地图上的距离，更是身体内部的断裂，以及同处一室的肉体之间的隔阂。",
        "That small gap stands for a larger one. Little Dog and Rose share a home, but Rose cannot read English, and neither of them can fully hand the other what the war left behind. The eyes are “equally hungry, equally empty”: alike, in the same condition, and unable to confirm it to each other. In this picture, the displacement of war is not only distance on a map. It is also a break inside the body, and between bodies in the same room."
      ],
      [
        "这段文字并未终结于绝望。就在孤独的瞳孔之后，小说提供了一个短暂的交汇时刻：",
        "The passage does not end in despair. Right after the lonely pupil, the novel offers a brief moment of contact:"
      ],
      ["“你打开前门，对着我人生中的第一场雪，耳语道：看。”（王鸥行 14）", "“You opened the front door to my first snow, whispered: Look.” (Vuong 14)"],
      [
        "母亲那单单一个字的“看”，是一种关爱的行为。在这个她无法阅读其语言的国家里，她几乎毫无权力，但她依然能指引儿子看向世界，并邀他一同凝视。母子二人并非从外部面对景象的旁观者；他们每个人都能看到对方在凝视。她没有去解释这场雪，她只是打开门，让雪映入眼帘。雪，就像所有穿过瞳孔的事物一样，什么都不会留下；它终将融化。重要的不是留住它，而是在同一个瞬间，共同凝视它。",
        "Rose’s one word, “Look,” is an act of care. She has little power in a country whose language she cannot read, but she can still point her son at the world and ask him to see it with her. Mother and son are not spectators facing a scene from outside; each can see the other seeing. She does not explain the snow. She opens the door and lets it come into view. Snow, like everything that passes through the pupil, leaves nothing behind; it will melt. What matters is not keeping it but seeing it together, at the same moment."
      ],
      [
        "这就是王鸥行微观层面上的美学政治。遥远而官方的视力试图通过计数、记录和占有来掌控其所见之物；母亲的“看”则毫无此求。它提供的是陪伴。瞳孔依然空洞，但在这一刻，那道间距得到了回应。不是通过语言，而是通过两个人对同一事物共同的见证。一页书页固然承载不了整部小说，但它展示了一种值得贯穿全书的方法：当语言和历史失效时，共同的凝视依然能够宣告：我们在此，并且活着。",
        "That is Vuong’s politics of beauty in small. The distant, official view tries to master what it sees by counting it, recording it, and holding on to it. Rose’s “Look” asks for none of that. It offers company. The pupils stay empty, but for a moment the gap is answered, not with words, but by two people witnessing the same thing. One page cannot carry a whole novel, but it shows a method worth following through the rest of the book: when language and history fail, shared seeing can still say that we are here and alive."
      ]
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
      "lines": ["History · Liveright, 2017", "A forgotten history of how government policy at every level segregated American neighborhoods."]
    },
    "blocks": [
      [
        "epi",
        "“种族隔离渗透到个体生活的方方面面，没有一个人可以置身身外，从起床到睡觉，从出生到死亡，甚至是早在你出生之前就早已决定的宿命。”",
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
        "在本书的前几章，作者详细地列举了从20世纪20年代到70年代大量的事实来佐证其核心论点，即种族隔离是由政府、法院到民间有意识地长期践行于社会生活方方面面的一项非成文的公共行为，而这一行为大大阻碍了非裔社群实现真正地财富增值融入中产阶级的权利。而随着社会贫富分化的日益加大，大部分的非裔社群已经彻底被剥夺了实现阶层跨越的可能性，社群内由经济主导的自发居住种族隔离而由此形成。这可不就是“非裔的原罪”吗？",
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
        "民间、银行以及政府的多层联动最终在仅仅6年的时间里，把曾经完全是白人社区的East Palo Alto变为了82%非裔居民的名副其实的非裔社会。直到60年后的2010年，East Palo Alto的有色人种依然占据了高达93.8%。",
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
    "date": "2020-04-20",
    "title": "Freedom as Privilege",
    "slug": "freedom-as-privilege",
    "category": "Ethnography",
    "book": {
      "cover": "chungking_mansions.jpg",
      "title": "世界中心的貧民窟：香港重慶大廈 (Ghetto at the Center of the World: Chungking Mansions)",
      "author": "Gordon Mathews",
      "language": "Traditional Chinese",
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
      [
        "我们往往将自己的自由归功于独立的思想，却忘记了，能够自由选择如何生活，本身就可能是一种特权。",
        "We tend to credit our freedom to independent thinking, forgetting that being free to choose how to live may itself be a privilege."
      ],
      [
        "读Gordon Mathews的《重庆大厦》，最令我思考的并不是全球化如何将世界各地的人汇聚在香港的一栋建筑里，而是那些看似拥有无限流动可能的人，实际上拥有多少选择自己人生的自由。",
        "Reading Gordon Mathews’s *Chungking Mansions*, what made me think most was not how globalization draws people from all over the world into a single building in Hong Kong, but how much freedom people who seem to have limitless mobility actually have to choose their own lives."
      ],
      [
        "Mathews将重庆大厦中的跨境贸易称为“低端全球化”。来自南亚、非洲等地的小商人、移民与寻求庇护者，在有限的资本、复杂的法律制度与不稳定的身份之间寻找生存机会。这里的全球化并非跨国企业的扩张，而是普通人在全球经济的缝隙中谋生。然而，流动并不必然意味着自由。对某些人而言，跨越国界是一种选择；对另一些人而言，却是维持生计的必要条件。一个人可以离开故乡，并不意味着他同样拥有留下的自由。",
        "Mathews calls the cross-border trade in Chungking Mansions “low-end globalization.” Small traders, migrants and asylum seekers from South Asia, Africa and elsewhere look for a way to survive amid scarce capital, a tangle of legal rules and unstable status. The globalization here is not the expansion of multinational corporations but ordinary people making a living in the cracks of the global economy. Yet mobility does not necessarily mean freedom. For some, crossing a border is a choice; for others, it is a necessary condition of getting by. That a person can leave home does not mean they are equally free to stay."
      ],
      [
        "当一个人无法承担拒绝的代价时，我们还能在多大程度上称他的选择为自由？书中那些游走于法律灰色地带的交易，以及身份与经历难以核实的寻求庇护者，让这个问题更加复杂。我们习惯于用诚实、守法与个人责任判断他人，却容易忽略，不同的人并不总是拥有相同的条件去实践这些原则。",
        "When a person cannot afford the cost of refusing, to what extent can we still call their choice free? The deals in the book that run through legal gray areas, and the asylum seekers whose identities and histories are hard to verify, make the question more complicated. We are used to judging others by honesty, lawfulness and personal responsibility, and we easily overlook that different people do not always have the same conditions in which to practice these principles."
      ],
      [
        "但理解处境，并不意味着取消责任。贫困不能自动使欺骗正当化，生存压力也不能成为伤害他人的充分理由。然而，如果我们只强调个人责任，却忽略一个人所面对的现实限制，那么所谓的道德判断，也可能只是将自己的生活条件当作普遍标准。",
        "But understanding someone’s situation does not mean canceling their responsibility. Poverty cannot automatically justify deception, and the pressure to survive is not sufficient reason to harm others. Yet if we stress only personal responsibility and ignore the real constraints a person faces, then so-called moral judgment may be nothing more than taking the conditions of our own lives as a universal standard."
      ],
      [
        "我们不应该因为一个人的处境而取消他的道德责任，但也不应该因为自己拥有选择的自由，就假定别人拥有同样的自由。这让我重新审视自己曾经对于自由的理解。我曾认为，真正的自由不是服从社会，也不是刻意反抗社会，而是拥有独立的价值标准，按照自己认可的原则生活。但这种理解似乎忽略了一个前提：一个人必须拥有一定的现实条件，才能承担不服从的后果。",
        "We should not cancel a person’s moral responsibility because of their circumstances, but neither should we assume, because we have the freedom to choose, that others have the same freedom. This made me re-examine my own understanding of freedom. I used to think that true freedom was neither obeying society nor deliberately defying it, but having independent values and living by principles one endorses. Yet this understanding seems to overlook a precondition: one must have certain real conditions before one can bear the consequences of not complying."
      ],
      [
        "我们赞美那些敢于辞职、远行、追求理想的人，却很少追问他们是否拥有承担失败的经济条件。我们鼓励人们忠于自我，却容易忽略，对于某些人而言，生存本身已经耗尽了选择的余地。我们以为自己比别人更加独立，或许只是因为我们拥有更多不必妥协的条件。",
        "We applaud those who dare to quit their jobs, travel far and chase their ideals, yet we seldom ask whether they have the financial means to bear failure. We encourage people to be true to themselves, and easily overlook that, for some, survival itself has already used up all room for choice. We think we are more independent than others, perhaps only because we have more conditions under which we do not have to compromise."
      ],
      [
        "当然，重庆大厦中的人们并非只是被动承受命运。他们在制度的限制中寻找机会，在不确定性中建立跨国贸易网络，展现了令人惊讶的能动性。但这种能动性越是突出，我们越不应将他们面对的困难浪漫化为奋斗精神的胜利。",
        "Of course, the people in Chungking Mansions are not merely passive victims of fate. Within the limits of institutions they look for openings, and amid uncertainty they build transnational trading networks, showing surprising agency. But the more striking this agency is, the less we should romanticize the hardships they face as a triumph of striving."
      ],
      [
        "或许，真正的自由始终包含两个维度：既有独立判断如何生活的能力，也有将这种判断付诸实践的现实可能。缺少前者，我们可能成为社会期待的附庸；缺少后者，即使知道自己想要什么，也未必能够选择。",
        "Perhaps true freedom always has two dimensions: the ability to judge independently how to live, and the real possibility of putting that judgment into practice. Without the former, we may become appendages of social expectation; without the latter, even knowing what we want, we may not be able to choose it."
      ],
      [
        "读完《重庆大厦》，我开始觉得，我们不应仅仅追问一个人为什么没有选择另一种生活，更应该追问，他是否真正拥有过那种选择。",
        "After finishing *Chungking Mansions*, I began to feel that we should not only ask why a person did not choose another life, but whether they ever truly had that choice."
      ],
      [
        "因为自由最深刻的不平等，或许不在于有些人能够作出更好的选择，而在于有些人甚至拥有选择错误、承担失败，然后重新开始的余地。而一个真正自由的社会，不应只赞美那些勇于选择的人，更应该让尽可能多的人拥有选择的可能。",
        "For the deepest inequality of freedom may lie not in some people making better choices, but in some people having room even to choose wrongly, bear failure, and begin again. A truly free society should not merely praise those who are brave enough to choose; it should give as many people as possible the possibility of choosing."
      ]
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
      [
        "如果一个人的选择受到环境塑造，那么我们所谓的个人成就，究竟有多少真正属于自己？",
        "If a person’s choices are shaped by their environment, how much of what we call personal achievement truly belongs to us?"
      ],
      [
        "读《Poor Economics》，最令我思考的并不是贫穷的人为什么难以摆脱贫困，而是那些从未真正经历过贫困的人，为什么如此轻易地相信成功完全来自自己的努力。",
        "Reading *Poor Economics*, what made me think most was not why poor people find it so hard to escape poverty, but why those who have never truly experienced poverty so easily believe that success comes entirely from their own effort."
      ],
      [
        "我们习惯于赞美勤奋、自律、远见与理性，并将它们视为成功者的个人品质。然而，我们很少追问，这些品质得以发挥作用的前提是什么。良好的教育、稳定的家庭、充足的资本、可以依赖的社会关系，甚至失败后重新开始的机会，往往早已为某些人的人生铺好了道路。",
        "We are used to praising diligence, self-discipline, foresight and rationality, and to treating them as the personal qualities of the successful. Yet we seldom ask what has to be in place for these qualities to work. A good education, a stable family, ample capital, social connections one can rely on, even the chance to start over after failing: for some people, these have often paved the road of life long in advance."
      ],
      [
        "《Poor Economics》通过对贫困者日常决策的研究，让我们看到，那些看似缺乏理性的选择，往往受到信息、资源与风险的深刻限制。贫困并不意味着缺乏判断力，而是意味着即使作出正确的判断，也未必拥有实现它的条件。",
        "By studying the everyday decisions of the poor, *Poor Economics* lets us see that choices that seem to lack rationality are often deeply constrained by information, resources and risk. Poverty does not mean a lack of judgment; it means that even when one judges correctly, one may not have the conditions to act on that judgment."
      ],
      [
        "但真正令我不安的，是这种不平等如何被成功者逐渐遗忘。当一个人从未需要为某些资源付出代价，他便容易将这些资源视为世界本来的样子；当一个人从未真正承担失败的后果，他便容易将别人的失败理解为能力的不足。",
        "But what truly unsettles me is how the successful gradually forget this inequality. When a person has never had to pay a price for certain resources, they easily take those resources to be how the world simply is; when a person has never truly borne the consequences of failure, they easily read other people’s failure as a shortfall of ability."
      ],
      [
        "于是，幸运被解释为努力，优势被理解为才能，而成功则成为证明自身优越的依据。更令人讽刺的是，拥有最多选择的人，往往最容易相信每个人都拥有同样的选择。",
        "And so luck is explained as effort, advantage is understood as talent, and success becomes the proof of one’s own superiority. More ironic still, those with the most choices are often the readiest to believe that everyone has the same choices."
      ],
      [
        "当然，承认环境对成功的影响，并不意味着否定个人努力。一个人的勤奋与能力可以是真实的，他所享有的优势也同样真实。问题不在于成功是否值得肯定，而在于我们是否有资格将自己的成功经验奉为普遍规律。",
        "Of course, acknowledging the influence of environment on success does not mean denying individual effort. A person’s diligence and ability can be real, and so can the advantages they enjoy. The question is not whether success deserves recognition, but whether we are entitled to elevate our own experience of success into a universal law."
      ],
      [
        "我逐渐意识到，特权最隐蔽的形式，或许不是拥有别人没有的资源，而是拥有这些资源，却从未意识到它们的存在。当我们把成功完全归功于自己，便很容易把失败完全归咎于他人。个人奋斗的叙事由此不再只是自我肯定，也可能成为对社会不平等的合理化。",
        "I have gradually come to realize that the most hidden form of privilege may not be having resources that others lack, but having them without ever being aware that they exist. When we credit our success entirely to ourselves, it becomes easy to blame others entirely for their failures. The narrative of individual striving then ceases to be merely self-affirmation and may become a rationalization of social inequality."
      ],
      [
        "读完这本书，我想，真正值得警惕的不是成功者的骄傲，而是成功者的无知：他们或许真诚地相信自己的一切都来自努力，却从未意识到，连能够相信努力必有回报，本身都可能是一种幸运。",
        "Having finished the book, I think what deserves real vigilance is not the pride of the successful but their ignorance: they may sincerely believe that everything they have comes from effort, without ever realizing that even being able to believe that effort will surely be rewarded may itself be a stroke of luck."
      ],
      [
        "一个人真正的清醒，或许不是认识到自己有多么努力，而是终于能够分辨，自己究竟创造了什么，又继承了什么。",
        "A person’s true clarity may lie not in recognizing how hard they have worked, but in finally being able to tell what they created and what they inherited."
      ]
    ]
  },
  {
    "date": "2024-02-18",
    "title": "Knowledge and Understanding",
    "slug": "knowledge-and-understanding",
    "category": "Novel",
    "book": {
      "cover": "when_we_cease.jpg",
      "title": "When We Cease to Understand the World",
      "author": "Benjamín Labatut",
      "language": "English",
      "lines": [
        "Novel · Pushkin Press, 2020",
        "A fictionalized account of scientists and mathematicians, from Fritz Haber to Werner Heisenberg, at the edge of what can be understood."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "photo": {
      "file": "when_we_cease_reading.jpg",
      "alt": "When We Cease to Understand the World standing on a wooden table beside a succulent, a cup of coffee, an apple and a baked cheese roll"
    },
    "prose": [
      [
        "我们习惯于相信，知识的增长意味着人类对世界的理解不断加深。科学发现越多，未知便越少；技术越先进，人类便越接近真理。",
        "We are used to believing that the growth of knowledge means a deepening human understanding of the world. The more science discovers, the less remains unknown; the more advanced technology becomes, the closer humanity comes to the truth."
      ],
      [
        "但读完《When We Cease to Understand the World》，我开始怀疑：当我们越来越有能力改变世界时，是否反而越来越难以理解自己所创造的现实？",
        "But after finishing *When We Cease to Understand the World*, I began to wonder: as we become ever more capable of changing the world, do we find it ever harder to understand the reality we ourselves have created?"
      ],
      [
        "人类已经能够探索宇宙的起源、预测遥远的未来，甚至通过数学公式揭示肉眼无法观察的自然规律。量子力学支撑着现代科技的诸多成就，却也不断挑战我们关于现实、因果与确定性的直觉。我们可以精确地运用某种理论，却未必能够以熟悉的方式理解它所描述的世界。",
        "Humans can now explore the origin of the universe, predict the distant future, and even use mathematical formulas to reveal laws of nature that the naked eye cannot observe. Quantum mechanics underpins many achievements of modern technology, yet it keeps challenging our intuitions about reality, causality and certainty. We can apply a theory with precision without necessarily being able to understand, in any familiar way, the world it describes."
      ],
      [
        "我们掌握了操纵世界的工具，却未必拥有与这种力量相称的理解。",
        "We have mastered the tools to manipulate the world, but not necessarily an understanding that matches that power."
      ],
      [
        "而真正令我不安的，并不是科学存在无法解释的现象，而是这种理解与能力之间不断扩大的距离。数学不再只是描述现实的语言，它所支撑的技术与制度也在重塑现实本身。我们创造出越来越复杂的系统，却逐渐难以预见它们将如何改变社会，甚至改变我们对于人之所以为人的理解。",
        "And what truly unsettles me is not that science contains phenomena it cannot explain, but the ever-widening distance between understanding and capability. Mathematics is no longer only a language for describing reality; the technologies and institutions it supports are reshaping reality itself. We build ever more complex systems, yet find it increasingly hard to foresee how they will change society, or even our understanding of what makes a human being human."
      ],
      [
        "这让我想到书中那些不断逼近知识边界的科学家。他们越是深入探索宇宙的秩序，越可能遭遇某种无法言说的虚无。曾经给予人类确定感的理性，最终也可能迫使我们直面自身认知的局限。",
        "This brings to mind the scientists in the book who keep pressing against the edge of knowledge. The deeper they probe the order of the universe, the more likely they are to meet a kind of inexpressible void. The rationality that once gave humanity a sense of certainty may in the end force us to face the limits of our own cognition."
      ],
      [
        "或许，最深刻的恐惧并非来自未知，而是来自这样一种矛盾：我们明明知道得越来越多，却越来越无法确定这些知识将把我们带向何处。",
        "Perhaps the deepest fear comes not from the unknown but from this contradiction: we clearly know more and more, yet we are less and less able to be sure where this knowledge will take us."
      ],
      [
        "当一个人无法想象或面对自己的未来时，焦虑便不再只是对某个具体危险的恐惧，而可能成为对自身存在的怀疑。对于整个人类而言，是否也存在类似的困境？当科学与技术的发展超越了我们理解和预见其后果的能力，我们是否正在集体失去面对未来的确定感？",
        "When a person cannot imagine or face their own future, anxiety is no longer fear of some specific danger and may become doubt about one’s own existence. Does humanity as a whole face a similar predicament? When the development of science and technology outruns our ability to understand and foresee its consequences, are we collectively losing our sense of certainty in facing the future?"
      ],
      [
        "但我并不认为这意味着理性的失败。科学的伟大，恰恰在于它不断揭示人类认知的边界，并迫使我们修正曾经深信不疑的真理。真正危险的不是承认无知，而是将能够计算误认为能够理解，将能够创造误认为能够控制。",
        "But I do not think this means the failure of reason. The greatness of science lies precisely in its constant revealing of the boundaries of human cognition, and in forcing us to revise truths we once held unquestioningly. What is truly dangerous is not admitting ignorance, but mistaking the ability to calculate for the ability to understand, and the ability to create for the ability to control."
      ],
      [
        "读完这本书，我开始觉得，知识的终极价值或许不在于让人类征服世界，而在于使我们更加清醒地认识自己与世界的关系。",
        "Having finished the book, I have begun to feel that the ultimate value of knowledge may lie not in letting humanity conquer the world, but in helping us see more clearly how we stand in relation to it."
      ],
      [
        "当我们终于拥有改变一切的力量，却无法确定自己究竟想成为怎样的人时，真正需要被重新理解的，或许已经不再是世界，而是人类自身。",
        "When we finally hold the power to change everything yet cannot be sure what kind of people we want to be, what truly needs to be understood anew may no longer be the world, but humanity itself."
      ]
    ]
  },
  {
    "date": "2023-03-17",
    "title": "Love Beyond Reach",
    "slug": "when-love-cannot-reach",
    "category": "Novel",
    "book": {
      "cover": "a_little_life.jpg",
      "title": "A Little Life",
      "author": "Hanya Yanagihara",
      "language": "English",
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
      [
        "在《A Little Life》中，Hanya Yanagihara最令人难过的书写，并不是 Jude 经历了多少痛苦，而是当痛苦已经过去、危险已经消失、爱也终于到来时，他依然无法相信自己值得被爱。",
        "In *A Little Life*, the saddest thing Hanya Yanagihara writes is not how much pain Jude has been through, but that even after the pain has passed, the danger has gone and love has finally arrived, he still cannot believe he deserves to be loved."
      ],
      [
        "“我知道你爱我”与“我能够感受到自己值得被爱”之间，可能隔着一个人全部的生命经验。",
        "Between “I know you love me” and “I can feel that I am worthy of being loved” there may lie a person’s entire life experience."
      ],
      [
        "这两句话看似相近，却指向截然不同的世界。前者是一种对他人情感的认识，后者却关乎一个人如何理解自身的价值。我们可以相信别人的真诚，却依然无法相信自己配得上这份真诚。甚至越是被温柔地对待，越可能感到不安，因为这份爱与自己长久以来对自身的认识如此矛盾。",
        "These two sentences seem similar, yet they point to utterly different worlds. The first is an awareness of another person’s feelings; the second concerns how a person understands their own worth. We can believe in someone else’s sincerity and still be unable to believe we deserve it. The more gently we are treated, the more uneasy we may feel, because this love contradicts so sharply the understanding we have long held of ourselves."
      ],
      [
        "小说中，Jude的身体从来不只是承载创伤的容器。它更像一种不受意志支配的记忆：即使理性已经知道眼前的人不会伤害自己，身体仍可能本能地退缩。触碰既可能意味着亲密，也可能唤起恐惧；温柔有时反而触及他最无法承受的部分。",
        "In the novel, Jude’s body is never merely a vessel that carries trauma. It is more like a memory beyond the control of the will: even when reason already knows that the person in front of him will not hurt him, the body may still recoil by instinct. Touch can mean intimacy, but it can also summon fear; tenderness sometimes reaches the very part of him he cannot bear."
      ],
      [
        "创伤不仅改变了一个人记得什么，也可能改变他相信什么是自己应得的。当痛苦成为一个人理解世界的方式，幸福便不再只是难以获得的东西，甚至可能成为难以相信的东西。",
        "Trauma changes not only what a person remembers but also what they believe they deserve. When pain becomes the way a person understands the world, happiness is no longer only something hard to obtain; it may even become something hard to believe in."
      ],
      [
        "这也解释了小说中最令人心碎的矛盾：Jude 并非没有得到爱。Willem、Harold 和 Andy 都以不同的方式关心他，试图让他相信自己不必再独自承受一切。但这些爱越是真实，便越凸显出他内心那道难以逾越的距离。",
        "This also explains the novel’s most heartbreaking contradiction: Jude is not without love. Willem, Harold and Andy all care for him in their different ways, trying to make him believe he no longer has to bear everything alone. But the more real this love is, the more it highlights the distance within him that he cannot cross."
      ],
      [
        "他能够知道别人眼中的自己，却无法真正通过别人的眼睛重新认识自己。那些爱他的人所看见的温柔、聪慧与值得珍惜，在他自己的目光中，始终无法取代过去留下的羞耻与自我否定。",
        "He can know how others see him, yet cannot truly come to know himself through their eyes. The tenderness, intelligence and worth that those who love him see in him can never, in his own gaze, replace the shame and self-negation the past has left behind."
      ],
      [
        "我们常常相信，只要给予足够的耐心、陪伴与善意，另一个人终究会得到治愈。这种期待看似温柔，却也隐藏着一种要求：既然有人如此爱你，你为什么仍然无法快乐？",
        "We often believe that, given enough patience, companionship and kindness, another person will in the end be healed. This expectation seems gentle, but it hides a demand: since someone loves you this much, why can you still not be happy?"
      ],
      [
        "但爱可以改变一个人所处的现实，却未必能够改变他理解自身的方式。痛苦并不总是因为缺少爱而存在，也不会因为爱终于出现便自动消失。",
        "But love can change the reality in which a person lives, though it cannot necessarily change how they understand themselves. Pain does not always exist for lack of love, and it does not disappear automatically once love finally appears."
      ],
      [
        "这并不是说爱毫无意义。恰恰相反，小说中那些细小的关怀之所以动人，正是因为它们无法保证任何结果。陪伴不一定意味着拯救，温柔也不一定能够战胜记忆，但它们仍然是真实的。",
        "This is not to say that love is meaningless. Quite the opposite: the small acts of care in the novel are moving precisely because they guarantee no outcome. Companionship does not necessarily mean rescue, and tenderness does not necessarily defeat memory, but they are real all the same."
      ],
      [
        "或许，爱最困难的地方，不是愿意为另一个人付出多少，而是承认即使付出了全部，我们依然无法替他感受自己的价值，也无法替他决定如何理解自己。",
        "Perhaps the hardest part of love is not how much one is willing to give another person, but admitting that even after giving everything, we still cannot feel their worth on their behalf, nor decide for them how to understand themselves."
      ],
      [
        "我们总希望爱能够成为痛苦的答案，却很少愿意承认：有时候，爱只是爱，而不是答案。",
        "We always hope love can be the answer to pain, yet we rarely admit that sometimes love is only love, not an answer."
      ],
      [
        "《A Little Life》最终让我思考的，不只是一个人为什么无法接受爱，而是我们是否过于习惯用自己的善意，期待另一个人的改变。",
        "What *A Little Life* ultimately makes me think about is not only why a person cannot accept love, but whether we are too used to using our own kindness to expect change in another person."
      ],
      [
        "当一个人无法相信自己值得被爱时，我们能否继续爱他，而不把他的痊愈当作这份爱的证明？",
        "When a person cannot believe they deserve to be loved, can we keep loving them without treating their recovery as proof of that love?"
      ]
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
      "lines": [
        "History · c. 430 BCE",
        "Herodotus’s inquiry into the Greco-Persian Wars and the peoples around them. In its opening book, the Lydian king Croesus asks the Athenian Solon who is the happiest man in the world."
      ]
    },
    "place": "于加州斯坦福\nStanford, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "希罗多德《历史》中最让我印象深刻的，并不是波澜壮阔的希波战争，而是开篇吕底亚国王克洛伊索斯与雅典人梭伦的一段对话。拥有巨大财富与权力的克洛伊索斯，向梭伦展示自己的富足，期待被称为世上最幸福的人。梭伦却认为，在一个人的生命结束之前，我们无法真正判断他是否幸福。后来克洛伊索斯失去王国，才终于理解这句话的分量。",
        "What stayed with me most in Herodotus’s *Histories* was not the sweeping drama of the Greco-Persian Wars but a conversation near the start, between Croesus, king of Lydia, and the Athenian Solon. Croesus, possessed of vast wealth and power, shows Solon his riches and expects to be called the happiest man in the world. Solon holds instead that until a man’s life has ended, we cannot truly judge whether he was happy. Only after Croesus loses his kingdom does he finally understand the weight of those words."
      ],
      [
        "初读时，这似乎只是一个关于人生无常的古老寓言。但仔细想来，克洛伊索斯真正的错误，或许并不是高估了自己的财富，而是将幸运误认为命运。幸运是某个时刻恰好降临于我们的有利境遇，而命运则是我们试图赋予整段人生的连续性与必然性。幸运意味着事情原本可能以另一种方式发生；当我们把幸运理解为命运，便是在相信，自己今天所拥有的一切，不仅是过去努力的结果，也是未来理应延续的秩序。",
        "At first it seems like no more than an ancient fable about life’s uncertainty. But on reflection, Croesus’s real mistake may not have been overestimating his wealth but mistaking luck for fate. Luck is a favorable circumstance that happens to arrive at some moment; fate is the continuity and inevitability we try to impose on a whole life. Luck means things could have gone another way. When we take luck for fate, we come to believe that everything we have today is not only the result of past effort but also an order that ought to continue into the future."
      ],
      [
        "我们当然可以通过努力改变生活，但努力与结果之间，从来不存在完全确定的对应关系。一个人的成功，既可能来自能力与勤奋，也离不开出生的时代、家庭、社会环境，以及无数未曾意识到的偶然。然而，当成功持续得足够久，我们便容易逐渐忘记其中的偶然，把已经发生的事情理解为本来就应该发生的事情。幸运最隐蔽的地方，或许正是它会在时间的积累中，逐渐呈现出命运的模样。",
        "Of course we can change our lives through effort, but there has never been a fully determined link between effort and outcome. A person’s success may come from ability and diligence, but it also depends on the era they were born into, their family, their social environment, and countless accidents they never noticed. Yet when success lasts long enough, we easily forget the accidents in it and come to see what has happened as what was always meant to happen. The most hidden thing about luck, perhaps, is that over time it gradually takes on the look of fate."
      ],
      [
        "克洛伊索斯拥有财富、军队与王国，因此相信自己已经掌握了幸福。但梭伦的回答提醒他，拥有某种境遇与能够永久保有这种境遇，是两件完全不同的事。财富能够扩大我们应对不确定性的能力，却无法消除不确定性本身。我们可以规划未来，却无法保证未来按照规划发生。命运之所以令人敬畏，恰恰因为它不会因我们曾经的成功而承诺任何事情。",
        "Croesus had wealth, an army and a kingdom, and so believed he had mastered happiness. But Solon’s answer reminds him that having a certain circumstance and being able to keep it forever are two entirely different things. Wealth can widen our capacity to cope with uncertainty, but it cannot remove uncertainty itself. We can plan for the future, but we cannot guarantee that it will follow the plan. Fate is awe-inspiring precisely because it promises us nothing on account of our past success."
      ],
      [
        "这也让我重新思考财富与自由的关系。我们总以为，只要积累足够多的财富，终有一天便能够不再为生活担忧。但如果我们把安全感建立在财富必须不断增长、已有的一切必须永远保有的期待之上，那么财富越多，害怕失去的东西也可能越多。原本为了获得自由而进行的积累，反而可能让我们越来越难以接受生活中不可控制的部分。",
        "This also made me rethink the relationship between wealth and freedom. We tend to assume that once we have accumulated enough, we will one day be free of worry about our lives. But if we build our sense of security on the expectation that wealth must keep growing and that everything we have must be kept forever, then the more we have, the more we may fear losing. Accumulation that began as a way to gain freedom may make it harder and harder to accept the parts of life we cannot control."
      ],
      [
        "或许，梭伦真正提醒我们的，并不是幸福只能在死亡之后才能被判断，而是一个人不能因为眼下的幸运，就提前宣告自己已经战胜了命运。我们可以为自己的努力感到骄傲，也可以珍惜已经获得的财富与成就，却不必因此相信，自己比那些遭遇不幸的人更加值得拥有幸福。",
        "Perhaps what Solon really reminds us of is not that happiness can only be judged after death, but that no one should, because of present luck, declare in advance that they have defeated fate. We can be proud of our effort and cherish the wealth and achievements we have gained, without believing that we deserve happiness more than those who met misfortune."
      ],
      [
        "读到这里，我不禁觉得，成熟或许并不是终于拥有足够的能力掌控人生，而是在拥有越来越多的同时，依然能够承认其中有多少并非理所当然。",
        "Reading this, I cannot help feeling that maturity may not be finally having the power to control one’s life, but being able, even as one has more and more, to admit how much of it was never a given."
      ],
      [
        "我们花费大半生试图将幸运变成一种可以永久保有的命运，却可能忘记，真正的自由并不是确保自己永远不会失去，而是在知道一切都可能失去之后，仍然能够珍惜此刻的拥有。",
        "We spend most of our lives trying to turn luck into a fate we can keep forever, and may forget that real freedom is not making sure we will never lose, but being able to cherish what we have now, knowing that everything can be lost."
      ],
      [
        "如果我们今天所拥有的幸福，既来自自己的努力，也来自无数无法复制的偶然，那么我们究竟应该如何在为成功感到自豪的同时，不把自己的幸运误认为理所当然的命运？",
        "If the happiness we have today comes both from our own effort and from countless accidents that cannot be repeated, how should we take pride in our success without mistaking our luck for a fate we are owed?"
      ]
    ]
  },
  {
    "date": "2020-10-06",
    "title": "Who Pays for Prudence?",
    "slug": "the-great-debate",
    "category": "Political thought",
    "book": {
      "cover": "great_debate.jpg",
      "title": "The Great Debate: Edmund Burke, Thomas Paine, and the Birth of Right and Left",
      "author": "Yuval Levin",
      "language": "English",
      "lines": [
        "Political thought · Basic Books, 2013",
        "Levin retells the 1790s quarrel between Burke and Paine over the French Revolution, and argues that it set the terms of left and right in modern politics."
      ]
    },
    "place": "于加州圣克拉拉\nSanta Clara, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "当我们赞美一个社会的稳定时，是否想过，究竟是谁在享受稳定，又是谁在为稳定付出代价？读 Yuval Levin 的《The Great Debate》，最让我感兴趣的，并不是伯克与潘恩如何影响现代左右政治思想的形成，而是他们对政治正当性截然不同的理解：一个社会的制度，究竟应该从历史的延续中获得正当性，还是必须不断接受自由、平等与个人权利的检验？",
        "When we praise a society for its stability, have we asked who actually enjoys that stability, and who pays for it? In reading Yuval Levin’s *The Great Debate*, what interested me most was not how Burke and Paine shaped modern left and right political thought, but how differently they understood political legitimacy: should a society’s institutions draw their legitimacy from the continuity of history, or must they be tested again and again against liberty, equality and individual rights?"
      ],
      [
        "在伯克看来，社会并不是某一代人凭借理性就能够重新设计的产物，而是无数世代在漫长历史中逐渐形成的复杂秩序。传统、习俗与制度不仅承载着集体经验，也维系着个人之间的责任与信任。政治社会不仅属于活着的人，也连接着过去与未来的世代。因此，改革并非不应该发生，而是必须考虑那些超越个人理解能力的社会关系。潘恩则认为，任何制度都不能仅仅因为存在已久便获得正当性。过去的世代无权永久支配今天的人，每一代人都应当拥有依据自身权利重新决定政治秩序的自由。",
        "For Burke, society is not something one generation can redesign by reason alone, but a complex order formed gradually by countless generations over a long history. Tradition, custom and institutions carry collective experience, and they also sustain the responsibility and trust between individuals. A political society belongs not only to the living but also links the generations of the past and the future. Reform, then, is not something that should never happen; it must take into account social relationships that lie beyond any individual’s understanding. Paine held that no institution earns legitimacy merely by having existed for a long time. Past generations have no right to govern the living forever, and every generation should be free to decide its political order anew according to its own rights."
      ],
      [
        "我能够理解伯克对人类理性局限的警惕。他所捍卫的并不只是既有权力，更是一种对社会复杂性的谦逊。制度的价值未必能够完全通过抽象原则衡量，而那些看似陈旧的传统，也可能保护着个人免受任意权力的侵害。伯克并非一概反对变革，他对美国殖民地诉求的同情，以及对法国大革命的批评，恰恰体现了他对不同历史处境的判断：改革应当保存社会中值得延续的自由，而不是为了实现理想中的秩序，将已有的一切推倒重来。",
        "I can understand Burke’s wariness about the limits of human reason. What he defended was not only existing power but also a humility before the complexity of society. The value of an institution cannot always be fully measured by abstract principles, and traditions that look outdated may protect individuals from arbitrary power. Burke did not oppose change across the board. His sympathy for the claims of the American colonies and his criticism of the French Revolution show his judgment of different historical situations: reform should preserve the liberties worth continuing, rather than tear down everything that exists in order to realize an ideal order."
      ],
      [
        "但相比之下，我仍然更认同潘恩对政治正当性的追问：如果一种制度本身就是不公的，那么它究竟需要延续多少年，才能让这种不公被称为传统？伯克提醒我们，理性无法完全理解历史；潘恩则提醒我们，历史也无法自动证明自身的正当性。前者担心改革者低估改变的风险，后者担心人们高估现存秩序的合理性。",
        "Even so, I am still more persuaded by Paine’s question about political legitimacy: if an institution is unjust in itself, how many years must it last before that injustice can be called tradition? Burke reminds us that reason cannot fully understand history; Paine reminds us that history cannot automatically prove its own legitimacy. The former worries that reformers underestimate the risks of change, the latter that people overestimate the soundness of the existing order."
      ],
      [
        "美国女性选举权运动便让我想到这一矛盾。一个以自由与人民主权为建国理想的国家，却长期将女性排除在充分的政治参与之外。直到1920年，第十九修正案才在宪法层面禁止以性别为由剥夺选举权，而许多女性，尤其是非裔女性，仍须继续面对其他制度性障碍。回望这段历史，我们很容易将女性获得选举权理解为理所当然的进步，但当时关于家庭、社会秩序与政治参与的传统观念，同样曾被用来反对改革。不过，这并不能简单证明伯克式的渐进主义必然维护不公，因为选举权的扩展本身也可以通过既有宪政制度实现。它真正提出的问题是：当一种制度需要改变时，我们如何既不忽视改革的风险，也不让对风险的担忧成为无限期推迟正义的理由？",
        "The American women’s suffrage movement brings this tension to mind. A country founded on liberty and popular sovereignty long excluded women from full political participation. Only in 1920 did the Nineteenth Amendment write into the Constitution a ban on denying the vote on grounds of sex, and many women, Black women especially, still faced other institutional barriers. Looking back, it is easy to treat women’s suffrage as progress that was bound to come, but traditional ideas about family, social order and political participation were used at the time to oppose reform too. This does not simply prove that Burkean gradualism necessarily protects injustice, since the expansion of the vote could itself be achieved through existing constitutional institutions. The question it really raises is this: when an institution needs to change, how do we avoid both ignoring the risks of reform and letting worry about those risks become a reason to postpone justice indefinitely?"
      ],
      [
        "更令我在意的是，传统从来不是由所有人平等创造和继承的。那些有能力将自身利益写入法律、习俗与社会规范的人，往往也更有机会将这些利益解释为值得尊重的历史经验。但反过来说，传统也并非只属于既得利益者。长期形成的法律保障、地方自治与社会组织，同样可能成为弱势群体抵抗权力的资源。历史既可能保存压迫，也可能保存自由；因此，问题并不在于传统是否值得尊重，而在于我们如何辨别其中哪些经验值得继承，哪些不公必须改变。",
        "What concerns me more is that tradition has never been created and inherited equally by everyone. Those able to write their own interests into law, custom and social norms are often also better placed to present those interests as historical experience worthy of respect. Yet tradition does not belong only to the beneficiaries. Long-established legal protections, local self-government and social organizations can also become resources with which the weak resist power. History can preserve oppression, and it can preserve freedom. So the question is not whether tradition deserves respect, but how we tell which of its experiences are worth inheriting and which injustices must be changed."
      ],
      [
        "这也让我重新理解伯克与潘恩之间真正难以调和的分歧。伯克认为，政治首先需要对既有社会承担责任，不能轻易牺牲现实中的制度与关系去追求抽象的完美；潘恩则坚持，政治制度必须能够向每一个受其约束的人证明自身的正当性，不能让历史成为限制当代人自由的最终理由。两人所警惕的危险都是真实的：没有历史意识的改革可能摧毁自由，而没有权利原则约束的传统也可能延续不公。",
        "This also changed how I understand the divide between Burke and Paine that is truly hard to reconcile. Burke held that politics must first take responsibility for the society that exists, and must not lightly sacrifice real institutions and relationships in pursuit of abstract perfection. Paine insisted that political institutions must be able to justify themselves to every person they bind, and that history cannot be the final reason for limiting the freedom of people today. The dangers each of them feared are real: reform without a sense of history can destroy freedom, and tradition unconstrained by principles of rights can perpetuate injustice."
      ],
      [
        "或许我更倾向于潘恩，并不是因为我相信人类理性能够设计出完美的社会，而是因为我认为，任何制度都不应该仅凭自身的延续获得道德上的优先权。但伯克也让我意识到，认识到改变的必要，并不意味着我们已经知道如何改变。改革者有责任解释新制度如何运作，维护现状的人也有责任说明既有制度为何值得保留。两者都不应免于质疑。",
        "Perhaps I lean toward Paine not because I believe human reason can design a perfect society, but because I think no institution should gain moral priority merely by continuing to exist. But Burke also made me see that recognizing the need for change does not mean we already know how to change. Reformers have a duty to explain how the new institution would work, and defenders of the status quo have a duty to explain why the existing one deserves to be kept. Neither should be exempt from questioning."
      ],
      [
        "《The Great Debate》最终让我重新思考开篇那个关于稳定的问题。稳定当然值得珍惜，但它并不是一种不需要付出代价的状态。改变可能破坏已有的自由，不改变也可能让另一些人始终无法获得自由。真正的政治智慧，或许不在于永远选择改革或保守，而在于不让任何一方的代价因为另一方的安全而变得不可见。",
        "In the end, *The Great Debate* made me think again about the opening question of stability. Stability is certainly worth cherishing, but it is not a condition that costs nothing. Change may destroy the freedom we already have, and no change may leave others forever without it. Real political wisdom may lie not in always choosing reform or always choosing conservatism, but in not letting the cost borne by one side become invisible because of the safety of the other."
      ],
      [
        "我仍然相信历史值得尊重，但尊重历史不应意味着服从历史。伯克教会我们怀疑自己改变世界的能力，潘恩则提醒我们怀疑现存世界的正当性。两种怀疑都不可或缺，但当我们以审慎之名要求一些人继续等待时，至少应该诚实地承认：我们所保护的稳定，未必是所有人共同享有的稳定。",
        "I still believe history deserves respect, but respecting history should not mean obeying it. Burke teaches us to doubt our ability to change the world; Paine reminds us to doubt the legitimacy of the world as it is. Both doubts are indispensable, but when we ask some people to keep waiting in the name of prudence, we should at least honestly admit that the stability we are protecting is not necessarily a stability everyone shares."
      ],
      [
        "如果一种秩序的延续，必须以另一些人持续承受不公为代价，那么我们究竟是在审慎地保护社会，还是在让那些已经拥有自由的人，决定尚未拥有自由的人还需要等待多久？",
        "If an order can continue only at the price of others continuing to bear injustice, are we prudently protecting society, or letting those who already have freedom decide how much longer those who do not yet have it must wait?"
      ]
    ]
  },
  {
    "date": "2022-11-02",
    "title": "An Era’s Progress, and a Lifetime",
    "slug": "social-classes-in-china",
    "category": "Social analysis",
    "book": {
      "cover": "social_classes.jpg",
      "title": "中国社会各阶层分析 (An Analysis of the Social Strata in China)",
      "author": "梁晓声 Liang Xiaosheng",
      "language": "Chinese",
      "lines": [
        "Social analysis · Shenzhen Publishing House",
        "Liang Xiaosheng’s analysis of how China’s social classes fared through reform and opening up, and who gained and who lost."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA",
    "languages": ["Chinese", "English"],
    "prose": [
      [
        "我们习惯于从历史的终点回望一个时代，用经济增长、社会流动与生活水平的提高证明它的进步。但对于真正生活在其中的人，历史并不是一条已知终点的道路。一个国家可以用几十年完成转型，而对于普通人，那几十年就是他们无法重新度过的一生。读梁晓声的《人世间》，我时常想起他在1990年代写下的《中国社会各阶层分析》：当我们说一个时代变得更好时，究竟是谁的生活变得更好了？",
        "We are used to looking back at an era from history’s endpoint, and to proving its progress with economic growth, social mobility and rising living standards. But for the people who actually lived in it, history was not a road whose end was known. A country can complete a transformation in a few decades, and for ordinary people those decades are the one life they cannot live over. Reading Liang Xiaosheng’s *Ren Shi Jian* (人世间, “In the World of Men”), I kept thinking of his *Analysis of the Social Strata in China*, written in the 1990s: when we say an era has become better, whose lives have actually become better?"
      ],
      [
        "《中国社会各阶层分析》试图解释社会如何塑造人，《人世间》则让我们看见，被社会塑造的人如何度过自己的一生。前者观察改革开放过程中不同阶层的利益分化与命运变迁，后者则将这些抽象的社会关系写进周家几代人的生活。周秉义、周蓉与周秉昆出身于同一个工人家庭，却分别走向干部、知识分子与普通劳动者的人生。相同的家庭起点并没有带来相同的命运，而个人努力之外的教育机会、社会资源与历史机遇，也不断改变着他们能够抵达的地方。",
        "*Analysis of the Social Strata in China* tries to explain how society shapes people; *Ren Shi Jian* lets us see how people so shaped live out their lives. The former observes how interests diverged and fortunes changed among different classes during reform and opening up; the latter writes those abstract social relations into the lives of several generations of the Zhou family. Zhou Bingyi, Zhou Rong and Zhou Bingkun come from the same working-class family, yet go on to live as an official, an intellectual and an ordinary laborer. The same starting point in the family did not bring the same fate, and educational opportunity, social resources and historical chance, all beyond personal effort, kept changing where each of them could get to."
      ],
      [
        "我尤其记得周秉昆与郑娟的生活。郑娟独自照顾年迈的母亲和年幼的孩子，周秉昆则在明知这段关系会带来家庭压力的情况下，逐渐承担起照顾她们的责任。后来周家遭遇变故，郑娟又长期照料失去自理能力的周母。这些付出没有带来显著的社会地位，也很难被收入或职业成就衡量，却实实在在地维系着一个家庭的生活。相比之下，周秉义通过仕途参与城市治理，周蓉通过知识获得更广阔的选择空间。三兄妹的差异让我想到：我们以社会流动衡量进步，却很少追问，为什么一个人必须离开原来的阶层，才能被认为拥有了更好的人生？",
        "I especially remember the life of Zhou Bingkun and Zheng Juan. Zheng Juan cares alone for her aging mother and her young child, and Zhou Bingkun, knowing the relationship will bring pressure at home, gradually takes on the responsibility of looking after them. Later, when misfortune strikes the Zhou family, Zheng Juan also looks after Mrs. Zhou for years after she loses the ability to care for herself. These sacrifices bring no notable social standing and can hardly be measured in income or career achievement, yet they truly hold a family’s life together. By contrast, Zhou Bingyi takes part in running the city through an official career, and Zhou Rong gains a wider range of choices through knowledge. The differences among the three siblings make me think: we measure progress by social mobility, but seldom ask why a person must leave their original class before they can be said to have a better life."
      ],
      [
        "光字片的变迁则呈现了另一层矛盾。周秉昆与国庆、赶超等朋友曾经共享相似的工人生活，但随着市场化改革深入，原有的工作与生活保障逐渐发生变化，失业与谋生压力也改变了他们的人生。对一些人而言，改革意味着新的机会；对另一些人而言，却意味着熟悉的生活秩序不再可靠。《中国社会各阶层分析》讨论城市平民的处境，《人世间》则让我们看见，所谓社会结构调整，最终可能表现为一个家庭失去收入、一个人失去工作，以及曾经稳定的身份突然变得脆弱。",
        "The changes in the Guangzi district show another layer of contradiction. Zhou Bingkun and friends like Guoqing and Ganchao once shared a similar working life, but as market reform deepened, the job and living guarantees they had gradually changed, and unemployment and the pressure to make a living changed their lives. For some, reform meant new opportunity; for others, it meant that the familiar order of life could no longer be relied on. *Analysis of the Social Strata in China* discusses the situation of ordinary urban people, while *Ren Shi Jian* lets us see that what is called structural adjustment may in the end show up as a family losing its income, a person losing their job, and a once-stable identity suddenly becoming fragile."
      ],
      [
        "但我也不愿意将这些普通人的艰辛浪漫化。周秉昆的善良、郑娟的坚韧，以及朋友之间的相互扶持令人动容，却不意味着贫困与不平等因此变得合理。我们赞美他们在困境中保持尊严，不应该成为社会不必改善其处境的理由。一个人能够忍受多少苦难，与他是否本来就应该承受这些苦难，是两回事。文学让我们看见苦难中的人性，而社会分析则提醒我们，有些苦难并非命运使然，而是可以通过制度与资源分配加以改变的。",
        "But I do not want to romanticize the hardships of these ordinary people either. Zhou Bingkun’s kindness, Zheng Juan’s resilience and the way friends support one another are deeply moving, but that does not make poverty and inequality reasonable. Our praise for how they keep their dignity in hardship should not become a reason for society not to improve their situation. How much suffering a person can endure and whether they should have had to bear it in the first place are two different matters. Literature lets us see humanity within suffering, while social analysis reminds us that some suffering is not decreed by fate but can be changed through institutions and the distribution of resources."
      ],
      [
        "这也让我意识到，两部作品之间存在一种深刻的互补。《中国社会各阶层分析》将人放进社会结构，揭示个人选择背后的不平等；《人世间》则让人从阶层标签中重新走出来，拥有无法被统计概括的情感、责任与尊严。周秉义不只是干部，周蓉不只是知识分子，周秉昆也不只是普通劳动者。社会结构能够解释他们拥有怎样的机会，却无法完整解释他们如何对待身边的人。人既不是完全自由地创造自己的命运，也不是只能被动接受时代的安排。",
        "This also made me see a deep complementarity between the two works. *Analysis of the Social Strata in China* puts people into the social structure and exposes the inequality behind individual choices; *Ren Shi Jian* lets people step out of their class labels again, with feelings, responsibilities and a dignity that statistics cannot sum up. Zhou Bingyi is not only an official, Zhou Rong not only an intellectual, and Zhou Bingkun not only an ordinary laborer. Social structure can explain what opportunities they had, but cannot fully explain how they treated the people around them. People neither create their fates in complete freedom nor merely accept the arrangements of their time."
      ],
      [
        "更值得思考的是，社会进步与个人幸福并不必然同步。周秉义推动光字片改造，体现了公共治理改善普通人居住条件的可能；但即使破旧的街区最终得以更新，那些在旧日生活中失去的亲人、错过的机会与无法挽回的遗憾，也不会因此重新归来。历史可以在下一代实现更充分的繁荣，却无法补偿每一个人已经度过的岁月。宏观意义上的成功，无法自动抵消微观意义上的遗憾。",
        "Even more worth thinking about is that social progress and personal happiness do not necessarily move together. Zhou Bingyi’s push to rebuild the Guangzi district shows how public governance can improve ordinary people’s housing; but even if the run-down neighborhood is finally renewed, the relatives lost in the old life, the chances missed and the regrets that cannot be undone will not come back because of it. History can bring fuller prosperity to the next generation, but it cannot make up for the years each person has already lived. Success at the macro level cannot automatically cancel regret at the micro level."
      ],
      [
        "因此，我越来越觉得，一个社会的进步不应该仅仅用多少人实现了阶层跃升来衡量，更应该看那些没有跃升的人能否生活得更好。真正值得追求的，或许不是让每个人都成为周秉义或周蓉，而是让那些像周秉昆一样留在普通生活中的人，不必通过不断向上攀升来证明自身的价值。",
        "So I increasingly feel that a society’s progress should be measured not only by how many people have moved up a class, but by whether those who have not moved up can live better. What is really worth pursuing may not be to let everyone become a Zhou Bingyi or a Zhou Rong, but to let people who, like Zhou Bingkun, remain in ordinary life not have to keep climbing to prove their worth."
      ],
      [
        "《中国社会各阶层分析》让我们看见时代如何改变社会，《人世间》则让我们追问，这些改变究竟如何落在每一个人身上。我们当然可以赞美一个时代创造了多少机会，但也应该记得，机会的增加并不意味着每个人都能重新选择自己的人生。",
        "*Analysis of the Social Strata in China* shows us how an era changes society; *Ren Shi Jian* makes us ask how those changes actually land on each person. We can certainly praise an era for how many opportunities it created, but we should also remember that more opportunity does not mean everyone can choose their life over again."
      ],
      [
        "或许，衡量一个时代最深刻的尺度，不是它让多少人走出了原来的阶层，而是那些没有走出去的人，是否也不再需要为自己的平凡付出代价。",
        "Perhaps the deepest measure of an era is not how many people it let leave their original class, but whether those who did not leave no longer have to pay a price for being ordinary."
      ],
      [
        "毕竟，时代可以继续向前，而人的一生只有一次。",
        "After all, an era can keep moving forward, but a life comes only once."
      ]
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
      "lines": [
        "Novel · China Youth Press edition",
        "Liang Xiaosheng’s Mao Dun Prize-winning novel, following the three children of a working-class family in northeast China through decades of change."
      ]
    },
    "place": "于加州利弗莫尔\nLivermore, CA"
  },
  {
    "date": "2025-07-04",
    "title": "A Lifetime of Making Peace With the Past",
    "slug": "pinball-1973",
    "category": "Novel",
    "book": {
      "cover": "pinball.jpg",
      "title": "1973年的彈珠玩具 (Pinball, 1973)",
      "author": "村上春樹 Haruki Murakami",
      "language": "Traditional Chinese",
      "lines": [
        "Novel · Kodansha, 1980 · Traditional Chinese edition",
        "A man searches for a pinball machine he once loved, while his friend the Rat tries to leave the town and the life he cannot settle into."
      ]
    },
    "place": "於台灣花蓮\nHualien, Taiwan",
    "languages": ["Traditional Chinese", "English"],
    "prose": [
      [
        "有人說，童年的陰影需要一生來治癒。但我漸漸覺得，真正難以擺脫的，未必是童年發生過什麼，而是那些早年的經歷如何在我們尚未察覺時，塑造了後來的人生。我們以為自己早已告別過去，卻可能仍然按照過去留下的情感習慣生活。讀村上春樹的《1973年的彈珠玩具》，我一直在想：如果今天的我們，是由無數已經消失的昨天塑造而成，那麼所謂成長，究竟是不斷成為新的自己，還是不斷尋找那個已經失去的自己？",
        "Some say the shadows of childhood take a lifetime to heal. But I have come to feel that what is truly hard to shake is not necessarily what happened in childhood, but how those early experiences shaped our later lives before we noticed. We think we have said goodbye to the past long ago, yet we may still be living by the emotional habits it left behind. Reading Haruki Murakami’s *Pinball, 1973*, I kept wondering: if the people we are today are shaped by countless yesterdays that no longer exist, is growing up a matter of becoming a new self again and again, or of searching again and again for the self we have lost?"
      ],
      [
        "小說中的「我」執著於尋找一台曾經玩過的彈珠遊戲機。那不過是一件普通的舊物，既沒有特別的價值，也無法改變他現在的生活。然而，當他終於在堆滿廢棄機器的倉庫裡與它重逢時，這場尋找似乎獲得了某種超越物品本身的意義。他真正想找回的，或許不是那台機器，而是曾經站在機器面前的自己，以及那個尚未經歷後來種種失去的年代。",
        "The narrator of the novel is fixated on finding a pinball machine he once played. It is just an ordinary old thing, of no special value, and it cannot change his life now. Yet when he finally meets it again in a warehouse full of discarded machines, the search seems to take on a meaning beyond the object itself. What he really wants to recover may not be the machine but the self who once stood in front of it, and the time before the losses that came later."
      ],
      [
        "與此同時，「鼠」卻走在另一條方向相反的道路上。「我」試圖透過尋找一件舊物，重新建立自己與過去的聯繫；「鼠」則試圖離開熟悉的城市、酒吧與人際關係，擺脫一種始終無法融入的生活。他擁有相對優裕的物質條件，卻無法因此獲得內心的安定。對「我」而言，過去似乎藏著某種值得找回的東西；對「鼠」而言，過去卻像是一種必須離開的束縛。一個向過去靠近，一個努力與過去拉開距離，但他們都無法真正回答，自己究竟在尋找什麼。",
        "Meanwhile the Rat walks a road in the opposite direction. The narrator tries to rebuild his connection to the past by searching for an old object; the Rat tries to leave the familiar city, the bar and his relationships, to escape a life he has never been able to fit into. He is comparatively well off materially, but that gives him no inner peace. For the narrator, the past seems to hold something worth recovering; for the Rat, the past is a constraint he must break free of. One moves toward the past and the other works to put distance between himself and it, yet neither can truly answer what he is looking for."
      ],
      [
        "我覺得這種對照尤其耐人尋味。「我」至少能將自己的失落寄託在一台具體的機器上，於是他的懷念有了方向，也有了可以抵達的終點。「鼠」的不安卻沒有如此明確的對象。他與周圍世界的疏離，並不能透過找回某件東西得到解決，甚至連自己想要離開的究竟是什麼，也未必能夠說清。或許有些人比較幸運，能夠為自己的失落找到一個名字；另一些人卻只能感受到生活中始終存在某種缺失，卻不知道那個缺失從何而來。",
        "I find this contrast especially intriguing. The narrator can at least attach his sense of loss to a concrete machine, so his longing has a direction and an end he can reach. The Rat’s unease has no such clear object. His estrangement from the world around him cannot be resolved by recovering something, and he may not even be able to say what exactly he wants to leave. Perhaps some people are luckier and can find a name for their loss, while others can only feel that something has always been missing from their lives without knowing where the lack comes from."
      ],
      [
        "這讓我想到，我們對過去的懷念，常常並不是因為過去真的比現在美好，而是因為那時的自己還不知道未來會失去什麼。年輕時擁有的某些關係、期待與安全感，在當時或許平凡得不值得記住，直到它們消失以後，我們才意識到那些看似微不足道的瞬間，原來構成了自己的一部分。我們懷念的也許不是某個地方、某件舊物，而是那個仍然能夠毫無保留地相信某些事情的自己。",
        "This makes me think that our nostalgia for the past is often not because the past was truly better than the present, but because the self of that time did not yet know what the future would take away. Some relationships, expectations and feelings of security we had when young may have been too ordinary to be worth remembering then, and only after they vanished did we realize that those seemingly trivial moments had become a part of us. What we miss may not be a place or an old object but the self who could still believe in certain things without reservation."
      ],
      [
        "我偶爾也會想像，如果有一天重新走進童年熟悉的街道，看到那些曾經每天經過的建築，究竟會是什麼感受。或許街道依然在那裡，房屋也沒有太大變化，但我已經無法像當年那樣理解它們。小時候覺得漫長的道路，如今可能不過幾分鐘就能走完；曾經以為永遠不會改變的生活，也早已消失在記憶之中。最令我感傷的，不是那些地方變了，而是即使它們完全沒有改變，我也無法重新擁有當時看待世界的目光。原來時間帶走的不只是我們擁有過的東西，也包括我們曾經感受世界的方式。",
        "I sometimes imagine what it would feel like to walk again down the streets of my childhood and see the buildings I once passed every day. The streets might still be there and the houses little changed, but I could no longer understand them as I once did. A road that felt long as a child might now take only a few minutes to walk, and a life I once thought would never change has long since vanished into memory. What saddens me most is not that those places have changed, but that even if they had not changed at all, I could not get back the way I saw the world then. Time takes away not only what we once had but also the way we once felt the world."
      ],
      [
        "但「鼠」又讓我意識到，並不是每個人都渴望回到過去。有時候，我們想要逃離的，恰恰是那個曾經的自己，以及過去賦予我們的身份與期待。「鼠」對自己所處環境的疏離，使我想到一種更難以言說的困境：當一個人已經擁有別人眼中值得羨慕的生活，卻仍然感到不快樂時，他甚至很難為自己的不快樂找到正當的理由。於是，離開似乎成為唯一可以想像的改變，儘管他並不知道離開之後會抵達哪裡。",
        "But the Rat also made me realize that not everyone longs to return to the past. Sometimes what we want to flee is exactly the person we used to be, and the identity and expectations the past gave us. The Rat’s estrangement from his surroundings reminds me of a harder predicament to put into words: when someone already has a life others envy and still feels unhappy, he can hardly find a legitimate reason for his unhappiness. Leaving then seems the only change he can imagine, though he does not know where it will take him."
      ],
      [
        "從這個角度看，「我」與「鼠」其實代表了兩種面對自我認同的方式。「我」試圖透過記憶確認自己曾經是誰，「鼠」則試圖透過離開，擺脫別人認為他應該成為的樣子。前者害怕失去與過去的聯繫，後者害怕永遠無法脫離過去的限制。但兩人共同面對的問題是：如果我們始終需要透過過去來理解自己，那麼我們究竟還有多少自由，去成為一個不同的人？",
        "Seen this way, the narrator and the Rat represent two ways of facing one’s identity. The narrator tries to confirm through memory who he used to be; the Rat tries, by leaving, to shed what others think he should become. The first fears losing his tie to the past, the second fears never escaping its limits. But the question they share is this: if we always need the past in order to understand ourselves, how much freedom do we really have to become a different person?"
      ],
      [
        "小說中那台終於被找到的彈珠遊戲機，在我看來更像是一場遲來的告別。機器依然存在，曾經的時間卻無法恢復。「我」可以重新見到它，卻無法重新成為當年站在它面前的人；而「鼠」即使離開熟悉的地方，也未必能將自己的不安留在身後。一個人的尋找終於有了結果，另一個人的離開才剛剛開始，但兩者都沒有真正解決時間留下的問題。原來找回與離開，有時只是我們試圖改變自己與過去關係的兩種方式。",
        "The pinball machine that is finally found in the novel seems to me more like a belated farewell. The machine is still there, but the time that once surrounded it cannot be restored. The narrator can see it again but cannot become again the person who stood in front of it; and the Rat, even after leaving the familiar place, may not leave his unease behind. One man’s search has at last borne fruit, another’s departure has only just begun, but neither has truly settled what time has left behind. It seems that recovering and leaving are sometimes just two ways of trying to change our relationship with the past."
      ],
      [
        "《1973年的彈珠玩具》最打動我的，恰恰是它沒有為這兩種人生提供明確的答案。村上春樹沒有告訴我們，懷念比逃離更值得肯定，也沒有讓人物因為一次重逢或一次離開便突然獲得完整的自我。他們只是繼續生活，帶著那些無法解釋的缺失，慢慢走向未知的明天。",
        "What moves me most about *Pinball, 1973* is precisely that it offers no clear answer for either life. Murakami does not tell us that nostalgia is worth more than escape, nor does he let his characters suddenly gain a whole self through one reunion or one departure. They simply go on living, carrying losses they cannot explain, and slowly walk toward an unknown tomorrow."
      ],
      [
        "或許，我們用一生與過去和解，並不是為了最終成為那個未曾受傷的自己，而是逐漸理解：過去可以解釋我們為什麼成為今天的樣子，卻不必決定我們以後只能成為怎樣的人。",
        "Perhaps we spend a lifetime making peace with the past not to become, in the end, the self that was never hurt, but to come gradually to understand that the past can explain why we became who we are today without having to decide who we can be from now on."
      ],
      [
        "「我」讓我明白，有些東西即使找回來，也無法讓時間倒流；「鼠」則讓我明白，有些東西即使拋在身後，也不會因此消失。",
        "The narrator taught me that some things, even when recovered, cannot turn time back; the Rat taught me that some things, even when left behind, do not disappear."
      ],
      [
        "我們終究既無法真正回到過去，也無法徹底逃離過去。或許成長最困難的地方，就在於不再需要透過找回什麼，或離開什麼，才能允許自己繼續生活。",
        "In the end we can neither truly return to the past nor fully escape it. Perhaps the hardest part of growing up is no longer needing to recover something, or to leave something, before we allow ourselves to go on living."
      ]
    ]
  },
  {
    "date": "2022-12-21",
    "title": "The Freedom to Leave, the Price of Staying",
    "slug": "because-i-hate-korea",
    "category": "Novel",
    "book": {
      "cover": "hate_korea.jpg",
      "title": "한국이 싫어서 (Because I Hate Korea)",
      "author": "장강명 Jang Gang-myeong",
      "language": "Korean",
      "lines": [
        "Novel · Minumsa, 2015 · Original Korean edition",
        "A young woman leaves a stable job at a Korean financial company for a new life in Australia, and tries to explain why."
      ]
    },
    "place": "于韩国首尔\nSeoul, South Korea",
    "languages": ["Chinese", "English"],
    "blocks": [
      ["sub", "——读张康明《한국이 싫어서》（因为讨厌韩国）", "—Reading Jang Gang-myeong’s *한국이 싫어서* (“Because I Hate Korea”)"],
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
    "date": "2012-08-01",
    "title": "What Memory Makes of Love",
    "slug": "the-lover",
    "category": "Novel",
    "book": {
      "cover": "lamant.jpg",
      "title": "L’Amant",
      "author": "Marguerite Duras",
      "language": "French",
      "lines": [
        "Novel · Éditions de Minuit, 1984",
        "An old woman remembers the affair she had at fifteen and a half with a wealthy Chinese man in French Indochina."
      ]
    },
    "place": "于越南胡志明市\nHo Chi Minh City, Vietnam",
    "languages": ["Chinese", "English"],
    "prose": [
      ["《情人》最令我着迷的，并不是那个十五岁半的法国少女与中国情人之间的爱情，而是杜拉斯始终没有让我们确定：我们读到的究竟是少女当年真实的感受，还是一个年老的女人在漫长岁月之后，为那段经历找到的解释。", "What fascinates me most about *L’Amant* is not the love between the fifteen-and-a-half-year-old French girl and her Chinese lover, but the fact that Duras never lets us be sure whether what we are reading is the girl’s real feeling at the time, or an explanation that an old woman, after long years, has found for that experience."],
      ["小说开头，杜拉斯没有从少女时代写起，而是先让我们看见一个衰老的女人，随后才突然回到湄公河上的渡船，回到那个戴着男式毡帽、穿着旧丝裙、脚踩金色高跟鞋的少女。", "The novel does not begin in the girl’s youth. Duras first shows us an aged woman, and only then does it turn abruptly back to the ferry on the Mekong, to the girl in a man’s felt hat, a worn silk dress and gold high-heeled shoes."],
      ["尤其令我难忘的是，杜拉斯反复描写这一形象，仿佛它是一张决定了她一生的照片。然而，那张照片其实从未被拍摄。", "What I find most unforgettable is that Duras describes this image again and again, as if it were a photograph that decided her whole life. Yet that photograph was never taken."],
      ["我觉得，这个细节揭示了整部小说最深刻的矛盾：记忆并不只是保存过去，也在不断重新创造过去。少女当年或许只是穿着自己能够找到的衣服，但多年之后，那顶帽子、那双高跟鞋，已经成为贫困、欲望与早熟的象征。我们无法确定，这些意义究竟属于当年的少女，还是后来不断回望她的女人。", "I think this detail reveals the deepest contradiction of the whole novel: memory does not merely preserve the past, it keeps re-creating it. The girl may simply have worn whatever clothes she could find, but years later the hat and the high heels have become symbols of poverty, desire and precocity. We cannot be sure whether these meanings belong to the girl of that time or to the woman who keeps looking back at her."],
      ["而这一切发生在法属印度支那。", "And all of this takes place in French Indochina."],
      ["少女来自贫穷的法国殖民者家庭，中国情人却出身富裕的华人家庭。他拥有金钱与汽车，她则拥有殖民社会赋予白人的身份优势。经济上，他比她富有；种族等级上，她却处于更有利的位置。", "The girl comes from a poor family of French colonists, while her Chinese lover comes from a wealthy Chinese family. He has money and a car; she has the advantage of status that colonial society grants to whites. Economically he is richer than she is; in the racial hierarchy she stands in the more favorable position."],
      ["这种交错的权力，使他们的关系无法被简单理解为富有男人对贫穷少女的占有，也无法被浪漫化为超越阶级与种族的爱情。", "This crisscrossing of power means their relationship cannot be understood simply as a rich man’s possession of a poor girl, nor romanticized as a love that transcends class and race."],
      ["在渡船上，男人走近她，显得紧张而拘谨，少女却表现出与年龄不相称的镇定。但我始终怀疑，我们是否应该完全相信这种镇定。一个十五岁半的少女，真的能够如此清楚地理解自己的欲望吗？还是说，年老的叙述者已经知道后来发生了什么，因此将某种清醒与主动，重新赋予了当年的自己？", "On the ferry the man approaches her, nervous and constrained, while the girl shows a composure out of keeping with her age. But I have always wondered whether we should believe that composure entirely. Could a girl of fifteen and a half really understand her own desire so clearly? Or does the old narrator, who knows what happened afterward, give her younger self a clarity and agency she did not then have?"],
      ["这种疑问在堤岸街的房间里变得更加复杂。少女与中国情人的亲密，始终伴随着金钱、家庭贫困与身份差异。她的家人接受男人带来的物质好处，却仍然轻视他的中国人身份；而男人虽然富有，也无法摆脱父亲对婚姻的安排。", "The question becomes more complicated in the room in Cholon. The girl’s intimacy with her Chinese lover is always accompanied by money, family poverty and differences of status. Her family accepts the material benefits the man brings yet still looks down on him for being Chinese; and the man, though wealthy, cannot escape his father’s arrangements for his marriage."],
      ["我觉得，杜拉斯真正写出的，不是爱情如何战胜这些限制，而是欲望如何在不平等之中发生。少女的主动并不能消除贫困对选择的影响，男人的财富也无法让他摆脱殖民社会与家庭秩序的束缚。", "What Duras really writes, I think, is not how love triumphs over these constraints but how desire arises within inequality. The girl’s initiative cannot remove the effect of poverty on her choices, and the man’s wealth cannot free him from the bonds of colonial society and the family order."],
      ["小说不断变化的叙述人称，又让这一切更加难以确定。有时，叙述者说“我”，仿佛仍然能够触及少女当年的身体；有时，她又把年轻的自己称作“她”，像是在观察一个陌生人。", "The novel’s constantly shifting grammatical person makes all this harder still to pin down. Sometimes the narrator says “I,” as if she could still touch the girl’s body of that time; sometimes she calls her younger self “she,” as if observing a stranger."],
      ["那个少女确实是她，却也已经不再是她。", "That girl is indeed her, and also no longer her."],
      ["这种距离，在少女离开印度支那的轮船场景中尤其动人。她终于离开中国情人，乘船前往法国。在航行途中，她听见音乐，突然哭了。", "This distance is especially moving in the scene on the ship that carries the girl away from Indochina. She has finally left her Chinese lover and is sailing for France. During the voyage she hears music and suddenly weeps."],
      ["此前，她似乎始终保持着某种镇定。但直到真正离开，她才仿佛第一次意识到自己失去了什么。", "Until then she seems always to have kept a certain composure. Only on truly leaving does she seem to realize for the first time what she has lost."],
      ["然而，我仍然不确定，那场哭泣是否意味着她终于明白自己爱着那个男人。或许当年的她只是感到无法解释的悲伤，而多年后的叙述者，才逐渐将这种悲伤理解为爱情。", "Yet I am still not sure whether that weeping means she finally understands that she loved the man. Perhaps at the time she felt only an inexplicable sadness, and it was the narrator, years later, who gradually came to understand that sadness as love."],
      ["小说结尾，多年后的中国情人在电话里告诉她，自己始终爱着她。", "At the end of the novel, years later, the Chinese lover tells her over the telephone that he has always loved her."],
      ["在通常的爱情小说里，这样的告白或许能够证明年轻时的一切都是真正的爱情。但在杜拉斯这里，它反而让我更加犹豫。因为这句话只能从多年之后返回过去，为那些早已结束的时刻赋予新的意义，却无法证明少女当时究竟理解了多少。", "In an ordinary love story, such a confession might prove that everything in youth was true love. But in Duras it makes me hesitate more. This sentence can only travel back from years later, giving new meaning to moments long over, and cannot prove how much the girl understood at the time."],
      ["而且，即使爱情确实存在，也无法抹去金钱、种族与阶级曾经塑造他们关系的事实。爱情可以是真实的，却未必因此就是平等的。", "And even if love did exist, it cannot erase the fact that money, race and class shaped their relationship. Love can be real without therefore being equal."],
      ["读完小说，我最难忘的仍然是那张从未拍摄过的照片。", "After finishing the novel, what I remember most is still the photograph that was never taken."],
      ["十五岁半的少女站在湄公河的渡船上，还不知道自己即将遇见谁，也不知道那段经历将如何留在她的生命之中。", "A girl of fifteen and a half stands on the ferry across the Mekong, not yet knowing whom she is about to meet, nor how that experience will stay in her life."],
      ["多年以后，一个已经衰老的女人不断回到那个瞬间，试图从少女的姿态与目光中，辨认出后来那个自己的起点。", "Years later an aged woman keeps returning to that moment, trying to recognize in the girl’s bearing and gaze the starting point of the self she became."],
      ["但她可以重新描写那个少女，却再也无法像她一样，对未来一无所知。", "But she can describe that girl anew, and can never again be like her, knowing nothing of the future."],
      ["或许，回忆最令人悲伤的地方，并不是我们无法回到过去，而是当我们终于能够理解过去时，那个真正经历过去的自己，早已不在那里了。", "Perhaps the saddest thing about memory is not that we cannot return to the past, but that when we are finally able to understand it, the self who actually lived it is long since gone."]
    ]
  }
];
