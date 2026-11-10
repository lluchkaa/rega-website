type CourseCopy = {
  title: string
  description: string
  audience: string
  skills: string[]
  format: string
  duration: string
}

type Course = { slug: string; en: CourseCopy; uk: CourseCopy }

const courses: Course[] = [
  {
    slug: 'teenage_course',
    en: {
      title: 'Junior driving',
      description:
        'A thoughtful first introduction to driving for teenagers, with responsibility at the centre of every lesson.',
      audience:
        'For teenagers taking their first steps behind the wheel. Ask the school about age and participation requirements before booking.',
      skills: [
        'Understand the controls and build smooth coordination',
        'Judge vehicle dimensions and practise parking',
        'Explore road rules and the perspective of other road users',
        'Recognise situations that can lead to a collision',
      ],
      format: 'Supervised practice on the school’s closed training ground.',
      duration: '5 lessons · 10 hours',
    },
    uk: {
      title: 'Junior driving',
      description:
        'Перше знайомство підлітків з автомобілем, де відповідальність — основа кожного заняття.',
      audience:
        'Для підлітків, які роблять перші кроки за кермом. Вікові вимоги та умови участі уточніть у школі перед записом.',
      skills: [
        'Познайомитися з органами керування та узгоджувати свої дії',
        'Відчувати габарити автомобіля й тренувати паркування',
        'Вивчати правила руху та бачити дорогу очима інших учасників',
        'Розпізнавати обставини, що можуть призвести до ДТП',
      ],
      format:
        'Практика під наглядом інструктора на закритому майданчику школи.',
      duration: '5 занять · 10 годин',
    },
  },
  {
    slug: 'main_course',
    en: {
      title: 'Core driving course',
      description:
        'Build confidence in everyday traffic, refresh your skills or get comfortable with a different car.',
      audience:
        'For drivers with limited experience, those returning after a break, or anyone who feels uncertain in busy traffic.',
      skills: [
        'Plan manoeuvres and anticipate other drivers',
        'Choose an appropriate speed and following distance',
        'Reverse, park and manoeuvre in limited space',
        'Review mistakes with an instructor on real city routes',
      ],
      format:
        'A combination of training-ground exercises and city driving, adapted to your starting level.',
      duration: 'From 5 lessons · 10 hours',
    },
    uk: {
      title: 'Основний курс',
      description:
        'Більше впевненості в щоденних поїздках, відновлення навичок після перерви або знайомство з новим автомобілем.',
      audience:
        'Для водіїв із невеликим досвідом, після тривалої перерви та всіх, хто почувається невпевнено в жвавому потоці.',
      skills: [
        'Планувати маневри та передбачати дії інших водіїв',
        'Обирати безпечні швидкість і дистанцію',
        'Рухатися заднім ходом, паркуватися та маневрувати в обмеженому просторі',
        'Розбирати помилки з інструктором на міських маршрутах',
      ],
      format:
        'Вправи на майданчику та поїздки містом з урахуванням вашого початкового рівня.',
      duration: 'Від 5 занять · 10 годин',
    },
  },
  {
    slug: 'professional_courses',
    en: {
      title: 'Advanced car control',
      description:
        'A progressive approach to hazard response, braking and vehicle stability on a closed training ground.',
      audience:
        'For drivers ready to develop emergency-response skills. Level 2 builds on completion of Level 1.',
      skills: [
        'Recognise hazards and practise responses to sudden obstacles',
        'Understand loss of grip and vehicle stability',
        'Improve precision through gymkhana-based exercises',
        'Analyse decisions and correct technique with your trainer',
      ],
      format:
        'Level 1 focuses on emergency control. Level 2 develops precision and dynamic manoeuvring. Winter training depends on suitable snow cover.',
      duration: 'Each level: 3 lessons · 4.5 hours',
    },
    uk: {
      title: 'Професійний курс',
      description:
        'Послідовна контраварійна підготовка: реакція на небезпеку, гальмування та контроль стійкості на закритому майданчику.',
      audience:
        'Для водіїв, які готові розвивати контраварійні навички. Level 2 розрахований на тих, хто вже завершив Level 1.',
      skills: [
        'Розпізнавати небезпеку та реагувати на раптові перешкоди',
        'Розуміти втрату зчеплення та стійкість автомобіля',
        'Розвивати точність у вправах на основі автоджимхани',
        'Аналізувати рішення та коригувати техніку разом із тренером',
      ],
      format:
        'Level 1 — контраварійне керування. Level 2 — точність і динамічне маневрування. Зимова програма залежить від достатнього снігового покриття.',
      duration: 'Кожен рівень: 3 заняття · 4,5 години',
    },
  },
  {
    slug: 'winter_course',
    en: {
      title: 'Winter driving',
      description:
        'Understand how your car behaves when grip changes and prepare for snow, ice and winter journeys.',
      audience:
        'For beginners and experienced drivers who want more practice in winter conditions.',
      skills: [
        'Assess the surface and adapt acceleration and braking',
        'Practise responses to loss of stability',
        'Work through snowy slopes and deep-snow scenarios',
        'Prepare your vehicle and plan for winter conditions',
      ],
      format:
        'Practical winter exercises and analysis with an instructor. Confirm seasonal conditions and availability before booking.',
      duration: '3 lessons · 6 hours',
    },
    uk: {
      title: 'Зимовий курс',
      description:
        'Зрозумійте поведінку автомобіля при зміні зчеплення та підготуйтеся до снігу, ожеледиці й зимових поїздок.',
      audience:
        'Для початківців і досвідчених водіїв, яким бракує практики в зимових умовах.',
      skills: [
        'Оцінювати покриття та змінювати техніку розгону й гальмування',
        'Тренувати реакцію на втрату стійкості',
        'Розбирати рух засніженими схилами та виїзд із глибокого снігу',
        'Готувати автомобіль і планувати поїздки взимку',
      ],
      format:
        'Практичні зимові вправи та розбір з інструктором. Уточніть сезонні умови й наявність занять перед записом.',
      duration: '3 заняття · 6 годин',
    },
  },
  {
    slug: 'start_motokurse',
    en: {
      title: 'Beginner motorcycle course',
      description:
        'Start with the essentials: balance, controls and the first confident manoeuvres on a motorcycle.',
      audience:
        'For new riders and anyone who wants to establish a sound foundation before moving into traffic.',
      skills: [
        'Choose and use protective equipment',
        'Start, stop and coordinate the motorcycle controls',
        'Practise turns, slaloms and figure eights',
        'Use observation, mirrors and signals during exercises',
      ],
      format:
        'Training-ground practice in a small group of up to three. School-motorcycle training includes protective equipment; confirm personal equipment requirements.',
      duration: '5 lessons · 10 hours',
    },
    uk: {
      title: 'Початковий мотокурс',
      description:
        'Почніть з основ: баланс, органи керування та перші впевнені маневри на мотоциклі.',
      audience:
        'Для новачків та тих, хто хоче закласти міцну основу перед виїздом у потік.',
      skills: [
        'Підбирати та використовувати захисне екіпірування',
        'Рушати, зупинятися й узгоджено працювати органами керування',
        'Відпрацьовувати повороти, «змійку» та «вісімку»',
        'Працювати з поглядом, дзеркалами та сигналами під час вправ',
      ],
      format:
        'Заняття на майданчику в мінігрупі до трьох людей. Навчання на мотоциклі школи включає захисне екіпірування; вимоги до особистих речей уточніть перед заняттям.',
      duration: '5 занять · 10 годин',
    },
  },
  {
    slug: 'motorcycles_learning',
    en: {
      title: 'Moto city',
      description:
        'Move from basic motorcycle control to real city routes with an instructor connected by radio.',
      audience:
        'For riders with basic experience who are ready to develop their road awareness in traffic.',
      skills: [
        'Position the motorcycle appropriately on the road',
        'Monitor blind spots and interact with other road users',
        'Build experience in progressively busier traffic',
        'Explore riding beyond the city',
      ],
      format:
        'Road practice with radio guidance, progressing from quieter routes to more demanding traffic. School motorcycle use is arranged separately.',
      duration: '1 lesson · 2 hours',
    },
    uk: {
      title: 'Moto city',
      description:
        'Від базових навичок до реальних міських маршрутів із радіосупроводом інструктора.',
      audience:
        'Для райдерів із базовим досвідом, готових розвивати розуміння дороги в транспортному потоці.',
      skills: [
        'Обирати правильне положення на дорозі',
        'Контролювати сліпі зони та взаємодіяти з іншими учасниками руху',
        'Поступово набирати досвід в інтенсивнішому потоці',
        'Практикувати поїздки за межами міста',
      ],
      format:
        'Практика на дорогах із радіосупроводом: від спокійних маршрутів до складнішого трафіку. Використання мотоцикла школи — за домовленістю.',
      duration: '1 заняття · 2 години',
    },
  },
  {
    slug: 'professional-motorcycle-course',
    en: {
      title: 'Advanced motorcycle course',
      description:
        'Refine the connection between body position, observation and motorcycle control.',
      audience:
        'For riders who already have basic motorcycle experience. Exercises become more demanding as your technique develops.',
      skills: [
        'Manoeuvre and turn in confined spaces',
        'Practise effective braking from different speeds',
        'Coordinate body position and cornering lines',
        'Review timed gymkhana exercises and hazard-response technique',
      ],
      format:
        'Progressive practical exercises, from wider layouts to more complex trajectories, with trainer feedback.',
      duration: '3 lessons · 4.5 hours',
    },
    uk: {
      title: 'Професійний мотокурс',
      description:
        'Вдосконалюйте взаємодію положення тіла, погляду та органів керування мотоциклом.',
      audience:
        'Для райдерів, які вже мають початковий досвід. Складність вправ зростає разом із вашою підготовкою.',
      skills: [
        'Маневрувати та розвертатися в обмеженому просторі',
        'Ефективно гальмувати з різних швидкостей',
        'Узгоджувати положення тіла та траєкторію повороту',
        'Розбирати вправи джимхани на час і контраварійну техніку',
      ],
      format:
        'Послідовні практичні вправи: від широких проміжків до складних траєкторій зі зворотним зв’язком тренера.',
      duration: '3 заняття · 4,5 години',
    },
  },
  {
    slug: 'motosektsiya',
    en: {
      title: 'Motorcycle practice club',
      description:
        'Keep developing your riding through regular group practice and gymkhana-based exercises.',
      audience:
        'For experienced riders and motorcycle-school graduates who want to keep their skills active.',
      skills: [
        'Refine slow-speed manoeuvring and precision',
        'Coordinate your body, gaze and controls through turns',
        'Review timed runs to track your own progress',
        'Work on the strengths and weaknesses in your technique',
      ],
      format:
        'Group training on a marked course with timing and trainer feedback. Contact the school for the current timetable.',
      duration: 'Regular group sessions',
    },
    uk: {
      title: 'Мотосекція',
      description:
        'Продовжуйте розвивати майстерність на регулярних групових тренуваннях із вправами на основі джимхани.',
      audience:
        'Для досвідчених райдерів та випускників мотошколи, які хочуть підтримувати набуті навички.',
      skills: [
        'Вдосконалювати точність і маневрування на низькій швидкості',
        'Узгоджувати тіло, погляд та керування в поворотах',
        'Аналізувати заїзди на час і власний прогрес',
        'Працювати над сильними та слабкими сторонами своєї техніки',
      ],
      format:
        'Групові тренування на розміченій трасі з вимірюванням часу та порадами тренера. Актуальний розклад уточніть у школі.',
      duration: 'Регулярні групові заняття',
    },
  },
  {
    slug: 'training-parking-and-maneures',
    en: {
      title: 'Parking & manoeuvring',
      description:
        'Get to know the dimensions of your car and practise parking without the pressure of a busy car park.',
      audience:
        'For licensed drivers who drive independently but find reversing, parking or a different car’s dimensions challenging.',
      skills: [
        'Set your driving position and mirrors',
        'Judge clearance and vehicle dimensions',
        'Reverse with more precise control',
        'Manoeuvre and park in limited space',
      ],
      format:
        'An intensive training-ground session in your own car, in a group of up to five vehicles with two trainers.',
      duration: '1 session · 1.5 hours',
    },
    uk: {
      title: 'Парковка та маневрування',
      description:
        'Відчуйте габарити свого автомобіля та тренуйте паркування без поспіху жвавого паркінгу.',
      audience:
        'Для водіїв із посвідченням, які керують самостійно, але відчувають труднощі з паркуванням, рухом заднім ходом або габаритами нового авто.',
      skills: [
        'Налаштовувати посадку та дзеркала',
        'Оцінювати відстані й габарити автомобіля',
        'Точніше контролювати рух заднім ходом',
        'Маневрувати та паркуватися в обмеженому просторі',
      ],
      format:
        'Інтенсив на майданчику на власному автомобілі, у групі до п’яти авто під керівництвом двох тренерів.',
      duration: '1 заняття · 1,5 години',
    },
  },
  {
    slug: 'individual_trainings',
    en: {
      title: 'Small-group sport training',
      description:
        'Explore dynamic car control in a closed setting with focused attention from two trainers.',
      audience:
        'For confident drivers interested in the finer points of vehicle behaviour and motorsport technique.',
      skills: [
        'Understand understeer, oversteer and recovery techniques',
        'Work on vehicle stability during dynamic manoeuvres',
        'Recognise developing critical situations',
        'Review timed course runs and analyse mistakes',
      ],
      format:
        'Two students and two trainers on a closed training ground. The programme is tailored to the participants and uses your own car.',
      duration: '1 session · 2 hours',
    },
    uk: {
      title: 'Спортивні тренування в мінігрупі',
      description:
        'Досліджуйте динамічне керування на закритому майданчику з увагою двох тренерів.',
      audience:
        'Для впевнених водіїв, яких цікавлять нюанси поведінки автомобіля та спортивної техніки.',
      skills: [
        'Розуміти знос, занос і способи стабілізації',
        'Працювати над стійкістю під час динамічних маневрів',
        'Розпізнавати розвиток критичних ситуацій',
        'Розбирати заїзди на час та аналізувати помилки',
      ],
      format:
        'Двоє студентів і двоє тренерів на закритому майданчику. Програму адаптують до учасників; заняття на власному авто.',
      duration: '1 заняття · 2 години',
    },
  },
  {
    slug: 'start-level',
    en: {
      title: 'Start level · category B',
      description:
        'A structured route from your first lessons to practical preparation for the category B driving test.',
      audience:
        'For students who do not yet have a driving licence, including those who have already passed their theory test.',
      skills: [
        'Study road theory in a group or online',
        'Build practical driving skills on the training ground',
        'Practise city driving and test-route situations',
        'Prepare for practical assessment with instructor feedback',
      ],
      format:
        'Theory and practical training, or a practical-only option after passing theory. Manual and automatic cars are offered. Ask about required documents and current enrolment conditions.',
      duration: '40 hours of practical training',
    },
    uk: {
      title: 'Start level · категорія Б',
      description:
        'Послідовний шлях від перших занять до практичної підготовки до іспиту на категорію Б.',
      audience:
        'Для студентів без посвідчення водія, зокрема тих, хто вже склав теоретичний іспит.',
      skills: [
        'Вивчати теорію в групі або онлайн',
        'Формувати практичні навички на майданчику',
        'Тренувати міську їзду та ситуації на екзаменаційних маршрутах',
        'Готуватися до практичного оцінювання зі зворотним зв’язком інструктора',
      ],
      format:
        'Теорія та практика або лише практика після складеної теорії. Є автомобілі з механічною й автоматичною КПП. Уточніть перелік документів та актуальні умови вступу.',
      duration: '40 годин практичного навчання',
    },
  },
  {
    slug: 'free_lesson',
    en: {
      title: 'Free trial lesson',
      description:
        'Meet the school, try the teaching approach and find a sensible starting point for your training.',
      audience:
        'For drivers who want to understand their current skills and choose a suitable programme.',
      skills: [
        'Try a set of introductory driving exercises',
        'Discuss your strengths and areas to develop',
        'See how the instructor explains and reviews technique',
        'Choose a training direction with the school',
      ],
      format:
        'An introductory assessment on the school’s training ground. Advance booking is required; availability depends on instructor schedules.',
      duration: 'Duration confirmed when booking',
    },
    uk: {
      title: 'Безкоштовний пробний урок',
      description:
        'Познайомтеся зі школою, спробуйте методику та визначте, з чого варто почати навчання.',
      audience:
        'Для водіїв, які хочуть зрозуміти свій поточний рівень і обрати відповідну програму.',
      skills: [
        'Спробувати нескладні вправи з керування',
        'Обговорити сильні сторони та навички для розвитку',
        'Побачити, як інструктор пояснює та аналізує техніку',
        'Разом зі школою обрати напрям навчання',
      ],
      format:
        'Ознайомлення та оцінювання на майданчику школи. Потрібен попередній запис; наявність місць залежить від графіка інструкторів.',
      duration: 'Тривалість уточнюється під час запису',
    },
  },
  {
    slug: 'corporate',
    en: {
      title: 'Corporate driving training',
      description:
        'Practical defensive-driving programmes built around the needs of your team and fleet.',
      audience:
        'For organisations whose employees drive for work, and teams planning a practical shared training day.',
      skills: [
        'Anticipate developing road hazards',
        'Choose safer road positions and preserve space',
        'Respond to adverse conditions and other drivers’ mistakes',
        'Identify areas for further development across the team',
      ],
      format:
        'A programme agreed with the organisation. Content, training location and cost depend on your requirements; candidate assessments can also be arranged.',
      duration: 'Agreed for your team',
    },
    uk: {
      title: 'Корпоративні навчання',
      description:
        'Практичні програми захисного водіння з урахуванням потреб вашої команди й автопарку.',
      audience:
        'Для організацій, працівники яких керують авто на роботі, та команд, що планують спільний практичний тренінг.',
      skills: [
        'Передбачати розвиток дорожньої небезпеки',
        'Обирати безпечніше положення та зберігати простір',
        'Реагувати на складні умови й помилки інших водіїв',
        'Визначати напрями подальшого розвитку навичок команди',
      ],
      format:
        'Програму узгоджують з організацією. Зміст, місце проведення та вартість залежать від потреб; також можна замовити тестування кандидатів у водії.',
      duration: 'За потребами вашої команди',
    },
  },
  {
    slug: 'drivers_test',
    en: {
      title: 'Driver candidate assessment',
      description:
        'Understand a candidate’s practical skills and approach to road safety before a driving role.',
      audience:
        'For employers assessing candidates for roles that involve driving.',
      skills: [
        'Assess theoretical understanding and practical preparation',
        'Observe safe-driving habits',
        'Review recognition and avoidance of hazards',
        'Identify strengths and development needs',
      ],
      format:
        'An assessment arranged with the employer. A detailed review of the candidate’s driving style and skills is available on request.',
      duration: 'Scope and timing agreed individually',
    },
    uk: {
      title: 'Тестування кандидатів у водії',
      description:
        'Оцініть практичну підготовку та ставлення кандидата до безпеки перед роботою за кермом.',
      audience:
        'Для роботодавців, які оцінюють кандидатів на посади, пов’язані з керуванням автомобілем.',
      skills: [
        'Оцінити теоретичну та практичну підготовку',
        'Проаналізувати навички безпечного водіння',
        'Перевірити вміння розпізнавати й уникати небезпеки',
        'Визначити сильні сторони та потреби в навчанні',
      ],
      format:
        'Тестування за домовленістю з роботодавцем. На запит можна отримати докладний висновок про стиль водіння та навички кандидата.',
      duration: 'Обсяг і тривалість узгоджуються індивідуально',
    },
  },
  {
    slug: 'carpathian-ring',
    en: {
      title: 'Carpathian Ring',
      description:
        'Take your learning beyond city streets with an instructor-guided long-distance driving day.',
      audience:
        'For drivers who already have basic skills and want structured experience on longer routes.',
      skills: [
        'Plan a longer journey and read the road ahead',
        'Develop safe overtaking decisions',
        'Practise manoeuvring on roads beyond the city',
        'Consolidate skills from beginner or core training',
      ],
      format:
        'A one-day driving journey with an agreed route. The price is calculated individually according to the route.',
      duration: '1 day · 6 hours',
    },
    uk: {
      title: 'Карпатське кільце',
      description:
        'Вийдіть за межі міських маршрутів на далекомагістральному занятті з інструктором.',
      audience:
        'Для водіїв із базовими навичками, які хочуть отримати структурований досвід довших поїздок.',
      skills: [
        'Планувати довшу подорож та читати дорогу наперед',
        'Приймати рішення для безпечного обгону',
        'Практикувати маневрування на позаміських дорогах',
        'Закріплювати навички початкового чи основного курсу',
      ],
      format:
        'Одноденна навчальна подорож узгодженим маршрутом. Вартість розраховують індивідуально залежно від маршруту.',
      duration: '1 день · 6 годин',
    },
  },
]

export { courses }
export type { CourseCopy }
