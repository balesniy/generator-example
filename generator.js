const templates = [
  `\t<article>
\t\t<h1 class="fs-3 heading">Стратегии продвижения в карьере</h1>
\t\t<p><em class="accent">Развитие профессиональных навыков и личностного потенциала</em> - главная составляющая успеха в карьере. Непрерывное обучение, расширение кругозора, работа над собой помогут достичь поставленных целей. </p>
\t\t<h2 class="fs-2 heading">Менторство и коучинг</h2>
\t\t<p><b class="accent">Ментор</b>, прошедший путь, который вы хотите пройти, может помочь избежать ошибок и поделиться опытом. Что касается коучинга, то это отличный способ получить обратную связь и узнать о слабых сторонах.</p>
\t\t<h3 class="fs-1 heading">Сетевое маркетинговое агентство</h3>
\t\t<p>Открытие своего бизнеса - хороший шаг на пути к успеху. Сетевое маркетинговое агентство даст возможность приобрести новые навыки в продажах и коммуникациях, а также повысить уверенность в себе.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li><i class="accent">Участие в мероприятиях</i> - отличная возможность познакомиться с единомышленниками и расширить круг знакомств</li>
\t\t\t<li><i class="accent">Планирование своего времени</i> - эффективное управление временем поможет добиваться результатов быстрее</li>
\t\t</ul>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Цели для студентов</h1>
\t\t<p><em class="accent">Цель</em> – это то, чего вы хотите достигнуть. Определите свои цели и <strong class="accent">сосредоточьтесь</strong> на них.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<h3 class="fs-1 heading">Краткосрочные цели:</h3> учеба каждый день, подготовка к экзаменам;
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<h3 class="fs-1 heading">Среднесрочные цели:</h3> получение высшего образования, участие в проектах по выбору;
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<h3 class="fs-1 heading">Долгосрочные цели:</h3> карьерный рост, достижение успеха в профессии.
\t\t\t</li>
\t\t</ul>
\t\t<p><i class="fs-3 accent">"Определите свои цели верно и они поведут вас к успеху."</i></p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Тренды благополучия</h1>
\t\t<p><em class="accent">Благополучие</em> - это неотъемлемая часть здорового образа жизни. Ниже мы рассмотрим несколько популярных трендов в этой сфере.</p>
\t\t<h2 class="fs-2 heading">Сон и релаксация</h2>
\t\t<p><b class="accent">Хороший отдых</b> - ключ к успеху в любом деле. Рекомендуется спать не менее 7-8 часов в сутки. Также полезно делать паузы и упражнения для расслабления в течение дня.</p>
\t\t<h3 class="fs-1 heading">Питание и фитнес</h3>
\t\t<ul class="bg bg-color">
\t\t\t<li><i class="accent">Овощи и фрукты </i>- незаменимый элемент каждого приема пищи.</li>
\t\t\t<li><i class="accent">Регулярные физические упражнения </i>- помогут поддерживать форму и укреплять иммунную систему.</li>
\t\t\t<li><i class="accent">Медитация </i>- поможет сохранять эмоциональное равновесие.</li>
\t\t</ul>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Забота о Здоровье Кожи</h1>
\t\t<p><em>Здоровая кожа</em> - залог прекрасного внешнего вида. Чистота, увлажнение и питание - основные составляющие заботы о коже.</p>
\t\t<h2 class="fs-2 heading">Очищение Кожи</h2>
\t\t<p><b class="accent">Утром:</b> очистительный гель для лица. <br><b class="accent">Вечером:</b> молочко для снятия макияжа и очистительный тоник.</p>
\t\t<h3 class="fs-1 heading">Уход за Кожей Вокруг Глаз</h3>
\t\t<p><em class="accent">Крем для глаз</em>, богатый антиоксидантами, помогает защитить нежную кожу вокруг глаз от возрастных изменений.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>Массажными движениями нанесите крем под глаза;</li>
\t\t\t<li>Средним пальцем легко потапливайте кожу вокруг глаз;</li>
\t\t\t<li>Храните крем в холодильнике для уменьшения отечности и устранения темных кругов под глазами.</li>
\t\t</ul>
\t\t<p><i class="fs-2 accent">*Рекомендуется использовать солнцезащитный крем для защиты от УФ-лучей.</i></p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Написание романа</h1>
\t\t<p><b class="accent">Содержание:</b></p>
\t\t<ul class="bg bg-color">
\t\t\t<li><a class="accent" href="#idea">Получение идеи</a></li>
\t\t\t<li><a class="accent" href="#characters">Создание персонажей</a></li>
\t\t\t<li><a class="accent" href="#plot">Строительство сюжета</a></li>
\t\t</ul>

\t\t<h2 id="idea" class="fs-2 heading">Получение идеи</h2>
\t\t<p>Чтобы начать писать роман, нужно иметь хорошую идею. Найдите что-то, что вас вдохновляет.</p>

\t\t<h2 id="characters" class="fs-2 heading">Создание персонажей</h2>
\t\t<p>Хороший роман нуждается в интересных персонажах. Создайте главных героев и определите их характеры.</p>

\t\t<h2 id="plot" class="fs-2 heading">Строительство сюжета</h2>
\t\t<p>Развивайте свой сюжет постепенно, принимая в расчет действия ваших персонажей. Не торопитесь!</p>

\t\t<em class="fs-1 accent">Не забывайте описывать настроения своих героев - это поможет читателям лучше понять, что происходит на страницах вашего романа.</em>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Изучение шитья</h1>

\t\t<p><em class="accent">Шитье</em> - это увлекательное занятие, которое может стать и хобби, и профессией. Но для этого нужно изучить некоторые основы.</p>

\t\t<h2 class="fs-2 heading">Выбор ткани</h2>

\t\t<p><em class="accent">Ткань</em> играет важную роль в шитье. Она должна быть подходящей по качеству, цвету и текстуре для конкретного изделия.</p>

\t\t<ul class="bg bg-color">
\t\t\t<li>Натуральные ткани - лучший выбор для начинающих.</li>
\t\t\t<li>Синтетические ткани могут быть сложнее в обработке, но дешевле их натуральных аналогов.</li>
\t\t</ul>

\t\t<h3 class="fs-1 heading">Необходимые инструменты</h3>

\t\t<p><em class="accent">Инструменты</em>, необходимые для шитья:</p>

\t\t<ul>
\t\t\t<li><b class="accent">Швейная машинка;</b></li>
\t\t\t<li><b class="accent">Ножницы;</b></li>
\t\t\t<li><b class="accent">Иголки;</b></li>
\t\t\t<li><b class="accent">Нитки.</b></li>
\t\t</ul>

\t\t<p><i class="fs-2 accent">Удачи в изучении нового увлекательного дела!</i></p>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Здоровые рецепты десертов</h1>
\t\t<p><em class="accent">Десерты</em> – это самое сладкое искушение, которому трудно устоять. Но не все десерты вредны для здоровья. Существует множество рецептов, которые можно готовить, не нарушая <b class="accent">принципы правильного питания</b>.</p>
\t\t<h2 class="fs-2 heading">Фруктовый салат</h2>
\t\t<p>Возьмите несколько видов фруктов: яблоко, банан, апельсин. Нарежьте их кусочками и положите в миску. Добавьте немного орехов и изюма. Посыпьте всё корицей или шоколадной крошкой.</p>
\t\t<h3 class="fs-1 heading">Малиновый творог</h3>
\t\t<p>Смешайте обезжиренный творог с малинами. Добавьте немного цедры лимона и перетрите всё в блендере до однородной массы. Положите получившийся <em class="accent">малиновый крем</em> на слой овсяных хлопьев.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li><i>Никакого сахара!</i></li>
\t\t\t<li><i>Используйте только натуральные ингредиенты.</i></li>
\t\t\t<li><i>Не переедайте!</i></li>
\t\t</ul>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Советы по домашней организации</h1>
\t\t<p><em class="accent">Многое зависит от того, как вы организуете свой дом.</em></p>
\t\t<ul class="bg bg-color">
\t\t\t<li><b>Убирайте за собой всегда и сразу</b></li>
\t\t\t<li><b>Создавайте систему хранения вещей</b></li>
\t\t\t<ul>
\t\t\t\t<li><i>Отделяйте сезонные вещи от повседневных</i></li>
\t\t\t\t<li><i>Храните мелкие предметы в коробках или ящиках</i></li>
\t\t\t</ul>
\t\t\t<li><b>Разделяйте пространство на зоны использования</b></li>
\t\t</ul>

\t\t<h2 class="fs-2 heading">Как правильно складывать одежду?</h2>
\t\t<ol>
\t\t\t<li>Используйте вертикальное складывание, чтобы быстрее находить нужную вещь.</li>
\t\t\t<li>Сортируйте одежду по цветам, чтобы не перепутать и не испортить.</li>
\t\t</ol>

\t\t<h3 class="fs-2 heading">Что делать с лишними вещами?</h3>

\t\t<p><em class="fs-1 accent">Не берегите то, что Вам не нравится и больше не носите. Вы можете:</em></p>

\t\t<ul>
\t\t\t<li><b class="accent">Пожертвовать</b> детскую одежду в детские дома или благотворительные организации.</li>
\t\t\t<li><b class="accent">Продать</b> одежду через интернет-площадки или на рынке.</li>
\t\t</ul>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Эффективные привычки для учебы</h1>
\t\t<h2 class="fs-2 heading">Планирование и организация</h2>
\t\t<p><b class="accent">Распределите свое время:</b> Напишите список задач на день. Помечайте важные задачи.</p>
\t\t<p><b class="accent">Создайте рабочую обстановку:</b> Уберите ненужные предметы со стола. Используйте режим "Не беспокоить" на телефоне.</p>
\t\t<h2 class="fs-2 heading">Активное запоминание информации</h2>
\t\t<p><b class="accent">Используйте карты памяти:</b> Записывайте вопросы с одной стороны, ответы - с другой.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li><em class="accent">Повторение</em>: Пройдите через свои карты памяти несколько раз в день.</li>
\t\t\t<li><em class="accent">Объединение</em>: Сводите связанные карты памяти в группу и повторяйте их вместе.</li>
\t\t</ul>
\t\t<h3 class="fs-1 heading"><i class="accent">Не забывайте отдыхать!</i></h3>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Здоровые альтернативы выпечке</h1>
\t\t<p>Если вы хотите есть сладости, но при этом поддерживать свое здоровье, то следует обратить внимание на альтернативы обычной выпечке. Вместо пшеничной муки можно использовать овсяную или кокосовую муку, а вместо сахара - мед или стевию.</p>
\t\t<h2 class="fs-2 heading">Овсяная мука</h2>
\t\t<p><em class="accent">Овсяная мука</em> богата клетчаткой и белком, что способствует чувству сытости. Она также помогает уменьшить уровень холестерина в крови. </p>
\t\t<h3 class="fs-2 heading">Кокосовая мука</h3>
\t\t<p><em class="accent">Кокосовая мука</em> не содержит глютена и является отличным источником диетических волокон. Кроме того, она способствует улучшению работы пищеварительной системы.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li><b class="accent">Мед</b>. Мед имеет низкий гликемический индекс и является отличной альтернативой сахару.</li>
\t\t\t<li><b class="accent">Стевия</b>. Стевия - это натуральный подсластитель, который не содержит калорий и не повышает уровень сахара в крови.</li>
\t\t</ul>
\t\t<p>Использование этих ингредиентов поможет сделать выпечку более полезной для вашего организма, при этом сохранив ее вкус и аромат.</p>
\t\t<p><i class="fs-1 heading">Учитeсь готовить вкусно и здорово!</i>
\t\t<p>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Варианты завтрака</h1>
\t\t<h2 class="fs-2 heading">Омлет</h2>
\t\t<p>
\t\t\tНасыщенный и белковый завтрак <br>Состав: яйца, соль, молоко, перец
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<b class="accent">Калорийность:</b> 200 ккал
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<b class="accent">Пищевая ценность:</b> углеводы 1 г, белки 17 г, жиры 14 г
\t\t\t</li>
\t\t</ul>

\t\t<h2 class="fs-2 heading">Каша овсяная</h2>
\t\t<p>
\t\t\tПолезный и насыщенный завтрак <br>Состав: молоко, овсянная крупа
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<b class="accent">Калорийность:</b> 150 ккал
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<b class="accent">Пищевая ценность:</b> углеводы 22 г, белки 6 г, жиры 4 г
\t\t\t</li>
\t\t</ul>

\t\t<h3 class="fs-2 heading">Сэндвич с яйцом</h3>
\t\t<p>
\t\t\tБыстрый и сытный завтрак <br>Состав: яйца, хлеб, соль, перец, масло
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<b class="accent">Калорийность:</b> 300 ккал
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<b class="accent">Пищевая ценность:</b> углеводы 25 г, белки 14 г, жиры 16 г
\t\t\t</li>
\t\t</ul>
\t\t<p>

\t\t\t<i class="fs-1 heading">Выберите свой завтрак и наслаждайтесь вкусом!</i>
\t\t</p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Финансовое планирование</h1>
\t\t<h2 class="fs-2 heading">Подготовка инвестиционного плана</h2>
\t\t<p>
\t\t\t<b class="accent">Инвестиции</b>
\t\t\t- выделение денежных средств на приобретение активов, приносящих доход.Составление инвестиционного плана - важнейший элемент финансового планирования.
\t\t</p>
\t\t<h3 class="fs-1 heading">Определение приоритетов</h3>
\t\t<p>
\t\t\t<i class="accent">Выбор наиболее перспективных направлений инвестирования</i> основывается на анализе рисков и потенциала доходов.
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>Принципы диверсификации портфеля инвестиций:</li>
\t\t\t<li>Выбор различных инвестиционных инструментов</li>
\t\t\t<li>Разделение инвестиций между различными активами и секторами экономики</li>
\t\t</ul>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Медитация</h1>
\t\t<h2 class="fs-2 heading">Что такое медитация?</h2>
\t\t<p>Медитация - это практика ума, которая помогает научиться контролировать свои мысли и эмоции. Она может помочь улучшить концентрацию, уменьшить стресс и улучшить общее здоровье.</p>
\t\t<h3 class="fs-1 heading">Типы медитации</h3>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<b class="accent">Внимательность:</b> фокусировка на дыхании и настоящем моменте.
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<i class="accent">Визуализация:</i> создание ментальных образов, которые способствуют умиротворению.
\t\t\t</li>
\t\t</ul>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Советы по онлайн-шопингу</h1>
\t\t<h2 class="fs-2 heading">1. Выберите надежный магазин</h2>
\t\t<p>Проверьте отзывы других покупателей и наличие контактной информации</p>
\t\t<h2 class="fs-2 heading">2. Смотрите на рейтинги товаров</h2>
\t\t<p>Просматривайте отзывы и оценки товаров, чтобы сделать лучший выбор</p>
\t\t<h3 class="fs-2 heading">3. Определите свой бюджет</h3>
\t\t<p>Задайте себе вопрос, сколько вы можете потратить, чтобы не расходовать слишком много</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<b class="accent">Не раскрывайте личную информацию:</b> не давайте номера своей кредитной карты, если не уверены в магазине
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<i class="accent">Сравнивайте цены:</i> попробуйте найти лучшее предложение, прежде чем сделать закупки
\t\t\t</li>
\t\t</ul>
\t\t<p class="fs-1 heading">Обязательно ознакомьтесь с условиями возврата и доставки, прежде чем совершить покупку</p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Советы по уходу за домашними животными</h1>
\t\t<h2 class="fs-2 heading">Питание</h2>
\t\t<p>
\t\t\t<b class="accent">Покупайте корм высокого качества</b>
\t\t\t, содержащий все необходимые витамины и минералы. Не забывайте про <i class="accent">чистую воду</i>.
\t\t</p>
\t\t<h2 class="fs-2 heading">Уход</h2>
\t\t<p>
\t\t\t<b class="accent">Регулярно расчесывайте</b>
\t\t\tшерсть животного и <b class="accent">проводите профилактику от блох</b>
\t\t\t. Поставьте удобную лежанку и игрушки для занятий вашего питомца.
\t\t</p>
\t\t<h3 class="fs-1 heading">Средства по уходу</h3>
\t\t<ul class="bg bg-color">
\t\t\t<li>Шампунь для животных</li>
\t\t\t<li>Крем для лап</li>
\t\t\t<li>Клещи-пинцеты</li>
\t\t</ul>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Изучение нового языка</h1>
\t\t<p>
\t\t\t<b class="accent">Изучение нового языка</b> - это невероятно увлекательный и сложный процесс, требующий настойчивости и терпения. Чтобы добиться успеха, необходимо постоянно практиковаться и усердно работать. Не бойтесь совершать ошибки, это естественный процесс обучения. В процессе обучения новому языку важно общаться с носителями языка и пользоваться различными учебными материалами.
\t\t</p>
\t\t<h2 class="fs-2 heading">Как начать изучение нового языка?</h2>
\t\t<ul class="bg bg-color">
\t\t\t<li>Выберите язык, который хотите изучать</li>
\t\t\t<li>Зарегистрируйтесь на учебном курсе или найдите преподавателя в своем городе</li>
\t\t\t<li>Постоянно практикуйтесь и учите новые слова и фразы</li>
\t\t\t<li>Смотрите фильмы и читайте книги на изучаемом языке</li>
\t\t\t<li>Общайтесь с носителями языка через интернет или в реальной жизни</li>
\t\t</ul>
\t\t<h3 class="fs-1 heading">Итог</h3>
\t\t<p>Изучение нового языка - это не только способ расширить кругозор, но и открыть для себя новые возможности в жизни.</p>
\t\t<p>
\t\t\t<i class="accent">Никогда не поздно начать учиться!</i>
\t\t</p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Хайкинг тропы</h1>
\t\t<h2 class="fs-2 heading">Тропа Каменного дракона</h2>
\t\t<p>Пройдите вдоль побережья Черного моря, и вы откроете потрясающие виды на горы и море. Это прекрасное место для пеших прогулок и наблюдения за птицами.</p>
\t\t<h2 class="fs-2 heading">Тропа Солнечных скал</h2>
\t\t<p>Эта тропа предлагает увлекательные пейзажи, такие как острые скалы и зеленые долины. Есть несколько мест, где можно поесть и отдохнуть.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>Прекрасные пейзажи</li>
\t\t\t<li>Доступная цена</li>
\t\t\t<li>Экологически чистое место</li>
\t\t</ul>
\t\t<p>
\t\t\t<i class="accent">Заметка: не забудьте взять с собой карту и еду перед походом!</i>
\t\t\t<br>
\t\t\t<b>Приятного путешествия!</b>
\t\t</p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Различные программы тренировок для занятий в спортзале</h1>
\t\t<h2 class="fs-2 heading">Программа тренировок на 3 дня в неделю</h2>
\t\t<h3 class="fs-1 heading">День 1</h3>
\t\t<p>
\t\t\tРазминка
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<b class="accent">Жим штанги лежа</b>
\t\t\t\t3 подхода, 10 повторений
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<b class="accent">Сгибания рук с гантелями</b>
\t\t\t\t3 подхода, 12 повторений
\t\t\t</li>
\t\t</ul>
\t\t<h3 class="fs-1 heading">День 2</h3>
\t\t<p>
\t\t\tРазминка
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<i class="accent">Тяга верхнего блока</i>
\t\t\t\t4 подхода, 10 повторений
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<i class="accent">Приседания со штангой</i>
\t\t\t\t4 подхода, 15 повторений
\t\t\t</li>
\t\t</ul>
\t\t<h3 class="fs-1 heading">День 3</h3>
\t\t<p>
\t\t\tРазминка
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>
\t\t\t\t<i class="accent">Подтягивания</i>
\t\t\t\t3 подхода, максимальное количество повторений
\t\t\t</li>
\t\t\t<li>
\t\t\t\t<b class="accent">Тяга штанги к подбородку</b>
\t\t\t\t3 подхода, 12 повторений
\t\t\t</li>
\t\t</ul>

\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Здоровые варианты перекусов</h1>
\t\t<h2 class="fs-2 heading">Что есть для перекуса на работе?</h2>
\t\t<p>
\t\t\tКак здорово, что существует множество вариантов здоровых перекусов для работы и школы! От ягод до орехов, от снэков из киноа до фруктовых салатов - к вашим услугам полная гамма здоровых вариантов! И не забывайте пить много воды! <b class="accent">Пара волшебных слов:</b> планирование и подготовка!
\t\t</p>
\t\t<h3 class="fs-1 heading">Самые популярные продукты на перекусы:</h3>
\t\t<ul class="bg bg-color">
\t\t\t<li>Овощи (морковь, брокколи, цветная капуста)</li>
\t\t\t<li>Фрукты (яблоки, бананы, апельсины, груши)</li>
\t\t\t<li>Орехи (фисташки, кедровые орехи, миндаль)</li>
\t\t\t<li>Снэки (киноа чипсы, кокосовые чипсы)</li>
\t\t</ul>
\t\t<p>
\t\t\t<i class="accent">Здоровый стиль жизни – это счастье!</i>
\t\t</p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Советы по бюджетному путешествию</h1>
\t\t<p>
\t\t\t<b class="accent">Используйте общественный транспорт:</b>
\t\t\tОн всегда дешевле, чем такси и проще, чем аренда автомобиля.
\t\t</p>
\t\t<h2 class="fs-2 heading">Гостевой дом:</h2>
\t\t<p>Если у вас ограниченный бюджет, выберите гостевой дом вместо отеля. Большинство гостевых домов предлагают бесплатный завтрак и WiFi. </p>
\t\t<h3 class="fs-1 heading">Закажите обеды и ужины:</h3>
\t\t<p>Избегайте посещения ресторанов на обед и ужин. Лучше закажите еду через интернет и заберите ее на вынос в ближайшем кафе. </p>
\t\t<h2 class="fs-2 heading">Упакуйте легко:</h2>
\t\t<p>Не берите с собой много вещей. На бюджетном путешествии важна легкость.</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>Возьмите только самое необходимое</li>
\t\t\t<li>Проверьте прогноз погоды и возьмите одежду в соответствии с ним</li>
\t\t\t<li>Не забудьте взять с собой адаптер для зарядки вашего телефона</li>
\t\t</ul>
\t\t<p>
\t\t\t<i class="accent">Наслаждайтесь своим путешествием без переживаний о бюджете!</i>
\t\t</p>
\t</article>`, `\t<article>
\t\t<h1 class="fs-3 heading">Техники написания</h1>
\t\t<h2 class="fs-2 heading">Определяйте цель письма</h2>
\t\t<p>
\t\t\tПрежде чем начать писать, обдумайте, чего вы хотите достичь. Поставьте цель и следуйте ей на протяжении всего текста.
\t\t</p>
\t\t<h2 class="fs-2 heading">Используйте простые предложения</h2>
\t\t<p>
\t\t\tИспользуйте простые, лаконичные предложения, которые понятны даже школьникам. Не забудьте про четкую структуру текста.
\t\t</p>
\t\t<h3 class="fs-1 heading">Выделите ключевые идеи</h3>
\t\t<p>
\t\t\tПодчеркните ключевые идеи текста, чтобы они выделялись на фоне всего содержания. Используйте жирный или курсив, чтобы выделить текст.
\t\t</p>
\t\t<h3 class="fs-1 heading">Отделяйте текст абзацами</h3>
\t\t<p>
\t\t\tДля лучшего восприятия текста отделяйте его на абзацы. Используйте маркированные списки, если это необходимо.
\t\t</p>
\t\t<ul class="bg bg-color">
\t\t\t<li>Между абзацами должен быть отступ;</li>
\t\t\t<li>Не используйте слишком длинные параграфы;</li>
\t\t\t<li>Лучше оставлять больше свободного пространства между абзацами.</li>
\t\t</ul>
\t\t<p>
\t\t\t<b class="accent">Итак, вы знаете несколько техник написания. Пора попробовать их в действии!</b>
\t\t</p>
\t\t<p>
\t\t\t<i class="accent">Удачи в творчестве!</i>
\t\t</p>
\t</article>`,
]
const colors = [
  [
    "#ffffff", "#023124", "#009d79", "#023334", "#d5d1d3",
  ], [
    "#ffffff", "#59190c", "#c24747", "#481916", "#e9e4d3",
  ], [
    "#ffffff", "#272224", "#c63825", "#4b2b2d", "#c7e9d3",
  ], [
    "#ffffff", "#183980", "#0864d7", "#142d58", "#c9e9f9",
  ], [
    "#ffffff", "#2b2626", "#c55456", "#562723", "#b2ede2",
  ], [
    "#ffffff", "#720f10", "#d82c20", "#370504", "#f3ddde",
  ], [
    "#ffffff", "#20215e", "#854ee9", "#333597", "#e7cda0",
  ], [
    "#ffffff", "#31302f", "#d34545", "#7d1819", "#a6ccdf",
  ], [
    "#ffffff", "#0e41b5", "#c33268", "#233e7c", "#faf8db",
  ], [
    "#ffffff", "#1c2830", "#b14436", "#384045", "#d8d8d4",
  ], [
    "#ffffff", "#601d13", "#ea3a30", "#641900", "#cacbcd",
  ], [
    "#ffffff", "#292365", "#c6438c", "#571b6e", "#22c5e8",
  ], [
    "#ffffff", "#4c152b", "#da3a36", "#4b1728", "#e3dcb8",
  ], [
    "#ffffff", "#7a2123", "#c94f39", "#4b2323", "#98e3a7",
  ], [
    "#ffffff", "#352947", "#b63334", "#36374f", "#97cfed",
  ], [
    "#ffffff", "#2c3a71", "#a04456", "#23295a", "#22ded0",
  ], [
    "#ffffff", "#343544", "#a05a4a", "#3f2929", "#9dc6c8",
  ], [
    "#ffffff", "#30336b", "#84406d", "#22283d", "#cccfd8",
  ], [
    "#ffffff", "#3d3229", "#838749", "#2f2d2d", "#ceced4",
  ], [
    "#ffffff", "#192c68", "#1d4fe4", "#1b2c59", "#82f4b0",
  ], [
    "#ffffff", "#5b322b", "#b04642", "#281b1c", "#71e9d2",
  ], [
    "#ffffff", "#2a00f9", "#a6047d", "#2a0585", "#c1d8c1",
  ], [
    "#ffffff", "#572737", "#cb503a", "#681334", "#51c9dc",
  ], [
    "#ffffff", "#302f78", "#0d0814", "#2f3591", "#cbbaae",
  ], [
    "#ffffff", "#212323", "#a46547", "#572d2e", "#22975a",
  ], [
    "#ffffff", "#004370", "#0088d0", "#01649d", "#faef3c",
  ], [
    "#ffffff", "#24201f", "#986a4b", "#7a2e62", "#00f4f4",
  ], [
    "#ffffff", "#09314c", "#99796d", "#1c3a58", "#bee5f7",
  ], [
    "#ffffff", "#540c6e", "#d62ca2", "#8d044d", "#f1ecbb",
  ], [
    "#ffffff", "#3c221e", "#bc2a2d", "#5a1f21", "#fbb70f",
  ], [
    "#ffffff", "#4e062d", "#ac5e9a", "#4e316e", "#94cd73",
  ], [
    "#ffffff", "#50164b", "#366987", "#5d1d70", "#ece5dc",
  ], [
    "#ffffff", "#352897", "#5169dd", "#051390", "#f2e1a9",
  ], [
    "#ffffff", "#621f64", "#fc3208", "#6c003a", "#dcb00f",
  ], [
    "#ffffff", "#1b254f", "#3c37f9", "#292536", "#5bbc6f",
  ], [
    "#ffffff", "#323f53", "#b7412f", "#42291a", "#c4eefa",
  ], [
    "#ffffff", "#342b2c", "#ac4442", "#7e223d", "#e0dfd6",
  ], [
    "#ffffff", "#2f2d54", "#b53968", "#373642", "#20a327",
  ], [
    "#ffffff", "#282125", "#b4112f", "#f420f4", "#e9bf98",
  ], [
    "#ffffff", "#2e13a6", "#ab403f", "#4a2150", "#79b458",
  ], [
    "#ffffff", "#293654", "#8c3137", "#26293e", "#d1d9d6",
  ], [
    "#ffffff", "#222122", "#9f4459", "#36303d", "#c8e7e1",
  ], [
    "#ffffff", "#322e54", "#7f2d84", "#513347", "#faa314",
  ], [
    "#ffffff", "#6b1218", "#9e4e21", "#2c2923", "#7cd0c3",
  ], [
    "#ffffff", "#532a2a", "#dc5846", "#5b2839", "#e3dfd4",
  ], [
    "#ffffff", "#2f2d99", "#0d6eae", "#072c70", "#7bcc88",
  ], [
    "#ffffff", "#2e2f31", "#b41429", "#57001b", "#fef4f6",
  ], [
    "#ffffff", "#cf8950", "#604d20", "#28468e", "#ded9b7",
  ], [
    "#ffffff", "#312c73", "#4f5eac", "#644c8a", "#ebab27",
  ], [
    "#ffffff", "#5a3a1b", "#9f262d", "#491b17", "#40404c",
  ], [
    "#ffffff", "#3b324a", "#b04946", "#493750", "#d6d3de",
  ], [
    "#ffffff", "#4d2670", "#8e79f0", "#3f2e79", "#f7e8b1",
  ], [
    "#ffffff", "#1a3694", "#e24a84", "#4a0948", "#f3f3d1",
  ], [
    "#ffffff", "#1e3ba8", "#2c73f6", "#162162", "#fb9f2a",
  ], [
    "#ffffff", "#31243f", "#a04849", "#5a2d52", "#fcfbda",
  ], [
    "#ffffff", "#333367", "#536ade", "#383d61", "#fdfecc",
  ], [
    "#ffffff", "#461e48", "#ca0038", "#6a344c", "#e0d3d8",
  ], [
    "#ffffff", "#602527", "#ce0004", "#380807", "#f3ddca",
  ], [
    "#ffffff", "#4c2d3b", "#b02c29", "#413047", "#a8d7e5",
  ], [
    "#ffffff", "#252022", "#fb2e71", "#47384a", "#fcf2c4",
  ], [
    "#ffffff", "#002a72", "#0c73b8", "#004eaa", "#87c931",
  ], [
    "#ffffff", "#174d2b", "#169a4f", "#124e51", "#010102",
  ], [
    "#ffffff", "#272930", "#5e56e4", "#0c2164", "#fbd7a4",
  ], [
    "#ffffff", "#341e11", "#ba2001", "#57200b", "#671522",
  ], [
    "#ffffff", "#3325c9", "#0495e8", "#2218ad", "#e4e7b2",
  ], [
    "#ffffff", "#503637", "#1e545a", "#272220", "#eee0da",
  ], [
    "#ffffff", "#56294e", "#9a2c65", "#41383f", "#f7f394",
  ], [
    "#ffffff", "#2e2e2e", "#c83a5e", "#252627", "#f0c498",
  ], [
    "#ffffff", "#5d04b4", "#d81f6c", "#411e84", "#a7b97a",
  ], [
    "#ffffff", "#443841", "#c4655b", "#5c192a", "#9fcadc",
  ], [
    "#ffffff", "#0f2a39", "#b12059", "#3d4961", "#d3d3cf",
  ], [
    "#ffffff", "#5a287d", "#ae59cd", "#56196b", "#99f49a",
  ], [
    "#ffffff", "#244370", "#1678ff", "#2e2591", "#e7ead0",
  ], [
    "#ffffff", "#1e4ed4", "#9b5aa1", "#152f97", "#f9f7a0",
  ], [
    "#ffffff", "#471f4a", "#e62a43", "#2e3145", "#d5f2fc",
  ], [
    "#ffffff", "#5da086", "#13694c", "#083a33", "#ee2c4c",
  ], [
    "#ffffff", "#1e1c1d", "#1d53dd", "#002678", "#1921a5",
  ], [
    "#ffffff", "#591a6e", "#29cc74", "#15312c", "#d6d6d7",
  ], [
    "#ffffff", "#f0198a", "#af118f", "#711171", "#abf4cc",
  ], [
    "#ffffff", "#450bcb", "#070c16", "#36009d", "#cba24e",
  ], [
    "#ffffff", "#1d25b9", "#6050ff", "#2028aa", "#f90000",
  ], [
    "#ffffff", "#0093b7", "#006093", "#25322a", "#e0dce4",
  ], [
    "#ffffff", "#3c3367", "#bb5984", "#393e45", "#e6e66d",
  ], [
    "#ffffff", "#561024", "#cd515d", "#3d1f00", "#12909b",
  ], [
    "#ffffff", "#272436", "#027ae5", "#2e286f", "#4d3eaa",
  ], [
    "#ffffff", "#511533", "#f00046", "#5a062e", "#facabd",
  ], [
    "#ffffff", "#334788", "#b5398a", "#294476", "#f5c44d",
  ], [
    "#ffffff", "#2d451e", "#966939", "#242b24", "#d8d8d5",
  ], [
    "#ffffff", "#1c1590", "#8f71e9", "#2a25e6", "#82c87c",
  ], [
    "#ffffff", "#731027", "#c24542", "#521f33", "#e9eae2",
  ], [
    "#ffffff", "#1d2d59", "#2c7299", "#142c4f", "#edb058",
  ], [
    "#ffffff", "#004a8b", "#1c1816", "#002b58", "#e2d398",
  ], [
    "#ffffff", "#2c2c2e", "#ff3043", "#feefeb", "#faf2aa",
  ], [
    "#ffffff", "#162365", "#006fa4", "#004993", "#faa01b",
  ], [
    "#ffffff", "#61be79", "#197484", "#4be2cd", "#f9c8c7",
  ], [
    "#ffffff", "#293438", "#a53f3a", "#24343b", "#f5eee0",
  ], [
    "#ffffff", "#3f3f6f", "#8b5c77", "#1a245f", "#e90050",
  ], [
    "#ffffff", "#042c71", "#c83441", "#253453", "#e7d8ab",
  ], [
    "#ffffff", "#143c74", "#0069d2", "#053d67", "#f1d39e",
  ], [
    "#ffffff", "#083461", "#e0003e", "#7b876b", "#f4f3e1",
  ],
]
const Settings = {
  multipliers: [4, 5, 6, 7],
  fontSizes: [14, 16, 18],
  lineHeights: [1.25, 1.5, 1.75],
  steps: [1.2, 1.333, 1.414, 1.5, 1.618],
  fonts: [
    'Arial', 'Arial Narrow', 'Tahoma', 'Verdana', 'Trebuchet MS', 'Georgia', 'Times New Roman', 'Courier New',
  ], // web safe fonts only!
  fontWeights: ['normal', 'bold'],
  repeating: ['no-repeat', 'no-repeat', 'repeat', 'repeat-x'], // we need more no-repeat cases
  bgSizes: [600, 800, 400], // px
  bgRepeatSizes: [50, 60, 70, 80, 90, 100], // px
  bgPositions: ['top right', 'bottom right', 'top left', 'bottom left', 'center'],
}
const getStyle = ({
                    baseFont,
                    baseFs,
                    baseLh,
                    step1Fs,
                    step1Lh,
                    step2Fs,
                    step2Lh,
                    step3Fs,
                    step3Lh,
                    pattern,
                    baseColor,
                    bgColor,
                    bgPos,
                    bgSize,
                    bgRepeat,
                    headingFont,
                    headingColor,
                    headingFw,
                    accentColor,
                  }) => `
<style>
:root {
\t--base-font: '${baseFont}';
\t--base-color: ${baseColor};
\t--base-fs: ${baseFs};
\t--base-lh: ${baseLh};
\t--step-1-fs: ${step1Fs};
\t--step-1-lh: ${step1Lh};
\t--step-2-fs: ${step2Fs};
\t--step-2-lh: ${step2Lh};
\t--step-3-fs: ${step3Fs};
\t--step-3-lh: ${step3Lh};
\t--bg-color: ${bgColor};
\t--bg-pos: ${bgPos};
\t--bg-size: ${bgSize};
\t--bg-repeat: ${bgRepeat};
\t--pattern: ${pattern};
\t--heading-font: '${headingFont}';
\t--heading-color: ${headingColor};
\t--heading-fw: ${headingFw};
\t--accent-color: ${accentColor};  
}

* {
\tfont-family: var(--base-font, sans-serif);
\tfont-size: var(--base-fs);
\tcolor: var(--base-color);
\tline-height: var(--base-lh);
}
.bg-color {
\tbackground-color: var(--bg-color);
\tpadding: 10px;
}
.bg {
\tbackground-image: var(--pattern);
\tbackground-position: var(--bg-pos);
\tbackground-size: var(--bg-size);
\tbackground-repeat: var(--bg-repeat);
}
.heading {
\tfont-family: var(--heading-font, serif);
\tcolor: var(--heading-color);
\tfont-weight: var(--heading-fw, 700);
}

.accent {
\tcolor: var(--accent-color);
}

.fs-1 {
\tfont-size: var(--step-1-fs);
\tline-height: var(--step-1-lh);
}

.fs-2 {
\tfont-size: var(--step-2-fs);
\tline-height: var(--step-2-lh);
}

.fs-3 {
\tfont-size: var(--step-3-fs);
\tline-height: var(--step-3-lh);
}
</style>
`
const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)]
const getRandomizedSetting = settings => Object.keys(settings).reduce((acc, key) => ({
  ...acc, [key]: getRandomItem(settings[key]),
}), {});
const stripClasses = str => str.replace(/ class=".*"/g, '')
const roundNearest = (value, nearest) => Math.round(value / nearest) * nearest;
const roundNext = (value, nearest) => Math.ceil(value / nearest) * nearest;
const generator = (assetsPath = 'assets') => {
  const template = getRandomItem(templates)
  const {
    multipliers: multiplier,
    fontSizes: baseFontSize,
    lineHeights: baseLine,
    steps: scaleFactor,
    fonts: baseFont,
    fontWeights: headingFw,
    repeating: bgRepeat,
    bgSizes: bgNormalSize,
    bgRepeatSizes: bgRepeatSize,
    bgPositions: bgPos,
  } = getRandomizedSetting(Settings);
  const headingFont = getRandomItem(Settings.fonts); // Getting another font for headings

  const bgSize = bgRepeat === 'no-repeat' ? bgNormalSize
                                          : bgRepeatSize;
  const [_base, baseColor, headingColor, accentColor, bgColor] = getRandomItem(colors)

  const baseLineHeight = roundNext(baseLine * roundNext(baseFontSize, multiplier), multiplier)

  const stack = Array.from({ length: 4 }, (_, stackPos) => {
    const computedFontSize = roundNext(baseFontSize * Math.pow(scaleFactor, stackPos), multiplier);
    const autoLineCount = Math.ceil(computedFontSize / baseLineHeight);
    const autoLineHeight = (baseLineHeight * autoLineCount);

    return {
      fontSize: computedFontSize,
      line: baseLineHeight,
      autoLineCount,
      autoLineHeight,
      params: {
        multiplier,
        baseFontSize,
        baseLineHeight,
        scaleFactor,
      },
    };
  });

  const patternUrl = `${assetsPath}/img/challenge-${Math.floor(Math.random() * 9) + 1}.svg`

  const style = getStyle({
    baseFont,
    headingFont,
    headingFw,
    baseColor,
    headingColor,
    accentColor,
    pattern: `url(${patternUrl})`,
    baseFs: `${stack[0].fontSize}px`,
    baseLh: `${stack[0].autoLineHeight}px`,
    step1Fs: `${stack[1].fontSize}px`,
    step1Lh: `${stack[1].autoLineHeight}px`,
    step2Fs: `${stack[2].fontSize}px`,
    step2Lh: `${stack[2].autoLineHeight}px`,
    step3Fs: `${stack[3].fontSize}px`,
    step3Lh: `${stack[3].autoLineHeight}px`,
    bgColor: `${bgColor}44`,
    bgSize: `${bgSize}px`,
    bgPos,
    bgRepeat,
  })
  const styledTemplate = template.replace(/<article>/, `<article> ${style}`)
  return {
    "theory": "<ТекстТеории>",
    "solution": {
      "html": styledTemplate,
    },
    "initial": {
      "html": stripClasses(template),
    },
  }
}

console.log(generator())
