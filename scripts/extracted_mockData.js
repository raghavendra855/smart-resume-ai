__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_ACTIVITIES: () => (/* binding */ INITIAL_ACTIVITIES),
/* harmony export */   INITIAL_ANALYSIS_RESULT: () => (/* binding */ INITIAL_ANALYSIS_RESULT),
/* harmony export */   INITIAL_ATS_HISTORY: () => (/* binding */ INITIAL_ATS_HISTORY),
/* harmony export */   INITIAL_IMPROVEMENTS: () => (/* binding */ INITIAL_IMPROVEMENTS),
/* harmony export */   INITIAL_METRICS: () => (/* binding */ INITIAL_METRICS),
/* harmony export */   INITIAL_RESUME_DATA: () => (/* binding */ INITIAL_RESUME_DATA),
/* harmony export */   INITIAL_SKILL_MASTERY: () => (/* binding */ INITIAL_SKILL_MASTERY),
/* harmony export */   INITIAL_USER_SKILLS: () => (/* binding */ INITIAL_USER_SKILLS),
/* harmony export */   RESUME_TEMPLATES: () => (/* reexport safe */ _lib_templates__WEBPACK_IMPORTED_MODULE_0__.RESUME_TEMPLATES),
/* harmony export */   SAMPLE_EXPERIENCED_RESUME: () => (/* binding */ SAMPLE_EXPERIENCED_RESUME),
/* harmony export */   SAMPLE_JOBS: () => (/* binding */ SAMPLE_JOBS),
/* harmony export */   SKILL_ASSESSMENT_QUESTIONS: () => (/* binding */ SKILL_ASSESSMENT_QUESTIONS),
/* harmony export */   getQuestionsForSkill: () => (/* binding */ getQuestionsForSkill)
/* harmony export */ });
/* harmony import */ var _lib_templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/templates */ "(app-pages-browser)/./src/lib/templates.ts");


const INITIAL_RESUME_DATA = {
    id: 'res_default',
    title: 'Untitled Resume',
    candidateType: 'experienced',
    personalInfo: {
        fullName: '',
        email: '',
        phone: '',
        location: '',
        headline: '',
        linkedin: '',
        github: '',
        portfolio: ''
    },
    summary: '',
    skills: {
        technical: [],
        soft: [],
        tools: []
    },
    experience: [
        {
            id: 'exp_init',
            company: '',
            role: '',
            startDate: '',
            endDate: '',
            current: true,
            bulletPoints: []
        }
    ],
    education: [
        {
            id: 'edu_init',
            degree: '',
            institution: '',
            graduationYear: '',
            gpa: ''
        }
    ],
    projects: [
        {
            id: 'proj_init',
            title: '',
            description: '',
            technologies: []
        }
    ],
    certifications: [],
    templateId: 'modern-ats',
    lastUpdated: new Date().toISOString()
};
const SAMPLE_EXPERIENCED_RESUME = {
    id: 'res_sample_01',
    title: 'Senior Software & AI Engineer',
    candidateType: 'experienced',
    personalInfo: {
        fullName: 'Rahul Sharma',
        email: 'rahul.sharma@email.com',
        phone: '+1 (555) 234-5678',
        location: 'San Francisco, CA',
        headline: 'Senior Full Stack & AI Engineer',
        linkedin: 'linkedin.com/in/rahulsharma-dev',
        github: 'github.com/rahulsharma-dev',
        portfolio: 'rahulsharma.dev'
    },
    summary: 'Full Stack & AI Engineer with 6+ years of experience designing and deploying high-scale distributed web applications and production LLM pipelines. Architected microservices serving 4M+ monthly active users with 99.98% uptime. Proficient in React, TypeScript, Python, PostgreSQL, and cloud-native Kubernetes environments.',
    skills: {
        technical: [
            'Python',
            'JavaScript',
            'React',
            'SQL',
            'Machine Learning',
            'Git',
            'AWS',
            'Docker',
            'Kubernetes',
            'FastAPI',
            'PostgreSQL',
            'Redis'
        ],
        soft: [
            'Technical Leadership',
            'System Architecture Design',
            'Cross-functional Mentorship',
            'Agile Sprint Planning'
        ],
        tools: [
            'Visual Studio Code',
            'GitLab CI/CD',
            'Datadog',
            'Terraform',
            'Postman',
            'Jira'
        ]
    },
    experience: [
        {
            id: 'exp_01',
            company: 'Nexus AI Technologies',
            role: 'Staff Engineer - Core Platform',
            location: 'San Francisco, CA',
            startDate: '2023-01',
            endDate: '',
            current: true,
            bulletPoints: [
                'Architected real-time semantic search and retrieval-augmented generation (RAG) platform reducing query latency by 42% for 2.5M enterprise queries/day.',
                'Spearheaded transition from monolith to containerized Go/Python microservices on AWS EKS, cutting cloud infrastructure costs by $180,000 annually.',
                'Mentored 8 mid-level engineers and established bi-weekly technical design review standards that decreased critical production defects by 34%.'
            ]
        },
        {
            id: 'exp_02',
            company: 'Synthetix Cloud',
            role: 'Senior Full Stack Engineer',
            location: 'Seattle, WA',
            startDate: '2020-03',
            endDate: '2022-12',
            current: false,
            bulletPoints: [
                'Built enterprise analytics dashboard in React/TypeScript with sub-100ms client-side aggregation over 500,000 streaming telemetry rows.',
                'Engineered PostgreSQL read-replica pool with Redis caching layer, scaling queries per second from 1,200 to 9,800 under peak burst traffic.',
                'Automated CI/CD deployment pipelines using GitHub Actions and Terraform, shrinking release cycle times from 2 days to 18 minutes.'
            ]
        }
    ],
    education: [
        {
            id: 'edu_01',
            degree: 'B.S. in Computer Science',
            institution: 'University of California, Berkeley',
            location: 'Berkeley, CA',
            graduationYear: '2019',
            gpa: '3.86',
            honors: 'Dean’s Honors List, Magna Cum Laude'
        }
    ],
    projects: [
        {
            id: 'proj_01',
            title: 'NeuralFlow - Open Source Vector Search Index',
            description: 'Engineered high-performance HNSW index in C++ with Python bindings. Achieved 94% recall at 12,000 QPS on million-scale embeddings dataset.',
            technologies: [
                'Python',
                'C++',
                'Docker',
                'NumPy'
            ],
            link: 'github.com/rahulsharma-dev/neuralflow',
            bullets: [
                'Adopted by 1,400+ developers on GitHub with 850 stars within 4 months of initial release.',
                'Implemented custom quantization reducing memory footprint by 65% with minimal accuracy degradation.'
            ]
        }
    ],
    certifications: [
        {
            id: 'cert_01',
            name: 'AWS Certified Solutions Architect – Professional',
            issuer: 'Amazon Web Services',
            date: '2023',
            credentialId: 'AWS-SAP-892401'
        }
    ],
    templateId: 'ats-classic',
    lastUpdated: new Date().toISOString()
};
const INITIAL_USER_SKILLS = [
    {
        id: 'skill_01',
        name: 'Python',
        category: 'Programming',
        status: 'not-verified'
    },
    {
        id: 'skill_02',
        name: 'SQL',
        category: 'Database',
        status: 'not-verified'
    },
    {
        id: 'skill_03',
        name: 'React',
        category: 'Frontend',
        status: 'not-verified'
    },
    {
        id: 'skill_04',
        name: 'AWS',
        category: 'Cloud & DevOps',
        status: 'not-verified'
    },
    {
        id: 'skill_05',
        name: 'Machine Learning',
        category: 'AI / Data',
        status: 'not-verified'
    },
    {
        id: 'skill_06',
        name: 'JavaScript',
        category: 'Programming',
        status: 'not-verified'
    },
    {
        id: 'skill_07',
        name: 'Git',
        category: 'Cloud & DevOps',
        status: 'not-verified'
    }
];
const INITIAL_ANALYSIS_RESULT = {
    overallAtsScore: 84,
    keywordMatchScore: 88,
    formattingScore: 92,
    contentScore: 80,
    sectionScore: 85,
    wordCount: 486,
    readabilityScore: 78,
    detectedKeywords: [
        'Python',
        'React',
        'TypeScript',
        'PostgreSQL',
        'AWS',
        'Kubernetes',
        'Docker',
        'Distributed Systems',
        'Microservices',
        'RAG',
        'CI/CD'
    ],
    missingKeywords: [
        'System Monitoring',
        'Load Balancing',
        'GraphQL',
        'Kafka',
        'Unit Testing (PyTest/Jest)'
    ],
    strengths: [
        {
            id: 'str_1',
            section: 'Work Experience',
            title: 'Strong Quantifiable Achievements',
            description: 'Bullet points include explicit metrics ($180K cost savings, 42% query latency reduction, 4M+ MAU) which drastically improve ATS ranking and recruiter conversion.'
        },
        {
            id: 'str_2',
            section: 'Skills Coverage',
            title: 'High-Demand Core Technologies',
            description: 'Strong overlap with Tier-1 engineering criteria: Python, TypeScript, React, PostgreSQL, and cloud containerization technologies are prominent and consistently formatted.'
        },
        {
            id: 'str_3',
            section: 'Structure & ATS Parseability',
            title: 'Compliant Section Hierarchy',
            description: 'Standardized headings (Summary, Skills, Experience, Education, Projects) enable 100% token extraction accuracy across modern parsers (Greenhouse, Lever, Workday).'
        }
    ],
    weaknesses: [
        {
            id: 'wk_1',
            section: 'Summary',
            whatIsWrong: 'Summary is somewhat brief and misses target leadership scope.',
            whyItMatters: 'Recruiters spend 6 seconds on initial screening; a concise value proposition defining domain authority sets the lens for the entire review.',
            howToImprove: 'Include your primary architectural specialty and specify team sizing or budget scope in your opening paragraph.',
            severity: 'medium'
        },
        {
            id: 'wk_2',
            section: 'Experience',
            whatIsWrong: 'Lack of automated testing and code quality tools mentioned.',
            whyItMatters: 'Modern senior roles require explicit evidence of test-driven development, linting pipelines, and code review rigor.',
            howToImprove: 'Add references to testing frameworks (e.g. PyTest, Jest, Cypress) in your CI/CD automation bullet.',
            severity: 'medium'
        },
        {
            id: 'wk_3',
            section: 'Projects',
            whatIsWrong: 'Only one major project highlighted despite extensive technical breadth.',
            whyItMatters: 'Secondary systems experience (e.g. event-driven message queues or database indexing) is hidden in bullets rather than showcasing standalone engineering ownership.',
            howToImprove: 'Add a second project emphasizing distributed streaming data or asynchronous worker queues.',
            severity: 'low'
        }
    ],
    recommendations: [
        {
            id: 'rec_1',
            category: 'Keyword Optimization',
            title: 'Incorporate Kafka & Event-Driven Patterns',
            actionText: 'Explicitly state event streaming or async queue systems in your platform description to match Senior Backend ATS filter thresholds.',
            originalText: 'Transitioned monolith to containerized Go/Python microservices...',
            improvedText: 'Transitioned monolith to event-driven Go/Python microservices via Kafka, cutting cloud infrastructure costs by $180,000 annually.',
            impact: '+6 ATS Points'
        },
        {
            id: 'rec_2',
            category: 'Impact Amplification',
            title: 'Quantify Mentorship Outcomes',
            actionText: 'Mention internal promotions or team velocity gain resulting from your leadership and engineering design reviews.',
            originalText: 'Mentored 8 mid-level engineers...',
            improvedText: 'Mentored 8 mid-level engineers with 3 receiving senior promotions within 14 months; boosted team sprint velocity by 28%.',
            impact: '+4 ATS Points'
        }
    ],
    summaryFeedback: 'This resume demonstrates high caliber engineering execution with clear, quantified impacts. Minor optimizations around automated testing keywords and expanded event-driven architectures will elevate this profile into the 90th percentile of ATS applicant pools.',
    analyzedAt: new Date().toISOString()
};
const INITIAL_IMPROVEMENTS = [
    {
        id: 'imp_01',
        section: 'summary',
        field: 'Professional Summary',
        originalContent: 'Full Stack & AI Engineer with 6+ years of experience designing and deploying high-scale distributed web applications and production LLM pipelines. Architected microservices serving 4M+ monthly active users with 99.98% uptime. Proficient in React, TypeScript, Python, PostgreSQL, and cloud-native Kubernetes environments.',
        improvedContent: 'High-impact Staff / Senior Full Stack & AI Engineer with 6+ years spearheading distributed systems and production LLM/RAG pipelines at enterprise scale. Engineered resilient microservice ecosystems serving 4M+ monthly active users at 99.98% SLA reliability. Deep expertise across TypeScript, Python, PostgreSQL, AWS EKS, and high-throughput vector retrieval architectures.',
        reasoning: 'Elevated seniority signaling with active authority verbs ("spearheading", "engineered resilient ecosystems") and tightened SLA metric terminology without inventing unverified facts.',
        metricImpact: '+8 ATS Score & Recruiter Engagement',
        status: 'pending'
    },
    {
        id: 'imp_02',
        section: 'experience',
        field: 'Nexus AI - Architecture Bullet',
        originalContent: 'Architected real-time semantic search and retrieval-augmented generation (RAG) platform reducing query latency by 42% for 2.5M enterprise queries/day.',
        improvedContent: 'Architected high-throughput semantic search and RAG platform with sub-80ms p95 latency across 2.5M daily enterprise queries, slashing median response latency by 42%.',
        reasoning: 'Added standard industry latency benchmark (p95) to quantify responsiveness rigorously.',
        metricImpact: '+5 Technical Depth Score',
        status: 'pending'
    },
    {
        id: 'imp_03',
        section: 'experience',
        field: 'Synthetix Cloud - Database Optimization Bullet',
        originalContent: 'Engineered PostgreSQL read-replica pool with Redis caching layer, scaling queries per second from 1,200 to 9,800 under peak burst traffic.',
        improvedContent: 'Engineered highly available PostgreSQL read-replica cluster coupled with Redis distributed caching layer, scaling throughput by 716% (1,200 to 9,800 QPS) under critical peak burst loads.',
        reasoning: 'Explicitly calculates the percentage growth (+716%) which draws recruiters’ eyes directly to the business and architectural win.',
        metricImpact: '+6 System Scale Visibility',
        status: 'pending'
    }
];
// Rich, accurate question bank for the 11 supported skills
const SKILL_ASSESSMENT_QUESTIONS = {
    Python: [
        {
            id: 'py_01',
            skill: 'Python',
            type: 'multiple-choice',
            question: 'What is the primary role of Python’s Global Interpreter Lock (GIL)?',
            options: [
                'To speed up CPU-bound multithreaded operations across multiple cores',
                'To synchronize execution of threads so only one native thread runs Python bytecode at a time',
                'To prevent memory leaks by locking garbage collection during I/O operations',
                'To enforce strong typing across dynamic object assignments'
            ],
            correctOptionIndex: 1,
            explanation: 'The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecodes simultaneously in CPython.',
            topic: 'Concurrency & Internals'
        },
        {
            id: 'py_02',
            skill: 'Python',
            type: 'code-output',
            question: 'What will be the output of the following code snippet?',
            codeSnippet: `def func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(func(1))\nprint(func(2))`,
            options: [
                '[1] and [2]',
                '[1] and [1, 2]',
                '[1] and []',
                'TypeError: mutable default argument'
            ],
            correctOptionIndex: 1,
            explanation: 'Default parameter values are evaluated once when the function definition is executed, so the same mutable list `b` is reused across successive invocations.',
            topic: 'Functions & Mutable Defaults'
        },
        {
            id: 'py_03',
            skill: 'Python',
            type: 'debugging',
            question: 'Why does the following dictionary comprehension cause unexpected behavior?',
            codeSnippet: `keys = ['a', 'b', 'c']\nfuncs = [lambda: k for k in keys]\nprint([f() for f in funcs])`,
            options: [
                'SyntaxError: lambda cannot be used in list comprehensions',
                'All lambdas return "c" due to late-binding closures over the loop variable `k`',
                'It outputs [None, None, None]',
                'It raises a NameError because `k` is out of scope'
            ],
            correctOptionIndex: 1,
            explanation: 'Python closures bind variables by reference rather than value; by the time the lambdas are called, `k` has its final value of "c". To fix, use `lambda k=k: k`.',
            topic: 'Closures & Scopes'
        },
        {
            id: 'py_04',
            skill: 'Python',
            type: 'multiple-choice',
            question: 'What is the time complexity of checking membership (`x in collection`) for a set vs a list in Python (average case)?',
            options: [
                'Set: O(1), List: O(n)',
                'Set: O(n), List: O(1)',
                'Set: O(log n), List: O(n)',
                'Set: O(1), List: O(log n)'
            ],
            correctOptionIndex: 0,
            explanation: 'Python sets are implemented via hash tables, giving average O(1) lookup, whereas lists require linear scans of O(n).',
            topic: 'Data Structures & Complexity'
        },
        {
            id: 'py_05',
            skill: 'Python',
            type: 'practical-coding',
            question: 'Which built-in mechanism should be used to implement a memory-efficient generator that yields values on demand?',
            codeSnippet: `def stream_records(data):\n    for record in data:\n        # which statement goes here?\n        ???`,
            options: [
                'return record',
                'yield record',
                'emit record',
                'async.send(record)'
            ],
            correctOptionIndex: 1,
            explanation: 'The `yield` keyword turns a normal function into a generator iterator, yielding one value at a time without loading entire sequences into memory.',
            topic: 'Generators & Iterators'
        },
        {
            id: 'py_06',
            skill: 'Python',
            type: 'multiple-choice',
            question: 'What is the difference between `__init__` and `__new__` in Python classes?',
            options: [
                '`__init__` allocates the memory while `__new__` initializes properties',
                '`__new__` is the static constructor that creates and returns the object instance, while `__init__` initializes it',
                '`__init__` is only called for subclasses, while `__new__` is called for base classes',
                'There is no difference; they are aliases for the same dunder method'
            ],
            correctOptionIndex: 1,
            explanation: '`__new__` is called first to instantiate the class object and returns the instance, which is then passed to `__init__` for field assignment.',
            topic: 'OOP & Dunder Methods'
        },
        {
            id: 'py_07',
            skill: 'Python',
            type: 'code-output',
            question: 'What does the following slice operation return?',
            codeSnippet: `nums = [10, 20, 30, 40, 50]\nprint(nums[::-2])`,
            options: [
                '[50, 30, 10]',
                '[10, 30, 50]',
                '[40, 20]',
                '[50, 40, 30]'
            ],
            correctOptionIndex: 0,
            explanation: 'A negative step of -2 traverses the list in reverse starting from the last item, skipping every other element: 50, 30, 10.',
            topic: 'Slicing & Sequences'
        },
        {
            id: 'py_08',
            skill: 'Python',
            type: 'multiple-choice',
            question: 'How does Python handle memory management for small integers (-5 to 256)?',
            options: [
                'They are garbage-collected immediately upon leaving scope',
                'They are pre-allocated and interned (singleton cache) in CPython for performance',
                'They are stored directly on the execution stack without heap allocation',
                'They require explicit pointer deallocation'
            ],
            correctOptionIndex: 1,
            explanation: 'CPython maintains an internal cache array of integer objects for values between -5 and 256; any reference to these numbers points to identical memory addresses.',
            topic: 'Memory Management'
        },
        {
            id: 'py_09',
            skill: 'Python',
            type: 'debugging',
            question: 'How should you safely manage file resource closure even in the event of an unhandled exception?',
            codeSnippet: `# Which pattern guarantees f.close() is called?\nwith open("data.txt", "r") as f:\n    data = f.read()`,
            options: [
                'The `with` statement utilizes the Context Manager protocol (`__enter__` and `__exit__`)',
                'You must manually write `f.close()` inside the block',
                'Python files auto-close via the garbage collector every 10ms',
                'Only `try/catch` without `finally` can close files'
            ],
            correctOptionIndex: 0,
            explanation: 'The `with` statement calls `__exit__` upon leaving the block regardless of whether exceptions occurred, ensuring reliable resource release.',
            topic: 'Context Managers'
        },
        {
            id: 'py_10',
            skill: 'Python',
            type: 'practical-coding',
            question: 'In `dataclasses`, what decorator argument prevents instance attribute modification after creation?',
            options: [
                '@dataclass(immutable=True)',
                '@dataclass(frozen=True)',
                '@dataclass(readonly=True)',
                '@dataclass(const=True)'
            ],
            correctOptionIndex: 1,
            explanation: '`@dataclass(frozen=True)` emulates read-only frozen instances by intercepting `__setattr__` and `__delattr__`.',
            topic: 'Modern Standard Library'
        }
    ],
    React: [
        {
            id: 'rc_01',
            skill: 'React',
            type: 'multiple-choice',
            question: 'What is the primary benefit of React’s Virtual DOM reconciliation algorithm?',
            options: [
                'It completely replaces the browser layout engine',
                'It computes minimal diffs between virtual trees to batch and minimize costly native DOM manipulations',
                'It compiles JSX into machine bytecode at runtime',
                'It eliminates the need for CSS rendering'
            ],
            correctOptionIndex: 1,
            explanation: 'Reconciliation computes difference heuristics between new and old Virtual DOM representations to apply targeted patches to real DOM nodes.',
            topic: 'Reconciliation & Architecture'
        },
        {
            id: 'rc_02',
            skill: 'React',
            type: 'code-output',
            question: 'In React 18/19, how are multiple state setters within the same event handler processed?',
            codeSnippet: `function handleClick() {\n  setCount(c => c + 1);\n  setFlag(f => !f);\n}`,
            options: [
                'They trigger two separate sequential re-renders',
                'They are automatically batched into a single unified re-render',
                'Only the last setter executes',
                'An infinite re-render loop is triggered'
            ],
            correctOptionIndex: 1,
            explanation: 'React 18+ provides automatic batching for all updates inside timeouts, promises, and native event handlers into a single re-render.',
            topic: 'Batching & Performance'
        },
        {
            id: 'rc_03',
            skill: 'React',
            type: 'debugging',
            question: 'Why does passing an inline object to a memoized child component defeat `React.memo`?',
            codeSnippet: `<MemoizedChild config={{ theme: "dark" }} />`,
            options: [
                'React.memo only works with string props',
                'Object identity comparison (`===`) creates a new reference on every parent render',
                'MemoizedChild requires `useMemo` on the child itself',
                'Inline objects cause syntax compilation errors in Next.js'
            ],
            correctOptionIndex: 1,
            explanation: 'By default `React.memo` performs shallow equality (`Object.is`). A new object literal `{ theme: "dark" }` is allocated on every parent render, resulting in `oldProps.config !== newProps.config`.',
            topic: 'Memoization & Rendering'
        },
        {
            id: 'rc_04',
            skill: 'React',
            type: 'multiple-choice',
            question: 'What is the correct purpose of `useId` in React?',
            options: [
                'To generate cryptographic session tokens',
                'To generate unique, stable IDs for accessibility attributes across SSR and hydration',
                'To track component re-render counts in dev mode',
                'To assign database primary keys'
            ],
            correctOptionIndex: 1,
            explanation: '`useId` generates unique IDs that are stable across server rendering and client hydration, avoiding hydration mismatch warnings.',
            topic: 'Hooks & Accessibility'
        },
        {
            id: 'rc_05',
            skill: 'React',
            type: 'practical-coding',
            question: 'Which hook should you use to store a mutable value that persists across renders without triggering a re-render when mutated?',
            options: [
                'useState',
                'useRef',
                'useMemo',
                'useCallback'
            ],
            correctOptionIndex: 1,
            explanation: '`useRef` returns a mutable object whose `.current` property can be modified without causing React to trigger a component re-render.',
            topic: 'Hooks & Refs'
        },
        {
            id: 'rc_06',
            skill: 'React',
            type: 'multiple-choice',
            question: 'What is the role of `key` props when rendering lists in React?',
            options: [
                'Keys are passed directly into children props as an integer index',
                'Keys provide identity so React knows which list items were added, removed, or reordered across renders',
                'Keys enable CSS grid animation acceleration',
                'Keys are mandatory only for SVG elements'
            ],
            correctOptionIndex: 1,
            explanation: 'Keys give elements a persistent identity across renders, allowing React to match children in the original tree with children in the subsequent tree.',
            topic: 'Lists & Keys'
        },
        {
            id: 'rc_07',
            skill: 'React',
            type: 'code-output',
            question: 'What will be logged when this component mounts?',
            codeSnippet: `useEffect(() => {\n  console.log("A");\n  return () => console.log("B");\n}, []);`,
            options: [
                'Logs "A" on mount, and "B" only when unmounted',
                'Logs "B" first, then "A"',
                'Logs "A" and "B" simultaneously',
                'Throws an error because cleanup cannot return a string'
            ],
            correctOptionIndex: 0,
            explanation: 'The effect body runs after the component renders and mounts ("A"), and the cleanup callback ("B") is invoked when the component unmounts.',
            topic: 'Lifecycle & useEffect'
        },
        {
            id: 'rc_08',
            skill: 'React',
            type: 'debugging',
            question: 'What is wrong with modifying state directly like `state.count = 5` in React?',
            options: [
                'React will throw a runtime ReadOnly error',
                'React will not detect the change because state setters are required to schedule reconciliation',
                'Direct mutations cause browser memory leaks',
                'Direct mutations are actually recommended in modern React'
            ],
            correctOptionIndex: 1,
            explanation: 'React relies on state update dispatchers to know that state has changed and to trigger re-rendering; mutating state directly bypasses the scheduler.',
            topic: 'Immutability & State'
        },
        {
            id: 'rc_09',
            skill: 'React',
            type: 'multiple-choice',
            question: 'What does `useCallback(fn, deps)` return?',
            options: [
                'The cached return value of executing `fn`',
                'A memoized version of the callback function that only changes if dependencies change',
                'A promise that resolves when `fn` completes',
                'A cleanup subscription object'
            ],
            correctOptionIndex: 1,
            explanation: '`useCallback` caches a function definition between renders so child components that receive it do not re-render unnecessarily.',
            topic: 'Hooks & Optimization'
        },
        {
            id: 'rc_10',
            skill: 'React',
            type: 'practical-coding',
            question: 'Which boundary component catches JavaScript errors anywhere in their child component tree and displays a fallback UI?',
            options: [
                '<ErrorBoundary>',
                '<Suspense>',
                '<StrictMode>',
                '<Provider>'
            ],
            correctOptionIndex: 0,
            explanation: 'Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI.',
            topic: 'Error Handling'
        }
    ],
    SQL: [
        {
            id: 'sql_01',
            skill: 'SQL',
            type: 'multiple-choice',
            question: 'What is the fundamental difference between `WHERE` and `HAVING` clauses in SQL?',
            options: [
                '`WHERE` filters rows before aggregation, while `HAVING` filters aggregated groups after `GROUP BY`',
                '`HAVING` filters single rows while `WHERE` filters tables',
                '`WHERE` can only be used with numeric datatypes',
                'There is no difference; they are interchangeable keywords'
            ],
            correctOptionIndex: 0,
            explanation: '`WHERE` filters individual records before aggregation functions (`COUNT`, `SUM`, `AVG`) are executed. `HAVING` filters group rows produced by `GROUP BY`.',
            topic: 'Filtering & Aggregation'
        },
        {
            id: 'sql_02',
            skill: 'SQL',
            type: 'code-output',
            question: 'What does `SELECT COUNT(1)` vs `SELECT COUNT(column_name)` return if some rows have NULL in that column?',
            options: [
                'Both return the exact same count',
                '`COUNT(1)` counts all rows including NULLs, while `COUNT(column_name)` ignores NULL values',
                '`COUNT(column_name)` throws an exception on NULL values',
                '`COUNT(1)` only counts rows where column equals 1'
            ],
            correctOptionIndex: 1,
            explanation: '`COUNT(*)` and `COUNT(1)` count all returned rows regardless of content, whereas `COUNT(column)` specifically counts non-null occurrences of that column.',
            topic: 'Aggregates & Null Handling'
        },
        {
            id: 'sql_03',
            skill: 'SQL',
            type: 'debugging',
            question: 'Why does `SELECT * FROM users WHERE status != "active"` exclude users where `status IS NULL`?',
            options: [
                'In three-valued logic (3VL), comparisons with NULL evaluate to UNKNOWN, which resolves to FALSE in WHERE filters',
                'SQL automatically converts NULL to empty string',
                'It is a bug in the query planner',
                'The query is syntactically invalid because quotes must be single quotes'
            ],
            correctOptionIndex: 0,
            explanation: 'SQL uses Three-Valued Logic (TRUE, FALSE, UNKNOWN). NULL != "active" is UNKNOWN, and WHERE clauses only retain rows evaluating strictly to TRUE. To include them, write `WHERE status != "active" OR status IS NULL`.',
            topic: 'Three-Valued Logic & Nulls'
        },
        {
            id: 'sql_04',
            skill: 'SQL',
            type: 'multiple-choice',
            question: 'Which ACID property guarantees that all operations within a transaction succeed or all roll back completely?',
            options: [
                'Atomicity',
                'Consistency',
                'Isolation',
                'Durability'
            ],
            correctOptionIndex: 0,
            explanation: 'Atomicity guarantees that all statements in a transaction work as a single indivisible unit: either all succeed or none persist.',
            topic: 'ACID Properties'
        },
        {
            id: 'sql_05',
            skill: 'SQL',
            type: 'practical-coding',
            question: 'Which window function assigns sequential integers starting from 1 to each row within a partition, without skipping numbers on ties?',
            options: [
                'ROW_NUMBER()',
                'RANK()',
                'DENSE_RANK()',
                'NTILE()'
            ],
            correctOptionIndex: 0,
            explanation: '`ROW_NUMBER()` guarantees unique sequential integers (1, 2, 3...) regardless of ties, whereas `RANK()` and `DENSE_RANK()` handle ties specially.',
            topic: 'Window Functions'
        },
        {
            id: 'sql_06',
            skill: 'SQL',
            type: 'multiple-choice',
            question: 'What type of index is most effective for range queries (`WHERE age BETWEEN 25 AND 35`) on relational databases?',
            options: [
                'B-Tree Index',
                'Hash Index',
                'Full-Text Index',
                'Bloom Filter'
            ],
            correctOptionIndex: 0,
            explanation: 'B-Trees keep data ordered, enabling logarithmic time search for ranges and boundary traversals. Hash indexes only support equality (`=`) checks.',
            topic: 'Indexing & Performance'
        },
        {
            id: 'sql_07',
            skill: 'SQL',
            type: 'code-output',
            question: 'What is the result of an `INNER JOIN` when there are no matching keys between Table A and Table B?',
            options: [
                'An empty result set (0 rows)',
                'All rows from Table A with NULLs for Table B',
                'A full Cartesian product',
                'An SQL execution error'
            ],
            correctOptionIndex: 0,
            explanation: '`INNER JOIN` retains only rows where the join predicate evaluates to TRUE for both tables. If no rows match, 0 rows are returned.',
            topic: 'Joins'
        },
        {
            id: 'sql_08',
            skill: 'SQL',
            type: 'multiple-choice',
            question: 'What does a composite index on `(last_name, first_name)` allow the database to optimize?',
            options: [
                'Queries filtering on `last_name` alone, or both `last_name` AND `first_name` (leftmost prefix rule)',
                'Queries filtering on `first_name` alone without `last_name`',
                'Only queries that select all columns via `*`',
                'Only updates and deletes, but not selects'
            ],
            correctOptionIndex: 0,
            explanation: 'Composite indexes follow the Leftmost Prefix Rule: they can be used for queries filtering on column 1, or columns 1+2, but cannot be used for column 2 alone.',
            topic: 'Composite Indexes'
        },
        {
            id: 'sql_09',
            skill: 'SQL',
            type: 'debugging',
            question: 'What is a SQL Injection vulnerability, and what is the primary defense against it?',
            options: [
                'A buffer overflow in the query parser; defended by restarting the DB',
                'Attacker manipulation of SQL syntax via unsanitized string concatenation; defended by Parameterized Queries / Prepared Statements',
                'A hardware disk failure; defended by RAID mirroring',
                'A network port scan; defended by TLS certificates'
            ],
            correctOptionIndex: 1,
            explanation: 'SQL injection occurs when user input is concatenated directly into SQL text. Parameterized queries send data separately from SQL code, preventing input from altering query structure.',
            topic: 'Security & Prepared Statements'
        },
        {
            id: 'sql_10',
            skill: 'SQL',
            type: 'practical-coding',
            question: 'Which syntax defines a Common Table Expression (CTE) in modern SQL?',
            options: [
                'WITH cte_name AS (SELECT ...)',
                'CREATE TEMPORARY cte_name AS (SELECT ...)',
                'DECLARE cte_name TABLE = (SELECT ...)',
                'SUBQUERY cte_name IS (SELECT ...)'
            ],
            correctOptionIndex: 0,
            explanation: 'Common Table Expressions are introduced with the `WITH` keyword, allowing modular, recursive, and readable subquery definitions.',
            topic: 'CTEs & Subqueries'
        }
    ],
    JavaScript: [
        {
            id: 'js_01',
            skill: 'JavaScript',
            type: 'multiple-choice',
            question: 'What is the order of execution between microtasks and macrotasks in the JavaScript Event Loop?',
            options: [
                'All microtasks (e.g. Promise.then, queueMicrotask) run before the next macrotask (e.g. setTimeout) executes',
                'Macrotasks always execute before microtasks',
                'They execute in alternating 1:1 order',
                'Microtasks only run when the browser tab is minimized'
            ],
            correctOptionIndex: 0,
            explanation: 'After every macrotask completes, the JavaScript engine drains the entire microtask queue before picking the next macrotask from the task queue.',
            topic: 'Event Loop & Concurrency'
        },
        {
            id: 'js_02',
            skill: 'JavaScript',
            type: 'code-output',
            question: 'What is logged by the following code?',
            codeSnippet: `console.log(typeof null);\nconsole.log(null instanceof Object);`,
            options: [
                '"object" and false',
                '"null" and true',
                '"object" and true',
                '"undefined" and false'
            ],
            correctOptionIndex: 0,
            explanation: '`typeof null` evaluates to "object" due to a historical bug in the first JS implementation where objects were tagged with type tag 0. However, `null instanceof Object` is false because null does not have a prototype chain.',
            topic: 'Types & Prototypes'
        },
        {
            id: 'js_03',
            skill: 'JavaScript',
            type: 'debugging',
            question: 'What causes the difference in output between arrow functions and regular function declarations regarding `this`?',
            options: [
                'Arrow functions have lexical `this` (they inherit `this` from enclosing scope), whereas regular functions bind `this` based on how they are invoked',
                'Arrow functions cannot accept arguments',
                'Regular functions are always executed on Web Workers',
                'Arrow functions bind `this` to the global window object in strict mode'
            ],
            correctOptionIndex: 0,
            explanation: 'Arrow functions do not define their own execution context; their `this` value is determined lexically from the surrounding scope.',
            topic: 'Functions & Scopes'
        },
        {
            id: 'js_04',
            skill: 'JavaScript',
            type: 'multiple-choice',
            question: 'Which method creates a deep copy of serializable JavaScript objects natively in modern browsers and Node.js?',
            options: [
                'structuredClone(obj)',
                'Object.assign({}, obj)',
                '{ ...obj }',
                'obj.clone()'
            ],
            correctOptionIndex: 0,
            explanation: '`structuredClone()` provides a native, high-performance deep clone algorithm supporting circular references, Dates, RegExps, Maps, Sets, and TypedArrays.',
            topic: 'Object Manipulation'
        },
        {
            id: 'js_05',
            skill: 'JavaScript',
            type: 'practical-coding',
            question: 'How do you handle multiple promises concurrently and wait until all of them settle (either fulfill or reject)?',
            options: [
                'Promise.allSettled()',
                'Promise.all()',
                'Promise.race()',
                'Promise.any()'
            ],
            correctOptionIndex: 0,
            explanation: '`Promise.allSettled()` returns a promise that resolves after all given promises have either fulfilled or rejected, with an array of result objects describing each outcome.',
            topic: 'Async & Promises'
        },
        {
            id: 'js_06',
            skill: 'JavaScript',
            type: 'code-output',
            question: 'What is logged to the console?',
            codeSnippet: `const a = [1, 2, 3];\nconst b = a;\nb.push(4);\nconsole.log(a.length);`,
            options: [
                '4',
                '3',
                'undefined',
                'TypeError'
            ],
            correctOptionIndex: 0,
            explanation: 'Arrays are reference types in JavaScript. Assigning `b = a` copies the memory pointer, so mutating `b` mutates the underlying array referenced by `a`.',
            topic: 'References & Memory'
        },
        {
            id: 'js_07',
            skill: 'JavaScript',
            type: 'multiple-choice',
            question: 'What happens when a variable declared with `let` is accessed before its declaration line?',
            options: [
                'ReferenceError due to Temporal Dead Zone (TDZ)',
                'Returns `undefined` like `var`',
                'Silent failure without errors',
                'Logs `null`'
            ],
            correctOptionIndex: 0,
            explanation: 'Variables declared with `let` and `const` are hoisted but uninitialized, existing in the Temporal Dead Zone until their definition is evaluated.',
            topic: 'Hoisting & TDZ'
        },
        {
            id: 'js_08',
            skill: 'JavaScript',
            type: 'debugging',
            question: 'Why does `0.1 + 0.2 === 0.3` evaluate to false in JavaScript?',
            options: [
                'Floating point numbers are represented using IEEE 754 double precision binary, causing small rounding inaccuracies (0.30000000000000004)',
                'JavaScript does not support decimals',
                '0.1 is treated as an integer in strict mode',
                'Type coercion converts 0.3 to string'
            ],
            correctOptionIndex: 0,
            explanation: 'Base-10 fractions like 0.1 cannot be represented precisely in finite binary floating-point representations, leading to precision loss.',
            topic: 'Numbers & Precision'
        },
        {
            id: 'js_09',
            skill: 'JavaScript',
            type: 'multiple-choice',
            question: 'What is the primary difference between a `Map` and a plain object in JavaScript?',
            options: [
                'A Map allows keys of any type (including objects/functions) and maintains insertion order',
                'Objects are faster for searching keys of type symbol',
                'Maps cannot be iterated with `for...of`',
                'Maps are stored in local storage automatically'
            ],
            correctOptionIndex: 0,
            explanation: 'Plain objects only support string and symbol keys. Maps can use any value (including primitives, functions, or objects) as keys and guarantee insertion order.',
            topic: 'Collections & Maps'
        },
        {
            id: 'js_10',
            skill: 'JavaScript',
            type: 'practical-coding',
            question: 'Which syntax uses optional chaining to safely access deeply nested properties without throwing TypeError if an intermediate value is null or undefined?',
            options: [
                'user?.profile?.address?.zipCode',
                'user??profile??address??zipCode',
                'user.try(profile.address)',
                'user::profile::address'
            ],
            correctOptionIndex: 0,
            explanation: 'The optional chaining operator (`?.`) short-circuits and evaluates to `undefined` if the operand before `?.` is `null` or `undefined`.',
            topic: 'Modern Syntax'
        }
    ],
    Java: [
        {
            id: 'java_01',
            skill: 'Java',
            type: 'multiple-choice',
            question: 'What is the difference between JVM, JRE, and JDK in Java?',
            options: [
                'JDK contains JRE and development tools; JRE contains JVM and runtime libraries; JVM executes compiled bytecode',
                'JVM is the compiler; JDK is the runtime; JRE is the debugger',
                'They are different versions of the Java language specification',
                'JDK only runs on Linux servers'
            ],
            correctOptionIndex: 0,
            explanation: 'JDK (Java Development Kit) is the full developer package. JRE (Java Runtime Environment) allows running apps. JVM (Java Virtual Machine) executes bytecode.',
            topic: 'Java Architecture'
        },
        {
            id: 'java_02',
            skill: 'Java',
            type: 'code-output',
            question: 'What is printed by `System.out.println(s1 == s2)` vs `s1.equals(s2)` for String s1 = "hello"; String s2 = new String("hello");?',
            options: [
                '`false` for == and `true` for equals',
                '`true` for both',
                '`false` for both',
                '`true` for == and `false` for equals'
            ],
            correctOptionIndex: 0,
            explanation: '`==` tests reference identity (memory addresses). `s1` points to the String pool while `s2` points to a separate heap allocation. `.equals()` compares character values.',
            topic: 'Strings & Memory'
        },
        {
            id: 'java_03',
            skill: 'Java',
            type: 'debugging',
            question: 'Why should `ConcurrentHashMap` be preferred over `Collections.synchronizedMap()` in high-concurrency environments?',
            options: [
                '`ConcurrentHashMap` uses bucket-level / segment locking allowing simultaneous reads and writes without locking the entire table',
                '`ConcurrentHashMap` does not use locks at all',
                '`synchronizedMap` is deprecated in Java 17',
                '`ConcurrentHashMap` runs on GPU threads'
            ],
            correctOptionIndex: 0,
            explanation: '`Collections.synchronizedMap` locks the entire collection on every operation. `ConcurrentHashMap` achieves high throughput via lock striping and CAS operations.',
            topic: 'Concurrency & Collections'
        },
        {
            id: 'java_04',
            skill: 'Java',
            type: 'multiple-choice',
            question: 'What does the `volatile` keyword guarantee in Java multi-threading?',
            options: [
                'Visibility of variable changes across threads (reads/writes directly to main memory) and prevents instruction reordering',
                'Mutual exclusion lock similar to `synchronized` blocks',
                'Automatic atomicity for compound operations like `i++`',
                'Serialization of the object to disk'
            ],
            correctOptionIndex: 0,
            explanation: '`volatile` ensures changes are immediately visible to other threads and prevents instruction reordering, but does NOT guarantee atomicity for operations like `count++`.',
            topic: 'Memory Model & Concurrency'
        },
        {
            id: 'java_05',
            skill: 'Java',
            type: 'practical-coding',
            question: 'Which interface in Java represents a function that accepts one argument and produces a result?',
            options: [
                'java.util.function.Function<T, R>',
                'Consumer<T>',
                'Supplier<T>',
                'Predicate<T>'
            ],
            correctOptionIndex: 0,
            explanation: '`Function<T, R>` takes a single input of type T and returns a result of type R. `Consumer` returns void, `Supplier` takes no arguments, and `Predicate` returns boolean.',
            topic: 'Functional Interfaces'
        },
        {
            id: 'java_06',
            skill: 'Java',
            type: 'multiple-choice',
            question: 'What is the purpose of the Java Garbage Collector’s Generational Hypothesis?',
            options: [
                'Most objects die young, so segregating heap into Eden/Young and Tenured/Old minimizes collection pauses',
                'All objects live equally long and are scanned uniformly',
                'Garbage collection is only executed when memory is 100% full',
                'It converts object pointers into numeric IDs'
            ],
            correctOptionIndex: 0,
            explanation: 'The weak generational hypothesis posits that most allocated objects become unreachable shortly after allocation, making frequent minor GCs on young generation very efficient.',
            topic: 'JVM & Garbage Collection'
        },
        {
            id: 'java_07',
            skill: 'Java',
            type: 'code-output',
            question: 'Can an `abstract` class have concrete implemented methods and constructor methods in Java?',
            options: [
                'Yes, an abstract class can have constructors, state fields, and fully implemented concrete methods',
                'No, abstract classes can only contain method signatures without bodies',
                'Constructors are prohibited in abstract classes',
                'Only static methods are allowed in abstract classes'
            ],
            correctOptionIndex: 0,
            explanation: 'Abstract classes can define instance variables, full constructors (called via `super()`), and concrete methods alongside abstract method signatures.',
            topic: 'OOP & Abstract Classes'
        },
        {
            id: 'java_08',
            skill: 'Java',
            type: 'debugging',
            question: 'How do you prevent SQL Injection when querying databases in Java?',
            options: [
                'Use `PreparedStatement` with placeholders (`?`) instead of `Statement` with string concatenation',
                'Use `Runtime.getRuntime().exec("sanitize")`',
                'Encrypt all table names before querying',
                'Cast all inputs to String'
            ],
            correctOptionIndex: 0,
            explanation: '`PreparedStatement` compiles the SQL template once and binds parameters safely, preventing user input from altering query structure.',
            topic: 'JDBC & Security'
        },
        {
            id: 'java_09',
            skill: 'Java',
            type: 'multiple-choice',
            question: 'What is the difference between checked and unchecked exceptions in Java?',
            options: [
                'Checked exceptions (subclasses of Exception excluding RuntimeException) must be declared or caught at compile time',
                'Unchecked exceptions must be handled with a throws clause',
                'Checked exceptions only occur at system boot',
                'Java eliminated checked exceptions in version 8'
            ],
            correctOptionIndex: 0,
            explanation: 'Checked exceptions are verified at compile-time by the Java compiler and require explicit handling (`try-catch` or `throws`). Unchecked exceptions inherit from `RuntimeException`.',
            topic: 'Exception Handling'
        },
        {
            id: 'java_10',
            skill: 'Java',
            type: 'practical-coding',
            question: 'What feature introduced in Java 16 provides an immutable, transparent carrier for data with concise syntax?',
            options: [
                'Records (`record Point(int x, int y) {}`)',
                'Enums',
                'Sealed Interfaces',
                'Structs'
            ],
            correctOptionIndex: 0,
            explanation: 'Java records automatically generate constructors, getters, `equals()`, `hashCode()`, and `toString()` implementations for immutable data transfer.',
            topic: 'Modern Java Features'
        }
    ],
    'Machine Learning': [
        {
            id: 'ml_01',
            skill: 'Machine Learning',
            type: 'multiple-choice',
            question: 'What does the Bias-Variance tradeoff describe in supervised machine learning?',
            options: [
                'Underfitting (high bias, overly simple models) vs Overfitting (high variance, overly sensitive to training noise)',
                'The trade-off between CPU memory and GPU core clock speed',
                'The balance between precision and batch size',
                'The difference between classification and clustering algorithms'
            ],
            correctOptionIndex: 0,
            explanation: 'High bias causes underfitting (ignoring underlying patterns); high variance causes overfitting (modeling random noise). The goal is minimizing their sum plus irreducible error.',
            topic: 'Core Theory & Evaluation'
        },
        {
            id: 'ml_02',
            skill: 'Machine Learning',
            type: 'debugging',
            question: 'Why should you fit feature scalers (like StandardScaler) ONLY on training data, and not the combined train + test dataset?',
            options: [
                'To prevent Data Leakage from test distribution into model training',
                'Because test data cannot be converted to floats',
                'StandardScaler raises a ValueError on test sets',
                'Scaling test sets reduces classification speed'
            ],
            correctOptionIndex: 0,
            explanation: 'Fitting preprocessing scalers on the test set leaks distribution statistics (mean, variance) from future unseen data into the training phase, giving falsely optimistic validation scores.',
            topic: 'Data Preprocessing & Leakage'
        },
        {
            id: 'ml_03',
            skill: 'Machine Learning',
            type: 'multiple-choice',
            question: 'In highly imbalanced classification datasets (e.g. fraud detection at 99.8% negative), why is Accuracy a misleading metric?',
            options: [
                'A trivial classifier predicting negative for all rows achieves 99.8% accuracy while failing to detect any fraud; PR-AUC or F1-Score are more informative',
                'Accuracy cannot be calculated on binary labels',
                'Accuracy values exceed 100% on imbalanced sets',
                'Gradient descent cannot optimize accuracy'
            ],
            correctOptionIndex: 0,
            explanation: 'With extreme class imbalance, a model that simply predicts the majority class gets deceptive 99%+ accuracy. Metrics like Precision-Recall AUC, Recall, and F1 evaluate true fraud capture.',
            topic: 'Metrics & Imbalance'
        },
        {
            id: 'ml_04',
            skill: 'Machine Learning',
            type: 'multiple-choice',
            question: 'What is the primary role of the Self-Attention mechanism in Transformer architectures?',
            options: [
                'It allows tokens to weigh representations of all other tokens in a sequence regardless of distance, overcoming RNN sequential bottlenecks',
                'It converts floating point matrices into integer vectors',
                'It enforces convolutional weight sharing across spatial grids',
                'It eliminates the need for matrix multiplication during inference'
            ],
            correctOptionIndex: 0,
            explanation: 'Self-attention computes dot-product query-key relationships across all sequence positions simultaneously, allowing direct modeling of long-range dependencies in parallel.',
            topic: 'Deep Learning & Transformers'
        },
        {
            id: 'ml_05',
            skill: 'Machine Learning',
            type: 'practical-coding',
            question: 'What technique adds an L2 penalty to model weights to prevent coefficients from growing excessively large?',
            options: [
                'Ridge Regularization (Weight Decay)',
                'Lasso Regularization (L1)',
                'Dropout',
                'Batch Normalization'
            ],
            correctOptionIndex: 0,
            explanation: 'L2 regularization (Ridge) adds the sum of squared weights to the loss function, shrinking weights smoothly toward zero without forcing exact sparsity.',
            topic: 'Regularization'
        },
        {
            id: 'ml_06',
            skill: 'Machine Learning',
            type: 'multiple-choice',
            question: 'What does the ROC-AUC score represent geometrically?',
            options: [
                'The Area Under the Receiver Operating Characteristic curve plotting True Positive Rate vs False Positive Rate across all classification thresholds',
                'The distance between cluster centroids in k-means',
                'The cosine angle between prompt embeddings',
                'The variance of the training loss curve'
            ],
            correctOptionIndex: 0,
            explanation: 'ROC curves plot TPR against FPR across varied decision thresholds. The AUC measures overall diagnostic ranking ability (1.0 = perfect, 0.5 = random guess).',
            topic: 'Evaluation Metrics'
        },
        {
            id: 'ml_07',
            skill: 'Machine Learning',
            type: 'debugging',
            question: 'What common phenomenon causes gradients to shrink exponentially during backpropagation in deep neural networks with sigmoid activations?',
            options: [
                'Vanishing Gradient Problem',
                'Exploding Gradient Problem',
                'Catastrophic Forgetting',
                'Curse of Dimensionality'
            ],
            correctOptionIndex: 0,
            explanation: 'Because the derivative of the sigmoid function caps at 0.25, multiplying many small derivatives through deep layers causes gradients to approach zero, stalling weight updates.',
            topic: 'Optimization & Backpropagation'
        },
        {
            id: 'ml_08',
            skill: 'Machine Learning',
            type: 'multiple-choice',
            question: 'What is the main distinction between Bagging (e.g. Random Forest) and Boosting (e.g. XGBoost, LightGBM)?',
            options: [
                'Bagging trains independent models in parallel and averages results to reduce variance; Boosting trains sequential models where each corrects errors of previous models to reduce bias',
                'Boosting only works on image data',
                'Bagging requires neural networks while boosting requires linear regression',
                'There is no algorithmic difference'
            ],
            correctOptionIndex: 0,
            explanation: 'Bagging uses bootstrap aggregation in parallel to damp variance. Boosting builds sequential trees iteratively focused on hard-to-predict residual samples.',
            topic: 'Ensemble Learning'
        },
        {
            id: 'ml_09',
            skill: 'Machine Learning',
            type: 'multiple-choice',
            question: 'What is Retrieval-Augmented Generation (RAG) used for in LLM applications?',
            options: [
                'Retrieving external factual context from a vector database and injecting it into the prompt to reduce hallucinations and ground LLM answers',
                'Re-training all model weights from scratch every 24 hours',
                'Compressing 70B parameter models down to 8-bit quantized weights',
                'Automatically translating Python code into CUDA C++'
            ],
            correctOptionIndex: 0,
            explanation: 'RAG combines dense vector retrieval (semantic search) over private knowledge bases with generative LLMs, ensuring answers cite factual company sources without requiring fine-tuning.',
            topic: 'Modern LLM & RAG Systems'
        },
        {
            id: 'ml_10',
            skill: 'Machine Learning',
            type: 'practical-coding',
            question: 'Which method reduces the dimensionality of high-dimensional data while preserving the axes of maximal variance?',
            options: [
                'Principal Component Analysis (PCA)',
                'K-Means',
                'DBSCAN',
                'Linear Discriminant Analysis'
            ],
            correctOptionIndex: 0,
            explanation: 'PCA projects data onto orthogonal eigenvectors (principal components) corresponding to the largest eigenvalues of the covariance matrix.',
            topic: 'Unsupervised Learning'
        }
    ],
    AWS: [
        {
            id: 'aws_01',
            skill: 'AWS',
            type: 'multiple-choice',
            question: 'What is the key difference between AWS IAM Roles and IAM Users?',
            options: [
                'IAM Users have long-term credentials (password, access keys); IAM Roles provide temporary security credentials assumed by trusted entities or AWS services',
                'IAM Roles are only for human administrators',
                'IAM Users cannot be assigned policies',
                'Roles can only be used within the AWS management console'
            ],
            correctOptionIndex: 0,
            explanation: 'IAM Roles do not have permanent security credentials; instead, they are assumed dynamically by EC2 instances, Lambda functions, or federated identities via STS for temporary tokens.',
            topic: 'IAM & Security'
        },
        {
            id: 'aws_02',
            skill: 'AWS',
            type: 'debugging',
            question: 'An EC2 instance in a private subnet needs to download packages from the internet without allowing inbound internet connections. What should you configure?',
            options: [
                'NAT Gateway located in a public subnet with a route in the private route table',
                'Assign a public IP address directly to the private EC2 instance',
                'Open port 80/443 in the Security Group inbound rules from 0.0.0.0/0',
                'Attach an Internet Gateway directly to the private subnet'
            ],
            correctOptionIndex: 0,
            explanation: 'A NAT (Network Address Translation) Gateway resides in a public subnet and enables outbound IPv4 traffic to the internet while preventing external hosts from initiating connections.',
            topic: 'VPC & Networking'
        },
        {
            id: 'aws_03',
            skill: 'AWS',
            type: 'multiple-choice',
            question: 'Which AWS service provides serverless event-driven compute that scales automatically from zero to thousands of concurrent executions?',
            options: [
                'AWS Lambda',
                'Amazon EC2',
                'Amazon ECS on EC2',
                'AWS Elastic Beanstalk'
            ],
            correctOptionIndex: 0,
            explanation: 'AWS Lambda runs code in response to events and automatically manages the underlying compute resources without provisioned server overhead.',
            topic: 'Serverless Compute'
        },
        {
            id: 'aws_04',
            skill: 'AWS',
            type: 'multiple-choice',
            question: 'What S3 storage class is best for data accessed less than once a month, requiring millisecond retrieval times at lower storage cost?',
            options: [
                'S3 Standard-Infrequent Access (S3 Standard-IA)',
                'S3 Glacier Flexible Retrieval',
                'S3 Glacier Deep Archive',
                'S3 One Zone'
            ],
            correctOptionIndex: 0,
            explanation: 'S3 Standard-IA is designed for data that is accessed less frequently, but requires rapid millisecond access when needed.',
            topic: 'Storage & S3'
        },
        {
            id: 'aws_05',
            skill: 'AWS',
            type: 'practical-coding',
            question: 'Which service enables decoupled, asynchronous communication between microservices using managed message queues with guaranteed order in FIFO mode?',
            options: [
                'Amazon SQS',
                'Amazon SNS',
                'Amazon Kinesis Data Streams',
                'Amazon EventBridge'
            ],
            correctOptionIndex: 0,
            explanation: 'Amazon Simple Queue Service (SQS) offers standard and FIFO queues to decouple microservices and distributed software systems.',
            topic: 'Messaging & Queues'
        },
        {
            id: 'aws_06',
            skill: 'AWS',
            type: 'multiple-choice',
            question: 'What is the primary difference between AWS Security Groups and Network Access Control Lists (NACLs)?',
            options: [
                'Security Groups are stateful and operate at the instance/ENI level; NACLs are stateless and operate at the subnet boundary level',
                'Security Groups are stateless while NACLs are stateful',
                'NACLs cannot block specific IP addresses',
                'Security Groups operate at the VPC peering level only'
            ],
            correctOptionIndex: 0,
            explanation: 'Security Groups are stateful (inbound traffic allowed implies outbound response is automatically permitted) at the ENI level. NACLs evaluate rules in numerical order statelessly at the subnet boundary.',
            topic: 'VPC Security'
        },
        {
            id: 'aws_07',
            skill: 'AWS',
            type: 'multiple-choice',
            question: 'Which managed AWS database engine provides a multi-model NoSQL database with single-digit millisecond latency at any scale?',
            options: [
                'Amazon DynamoDB',
                'Amazon RDS PostgreSQL',
                'Amazon Aurora Serverless',
                'Amazon DocumentDB'
            ],
            correctOptionIndex: 0,
            explanation: 'Amazon DynamoDB is a fully managed, serverless key-value and document database delivering consistent single-digit millisecond performance with automatic partitioning.',
            topic: 'Databases & NoSQL'
        },
        {
            id: 'aws_08',
            skill: 'AWS',
            type: 'debugging',
            question: 'What AWS service should be used to securely manage, rotate, and retrieve database passwords and API keys without hardcoding them in code?',
            options: [
                'AWS Secrets Manager',
                'AWS KMS alone',
                'Amazon S3 metadata',
                'AWS CloudTrail'
            ],
            correctOptionIndex: 0,
            explanation: 'AWS Secrets Manager enables you to rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.',
            topic: 'Security & Secrets'
        },
        {
            id: 'aws_09',
            skill: 'AWS',
            type: 'multiple-choice',
            question: 'What is the role of an AWS Application Load Balancer (ALB) compared to a Network Load Balancer (NLB)?',
            options: [
                'ALB operates at Layer 7 (HTTP/HTTPS) and supports path-based and host-based routing; NLB operates at Layer 4 (TCP/UDP) for ultra-low latency',
                'ALB only supports UDP traffic',
                'NLB can inspect HTTP headers and cookies',
                'ALB cannot distribute traffic across Availability Zones'
            ],
            correctOptionIndex: 0,
            explanation: 'ALBs evaluate Layer 7 HTTP/HTTPS headers, routing rules, and path prefixes, while NLBs operate at Layer 4 handling millions of requests per second at ultra-low latency.',
            topic: 'Networking & Elastic Load Balancing'
        },
        {
            id: 'aws_10',
            skill: 'AWS',
            type: 'practical-coding',
            question: 'Which Infrastructure as Code (IaC) service is native to AWS and defines cloud resources using JSON or YAML templates?',
            options: [
                'AWS CloudFormation',
                'AWS CodeDeploy',
                'AWS OpsWorks',
                'AWS CodePipeline'
            ],
            correctOptionIndex: 0,
            explanation: 'AWS CloudFormation lets you model, provision, and manage AWS and third-party resources by treating infrastructure as code.',
            topic: 'DevOps & IaC'
        }
    ],
    Git: [
        {
            id: 'git_01',
            skill: 'Git',
            type: 'multiple-choice',
            question: 'What is the core difference between `git merge` and `git rebase`?',
            options: [
                '`git merge` creates a new merge commit combining history branches; `git rebase` reapplies commits on top of another base tip for a linear history',
                '`git rebase` deletes all remote branches',
                '`git merge` can only be performed by repository owners',
                'There is no difference; they are aliases'
            ],
            correctOptionIndex: 0,
            explanation: 'Merge retains chronological branch history with explicit merge commits. Rebase rewires the commit ancestry, moving the entire feature branch to begin on the tip of the target branch.',
            topic: 'Branching & History'
        },
        {
            id: 'git_02',
            skill: 'Git',
            type: 'debugging',
            question: 'You accidentally ran `git reset --hard HEAD~1` and lost an unpushed commit. How do you recover it?',
            options: [
                'Use `git reflog` to locate the commit hash, then run `git checkout` or `git reset` to that SHA',
                'The commit is permanently destroyed and cannot be recovered',
                'Run `git clean -fd`',
                'Delete the `.git` folder and re-clone'
            ],
            correctOptionIndex: 0,
            explanation: '`git reflog` records all updates to the tips of branches and HEAD in the local repository. Even orphaned commits remain in Git’s object database until pruned by garbage collection.',
            topic: 'Recovery & Reflog'
        },
        {
            id: 'git_03',
            skill: 'Git',
            type: 'multiple-choice',
            question: 'What is the difference between `git fetch` and `git pull`?',
            options: [
                '`git fetch` downloads remote objects and refs without modifying your local working branch; `git pull` does `git fetch` followed by `git merge`',
                '`git pull` downloads without merging; `git fetch` overwrites local files',
                '`git fetch` only checks commit counts',
                '`git pull` requires root administrator privileges'
            ],
            correctOptionIndex: 0,
            explanation: '`git fetch` updates remote-tracking branches (`origin/main`) safely. `git pull` fetches the remote changes and immediately attempts to merge them into your checked-out branch.',
            topic: 'Remotes & Synchronization'
        },
        {
            id: 'git_04',
            skill: 'Git',
            type: 'code-output',
            question: 'What command temporarily shelves uncommitted local changes so you can switch branches cleanly?',
            options: [
                'git stash',
                'git pause',
                'git shelf',
                'git freeze'
            ],
            correctOptionIndex: 0,
            explanation: '`git stash` records the current state of the working directory and index into a stack, reverting the working directory to match the HEAD commit.',
            topic: 'Stashing'
        },
        {
            id: 'git_05',
            skill: 'Git',
            type: 'practical-coding',
            question: 'How do you selectively apply a specific single commit from one branch onto your current active branch?',
            options: [
                'git cherry-pick <commit-sha>',
                'git extract <commit-sha>',
                'git patch-apply <commit-sha>',
                'git adopt <commit-sha>'
            ],
            correctOptionIndex: 0,
            explanation: '`git cherry-pick` applies the changes introduced by some existing commits onto the current active branch.',
            topic: 'Cherry-picking'
        },
        {
            id: 'git_06',
            skill: 'Git',
            type: 'multiple-choice',
            question: 'What does the `.gitignore` file do?',
            options: [
                'Specifies intentionally untracked files and patterns that Git should ignore',
                'Deletes files from disk when committing',
                'Encrypts sensitive passwords in repository history',
                'Limits repository size to 100MB'
            ],
            correctOptionIndex: 0,
            explanation: 'A `.gitignore` file specifies patterns matching files (like `node_modules`, `.env`, build artifacts) that should not be tracked by Git.',
            topic: 'Configuration & Ignore'
        },
        {
            id: 'git_07',
            skill: 'Git',
            type: 'debugging',
            question: 'Why is it dangerous to run `git push --force` on shared public branches like `main`?',
            options: [
                'It overwrites remote history, causing other developers’ local repositories to diverge and potentially destroying collaborators’ commits',
                'It terminates the remote GitHub server process',
                'It converts private repositories into public repositories',
                'Git will permanently lock the branch against future commits'
            ],
            correctOptionIndex: 0,
            explanation: 'Forced push replaces the remote branch pointer with your local history, overwriting any commits pushed by others. `git push --force-with-lease` is safer.',
            topic: 'Team Collaboration & Best Practices'
        },
        {
            id: 'git_08',
            skill: 'Git',
            type: 'multiple-choice',
            question: 'What is a detached HEAD state in Git?',
            options: [
                'HEAD points directly to a specific commit rather than to a named branch pointer',
                'The repository is corrupt and cannot record new commits',
                'The local master branch was deleted on the remote',
                'Git is running in headless daemon mode'
            ],
            correctOptionIndex: 0,
            explanation: 'In detached HEAD state, HEAD points to a commit hash directly. New commits made here will become orphaned once you switch to another branch unless tagged or branched.',
            topic: 'HEAD & References'
        },
        {
            id: 'git_09',
            skill: 'Git',
            type: 'practical-coding',
            question: 'Which tool allows you to perform an automated binary search through commit history to identify the commit that introduced a bug?',
            options: [
                'git bisect',
                'git debug',
                'git trace',
                'git grep-commit'
            ],
            correctOptionIndex: 0,
            explanation: '`git bisect` uses a binary search algorithm to test commits between a known "good" state and a "bad" state, isolating the exact breaking commit quickly.',
            topic: 'Bisect & Debugging'
        },
        {
            id: 'git_10',
            skill: 'Git',
            type: 'code-output',
            question: 'What does `git commit --amend` accomplish?',
            options: [
                'Combines staged changes with the previous commit, modifying its content and/or commit message',
                'Reverts the last commit completely',
                'Pushes commits directly to production',
                'Creates an annotated tag'
            ],
            correctOptionIndex: 0,
            explanation: '`git commit --amend` replaces the tip of the current branch with a new commit containing staged adjustments and updated commit messages.',
            topic: 'Modifying History'
        }
    ],
    'C++': [
        {
            id: 'cpp_01',
            skill: 'C++',
            type: 'multiple-choice',
            question: 'What is RAII (Resource Acquisition Is Initialization) in modern C++?',
            options: [
                'A design pattern where resource lifecycle is bound to object lifetime; constructors acquire resources and destructors release them deterministically',
                'A compiler flag that optimizes recursive functions',
                'An external garbage collection library for C++',
                'A multithreading semaphore system'
            ],
            correctOptionIndex: 0,
            explanation: 'RAII guarantees that resources (heap memory, file handles, mutex locks) are tied to stack objects and automatically released in destructors when leaving scope.',
            topic: 'Resource Management & RAII'
        },
        {
            id: 'cpp_02',
            skill: 'C++',
            type: 'debugging',
            question: 'Why should you prefer `std::unique_ptr` over raw pointers for dynamic heap allocations?',
            options: [
                'It expresses exclusive ownership and automatically frees memory via `delete` upon destruction, eliminating memory leaks and double-free bugs',
                '`std::unique_ptr` compiles to assembly with zero overhead and is faster than raw arrays',
                'Raw pointers are deprecated in C++20',
                '`unique_ptr` automatically parallelizes array lookups'
            ],
            correctOptionIndex: 0,
            explanation: '`std::unique_ptr` is a smart pointer that owns and manages another object through a pointer and disposes of that object when the unique_ptr goes out of scope.',
            topic: 'Smart Pointers & Memory'
        },
        {
            id: 'cpp_03',
            skill: 'C++',
            type: 'multiple-choice',
            question: 'What does Move Semantics (`std::move`, rvalue references `T&&`) achieve in C++11 and above?',
            options: [
                'Allows transferring ownership of resources from temporary objects without making expensive deep copies',
                'Moves memory from RAM to SSD cache',
                'Enables running C++ code on multiple CPU architectures',
                'Compiles code during execution instead of ahead-of-time'
            ],
            correctOptionIndex: 0,
            explanation: 'Move semantics allows objects to steal the internal heap buffers of expiring temporary rvalues rather than allocating and copying memory byte-for-byte.',
            topic: 'Move Semantics'
        },
        {
            id: 'cpp_04',
            skill: 'C++',
            type: 'code-output',
            question: 'What happens if a base class destructor is NOT declared `virtual` when deleting a derived object via a base pointer?',
            options: [
                'Undefined Behavior: the derived class destructor will not be called, resulting in resource leaks',
                'Compilation error: C++ forbids non-virtual base destructors',
                'The derived destructor runs twice',
                'Memory is freed correctly regardless'
            ],
            correctOptionIndex: 0,
            explanation: 'Deleting a derived class through a pointer to base with a non-virtual destructor results in undefined behavior per the C++ standard; derived cleanup code never executes.',
            topic: 'Polymorphism & Destructors'
        },
        {
            id: 'cpp_05',
            skill: 'C++',
            type: 'practical-coding',
            question: 'What keyword indicates that a function can be evaluated at compile time if provided with constant expressions?',
            options: [
                'constexpr',
                'const',
                'inline',
                'static'
            ],
            correctOptionIndex: 0,
            explanation: '`constexpr` specifies that the value of an object or return value of a function can be computed at compile time.',
            topic: 'Compile-Time Computation'
        },
        {
            id: 'cpp_06',
            skill: 'C++',
            type: 'multiple-choice',
            question: 'What is the Rule of 5 in modern C++?',
            options: [
                'If a class defines any of Destructor, Copy Constructor, Copy Assignment, Move Constructor, or Move Assignment, it should likely define or explicitly delete all 5',
                'A class cannot inherit from more than 5 base classes',
                'Functions should not have more than 5 parameters',
                'Code must be checked by 5 different compilers'
            ],
            correctOptionIndex: 0,
            explanation: 'The Rule of 5 ensures safe resource management: custom resource acquisition requires managing copy, move, and destruction semantics consistently.',
            topic: 'Class Design & Rule of 5'
        },
        {
            id: 'cpp_07',
            skill: 'C++',
            type: 'debugging',
            question: 'What is the danger of returning a reference to a local stack variable from a function?',
            options: [
                'Dangling Reference: the local variable is destroyed when the function returns, leaving the reference pointing to invalid memory',
                'Memory leak because stack memory cannot be reclaimed',
                'Compiler will automatically promote the variable to global scope',
                'It causes integer overflow'
            ],
            correctOptionIndex: 0,
            explanation: 'Local stack variables are popped from the stack when a function finishes; returning a reference or pointer to them leads to undefined behavior upon dereference.',
            topic: 'References & Lifetimes'
        },
        {
            id: 'cpp_08',
            skill: 'C++',
            type: 'multiple-choice',
            question: 'What is the difference between `std::vector` and `std::array` in the C++ Standard Template Library?',
            options: [
                '`std::vector` is a dynamically sized container allocated on the heap; `std::array` has fixed size known at compile-time and lives on the stack',
                '`std::vector` cannot store objects with constructors',
                '`std::array` is dynamically resizable at runtime',
                '`std::vector` uses linked lists internally'
            ],
            correctOptionIndex: 0,
            explanation: '`std::array<T, N>` is a wrapper around fixed-size C-style arrays with stack storage. `std::vector<T>` manages a dynamic contiguous buffer on the heap.',
            topic: 'STL Containers'
        },
        {
            id: 'cpp_09',
            skill: 'C++',
            type: 'practical-coding',
            question: 'Which lock guard in C++11 locks an associated mutex upon construction and unlocks it automatically upon destruction?',
            options: [
                'std::lock_guard<std::mutex>',
                'std::atomic_thread',
                'std::mutex_holder',
                'std::semaphore'
            ],
            correctOptionIndex: 0,
            explanation: '`std::lock_guard` is an RAII wrapper for mutexes that acquires the lock in its constructor and guarantees release when leaving the enclosing block.',
            topic: 'Threading & Concurrency'
        },
        {
            id: 'cpp_10',
            skill: 'C++',
            type: 'code-output',
            question: 'What is the time complexity of lookup in `std::unordered_map` vs `std::map` (average case)?',
            options: [
                '`std::unordered_map`: O(1) via hash table; `std::map`: O(log n) via Red-Black Tree',
                'Both are O(1)',
                '`std::unordered_map`: O(n); `std::map`: O(1)',
                '`std::unordered_map`: O(log n); `std::map`: O(1)'
            ],
            correctOptionIndex: 0,
            explanation: '`std::map` is ordered and implemented via self-balancing binary search trees (O(log n)). `std::unordered_map` uses hash buckets (average O(1)).',
            topic: 'Data Structures & STL'
        }
    ],
    'C#': [
        {
            id: 'cs_01',
            skill: 'C#',
            type: 'multiple-choice',
            question: 'What is the primary difference between a `class` and a `struct` in C#?',
            options: [
                'A `class` is a reference type allocated on the managed heap; a `struct` is a value type typically allocated inline on the stack',
                'A `struct` supports full inheritance while a `class` does not',
                'A `class` cannot implement interfaces',
                'A `struct` has built-in garbage collection separate from the CLR'
            ],
            correctOptionIndex: 0,
            explanation: 'Classes are reference types (passed by reference, allocated on heap). Structs are value types (passed by value copy, allocated inline).',
            topic: 'Type System'
        },
        {
            id: 'cs_02',
            skill: 'C#',
            type: 'code-output',
            question: 'How does the `async` / `await` pattern work under the hood in C#?',
            options: [
                'The Roslyn compiler generates a state machine implementing `IAsyncStateMachine` to preserve local execution context across awaits without blocking threads',
                'It starts a new operating system process for every await',
                'It pauses the entire CLR garbage collector',
                'It is merely syntactic sugar for `Thread.Sleep`'
            ],
            correctOptionIndex: 0,
            explanation: 'The C# compiler lowers async methods into state machine structs that register completion continuations with awaitable tasks, freeing worker threads while waiting for I/O.',
            topic: 'Asynchronous Programming'
        },
        {
            id: 'cs_03',
            skill: 'C#',
            type: 'debugging',
            question: 'What causes a memory leak in a managed C# application where garbage collection is active?',
            options: [
                'Long-lived objects holding event subscriptions or static references to short-lived objects, preventing them from being collected',
                'Using `foreach` loops on arrays',
                'Declaring variables inside loops',
                'Compiling in Release mode'
            ],
            correctOptionIndex: 0,
            explanation: 'The GC traces reachable roots. If an event publisher or static collection maintains a reference to a subscriber, the subscriber remains root-reachable and cannot be collected.',
            topic: 'Garbage Collection & Leaks'
        },
        {
            id: 'cs_04',
            skill: 'C#',
            type: 'multiple-choice',
            question: 'What is the purpose of the `using` statement (or `using` declaration) in C#?',
            options: [
                'Guarantees that `Dispose()` is called on an `IDisposable` object when execution exits the scope',
                'Imports external C++ DLL libraries',
                'Allocates memory directly on the GPU',
                'Disables null checking for the block'
            ],
            correctOptionIndex: 0,
            explanation: '`using` translates into a `try { ... } finally { obj.Dispose(); }` construct, guaranteeing prompt release of unmanaged resources (database connections, file streams).',
            topic: 'Resource Management & IDisposable'
        },
        {
            id: 'cs_05',
            skill: 'C#',
            type: 'practical-coding',
            question: 'Which keyword in C# prevents a class from being inherited by any derived class?',
            options: [
                'sealed',
                'final',
                'static',
                'readonly'
            ],
            correctOptionIndex: 0,
            explanation: 'When applied to a class, the `sealed` modifier prevents other classes from inheriting from it.',
            topic: 'OOP & Modifiers'
        },
        {
            id: 'cs_06',
            skill: 'C#',
            type: 'multiple-choice',
            question: 'What is the benefit of LINQ deferred execution?',
            options: [
                'The query is not executed when defined; it runs only when the data is enumerated (e.g. via `foreach`, `.ToList()`, or `.Count()`)',
                'It executes queries in the background on startup',
                'It caches all results permanently in memory',
                'It compiles C# into JavaScript at runtime'
            ],
            correctOptionIndex: 0,
            explanation: 'Deferred execution means the expression evaluation is delayed until its realized value is actually required, allowing query chaining and avoiding unnecessary data fetching.',
            topic: 'LINQ & Generics'
        },
        {
            id: 'cs_07',
            skill: 'C#',
            type: 'code-output',
            question: 'What is the null-coalescing assignment operator in C#?',
            options: [
                '??=',
                '?=',
                '?:',
                '||='
            ],
            correctOptionIndex: 0,
            explanation: '`variable ??= expression;` assigns the value of expression to variable only if variable is currently null.',
            topic: 'Operators & Nullability'
        },
        {
            id: 'cs_08',
            skill: 'C#',
            type: 'debugging',
            question: 'In Entity Framework Core, what problem does `.AsNoTracking()` solve for read-only queries?',
            options: [
                'Improves query performance and reduces memory usage by bypassing change tracker snapshot tracking',
                'Prevents database deadlocks during migrations',
                'Disables SQL generation',
                'Encrypts data transferred over the wire'
            ],
            correctOptionIndex: 0,
            explanation: '`AsNoTracking()` informs EF Core not to track entities in the `DbContext` snapshot memory, boosting performance and saving significant memory on read queries.',
            topic: 'EF Core & Databases'
        },
        {
            id: 'cs_09',
            skill: 'C#',
            type: 'multiple-choice',
            question: 'What is dependency injection lifetime `Scoped` in ASP.NET Core?',
            options: [
                'A single instance created once per HTTP request and shared across all components handling that request',
                'A single instance created when the application starts and shared globally',
                'A new instance created every time it is requested from the service container',
                'An instance tied to client browser localStorage'
            ],
            correctOptionIndex: 0,
            explanation: '`Scoped` lifetime creates one instance per client request (connection). `Singleton` is per application lifetime, and `Transient` creates a new instance on every injection.',
            topic: 'ASP.NET Core & DI'
        },
        {
            id: 'cs_10',
            skill: 'C#',
            type: 'practical-coding',
            question: 'What feature introduced in C# 9 allows declaring concise immutable data objects with value-based equality semantics?',
            options: [
                'record (e.g. `public record User(string Name);`)',
                'struct',
                'enum',
                'delegate'
            ],
            correctOptionIndex: 0,
            explanation: 'C# records provide built-in value equality, non-destructive mutation (`with` expressions), and formatted display output.',
            topic: 'Modern C# Features'
        }
    ],
    'Data Analysis': [
        {
            id: 'da_01',
            skill: 'Data Analysis',
            type: 'multiple-choice',
            question: 'In Pandas, what is the key difference between `.loc[]` and `.iloc[]`?',
            options: [
                '`.loc[]` is label-based indexing; `.iloc[]` is integer position-based indexing',
                '`.iloc[]` can only select single cells',
                '`.loc[]` works only on string data',
                'They are identical and interchangeable'
            ],
            correctOptionIndex: 0,
            explanation: '`.loc` indexes using label names of rows and columns. `.iloc` indexes using zero-based integer positions.',
            topic: 'Pandas & Manipulation'
        },
        {
            id: 'da_02',
            skill: 'Data Analysis',
            type: 'debugging',
            question: 'What is the primary indicator of multicollinearity in a multiple linear regression model?',
            options: [
                'Variance Inflation Factor (VIF) > 5 or 10 among independent features',
                'P-values less than 0.05',
                'R-squared value equal to zero',
                'Residuals showing normal distribution'
            ],
            correctOptionIndex: 0,
            explanation: 'Multicollinearity occurs when predictor variables are highly correlated with each other, inflating the variance of regression coefficients; VIF measures this inflation.',
            topic: 'Statistics & Regression'
        },
        {
            id: 'da_03',
            skill: 'Data Analysis',
            type: 'multiple-choice',
            question: 'What does Simpson’s Paradox describe in statistical analysis?',
            options: [
                'A trend appearing in several distinct groups reverses or disappears when the groups are combined',
                'Sample means always diverge from population means',
                'Correlation implies causation in large datasets',
                'Standard deviation increases as sample size grows'
            ],
            correctOptionIndex: 0,
            explanation: 'Simpson’s Paradox occurs when aggregate data masks confounding variables, causing a trend visible in subpopulations to invert when aggregated.',
            topic: 'Statistical Fallacies'
        },
        {
            id: 'da_04',
            skill: 'Data Analysis',
            type: 'code-output',
            question: 'What is the effect of applying a logarithmic transformation `np.log1p(df["revenue"])` on right-skewed revenue data?',
            options: [
                'It compresses extreme large values, transforming the distribution closer to normal and stabilizing variance',
                'It converts revenue into negative values',
                'It deletes missing zero values',
                'It doubles the mean value'
            ],
            correctOptionIndex: 0,
            explanation: 'Log transforms compress the long right tail of power-law or exponential distributions (income, revenue, page views), stabilizing variance for linear modeling.',
            topic: 'Feature Engineering & Transforms'
        },
        {
            id: 'da_05',
            skill: 'Data Analysis',
            type: 'practical-coding',
            question: 'Which chart type is best suited for identifying outliers and understanding the 5-number summary (Min, Q1, Median, Q3, Max) of a distribution?',
            options: [
                'Box Plot (Box-and-Whisker)',
                'Pie Chart',
                'Scatter Plot',
                'Stacked Bar Chart'
            ],
            correctOptionIndex: 0,
            explanation: 'Box plots display the median, interquartile range (IQR), and explicitly mark points beyond 1.5 * IQR as outliers.',
            topic: 'Data Visualization'
        },
        {
            id: 'da_06',
            skill: 'Data Analysis',
            type: 'multiple-choice',
            question: 'What is an A/B test p-value of 0.03 commonly interpreted as under a 5% significance level (alpha = 0.05)?',
            options: [
                'Statistically significant: we reject the null hypothesis that there is no true difference between variant A and B',
                'The null hypothesis is 97% likely to be true',
                'There is a 3% probability that variant B is better',
                'The sample size was too small'
            ],
            correctOptionIndex: 0,
            explanation: 'A p-value below alpha indicates that the observed effect is unlikely to have occurred by random sampling noise under the null hypothesis, warranting rejection of H0.',
            topic: 'Hypothesis Testing'
        },
        {
            id: 'da_07',
            skill: 'Data Analysis',
            type: 'debugging',
            question: 'What is the risk of using mean imputation for missing values in numerical columns with extreme outliers?',
            options: [
                'Outliers distort the calculated mean, shifting the imputation value away from true central tendency and artificially deflating sample variance',
                'Mean imputation is prohibited in Python',
                'It doubles the row count of the DataFrame',
                'It causes categorical columns to fail'
            ],
            correctOptionIndex: 0,
            explanation: 'Outliers skew the mean. Furthermore, filling missing entries with a single constant reduces natural variance and artificially spikes the central distribution; median imputation or model-based imputation is preferred.',
            topic: 'Missing Data Handling'
        },
        {
            id: 'da_08',
            skill: 'Data Analysis',
            type: 'multiple-choice',
            question: 'What is the difference between Pearson correlation and Spearman rank correlation?',
            options: [
                'Pearson measures linear relationships on continuous variables; Spearman assesses monotonic relationships using ranked values (robust to outliers and non-linear monotonic curves)',
                'Spearman only works on categorical text',
                'Pearson values range from 0 to 100 while Spearman is -1 to 1',
                'There is no difference in mathematical result'
            ],
            correctOptionIndex: 0,
            explanation: 'Pearson evaluates straight-line linearity. Spearman evaluates whether variables increase or decrease together regardless of linearity by ranking observations.',
            topic: 'Correlation & Statistics'
        },
        {
            id: 'da_09',
            skill: 'Data Analysis',
            type: 'practical-coding',
            question: 'In SQL or Pandas, what operation transforms rows into columns to summarize multi-dimensional cross-tabulations?',
            options: [
                'Pivot / Pivot Table',
                'Union All',
                'Inner Join',
                'Drop Duplicates'
            ],
            correctOptionIndex: 0,
            explanation: 'Pivoting reshapes data from long format to wide format, summarizing aggregated values across specified row and column indexes.',
            topic: 'Data Reshaping'
        },
        {
            id: 'da_10',
            skill: 'Data Analysis',
            type: 'multiple-choice',
            question: 'What does the Central Limit Theorem state?',
            options: [
                'The distribution of sample means approximates a normal distribution as the sample size becomes sufficiently large, regardless of the underlying population distribution shape',
                'All data in nature is normally distributed',
                'Sample variance always equals population variance',
                'Machine learning models converge in O(1) time'
            ],
            correctOptionIndex: 0,
            explanation: 'The CLT is a foundational theorem: regardless of the population distribution, the distribution of independent sample means will approach a normal distribution as n increases (typically n >= 30).',
            topic: 'Probability & CLT'
        }
    ]
};
// Fill in remaining skills with high-quality questions for full coverage
function getQuestionsForSkill(skill) {
    if (SKILL_ASSESSMENT_QUESTIONS[skill]) {
        return SKILL_ASSESSMENT_QUESTIONS[skill];
    }
    // Fallback high quality template for any remaining skill
    return [
        {
            id: `${skill.toLowerCase()}_01`,
            skill,
            type: 'multiple-choice',
            question: `What is the primary architectural principle of ${skill}?`,
            options: [
                `High cohesion, modular component abstractions, and decoupled state management in ${skill}`,
                'Monolithic single-threaded blocking execution',
                'Hardcoded configurations stored in operating system registry',
                'Manual memory pointer arithmetic without bounds checking'
            ],
            correctOptionIndex: 0,
            explanation: `Modern production standards for ${skill} mandate modularity, clear separation of concerns, and robust error handling.`,
            topic: 'Architecture & Foundations'
        },
        {
            id: `${skill.toLowerCase()}_02`,
            skill,
            type: 'code-output',
            question: `How are exceptions and error conditions cleanly handled in ${skill}?`,
            options: [
                'Structured exception handling with typed catches and guaranteed resource cleanup',
                'Silent exit without logging errors',
                'Restarting the entire operating system',
                'Converting all errors into string alerts'
            ],
            correctOptionIndex: 0,
            explanation: 'Typed exception handling ensures unexpected states can be captured, audited, and gracefully degraded.',
            topic: 'Error Handling'
        },
        {
            id: `${skill.toLowerCase()}_03`,
            skill,
            type: 'debugging',
            question: `What is a common performance bottleneck in production ${skill} applications?`,
            options: [
                'Unnecessary redundant allocations, blocking I/O on the main thread, or lack of caching',
                'Having too many comments in code files',
                'Using modern version control systems',
                'Running on 64-bit processors'
            ],
            correctOptionIndex: 0,
            explanation: 'Unindexed lookups and blocking synchronous operations degrade throughput and latency.',
            topic: 'Performance & Optimization'
        },
        {
            id: `${skill.toLowerCase()}_04`,
            skill,
            type: 'multiple-choice',
            question: `What security practice is mandatory when handling untrusted user input in ${skill}?`,
            options: [
                'Strict schema validation, parameterized queries, and output encoding',
                'Assuming internal networks are always completely safe',
                'Disabling HTTPS encryption to improve latency',
                'Storing credentials in client-side code'
            ],
            correctOptionIndex: 0,
            explanation: 'Input validation and defense-in-depth prevent injection, XSS, and authorization bypasses.',
            topic: 'Security & Best Practices'
        },
        {
            id: `${skill.toLowerCase()}_05`,
            skill,
            type: 'practical-coding',
            question: `Which testing methodology verifies that individual units in ${skill} function as expected in isolation?`,
            options: [
                'Unit Testing with automated mocks/stubs',
                'Manual QA clicking',
                'Deploying directly to production',
                'Code minification'
            ],
            correctOptionIndex: 0,
            explanation: 'Automated unit tests with mocks ensure deterministic, fast verification of discrete functions.',
            topic: 'Testing & Quality Assurance'
        },
        {
            id: `${skill.toLowerCase()}_06`,
            skill,
            type: 'multiple-choice',
            question: `How does ${skill} manage concurrency and asynchronous tasks efficiently?`,
            options: [
                'Event-driven loops, worker thread pools, or async/await concurrency primitives',
                'Spawning 10,000 OS processes for every single HTTP request',
                'Freezing the CPU until background tasks return',
                'Ignoring concurrency altogether'
            ],
            correctOptionIndex: 0,
            explanation: 'Concurrency primitives coordinate non-blocking operations without exhausting system threads.',
            topic: 'Concurrency & Scaling'
        },
        {
            id: `${skill.toLowerCase()}_07`,
            skill,
            type: 'debugging',
            question: `What causes race conditions in multithreaded ${skill} code?`,
            options: [
                'Multiple threads accessing and mutating shared state concurrently without synchronization',
                'Compiling with optimization flags',
                'Using UTF-8 character encoding',
                'Running on SSD drives'
            ],
            correctOptionIndex: 0,
            explanation: 'Race conditions emerge when shared mutable data is accessed concurrently without locks, atomic primitives, or channels.',
            topic: 'Thread Safety'
        },
        {
            id: `${skill.toLowerCase()}_08`,
            skill,
            type: 'multiple-choice',
            question: `What is the role of CI/CD pipelines for ${skill} projects?`,
            options: [
                'Automating linting, security scans, unit tests, and production artifact deployment',
                'Manually copying files via FTP at midnight',
                'Generating user passwords automatically',
                'Managing local desktop wallpapers'
            ],
            correctOptionIndex: 0,
            explanation: 'Continuous Integration / Continuous Deployment enforces reproducible quality and automated release gates.',
            topic: 'DevOps & Tooling'
        },
        {
            id: `${skill.toLowerCase()}_09`,
            skill,
            type: 'practical-coding',
            question: `What is the recommended approach for versioning production APIs and schemas in ${skill}?`,
            options: [
                'Semantic Versioning (SemVer) with explicit deprecation cycles and backward compatibility',
                'Overwriting API routes without notice',
                'Random string versioning',
                'Changing response types arbitrarily'
            ],
            correctOptionIndex: 0,
            explanation: 'SemVer (Major.Minor.Patch) and backward-compatible additive changes protect downstream consumers.',
            topic: 'API Design & Versioning'
        },
        {
            id: `${skill.toLowerCase()}_10`,
            skill,
            type: 'multiple-choice',
            question: `How does ${skill} ensure type safety or runtime validation?`,
            options: [
                'Static type checking or runtime assertion schemas to catch interface mismatches early',
                'Relying entirely on runtime user complaints',
                'Converting all variables to generic untyped pointers',
                'Disabling compiler warnings'
            ],
            correctOptionIndex: 0,
            explanation: 'Type safety and runtime schema validation eliminate whole classes of common interface defects before production deployment.',
            topic: 'Types & Reliability'
        }
    ];
}
const SAMPLE_JOBS = [
    {
        id: 'job_01',
        title: 'Senior Full Stack & AI Engineer',
        company: 'Anthropic Labs',
        location: 'San Francisco, CA',
        workplaceType: 'Hybrid',
        jobType: 'Full-time',
        experienceLevel: 'Senior',
        salaryRange: '$190,000 - $245,000 + Equity',
        postedDate: '2 days ago',
        description: 'We are looking for a Senior Full Stack & AI Engineer to scale our frontier model evaluation platforms, enterprise RAG search tools, and high-performance interactive interfaces.',
        requiredSkills: [
            'Python',
            'React',
            'TypeScript',
            'SQL',
            'Machine Learning',
            'AWS'
        ],
        preferredSkills: [
            'Docker',
            'Kubernetes',
            'FastAPI',
            'Vector Databases'
        ],
        responsibilities: [
            'Design, build, and deploy high-throughput RAG search platforms and generative evaluation tools.',
            'Develop reactive Next.js / React interfaces with fluid micro-interactions and sub-100ms response times.',
            'Collaborate with AI researchers to ship production APIs and model serving infrastructure.'
        ],
        educationRequirement: 'B.S. or M.S. in Computer Science or equivalent practical experience',
        experienceYears: '5+ years',
        applyUrl: 'https://anthropic.com/careers'
    },
    {
        id: 'job_02',
        title: 'Staff Platform Engineer',
        company: 'Stripe',
        location: 'Remote (US / Canada)',
        workplaceType: 'Remote',
        jobType: 'Full-time',
        experienceLevel: 'Lead',
        salaryRange: '$220,000 - $280,000',
        postedDate: 'Just now',
        description: 'Join Stripe’s Core Infrastructure group to build ultra-reliable global payment routing systems and containerized microservice control planes handling billions in daily volume.',
        requiredSkills: [
            'Python',
            'AWS',
            'Docker',
            'Kubernetes',
            'SQL',
            'Git'
        ],
        preferredSkills: [
            'Go',
            'Terraform',
            'Datadog',
            'Kafka'
        ],
        responsibilities: [
            'Architect distributed infrastructure with 99.999% SLA availability across multi-region AWS deployments.',
            'Lead cross-organizational architectural reviews and disaster recovery drills.',
            'Optimize database read/write throughput and cache topologies under extreme global peak traffic.'
        ],
        educationRequirement: 'B.S. in Computer Science or equivalent',
        experienceYears: '7+ years',
        applyUrl: 'https://stripe.com/jobs'
    },
    {
        id: 'job_03',
        title: 'Machine Learning Engineer',
        company: 'Scale AI',
        location: 'San Francisco, CA',
        workplaceType: 'On-site',
        jobType: 'Full-time',
        experienceLevel: 'Mid',
        salaryRange: '$170,000 - $215,000',
        postedDate: '3 days ago',
        description: 'Scale AI is building the data foundry for artificial intelligence. You will train, fine-tune, and evaluate deep learning architectures and large language model alignment pipelines.',
        requiredSkills: [
            'Python',
            'Machine Learning',
            'Data Analysis',
            'Git',
            'SQL'
        ],
        preferredSkills: [
            'PyTorch',
            'HuggingFace',
            'CUDA',
            'Docker'
        ],
        responsibilities: [
            'Train and evaluate fine-tuned LLMs on domain-specific reasoning benchmarks.',
            'Build automated data filtering, embedding generation, and synthetic generation pipelines.',
            'Deploy scalable inference endpoints on Kubernetes GPU clusters.'
        ],
        educationRequirement: 'Degree in Computer Science, Math, or related STEM discipline',
        experienceYears: '3+ years',
        applyUrl: 'https://scale.com/careers'
    },
    {
        id: 'job_04',
        title: 'Senior Frontend Engineer',
        company: 'Linear',
        location: 'Remote (Global)',
        workplaceType: 'Remote',
        jobType: 'Full-time',
        experienceLevel: 'Senior',
        salaryRange: '$180,000 - $230,000',
        postedDate: '1 week ago',
        description: 'Help us craft the modern standard for issue tracking and product management software. We care deeply about 60fps animations, keyboard navigation, and instant local-first synchronization.',
        requiredSkills: [
            'React',
            'JavaScript',
            'TypeScript',
            'Git'
        ],
        preferredSkills: [
            'WebGL',
            'Framer Motion',
            'IndexedDB',
            'Tailwind CSS'
        ],
        responsibilities: [
            'Build desktop-class web interactions with zero perceptible latency.',
            'Champion accessibility, fluid keyboard navigation, and dark mode design harmony.',
            'Optimize React rendering trees and canvas-accelerated document views.'
        ],
        educationRequirement: 'Equivalent experience in shipping world-class web products',
        experienceYears: '5+ years',
        applyUrl: 'https://linear.app/careers'
    },
    {
        id: 'job_05',
        title: 'Lead Data Engineer',
        company: 'Snowflake',
        location: 'San Mateo, CA',
        workplaceType: 'Hybrid',
        jobType: 'Full-time',
        experienceLevel: 'Senior',
        salaryRange: '$200,000 - $250,000',
        postedDate: '4 days ago',
        description: 'Lead our enterprise telemetry and warehouse optimization pipelines. Architect scalable real-time streaming ingestion systems processing tens of petabytes daily.',
        requiredSkills: [
            'SQL',
            'Python',
            'Data Analysis',
            'AWS',
            'Git'
        ],
        preferredSkills: [
            'Spark',
            'Kafka',
            'dbt',
            'Airflow'
        ],
        responsibilities: [
            'Design modular data warehouse schemas and automated pipeline orchestrations.',
            'Optimize SQL queries and cluster partition pruning across billion-row datasets.',
            'Collaborate with business intelligence and product analysts on unified metrics.'
        ],
        educationRequirement: 'B.S. or M.S. in Computer Science or Information Systems',
        experienceYears: '6+ years',
        applyUrl: 'https://snowflake.com/careers'
    },
    {
        id: 'job_06',
        title: 'Junior Software Engineer',
        company: 'Cloudflare',
        location: 'Austin, TX',
        workplaceType: 'Hybrid',
        jobType: 'Full-time',
        experienceLevel: 'Entry',
        salaryRange: '$115,000 - $140,000',
        postedDate: '5 days ago',
        description: 'Kickstart your career at Cloudflare building the next generation of internet security and edge compute infrastructure. Great mentorship and accelerated promotion tracks.',
        requiredSkills: [
            'Python',
            'JavaScript',
            'Git',
            'SQL'
        ],
        preferredSkills: [
            'React',
            'Docker',
            'Linux'
        ],
        responsibilities: [
            'Contribute to edge workers and customer-facing dashboard features.',
            'Write comprehensive unit tests and automated integration suites.',
            'Participate in code reviews and weekly engineering knowledge shares.'
        ],
        educationRequirement: 'Recent graduate in CS or self-taught with project portfolio',
        experienceYears: '0-2 years',
        applyUrl: 'https://cloudflare.com/careers'
    }
];
const INITIAL_METRICS = {
    resumesAnalyzed: 0,
    averageAtsScore: 0,
    skillsVerified: 0,
    assessmentsCompleted: 0,
    jobMatches: 0,
    careerReadinessScore: 0
};
const INITIAL_ATS_HISTORY = [];
const INITIAL_SKILL_MASTERY = [];
const INITIAL_ACTIVITIES = [];


;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();
//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvbW9ja0RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbUQ7QUFDdkI7QUFFckIsTUFBTUMsc0JBQWtDO0lBQzdDQyxJQUFJO0lBQ0pDLE9BQU87SUFDUEMsZUFBZTtJQUNmQyxjQUFjO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFNBQVM7SUFDVEMsUUFBUTtRQUNOQyxXQUFXLEVBQUU7UUFDYkMsTUFBTSxFQUFFO1FBQ1JDLE9BQU8sRUFBRTtJQUNYO0lBQ0FDLFlBQVk7UUFDVjtZQUNFakIsSUFBSTtZQUNKa0IsU0FBUztZQUNUQyxNQUFNO1lBQ05DLFdBQVc7WUFDWEMsU0FBUztZQUNUQyxTQUFTO1lBQ1RDLGNBQWMsRUFBRTtRQUNsQjtLQUNEO0lBQ0RDLFdBQVc7UUFDVDtZQUNFeEIsSUFBSTtZQUNKeUIsUUFBUTtZQUNSQyxhQUFhO1lBQ2JDLGdCQUFnQjtZQUNoQkMsS0FBSztRQUNQO0tBQ0Q7SUFDREMsVUFBVTtRQUNSO1lBQ0U3QixJQUFJO1lBQ0pDLE9BQU87WUFDUDZCLGFBQWE7WUFDYkMsY0FBYyxFQUFFO1FBQ2xCO0tBQ0Q7SUFDREMsZ0JBQWdCLEVBQUU7SUFDbEJDLFlBQVk7SUFDWkMsYUFBYSxJQUFJQyxPQUFPQyxXQUFXO0FBQ3JDLEVBQUU7QUFFSyxNQUFNQyw0QkFBd0M7SUFDbkRyQyxJQUFJO0lBQ0pDLE9BQU87SUFDUEMsZUFBZTtJQUNmQyxjQUFjO1FBQ1pDLFVBQVU7UUFDVkMsT0FBTztRQUNQQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLFFBQVE7UUFDUkMsV0FBVztJQUNiO0lBQ0FDLFNBQ0U7SUFDRkMsUUFBUTtRQUNOQyxXQUFXO1lBQ1Q7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNB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LE1BQU1DLHdCQUE2QyxFQUFFLENBQUM7QUFFdEQsTUFBTUMscUJBQXdDLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsiRDpcXHByb2plY3RzXFxidWlsZGVyXFxzcmNcXGxpYlxcbW9ja0RhdGEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgUmVzdW1lRGF0YSxcbiAgUmVzdW1lVGVtcGxhdGVJbmZvLFxuICBSZXN1bWVBbmFseXNpc1Jlc3VsdCxcbiAgSW1wcm92ZW1lbnRJdGVtLFxufSBmcm9tICdAL3R5cGVzL3Jlc3VtZSc7XG5pbXBvcnQge1xuICBTdXBwb3J0ZWRTa2lsbCxcbiAgVXNlclNraWxsLFxuICBBc3Nlc3NtZW50UXVlc3Rpb24sXG4gIFNraWxsQ2VydGlmaWNhdGUsXG59IGZyb20gJ0AvdHlwZXMvc2tpbGxzJztcbmltcG9ydCB7IEpvYlBvc3RpbmcgfSBmcm9tICdAL3R5cGVzL2pvYnMnO1xuaW1wb3J0IHsgRGFzaGJvYXJkTWV0cmljcywgQWN0aXZpdHlMb2dJdGVtLCBBdHNIaXN0b3J5UG9pbnQsIFNraWxsTWFzdGVyeVBvaW50IH0gZnJvbSAnQC90eXBlcy9kYXNoYm9hcmQnO1xuXG5pbXBvcnQgeyBSRVNVTUVfVEVNUExBVEVTIH0gZnJvbSAnQC9saWIvdGVtcGxhdGVzJztcbmV4cG9ydCB7IFJFU1VNRV9URU1QTEFURVMgfTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfUkVTVU1FX0RBVEE6IFJlc3VtZURhdGEgPSB7XG4gIGlkOiAncmVzX2RlZmF1bHQnLFxuICB0aXRsZTogJ1VudGl0bGVkIFJlc3VtZScsXG4gIGNhbmRpZGF0ZVR5cGU6ICdleHBlcmllbmNlZCcsXG4gIHBlcnNvbmFsSW5mbzoge1xuICAgIGZ1bGxOYW1lOiAnJyxcbiAgICBlbWFpbDogJycsXG4gICAgcGhvbmU6ICcnLFxuICAgIGxvY2F0aW9uOiAnJyxcbiAgICBoZWFkbGluZTogJycsXG4gICAgbGlua2VkaW46ICcnLFxuICAgIGdpdGh1YjogJycsXG4gICAgcG9ydGZvbGlvOiAnJyxcbiAgfSxcbiAgc3VtbWFyeTogJycsXG4gIHNraWxsczoge1xuICAgIHRlY2huaWNhbDogW10sXG4gICAgc29mdDogW10sXG4gICAgdG9vbHM6IFtdLFxuICB9LFxuICBleHBlcmllbmNlOiBbXG4gICAge1xuICAgICAgaWQ6ICdleHBfaW5pdCcsXG4gICAgICBjb21wYW55OiAnJyxcbiAgICAgIHJvbGU6ICcnLFxuICAgICAgc3RhcnREYXRlOiAnJyxcbiAgICAgIGVuZERhdGU6ICcnLFxuICAgICAgY3VycmVudDogdHJ1ZSxcbiAgICAgIGJ1bGxldFBvaW50czogW10sXG4gICAgfSxcbiAgXSxcbiAgZWR1Y2F0aW9uOiBbXG4gICAge1xuICAgICAgaWQ6ICdlZHVfaW5pdCcsXG4gICAgICBkZWdyZWU6ICcnLFxuICAgICAgaW5zdGl0dXRpb246ICcnLFxuICAgICAgZ3JhZHVhdGlvblllYXI6ICcnLFxuICAgICAgZ3BhOiAnJyxcbiAgICB9LFxuICBdLFxuICBwcm9qZWN0czogW1xuICAgIHtcbiAgICAgIGlkOiAncHJval9pbml0JyxcbiAgICAgIHRpdGxlOiAnJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgIHRlY2hub2xvZ2llczogW10sXG4gICAgfSxcbiAgXSxcbiAgY2VydGlmaWNhdGlvbnM6IFtdLFxuICB0ZW1wbGF0ZUlkOiAnbW9kZXJuLWF0cycsXG4gIGxhc3RVcGRhdGVkOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG59O1xuXG5leHBvcnQgY29uc3QgU0FNUExFX0VYUEVSSUVOQ0VEX1JFU1VNRTogUmVzdW1lRGF0YSA9IHtcbiAgaWQ6ICdyZXNfc2FtcGxlXzAxJyxcbiAgdGl0bGU6ICdTZW5pb3IgU29mdHdhcmUgJiBBSSBFbmdpbmVlcicsXG4gIGNhbmRpZGF0ZVR5cGU6ICdleHBlcmllbmNlZCcsXG4gIHBlcnNvbmFsSW5mbzoge1xuICAgIGZ1bGxOYW1lOiAnUmFodWwgU2hhcm1hJyxcbiAgICBlbWFpbDogJ3JhaHVsLnNoYXJtYUBlbWFpbC5jb20nLFxuICAgIHBob25lOiAnKzEgKDU1NSkgMjM0LTU2NzgnLFxuICAgIGxvY2F0aW9uOiAnU2FuIEZyYW5jaXNjbywgQ0EnLFxuICAgIGhlYWRsaW5lOiAnU2VuaW9yIEZ1bGwgU3RhY2sgJiBBSSBFbmdpbmVlcicsXG4gICAgbGlua2VkaW46ICdsaW5rZWRpbi5jb20vaW4vcmFodWxzaGFybWEtZGV2JyxcbiAgICBnaXRodWI6ICdnaXRodWIuY29tL3JhaHVsc2hhcm1hLWRldicsXG4gICAgcG9ydGZvbGlvOiAncmFodWxzaGFybWEuZGV2JyxcbiAgfSxcbiAgc3VtbWFyeTpcbiAgICAnRnVsbCBTdGFjayAmIEFJIEVuZ2luZWVyIHdpdGggNisgeWVhcnMgb2YgZXhwZXJpZW5jZSBkZXNpZ25pbmcgYW5kIGRlcGxveWluZyBoaWdoLXNjYWxlIGRpc3RyaWJ1dGVkIHdlYiBhcHBsaWNhdGlvbnMgYW5kIHByb2R1Y3Rpb24gTExNIHBpcGVsaW5lcy4gQXJjaGl0ZWN0ZWQgbWljcm9zZXJ2aWNlcyBzZXJ2aW5nIDRNKyBtb250aGx5IGFjdGl2ZSB1c2VycyB3aXRoIDk5Ljk4JSB1cHRpbWUuIFByb2ZpY2llbnQgaW4gUmVhY3QsIFR5cGVTY3JpcHQsIFB5dGhvbiwgUG9zdGdyZVNRTCwgYW5kIGNsb3VkLW5hdGl2ZSBLdWJlcm5ldGVzIGVudmlyb25tZW50cy4nLFxuICBza2lsbHM6IHtcbiAgICB0ZWNobmljYWw6IFtcbiAgICAgICdQeXRob24nLFxuICAgICAgJ0phdmFTY3JpcHQnLFxuICAgICAgJ1JlYWN0JyxcbiAgICAgICdTUUwnLFxuICAgICAgJ01hY2hpbmUgTGVhcm5pbmcnLFxuICAgICAgJ0dpdCcsXG4gICAgICAnQVdTJyxcbiAgICAgICdEb2NrZXInLFxuICAgICAgJ0t1YmVybmV0ZXMnLFxuICAgICAgJ0Zhc3RBUEknLFxuICAgICAgJ1Bvc3RncmVTUUwnLFxuICAgICAgJ1JlZGlzJyxcbiAgICBdLFxuICAgIHNvZnQ6IFtcbiAgICAgICdUZWNobmljYWwgTGVhZGVyc2hpcCcsXG4gICAgICAnU3lzdGVtIEFyY2hpdGVjdHVyZSBEZXNpZ24nLFxuICAgICAgJ0Nyb3NzLWZ1bmN0aW9uYWwgTWVudG9yc2hpcCcsXG4gICAgICAnQWdpbGUgU3ByaW50IFBsYW5uaW5nJyxcbiAgICBdLFxuICAgIHRvb2xzOiBbXG4gICAgICAnVmlzdWFsIFN0dWRpbyBDb2RlJyxcbiAgICAgICdHaXRMYWIgQ0kvQ0QnLFxuICAgICAgJ0RhdGFkb2cnLFxuICAgICAgJ1RlcnJhZm9ybScsXG4gICAgICAnUG9zdG1hbicsXG4gICAgICAnSmlyYScsXG4gICAgXSxcbiAgfSxcbiAgZXhwZXJpZW5jZTogW1xuICAgIHtcbiAgICAgIGlkOiAnZXhwXzAxJyxcbiAgICAgIGNvbXBhbnk6ICdOZXh1cyBBSSBUZWNobm9sb2dpZXMnLFxuICAgICAgcm9sZTogJ1N0YWZmIEVuZ2luZWVyIC0gQ29yZSBQbGF0Zm9ybScsXG4gICAgICBsb2NhdGlvbjogJ1NhbiBGcmFuY2lzY28sIENBJyxcbiAgICAgIHN0YXJ0RGF0ZTogJzIwMjMtMDEnLFxuICAgICAgZW5kRGF0ZTogJycsXG4gICAgICBjdXJyZW50OiB0cnVlLFxuICAgICAgYnVsbGV0UG9pbnRzOiBbXG4gICAgICAgICdBcmNoaXRlY3RlZCByZWFsLXRpbWUgc2VtYW50aWMgc2VhcmNoIGFuZCByZXRyaWV2YWwtYXVnbWVudGVkIGdlbmVyYXRpb24gKFJBRykgcGxhdGZvcm0gcmVkdWNpbmcgcXVlcnkgbGF0ZW5jeSBieSA0MiUgZm9yIDIuNU0gZW50ZXJwcmlzZSBxdWVyaWVzL2RheS4nLFxuICAgICAgICAnU3BlYXJoZWFkZWQgdHJhbnNpdGlvbiBmcm9tIG1vbm9saXRoIHRvIGNvbnRhaW5lcml6ZWQgR28vUHl0aG9uIG1pY3Jvc2VydmljZXMgb24gQVdTIEVLUywgY3V0dGluZyBjbG91ZCBpbmZyYXN0cnVjdHVyZSBjb3N0cyBieSAkMTgwLDAwMCBhbm51YWxseS4nLFxuICAgICAgICAnTWVudG9yZWQgOCBtaWQtbGV2ZWwgZW5naW5lZXJzIGFuZCBlc3RhYmxpc2hlZCBiaS13ZWVrbHkgdGVjaG5pY2FsIGRlc2lnbiByZXZpZXcgc3RhbmRhcmRzIHRoYXQgZGVjcmVhc2VkIGNyaXRpY2FsIHByb2R1Y3Rpb24gZGVmZWN0cyBieSAzNCUuJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2V4cF8wMicsXG4gICAgICBjb21wYW55OiAnU3ludGhldGl4IENsb3VkJyxcbiAgICAgIHJvbGU6ICdTZW5pb3IgRnVsbCBTdGFjayBFbmdpbmVlcicsXG4gICAgICBsb2NhdGlvbjogJ1NlYXR0bGUsIFdBJyxcbiAgICAgIHN0YXJ0RGF0ZTogJzIwMjAtMDMnLFxuICAgICAgZW5kRGF0ZTogJzIwMjItMTInLFxuICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgICBidWxsZXRQb2ludHM6IFtcbiAgICAgICAgJ0J1aWx0IGVudGVycHJpc2UgYW5hbHl0aWNzIGRhc2hib2FyZCBpbiBSZWFjdC9UeXBlU2NyaXB0IHdpdGggc3ViLTEwMG1zIGNsaWVudC1zaWRlIGFnZ3JlZ2F0aW9uIG92ZXIgNTAwLDAwMCBzdHJlYW1pbmcgdGVsZW1ldHJ5IHJvd3MuJyxcbiAgICAgICAgJ0VuZ2luZWVyZWQgUG9zdGdyZVNRTCByZWFkLXJlcGxpY2EgcG9vbCB3aXRoIFJlZGlzIGNhY2hpbmcgbGF5ZXIsIHNjYWxpbmcgcXVlcmllcyBwZXIgc2Vjb25kIGZyb20gMSwyMDAgdG8gOSw4MDAgdW5kZXIgcGVhayBidXJzdCB0cmFmZmljLicsXG4gICAgICAgICdBdXRvbWF0ZWQgQ0kvQ0QgZGVwbG95bWVudCBwaXBlbGluZXMgdXNpbmcgR2l0SHViIEFjdGlvbnMgYW5kIFRlcnJhZm9ybSwgc2hyaW5raW5nIHJlbGVhc2UgY3ljbGUgdGltZXMgZnJvbSAyIGRheXMgdG8gMTggbWludXRlcy4nLFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBlZHVjYXRpb246IFtcbiAgICB7XG4gICAgICBpZDogJ2VkdV8wMScsXG4gICAgICBkZWdyZWU6ICdCLlMuIGluIENvbXB1dGVyIFNjaWVuY2UnLFxuICAgICAgaW5zdGl0dXRpb246ICdVbml2ZXJzaXR5IG9mIENhbGlmb3JuaWEsIEJlcmtlbGV5JyxcbiAgICAgIGxvY2F0aW9uOiAnQmVya2VsZXksIENBJyxcbiAgICAgIGdyYWR1YXRpb25ZZWFyOiAnMjAxOScsXG4gICAgICBncGE6ICczLjg2JyxcbiAgICAgIGhvbm9yczogJ0RlYW7igJlzIEhvbm9ycyBMaXN0LCBNYWduYSBDdW0gTGF1ZGUnLFxuICAgIH0sXG4gIF0sXG4gIHByb2plY3RzOiBbXG4gICAge1xuICAgICAgaWQ6ICdwcm9qXzAxJyxcbiAgICAgIHRpdGxlOiAnTmV1cmFsRmxvdyAtIE9wZW4gU291cmNlIFZlY3RvciBTZWFyY2ggSW5kZXgnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdFbmdpbmVlcmVkIGhpZ2gtcGVyZm9ybWFuY2UgSE5TVyBpbmRleCBpbiBDKysgd2l0aCBQeXRob24gYmluZGluZ3MuIEFjaGlldmVkIDk0JSByZWNhbGwgYXQgMTIsMDAwIFFQUyBvbiBtaWxsaW9uLXNjYWxlIGVtYmVkZGluZ3MgZGF0YXNldC4nLFxuICAgICAgdGVjaG5vbG9naWVzOiBbJ1B5dGhvbicsICdDKysnLCAnRG9ja2VyJywgJ051bVB5J10sXG4gICAgICBsaW5rOiAnZ2l0aHViLmNvbS9yYWh1bHNoYXJtYS1kZXYvbmV1cmFsZmxvdycsXG4gICAgICBidWxsZXRzOiBbXG4gICAgICAgICdBZG9wdGVkIGJ5IDEsNDAwKyBkZXZlbG9wZXJzIG9uIEdpdEh1YiB3aXRoIDg1MCBzdGFycyB3aXRoaW4gNCBtb250aHMgb2YgaW5pdGlhbCByZWxlYXNlLicsXG4gICAgICAgICdJbXBsZW1lbnRlZCBjdXN0b20gcXVhbnRpemF0aW9uIHJlZHVjaW5nIG1lbW9yeSBmb290cHJpbnQgYnkgNjUlIHdpdGggbWluaW1hbCBhY2N1cmFjeSBkZWdyYWRhdGlvbi4nLFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBjZXJ0aWZpY2F0aW9uczogW1xuICAgIHtcbiAgICAgIGlkOiAnY2VydF8wMScsXG4gICAgICBuYW1lOiAnQVdTIENlcnRpZmllZCBTb2x1dGlvbnMgQXJjaGl0ZWN0IOKAkyBQcm9mZXNzaW9uYWwnLFxuICAgICAgaXNzdWVyOiAnQW1hem9uIFdlYiBTZXJ2aWNlcycsXG4gICAgICBkYXRlOiAnMjAyMycsXG4gICAgICBjcmVkZW50aWFsSWQ6ICdBV1MtU0FQLTg5MjQwMScsXG4gICAgfSxcbiAgXSxcbiAgdGVtcGxhdGVJZDogJ2F0cy1jbGFzc2ljJyxcbiAgbGFzdFVwZGF0ZWQ6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbn07XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1VTRVJfU0tJTExTOiBVc2VyU2tpbGxbXSA9IFtcbiAge1xuICAgIGlkOiAnc2tpbGxfMDEnLFxuICAgIG5hbWU6ICdQeXRob24nLFxuICAgIGNhdGVnb3J5OiAnUHJvZ3JhbW1pbmcnLFxuICAgIHN0YXR1czogJ25vdC12ZXJpZmllZCcsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3NraWxsXzAyJyxcbiAgICBuYW1lOiAnU1FMJyxcbiAgICBjYXRlZ29yeTogJ0RhdGFiYXNlJyxcbiAgICBzdGF0dXM6ICdub3QtdmVyaWZpZWQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdza2lsbF8wMycsXG4gICAgbmFtZTogJ1JlYWN0JyxcbiAgICBjYXRlZ29yeTogJ0Zyb250ZW5kJyxcbiAgICBzdGF0dXM6ICdub3QtdmVyaWZpZWQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdza2lsbF8wNCcsXG4gICAgbmFtZTogJ0FXUycsXG4gICAgY2F0ZWdvcnk6ICdDbG91ZCAmIERldk9wcycsXG4gICAgc3RhdHVzOiAnbm90LXZlcmlmaWVkJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnc2tpbGxfMDUnLFxuICAgIG5hbWU6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICBjYXRlZ29yeTogJ0FJIC8gRGF0YScsXG4gICAgc3RhdHVzOiAnbm90LXZlcmlmaWVkJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnc2tpbGxfMDYnLFxuICAgIG5hbWU6ICdKYXZhU2NyaXB0JyxcbiAgICBjYXRlZ29yeTogJ1Byb2dyYW1taW5nJyxcbiAgICBzdGF0dXM6ICdub3QtdmVyaWZpZWQnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdza2lsbF8wNycsXG4gICAgbmFtZTogJ0dpdCcsXG4gICAgY2F0ZWdvcnk6ICdDbG91ZCAmIERldk9wcycsXG4gICAgc3RhdHVzOiAnbm90LXZlcmlmaWVkJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX0FOQUxZU0lTX1JFU1VMVDogUmVzdW1lQW5hbHlzaXNSZXN1bHQgPSB7XG4gIG92ZXJhbGxBdHNTY29yZTogODQsXG4gIGtleXdvcmRNYXRjaFNjb3JlOiA4OCxcbiAgZm9ybWF0dGluZ1Njb3JlOiA5MixcbiAgY29udGVudFNjb3JlOiA4MCxcbiAgc2VjdGlvblNjb3JlOiA4NSxcbiAgd29yZENvdW50OiA0ODYsXG4gIHJlYWRhYmlsaXR5U2NvcmU6IDc4LFxuICBkZXRlY3RlZEtleXdvcmRzOiBbXG4gICAgJ1B5dGhvbicsXG4gICAgJ1JlYWN0JyxcbiAgICAnVHlwZVNjcmlwdCcsXG4gICAgJ1Bvc3RncmVTUUwnLFxuICAgICdBV1MnLFxuICAgICdLdWJlcm5ldGVzJyxcbiAgICAnRG9ja2VyJyxcbiAgICAnRGlzdHJpYnV0ZWQgU3lzdGVtcycsXG4gICAgJ01pY3Jvc2VydmljZXMnLFxuICAgICdSQUcnLFxuICAgICdDSS9DRCcsXG4gIF0sXG4gIG1pc3NpbmdLZXl3b3JkczogW1xuICAgICdTeXN0ZW0gTW9uaXRvcmluZycsXG4gICAgJ0xvYWQgQmFsYW5jaW5nJyxcbiAgICAnR3JhcGhRTCcsXG4gICAgJ0thZmthJyxcbiAgICAnVW5pdCBUZXN0aW5nIChQeVRlc3QvSmVzdCknLFxuICBdLFxuICBzdHJlbmd0aHM6IFtcbiAgICB7XG4gICAgICBpZDogJ3N0cl8xJyxcbiAgICAgIHNlY3Rpb246ICdXb3JrIEV4cGVyaWVuY2UnLFxuICAgICAgdGl0bGU6ICdTdHJvbmcgUXVhbnRpZmlhYmxlIEFjaGlldmVtZW50cycsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgJ0J1bGxldCBwb2ludHMgaW5jbHVkZSBleHBsaWNpdCBtZXRyaWNzICgkMTgwSyBjb3N0IHNhdmluZ3MsIDQyJSBxdWVyeSBsYXRlbmN5IHJlZHVjdGlvbiwgNE0rIE1BVSkgd2hpY2ggZHJhc3RpY2FsbHkgaW1wcm92ZSBBVFMgcmFua2luZyBhbmQgcmVjcnVpdGVyIGNvbnZlcnNpb24uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3RyXzInLFxuICAgICAgc2VjdGlvbjogJ1NraWxscyBDb3ZlcmFnZScsXG4gICAgICB0aXRsZTogJ0hpZ2gtRGVtYW5kIENvcmUgVGVjaG5vbG9naWVzJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3Ryb25nIG92ZXJsYXAgd2l0aCBUaWVyLTEgZW5naW5lZXJpbmcgY3JpdGVyaWE6IFB5dGhvbiwgVHlwZVNjcmlwdCwgUmVhY3QsIFBvc3RncmVTUUwsIGFuZCBjbG91ZCBjb250YWluZXJpemF0aW9uIHRlY2hub2xvZ2llcyBhcmUgcHJvbWluZW50IGFuZCBjb25zaXN0ZW50bHkgZm9ybWF0dGVkLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3N0cl8zJyxcbiAgICAgIHNlY3Rpb246ICdTdHJ1Y3R1cmUgJiBBVFMgUGFyc2VhYmlsaXR5JyxcbiAgICAgIHRpdGxlOiAnQ29tcGxpYW50IFNlY3Rpb24gSGllcmFyY2h5JyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnU3RhbmRhcmRpemVkIGhlYWRpbmdzIChTdW1tYXJ5LCBTa2lsbHMsIEV4cGVyaWVuY2UsIEVkdWNhdGlvbiwgUHJvamVjdHMpIGVuYWJsZSAxMDAlIHRva2VuIGV4dHJhY3Rpb24gYWNjdXJhY3kgYWNyb3NzIG1vZGVybiBwYXJzZXJzIChHcmVlbmhvdXNlLCBMZXZlciwgV29ya2RheSkuJyxcbiAgICB9LFxuICBdLFxuICB3ZWFrbmVzc2VzOiBbXG4gICAge1xuICAgICAgaWQ6ICd3a18xJyxcbiAgICAgIHNlY3Rpb246ICdTdW1tYXJ5JyxcbiAgICAgIHdoYXRJc1dyb25nOiAnU3VtbWFyeSBpcyBzb21ld2hhdCBicmllZiBhbmQgbWlzc2VzIHRhcmdldCBsZWFkZXJzaGlwIHNjb3BlLicsXG4gICAgICB3aHlJdE1hdHRlcnM6XG4gICAgICAgICdSZWNydWl0ZXJzIHNwZW5kIDYgc2Vjb25kcyBvbiBpbml0aWFsIHNjcmVlbmluZzsgYSBjb25jaXNlIHZhbHVlIHByb3Bvc2l0aW9uIGRlZmluaW5nIGRvbWFpbiBhdXRob3JpdHkgc2V0cyB0aGUgbGVucyBmb3IgdGhlIGVudGlyZSByZXZpZXcuJyxcbiAgICAgIGhvd1RvSW1wcm92ZTpcbiAgICAgICAgJ0luY2x1ZGUgeW91ciBwcmltYXJ5IGFyY2hpdGVjdHVyYWwgc3BlY2lhbHR5IGFuZCBzcGVjaWZ5IHRlYW0gc2l6aW5nIG9yIGJ1ZGdldCBzY29wZSBpbiB5b3VyIG9wZW5pbmcgcGFyYWdyYXBoLicsXG4gICAgICBzZXZlcml0eTogJ21lZGl1bScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3drXzInLFxuICAgICAgc2VjdGlvbjogJ0V4cGVyaWVuY2UnLFxuICAgICAgd2hhdElzV3Jvbmc6ICdMYWNrIG9mIGF1dG9tYXRlZCB0ZXN0aW5nIGFuZCBjb2RlIHF1YWxpdHkgdG9vbHMgbWVudGlvbmVkLicsXG4gICAgICB3aHlJdE1hdHRlcnM6XG4gICAgICAgICdNb2Rlcm4gc2VuaW9yIHJvbGVzIHJlcXVpcmUgZXhwbGljaXQgZXZpZGVuY2Ugb2YgdGVzdC1kcml2ZW4gZGV2ZWxvcG1lbnQsIGxpbnRpbmcgcGlwZWxpbmVzLCBhbmQgY29kZSByZXZpZXcgcmlnb3IuJyxcbiAgICAgIGhvd1RvSW1wcm92ZTpcbiAgICAgICAgJ0FkZCByZWZlcmVuY2VzIHRvIHRlc3RpbmcgZnJhbWV3b3JrcyAoZS5nLiBQeVRlc3QsIEplc3QsIEN5cHJlc3MpIGluIHlvdXIgQ0kvQ0QgYXV0b21hdGlvbiBidWxsZXQuJyxcbiAgICAgIHNldmVyaXR5OiAnbWVkaXVtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnd2tfMycsXG4gICAgICBzZWN0aW9uOiAnUHJvamVjdHMnLFxuICAgICAgd2hhdElzV3Jvbmc6ICdPbmx5IG9uZSBtYWpvciBwcm9qZWN0IGhpZ2hsaWdodGVkIGRlc3BpdGUgZXh0ZW5zaXZlIHRlY2huaWNhbCBicmVhZHRoLicsXG4gICAgICB3aHlJdE1hdHRlcnM6XG4gICAgICAgICdTZWNvbmRhcnkgc3lzdGVtcyBleHBlcmllbmNlIChlLmcuIGV2ZW50LWRyaXZlbiBtZXNzYWdlIHF1ZXVlcyBvciBkYXRhYmFzZSBpbmRleGluZykgaXMgaGlkZGVuIGluIGJ1bGxldHMgcmF0aGVyIHRoYW4gc2hvd2Nhc2luZyBzdGFuZGFsb25lIGVuZ2luZWVyaW5nIG93bmVyc2hpcC4nLFxuICAgICAgaG93VG9JbXByb3ZlOlxuICAgICAgICAnQWRkIGEgc2Vjb25kIHByb2plY3QgZW1waGFzaXppbmcgZGlzdHJpYnV0ZWQgc3RyZWFtaW5nIGRhdGEgb3IgYXN5bmNocm9ub3VzIHdvcmtlciBxdWV1ZXMuJyxcbiAgICAgIHNldmVyaXR5OiAnbG93JyxcbiAgICB9LFxuICBdLFxuICByZWNvbW1lbmRhdGlvbnM6IFtcbiAgICB7XG4gICAgICBpZDogJ3JlY18xJyxcbiAgICAgIGNhdGVnb3J5OiAnS2V5d29yZCBPcHRpbWl6YXRpb24nLFxuICAgICAgdGl0bGU6ICdJbmNvcnBvcmF0ZSBLYWZrYSAmIEV2ZW50LURyaXZlbiBQYXR0ZXJucycsXG4gICAgICBhY3Rpb25UZXh0OlxuICAgICAgICAnRXhwbGljaXRseSBzdGF0ZSBldmVudCBzdHJlYW1pbmcgb3IgYXN5bmMgcXVldWUgc3lzdGVtcyBpbiB5b3VyIHBsYXRmb3JtIGRlc2NyaXB0aW9uIHRvIG1hdGNoIFNlbmlvciBCYWNrZW5kIEFUUyBmaWx0ZXIgdGhyZXNob2xkcy4nLFxuICAgICAgb3JpZ2luYWxUZXh0OiAnVHJhbnNpdGlvbmVkIG1vbm9saXRoIHRvIGNvbnRhaW5lcml6ZWQgR28vUHl0aG9uIG1pY3Jvc2VydmljZXMuLi4nLFxuICAgICAgaW1wcm92ZWRUZXh0OlxuICAgICAgICAnVHJhbnNpdGlvbmVkIG1vbm9saXRoIHRvIGV2ZW50LWRyaXZlbiBHby9QeXRob24gbWljcm9zZXJ2aWNlcyB2aWEgS2Fma2EsIGN1dHRpbmcgY2xvdWQgaW5mcmFzdHJ1Y3R1cmUgY29zdHMgYnkgJDE4MCwwMDAgYW5udWFsbHkuJyxcbiAgICAgIGltcGFjdDogJys2IEFUUyBQb2ludHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdyZWNfMicsXG4gICAgICBjYXRlZ29yeTogJ0ltcGFjdCBBbXBsaWZpY2F0aW9uJyxcbiAgICAgIHRpdGxlOiAnUXVhbnRpZnkgTWVudG9yc2hpcCBPdXRjb21lcycsXG4gICAgICBhY3Rpb25UZXh0OlxuICAgICAgICAnTWVudGlvbiBpbnRlcm5hbCBwcm9tb3Rpb25zIG9yIHRlYW0gdmVsb2NpdHkgZ2FpbiByZXN1bHRpbmcgZnJvbSB5b3VyIGxlYWRlcnNoaXAgYW5kIGVuZ2luZWVyaW5nIGRlc2lnbiByZXZpZXdzLicsXG4gICAgICBvcmlnaW5hbFRleHQ6ICdNZW50b3JlZCA4IG1pZC1sZXZlbCBlbmdpbmVlcnMuLi4nLFxuICAgICAgaW1wcm92ZWRUZXh0OlxuICAgICAgICAnTWVudG9yZWQgOCBtaWQtbGV2ZWwgZW5naW5lZXJzIHdpdGggMyByZWNlaXZpbmcgc2VuaW9yIHByb21vdGlvbnMgd2l0aGluIDE0IG1vbnRoczsgYm9vc3RlZCB0ZWFtIHNwcmludCB2ZWxvY2l0eSBieSAyOCUuJyxcbiAgICAgIGltcGFjdDogJys0IEFUUyBQb2ludHMnLFxuICAgIH0sXG4gIF0sXG4gIHN1bW1hcnlGZWVkYmFjazpcbiAgICAnVGhpcyByZXN1bWUgZGVtb25zdHJhdGVzIGhpZ2ggY2FsaWJlciBlbmdpbmVlcmluZyBleGVjdXRpb24gd2l0aCBjbGVhciwgcXVhbnRpZmllZCBpbXBhY3RzLiBNaW5vciBvcHRpbWl6YXRpb25zIGFyb3VuZCBhdXRvbWF0ZWQgdGVzdGluZyBrZXl3b3JkcyBhbmQgZXhwYW5kZWQgZXZlbnQtZHJpdmVuIGFyY2hpdGVjdHVyZXMgd2lsbCBlbGV2YXRlIHRoaXMgcHJvZmlsZSBpbnRvIHRoZSA5MHRoIHBlcmNlbnRpbGUgb2YgQVRTIGFwcGxpY2FudCBwb29scy4nLFxuICBhbmFseXplZEF0OiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG59O1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9JTVBST1ZFTUVOVFM6IEltcHJvdmVtZW50SXRlbVtdID0gW1xuICB7XG4gICAgaWQ6ICdpbXBfMDEnLFxuICAgIHNlY3Rpb246ICdzdW1tYXJ5JyxcbiAgICBmaWVsZDogJ1Byb2Zlc3Npb25hbCBTdW1tYXJ5JyxcbiAgICBvcmlnaW5hbENvbnRlbnQ6XG4gICAgICAnRnVsbCBTdGFjayAmIEFJIEVuZ2luZWVyIHdpdGggNisgeWVhcnMgb2YgZXhwZXJpZW5jZSBkZXNpZ25pbmcgYW5kIGRlcGxveWluZyBoaWdoLXNjYWxlIGRpc3RyaWJ1dGVkIHdlYiBhcHBsaWNhdGlvbnMgYW5kIHByb2R1Y3Rpb24gTExNIHBpcGVsaW5lcy4gQXJjaGl0ZWN0ZWQgbWljcm9zZXJ2aWNlcyBzZXJ2aW5nIDRNKyBtb250aGx5IGFjdGl2ZSB1c2VycyB3aXRoIDk5Ljk4JSB1cHRpbWUuIFByb2ZpY2llbnQgaW4gUmVhY3QsIFR5cGVTY3JpcHQsIFB5dGhvbiwgUG9zdGdyZVNRTCwgYW5kIGNsb3VkLW5hdGl2ZSBLdWJlcm5ldGVzIGVudmlyb25tZW50cy4nLFxuICAgIGltcHJvdmVkQ29udGVudDpcbiAgICAgICdIaWdoLWltcGFjdCBTdGFmZiAvIFNlbmlvciBGdWxsIFN0YWNrICYgQUkgRW5naW5lZXIgd2l0aCA2KyB5ZWFycyBzcGVhcmhlYWRpbmcgZGlzdHJpYnV0ZWQgc3lzdGVtcyBhbmQgcHJvZHVjdGlvbiBMTE0vUkFHIHBpcGVsaW5lcyBhdCBlbnRlcnByaXNlIHNjYWxlLiBFbmdpbmVlcmVkIHJlc2lsaWVudCBtaWNyb3NlcnZpY2UgZWNvc3lzdGVtcyBzZXJ2aW5nIDRNKyBtb250aGx5IGFjdGl2ZSB1c2VycyBhdCA5OS45OCUgU0xBIHJlbGlhYmlsaXR5LiBEZWVwIGV4cGVydGlzZSBhY3Jvc3MgVHlwZVNjcmlwdCwgUHl0aG9uLCBQb3N0Z3JlU1FMLCBBV1MgRUtTLCBhbmQgaGlnaC10aHJvdWdocHV0IHZlY3RvciByZXRyaWV2YWwgYXJjaGl0ZWN0dXJlcy4nLFxuICAgIHJlYXNvbmluZzpcbiAgICAgICdFbGV2YXRlZCBzZW5pb3JpdHkgc2lnbmFsaW5nIHdpdGggYWN0aXZlIGF1dGhvcml0eSB2ZXJicyAoXCJzcGVhcmhlYWRpbmdcIiwgXCJlbmdpbmVlcmVkIHJlc2lsaWVudCBlY29zeXN0ZW1zXCIpIGFuZCB0aWdodGVuZWQgU0xBIG1ldHJpYyB0ZXJtaW5vbG9neSB3aXRob3V0IGludmVudGluZyB1bnZlcmlmaWVkIGZhY3RzLicsXG4gICAgbWV0cmljSW1wYWN0OiAnKzggQVRTIFNjb3JlICYgUmVjcnVpdGVyIEVuZ2FnZW1lbnQnLFxuICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdpbXBfMDInLFxuICAgIHNlY3Rpb246ICdleHBlcmllbmNlJyxcbiAgICBmaWVsZDogJ05leHVzIEFJIC0gQXJjaGl0ZWN0dXJlIEJ1bGxldCcsXG4gICAgb3JpZ2luYWxDb250ZW50OlxuICAgICAgJ0FyY2hpdGVjdGVkIHJlYWwtdGltZSBzZW1hbnRpYyBzZWFyY2ggYW5kIHJldHJpZXZhbC1hdWdtZW50ZWQgZ2VuZXJhdGlvbiAoUkFHKSBwbGF0Zm9ybSByZWR1Y2luZyBxdWVyeSBsYXRlbmN5IGJ5IDQyJSBmb3IgMi41TSBlbnRlcnByaXNlIHF1ZXJpZXMvZGF5LicsXG4gICAgaW1wcm92ZWRDb250ZW50OlxuICAgICAgJ0FyY2hpdGVjdGVkIGhpZ2gtdGhyb3VnaHB1dCBzZW1hbnRpYyBzZWFyY2ggYW5kIFJBRyBwbGF0Zm9ybSB3aXRoIHN1Yi04MG1zIHA5NSBsYXRlbmN5IGFjcm9zcyAyLjVNIGRhaWx5IGVudGVycHJpc2UgcXVlcmllcywgc2xhc2hpbmcgbWVkaWFuIHJlc3BvbnNlIGxhdGVuY3kgYnkgNDIlLicsXG4gICAgcmVhc29uaW5nOlxuICAgICAgJ0FkZGVkIHN0YW5kYXJkIGluZHVzdHJ5IGxhdGVuY3kgYmVuY2htYXJrIChwOTUpIHRvIHF1YW50aWZ5IHJlc3BvbnNpdmVuZXNzIHJpZ29yb3VzbHkuJyxcbiAgICBtZXRyaWNJbXBhY3Q6ICcrNSBUZWNobmljYWwgRGVwdGggU2NvcmUnLFxuICAgIHN0YXR1czogJ3BlbmRpbmcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdpbXBfMDMnLFxuICAgIHNlY3Rpb246ICdleHBlcmllbmNlJyxcbiAgICBmaWVsZDogJ1N5bnRoZXRpeCBDbG91ZCAtIERhdGFiYXNlIE9wdGltaXphdGlvbiBCdWxsZXQnLFxuICAgIG9yaWdpbmFsQ29udGVudDpcbiAgICAgICdFbmdpbmVlcmVkIFBvc3RncmVTUUwgcmVhZC1yZXBsaWNhIHBvb2wgd2l0aCBSZWRpcyBjYWNoaW5nIGxheWVyLCBzY2FsaW5nIHF1ZXJpZXMgcGVyIHNlY29uZCBmcm9tIDEsMjAwIHRvIDksODAwIHVuZGVyIHBlYWsgYnVyc3QgdHJhZmZpYy4nLFxuICAgIGltcHJvdmVkQ29udGVudDpcbiAgICAgICdFbmdpbmVlcmVkIGhpZ2hseSBhdmFpbGFibGUgUG9zdGdyZVNRTCByZWFkLXJlcGxpY2EgY2x1c3RlciBjb3VwbGVkIHdpdGggUmVkaXMgZGlzdHJpYnV0ZWQgY2FjaGluZyBsYXllciwgc2NhbGluZyB0aHJvdWdocHV0IGJ5IDcxNiUgKDEsMjAwIHRvIDksODAwIFFQUykgdW5kZXIgY3JpdGljYWwgcGVhayBidXJzdCBsb2Fkcy4nLFxuICAgIHJlYXNvbmluZzpcbiAgICAgICdFeHBsaWNpdGx5IGNhbGN1bGF0ZXMgdGhlIHBlcmNlbnRhZ2UgZ3Jvd3RoICgrNzE2JSkgd2hpY2ggZHJhd3MgcmVjcnVpdGVyc+KAmSBleWVzIGRpcmVjdGx5IHRvIHRoZSBidXNpbmVzcyBhbmQgYXJjaGl0ZWN0dXJhbCB3aW4uJyxcbiAgICBtZXRyaWNJbXBhY3Q6ICcrNiBTeXN0ZW0gU2NhbGUgVmlzaWJpbGl0eScsXG4gICAgc3RhdHVzOiAncGVuZGluZycsXG4gIH0sXG5dO1xuXG4vLyBSaWNoLCBhY2N1cmF0ZSBxdWVzdGlvbiBiYW5rIGZvciB0aGUgMTEgc3VwcG9ydGVkIHNraWxsc1xuZXhwb3J0IGNvbnN0IFNLSUxMX0FTU0VTU01FTlRfUVVFU1RJT05TOiBSZWNvcmQ8U3VwcG9ydGVkU2tpbGwsIEFzc2Vzc21lbnRRdWVzdGlvbltdPiA9IHtcbiAgUHl0aG9uOiBbXG4gICAge1xuICAgICAgaWQ6ICdweV8wMScsXG4gICAgICBza2lsbDogJ1B5dGhvbicsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcHJpbWFyeSByb2xlIG9mIFB5dGhvbuKAmXMgR2xvYmFsIEludGVycHJldGVyIExvY2sgKEdJTCk/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1RvIHNwZWVkIHVwIENQVS1ib3VuZCBtdWx0aXRocmVhZGVkIG9wZXJhdGlvbnMgYWNyb3NzIG11bHRpcGxlIGNvcmVzJyxcbiAgICAgICAgJ1RvIHN5bmNocm9uaXplIGV4ZWN1dGlvbiBvZiB0aHJlYWRzIHNvIG9ubHkgb25lIG5hdGl2ZSB0aHJlYWQgcnVucyBQeXRob24gYnl0ZWNvZGUgYXQgYSB0aW1lJyxcbiAgICAgICAgJ1RvIHByZXZlbnQgbWVtb3J5IGxlYWtzIGJ5IGxvY2tpbmcgZ2FyYmFnZSBjb2xsZWN0aW9uIGR1cmluZyBJL08gb3BlcmF0aW9ucycsXG4gICAgICAgICdUbyBlbmZvcmNlIHN0cm9uZyB0eXBpbmcgYWNyb3NzIGR5bmFtaWMgb2JqZWN0IGFzc2lnbm1lbnRzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1RoZSBHSUwgaXMgYSBtdXRleCB0aGF0IHByb3RlY3RzIGFjY2VzcyB0byBQeXRob24gb2JqZWN0cywgcHJldmVudGluZyBtdWx0aXBsZSB0aHJlYWRzIGZyb20gZXhlY3V0aW5nIFB5dGhvbiBieXRlY29kZXMgc2ltdWx0YW5lb3VzbHkgaW4gQ1B5dGhvbi4nLFxuICAgICAgdG9waWM6ICdDb25jdXJyZW5jeSAmIEludGVybmFscycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3B5XzAyJyxcbiAgICAgIHNraWxsOiAnUHl0aG9uJyxcbiAgICAgIHR5cGU6ICdjb2RlLW91dHB1dCcsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgd2lsbCBiZSB0aGUgb3V0cHV0IG9mIHRoZSBmb2xsb3dpbmcgY29kZSBzbmlwcGV0PycsXG4gICAgICBjb2RlU25pcHBldDogYGRlZiBmdW5jKGEsIGI9W10pOlxcbiAgICBiLmFwcGVuZChhKVxcbiAgICByZXR1cm4gYlxcblxcbnByaW50KGZ1bmMoMSkpXFxucHJpbnQoZnVuYygyKSlgLFxuICAgICAgb3B0aW9uczogWydbMV0gYW5kIFsyXScsICdbMV0gYW5kIFsxLCAyXScsICdbMV0gYW5kIFtdJywgJ1R5cGVFcnJvcjogbXV0YWJsZSBkZWZhdWx0IGFyZ3VtZW50J10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0RlZmF1bHQgcGFyYW1ldGVyIHZhbHVlcyBhcmUgZXZhbHVhdGVkIG9uY2Ugd2hlbiB0aGUgZnVuY3Rpb24gZGVmaW5pdGlvbiBpcyBleGVjdXRlZCwgc28gdGhlIHNhbWUgbXV0YWJsZSBsaXN0IGBiYCBpcyByZXVzZWQgYWNyb3NzIHN1Y2Nlc3NpdmUgaW52b2NhdGlvbnMuJyxcbiAgICAgIHRvcGljOiAnRnVuY3Rpb25zICYgTXV0YWJsZSBEZWZhdWx0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3B5XzAzJyxcbiAgICAgIHNraWxsOiAnUHl0aG9uJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaHkgZG9lcyB0aGUgZm9sbG93aW5nIGRpY3Rpb25hcnkgY29tcHJlaGVuc2lvbiBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yPycsXG4gICAgICBjb2RlU25pcHBldDogYGtleXMgPSBbJ2EnLCAnYicsICdjJ11cXG5mdW5jcyA9IFtsYW1iZGE6IGsgZm9yIGsgaW4ga2V5c11cXG5wcmludChbZigpIGZvciBmIGluIGZ1bmNzXSlgLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnU3ludGF4RXJyb3I6IGxhbWJkYSBjYW5ub3QgYmUgdXNlZCBpbiBsaXN0IGNvbXByZWhlbnNpb25zJyxcbiAgICAgICAgJ0FsbCBsYW1iZGFzIHJldHVybiBcImNcIiBkdWUgdG8gbGF0ZS1iaW5kaW5nIGNsb3N1cmVzIG92ZXIgdGhlIGxvb3AgdmFyaWFibGUgYGtgJyxcbiAgICAgICAgJ0l0IG91dHB1dHMgW05vbmUsIE5vbmUsIE5vbmVdJyxcbiAgICAgICAgJ0l0IHJhaXNlcyBhIE5hbWVFcnJvciBiZWNhdXNlIGBrYCBpcyBvdXQgb2Ygc2NvcGUnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMSxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnUHl0aG9uIGNsb3N1cmVzIGJpbmQgdmFyaWFibGVzIGJ5IHJlZmVyZW5jZSByYXRoZXIgdGhhbiB2YWx1ZTsgYnkgdGhlIHRpbWUgdGhlIGxhbWJkYXMgYXJlIGNhbGxlZCwgYGtgIGhhcyBpdHMgZmluYWwgdmFsdWUgb2YgXCJjXCIuIFRvIGZpeCwgdXNlIGBsYW1iZGEgaz1rOiBrYC4nLFxuICAgICAgdG9waWM6ICdDbG9zdXJlcyAmIFNjb3BlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3B5XzA0JyxcbiAgICAgIHNraWxsOiAnUHl0aG9uJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSB0aW1lIGNvbXBsZXhpdHkgb2YgY2hlY2tpbmcgbWVtYmVyc2hpcCAoYHggaW4gY29sbGVjdGlvbmApIGZvciBhIHNldCB2cyBhIGxpc3QgaW4gUHl0aG9uIChhdmVyYWdlIGNhc2UpPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdTZXQ6IE8oMSksIExpc3Q6IE8obiknLFxuICAgICAgICAnU2V0OiBPKG4pLCBMaXN0OiBPKDEpJyxcbiAgICAgICAgJ1NldDogTyhsb2cgbiksIExpc3Q6IE8obiknLFxuICAgICAgICAnU2V0OiBPKDEpLCBMaXN0OiBPKGxvZyBuKScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdQeXRob24gc2V0cyBhcmUgaW1wbGVtZW50ZWQgdmlhIGhhc2ggdGFibGVzLCBnaXZpbmcgYXZlcmFnZSBPKDEpIGxvb2t1cCwgd2hlcmVhcyBsaXN0cyByZXF1aXJlIGxpbmVhciBzY2FucyBvZiBPKG4pLicsXG4gICAgICB0b3BpYzogJ0RhdGEgU3RydWN0dXJlcyAmIENvbXBsZXhpdHknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdweV8wNScsXG4gICAgICBza2lsbDogJ1B5dGhvbicsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIGJ1aWx0LWluIG1lY2hhbmlzbSBzaG91bGQgYmUgdXNlZCB0byBpbXBsZW1lbnQgYSBtZW1vcnktZWZmaWNpZW50IGdlbmVyYXRvciB0aGF0IHlpZWxkcyB2YWx1ZXMgb24gZGVtYW5kPycsXG4gICAgICBjb2RlU25pcHBldDogYGRlZiBzdHJlYW1fcmVjb3JkcyhkYXRhKTpcXG4gICAgZm9yIHJlY29yZCBpbiBkYXRhOlxcbiAgICAgICAgIyB3aGljaCBzdGF0ZW1lbnQgZ29lcyBoZXJlP1xcbiAgICAgICAgPz8/YCxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ3JldHVybiByZWNvcmQnLFxuICAgICAgICAneWllbGQgcmVjb3JkJyxcbiAgICAgICAgJ2VtaXQgcmVjb3JkJyxcbiAgICAgICAgJ2FzeW5jLnNlbmQocmVjb3JkKScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdUaGUgYHlpZWxkYCBrZXl3b3JkIHR1cm5zIGEgbm9ybWFsIGZ1bmN0aW9uIGludG8gYSBnZW5lcmF0b3IgaXRlcmF0b3IsIHlpZWxkaW5nIG9uZSB2YWx1ZSBhdCBhIHRpbWUgd2l0aG91dCBsb2FkaW5nIGVudGlyZSBzZXF1ZW5jZXMgaW50byBtZW1vcnkuJyxcbiAgICAgIHRvcGljOiAnR2VuZXJhdG9ycyAmIEl0ZXJhdG9ycycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3B5XzA2JyxcbiAgICAgIHNraWxsOiAnUHl0aG9uJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYF9faW5pdF9fYCBhbmQgYF9fbmV3X19gIGluIFB5dGhvbiBjbGFzc2VzPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdgX19pbml0X19gIGFsbG9jYXRlcyB0aGUgbWVtb3J5IHdoaWxlIGBfX25ld19fYCBpbml0aWFsaXplcyBwcm9wZXJ0aWVzJyxcbiAgICAgICAgJ2BfX25ld19fYCBpcyB0aGUgc3RhdGljIGNvbnN0cnVjdG9yIHRoYXQgY3JlYXRlcyBhbmQgcmV0dXJucyB0aGUgb2JqZWN0IGluc3RhbmNlLCB3aGlsZSBgX19pbml0X19gIGluaXRpYWxpemVzIGl0JyxcbiAgICAgICAgJ2BfX2luaXRfX2AgaXMgb25seSBjYWxsZWQgZm9yIHN1YmNsYXNzZXMsIHdoaWxlIGBfX25ld19fYCBpcyBjYWxsZWQgZm9yIGJhc2UgY2xhc3NlcycsXG4gICAgICAgICdUaGVyZSBpcyBubyBkaWZmZXJlbmNlOyB0aGV5IGFyZSBhbGlhc2VzIGZvciB0aGUgc2FtZSBkdW5kZXIgbWV0aG9kJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BfX25ld19fYCBpcyBjYWxsZWQgZmlyc3QgdG8gaW5zdGFudGlhdGUgdGhlIGNsYXNzIG9iamVjdCBhbmQgcmV0dXJucyB0aGUgaW5zdGFuY2UsIHdoaWNoIGlzIHRoZW4gcGFzc2VkIHRvIGBfX2luaXRfX2AgZm9yIGZpZWxkIGFzc2lnbm1lbnQuJyxcbiAgICAgIHRvcGljOiAnT09QICYgRHVuZGVyIE1ldGhvZHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdweV8wNycsXG4gICAgICBza2lsbDogJ1B5dGhvbicsXG4gICAgICB0eXBlOiAnY29kZS1vdXRwdXQnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGRvZXMgdGhlIGZvbGxvd2luZyBzbGljZSBvcGVyYXRpb24gcmV0dXJuPycsXG4gICAgICBjb2RlU25pcHBldDogYG51bXMgPSBbMTAsIDIwLCAzMCwgNDAsIDUwXVxcbnByaW50KG51bXNbOjotMl0pYCxcbiAgICAgIG9wdGlvbnM6IFsnWzUwLCAzMCwgMTBdJywgJ1sxMCwgMzAsIDUwXScsICdbNDAsIDIwXScsICdbNTAsIDQwLCAzMF0nXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnQSBuZWdhdGl2ZSBzdGVwIG9mIC0yIHRyYXZlcnNlcyB0aGUgbGlzdCBpbiByZXZlcnNlIHN0YXJ0aW5nIGZyb20gdGhlIGxhc3QgaXRlbSwgc2tpcHBpbmcgZXZlcnkgb3RoZXIgZWxlbWVudDogNTAsIDMwLCAxMC4nLFxuICAgICAgdG9waWM6ICdTbGljaW5nICYgU2VxdWVuY2VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncHlfMDgnLFxuICAgICAgc2tpbGw6ICdQeXRob24nLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ0hvdyBkb2VzIFB5dGhvbiBoYW5kbGUgbWVtb3J5IG1hbmFnZW1lbnQgZm9yIHNtYWxsIGludGVnZXJzICgtNSB0byAyNTYpPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUaGV5IGFyZSBnYXJiYWdlLWNvbGxlY3RlZCBpbW1lZGlhdGVseSB1cG9uIGxlYXZpbmcgc2NvcGUnLFxuICAgICAgICAnVGhleSBhcmUgcHJlLWFsbG9jYXRlZCBhbmQgaW50ZXJuZWQgKHNpbmdsZXRvbiBjYWNoZSkgaW4gQ1B5dGhvbiBmb3IgcGVyZm9ybWFuY2UnLFxuICAgICAgICAnVGhleSBhcmUgc3RvcmVkIGRpcmVjdGx5IG9uIHRoZSBleGVjdXRpb24gc3RhY2sgd2l0aG91dCBoZWFwIGFsbG9jYXRpb24nLFxuICAgICAgICAnVGhleSByZXF1aXJlIGV4cGxpY2l0IHBvaW50ZXIgZGVhbGxvY2F0aW9uJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0NQeXRob24gbWFpbnRhaW5zIGFuIGludGVybmFsIGNhY2hlIGFycmF5IG9mIGludGVnZXIgb2JqZWN0cyBmb3IgdmFsdWVzIGJldHdlZW4gLTUgYW5kIDI1NjsgYW55IHJlZmVyZW5jZSB0byB0aGVzZSBudW1iZXJzIHBvaW50cyB0byBpZGVudGljYWwgbWVtb3J5IGFkZHJlc3Nlcy4nLFxuICAgICAgdG9waWM6ICdNZW1vcnkgTWFuYWdlbWVudCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3B5XzA5JyxcbiAgICAgIHNraWxsOiAnUHl0aG9uJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdIb3cgc2hvdWxkIHlvdSBzYWZlbHkgbWFuYWdlIGZpbGUgcmVzb3VyY2UgY2xvc3VyZSBldmVuIGluIHRoZSBldmVudCBvZiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uPycsXG4gICAgICBjb2RlU25pcHBldDogYCMgV2hpY2ggcGF0dGVybiBndWFyYW50ZWVzIGYuY2xvc2UoKSBpcyBjYWxsZWQ/XFxud2l0aCBvcGVuKFwiZGF0YS50eHRcIiwgXCJyXCIpIGFzIGY6XFxuICAgIGRhdGEgPSBmLnJlYWQoKWAsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUaGUgYHdpdGhgIHN0YXRlbWVudCB1dGlsaXplcyB0aGUgQ29udGV4dCBNYW5hZ2VyIHByb3RvY29sIChgX19lbnRlcl9fYCBhbmQgYF9fZXhpdF9fYCknLFxuICAgICAgICAnWW91IG11c3QgbWFudWFsbHkgd3JpdGUgYGYuY2xvc2UoKWAgaW5zaWRlIHRoZSBibG9jaycsXG4gICAgICAgICdQeXRob24gZmlsZXMgYXV0by1jbG9zZSB2aWEgdGhlIGdhcmJhZ2UgY29sbGVjdG9yIGV2ZXJ5IDEwbXMnLFxuICAgICAgICAnT25seSBgdHJ5L2NhdGNoYCB3aXRob3V0IGBmaW5hbGx5YCBjYW4gY2xvc2UgZmlsZXMnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnVGhlIGB3aXRoYCBzdGF0ZW1lbnQgY2FsbHMgYF9fZXhpdF9fYCB1cG9uIGxlYXZpbmcgdGhlIGJsb2NrIHJlZ2FyZGxlc3Mgb2Ygd2hldGhlciBleGNlcHRpb25zIG9jY3VycmVkLCBlbnN1cmluZyByZWxpYWJsZSByZXNvdXJjZSByZWxlYXNlLicsXG4gICAgICB0b3BpYzogJ0NvbnRleHQgTWFuYWdlcnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdweV8xMCcsXG4gICAgICBza2lsbDogJ1B5dGhvbicsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ0luIGBkYXRhY2xhc3Nlc2AsIHdoYXQgZGVjb3JhdG9yIGFyZ3VtZW50IHByZXZlbnRzIGluc3RhbmNlIGF0dHJpYnV0ZSBtb2RpZmljYXRpb24gYWZ0ZXIgY3JlYXRpb24/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0BkYXRhY2xhc3MoaW1tdXRhYmxlPVRydWUpJyxcbiAgICAgICAgJ0BkYXRhY2xhc3MoZnJvemVuPVRydWUpJyxcbiAgICAgICAgJ0BkYXRhY2xhc3MocmVhZG9ubHk9VHJ1ZSknLFxuICAgICAgICAnQGRhdGFjbGFzcyhjb25zdD1UcnVlKScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgQGRhdGFjbGFzcyhmcm96ZW49VHJ1ZSlgIGVtdWxhdGVzIHJlYWQtb25seSBmcm96ZW4gaW5zdGFuY2VzIGJ5IGludGVyY2VwdGluZyBgX19zZXRhdHRyX19gIGFuZCBgX19kZWxhdHRyX19gLicsXG4gICAgICB0b3BpYzogJ01vZGVybiBTdGFuZGFyZCBMaWJyYXJ5JyxcbiAgICB9LFxuICBdLFxuICBSZWFjdDogW1xuICAgIHtcbiAgICAgIGlkOiAncmNfMDEnLFxuICAgICAgc2tpbGw6ICdSZWFjdCcsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcHJpbWFyeSBiZW5lZml0IG9mIFJlYWN04oCZcyBWaXJ0dWFsIERPTSByZWNvbmNpbGlhdGlvbiBhbGdvcml0aG0/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0l0IGNvbXBsZXRlbHkgcmVwbGFjZXMgdGhlIGJyb3dzZXIgbGF5b3V0IGVuZ2luZScsXG4gICAgICAgICdJdCBjb21wdXRlcyBtaW5pbWFsIGRpZmZzIGJldHdlZW4gdmlydHVhbCB0cmVlcyB0byBiYXRjaCBhbmQgbWluaW1pemUgY29zdGx5IG5hdGl2ZSBET00gbWFuaXB1bGF0aW9ucycsXG4gICAgICAgICdJdCBjb21waWxlcyBKU1ggaW50byBtYWNoaW5lIGJ5dGVjb2RlIGF0IHJ1bnRpbWUnLFxuICAgICAgICAnSXQgZWxpbWluYXRlcyB0aGUgbmVlZCBmb3IgQ1NTIHJlbmRlcmluZycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdSZWNvbmNpbGlhdGlvbiBjb21wdXRlcyBkaWZmZXJlbmNlIGhldXJpc3RpY3MgYmV0d2VlbiBuZXcgYW5kIG9sZCBWaXJ0dWFsIERPTSByZXByZXNlbnRhdGlvbnMgdG8gYXBwbHkgdGFyZ2V0ZWQgcGF0Y2hlcyB0byByZWFsIERPTSBub2Rlcy4nLFxuICAgICAgdG9waWM6ICdSZWNvbmNpbGlhdGlvbiAmIEFyY2hpdGVjdHVyZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3JjXzAyJyxcbiAgICAgIHNraWxsOiAnUmVhY3QnLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiAnSW4gUmVhY3QgMTgvMTksIGhvdyBhcmUgbXVsdGlwbGUgc3RhdGUgc2V0dGVycyB3aXRoaW4gdGhlIHNhbWUgZXZlbnQgaGFuZGxlciBwcm9jZXNzZWQ/JyxcbiAgICAgIGNvZGVTbmlwcGV0OiBgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XFxuICBzZXRDb3VudChjID0+IGMgKyAxKTtcXG4gIHNldEZsYWcoZiA9PiAhZik7XFxufWAsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUaGV5IHRyaWdnZXIgdHdvIHNlcGFyYXRlIHNlcXVlbnRpYWwgcmUtcmVuZGVycycsXG4gICAgICAgICdUaGV5IGFyZSBhdXRvbWF0aWNhbGx5IGJhdGNoZWQgaW50byBhIHNpbmdsZSB1bmlmaWVkIHJlLXJlbmRlcicsXG4gICAgICAgICdPbmx5IHRoZSBsYXN0IHNldHRlciBleGVjdXRlcycsXG4gICAgICAgICdBbiBpbmZpbml0ZSByZS1yZW5kZXIgbG9vcCBpcyB0cmlnZ2VyZWQnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMSxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnUmVhY3QgMTgrIHByb3ZpZGVzIGF1dG9tYXRpYyBiYXRjaGluZyBmb3IgYWxsIHVwZGF0ZXMgaW5zaWRlIHRpbWVvdXRzLCBwcm9taXNlcywgYW5kIG5hdGl2ZSBldmVudCBoYW5kbGVycyBpbnRvIGEgc2luZ2xlIHJlLXJlbmRlci4nLFxuICAgICAgdG9waWM6ICdCYXRjaGluZyAmIFBlcmZvcm1hbmNlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmNfMDMnLFxuICAgICAgc2tpbGw6ICdSZWFjdCcsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2h5IGRvZXMgcGFzc2luZyBhbiBpbmxpbmUgb2JqZWN0IHRvIGEgbWVtb2l6ZWQgY2hpbGQgY29tcG9uZW50IGRlZmVhdCBgUmVhY3QubWVtb2A/JyxcbiAgICAgIGNvZGVTbmlwcGV0OiBgPE1lbW9pemVkQ2hpbGQgY29uZmlnPXt7IHRoZW1lOiBcImRhcmtcIiB9fSAvPmAsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdSZWFjdC5tZW1vIG9ubHkgd29ya3Mgd2l0aCBzdHJpbmcgcHJvcHMnLFxuICAgICAgICAnT2JqZWN0IGlkZW50aXR5IGNvbXBhcmlzb24gKGA9PT1gKSBjcmVhdGVzIGEgbmV3IHJlZmVyZW5jZSBvbiBldmVyeSBwYXJlbnQgcmVuZGVyJyxcbiAgICAgICAgJ01lbW9pemVkQ2hpbGQgcmVxdWlyZXMgYHVzZU1lbW9gIG9uIHRoZSBjaGlsZCBpdHNlbGYnLFxuICAgICAgICAnSW5saW5lIG9iamVjdHMgY2F1c2Ugc3ludGF4IGNvbXBpbGF0aW9uIGVycm9ycyBpbiBOZXh0LmpzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0J5IGRlZmF1bHQgYFJlYWN0Lm1lbW9gIHBlcmZvcm1zIHNoYWxsb3cgZXF1YWxpdHkgKGBPYmplY3QuaXNgKS4gQSBuZXcgb2JqZWN0IGxpdGVyYWwgYHsgdGhlbWU6IFwiZGFya1wiIH1gIGlzIGFsbG9jYXRlZCBvbiBldmVyeSBwYXJlbnQgcmVuZGVyLCByZXN1bHRpbmcgaW4gYG9sZFByb3BzLmNvbmZpZyAhPT0gbmV3UHJvcHMuY29uZmlnYC4nLFxuICAgICAgdG9waWM6ICdNZW1vaXphdGlvbiAmIFJlbmRlcmluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3JjXzA0JyxcbiAgICAgIHNraWxsOiAnUmVhY3QnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIGNvcnJlY3QgcHVycG9zZSBvZiBgdXNlSWRgIGluIFJlYWN0PycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUbyBnZW5lcmF0ZSBjcnlwdG9ncmFwaGljIHNlc3Npb24gdG9rZW5zJyxcbiAgICAgICAgJ1RvIGdlbmVyYXRlIHVuaXF1ZSwgc3RhYmxlIElEcyBmb3IgYWNjZXNzaWJpbGl0eSBhdHRyaWJ1dGVzIGFjcm9zcyBTU1IgYW5kIGh5ZHJhdGlvbicsXG4gICAgICAgICdUbyB0cmFjayBjb21wb25lbnQgcmUtcmVuZGVyIGNvdW50cyBpbiBkZXYgbW9kZScsXG4gICAgICAgICdUbyBhc3NpZ24gZGF0YWJhc2UgcHJpbWFyeSBrZXlzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2B1c2VJZGAgZ2VuZXJhdGVzIHVuaXF1ZSBJRHMgdGhhdCBhcmUgc3RhYmxlIGFjcm9zcyBzZXJ2ZXIgcmVuZGVyaW5nIGFuZCBjbGllbnQgaHlkcmF0aW9uLCBhdm9pZGluZyBoeWRyYXRpb24gbWlzbWF0Y2ggd2FybmluZ3MuJyxcbiAgICAgIHRvcGljOiAnSG9va3MgJiBBY2Nlc3NpYmlsaXR5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmNfMDUnLFxuICAgICAgc2tpbGw6ICdSZWFjdCcsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIGhvb2sgc2hvdWxkIHlvdSB1c2UgdG8gc3RvcmUgYSBtdXRhYmxlIHZhbHVlIHRoYXQgcGVyc2lzdHMgYWNyb3NzIHJlbmRlcnMgd2l0aG91dCB0cmlnZ2VyaW5nIGEgcmUtcmVuZGVyIHdoZW4gbXV0YXRlZD8nLFxuICAgICAgb3B0aW9uczogWyd1c2VTdGF0ZScsICd1c2VSZWYnLCAndXNlTWVtbycsICd1c2VDYWxsYmFjayddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgdXNlUmVmYCByZXR1cm5zIGEgbXV0YWJsZSBvYmplY3Qgd2hvc2UgYC5jdXJyZW50YCBwcm9wZXJ0eSBjYW4gYmUgbW9kaWZpZWQgd2l0aG91dCBjYXVzaW5nIFJlYWN0IHRvIHRyaWdnZXIgYSBjb21wb25lbnQgcmUtcmVuZGVyLicsXG4gICAgICB0b3BpYzogJ0hvb2tzICYgUmVmcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3JjXzA2JyxcbiAgICAgIHNraWxsOiAnUmVhY3QnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIHJvbGUgb2YgYGtleWAgcHJvcHMgd2hlbiByZW5kZXJpbmcgbGlzdHMgaW4gUmVhY3Q/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0tleXMgYXJlIHBhc3NlZCBkaXJlY3RseSBpbnRvIGNoaWxkcmVuIHByb3BzIGFzIGFuIGludGVnZXIgaW5kZXgnLFxuICAgICAgICAnS2V5cyBwcm92aWRlIGlkZW50aXR5IHNvIFJlYWN0IGtub3dzIHdoaWNoIGxpc3QgaXRlbXMgd2VyZSBhZGRlZCwgcmVtb3ZlZCwgb3IgcmVvcmRlcmVkIGFjcm9zcyByZW5kZXJzJyxcbiAgICAgICAgJ0tleXMgZW5hYmxlIENTUyBncmlkIGFuaW1hdGlvbiBhY2NlbGVyYXRpb24nLFxuICAgICAgICAnS2V5cyBhcmUgbWFuZGF0b3J5IG9ubHkgZm9yIFNWRyBlbGVtZW50cycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdLZXlzIGdpdmUgZWxlbWVudHMgYSBwZXJzaXN0ZW50IGlkZW50aXR5IGFjcm9zcyByZW5kZXJzLCBhbGxvd2luZyBSZWFjdCB0byBtYXRjaCBjaGlsZHJlbiBpbiB0aGUgb3JpZ2luYWwgdHJlZSB3aXRoIGNoaWxkcmVuIGluIHRoZSBzdWJzZXF1ZW50IHRyZWUuJyxcbiAgICAgIHRvcGljOiAnTGlzdHMgJiBLZXlzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmNfMDcnLFxuICAgICAgc2tpbGw6ICdSZWFjdCcsXG4gICAgICB0eXBlOiAnY29kZS1vdXRwdXQnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IHdpbGwgYmUgbG9nZ2VkIHdoZW4gdGhpcyBjb21wb25lbnQgbW91bnRzPycsXG4gICAgICBjb2RlU25pcHBldDogYHVzZUVmZmVjdCgoKSA9PiB7XFxuICBjb25zb2xlLmxvZyhcIkFcIik7XFxuICByZXR1cm4gKCkgPT4gY29uc29sZS5sb2coXCJCXCIpO1xcbn0sIFtdKTtgLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnTG9ncyBcIkFcIiBvbiBtb3VudCwgYW5kIFwiQlwiIG9ubHkgd2hlbiB1bm1vdW50ZWQnLFxuICAgICAgICAnTG9ncyBcIkJcIiBmaXJzdCwgdGhlbiBcIkFcIicsXG4gICAgICAgICdMb2dzIFwiQVwiIGFuZCBcIkJcIiBzaW11bHRhbmVvdXNseScsXG4gICAgICAgICdUaHJvd3MgYW4gZXJyb3IgYmVjYXVzZSBjbGVhbnVwIGNhbm5vdCByZXR1cm4gYSBzdHJpbmcnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnVGhlIGVmZmVjdCBib2R5IHJ1bnMgYWZ0ZXIgdGhlIGNvbXBvbmVudCByZW5kZXJzIGFuZCBtb3VudHMgKFwiQVwiKSwgYW5kIHRoZSBjbGVhbnVwIGNhbGxiYWNrIChcIkJcIikgaXMgaW52b2tlZCB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHMuJyxcbiAgICAgIHRvcGljOiAnTGlmZWN5Y2xlICYgdXNlRWZmZWN0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmNfMDgnLFxuICAgICAgc2tpbGw6ICdSZWFjdCcsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB3cm9uZyB3aXRoIG1vZGlmeWluZyBzdGF0ZSBkaXJlY3RseSBsaWtlIGBzdGF0ZS5jb3VudCA9IDVgIGluIFJlYWN0PycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdSZWFjdCB3aWxsIHRocm93IGEgcnVudGltZSBSZWFkT25seSBlcnJvcicsXG4gICAgICAgICdSZWFjdCB3aWxsIG5vdCBkZXRlY3QgdGhlIGNoYW5nZSBiZWNhdXNlIHN0YXRlIHNldHRlcnMgYXJlIHJlcXVpcmVkIHRvIHNjaGVkdWxlIHJlY29uY2lsaWF0aW9uJyxcbiAgICAgICAgJ0RpcmVjdCBtdXRhdGlvbnMgY2F1c2UgYnJvd3NlciBtZW1vcnkgbGVha3MnLFxuICAgICAgICAnRGlyZWN0IG11dGF0aW9ucyBhcmUgYWN0dWFsbHkgcmVjb21tZW5kZWQgaW4gbW9kZXJuIFJlYWN0JyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1JlYWN0IHJlbGllcyBvbiBzdGF0ZSB1cGRhdGUgZGlzcGF0Y2hlcnMgdG8ga25vdyB0aGF0IHN0YXRlIGhhcyBjaGFuZ2VkIGFuZCB0byB0cmlnZ2VyIHJlLXJlbmRlcmluZzsgbXV0YXRpbmcgc3RhdGUgZGlyZWN0bHkgYnlwYXNzZXMgdGhlIHNjaGVkdWxlci4nLFxuICAgICAgdG9waWM6ICdJbW11dGFiaWxpdHkgJiBTdGF0ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3JjXzA5JyxcbiAgICAgIHNraWxsOiAnUmVhY3QnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZG9lcyBgdXNlQ2FsbGJhY2soZm4sIGRlcHMpYCByZXR1cm4/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1RoZSBjYWNoZWQgcmV0dXJuIHZhbHVlIG9mIGV4ZWN1dGluZyBgZm5gJyxcbiAgICAgICAgJ0EgbWVtb2l6ZWQgdmVyc2lvbiBvZiB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBvbmx5IGNoYW5nZXMgaWYgZGVwZW5kZW5jaWVzIGNoYW5nZScsXG4gICAgICAgICdBIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGBmbmAgY29tcGxldGVzJyxcbiAgICAgICAgJ0EgY2xlYW51cCBzdWJzY3JpcHRpb24gb2JqZWN0JyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDEsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2B1c2VDYWxsYmFja2AgY2FjaGVzIGEgZnVuY3Rpb24gZGVmaW5pdGlvbiBiZXR3ZWVuIHJlbmRlcnMgc28gY2hpbGQgY29tcG9uZW50cyB0aGF0IHJlY2VpdmUgaXQgZG8gbm90IHJlLXJlbmRlciB1bm5lY2Vzc2FyaWx5LicsXG4gICAgICB0b3BpYzogJ0hvb2tzICYgT3B0aW1pemF0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAncmNfMTAnLFxuICAgICAgc2tpbGw6ICdSZWFjdCcsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIGJvdW5kYXJ5IGNvbXBvbmVudCBjYXRjaGVzIEphdmFTY3JpcHQgZXJyb3JzIGFueXdoZXJlIGluIHRoZWlyIGNoaWxkIGNvbXBvbmVudCB0cmVlIGFuZCBkaXNwbGF5cyBhIGZhbGxiYWNrIFVJPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICc8RXJyb3JCb3VuZGFyeT4nLFxuICAgICAgICAnPFN1c3BlbnNlPicsXG4gICAgICAgICc8U3RyaWN0TW9kZT4nLFxuICAgICAgICAnPFByb3ZpZGVyPicsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdFcnJvciBib3VuZGFyaWVzIGFyZSBSZWFjdCBjb21wb25lbnRzIHRoYXQgY2F0Y2ggSmF2YVNjcmlwdCBlcnJvcnMgYW55d2hlcmUgaW4gdGhlaXIgY2hpbGQgY29tcG9uZW50IHRyZWUsIGxvZyB0aG9zZSBlcnJvcnMsIGFuZCBkaXNwbGF5IGEgZmFsbGJhY2sgVUkuJyxcbiAgICAgIHRvcGljOiAnRXJyb3IgSGFuZGxpbmcnLFxuICAgIH0sXG4gIF0sXG4gIFNRTDogW1xuICAgIHtcbiAgICAgIGlkOiAnc3FsXzAxJyxcbiAgICAgIHNraWxsOiAnU1FMJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBmdW5kYW1lbnRhbCBkaWZmZXJlbmNlIGJldHdlZW4gYFdIRVJFYCBhbmQgYEhBVklOR2AgY2xhdXNlcyBpbiBTUUw/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ2BXSEVSRWAgZmlsdGVycyByb3dzIGJlZm9yZSBhZ2dyZWdhdGlvbiwgd2hpbGUgYEhBVklOR2AgZmlsdGVycyBhZ2dyZWdhdGVkIGdyb3VwcyBhZnRlciBgR1JPVVAgQllgJyxcbiAgICAgICAgJ2BIQVZJTkdgIGZpbHRlcnMgc2luZ2xlIHJvd3Mgd2hpbGUgYFdIRVJFYCBmaWx0ZXJzIHRhYmxlcycsXG4gICAgICAgICdgV0hFUkVgIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBudW1lcmljIGRhdGF0eXBlcycsXG4gICAgICAgICdUaGVyZSBpcyBubyBkaWZmZXJlbmNlOyB0aGV5IGFyZSBpbnRlcmNoYW5nZWFibGUga2V5d29yZHMnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYFdIRVJFYCBmaWx0ZXJzIGluZGl2aWR1YWwgcmVjb3JkcyBiZWZvcmUgYWdncmVnYXRpb24gZnVuY3Rpb25zIChgQ09VTlRgLCBgU1VNYCwgYEFWR2ApIGFyZSBleGVjdXRlZC4gYEhBVklOR2AgZmlsdGVycyBncm91cCByb3dzIHByb2R1Y2VkIGJ5IGBHUk9VUCBCWWAuJyxcbiAgICAgIHRvcGljOiAnRmlsdGVyaW5nICYgQWdncmVnYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcWxfMDInLFxuICAgICAgc2tpbGw6ICdTUUwnLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBkb2VzIGBTRUxFQ1QgQ09VTlQoMSlgIHZzIGBTRUxFQ1QgQ09VTlQoY29sdW1uX25hbWUpYCByZXR1cm4gaWYgc29tZSByb3dzIGhhdmUgTlVMTCBpbiB0aGF0IGNvbHVtbj8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQm90aCByZXR1cm4gdGhlIGV4YWN0IHNhbWUgY291bnQnLFxuICAgICAgICAnYENPVU5UKDEpYCBjb3VudHMgYWxsIHJvd3MgaW5jbHVkaW5nIE5VTExzLCB3aGlsZSBgQ09VTlQoY29sdW1uX25hbWUpYCBpZ25vcmVzIE5VTEwgdmFsdWVzJyxcbiAgICAgICAgJ2BDT1VOVChjb2x1bW5fbmFtZSlgIHRocm93cyBhbiBleGNlcHRpb24gb24gTlVMTCB2YWx1ZXMnLFxuICAgICAgICAnYENPVU5UKDEpYCBvbmx5IGNvdW50cyByb3dzIHdoZXJlIGNvbHVtbiBlcXVhbHMgMScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgQ09VTlQoKilgIGFuZCBgQ09VTlQoMSlgIGNvdW50IGFsbCByZXR1cm5lZCByb3dzIHJlZ2FyZGxlc3Mgb2YgY29udGVudCwgd2hlcmVhcyBgQ09VTlQoY29sdW1uKWAgc3BlY2lmaWNhbGx5IGNvdW50cyBub24tbnVsbCBvY2N1cnJlbmNlcyBvZiB0aGF0IGNvbHVtbi4nLFxuICAgICAgdG9waWM6ICdBZ2dyZWdhdGVzICYgTnVsbCBIYW5kbGluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NxbF8wMycsXG4gICAgICBza2lsbDogJ1NRTCcsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2h5IGRvZXMgYFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgc3RhdHVzICE9IFwiYWN0aXZlXCJgIGV4Y2x1ZGUgdXNlcnMgd2hlcmUgYHN0YXR1cyBJUyBOVUxMYD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnSW4gdGhyZWUtdmFsdWVkIGxvZ2ljICgzVkwpLCBjb21wYXJpc29ucyB3aXRoIE5VTEwgZXZhbHVhdGUgdG8gVU5LTk9XTiwgd2hpY2ggcmVzb2x2ZXMgdG8gRkFMU0UgaW4gV0hFUkUgZmlsdGVycycsXG4gICAgICAgICdTUUwgYXV0b21hdGljYWxseSBjb252ZXJ0cyBOVUxMIHRvIGVtcHR5IHN0cmluZycsXG4gICAgICAgICdJdCBpcyBhIGJ1ZyBpbiB0aGUgcXVlcnkgcGxhbm5lcicsXG4gICAgICAgICdUaGUgcXVlcnkgaXMgc3ludGFjdGljYWxseSBpbnZhbGlkIGJlY2F1c2UgcXVvdGVzIG11c3QgYmUgc2luZ2xlIHF1b3RlcycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdTUUwgdXNlcyBUaHJlZS1WYWx1ZWQgTG9naWMgKFRSVUUsIEZBTFNFLCBVTktOT1dOKS4gTlVMTCAhPSBcImFjdGl2ZVwiIGlzIFVOS05PV04sIGFuZCBXSEVSRSBjbGF1c2VzIG9ubHkgcmV0YWluIHJvd3MgZXZhbHVhdGluZyBzdHJpY3RseSB0byBUUlVFLiBUbyBpbmNsdWRlIHRoZW0sIHdyaXRlIGBXSEVSRSBzdGF0dXMgIT0gXCJhY3RpdmVcIiBPUiBzdGF0dXMgSVMgTlVMTGAuJyxcbiAgICAgIHRvcGljOiAnVGhyZWUtVmFsdWVkIExvZ2ljICYgTnVsbHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcWxfMDQnLFxuICAgICAgc2tpbGw6ICdTUUwnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIEFDSUQgcHJvcGVydHkgZ3VhcmFudGVlcyB0aGF0IGFsbCBvcGVyYXRpb25zIHdpdGhpbiBhIHRyYW5zYWN0aW9uIHN1Y2NlZWQgb3IgYWxsIHJvbGwgYmFjayBjb21wbGV0ZWx5PycsXG4gICAgICBvcHRpb25zOiBbJ0F0b21pY2l0eScsICdDb25zaXN0ZW5jeScsICdJc29sYXRpb24nLCAnRHVyYWJpbGl0eSddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdBdG9taWNpdHkgZ3VhcmFudGVlcyB0aGF0IGFsbCBzdGF0ZW1lbnRzIGluIGEgdHJhbnNhY3Rpb24gd29yayBhcyBhIHNpbmdsZSBpbmRpdmlzaWJsZSB1bml0OiBlaXRoZXIgYWxsIHN1Y2NlZWQgb3Igbm9uZSBwZXJzaXN0LicsXG4gICAgICB0b3BpYzogJ0FDSUQgUHJvcGVydGllcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NxbF8wNScsXG4gICAgICBza2lsbDogJ1NRTCcsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIHdpbmRvdyBmdW5jdGlvbiBhc3NpZ25zIHNlcXVlbnRpYWwgaW50ZWdlcnMgc3RhcnRpbmcgZnJvbSAxIHRvIGVhY2ggcm93IHdpdGhpbiBhIHBhcnRpdGlvbiwgd2l0aG91dCBza2lwcGluZyBudW1iZXJzIG9uIHRpZXM/JyxcbiAgICAgIG9wdGlvbnM6IFsnUk9XX05VTUJFUigpJywgJ1JBTksoKScsICdERU5TRV9SQU5LKCknLCAnTlRJTEUoKSddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgUk9XX05VTUJFUigpYCBndWFyYW50ZWVzIHVuaXF1ZSBzZXF1ZW50aWFsIGludGVnZXJzICgxLCAyLCAzLi4uKSByZWdhcmRsZXNzIG9mIHRpZXMsIHdoZXJlYXMgYFJBTksoKWAgYW5kIGBERU5TRV9SQU5LKClgIGhhbmRsZSB0aWVzIHNwZWNpYWxseS4nLFxuICAgICAgdG9waWM6ICdXaW5kb3cgRnVuY3Rpb25zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3FsXzA2JyxcbiAgICAgIHNraWxsOiAnU1FMJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IHR5cGUgb2YgaW5kZXggaXMgbW9zdCBlZmZlY3RpdmUgZm9yIHJhbmdlIHF1ZXJpZXMgKGBXSEVSRSBhZ2UgQkVUV0VFTiAyNSBBTkQgMzVgKSBvbiByZWxhdGlvbmFsIGRhdGFiYXNlcz8nLFxuICAgICAgb3B0aW9uczogWydCLVRyZWUgSW5kZXgnLCAnSGFzaCBJbmRleCcsICdGdWxsLVRleHQgSW5kZXgnLCAnQmxvb20gRmlsdGVyJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0ItVHJlZXMga2VlcCBkYXRhIG9yZGVyZWQsIGVuYWJsaW5nIGxvZ2FyaXRobWljIHRpbWUgc2VhcmNoIGZvciByYW5nZXMgYW5kIGJvdW5kYXJ5IHRyYXZlcnNhbHMuIEhhc2ggaW5kZXhlcyBvbmx5IHN1cHBvcnQgZXF1YWxpdHkgKGA9YCkgY2hlY2tzLicsXG4gICAgICB0b3BpYzogJ0luZGV4aW5nICYgUGVyZm9ybWFuY2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdzcWxfMDcnLFxuICAgICAgc2tpbGw6ICdTUUwnLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcmVzdWx0IG9mIGFuIGBJTk5FUiBKT0lOYCB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGluZyBrZXlzIGJldHdlZW4gVGFibGUgQSBhbmQgVGFibGUgQj8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQW4gZW1wdHkgcmVzdWx0IHNldCAoMCByb3dzKScsXG4gICAgICAgICdBbGwgcm93cyBmcm9tIFRhYmxlIEEgd2l0aCBOVUxMcyBmb3IgVGFibGUgQicsXG4gICAgICAgICdBIGZ1bGwgQ2FydGVzaWFuIHByb2R1Y3QnLFxuICAgICAgICAnQW4gU1FMIGV4ZWN1dGlvbiBlcnJvcicsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgSU5ORVIgSk9JTmAgcmV0YWlucyBvbmx5IHJvd3Mgd2hlcmUgdGhlIGpvaW4gcHJlZGljYXRlIGV2YWx1YXRlcyB0byBUUlVFIGZvciBib3RoIHRhYmxlcy4gSWYgbm8gcm93cyBtYXRjaCwgMCByb3dzIGFyZSByZXR1cm5lZC4nLFxuICAgICAgdG9waWM6ICdKb2lucycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NxbF8wOCcsXG4gICAgICBza2lsbDogJ1NRTCcsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBkb2VzIGEgY29tcG9zaXRlIGluZGV4IG9uIGAobGFzdF9uYW1lLCBmaXJzdF9uYW1lKWAgYWxsb3cgdGhlIGRhdGFiYXNlIHRvIG9wdGltaXplPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdRdWVyaWVzIGZpbHRlcmluZyBvbiBgbGFzdF9uYW1lYCBhbG9uZSwgb3IgYm90aCBgbGFzdF9uYW1lYCBBTkQgYGZpcnN0X25hbWVgIChsZWZ0bW9zdCBwcmVmaXggcnVsZSknLFxuICAgICAgICAnUXVlcmllcyBmaWx0ZXJpbmcgb24gYGZpcnN0X25hbWVgIGFsb25lIHdpdGhvdXQgYGxhc3RfbmFtZWAnLFxuICAgICAgICAnT25seSBxdWVyaWVzIHRoYXQgc2VsZWN0IGFsbCBjb2x1bW5zIHZpYSBgKmAnLFxuICAgICAgICAnT25seSB1cGRhdGVzIGFuZCBkZWxldGVzLCBidXQgbm90IHNlbGVjdHMnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnQ29tcG9zaXRlIGluZGV4ZXMgZm9sbG93IHRoZSBMZWZ0bW9zdCBQcmVmaXggUnVsZTogdGhleSBjYW4gYmUgdXNlZCBmb3IgcXVlcmllcyBmaWx0ZXJpbmcgb24gY29sdW1uIDEsIG9yIGNvbHVtbnMgMSsyLCBidXQgY2Fubm90IGJlIHVzZWQgZm9yIGNvbHVtbiAyIGFsb25lLicsXG4gICAgICB0b3BpYzogJ0NvbXBvc2l0ZSBJbmRleGVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnc3FsXzA5JyxcbiAgICAgIHNraWxsOiAnU1FMJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIGEgU1FMIEluamVjdGlvbiB2dWxuZXJhYmlsaXR5LCBhbmQgd2hhdCBpcyB0aGUgcHJpbWFyeSBkZWZlbnNlIGFnYWluc3QgaXQ/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0EgYnVmZmVyIG92ZXJmbG93IGluIHRoZSBxdWVyeSBwYXJzZXI7IGRlZmVuZGVkIGJ5IHJlc3RhcnRpbmcgdGhlIERCJyxcbiAgICAgICAgJ0F0dGFja2VyIG1hbmlwdWxhdGlvbiBvZiBTUUwgc3ludGF4IHZpYSB1bnNhbml0aXplZCBzdHJpbmcgY29uY2F0ZW5hdGlvbjsgZGVmZW5kZWQgYnkgUGFyYW1ldGVyaXplZCBRdWVyaWVzIC8gUHJlcGFyZWQgU3RhdGVtZW50cycsXG4gICAgICAgICdBIGhhcmR3YXJlIGRpc2sgZmFpbHVyZTsgZGVmZW5kZWQgYnkgUkFJRCBtaXJyb3JpbmcnLFxuICAgICAgICAnQSBuZXR3b3JrIHBvcnQgc2NhbjsgZGVmZW5kZWQgYnkgVExTIGNlcnRpZmljYXRlcycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAxLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdTUUwgaW5qZWN0aW9uIG9jY3VycyB3aGVuIHVzZXIgaW5wdXQgaXMgY29uY2F0ZW5hdGVkIGRpcmVjdGx5IGludG8gU1FMIHRleHQuIFBhcmFtZXRlcml6ZWQgcXVlcmllcyBzZW5kIGRhdGEgc2VwYXJhdGVseSBmcm9tIFNRTCBjb2RlLCBwcmV2ZW50aW5nIGlucHV0IGZyb20gYWx0ZXJpbmcgcXVlcnkgc3RydWN0dXJlLicsXG4gICAgICB0b3BpYzogJ1NlY3VyaXR5ICYgUHJlcGFyZWQgU3RhdGVtZW50cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ3NxbF8xMCcsXG4gICAgICBza2lsbDogJ1NRTCcsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIHN5bnRheCBkZWZpbmVzIGEgQ29tbW9uIFRhYmxlIEV4cHJlc3Npb24gKENURSkgaW4gbW9kZXJuIFNRTD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnV0lUSCBjdGVfbmFtZSBBUyAoU0VMRUNUIC4uLiknLFxuICAgICAgICAnQ1JFQVRFIFRFTVBPUkFSWSBjdGVfbmFtZSBBUyAoU0VMRUNUIC4uLiknLFxuICAgICAgICAnREVDTEFSRSBjdGVfbmFtZSBUQUJMRSA9IChTRUxFQ1QgLi4uKScsXG4gICAgICAgICdTVUJRVUVSWSBjdGVfbmFtZSBJUyAoU0VMRUNUIC4uLiknLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnQ29tbW9uIFRhYmxlIEV4cHJlc3Npb25zIGFyZSBpbnRyb2R1Y2VkIHdpdGggdGhlIGBXSVRIYCBrZXl3b3JkLCBhbGxvd2luZyBtb2R1bGFyLCByZWN1cnNpdmUsIGFuZCByZWFkYWJsZSBzdWJxdWVyeSBkZWZpbml0aW9ucy4nLFxuICAgICAgdG9waWM6ICdDVEVzICYgU3VicXVlcmllcycsXG4gICAgfSxcbiAgXSxcbiAgSmF2YVNjcmlwdDogW1xuICAgIHtcbiAgICAgIGlkOiAnanNfMDEnLFxuICAgICAgc2tpbGw6ICdKYXZhU2NyaXB0JyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBvcmRlciBvZiBleGVjdXRpb24gYmV0d2VlbiBtaWNyb3Rhc2tzIGFuZCBtYWNyb3Rhc2tzIGluIHRoZSBKYXZhU2NyaXB0IEV2ZW50IExvb3A/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0FsbCBtaWNyb3Rhc2tzIChlLmcuIFByb21pc2UudGhlbiwgcXVldWVNaWNyb3Rhc2spIHJ1biBiZWZvcmUgdGhlIG5leHQgbWFjcm90YXNrIChlLmcuIHNldFRpbWVvdXQpIGV4ZWN1dGVzJyxcbiAgICAgICAgJ01hY3JvdGFza3MgYWx3YXlzIGV4ZWN1dGUgYmVmb3JlIG1pY3JvdGFza3MnLFxuICAgICAgICAnVGhleSBleGVjdXRlIGluIGFsdGVybmF0aW5nIDE6MSBvcmRlcicsXG4gICAgICAgICdNaWNyb3Rhc2tzIG9ubHkgcnVuIHdoZW4gdGhlIGJyb3dzZXIgdGFiIGlzIG1pbmltaXplZCcsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdBZnRlciBldmVyeSBtYWNyb3Rhc2sgY29tcGxldGVzLCB0aGUgSmF2YVNjcmlwdCBlbmdpbmUgZHJhaW5zIHRoZSBlbnRpcmUgbWljcm90YXNrIHF1ZXVlIGJlZm9yZSBwaWNraW5nIHRoZSBuZXh0IG1hY3JvdGFzayBmcm9tIHRoZSB0YXNrIHF1ZXVlLicsXG4gICAgICB0b3BpYzogJ0V2ZW50IExvb3AgJiBDb25jdXJyZW5jeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2pzXzAyJyxcbiAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXG4gICAgICB0eXBlOiAnY29kZS1vdXRwdXQnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIGxvZ2dlZCBieSB0aGUgZm9sbG93aW5nIGNvZGU/JyxcbiAgICAgIGNvZGVTbmlwcGV0OiBgY29uc29sZS5sb2codHlwZW9mIG51bGwpO1xcbmNvbnNvbGUubG9nKG51bGwgaW5zdGFuY2VvZiBPYmplY3QpO2AsXG4gICAgICBvcHRpb25zOiBbJ1wib2JqZWN0XCIgYW5kIGZhbHNlJywgJ1wibnVsbFwiIGFuZCB0cnVlJywgJ1wib2JqZWN0XCIgYW5kIHRydWUnLCAnXCJ1bmRlZmluZWRcIiBhbmQgZmFsc2UnXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYHR5cGVvZiBudWxsYCBldmFsdWF0ZXMgdG8gXCJvYmplY3RcIiBkdWUgdG8gYSBoaXN0b3JpY2FsIGJ1ZyBpbiB0aGUgZmlyc3QgSlMgaW1wbGVtZW50YXRpb24gd2hlcmUgb2JqZWN0cyB3ZXJlIHRhZ2dlZCB3aXRoIHR5cGUgdGFnIDAuIEhvd2V2ZXIsIGBudWxsIGluc3RhbmNlb2YgT2JqZWN0YCBpcyBmYWxzZSBiZWNhdXNlIG51bGwgZG9lcyBub3QgaGF2ZSBhIHByb3RvdHlwZSBjaGFpbi4nLFxuICAgICAgdG9waWM6ICdUeXBlcyAmIFByb3RvdHlwZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdqc18wMycsXG4gICAgICBza2lsbDogJ0phdmFTY3JpcHQnLFxuICAgICAgdHlwZTogJ2RlYnVnZ2luZycsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgY2F1c2VzIHRoZSBkaWZmZXJlbmNlIGluIG91dHB1dCBiZXR3ZWVuIGFycm93IGZ1bmN0aW9ucyBhbmQgcmVndWxhciBmdW5jdGlvbiBkZWNsYXJhdGlvbnMgcmVnYXJkaW5nIGB0aGlzYD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQXJyb3cgZnVuY3Rpb25zIGhhdmUgbGV4aWNhbCBgdGhpc2AgKHRoZXkgaW5oZXJpdCBgdGhpc2AgZnJvbSBlbmNsb3Npbmcgc2NvcGUpLCB3aGVyZWFzIHJlZ3VsYXIgZnVuY3Rpb25zIGJpbmQgYHRoaXNgIGJhc2VkIG9uIGhvdyB0aGV5IGFyZSBpbnZva2VkJyxcbiAgICAgICAgJ0Fycm93IGZ1bmN0aW9ucyBjYW5ub3QgYWNjZXB0IGFyZ3VtZW50cycsXG4gICAgICAgICdSZWd1bGFyIGZ1bmN0aW9ucyBhcmUgYWx3YXlzIGV4ZWN1dGVkIG9uIFdlYiBXb3JrZXJzJyxcbiAgICAgICAgJ0Fycm93IGZ1bmN0aW9ucyBiaW5kIGB0aGlzYCB0byB0aGUgZ2xvYmFsIHdpbmRvdyBvYmplY3QgaW4gc3RyaWN0IG1vZGUnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnQXJyb3cgZnVuY3Rpb25zIGRvIG5vdCBkZWZpbmUgdGhlaXIgb3duIGV4ZWN1dGlvbiBjb250ZXh0OyB0aGVpciBgdGhpc2AgdmFsdWUgaXMgZGV0ZXJtaW5lZCBsZXhpY2FsbHkgZnJvbSB0aGUgc3Vycm91bmRpbmcgc2NvcGUuJyxcbiAgICAgIHRvcGljOiAnRnVuY3Rpb25zICYgU2NvcGVzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnanNfMDQnLFxuICAgICAgc2tpbGw6ICdKYXZhU2NyaXB0JyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGljaCBtZXRob2QgY3JlYXRlcyBhIGRlZXAgY29weSBvZiBzZXJpYWxpemFibGUgSmF2YVNjcmlwdCBvYmplY3RzIG5hdGl2ZWx5IGluIG1vZGVybiBicm93c2VycyBhbmQgTm9kZS5qcz8nLFxuICAgICAgb3B0aW9uczogWydzdHJ1Y3R1cmVkQ2xvbmUob2JqKScsICdPYmplY3QuYXNzaWduKHt9LCBvYmopJywgJ3sgLi4ub2JqIH0nLCAnb2JqLmNsb25lKCknXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYHN0cnVjdHVyZWRDbG9uZSgpYCBwcm92aWRlcyBhIG5hdGl2ZSwgaGlnaC1wZXJmb3JtYW5jZSBkZWVwIGNsb25lIGFsZ29yaXRobSBzdXBwb3J0aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMsIERhdGVzLCBSZWdFeHBzLCBNYXBzLCBTZXRzLCBhbmQgVHlwZWRBcnJheXMuJyxcbiAgICAgIHRvcGljOiAnT2JqZWN0IE1hbmlwdWxhdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2pzXzA1JyxcbiAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ0hvdyBkbyB5b3UgaGFuZGxlIG11bHRpcGxlIHByb21pc2VzIGNvbmN1cnJlbnRseSBhbmQgd2FpdCB1bnRpbCBhbGwgb2YgdGhlbSBzZXR0bGUgKGVpdGhlciBmdWxmaWxsIG9yIHJlamVjdCk/JyxcbiAgICAgIG9wdGlvbnM6IFsnUHJvbWlzZS5hbGxTZXR0bGVkKCknLCAnUHJvbWlzZS5hbGwoKScsICdQcm9taXNlLnJhY2UoKScsICdQcm9taXNlLmFueSgpJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BQcm9taXNlLmFsbFNldHRsZWQoKWAgcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhZnRlciBhbGwgZ2l2ZW4gcHJvbWlzZXMgaGF2ZSBlaXRoZXIgZnVsZmlsbGVkIG9yIHJlamVjdGVkLCB3aXRoIGFuIGFycmF5IG9mIHJlc3VsdCBvYmplY3RzIGRlc2NyaWJpbmcgZWFjaCBvdXRjb21lLicsXG4gICAgICB0b3BpYzogJ0FzeW5jICYgUHJvbWlzZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdqc18wNicsXG4gICAgICBza2lsbDogJ0phdmFTY3JpcHQnLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyBsb2dnZWQgdG8gdGhlIGNvbnNvbGU/JyxcbiAgICAgIGNvZGVTbmlwcGV0OiBgY29uc3QgYSA9IFsxLCAyLCAzXTtcXG5jb25zdCBiID0gYTtcXG5iLnB1c2goNCk7XFxuY29uc29sZS5sb2coYS5sZW5ndGgpO2AsXG4gICAgICBvcHRpb25zOiBbJzQnLCAnMycsICd1bmRlZmluZWQnLCAnVHlwZUVycm9yJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0FycmF5cyBhcmUgcmVmZXJlbmNlIHR5cGVzIGluIEphdmFTY3JpcHQuIEFzc2lnbmluZyBgYiA9IGFgIGNvcGllcyB0aGUgbWVtb3J5IHBvaW50ZXIsIHNvIG11dGF0aW5nIGBiYCBtdXRhdGVzIHRoZSB1bmRlcmx5aW5nIGFycmF5IHJlZmVyZW5jZWQgYnkgYGFgLicsXG4gICAgICB0b3BpYzogJ1JlZmVyZW5jZXMgJiBNZW1vcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdqc18wNycsXG4gICAgICBza2lsbDogJ0phdmFTY3JpcHQnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaGFwcGVucyB3aGVuIGEgdmFyaWFibGUgZGVjbGFyZWQgd2l0aCBgbGV0YCBpcyBhY2Nlc3NlZCBiZWZvcmUgaXRzIGRlY2xhcmF0aW9uIGxpbmU/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1JlZmVyZW5jZUVycm9yIGR1ZSB0byBUZW1wb3JhbCBEZWFkIFpvbmUgKFREWiknLFxuICAgICAgICAnUmV0dXJucyBgdW5kZWZpbmVkYCBsaWtlIGB2YXJgJyxcbiAgICAgICAgJ1NpbGVudCBmYWlsdXJlIHdpdGhvdXQgZXJyb3JzJyxcbiAgICAgICAgJ0xvZ3MgYG51bGxgJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1ZhcmlhYmxlcyBkZWNsYXJlZCB3aXRoIGBsZXRgIGFuZCBgY29uc3RgIGFyZSBob2lzdGVkIGJ1dCB1bmluaXRpYWxpemVkLCBleGlzdGluZyBpbiB0aGUgVGVtcG9yYWwgRGVhZCBab25lIHVudGlsIHRoZWlyIGRlZmluaXRpb24gaXMgZXZhbHVhdGVkLicsXG4gICAgICB0b3BpYzogJ0hvaXN0aW5nICYgVERaJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnanNfMDgnLFxuICAgICAgc2tpbGw6ICdKYXZhU2NyaXB0JyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaHkgZG9lcyBgMC4xICsgMC4yID09PSAwLjNgIGV2YWx1YXRlIHRvIGZhbHNlIGluIEphdmFTY3JpcHQ/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0Zsb2F0aW5nIHBvaW50IG51bWJlcnMgYXJlIHJlcHJlc2VudGVkIHVzaW5nIElFRUUgNzU0IGRvdWJsZSBwcmVjaXNpb24gYmluYXJ5LCBjYXVzaW5nIHNtYWxsIHJvdW5kaW5nIGluYWNjdXJhY2llcyAoMC4zMDAwMDAwMDAwMDAwMDAwNCknLFxuICAgICAgICAnSmF2YVNjcmlwdCBkb2VzIG5vdCBzdXBwb3J0IGRlY2ltYWxzJyxcbiAgICAgICAgJzAuMSBpcyB0cmVhdGVkIGFzIGFuIGludGVnZXIgaW4gc3RyaWN0IG1vZGUnLFxuICAgICAgICAnVHlwZSBjb2VyY2lvbiBjb252ZXJ0cyAwLjMgdG8gc3RyaW5nJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0Jhc2UtMTAgZnJhY3Rpb25zIGxpa2UgMC4xIGNhbm5vdCBiZSByZXByZXNlbnRlZCBwcmVjaXNlbHkgaW4gZmluaXRlIGJpbmFyeSBmbG9hdGluZy1wb2ludCByZXByZXNlbnRhdGlvbnMsIGxlYWRpbmcgdG8gcHJlY2lzaW9uIGxvc3MuJyxcbiAgICAgIHRvcGljOiAnTnVtYmVycyAmIFByZWNpc2lvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2pzXzA5JyxcbiAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcHJpbWFyeSBkaWZmZXJlbmNlIGJldHdlZW4gYSBgTWFwYCBhbmQgYSBwbGFpbiBvYmplY3QgaW4gSmF2YVNjcmlwdD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQSBNYXAgYWxsb3dzIGtleXMgb2YgYW55IHR5cGUgKGluY2x1ZGluZyBvYmplY3RzL2Z1bmN0aW9ucykgYW5kIG1haW50YWlucyBpbnNlcnRpb24gb3JkZXInLFxuICAgICAgICAnT2JqZWN0cyBhcmUgZmFzdGVyIGZvciBzZWFyY2hpbmcga2V5cyBvZiB0eXBlIHN5bWJvbCcsXG4gICAgICAgICdNYXBzIGNhbm5vdCBiZSBpdGVyYXRlZCB3aXRoIGBmb3IuLi5vZmAnLFxuICAgICAgICAnTWFwcyBhcmUgc3RvcmVkIGluIGxvY2FsIHN0b3JhZ2UgYXV0b21hdGljYWxseScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdQbGFpbiBvYmplY3RzIG9ubHkgc3VwcG9ydCBzdHJpbmcgYW5kIHN5bWJvbCBrZXlzLiBNYXBzIGNhbiB1c2UgYW55IHZhbHVlIChpbmNsdWRpbmcgcHJpbWl0aXZlcywgZnVuY3Rpb25zLCBvciBvYmplY3RzKSBhcyBrZXlzIGFuZCBndWFyYW50ZWUgaW5zZXJ0aW9uIG9yZGVyLicsXG4gICAgICB0b3BpYzogJ0NvbGxlY3Rpb25zICYgTWFwcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2pzXzEwJyxcbiAgICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIHN5bnRheCB1c2VzIG9wdGlvbmFsIGNoYWluaW5nIHRvIHNhZmVseSBhY2Nlc3MgZGVlcGx5IG5lc3RlZCBwcm9wZXJ0aWVzIHdpdGhvdXQgdGhyb3dpbmcgVHlwZUVycm9yIGlmIGFuIGludGVybWVkaWF0ZSB2YWx1ZSBpcyBudWxsIG9yIHVuZGVmaW5lZD8nLFxuICAgICAgb3B0aW9uczogWyd1c2VyPy5wcm9maWxlPy5hZGRyZXNzPy56aXBDb2RlJywgJ3VzZXI/P3Byb2ZpbGU/P2FkZHJlc3M/P3ppcENvZGUnLCAndXNlci50cnkocHJvZmlsZS5hZGRyZXNzKScsICd1c2VyOjpwcm9maWxlOjphZGRyZXNzJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1RoZSBvcHRpb25hbCBjaGFpbmluZyBvcGVyYXRvciAoYD8uYCkgc2hvcnQtY2lyY3VpdHMgYW5kIGV2YWx1YXRlcyB0byBgdW5kZWZpbmVkYCBpZiB0aGUgb3BlcmFuZCBiZWZvcmUgYD8uYCBpcyBgbnVsbGAgb3IgYHVuZGVmaW5lZGAuJyxcbiAgICAgIHRvcGljOiAnTW9kZXJuIFN5bnRheCcsXG4gICAgfSxcbiAgXSxcbiAgSmF2YTogW1xuICAgIHtcbiAgICAgIGlkOiAnamF2YV8wMScsXG4gICAgICBza2lsbDogJ0phdmEnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBKVk0sIEpSRSwgYW5kIEpESyBpbiBKYXZhPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdKREsgY29udGFpbnMgSlJFIGFuZCBkZXZlbG9wbWVudCB0b29sczsgSlJFIGNvbnRhaW5zIEpWTSBhbmQgcnVudGltZSBsaWJyYXJpZXM7IEpWTSBleGVjdXRlcyBjb21waWxlZCBieXRlY29kZScsXG4gICAgICAgICdKVk0gaXMgdGhlIGNvbXBpbGVyOyBKREsgaXMgdGhlIHJ1bnRpbWU7IEpSRSBpcyB0aGUgZGVidWdnZXInLFxuICAgICAgICAnVGhleSBhcmUgZGlmZmVyZW50IHZlcnNpb25zIG9mIHRoZSBKYXZhIGxhbmd1YWdlIHNwZWNpZmljYXRpb24nLFxuICAgICAgICAnSkRLIG9ubHkgcnVucyBvbiBMaW51eCBzZXJ2ZXJzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0pESyAoSmF2YSBEZXZlbG9wbWVudCBLaXQpIGlzIHRoZSBmdWxsIGRldmVsb3BlciBwYWNrYWdlLiBKUkUgKEphdmEgUnVudGltZSBFbnZpcm9ubWVudCkgYWxsb3dzIHJ1bm5pbmcgYXBwcy4gSlZNIChKYXZhIFZpcnR1YWwgTWFjaGluZSkgZXhlY3V0ZXMgYnl0ZWNvZGUuJyxcbiAgICAgIHRvcGljOiAnSmF2YSBBcmNoaXRlY3R1cmUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdqYXZhXzAyJyxcbiAgICAgIHNraWxsOiAnSmF2YScsXG4gICAgICB0eXBlOiAnY29kZS1vdXRwdXQnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHByaW50ZWQgYnkgYFN5c3RlbS5vdXQucHJpbnRsbihzMSA9PSBzMilgIHZzIGBzMS5lcXVhbHMoczIpYCBmb3IgU3RyaW5nIHMxID0gXCJoZWxsb1wiOyBTdHJpbmcgczIgPSBuZXcgU3RyaW5nKFwiaGVsbG9cIik7PycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdgZmFsc2VgIGZvciA9PSBhbmQgYHRydWVgIGZvciBlcXVhbHMnLFxuICAgICAgICAnYHRydWVgIGZvciBib3RoJyxcbiAgICAgICAgJ2BmYWxzZWAgZm9yIGJvdGgnLFxuICAgICAgICAnYHRydWVgIGZvciA9PSBhbmQgYGZhbHNlYCBmb3IgZXF1YWxzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2A9PWAgdGVzdHMgcmVmZXJlbmNlIGlkZW50aXR5IChtZW1vcnkgYWRkcmVzc2VzKS4gYHMxYCBwb2ludHMgdG8gdGhlIFN0cmluZyBwb29sIHdoaWxlIGBzMmAgcG9pbnRzIHRvIGEgc2VwYXJhdGUgaGVhcCBhbGxvY2F0aW9uLiBgLmVxdWFscygpYCBjb21wYXJlcyBjaGFyYWN0ZXIgdmFsdWVzLicsXG4gICAgICB0b3BpYzogJ1N0cmluZ3MgJiBNZW1vcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdqYXZhXzAzJyxcbiAgICAgIHNraWxsOiAnSmF2YScsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2h5IHNob3VsZCBgQ29uY3VycmVudEhhc2hNYXBgIGJlIHByZWZlcnJlZCBvdmVyIGBDb2xsZWN0aW9ucy5zeW5jaHJvbml6ZWRNYXAoKWAgaW4gaGlnaC1jb25jdXJyZW5jeSBlbnZpcm9ubWVudHM/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ2BDb25jdXJyZW50SGFzaE1hcGAgdXNlcyBidWNrZXQtbGV2ZWwgLyBzZWdtZW50IGxvY2tpbmcgYWxsb3dpbmcgc2ltdWx0YW5lb3VzIHJlYWRzIGFuZCB3cml0ZXMgd2l0aG91dCBsb2NraW5nIHRoZSBlbnRpcmUgdGFibGUnLFxuICAgICAgICAnYENvbmN1cnJlbnRIYXNoTWFwYCBkb2VzIG5vdCB1c2UgbG9ja3MgYXQgYWxsJyxcbiAgICAgICAgJ2BzeW5jaHJvbml6ZWRNYXBgIGlzIGRlcHJlY2F0ZWQgaW4gSmF2YSAxNycsXG4gICAgICAgICdgQ29uY3VycmVudEhhc2hNYXBgIHJ1bnMgb24gR1BVIHRocmVhZHMnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYENvbGxlY3Rpb25zLnN5bmNocm9uaXplZE1hcGAgbG9ja3MgdGhlIGVudGlyZSBjb2xsZWN0aW9uIG9uIGV2ZXJ5IG9wZXJhdGlvbi4gYENvbmN1cnJlbnRIYXNoTWFwYCBhY2hpZXZlcyBoaWdoIHRocm91Z2hwdXQgdmlhIGxvY2sgc3RyaXBpbmcgYW5kIENBUyBvcGVyYXRpb25zLicsXG4gICAgICB0b3BpYzogJ0NvbmN1cnJlbmN5ICYgQ29sbGVjdGlvbnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdqYXZhXzA0JyxcbiAgICAgIHNraWxsOiAnSmF2YScsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBkb2VzIHRoZSBgdm9sYXRpbGVgIGtleXdvcmQgZ3VhcmFudGVlIGluIEphdmEgbXVsdGktdGhyZWFkaW5nPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdWaXNpYmlsaXR5IG9mIHZhcmlhYmxlIGNoYW5nZXMgYWNyb3NzIHRocmVhZHMgKHJlYWRzL3dyaXRlcyBkaXJlY3RseSB0byBtYWluIG1lbW9yeSkgYW5kIHByZXZlbnRzIGluc3RydWN0aW9uIHJlb3JkZXJpbmcnLFxuICAgICAgICAnTXV0dWFsIGV4Y2x1c2lvbiBsb2NrIHNpbWlsYXIgdG8gYHN5bmNocm9uaXplZGAgYmxvY2tzJyxcbiAgICAgICAgJ0F1dG9tYXRpYyBhdG9taWNpdHkgZm9yIGNvbXBvdW5kIG9wZXJhdGlvbnMgbGlrZSBgaSsrYCcsXG4gICAgICAgICdTZXJpYWxpemF0aW9uIG9mIHRoZSBvYmplY3QgdG8gZGlzaycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgdm9sYXRpbGVgIGVuc3VyZXMgY2hhbmdlcyBhcmUgaW1tZWRpYXRlbHkgdmlzaWJsZSB0byBvdGhlciB0aHJlYWRzIGFuZCBwcmV2ZW50cyBpbnN0cnVjdGlvbiByZW9yZGVyaW5nLCBidXQgZG9lcyBOT1QgZ3VhcmFudGVlIGF0b21pY2l0eSBmb3Igb3BlcmF0aW9ucyBsaWtlIGBjb3VudCsrYC4nLFxuICAgICAgdG9waWM6ICdNZW1vcnkgTW9kZWwgJiBDb25jdXJyZW5jeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2phdmFfMDUnLFxuICAgICAgc2tpbGw6ICdKYXZhJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggaW50ZXJmYWNlIGluIEphdmEgcmVwcmVzZW50cyBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBvbmUgYXJndW1lbnQgYW5kIHByb2R1Y2VzIGEgcmVzdWx0PycsXG4gICAgICBvcHRpb25zOiBbJ2phdmEudXRpbC5mdW5jdGlvbi5GdW5jdGlvbjxULCBSPicsICdDb25zdW1lcjxUPicsICdTdXBwbGllcjxUPicsICdQcmVkaWNhdGU8VD4nXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYEZ1bmN0aW9uPFQsIFI+YCB0YWtlcyBhIHNpbmdsZSBpbnB1dCBvZiB0eXBlIFQgYW5kIHJldHVybnMgYSByZXN1bHQgb2YgdHlwZSBSLiBgQ29uc3VtZXJgIHJldHVybnMgdm9pZCwgYFN1cHBsaWVyYCB0YWtlcyBubyBhcmd1bWVudHMsIGFuZCBgUHJlZGljYXRlYCByZXR1cm5zIGJvb2xlYW4uJyxcbiAgICAgIHRvcGljOiAnRnVuY3Rpb25hbCBJbnRlcmZhY2VzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnamF2YV8wNicsXG4gICAgICBza2lsbDogJ0phdmEnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIHB1cnBvc2Ugb2YgdGhlIEphdmEgR2FyYmFnZSBDb2xsZWN0b3LigJlzIEdlbmVyYXRpb25hbCBIeXBvdGhlc2lzPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdNb3N0IG9iamVjdHMgZGllIHlvdW5nLCBzbyBzZWdyZWdhdGluZyBoZWFwIGludG8gRWRlbi9Zb3VuZyBhbmQgVGVudXJlZC9PbGQgbWluaW1pemVzIGNvbGxlY3Rpb24gcGF1c2VzJyxcbiAgICAgICAgJ0FsbCBvYmplY3RzIGxpdmUgZXF1YWxseSBsb25nIGFuZCBhcmUgc2Nhbm5lZCB1bmlmb3JtbHknLFxuICAgICAgICAnR2FyYmFnZSBjb2xsZWN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgd2hlbiBtZW1vcnkgaXMgMTAwJSBmdWxsJyxcbiAgICAgICAgJ0l0IGNvbnZlcnRzIG9iamVjdCBwb2ludGVycyBpbnRvIG51bWVyaWMgSURzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1RoZSB3ZWFrIGdlbmVyYXRpb25hbCBoeXBvdGhlc2lzIHBvc2l0cyB0aGF0IG1vc3QgYWxsb2NhdGVkIG9iamVjdHMgYmVjb21lIHVucmVhY2hhYmxlIHNob3J0bHkgYWZ0ZXIgYWxsb2NhdGlvbiwgbWFraW5nIGZyZXF1ZW50IG1pbm9yIEdDcyBvbiB5b3VuZyBnZW5lcmF0aW9uIHZlcnkgZWZmaWNpZW50LicsXG4gICAgICB0b3BpYzogJ0pWTSAmIEdhcmJhZ2UgQ29sbGVjdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2phdmFfMDcnLFxuICAgICAgc2tpbGw6ICdKYXZhJyxcbiAgICAgIHR5cGU6ICdjb2RlLW91dHB1dCcsXG4gICAgICBxdWVzdGlvbjogJ0NhbiBhbiBgYWJzdHJhY3RgIGNsYXNzIGhhdmUgY29uY3JldGUgaW1wbGVtZW50ZWQgbWV0aG9kcyBhbmQgY29uc3RydWN0b3IgbWV0aG9kcyBpbiBKYXZhPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdZZXMsIGFuIGFic3RyYWN0IGNsYXNzIGNhbiBoYXZlIGNvbnN0cnVjdG9ycywgc3RhdGUgZmllbGRzLCBhbmQgZnVsbHkgaW1wbGVtZW50ZWQgY29uY3JldGUgbWV0aG9kcycsXG4gICAgICAgICdObywgYWJzdHJhY3QgY2xhc3NlcyBjYW4gb25seSBjb250YWluIG1ldGhvZCBzaWduYXR1cmVzIHdpdGhvdXQgYm9kaWVzJyxcbiAgICAgICAgJ0NvbnN0cnVjdG9ycyBhcmUgcHJvaGliaXRlZCBpbiBhYnN0cmFjdCBjbGFzc2VzJyxcbiAgICAgICAgJ09ubHkgc3RhdGljIG1ldGhvZHMgYXJlIGFsbG93ZWQgaW4gYWJzdHJhY3QgY2xhc3NlcycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdBYnN0cmFjdCBjbGFzc2VzIGNhbiBkZWZpbmUgaW5zdGFuY2UgdmFyaWFibGVzLCBmdWxsIGNvbnN0cnVjdG9ycyAoY2FsbGVkIHZpYSBgc3VwZXIoKWApLCBhbmQgY29uY3JldGUgbWV0aG9kcyBhbG9uZ3NpZGUgYWJzdHJhY3QgbWV0aG9kIHNpZ25hdHVyZXMuJyxcbiAgICAgIHRvcGljOiAnT09QICYgQWJzdHJhY3QgQ2xhc3NlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2phdmFfMDgnLFxuICAgICAgc2tpbGw6ICdKYXZhJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHByZXZlbnQgU1FMIEluamVjdGlvbiB3aGVuIHF1ZXJ5aW5nIGRhdGFiYXNlcyBpbiBKYXZhPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdVc2UgYFByZXBhcmVkU3RhdGVtZW50YCB3aXRoIHBsYWNlaG9sZGVycyAoYD9gKSBpbnN0ZWFkIG9mIGBTdGF0ZW1lbnRgIHdpdGggc3RyaW5nIGNvbmNhdGVuYXRpb24nLFxuICAgICAgICAnVXNlIGBSdW50aW1lLmdldFJ1bnRpbWUoKS5leGVjKFwic2FuaXRpemVcIilgJyxcbiAgICAgICAgJ0VuY3J5cHQgYWxsIHRhYmxlIG5hbWVzIGJlZm9yZSBxdWVyeWluZycsXG4gICAgICAgICdDYXN0IGFsbCBpbnB1dHMgdG8gU3RyaW5nJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BQcmVwYXJlZFN0YXRlbWVudGAgY29tcGlsZXMgdGhlIFNRTCB0ZW1wbGF0ZSBvbmNlIGFuZCBiaW5kcyBwYXJhbWV0ZXJzIHNhZmVseSwgcHJldmVudGluZyB1c2VyIGlucHV0IGZyb20gYWx0ZXJpbmcgcXVlcnkgc3RydWN0dXJlLicsXG4gICAgICB0b3BpYzogJ0pEQkMgJiBTZWN1cml0eScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2phdmFfMDknLFxuICAgICAgc2tpbGw6ICdKYXZhJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gY2hlY2tlZCBhbmQgdW5jaGVja2VkIGV4Y2VwdGlvbnMgaW4gSmF2YT8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQ2hlY2tlZCBleGNlcHRpb25zIChzdWJjbGFzc2VzIG9mIEV4Y2VwdGlvbiBleGNsdWRpbmcgUnVudGltZUV4Y2VwdGlvbikgbXVzdCBiZSBkZWNsYXJlZCBvciBjYXVnaHQgYXQgY29tcGlsZSB0aW1lJyxcbiAgICAgICAgJ1VuY2hlY2tlZCBleGNlcHRpb25zIG11c3QgYmUgaGFuZGxlZCB3aXRoIGEgdGhyb3dzIGNsYXVzZScsXG4gICAgICAgICdDaGVja2VkIGV4Y2VwdGlvbnMgb25seSBvY2N1ciBhdCBzeXN0ZW0gYm9vdCcsXG4gICAgICAgICdKYXZhIGVsaW1pbmF0ZWQgY2hlY2tlZCBleGNlcHRpb25zIGluIHZlcnNpb24gOCcsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdDaGVja2VkIGV4Y2VwdGlvbnMgYXJlIHZlcmlmaWVkIGF0IGNvbXBpbGUtdGltZSBieSB0aGUgSmF2YSBjb21waWxlciBhbmQgcmVxdWlyZSBleHBsaWNpdCBoYW5kbGluZyAoYHRyeS1jYXRjaGAgb3IgYHRocm93c2ApLiBVbmNoZWNrZWQgZXhjZXB0aW9ucyBpbmhlcml0IGZyb20gYFJ1bnRpbWVFeGNlcHRpb25gLicsXG4gICAgICB0b3BpYzogJ0V4Y2VwdGlvbiBIYW5kbGluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2phdmFfMTAnLFxuICAgICAgc2tpbGw6ICdKYXZhJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBmZWF0dXJlIGludHJvZHVjZWQgaW4gSmF2YSAxNiBwcm92aWRlcyBhbiBpbW11dGFibGUsIHRyYW5zcGFyZW50IGNhcnJpZXIgZm9yIGRhdGEgd2l0aCBjb25jaXNlIHN5bnRheD8nLFxuICAgICAgb3B0aW9uczogWydSZWNvcmRzIChgcmVjb3JkIFBvaW50KGludCB4LCBpbnQgeSkge31gKScsICdFbnVtcycsICdTZWFsZWQgSW50ZXJmYWNlcycsICdTdHJ1Y3RzJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0phdmEgcmVjb3JkcyBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlIGNvbnN0cnVjdG9ycywgZ2V0dGVycywgYGVxdWFscygpYCwgYGhhc2hDb2RlKClgLCBhbmQgYHRvU3RyaW5nKClgIGltcGxlbWVudGF0aW9ucyBmb3IgaW1tdXRhYmxlIGRhdGEgdHJhbnNmZXIuJyxcbiAgICAgIHRvcGljOiAnTW9kZXJuIEphdmEgRmVhdHVyZXMnLFxuICAgIH0sXG4gIF0sXG4gICdNYWNoaW5lIExlYXJuaW5nJzogW1xuICAgIHtcbiAgICAgIGlkOiAnbWxfMDEnLFxuICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGRvZXMgdGhlIEJpYXMtVmFyaWFuY2UgdHJhZGVvZmYgZGVzY3JpYmUgaW4gc3VwZXJ2aXNlZCBtYWNoaW5lIGxlYXJuaW5nPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdVbmRlcmZpdHRpbmcgKGhpZ2ggYmlhcywgb3Zlcmx5IHNpbXBsZSBtb2RlbHMpIHZzIE92ZXJmaXR0aW5nIChoaWdoIHZhcmlhbmNlLCBvdmVybHkgc2Vuc2l0aXZlIHRvIHRyYWluaW5nIG5vaXNlKScsXG4gICAgICAgICdUaGUgdHJhZGUtb2ZmIGJldHdlZW4gQ1BVIG1lbW9yeSBhbmQgR1BVIGNvcmUgY2xvY2sgc3BlZWQnLFxuICAgICAgICAnVGhlIGJhbGFuY2UgYmV0d2VlbiBwcmVjaXNpb24gYW5kIGJhdGNoIHNpemUnLFxuICAgICAgICAnVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBjbGFzc2lmaWNhdGlvbiBhbmQgY2x1c3RlcmluZyBhbGdvcml0aG1zJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0hpZ2ggYmlhcyBjYXVzZXMgdW5kZXJmaXR0aW5nIChpZ25vcmluZyB1bmRlcmx5aW5nIHBhdHRlcm5zKTsgaGlnaCB2YXJpYW5jZSBjYXVzZXMgb3ZlcmZpdHRpbmcgKG1vZGVsaW5nIHJhbmRvbSBub2lzZSkuIFRoZSBnb2FsIGlzIG1pbmltaXppbmcgdGhlaXIgc3VtIHBsdXMgaXJyZWR1Y2libGUgZXJyb3IuJyxcbiAgICAgIHRvcGljOiAnQ29yZSBUaGVvcnkgJiBFdmFsdWF0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbWxfMDInLFxuICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaHkgc2hvdWxkIHlvdSBmaXQgZmVhdHVyZSBzY2FsZXJzIChsaWtlIFN0YW5kYXJkU2NhbGVyKSBPTkxZIG9uIHRyYWluaW5nIGRhdGEsIGFuZCBub3QgdGhlIGNvbWJpbmVkIHRyYWluICsgdGVzdCBkYXRhc2V0PycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUbyBwcmV2ZW50IERhdGEgTGVha2FnZSBmcm9tIHRlc3QgZGlzdHJpYnV0aW9uIGludG8gbW9kZWwgdHJhaW5pbmcnLFxuICAgICAgICAnQmVjYXVzZSB0ZXN0IGRhdGEgY2Fubm90IGJlIGNvbnZlcnRlZCB0byBmbG9hdHMnLFxuICAgICAgICAnU3RhbmRhcmRTY2FsZXIgcmFpc2VzIGEgVmFsdWVFcnJvciBvbiB0ZXN0IHNldHMnLFxuICAgICAgICAnU2NhbGluZyB0ZXN0IHNldHMgcmVkdWNlcyBjbGFzc2lmaWNhdGlvbiBzcGVlZCcsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdGaXR0aW5nIHByZXByb2Nlc3Npbmcgc2NhbGVycyBvbiB0aGUgdGVzdCBzZXQgbGVha3MgZGlzdHJpYnV0aW9uIHN0YXRpc3RpY3MgKG1lYW4sIHZhcmlhbmNlKSBmcm9tIGZ1dHVyZSB1bnNlZW4gZGF0YSBpbnRvIHRoZSB0cmFpbmluZyBwaGFzZSwgZ2l2aW5nIGZhbHNlbHkgb3B0aW1pc3RpYyB2YWxpZGF0aW9uIHNjb3Jlcy4nLFxuICAgICAgdG9waWM6ICdEYXRhIFByZXByb2Nlc3NpbmcgJiBMZWFrYWdlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbWxfMDMnLFxuICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdJbiBoaWdobHkgaW1iYWxhbmNlZCBjbGFzc2lmaWNhdGlvbiBkYXRhc2V0cyAoZS5nLiBmcmF1ZCBkZXRlY3Rpb24gYXQgOTkuOCUgbmVnYXRpdmUpLCB3aHkgaXMgQWNjdXJhY3kgYSBtaXNsZWFkaW5nIG1ldHJpYz8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQSB0cml2aWFsIGNsYXNzaWZpZXIgcHJlZGljdGluZyBuZWdhdGl2ZSBmb3IgYWxsIHJvd3MgYWNoaWV2ZXMgOTkuOCUgYWNjdXJhY3kgd2hpbGUgZmFpbGluZyB0byBkZXRlY3QgYW55IGZyYXVkOyBQUi1BVUMgb3IgRjEtU2NvcmUgYXJlIG1vcmUgaW5mb3JtYXRpdmUnLFxuICAgICAgICAnQWNjdXJhY3kgY2Fubm90IGJlIGNhbGN1bGF0ZWQgb24gYmluYXJ5IGxhYmVscycsXG4gICAgICAgICdBY2N1cmFjeSB2YWx1ZXMgZXhjZWVkIDEwMCUgb24gaW1iYWxhbmNlZCBzZXRzJyxcbiAgICAgICAgJ0dyYWRpZW50IGRlc2NlbnQgY2Fubm90IG9wdGltaXplIGFjY3VyYWN5JyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1dpdGggZXh0cmVtZSBjbGFzcyBpbWJhbGFuY2UsIGEgbW9kZWwgdGhhdCBzaW1wbHkgcHJlZGljdHMgdGhlIG1ham9yaXR5IGNsYXNzIGdldHMgZGVjZXB0aXZlIDk5JSsgYWNjdXJhY3kuIE1ldHJpY3MgbGlrZSBQcmVjaXNpb24tUmVjYWxsIEFVQywgUmVjYWxsLCBhbmQgRjEgZXZhbHVhdGUgdHJ1ZSBmcmF1ZCBjYXB0dXJlLicsXG4gICAgICB0b3BpYzogJ01ldHJpY3MgJiBJbWJhbGFuY2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdtbF8wNCcsXG4gICAgICBza2lsbDogJ01hY2hpbmUgTGVhcm5pbmcnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIHByaW1hcnkgcm9sZSBvZiB0aGUgU2VsZi1BdHRlbnRpb24gbWVjaGFuaXNtIGluIFRyYW5zZm9ybWVyIGFyY2hpdGVjdHVyZXM/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0l0IGFsbG93cyB0b2tlbnMgdG8gd2VpZ2ggcmVwcmVzZW50YXRpb25zIG9mIGFsbCBvdGhlciB0b2tlbnMgaW4gYSBzZXF1ZW5jZSByZWdhcmRsZXNzIG9mIGRpc3RhbmNlLCBvdmVyY29taW5nIFJOTiBzZXF1ZW50aWFsIGJvdHRsZW5lY2tzJyxcbiAgICAgICAgJ0l0IGNvbnZlcnRzIGZsb2F0aW5nIHBvaW50IG1hdHJpY2VzIGludG8gaW50ZWdlciB2ZWN0b3JzJyxcbiAgICAgICAgJ0l0IGVuZm9yY2VzIGNvbnZvbHV0aW9uYWwgd2VpZ2h0IHNoYXJpbmcgYWNyb3NzIHNwYXRpYWwgZ3JpZHMnLFxuICAgICAgICAnSXQgZWxpbWluYXRlcyB0aGUgbmVlZCBmb3IgbWF0cml4IG11bHRpcGxpY2F0aW9uIGR1cmluZyBpbmZlcmVuY2UnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnU2VsZi1hdHRlbnRpb24gY29tcHV0ZXMgZG90LXByb2R1Y3QgcXVlcnkta2V5IHJlbGF0aW9uc2hpcHMgYWNyb3NzIGFsbCBzZXF1ZW5jZSBwb3NpdGlvbnMgc2ltdWx0YW5lb3VzbHksIGFsbG93aW5nIGRpcmVjdCBtb2RlbGluZyBvZiBsb25nLXJhbmdlIGRlcGVuZGVuY2llcyBpbiBwYXJhbGxlbC4nLFxuICAgICAgdG9waWM6ICdEZWVwIExlYXJuaW5nICYgVHJhbnNmb3JtZXJzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbWxfMDUnLFxuICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCB0ZWNobmlxdWUgYWRkcyBhbiBMMiBwZW5hbHR5IHRvIG1vZGVsIHdlaWdodHMgdG8gcHJldmVudCBjb2VmZmljaWVudHMgZnJvbSBncm93aW5nIGV4Y2Vzc2l2ZWx5IGxhcmdlPycsXG4gICAgICBvcHRpb25zOiBbJ1JpZGdlIFJlZ3VsYXJpemF0aW9uIChXZWlnaHQgRGVjYXkpJywgJ0xhc3NvIFJlZ3VsYXJpemF0aW9uIChMMSknLCAnRHJvcG91dCcsICdCYXRjaCBOb3JtYWxpemF0aW9uJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0wyIHJlZ3VsYXJpemF0aW9uIChSaWRnZSkgYWRkcyB0aGUgc3VtIG9mIHNxdWFyZWQgd2VpZ2h0cyB0byB0aGUgbG9zcyBmdW5jdGlvbiwgc2hyaW5raW5nIHdlaWdodHMgc21vb3RobHkgdG93YXJkIHplcm8gd2l0aG91dCBmb3JjaW5nIGV4YWN0IHNwYXJzaXR5LicsXG4gICAgICB0b3BpYzogJ1JlZ3VsYXJpemF0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbWxfMDYnLFxuICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGRvZXMgdGhlIFJPQy1BVUMgc2NvcmUgcmVwcmVzZW50IGdlb21ldHJpY2FsbHk/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1RoZSBBcmVhIFVuZGVyIHRoZSBSZWNlaXZlciBPcGVyYXRpbmcgQ2hhcmFjdGVyaXN0aWMgY3VydmUgcGxvdHRpbmcgVHJ1ZSBQb3NpdGl2ZSBSYXRlIHZzIEZhbHNlIFBvc2l0aXZlIFJhdGUgYWNyb3NzIGFsbCBjbGFzc2lmaWNhdGlvbiB0aHJlc2hvbGRzJyxcbiAgICAgICAgJ1RoZSBkaXN0YW5jZSBiZXR3ZWVuIGNsdXN0ZXIgY2VudHJvaWRzIGluIGstbWVhbnMnLFxuICAgICAgICAnVGhlIGNvc2luZSBhbmdsZSBiZXR3ZWVuIHByb21wdCBlbWJlZGRpbmdzJyxcbiAgICAgICAgJ1RoZSB2YXJpYW5jZSBvZiB0aGUgdHJhaW5pbmcgbG9zcyBjdXJ2ZScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdST0MgY3VydmVzIHBsb3QgVFBSIGFnYWluc3QgRlBSIGFjcm9zcyB2YXJpZWQgZGVjaXNpb24gdGhyZXNob2xkcy4gVGhlIEFVQyBtZWFzdXJlcyBvdmVyYWxsIGRpYWdub3N0aWMgcmFua2luZyBhYmlsaXR5ICgxLjAgPSBwZXJmZWN0LCAwLjUgPSByYW5kb20gZ3Vlc3MpLicsXG4gICAgICB0b3BpYzogJ0V2YWx1YXRpb24gTWV0cmljcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ21sXzA3JyxcbiAgICAgIHNraWxsOiAnTWFjaGluZSBMZWFybmluZycsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBjb21tb24gcGhlbm9tZW5vbiBjYXVzZXMgZ3JhZGllbnRzIHRvIHNocmluayBleHBvbmVudGlhbGx5IGR1cmluZyBiYWNrcHJvcGFnYXRpb24gaW4gZGVlcCBuZXVyYWwgbmV0d29ya3Mgd2l0aCBzaWdtb2lkIGFjdGl2YXRpb25zPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdWYW5pc2hpbmcgR3JhZGllbnQgUHJvYmxlbScsXG4gICAgICAgICdFeHBsb2RpbmcgR3JhZGllbnQgUHJvYmxlbScsXG4gICAgICAgICdDYXRhc3Ryb3BoaWMgRm9yZ2V0dGluZycsXG4gICAgICAgICdDdXJzZSBvZiBEaW1lbnNpb25hbGl0eScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdCZWNhdXNlIHRoZSBkZXJpdmF0aXZlIG9mIHRoZSBzaWdtb2lkIGZ1bmN0aW9uIGNhcHMgYXQgMC4yNSwgbXVsdGlwbHlpbmcgbWFueSBzbWFsbCBkZXJpdmF0aXZlcyB0aHJvdWdoIGRlZXAgbGF5ZXJzIGNhdXNlcyBncmFkaWVudHMgdG8gYXBwcm9hY2ggemVybywgc3RhbGxpbmcgd2VpZ2h0IHVwZGF0ZXMuJyxcbiAgICAgIHRvcGljOiAnT3B0aW1pemF0aW9uICYgQmFja3Byb3BhZ2F0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnbWxfMDgnLFxuICAgICAgc2tpbGw6ICdNYWNoaW5lIExlYXJuaW5nJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBtYWluIGRpc3RpbmN0aW9uIGJldHdlZW4gQmFnZ2luZyAoZS5nLiBSYW5kb20gRm9yZXN0KSBhbmQgQm9vc3RpbmcgKGUuZy4gWEdCb29zdCwgTGlnaHRHQk0pPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdCYWdnaW5nIHRyYWlucyBpbmRlcGVuZGVudCBtb2RlbHMgaW4gcGFyYWxsZWwgYW5kIGF2ZXJhZ2VzIHJlc3VsdHMgdG8gcmVkdWNlIHZhcmlhbmNlOyBCb29zdGluZyB0cmFpbnMgc2VxdWVudGlhbCBtb2RlbHMgd2hlcmUgZWFjaCBjb3JyZWN0cyBlcnJvcnMgb2YgcHJldmlvdXMgbW9kZWxzIHRvIHJlZHVjZSBiaWFzJyxcbiAgICAgICAgJ0Jvb3N0aW5nIG9ubHkgd29ya3Mgb24gaW1hZ2UgZGF0YScsXG4gICAgICAgICdCYWdnaW5nIHJlcXVpcmVzIG5ldXJhbCBuZXR3b3JrcyB3aGlsZSBib29zdGluZyByZXF1aXJlcyBsaW5lYXIgcmVncmVzc2lvbicsXG4gICAgICAgICdUaGVyZSBpcyBubyBhbGdvcml0aG1pYyBkaWZmZXJlbmNlJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0JhZ2dpbmcgdXNlcyBib290c3RyYXAgYWdncmVnYXRpb24gaW4gcGFyYWxsZWwgdG8gZGFtcCB2YXJpYW5jZS4gQm9vc3RpbmcgYnVpbGRzIHNlcXVlbnRpYWwgdHJlZXMgaXRlcmF0aXZlbHkgZm9jdXNlZCBvbiBoYXJkLXRvLXByZWRpY3QgcmVzaWR1YWwgc2FtcGxlcy4nLFxuICAgICAgdG9waWM6ICdFbnNlbWJsZSBMZWFybmluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ21sXzA5JyxcbiAgICAgIHNraWxsOiAnTWFjaGluZSBMZWFybmluZycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyBSZXRyaWV2YWwtQXVnbWVudGVkIEdlbmVyYXRpb24gKFJBRykgdXNlZCBmb3IgaW4gTExNIGFwcGxpY2F0aW9ucz8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnUmV0cmlldmluZyBleHRlcm5hbCBmYWN0dWFsIGNvbnRleHQgZnJvbSBhIHZlY3RvciBkYXRhYmFzZSBhbmQgaW5qZWN0aW5nIGl0IGludG8gdGhlIHByb21wdCB0byByZWR1Y2UgaGFsbHVjaW5hdGlvbnMgYW5kIGdyb3VuZCBMTE0gYW5zd2VycycsXG4gICAgICAgICdSZS10cmFpbmluZyBhbGwgbW9kZWwgd2VpZ2h0cyBmcm9tIHNjcmF0Y2ggZXZlcnkgMjQgaG91cnMnLFxuICAgICAgICAnQ29tcHJlc3NpbmcgNzBCIHBhcmFtZXRlciBtb2RlbHMgZG93biB0byA4LWJpdCBxdWFudGl6ZWQgd2VpZ2h0cycsXG4gICAgICAgICdBdXRvbWF0aWNhbGx5IHRyYW5zbGF0aW5nIFB5dGhvbiBjb2RlIGludG8gQ1VEQSBDKysnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnUkFHIGNvbWJpbmVzIGRlbnNlIHZlY3RvciByZXRyaWV2YWwgKHNlbWFudGljIHNlYXJjaCkgb3ZlciBwcml2YXRlIGtub3dsZWRnZSBiYXNlcyB3aXRoIGdlbmVyYXRpdmUgTExNcywgZW5zdXJpbmcgYW5zd2VycyBjaXRlIGZhY3R1YWwgY29tcGFueSBzb3VyY2VzIHdpdGhvdXQgcmVxdWlyaW5nIGZpbmUtdHVuaW5nLicsXG4gICAgICB0b3BpYzogJ01vZGVybiBMTE0gJiBSQUcgU3lzdGVtcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ21sXzEwJyxcbiAgICAgIHNraWxsOiAnTWFjaGluZSBMZWFybmluZycsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIG1ldGhvZCByZWR1Y2VzIHRoZSBkaW1lbnNpb25hbGl0eSBvZiBoaWdoLWRpbWVuc2lvbmFsIGRhdGEgd2hpbGUgcHJlc2VydmluZyB0aGUgYXhlcyBvZiBtYXhpbWFsIHZhcmlhbmNlPycsXG4gICAgICBvcHRpb25zOiBbJ1ByaW5jaXBhbCBDb21wb25lbnQgQW5hbHlzaXMgKFBDQSknLCAnSy1NZWFucycsICdEQlNDQU4nLCAnTGluZWFyIERpc2NyaW1pbmFudCBBbmFseXNpcyddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdQQ0EgcHJvamVjdHMgZGF0YSBvbnRvIG9ydGhvZ29uYWwgZWlnZW52ZWN0b3JzIChwcmluY2lwYWwgY29tcG9uZW50cykgY29ycmVzcG9uZGluZyB0byB0aGUgbGFyZ2VzdCBlaWdlbnZhbHVlcyBvZiB0aGUgY292YXJpYW5jZSBtYXRyaXguJyxcbiAgICAgIHRvcGljOiAnVW5zdXBlcnZpc2VkIExlYXJuaW5nJyxcbiAgICB9LFxuICBdLFxuICBBV1M6IFtcbiAgICB7XG4gICAgICBpZDogJ2F3c18wMScsXG4gICAgICBza2lsbDogJ0FXUycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUga2V5IGRpZmZlcmVuY2UgYmV0d2VlbiBBV1MgSUFNIFJvbGVzIGFuZCBJQU0gVXNlcnM/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0lBTSBVc2VycyBoYXZlIGxvbmctdGVybSBjcmVkZW50aWFscyAocGFzc3dvcmQsIGFjY2VzcyBrZXlzKTsgSUFNIFJvbGVzIHByb3ZpZGUgdGVtcG9yYXJ5IHNlY3VyaXR5IGNyZWRlbnRpYWxzIGFzc3VtZWQgYnkgdHJ1c3RlZCBlbnRpdGllcyBvciBBV1Mgc2VydmljZXMnLFxuICAgICAgICAnSUFNIFJvbGVzIGFyZSBvbmx5IGZvciBodW1hbiBhZG1pbmlzdHJhdG9ycycsXG4gICAgICAgICdJQU0gVXNlcnMgY2Fubm90IGJlIGFzc2lnbmVkIHBvbGljaWVzJyxcbiAgICAgICAgJ1JvbGVzIGNhbiBvbmx5IGJlIHVzZWQgd2l0aGluIHRoZSBBV1MgbWFuYWdlbWVudCBjb25zb2xlJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0lBTSBSb2xlcyBkbyBub3QgaGF2ZSBwZXJtYW5lbnQgc2VjdXJpdHkgY3JlZGVudGlhbHM7IGluc3RlYWQsIHRoZXkgYXJlIGFzc3VtZWQgZHluYW1pY2FsbHkgYnkgRUMyIGluc3RhbmNlcywgTGFtYmRhIGZ1bmN0aW9ucywgb3IgZmVkZXJhdGVkIGlkZW50aXRpZXMgdmlhIFNUUyBmb3IgdGVtcG9yYXJ5IHRva2Vucy4nLFxuICAgICAgdG9waWM6ICdJQU0gJiBTZWN1cml0eScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2F3c18wMicsXG4gICAgICBza2lsbDogJ0FXUycsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnQW4gRUMyIGluc3RhbmNlIGluIGEgcHJpdmF0ZSBzdWJuZXQgbmVlZHMgdG8gZG93bmxvYWQgcGFja2FnZXMgZnJvbSB0aGUgaW50ZXJuZXQgd2l0aG91dCBhbGxvd2luZyBpbmJvdW5kIGludGVybmV0IGNvbm5lY3Rpb25zLiBXaGF0IHNob3VsZCB5b3UgY29uZmlndXJlPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdOQVQgR2F0ZXdheSBsb2NhdGVkIGluIGEgcHVibGljIHN1Ym5ldCB3aXRoIGEgcm91dGUgaW4gdGhlIHByaXZhdGUgcm91dGUgdGFibGUnLFxuICAgICAgICAnQXNzaWduIGEgcHVibGljIElQIGFkZHJlc3MgZGlyZWN0bHkgdG8gdGhlIHByaXZhdGUgRUMyIGluc3RhbmNlJyxcbiAgICAgICAgJ09wZW4gcG9ydCA4MC80NDMgaW4gdGhlIFNlY3VyaXR5IEdyb3VwIGluYm91bmQgcnVsZXMgZnJvbSAwLjAuMC4wLzAnLFxuICAgICAgICAnQXR0YWNoIGFuIEludGVybmV0IEdhdGV3YXkgZGlyZWN0bHkgdG8gdGhlIHByaXZhdGUgc3VibmV0JyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0EgTkFUIChOZXR3b3JrIEFkZHJlc3MgVHJhbnNsYXRpb24pIEdhdGV3YXkgcmVzaWRlcyBpbiBhIHB1YmxpYyBzdWJuZXQgYW5kIGVuYWJsZXMgb3V0Ym91bmQgSVB2NCB0cmFmZmljIHRvIHRoZSBpbnRlcm5ldCB3aGlsZSBwcmV2ZW50aW5nIGV4dGVybmFsIGhvc3RzIGZyb20gaW5pdGlhdGluZyBjb25uZWN0aW9ucy4nLFxuICAgICAgdG9waWM6ICdWUEMgJiBOZXR3b3JraW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXdzXzAzJyxcbiAgICAgIHNraWxsOiAnQVdTJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGljaCBBV1Mgc2VydmljZSBwcm92aWRlcyBzZXJ2ZXJsZXNzIGV2ZW50LWRyaXZlbiBjb21wdXRlIHRoYXQgc2NhbGVzIGF1dG9tYXRpY2FsbHkgZnJvbSB6ZXJvIHRvIHRob3VzYW5kcyBvZiBjb25jdXJyZW50IGV4ZWN1dGlvbnM/JyxcbiAgICAgIG9wdGlvbnM6IFsnQVdTIExhbWJkYScsICdBbWF6b24gRUMyJywgJ0FtYXpvbiBFQ1Mgb24gRUMyJywgJ0FXUyBFbGFzdGljIEJlYW5zdGFsayddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdBV1MgTGFtYmRhIHJ1bnMgY29kZSBpbiByZXNwb25zZSB0byBldmVudHMgYW5kIGF1dG9tYXRpY2FsbHkgbWFuYWdlcyB0aGUgdW5kZXJseWluZyBjb21wdXRlIHJlc291cmNlcyB3aXRob3V0IHByb3Zpc2lvbmVkIHNlcnZlciBvdmVyaGVhZC4nLFxuICAgICAgdG9waWM6ICdTZXJ2ZXJsZXNzIENvbXB1dGUnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhd3NfMDQnLFxuICAgICAgc2tpbGw6ICdBV1MnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgUzMgc3RvcmFnZSBjbGFzcyBpcyBiZXN0IGZvciBkYXRhIGFjY2Vzc2VkIGxlc3MgdGhhbiBvbmNlIGEgbW9udGgsIHJlcXVpcmluZyBtaWxsaXNlY29uZCByZXRyaWV2YWwgdGltZXMgYXQgbG93ZXIgc3RvcmFnZSBjb3N0PycsXG4gICAgICBvcHRpb25zOiBbJ1MzIFN0YW5kYXJkLUluZnJlcXVlbnQgQWNjZXNzIChTMyBTdGFuZGFyZC1JQSknLCAnUzMgR2xhY2llciBGbGV4aWJsZSBSZXRyaWV2YWwnLCAnUzMgR2xhY2llciBEZWVwIEFyY2hpdmUnLCAnUzMgT25lIFpvbmUnXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnUzMgU3RhbmRhcmQtSUEgaXMgZGVzaWduZWQgZm9yIGRhdGEgdGhhdCBpcyBhY2Nlc3NlZCBsZXNzIGZyZXF1ZW50bHksIGJ1dCByZXF1aXJlcyByYXBpZCBtaWxsaXNlY29uZCBhY2Nlc3Mgd2hlbiBuZWVkZWQuJyxcbiAgICAgIHRvcGljOiAnU3RvcmFnZSAmIFMzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXdzXzA1JyxcbiAgICAgIHNraWxsOiAnQVdTJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggc2VydmljZSBlbmFibGVzIGRlY291cGxlZCwgYXN5bmNocm9ub3VzIGNvbW11bmljYXRpb24gYmV0d2VlbiBtaWNyb3NlcnZpY2VzIHVzaW5nIG1hbmFnZWQgbWVzc2FnZSBxdWV1ZXMgd2l0aCBndWFyYW50ZWVkIG9yZGVyIGluIEZJRk8gbW9kZT8nLFxuICAgICAgb3B0aW9uczogWydBbWF6b24gU1FTJywgJ0FtYXpvbiBTTlMnLCAnQW1hem9uIEtpbmVzaXMgRGF0YSBTdHJlYW1zJywgJ0FtYXpvbiBFdmVudEJyaWRnZSddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdBbWF6b24gU2ltcGxlIFF1ZXVlIFNlcnZpY2UgKFNRUykgb2ZmZXJzIHN0YW5kYXJkIGFuZCBGSUZPIHF1ZXVlcyB0byBkZWNvdXBsZSBtaWNyb3NlcnZpY2VzIGFuZCBkaXN0cmlidXRlZCBzb2Z0d2FyZSBzeXN0ZW1zLicsXG4gICAgICB0b3BpYzogJ01lc3NhZ2luZyAmIFF1ZXVlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2F3c18wNicsXG4gICAgICBza2lsbDogJ0FXUycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcHJpbWFyeSBkaWZmZXJlbmNlIGJldHdlZW4gQVdTIFNlY3VyaXR5IEdyb3VwcyBhbmQgTmV0d29yayBBY2Nlc3MgQ29udHJvbCBMaXN0cyAoTkFDTHMpPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdTZWN1cml0eSBHcm91cHMgYXJlIHN0YXRlZnVsIGFuZCBvcGVyYXRlIGF0IHRoZSBpbnN0YW5jZS9FTkkgbGV2ZWw7IE5BQ0xzIGFyZSBzdGF0ZWxlc3MgYW5kIG9wZXJhdGUgYXQgdGhlIHN1Ym5ldCBib3VuZGFyeSBsZXZlbCcsXG4gICAgICAgICdTZWN1cml0eSBHcm91cHMgYXJlIHN0YXRlbGVzcyB3aGlsZSBOQUNMcyBhcmUgc3RhdGVmdWwnLFxuICAgICAgICAnTkFDTHMgY2Fubm90IGJsb2NrIHNwZWNpZmljIElQIGFkZHJlc3NlcycsXG4gICAgICAgICdTZWN1cml0eSBHcm91cHMgb3BlcmF0ZSBhdCB0aGUgVlBDIHBlZXJpbmcgbGV2ZWwgb25seScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdTZWN1cml0eSBHcm91cHMgYXJlIHN0YXRlZnVsIChpbmJvdW5kIHRyYWZmaWMgYWxsb3dlZCBpbXBsaWVzIG91dGJvdW5kIHJlc3BvbnNlIGlzIGF1dG9tYXRpY2FsbHkgcGVybWl0dGVkKSBhdCB0aGUgRU5JIGxldmVsLiBOQUNMcyBldmFsdWF0ZSBydWxlcyBpbiBudW1lcmljYWwgb3JkZXIgc3RhdGVsZXNzbHkgYXQgdGhlIHN1Ym5ldCBib3VuZGFyeS4nLFxuICAgICAgdG9waWM6ICdWUEMgU2VjdXJpdHknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdhd3NfMDcnLFxuICAgICAgc2tpbGw6ICdBV1MnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIG1hbmFnZWQgQVdTIGRhdGFiYXNlIGVuZ2luZSBwcm92aWRlcyBhIG11bHRpLW1vZGVsIE5vU1FMIGRhdGFiYXNlIHdpdGggc2luZ2xlLWRpZ2l0IG1pbGxpc2Vjb25kIGxhdGVuY3kgYXQgYW55IHNjYWxlPycsXG4gICAgICBvcHRpb25zOiBbJ0FtYXpvbiBEeW5hbW9EQicsICdBbWF6b24gUkRTIFBvc3RncmVTUUwnLCAnQW1hem9uIEF1cm9yYSBTZXJ2ZXJsZXNzJywgJ0FtYXpvbiBEb2N1bWVudERCJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0FtYXpvbiBEeW5hbW9EQiBpcyBhIGZ1bGx5IG1hbmFnZWQsIHNlcnZlcmxlc3Mga2V5LXZhbHVlIGFuZCBkb2N1bWVudCBkYXRhYmFzZSBkZWxpdmVyaW5nIGNvbnNpc3RlbnQgc2luZ2xlLWRpZ2l0IG1pbGxpc2Vjb25kIHBlcmZvcm1hbmNlIHdpdGggYXV0b21hdGljIHBhcnRpdGlvbmluZy4nLFxuICAgICAgdG9waWM6ICdEYXRhYmFzZXMgJiBOb1NRTCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2F3c18wOCcsXG4gICAgICBza2lsbDogJ0FXUycsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBBV1Mgc2VydmljZSBzaG91bGQgYmUgdXNlZCB0byBzZWN1cmVseSBtYW5hZ2UsIHJvdGF0ZSwgYW5kIHJldHJpZXZlIGRhdGFiYXNlIHBhc3N3b3JkcyBhbmQgQVBJIGtleXMgd2l0aG91dCBoYXJkY29kaW5nIHRoZW0gaW4gY29kZT8nLFxuICAgICAgb3B0aW9uczogWydBV1MgU2VjcmV0cyBNYW5hZ2VyJywgJ0FXUyBLTVMgYWxvbmUnLCAnQW1hem9uIFMzIG1ldGFkYXRhJywgJ0FXUyBDbG91ZFRyYWlsJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0FXUyBTZWNyZXRzIE1hbmFnZXIgZW5hYmxlcyB5b3UgdG8gcm90YXRlLCBtYW5hZ2UsIGFuZCByZXRyaWV2ZSBkYXRhYmFzZSBjcmVkZW50aWFscywgQVBJIGtleXMsIGFuZCBvdGhlciBzZWNyZXRzIHRocm91Z2hvdXQgdGhlaXIgbGlmZWN5Y2xlLicsXG4gICAgICB0b3BpYzogJ1NlY3VyaXR5ICYgU2VjcmV0cycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2F3c18wOScsXG4gICAgICBza2lsbDogJ0FXUycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcm9sZSBvZiBhbiBBV1MgQXBwbGljYXRpb24gTG9hZCBCYWxhbmNlciAoQUxCKSBjb21wYXJlZCB0byBhIE5ldHdvcmsgTG9hZCBCYWxhbmNlciAoTkxCKT8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQUxCIG9wZXJhdGVzIGF0IExheWVyIDcgKEhUVFAvSFRUUFMpIGFuZCBzdXBwb3J0cyBwYXRoLWJhc2VkIGFuZCBob3N0LWJhc2VkIHJvdXRpbmc7IE5MQiBvcGVyYXRlcyBhdCBMYXllciA0IChUQ1AvVURQKSBmb3IgdWx0cmEtbG93IGxhdGVuY3knLFxuICAgICAgICAnQUxCIG9ubHkgc3VwcG9ydHMgVURQIHRyYWZmaWMnLFxuICAgICAgICAnTkxCIGNhbiBpbnNwZWN0IEhUVFAgaGVhZGVycyBhbmQgY29va2llcycsXG4gICAgICAgICdBTEIgY2Fubm90IGRpc3RyaWJ1dGUgdHJhZmZpYyBhY3Jvc3MgQXZhaWxhYmlsaXR5IFpvbmVzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0FMQnMgZXZhbHVhdGUgTGF5ZXIgNyBIVFRQL0hUVFBTIGhlYWRlcnMsIHJvdXRpbmcgcnVsZXMsIGFuZCBwYXRoIHByZWZpeGVzLCB3aGlsZSBOTEJzIG9wZXJhdGUgYXQgTGF5ZXIgNCBoYW5kbGluZyBtaWxsaW9ucyBvZiByZXF1ZXN0cyBwZXIgc2Vjb25kIGF0IHVsdHJhLWxvdyBsYXRlbmN5LicsXG4gICAgICB0b3BpYzogJ05ldHdvcmtpbmcgJiBFbGFzdGljIExvYWQgQmFsYW5jaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnYXdzXzEwJyxcbiAgICAgIHNraWxsOiAnQVdTJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggSW5mcmFzdHJ1Y3R1cmUgYXMgQ29kZSAoSWFDKSBzZXJ2aWNlIGlzIG5hdGl2ZSB0byBBV1MgYW5kIGRlZmluZXMgY2xvdWQgcmVzb3VyY2VzIHVzaW5nIEpTT04gb3IgWUFNTCB0ZW1wbGF0ZXM/JyxcbiAgICAgIG9wdGlvbnM6IFsnQVdTIENsb3VkRm9ybWF0aW9uJywgJ0FXUyBDb2RlRGVwbG95JywgJ0FXUyBPcHNXb3JrcycsICdBV1MgQ29kZVBpcGVsaW5lJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0FXUyBDbG91ZEZvcm1hdGlvbiBsZXRzIHlvdSBtb2RlbCwgcHJvdmlzaW9uLCBhbmQgbWFuYWdlIEFXUyBhbmQgdGhpcmQtcGFydHkgcmVzb3VyY2VzIGJ5IHRyZWF0aW5nIGluZnJhc3RydWN0dXJlIGFzIGNvZGUuJyxcbiAgICAgIHRvcGljOiAnRGV2T3BzICYgSWFDJyxcbiAgICB9LFxuICBdLFxuICBHaXQ6IFtcbiAgICB7XG4gICAgICBpZDogJ2dpdF8wMScsXG4gICAgICBza2lsbDogJ0dpdCcsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgY29yZSBkaWZmZXJlbmNlIGJldHdlZW4gYGdpdCBtZXJnZWAgYW5kIGBnaXQgcmViYXNlYD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnYGdpdCBtZXJnZWAgY3JlYXRlcyBhIG5ldyBtZXJnZSBjb21taXQgY29tYmluaW5nIGhpc3RvcnkgYnJhbmNoZXM7IGBnaXQgcmViYXNlYCByZWFwcGxpZXMgY29tbWl0cyBvbiB0b3Agb2YgYW5vdGhlciBiYXNlIHRpcCBmb3IgYSBsaW5lYXIgaGlzdG9yeScsXG4gICAgICAgICdgZ2l0IHJlYmFzZWAgZGVsZXRlcyBhbGwgcmVtb3RlIGJyYW5jaGVzJyxcbiAgICAgICAgJ2BnaXQgbWVyZ2VgIGNhbiBvbmx5IGJlIHBlcmZvcm1lZCBieSByZXBvc2l0b3J5IG93bmVycycsXG4gICAgICAgICdUaGVyZSBpcyBubyBkaWZmZXJlbmNlOyB0aGV5IGFyZSBhbGlhc2VzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ01lcmdlIHJldGFpbnMgY2hyb25vbG9naWNhbCBicmFuY2ggaGlzdG9yeSB3aXRoIGV4cGxpY2l0IG1lcmdlIGNvbW1pdHMuIFJlYmFzZSByZXdpcmVzIHRoZSBjb21taXQgYW5jZXN0cnksIG1vdmluZyB0aGUgZW50aXJlIGZlYXR1cmUgYnJhbmNoIHRvIGJlZ2luIG9uIHRoZSB0aXAgb2YgdGhlIHRhcmdldCBicmFuY2guJyxcbiAgICAgIHRvcGljOiAnQnJhbmNoaW5nICYgSGlzdG9yeScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2dpdF8wMicsXG4gICAgICBza2lsbDogJ0dpdCcsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnWW91IGFjY2lkZW50YWxseSByYW4gYGdpdCByZXNldCAtLWhhcmQgSEVBRH4xYCBhbmQgbG9zdCBhbiB1bnB1c2hlZCBjb21taXQuIEhvdyBkbyB5b3UgcmVjb3ZlciBpdD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnVXNlIGBnaXQgcmVmbG9nYCB0byBsb2NhdGUgdGhlIGNvbW1pdCBoYXNoLCB0aGVuIHJ1biBgZ2l0IGNoZWNrb3V0YCBvciBgZ2l0IHJlc2V0YCB0byB0aGF0IFNIQScsXG4gICAgICAgICdUaGUgY29tbWl0IGlzIHBlcm1hbmVudGx5IGRlc3Ryb3llZCBhbmQgY2Fubm90IGJlIHJlY292ZXJlZCcsXG4gICAgICAgICdSdW4gYGdpdCBjbGVhbiAtZmRgJyxcbiAgICAgICAgJ0RlbGV0ZSB0aGUgYC5naXRgIGZvbGRlciBhbmQgcmUtY2xvbmUnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYGdpdCByZWZsb2dgIHJlY29yZHMgYWxsIHVwZGF0ZXMgdG8gdGhlIHRpcHMgb2YgYnJhbmNoZXMgYW5kIEhFQUQgaW4gdGhlIGxvY2FsIHJlcG9zaXRvcnkuIEV2ZW4gb3JwaGFuZWQgY29tbWl0cyByZW1haW4gaW4gR2l04oCZcyBvYmplY3QgZGF0YWJhc2UgdW50aWwgcHJ1bmVkIGJ5IGdhcmJhZ2UgY29sbGVjdGlvbi4nLFxuICAgICAgdG9waWM6ICdSZWNvdmVyeSAmIFJlZmxvZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2dpdF8wMycsXG4gICAgICBza2lsbDogJ0dpdCcsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGBnaXQgZmV0Y2hgIGFuZCBgZ2l0IHB1bGxgPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdgZ2l0IGZldGNoYCBkb3dubG9hZHMgcmVtb3RlIG9iamVjdHMgYW5kIHJlZnMgd2l0aG91dCBtb2RpZnlpbmcgeW91ciBsb2NhbCB3b3JraW5nIGJyYW5jaDsgYGdpdCBwdWxsYCBkb2VzIGBnaXQgZmV0Y2hgIGZvbGxvd2VkIGJ5IGBnaXQgbWVyZ2VgJyxcbiAgICAgICAgJ2BnaXQgcHVsbGAgZG93bmxvYWRzIHdpdGhvdXQgbWVyZ2luZzsgYGdpdCBmZXRjaGAgb3ZlcndyaXRlcyBsb2NhbCBmaWxlcycsXG4gICAgICAgICdgZ2l0IGZldGNoYCBvbmx5IGNoZWNrcyBjb21taXQgY291bnRzJyxcbiAgICAgICAgJ2BnaXQgcHVsbGAgcmVxdWlyZXMgcm9vdCBhZG1pbmlzdHJhdG9yIHByaXZpbGVnZXMnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYGdpdCBmZXRjaGAgdXBkYXRlcyByZW1vdGUtdHJhY2tpbmcgYnJhbmNoZXMgKGBvcmlnaW4vbWFpbmApIHNhZmVseS4gYGdpdCBwdWxsYCBmZXRjaGVzIHRoZSByZW1vdGUgY2hhbmdlcyBhbmQgaW1tZWRpYXRlbHkgYXR0ZW1wdHMgdG8gbWVyZ2UgdGhlbSBpbnRvIHlvdXIgY2hlY2tlZC1vdXQgYnJhbmNoLicsXG4gICAgICB0b3BpYzogJ1JlbW90ZXMgJiBTeW5jaHJvbml6YXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdnaXRfMDQnLFxuICAgICAgc2tpbGw6ICdHaXQnLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBjb21tYW5kIHRlbXBvcmFyaWx5IHNoZWx2ZXMgdW5jb21taXR0ZWQgbG9jYWwgY2hhbmdlcyBzbyB5b3UgY2FuIHN3aXRjaCBicmFuY2hlcyBjbGVhbmx5PycsXG4gICAgICBvcHRpb25zOiBbJ2dpdCBzdGFzaCcsICdnaXQgcGF1c2UnLCAnZ2l0IHNoZWxmJywgJ2dpdCBmcmVlemUnXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYGdpdCBzdGFzaGAgcmVjb3JkcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgd29ya2luZyBkaXJlY3RvcnkgYW5kIGluZGV4IGludG8gYSBzdGFjaywgcmV2ZXJ0aW5nIHRoZSB3b3JraW5nIGRpcmVjdG9yeSB0byBtYXRjaCB0aGUgSEVBRCBjb21taXQuJyxcbiAgICAgIHRvcGljOiAnU3Rhc2hpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdnaXRfMDUnLFxuICAgICAgc2tpbGw6ICdHaXQnLFxuICAgICAgdHlwZTogJ3ByYWN0aWNhbC1jb2RpbmcnLFxuICAgICAgcXVlc3Rpb246ICdIb3cgZG8geW91IHNlbGVjdGl2ZWx5IGFwcGx5IGEgc3BlY2lmaWMgc2luZ2xlIGNvbW1pdCBmcm9tIG9uZSBicmFuY2ggb250byB5b3VyIGN1cnJlbnQgYWN0aXZlIGJyYW5jaD8nLFxuICAgICAgb3B0aW9uczogWydnaXQgY2hlcnJ5LXBpY2sgPGNvbW1pdC1zaGE+JywgJ2dpdCBleHRyYWN0IDxjb21taXQtc2hhPicsICdnaXQgcGF0Y2gtYXBwbHkgPGNvbW1pdC1zaGE+JywgJ2dpdCBhZG9wdCA8Y29tbWl0LXNoYT4nXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYGdpdCBjaGVycnktcGlja2AgYXBwbGllcyB0aGUgY2hhbmdlcyBpbnRyb2R1Y2VkIGJ5IHNvbWUgZXhpc3RpbmcgY29tbWl0cyBvbnRvIHRoZSBjdXJyZW50IGFjdGl2ZSBicmFuY2guJyxcbiAgICAgIHRvcGljOiAnQ2hlcnJ5LXBpY2tpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdnaXRfMDYnLFxuICAgICAgc2tpbGw6ICdHaXQnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZG9lcyB0aGUgYC5naXRpZ25vcmVgIGZpbGUgZG8/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1NwZWNpZmllcyBpbnRlbnRpb25hbGx5IHVudHJhY2tlZCBmaWxlcyBhbmQgcGF0dGVybnMgdGhhdCBHaXQgc2hvdWxkIGlnbm9yZScsXG4gICAgICAgICdEZWxldGVzIGZpbGVzIGZyb20gZGlzayB3aGVuIGNvbW1pdHRpbmcnLFxuICAgICAgICAnRW5jcnlwdHMgc2Vuc2l0aXZlIHBhc3N3b3JkcyBpbiByZXBvc2l0b3J5IGhpc3RvcnknLFxuICAgICAgICAnTGltaXRzIHJlcG9zaXRvcnkgc2l6ZSB0byAxMDBNQicsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdBIGAuZ2l0aWdub3JlYCBmaWxlIHNwZWNpZmllcyBwYXR0ZXJucyBtYXRjaGluZyBmaWxlcyAobGlrZSBgbm9kZV9tb2R1bGVzYCwgYC5lbnZgLCBidWlsZCBhcnRpZmFjdHMpIHRoYXQgc2hvdWxkIG5vdCBiZSB0cmFja2VkIGJ5IEdpdC4nLFxuICAgICAgdG9waWM6ICdDb25maWd1cmF0aW9uICYgSWdub3JlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZ2l0XzA3JyxcbiAgICAgIHNraWxsOiAnR2l0JyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaHkgaXMgaXQgZGFuZ2Vyb3VzIHRvIHJ1biBgZ2l0IHB1c2ggLS1mb3JjZWAgb24gc2hhcmVkIHB1YmxpYyBicmFuY2hlcyBsaWtlIGBtYWluYD8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnSXQgb3ZlcndyaXRlcyByZW1vdGUgaGlzdG9yeSwgY2F1c2luZyBvdGhlciBkZXZlbG9wZXJz4oCZIGxvY2FsIHJlcG9zaXRvcmllcyB0byBkaXZlcmdlIGFuZCBwb3RlbnRpYWxseSBkZXN0cm95aW5nIGNvbGxhYm9yYXRvcnPigJkgY29tbWl0cycsXG4gICAgICAgICdJdCB0ZXJtaW5hdGVzIHRoZSByZW1vdGUgR2l0SHViIHNlcnZlciBwcm9jZXNzJyxcbiAgICAgICAgJ0l0IGNvbnZlcnRzIHByaXZhdGUgcmVwb3NpdG9yaWVzIGludG8gcHVibGljIHJlcG9zaXRvcmllcycsXG4gICAgICAgICdHaXQgd2lsbCBwZXJtYW5lbnRseSBsb2NrIHRoZSBicmFuY2ggYWdhaW5zdCBmdXR1cmUgY29tbWl0cycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdGb3JjZWQgcHVzaCByZXBsYWNlcyB0aGUgcmVtb3RlIGJyYW5jaCBwb2ludGVyIHdpdGggeW91ciBsb2NhbCBoaXN0b3J5LCBvdmVyd3JpdGluZyBhbnkgY29tbWl0cyBwdXNoZWQgYnkgb3RoZXJzLiBgZ2l0IHB1c2ggLS1mb3JjZS13aXRoLWxlYXNlYCBpcyBzYWZlci4nLFxuICAgICAgdG9waWM6ICdUZWFtIENvbGxhYm9yYXRpb24gJiBCZXN0IFByYWN0aWNlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2dpdF8wOCcsXG4gICAgICBza2lsbDogJ0dpdCcsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyBhIGRldGFjaGVkIEhFQUQgc3RhdGUgaW4gR2l0PycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdIRUFEIHBvaW50cyBkaXJlY3RseSB0byBhIHNwZWNpZmljIGNvbW1pdCByYXRoZXIgdGhhbiB0byBhIG5hbWVkIGJyYW5jaCBwb2ludGVyJyxcbiAgICAgICAgJ1RoZSByZXBvc2l0b3J5IGlzIGNvcnJ1cHQgYW5kIGNhbm5vdCByZWNvcmQgbmV3IGNvbW1pdHMnLFxuICAgICAgICAnVGhlIGxvY2FsIG1hc3RlciBicmFuY2ggd2FzIGRlbGV0ZWQgb24gdGhlIHJlbW90ZScsXG4gICAgICAgICdHaXQgaXMgcnVubmluZyBpbiBoZWFkbGVzcyBkYWVtb24gbW9kZScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdJbiBkZXRhY2hlZCBIRUFEIHN0YXRlLCBIRUFEIHBvaW50cyB0byBhIGNvbW1pdCBoYXNoIGRpcmVjdGx5LiBOZXcgY29tbWl0cyBtYWRlIGhlcmUgd2lsbCBiZWNvbWUgb3JwaGFuZWQgb25jZSB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgYnJhbmNoIHVubGVzcyB0YWdnZWQgb3IgYnJhbmNoZWQuJyxcbiAgICAgIHRvcGljOiAnSEVBRCAmIFJlZmVyZW5jZXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdnaXRfMDknLFxuICAgICAgc2tpbGw6ICdHaXQnLFxuICAgICAgdHlwZTogJ3ByYWN0aWNhbC1jb2RpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaGljaCB0b29sIGFsbG93cyB5b3UgdG8gcGVyZm9ybSBhbiBhdXRvbWF0ZWQgYmluYXJ5IHNlYXJjaCB0aHJvdWdoIGNvbW1pdCBoaXN0b3J5IHRvIGlkZW50aWZ5IHRoZSBjb21taXQgdGhhdCBpbnRyb2R1Y2VkIGEgYnVnPycsXG4gICAgICBvcHRpb25zOiBbJ2dpdCBiaXNlY3QnLCAnZ2l0IGRlYnVnJywgJ2dpdCB0cmFjZScsICdnaXQgZ3JlcC1jb21taXQnXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYGdpdCBiaXNlY3RgIHVzZXMgYSBiaW5hcnkgc2VhcmNoIGFsZ29yaXRobSB0byB0ZXN0IGNvbW1pdHMgYmV0d2VlbiBhIGtub3duIFwiZ29vZFwiIHN0YXRlIGFuZCBhIFwiYmFkXCIgc3RhdGUsIGlzb2xhdGluZyB0aGUgZXhhY3QgYnJlYWtpbmcgY29tbWl0IHF1aWNrbHkuJyxcbiAgICAgIHRvcGljOiAnQmlzZWN0ICYgRGVidWdnaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZ2l0XzEwJyxcbiAgICAgIHNraWxsOiAnR2l0JyxcbiAgICAgIHR5cGU6ICdjb2RlLW91dHB1dCcsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZG9lcyBgZ2l0IGNvbW1pdCAtLWFtZW5kYCBhY2NvbXBsaXNoPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdDb21iaW5lcyBzdGFnZWQgY2hhbmdlcyB3aXRoIHRoZSBwcmV2aW91cyBjb21taXQsIG1vZGlmeWluZyBpdHMgY29udGVudCBhbmQvb3IgY29tbWl0IG1lc3NhZ2UnLFxuICAgICAgICAnUmV2ZXJ0cyB0aGUgbGFzdCBjb21taXQgY29tcGxldGVseScsXG4gICAgICAgICdQdXNoZXMgY29tbWl0cyBkaXJlY3RseSB0byBwcm9kdWN0aW9uJyxcbiAgICAgICAgJ0NyZWF0ZXMgYW4gYW5ub3RhdGVkIHRhZycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgZ2l0IGNvbW1pdCAtLWFtZW5kYCByZXBsYWNlcyB0aGUgdGlwIG9mIHRoZSBjdXJyZW50IGJyYW5jaCB3aXRoIGEgbmV3IGNvbW1pdCBjb250YWluaW5nIHN0YWdlZCBhZGp1c3RtZW50cyBhbmQgdXBkYXRlZCBjb21taXQgbWVzc2FnZXMuJyxcbiAgICAgIHRvcGljOiAnTW9kaWZ5aW5nIEhpc3RvcnknLFxuICAgIH0sXG4gIF0sXG4gICdDKysnOiBbXG4gICAge1xuICAgICAgaWQ6ICdjcHBfMDEnLFxuICAgICAgc2tpbGw6ICdDKysnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgUkFJSSAoUmVzb3VyY2UgQWNxdWlzaXRpb24gSXMgSW5pdGlhbGl6YXRpb24pIGluIG1vZGVybiBDKys/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0EgZGVzaWduIHBhdHRlcm4gd2hlcmUgcmVzb3VyY2UgbGlmZWN5Y2xlIGlzIGJvdW5kIHRvIG9iamVjdCBsaWZldGltZTsgY29uc3RydWN0b3JzIGFjcXVpcmUgcmVzb3VyY2VzIGFuZCBkZXN0cnVjdG9ycyByZWxlYXNlIHRoZW0gZGV0ZXJtaW5pc3RpY2FsbHknLFxuICAgICAgICAnQSBjb21waWxlciBmbGFnIHRoYXQgb3B0aW1pemVzIHJlY3Vyc2l2ZSBmdW5jdGlvbnMnLFxuICAgICAgICAnQW4gZXh0ZXJuYWwgZ2FyYmFnZSBjb2xsZWN0aW9uIGxpYnJhcnkgZm9yIEMrKycsXG4gICAgICAgICdBIG11bHRpdGhyZWFkaW5nIHNlbWFwaG9yZSBzeXN0ZW0nLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnUkFJSSBndWFyYW50ZWVzIHRoYXQgcmVzb3VyY2VzIChoZWFwIG1lbW9yeSwgZmlsZSBoYW5kbGVzLCBtdXRleCBsb2NrcykgYXJlIHRpZWQgdG8gc3RhY2sgb2JqZWN0cyBhbmQgYXV0b21hdGljYWxseSByZWxlYXNlZCBpbiBkZXN0cnVjdG9ycyB3aGVuIGxlYXZpbmcgc2NvcGUuJyxcbiAgICAgIHRvcGljOiAnUmVzb3VyY2UgTWFuYWdlbWVudCAmIFJBSUknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjcHBfMDInLFxuICAgICAgc2tpbGw6ICdDKysnLFxuICAgICAgdHlwZTogJ2RlYnVnZ2luZycsXG4gICAgICBxdWVzdGlvbjogJ1doeSBzaG91bGQgeW91IHByZWZlciBgc3RkOjp1bmlxdWVfcHRyYCBvdmVyIHJhdyBwb2ludGVycyBmb3IgZHluYW1pYyBoZWFwIGFsbG9jYXRpb25zPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdJdCBleHByZXNzZXMgZXhjbHVzaXZlIG93bmVyc2hpcCBhbmQgYXV0b21hdGljYWxseSBmcmVlcyBtZW1vcnkgdmlhIGBkZWxldGVgIHVwb24gZGVzdHJ1Y3Rpb24sIGVsaW1pbmF0aW5nIG1lbW9yeSBsZWFrcyBhbmQgZG91YmxlLWZyZWUgYnVncycsXG4gICAgICAgICdgc3RkOjp1bmlxdWVfcHRyYCBjb21waWxlcyB0byBhc3NlbWJseSB3aXRoIHplcm8gb3ZlcmhlYWQgYW5kIGlzIGZhc3RlciB0aGFuIHJhdyBhcnJheXMnLFxuICAgICAgICAnUmF3IHBvaW50ZXJzIGFyZSBkZXByZWNhdGVkIGluIEMrKzIwJyxcbiAgICAgICAgJ2B1bmlxdWVfcHRyYCBhdXRvbWF0aWNhbGx5IHBhcmFsbGVsaXplcyBhcnJheSBsb29rdXBzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BzdGQ6OnVuaXF1ZV9wdHJgIGlzIGEgc21hcnQgcG9pbnRlciB0aGF0IG93bnMgYW5kIG1hbmFnZXMgYW5vdGhlciBvYmplY3QgdGhyb3VnaCBhIHBvaW50ZXIgYW5kIGRpc3Bvc2VzIG9mIHRoYXQgb2JqZWN0IHdoZW4gdGhlIHVuaXF1ZV9wdHIgZ29lcyBvdXQgb2Ygc2NvcGUuJyxcbiAgICAgIHRvcGljOiAnU21hcnQgUG9pbnRlcnMgJiBNZW1vcnknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjcHBfMDMnLFxuICAgICAgc2tpbGw6ICdDKysnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZG9lcyBNb3ZlIFNlbWFudGljcyAoYHN0ZDo6bW92ZWAsIHJ2YWx1ZSByZWZlcmVuY2VzIGBUJiZgKSBhY2hpZXZlIGluIEMrKzExIGFuZCBhYm92ZT8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnQWxsb3dzIHRyYW5zZmVycmluZyBvd25lcnNoaXAgb2YgcmVzb3VyY2VzIGZyb20gdGVtcG9yYXJ5IG9iamVjdHMgd2l0aG91dCBtYWtpbmcgZXhwZW5zaXZlIGRlZXAgY29waWVzJyxcbiAgICAgICAgJ01vdmVzIG1lbW9yeSBmcm9tIFJBTSB0byBTU0QgY2FjaGUnLFxuICAgICAgICAnRW5hYmxlcyBydW5uaW5nIEMrKyBjb2RlIG9uIG11bHRpcGxlIENQVSBhcmNoaXRlY3R1cmVzJyxcbiAgICAgICAgJ0NvbXBpbGVzIGNvZGUgZHVyaW5nIGV4ZWN1dGlvbiBpbnN0ZWFkIG9mIGFoZWFkLW9mLXRpbWUnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnTW92ZSBzZW1hbnRpY3MgYWxsb3dzIG9iamVjdHMgdG8gc3RlYWwgdGhlIGludGVybmFsIGhlYXAgYnVmZmVycyBvZiBleHBpcmluZyB0ZW1wb3JhcnkgcnZhbHVlcyByYXRoZXIgdGhhbiBhbGxvY2F0aW5nIGFuZCBjb3B5aW5nIG1lbW9yeSBieXRlLWZvci1ieXRlLicsXG4gICAgICB0b3BpYzogJ01vdmUgU2VtYW50aWNzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3BwXzA0JyxcbiAgICAgIHNraWxsOiAnQysrJyxcbiAgICAgIHR5cGU6ICdjb2RlLW91dHB1dCcsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaGFwcGVucyBpZiBhIGJhc2UgY2xhc3MgZGVzdHJ1Y3RvciBpcyBOT1QgZGVjbGFyZWQgYHZpcnR1YWxgIHdoZW4gZGVsZXRpbmcgYSBkZXJpdmVkIG9iamVjdCB2aWEgYSBiYXNlIHBvaW50ZXI/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1VuZGVmaW5lZCBCZWhhdmlvcjogdGhlIGRlcml2ZWQgY2xhc3MgZGVzdHJ1Y3RvciB3aWxsIG5vdCBiZSBjYWxsZWQsIHJlc3VsdGluZyBpbiByZXNvdXJjZSBsZWFrcycsXG4gICAgICAgICdDb21waWxhdGlvbiBlcnJvcjogQysrIGZvcmJpZHMgbm9uLXZpcnR1YWwgYmFzZSBkZXN0cnVjdG9ycycsXG4gICAgICAgICdUaGUgZGVyaXZlZCBkZXN0cnVjdG9yIHJ1bnMgdHdpY2UnLFxuICAgICAgICAnTWVtb3J5IGlzIGZyZWVkIGNvcnJlY3RseSByZWdhcmRsZXNzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0RlbGV0aW5nIGEgZGVyaXZlZCBjbGFzcyB0aHJvdWdoIGEgcG9pbnRlciB0byBiYXNlIHdpdGggYSBub24tdmlydHVhbCBkZXN0cnVjdG9yIHJlc3VsdHMgaW4gdW5kZWZpbmVkIGJlaGF2aW9yIHBlciB0aGUgQysrIHN0YW5kYXJkOyBkZXJpdmVkIGNsZWFudXAgY29kZSBuZXZlciBleGVjdXRlcy4nLFxuICAgICAgdG9waWM6ICdQb2x5bW9ycGhpc20gJiBEZXN0cnVjdG9ycycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NwcF8wNScsXG4gICAgICBza2lsbDogJ0MrKycsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doYXQga2V5d29yZCBpbmRpY2F0ZXMgdGhhdCBhIGZ1bmN0aW9uIGNhbiBiZSBldmFsdWF0ZWQgYXQgY29tcGlsZSB0aW1lIGlmIHByb3ZpZGVkIHdpdGggY29uc3RhbnQgZXhwcmVzc2lvbnM/JyxcbiAgICAgIG9wdGlvbnM6IFsnY29uc3RleHByJywgJ2NvbnN0JywgJ2lubGluZScsICdzdGF0aWMnXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnYGNvbnN0ZXhwcmAgc3BlY2lmaWVzIHRoYXQgdGhlIHZhbHVlIG9mIGFuIG9iamVjdCBvciByZXR1cm4gdmFsdWUgb2YgYSBmdW5jdGlvbiBjYW4gYmUgY29tcHV0ZWQgYXQgY29tcGlsZSB0aW1lLicsXG4gICAgICB0b3BpYzogJ0NvbXBpbGUtVGltZSBDb21wdXRhdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NwcF8wNicsXG4gICAgICBza2lsbDogJ0MrKycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgUnVsZSBvZiA1IGluIG1vZGVybiBDKys/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0lmIGEgY2xhc3MgZGVmaW5lcyBhbnkgb2YgRGVzdHJ1Y3RvciwgQ29weSBDb25zdHJ1Y3RvciwgQ29weSBBc3NpZ25tZW50LCBNb3ZlIENvbnN0cnVjdG9yLCBvciBNb3ZlIEFzc2lnbm1lbnQsIGl0IHNob3VsZCBsaWtlbHkgZGVmaW5lIG9yIGV4cGxpY2l0bHkgZGVsZXRlIGFsbCA1JyxcbiAgICAgICAgJ0EgY2xhc3MgY2Fubm90IGluaGVyaXQgZnJvbSBtb3JlIHRoYW4gNSBiYXNlIGNsYXNzZXMnLFxuICAgICAgICAnRnVuY3Rpb25zIHNob3VsZCBub3QgaGF2ZSBtb3JlIHRoYW4gNSBwYXJhbWV0ZXJzJyxcbiAgICAgICAgJ0NvZGUgbXVzdCBiZSBjaGVja2VkIGJ5IDUgZGlmZmVyZW50IGNvbXBpbGVycycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdUaGUgUnVsZSBvZiA1IGVuc3VyZXMgc2FmZSByZXNvdXJjZSBtYW5hZ2VtZW50OiBjdXN0b20gcmVzb3VyY2UgYWNxdWlzaXRpb24gcmVxdWlyZXMgbWFuYWdpbmcgY29weSwgbW92ZSwgYW5kIGRlc3RydWN0aW9uIHNlbWFudGljcyBjb25zaXN0ZW50bHkuJyxcbiAgICAgIHRvcGljOiAnQ2xhc3MgRGVzaWduICYgUnVsZSBvZiA1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3BwXzA3JyxcbiAgICAgIHNraWxsOiAnQysrJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBkYW5nZXIgb2YgcmV0dXJuaW5nIGEgcmVmZXJlbmNlIHRvIGEgbG9jYWwgc3RhY2sgdmFyaWFibGUgZnJvbSBhIGZ1bmN0aW9uPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdEYW5nbGluZyBSZWZlcmVuY2U6IHRoZSBsb2NhbCB2YXJpYWJsZSBpcyBkZXN0cm95ZWQgd2hlbiB0aGUgZnVuY3Rpb24gcmV0dXJucywgbGVhdmluZyB0aGUgcmVmZXJlbmNlIHBvaW50aW5nIHRvIGludmFsaWQgbWVtb3J5JyxcbiAgICAgICAgJ01lbW9yeSBsZWFrIGJlY2F1c2Ugc3RhY2sgbWVtb3J5IGNhbm5vdCBiZSByZWNsYWltZWQnLFxuICAgICAgICAnQ29tcGlsZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHByb21vdGUgdGhlIHZhcmlhYmxlIHRvIGdsb2JhbCBzY29wZScsXG4gICAgICAgICdJdCBjYXVzZXMgaW50ZWdlciBvdmVyZmxvdycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdMb2NhbCBzdGFjayB2YXJpYWJsZXMgYXJlIHBvcHBlZCBmcm9tIHRoZSBzdGFjayB3aGVuIGEgZnVuY3Rpb24gZmluaXNoZXM7IHJldHVybmluZyBhIHJlZmVyZW5jZSBvciBwb2ludGVyIHRvIHRoZW0gbGVhZHMgdG8gdW5kZWZpbmVkIGJlaGF2aW9yIHVwb24gZGVyZWZlcmVuY2UuJyxcbiAgICAgIHRvcGljOiAnUmVmZXJlbmNlcyAmIExpZmV0aW1lcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NwcF8wOCcsXG4gICAgICBza2lsbDogJ0MrKycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIGBzdGQ6OnZlY3RvcmAgYW5kIGBzdGQ6OmFycmF5YCBpbiB0aGUgQysrIFN0YW5kYXJkIFRlbXBsYXRlIExpYnJhcnk/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ2BzdGQ6OnZlY3RvcmAgaXMgYSBkeW5hbWljYWxseSBzaXplZCBjb250YWluZXIgYWxsb2NhdGVkIG9uIHRoZSBoZWFwOyBgc3RkOjphcnJheWAgaGFzIGZpeGVkIHNpemUga25vd24gYXQgY29tcGlsZS10aW1lIGFuZCBsaXZlcyBvbiB0aGUgc3RhY2snLFxuICAgICAgICAnYHN0ZDo6dmVjdG9yYCBjYW5ub3Qgc3RvcmUgb2JqZWN0cyB3aXRoIGNvbnN0cnVjdG9ycycsXG4gICAgICAgICdgc3RkOjphcnJheWAgaXMgZHluYW1pY2FsbHkgcmVzaXphYmxlIGF0IHJ1bnRpbWUnLFxuICAgICAgICAnYHN0ZDo6dmVjdG9yYCB1c2VzIGxpbmtlZCBsaXN0cyBpbnRlcm5hbGx5JyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BzdGQ6OmFycmF5PFQsIE4+YCBpcyBhIHdyYXBwZXIgYXJvdW5kIGZpeGVkLXNpemUgQy1zdHlsZSBhcnJheXMgd2l0aCBzdGFjayBzdG9yYWdlLiBgc3RkOjp2ZWN0b3I8VD5gIG1hbmFnZXMgYSBkeW5hbWljIGNvbnRpZ3VvdXMgYnVmZmVyIG9uIHRoZSBoZWFwLicsXG4gICAgICB0b3BpYzogJ1NUTCBDb250YWluZXJzJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3BwXzA5JyxcbiAgICAgIHNraWxsOiAnQysrJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggbG9jayBndWFyZCBpbiBDKysxMSBsb2NrcyBhbiBhc3NvY2lhdGVkIG11dGV4IHVwb24gY29uc3RydWN0aW9uIGFuZCB1bmxvY2tzIGl0IGF1dG9tYXRpY2FsbHkgdXBvbiBkZXN0cnVjdGlvbj8nLFxuICAgICAgb3B0aW9uczogWydzdGQ6OmxvY2tfZ3VhcmQ8c3RkOjptdXRleD4nLCAnc3RkOjphdG9taWNfdGhyZWFkJywgJ3N0ZDo6bXV0ZXhfaG9sZGVyJywgJ3N0ZDo6c2VtYXBob3JlJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BzdGQ6OmxvY2tfZ3VhcmRgIGlzIGFuIFJBSUkgd3JhcHBlciBmb3IgbXV0ZXhlcyB0aGF0IGFjcXVpcmVzIHRoZSBsb2NrIGluIGl0cyBjb25zdHJ1Y3RvciBhbmQgZ3VhcmFudGVlcyByZWxlYXNlIHdoZW4gbGVhdmluZyB0aGUgZW5jbG9zaW5nIGJsb2NrLicsXG4gICAgICB0b3BpYzogJ1RocmVhZGluZyAmIENvbmN1cnJlbmN5JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3BwXzEwJyxcbiAgICAgIHNraWxsOiAnQysrJyxcbiAgICAgIHR5cGU6ICdjb2RlLW91dHB1dCcsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIHRpbWUgY29tcGxleGl0eSBvZiBsb29rdXAgaW4gYHN0ZDo6dW5vcmRlcmVkX21hcGAgdnMgYHN0ZDo6bWFwYCAoYXZlcmFnZSBjYXNlKT8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnYHN0ZDo6dW5vcmRlcmVkX21hcGA6IE8oMSkgdmlhIGhhc2ggdGFibGU7IGBzdGQ6Om1hcGA6IE8obG9nIG4pIHZpYSBSZWQtQmxhY2sgVHJlZScsXG4gICAgICAgICdCb3RoIGFyZSBPKDEpJyxcbiAgICAgICAgJ2BzdGQ6OnVub3JkZXJlZF9tYXBgOiBPKG4pOyBgc3RkOjptYXBgOiBPKDEpJyxcbiAgICAgICAgJ2BzdGQ6OnVub3JkZXJlZF9tYXBgOiBPKGxvZyBuKTsgYHN0ZDo6bWFwYDogTygxKScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgc3RkOjptYXBgIGlzIG9yZGVyZWQgYW5kIGltcGxlbWVudGVkIHZpYSBzZWxmLWJhbGFuY2luZyBiaW5hcnkgc2VhcmNoIHRyZWVzIChPKGxvZyBuKSkuIGBzdGQ6OnVub3JkZXJlZF9tYXBgIHVzZXMgaGFzaCBidWNrZXRzIChhdmVyYWdlIE8oMSkpLicsXG4gICAgICB0b3BpYzogJ0RhdGEgU3RydWN0dXJlcyAmIFNUTCcsXG4gICAgfSxcbiAgXSxcbiAgJ0MjJzogW1xuICAgIHtcbiAgICAgIGlkOiAnY3NfMDEnLFxuICAgICAgc2tpbGw6ICdDIycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcHJpbWFyeSBkaWZmZXJlbmNlIGJldHdlZW4gYSBgY2xhc3NgIGFuZCBhIGBzdHJ1Y3RgIGluIEMjPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdBIGBjbGFzc2AgaXMgYSByZWZlcmVuY2UgdHlwZSBhbGxvY2F0ZWQgb24gdGhlIG1hbmFnZWQgaGVhcDsgYSBgc3RydWN0YCBpcyBhIHZhbHVlIHR5cGUgdHlwaWNhbGx5IGFsbG9jYXRlZCBpbmxpbmUgb24gdGhlIHN0YWNrJyxcbiAgICAgICAgJ0EgYHN0cnVjdGAgc3VwcG9ydHMgZnVsbCBpbmhlcml0YW5jZSB3aGlsZSBhIGBjbGFzc2AgZG9lcyBub3QnLFxuICAgICAgICAnQSBgY2xhc3NgIGNhbm5vdCBpbXBsZW1lbnQgaW50ZXJmYWNlcycsXG4gICAgICAgICdBIGBzdHJ1Y3RgIGhhcyBidWlsdC1pbiBnYXJiYWdlIGNvbGxlY3Rpb24gc2VwYXJhdGUgZnJvbSB0aGUgQ0xSJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0NsYXNzZXMgYXJlIHJlZmVyZW5jZSB0eXBlcyAocGFzc2VkIGJ5IHJlZmVyZW5jZSwgYWxsb2NhdGVkIG9uIGhlYXApLiBTdHJ1Y3RzIGFyZSB2YWx1ZSB0eXBlcyAocGFzc2VkIGJ5IHZhbHVlIGNvcHksIGFsbG9jYXRlZCBpbmxpbmUpLicsXG4gICAgICB0b3BpYzogJ1R5cGUgU3lzdGVtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3NfMDInLFxuICAgICAgc2tpbGw6ICdDIycsXG4gICAgICB0eXBlOiAnY29kZS1vdXRwdXQnLFxuICAgICAgcXVlc3Rpb246ICdIb3cgZG9lcyB0aGUgYGFzeW5jYCAvIGBhd2FpdGAgcGF0dGVybiB3b3JrIHVuZGVyIHRoZSBob29kIGluIEMjPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUaGUgUm9zbHluIGNvbXBpbGVyIGdlbmVyYXRlcyBhIHN0YXRlIG1hY2hpbmUgaW1wbGVtZW50aW5nIGBJQXN5bmNTdGF0ZU1hY2hpbmVgIHRvIHByZXNlcnZlIGxvY2FsIGV4ZWN1dGlvbiBjb250ZXh0IGFjcm9zcyBhd2FpdHMgd2l0aG91dCBibG9ja2luZyB0aHJlYWRzJyxcbiAgICAgICAgJ0l0IHN0YXJ0cyBhIG5ldyBvcGVyYXRpbmcgc3lzdGVtIHByb2Nlc3MgZm9yIGV2ZXJ5IGF3YWl0JyxcbiAgICAgICAgJ0l0IHBhdXNlcyB0aGUgZW50aXJlIENMUiBnYXJiYWdlIGNvbGxlY3RvcicsXG4gICAgICAgICdJdCBpcyBtZXJlbHkgc3ludGFjdGljIHN1Z2FyIGZvciBgVGhyZWFkLlNsZWVwYCcsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdUaGUgQyMgY29tcGlsZXIgbG93ZXJzIGFzeW5jIG1ldGhvZHMgaW50byBzdGF0ZSBtYWNoaW5lIHN0cnVjdHMgdGhhdCByZWdpc3RlciBjb21wbGV0aW9uIGNvbnRpbnVhdGlvbnMgd2l0aCBhd2FpdGFibGUgdGFza3MsIGZyZWVpbmcgd29ya2VyIHRocmVhZHMgd2hpbGUgd2FpdGluZyBmb3IgSS9PLicsXG4gICAgICB0b3BpYzogJ0FzeW5jaHJvbm91cyBQcm9ncmFtbWluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NzXzAzJyxcbiAgICAgIHNraWxsOiAnQyMnLFxuICAgICAgdHlwZTogJ2RlYnVnZ2luZycsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgY2F1c2VzIGEgbWVtb3J5IGxlYWsgaW4gYSBtYW5hZ2VkIEMjIGFwcGxpY2F0aW9uIHdoZXJlIGdhcmJhZ2UgY29sbGVjdGlvbiBpcyBhY3RpdmU/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0xvbmctbGl2ZWQgb2JqZWN0cyBob2xkaW5nIGV2ZW50IHN1YnNjcmlwdGlvbnMgb3Igc3RhdGljIHJlZmVyZW5jZXMgdG8gc2hvcnQtbGl2ZWQgb2JqZWN0cywgcHJldmVudGluZyB0aGVtIGZyb20gYmVpbmcgY29sbGVjdGVkJyxcbiAgICAgICAgJ1VzaW5nIGBmb3JlYWNoYCBsb29wcyBvbiBhcnJheXMnLFxuICAgICAgICAnRGVjbGFyaW5nIHZhcmlhYmxlcyBpbnNpZGUgbG9vcHMnLFxuICAgICAgICAnQ29tcGlsaW5nIGluIFJlbGVhc2UgbW9kZScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdUaGUgR0MgdHJhY2VzIHJlYWNoYWJsZSByb290cy4gSWYgYW4gZXZlbnQgcHVibGlzaGVyIG9yIHN0YXRpYyBjb2xsZWN0aW9uIG1haW50YWlucyBhIHJlZmVyZW5jZSB0byBhIHN1YnNjcmliZXIsIHRoZSBzdWJzY3JpYmVyIHJlbWFpbnMgcm9vdC1yZWFjaGFibGUgYW5kIGNhbm5vdCBiZSBjb2xsZWN0ZWQuJyxcbiAgICAgIHRvcGljOiAnR2FyYmFnZSBDb2xsZWN0aW9uICYgTGVha3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjc18wNCcsXG4gICAgICBza2lsbDogJ0MjJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBwdXJwb3NlIG9mIHRoZSBgdXNpbmdgIHN0YXRlbWVudCAob3IgYHVzaW5nYCBkZWNsYXJhdGlvbikgaW4gQyM/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ0d1YXJhbnRlZXMgdGhhdCBgRGlzcG9zZSgpYCBpcyBjYWxsZWQgb24gYW4gYElEaXNwb3NhYmxlYCBvYmplY3Qgd2hlbiBleGVjdXRpb24gZXhpdHMgdGhlIHNjb3BlJyxcbiAgICAgICAgJ0ltcG9ydHMgZXh0ZXJuYWwgQysrIERMTCBsaWJyYXJpZXMnLFxuICAgICAgICAnQWxsb2NhdGVzIG1lbW9yeSBkaXJlY3RseSBvbiB0aGUgR1BVJyxcbiAgICAgICAgJ0Rpc2FibGVzIG51bGwgY2hlY2tpbmcgZm9yIHRoZSBibG9jaycsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgdXNpbmdgIHRyYW5zbGF0ZXMgaW50byBhIGB0cnkgeyAuLi4gfSBmaW5hbGx5IHsgb2JqLkRpc3Bvc2UoKTsgfWAgY29uc3RydWN0LCBndWFyYW50ZWVpbmcgcHJvbXB0IHJlbGVhc2Ugb2YgdW5tYW5hZ2VkIHJlc291cmNlcyAoZGF0YWJhc2UgY29ubmVjdGlvbnMsIGZpbGUgc3RyZWFtcykuJyxcbiAgICAgIHRvcGljOiAnUmVzb3VyY2UgTWFuYWdlbWVudCAmIElEaXNwb3NhYmxlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3NfMDUnLFxuICAgICAgc2tpbGw6ICdDIycsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doaWNoIGtleXdvcmQgaW4gQyMgcHJldmVudHMgYSBjbGFzcyBmcm9tIGJlaW5nIGluaGVyaXRlZCBieSBhbnkgZGVyaXZlZCBjbGFzcz8nLFxuICAgICAgb3B0aW9uczogWydzZWFsZWQnLCAnZmluYWwnLCAnc3RhdGljJywgJ3JlYWRvbmx5J10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1doZW4gYXBwbGllZCB0byBhIGNsYXNzLCB0aGUgYHNlYWxlZGAgbW9kaWZpZXIgcHJldmVudHMgb3RoZXIgY2xhc3NlcyBmcm9tIGluaGVyaXRpbmcgZnJvbSBpdC4nLFxuICAgICAgdG9waWM6ICdPT1AgJiBNb2RpZmllcnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjc18wNicsXG4gICAgICBza2lsbDogJ0MjJyxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBiZW5lZml0IG9mIExJTlEgZGVmZXJyZWQgZXhlY3V0aW9uPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdUaGUgcXVlcnkgaXMgbm90IGV4ZWN1dGVkIHdoZW4gZGVmaW5lZDsgaXQgcnVucyBvbmx5IHdoZW4gdGhlIGRhdGEgaXMgZW51bWVyYXRlZCAoZS5nLiB2aWEgYGZvcmVhY2hgLCBgLlRvTGlzdCgpYCwgb3IgYC5Db3VudCgpYCknLFxuICAgICAgICAnSXQgZXhlY3V0ZXMgcXVlcmllcyBpbiB0aGUgYmFja2dyb3VuZCBvbiBzdGFydHVwJyxcbiAgICAgICAgJ0l0IGNhY2hlcyBhbGwgcmVzdWx0cyBwZXJtYW5lbnRseSBpbiBtZW1vcnknLFxuICAgICAgICAnSXQgY29tcGlsZXMgQyMgaW50byBKYXZhU2NyaXB0IGF0IHJ1bnRpbWUnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnRGVmZXJyZWQgZXhlY3V0aW9uIG1lYW5zIHRoZSBleHByZXNzaW9uIGV2YWx1YXRpb24gaXMgZGVsYXllZCB1bnRpbCBpdHMgcmVhbGl6ZWQgdmFsdWUgaXMgYWN0dWFsbHkgcmVxdWlyZWQsIGFsbG93aW5nIHF1ZXJ5IGNoYWluaW5nIGFuZCBhdm9pZGluZyB1bm5lY2Vzc2FyeSBkYXRhIGZldGNoaW5nLicsXG4gICAgICB0b3BpYzogJ0xJTlEgJiBHZW5lcmljcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NzXzA3JyxcbiAgICAgIHNraWxsOiAnQyMnLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgbnVsbC1jb2FsZXNjaW5nIGFzc2lnbm1lbnQgb3BlcmF0b3IgaW4gQyM/JyxcbiAgICAgIG9wdGlvbnM6IFsnPz89JywgJz89JywgJz86JywgJ3x8PSddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgdmFyaWFibGUgPz89IGV4cHJlc3Npb247YCBhc3NpZ25zIHRoZSB2YWx1ZSBvZiBleHByZXNzaW9uIHRvIHZhcmlhYmxlIG9ubHkgaWYgdmFyaWFibGUgaXMgY3VycmVudGx5IG51bGwuJyxcbiAgICAgIHRvcGljOiAnT3BlcmF0b3JzICYgTnVsbGFiaWxpdHknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdjc18wOCcsXG4gICAgICBza2lsbDogJ0MjJyxcbiAgICAgIHR5cGU6ICdkZWJ1Z2dpbmcnLFxuICAgICAgcXVlc3Rpb246ICdJbiBFbnRpdHkgRnJhbWV3b3JrIENvcmUsIHdoYXQgcHJvYmxlbSBkb2VzIGAuQXNOb1RyYWNraW5nKClgIHNvbHZlIGZvciByZWFkLW9ubHkgcXVlcmllcz8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnSW1wcm92ZXMgcXVlcnkgcGVyZm9ybWFuY2UgYW5kIHJlZHVjZXMgbWVtb3J5IHVzYWdlIGJ5IGJ5cGFzc2luZyBjaGFuZ2UgdHJhY2tlciBzbmFwc2hvdCB0cmFja2luZycsXG4gICAgICAgICdQcmV2ZW50cyBkYXRhYmFzZSBkZWFkbG9ja3MgZHVyaW5nIG1pZ3JhdGlvbnMnLFxuICAgICAgICAnRGlzYWJsZXMgU1FMIGdlbmVyYXRpb24nLFxuICAgICAgICAnRW5jcnlwdHMgZGF0YSB0cmFuc2ZlcnJlZCBvdmVyIHRoZSB3aXJlJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BBc05vVHJhY2tpbmcoKWAgaW5mb3JtcyBFRiBDb3JlIG5vdCB0byB0cmFjayBlbnRpdGllcyBpbiB0aGUgYERiQ29udGV4dGAgc25hcHNob3QgbWVtb3J5LCBib29zdGluZyBwZXJmb3JtYW5jZSBhbmQgc2F2aW5nIHNpZ25pZmljYW50IG1lbW9yeSBvbiByZWFkIHF1ZXJpZXMuJyxcbiAgICAgIHRvcGljOiAnRUYgQ29yZSAmIERhdGFiYXNlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2NzXzA5JyxcbiAgICAgIHNraWxsOiAnQyMnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gbGlmZXRpbWUgYFNjb3BlZGAgaW4gQVNQLk5FVCBDb3JlPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdBIHNpbmdsZSBpbnN0YW5jZSBjcmVhdGVkIG9uY2UgcGVyIEhUVFAgcmVxdWVzdCBhbmQgc2hhcmVkIGFjcm9zcyBhbGwgY29tcG9uZW50cyBoYW5kbGluZyB0aGF0IHJlcXVlc3QnLFxuICAgICAgICAnQSBzaW5nbGUgaW5zdGFuY2UgY3JlYXRlZCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMgYW5kIHNoYXJlZCBnbG9iYWxseScsXG4gICAgICAgICdBIG5ldyBpbnN0YW5jZSBjcmVhdGVkIGV2ZXJ5IHRpbWUgaXQgaXMgcmVxdWVzdGVkIGZyb20gdGhlIHNlcnZpY2UgY29udGFpbmVyJyxcbiAgICAgICAgJ0FuIGluc3RhbmNlIHRpZWQgdG8gY2xpZW50IGJyb3dzZXIgbG9jYWxTdG9yYWdlJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ2BTY29wZWRgIGxpZmV0aW1lIGNyZWF0ZXMgb25lIGluc3RhbmNlIHBlciBjbGllbnQgcmVxdWVzdCAoY29ubmVjdGlvbikuIGBTaW5nbGV0b25gIGlzIHBlciBhcHBsaWNhdGlvbiBsaWZldGltZSwgYW5kIGBUcmFuc2llbnRgIGNyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb24gZXZlcnkgaW5qZWN0aW9uLicsXG4gICAgICB0b3BpYzogJ0FTUC5ORVQgQ29yZSAmIERJJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnY3NfMTAnLFxuICAgICAgc2tpbGw6ICdDIycsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZmVhdHVyZSBpbnRyb2R1Y2VkIGluIEMjIDkgYWxsb3dzIGRlY2xhcmluZyBjb25jaXNlIGltbXV0YWJsZSBkYXRhIG9iamVjdHMgd2l0aCB2YWx1ZS1iYXNlZCBlcXVhbGl0eSBzZW1hbnRpY3M/JyxcbiAgICAgIG9wdGlvbnM6IFsncmVjb3JkIChlLmcuIGBwdWJsaWMgcmVjb3JkIFVzZXIoc3RyaW5nIE5hbWUpO2ApJywgJ3N0cnVjdCcsICdlbnVtJywgJ2RlbGVnYXRlJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0MjIHJlY29yZHMgcHJvdmlkZSBidWlsdC1pbiB2YWx1ZSBlcXVhbGl0eSwgbm9uLWRlc3RydWN0aXZlIG11dGF0aW9uIChgd2l0aGAgZXhwcmVzc2lvbnMpLCBhbmQgZm9ybWF0dGVkIGRpc3BsYXkgb3V0cHV0LicsXG4gICAgICB0b3BpYzogJ01vZGVybiBDIyBGZWF0dXJlcycsXG4gICAgfSxcbiAgXSxcbiAgJ0RhdGEgQW5hbHlzaXMnOiBbXG4gICAge1xuICAgICAgaWQ6ICdkYV8wMScsXG4gICAgICBza2lsbDogJ0RhdGEgQW5hbHlzaXMnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ0luIFBhbmRhcywgd2hhdCBpcyB0aGUga2V5IGRpZmZlcmVuY2UgYmV0d2VlbiBgLmxvY1tdYCBhbmQgYC5pbG9jW11gPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdgLmxvY1tdYCBpcyBsYWJlbC1iYXNlZCBpbmRleGluZzsgYC5pbG9jW11gIGlzIGludGVnZXIgcG9zaXRpb24tYmFzZWQgaW5kZXhpbmcnLFxuICAgICAgICAnYC5pbG9jW11gIGNhbiBvbmx5IHNlbGVjdCBzaW5nbGUgY2VsbHMnLFxuICAgICAgICAnYC5sb2NbXWAgd29ya3Mgb25seSBvbiBzdHJpbmcgZGF0YScsXG4gICAgICAgICdUaGV5IGFyZSBpZGVudGljYWwgYW5kIGludGVyY2hhbmdlYWJsZScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdgLmxvY2AgaW5kZXhlcyB1c2luZyBsYWJlbCBuYW1lcyBvZiByb3dzIGFuZCBjb2x1bW5zLiBgLmlsb2NgIGluZGV4ZXMgdXNpbmcgemVyby1iYXNlZCBpbnRlZ2VyIHBvc2l0aW9ucy4nLFxuICAgICAgdG9waWM6ICdQYW5kYXMgJiBNYW5pcHVsYXRpb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkYV8wMicsXG4gICAgICBza2lsbDogJ0RhdGEgQW5hbHlzaXMnLFxuICAgICAgdHlwZTogJ2RlYnVnZ2luZycsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIHByaW1hcnkgaW5kaWNhdG9yIG9mIG11bHRpY29sbGluZWFyaXR5IGluIGEgbXVsdGlwbGUgbGluZWFyIHJlZ3Jlc3Npb24gbW9kZWw/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1ZhcmlhbmNlIEluZmxhdGlvbiBGYWN0b3IgKFZJRikgPiA1IG9yIDEwIGFtb25nIGluZGVwZW5kZW50IGZlYXR1cmVzJyxcbiAgICAgICAgJ1AtdmFsdWVzIGxlc3MgdGhhbiAwLjA1JyxcbiAgICAgICAgJ1Itc3F1YXJlZCB2YWx1ZSBlcXVhbCB0byB6ZXJvJyxcbiAgICAgICAgJ1Jlc2lkdWFscyBzaG93aW5nIG5vcm1hbCBkaXN0cmlidXRpb24nLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnTXVsdGljb2xsaW5lYXJpdHkgb2NjdXJzIHdoZW4gcHJlZGljdG9yIHZhcmlhYmxlcyBhcmUgaGlnaGx5IGNvcnJlbGF0ZWQgd2l0aCBlYWNoIG90aGVyLCBpbmZsYXRpbmcgdGhlIHZhcmlhbmNlIG9mIHJlZ3Jlc3Npb24gY29lZmZpY2llbnRzOyBWSUYgbWVhc3VyZXMgdGhpcyBpbmZsYXRpb24uJyxcbiAgICAgIHRvcGljOiAnU3RhdGlzdGljcyAmIFJlZ3Jlc3Npb24nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkYV8wMycsXG4gICAgICBza2lsbDogJ0RhdGEgQW5hbHlzaXMnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgZG9lcyBTaW1wc29u4oCZcyBQYXJhZG94IGRlc2NyaWJlIGluIHN0YXRpc3RpY2FsIGFuYWx5c2lzPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdBIHRyZW5kIGFwcGVhcmluZyBpbiBzZXZlcmFsIGRpc3RpbmN0IGdyb3VwcyByZXZlcnNlcyBvciBkaXNhcHBlYXJzIHdoZW4gdGhlIGdyb3VwcyBhcmUgY29tYmluZWQnLFxuICAgICAgICAnU2FtcGxlIG1lYW5zIGFsd2F5cyBkaXZlcmdlIGZyb20gcG9wdWxhdGlvbiBtZWFucycsXG4gICAgICAgICdDb3JyZWxhdGlvbiBpbXBsaWVzIGNhdXNhdGlvbiBpbiBsYXJnZSBkYXRhc2V0cycsXG4gICAgICAgICdTdGFuZGFyZCBkZXZpYXRpb24gaW5jcmVhc2VzIGFzIHNhbXBsZSBzaXplIGdyb3dzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ1NpbXBzb27igJlzIFBhcmFkb3ggb2NjdXJzIHdoZW4gYWdncmVnYXRlIGRhdGEgbWFza3MgY29uZm91bmRpbmcgdmFyaWFibGVzLCBjYXVzaW5nIGEgdHJlbmQgdmlzaWJsZSBpbiBzdWJwb3B1bGF0aW9ucyB0byBpbnZlcnQgd2hlbiBhZ2dyZWdhdGVkLicsXG4gICAgICB0b3BpYzogJ1N0YXRpc3RpY2FsIEZhbGxhY2llcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RhXzA0JyxcbiAgICAgIHNraWxsOiAnRGF0YSBBbmFseXNpcycsXG4gICAgICB0eXBlOiAnY29kZS1vdXRwdXQnLFxuICAgICAgcXVlc3Rpb246ICdXaGF0IGlzIHRoZSBlZmZlY3Qgb2YgYXBwbHlpbmcgYSBsb2dhcml0aG1pYyB0cmFuc2Zvcm1hdGlvbiBgbnAubG9nMXAoZGZbXCJyZXZlbnVlXCJdKWAgb24gcmlnaHQtc2tld2VkIHJldmVudWUgZGF0YT8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnSXQgY29tcHJlc3NlcyBleHRyZW1lIGxhcmdlIHZhbHVlcywgdHJhbnNmb3JtaW5nIHRoZSBkaXN0cmlidXRpb24gY2xvc2VyIHRvIG5vcm1hbCBhbmQgc3RhYmlsaXppbmcgdmFyaWFuY2UnLFxuICAgICAgICAnSXQgY29udmVydHMgcmV2ZW51ZSBpbnRvIG5lZ2F0aXZlIHZhbHVlcycsXG4gICAgICAgICdJdCBkZWxldGVzIG1pc3NpbmcgemVybyB2YWx1ZXMnLFxuICAgICAgICAnSXQgZG91YmxlcyB0aGUgbWVhbiB2YWx1ZScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdMb2cgdHJhbnNmb3JtcyBjb21wcmVzcyB0aGUgbG9uZyByaWdodCB0YWlsIG9mIHBvd2VyLWxhdyBvciBleHBvbmVudGlhbCBkaXN0cmlidXRpb25zIChpbmNvbWUsIHJldmVudWUsIHBhZ2Ugdmlld3MpLCBzdGFiaWxpemluZyB2YXJpYW5jZSBmb3IgbGluZWFyIG1vZGVsaW5nLicsXG4gICAgICB0b3BpYzogJ0ZlYXR1cmUgRW5naW5lZXJpbmcgJiBUcmFuc2Zvcm1zJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZGFfMDUnLFxuICAgICAgc2tpbGw6ICdEYXRhIEFuYWx5c2lzJyxcbiAgICAgIHR5cGU6ICdwcmFjdGljYWwtY29kaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hpY2ggY2hhcnQgdHlwZSBpcyBiZXN0IHN1aXRlZCBmb3IgaWRlbnRpZnlpbmcgb3V0bGllcnMgYW5kIHVuZGVyc3RhbmRpbmcgdGhlIDUtbnVtYmVyIHN1bW1hcnkgKE1pbiwgUTEsIE1lZGlhbiwgUTMsIE1heCkgb2YgYSBkaXN0cmlidXRpb24/JyxcbiAgICAgIG9wdGlvbnM6IFsnQm94IFBsb3QgKEJveC1hbmQtV2hpc2tlciknLCAnUGllIENoYXJ0JywgJ1NjYXR0ZXIgUGxvdCcsICdTdGFja2VkIEJhciBDaGFydCddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdCb3ggcGxvdHMgZGlzcGxheSB0aGUgbWVkaWFuLCBpbnRlcnF1YXJ0aWxlIHJhbmdlIChJUVIpLCBhbmQgZXhwbGljaXRseSBtYXJrIHBvaW50cyBiZXlvbmQgMS41ICogSVFSIGFzIG91dGxpZXJzLicsXG4gICAgICB0b3BpYzogJ0RhdGEgVmlzdWFsaXphdGlvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RhXzA2JyxcbiAgICAgIHNraWxsOiAnRGF0YSBBbmFseXNpcycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyBhbiBBL0IgdGVzdCBwLXZhbHVlIG9mIDAuMDMgY29tbW9ubHkgaW50ZXJwcmV0ZWQgYXMgdW5kZXIgYSA1JSBzaWduaWZpY2FuY2UgbGV2ZWwgKGFscGhhID0gMC4wNSk/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1N0YXRpc3RpY2FsbHkgc2lnbmlmaWNhbnQ6IHdlIHJlamVjdCB0aGUgbnVsbCBoeXBvdGhlc2lzIHRoYXQgdGhlcmUgaXMgbm8gdHJ1ZSBkaWZmZXJlbmNlIGJldHdlZW4gdmFyaWFudCBBIGFuZCBCJyxcbiAgICAgICAgJ1RoZSBudWxsIGh5cG90aGVzaXMgaXMgOTclIGxpa2VseSB0byBiZSB0cnVlJyxcbiAgICAgICAgJ1RoZXJlIGlzIGEgMyUgcHJvYmFiaWxpdHkgdGhhdCB2YXJpYW50IEIgaXMgYmV0dGVyJyxcbiAgICAgICAgJ1RoZSBzYW1wbGUgc2l6ZSB3YXMgdG9vIHNtYWxsJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjpcbiAgICAgICAgJ0EgcC12YWx1ZSBiZWxvdyBhbHBoYSBpbmRpY2F0ZXMgdGhhdCB0aGUgb2JzZXJ2ZWQgZWZmZWN0IGlzIHVubGlrZWx5IHRvIGhhdmUgb2NjdXJyZWQgYnkgcmFuZG9tIHNhbXBsaW5nIG5vaXNlIHVuZGVyIHRoZSBudWxsIGh5cG90aGVzaXMsIHdhcnJhbnRpbmcgcmVqZWN0aW9uIG9mIEgwLicsXG4gICAgICB0b3BpYzogJ0h5cG90aGVzaXMgVGVzdGluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RhXzA3JyxcbiAgICAgIHNraWxsOiAnRGF0YSBBbmFseXNpcycsXG4gICAgICB0eXBlOiAnZGVidWdnaW5nJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBpcyB0aGUgcmlzayBvZiB1c2luZyBtZWFuIGltcHV0YXRpb24gZm9yIG1pc3NpbmcgdmFsdWVzIGluIG51bWVyaWNhbCBjb2x1bW5zIHdpdGggZXh0cmVtZSBvdXRsaWVycz8nLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnT3V0bGllcnMgZGlzdG9ydCB0aGUgY2FsY3VsYXRlZCBtZWFuLCBzaGlmdGluZyB0aGUgaW1wdXRhdGlvbiB2YWx1ZSBhd2F5IGZyb20gdHJ1ZSBjZW50cmFsIHRlbmRlbmN5IGFuZCBhcnRpZmljaWFsbHkgZGVmbGF0aW5nIHNhbXBsZSB2YXJpYW5jZScsXG4gICAgICAgICdNZWFuIGltcHV0YXRpb24gaXMgcHJvaGliaXRlZCBpbiBQeXRob24nLFxuICAgICAgICAnSXQgZG91YmxlcyB0aGUgcm93IGNvdW50IG9mIHRoZSBEYXRhRnJhbWUnLFxuICAgICAgICAnSXQgY2F1c2VzIGNhdGVnb3JpY2FsIGNvbHVtbnMgdG8gZmFpbCcsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdPdXRsaWVycyBza2V3IHRoZSBtZWFuLiBGdXJ0aGVybW9yZSwgZmlsbGluZyBtaXNzaW5nIGVudHJpZXMgd2l0aCBhIHNpbmdsZSBjb25zdGFudCByZWR1Y2VzIG5hdHVyYWwgdmFyaWFuY2UgYW5kIGFydGlmaWNpYWxseSBzcGlrZXMgdGhlIGNlbnRyYWwgZGlzdHJpYnV0aW9uOyBtZWRpYW4gaW1wdXRhdGlvbiBvciBtb2RlbC1iYXNlZCBpbXB1dGF0aW9uIGlzIHByZWZlcnJlZC4nLFxuICAgICAgdG9waWM6ICdNaXNzaW5nIERhdGEgSGFuZGxpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkYV8wOCcsXG4gICAgICBza2lsbDogJ0RhdGEgQW5hbHlzaXMnLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogJ1doYXQgaXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBQZWFyc29uIGNvcnJlbGF0aW9uIGFuZCBTcGVhcm1hbiByYW5rIGNvcnJlbGF0aW9uPycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdQZWFyc29uIG1lYXN1cmVzIGxpbmVhciByZWxhdGlvbnNoaXBzIG9uIGNvbnRpbnVvdXMgdmFyaWFibGVzOyBTcGVhcm1hbiBhc3Nlc3NlcyBtb25vdG9uaWMgcmVsYXRpb25zaGlwcyB1c2luZyByYW5rZWQgdmFsdWVzIChyb2J1c3QgdG8gb3V0bGllcnMgYW5kIG5vbi1saW5lYXIgbW9ub3RvbmljIGN1cnZlcyknLFxuICAgICAgICAnU3BlYXJtYW4gb25seSB3b3JrcyBvbiBjYXRlZ29yaWNhbCB0ZXh0JyxcbiAgICAgICAgJ1BlYXJzb24gdmFsdWVzIHJhbmdlIGZyb20gMCB0byAxMDAgd2hpbGUgU3BlYXJtYW4gaXMgLTEgdG8gMScsXG4gICAgICAgICdUaGVyZSBpcyBubyBkaWZmZXJlbmNlIGluIG1hdGhlbWF0aWNhbCByZXN1bHQnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOlxuICAgICAgICAnUGVhcnNvbiBldmFsdWF0ZXMgc3RyYWlnaHQtbGluZSBsaW5lYXJpdHkuIFNwZWFybWFuIGV2YWx1YXRlcyB3aGV0aGVyIHZhcmlhYmxlcyBpbmNyZWFzZSBvciBkZWNyZWFzZSB0b2dldGhlciByZWdhcmRsZXNzIG9mIGxpbmVhcml0eSBieSByYW5raW5nIG9ic2VydmF0aW9ucy4nLFxuICAgICAgdG9waWM6ICdDb3JyZWxhdGlvbiAmIFN0YXRpc3RpY3MnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdkYV8wOScsXG4gICAgICBza2lsbDogJ0RhdGEgQW5hbHlzaXMnLFxuICAgICAgdHlwZTogJ3ByYWN0aWNhbC1jb2RpbmcnLFxuICAgICAgcXVlc3Rpb246ICdJbiBTUUwgb3IgUGFuZGFzLCB3aGF0IG9wZXJhdGlvbiB0cmFuc2Zvcm1zIHJvd3MgaW50byBjb2x1bW5zIHRvIHN1bW1hcml6ZSBtdWx0aS1kaW1lbnNpb25hbCBjcm9zcy10YWJ1bGF0aW9ucz8nLFxuICAgICAgb3B0aW9uczogWydQaXZvdCAvIFBpdm90IFRhYmxlJywgJ1VuaW9uIEFsbCcsICdJbm5lciBKb2luJywgJ0Ryb3AgRHVwbGljYXRlcyddLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdQaXZvdGluZyByZXNoYXBlcyBkYXRhIGZyb20gbG9uZyBmb3JtYXQgdG8gd2lkZSBmb3JtYXQsIHN1bW1hcml6aW5nIGFnZ3JlZ2F0ZWQgdmFsdWVzIGFjcm9zcyBzcGVjaWZpZWQgcm93IGFuZCBjb2x1bW4gaW5kZXhlcy4nLFxuICAgICAgdG9waWM6ICdEYXRhIFJlc2hhcGluZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogJ2RhXzEwJyxcbiAgICAgIHNraWxsOiAnRGF0YSBBbmFseXNpcycsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiAnV2hhdCBkb2VzIHRoZSBDZW50cmFsIExpbWl0IFRoZW9yZW0gc3RhdGU/JyxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1RoZSBkaXN0cmlidXRpb24gb2Ygc2FtcGxlIG1lYW5zIGFwcHJveGltYXRlcyBhIG5vcm1hbCBkaXN0cmlidXRpb24gYXMgdGhlIHNhbXBsZSBzaXplIGJlY29tZXMgc3VmZmljaWVudGx5IGxhcmdlLCByZWdhcmRsZXNzIG9mIHRoZSB1bmRlcmx5aW5nIHBvcHVsYXRpb24gZGlzdHJpYnV0aW9uIHNoYXBlJyxcbiAgICAgICAgJ0FsbCBkYXRhIGluIG5hdHVyZSBpcyBub3JtYWxseSBkaXN0cmlidXRlZCcsXG4gICAgICAgICdTYW1wbGUgdmFyaWFuY2UgYWx3YXlzIGVxdWFscyBwb3B1bGF0aW9uIHZhcmlhbmNlJyxcbiAgICAgICAgJ01hY2hpbmUgbGVhcm5pbmcgbW9kZWxzIGNvbnZlcmdlIGluIE8oMSkgdGltZScsXG4gICAgICBdLFxuICAgICAgY29ycmVjdE9wdGlvbkluZGV4OiAwLFxuICAgICAgZXhwbGFuYXRpb246XG4gICAgICAgICdUaGUgQ0xUIGlzIGEgZm91bmRhdGlvbmFsIHRoZW9yZW06IHJlZ2FyZGxlc3Mgb2YgdGhlIHBvcHVsYXRpb24gZGlzdHJpYnV0aW9uLCB0aGUgZGlzdHJpYnV0aW9uIG9mIGluZGVwZW5kZW50IHNhbXBsZSBtZWFucyB3aWxsIGFwcHJvYWNoIGEgbm9ybWFsIGRpc3RyaWJ1dGlvbiBhcyBuIGluY3JlYXNlcyAodHlwaWNhbGx5IG4gPj0gMzApLicsXG4gICAgICB0b3BpYzogJ1Byb2JhYmlsaXR5ICYgQ0xUJyxcbiAgICB9LFxuICBdLFxufTtcblxuLy8gRmlsbCBpbiByZW1haW5pbmcgc2tpbGxzIHdpdGggaGlnaC1xdWFsaXR5IHF1ZXN0aW9ucyBmb3IgZnVsbCBjb3ZlcmFnZVxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uc0ZvclNraWxsKHNraWxsOiBTdXBwb3J0ZWRTa2lsbCk6IEFzc2Vzc21lbnRRdWVzdGlvbltdIHtcbiAgaWYgKFNLSUxMX0FTU0VTU01FTlRfUVVFU1RJT05TW3NraWxsXSkge1xuICAgIHJldHVybiBTS0lMTF9BU1NFU1NNRU5UX1FVRVNUSU9OU1tza2lsbF07XG4gIH1cbiAgLy8gRmFsbGJhY2sgaGlnaCBxdWFsaXR5IHRlbXBsYXRlIGZvciBhbnkgcmVtYWluaW5nIHNraWxsXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6IGAke3NraWxsLnRvTG93ZXJDYXNlKCl9XzAxYCxcbiAgICAgIHNraWxsLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogYFdoYXQgaXMgdGhlIHByaW1hcnkgYXJjaGl0ZWN0dXJhbCBwcmluY2lwbGUgb2YgJHtza2lsbH0/YCxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgYEhpZ2ggY29oZXNpb24sIG1vZHVsYXIgY29tcG9uZW50IGFic3RyYWN0aW9ucywgYW5kIGRlY291cGxlZCBzdGF0ZSBtYW5hZ2VtZW50IGluICR7c2tpbGx9YCxcbiAgICAgICAgJ01vbm9saXRoaWMgc2luZ2xlLXRocmVhZGVkIGJsb2NraW5nIGV4ZWN1dGlvbicsXG4gICAgICAgICdIYXJkY29kZWQgY29uZmlndXJhdGlvbnMgc3RvcmVkIGluIG9wZXJhdGluZyBzeXN0ZW0gcmVnaXN0cnknLFxuICAgICAgICAnTWFudWFsIG1lbW9yeSBwb2ludGVyIGFyaXRobWV0aWMgd2l0aG91dCBib3VuZHMgY2hlY2tpbmcnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOiBgTW9kZXJuIHByb2R1Y3Rpb24gc3RhbmRhcmRzIGZvciAke3NraWxsfSBtYW5kYXRlIG1vZHVsYXJpdHksIGNsZWFyIHNlcGFyYXRpb24gb2YgY29uY2VybnMsIGFuZCByb2J1c3QgZXJyb3IgaGFuZGxpbmcuYCxcbiAgICAgIHRvcGljOiAnQXJjaGl0ZWN0dXJlICYgRm91bmRhdGlvbnMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IGAke3NraWxsLnRvTG93ZXJDYXNlKCl9XzAyYCxcbiAgICAgIHNraWxsLFxuICAgICAgdHlwZTogJ2NvZGUtb3V0cHV0JyxcbiAgICAgIHF1ZXN0aW9uOiBgSG93IGFyZSBleGNlcHRpb25zIGFuZCBlcnJvciBjb25kaXRpb25zIGNsZWFubHkgaGFuZGxlZCBpbiAke3NraWxsfT9gLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnU3RydWN0dXJlZCBleGNlcHRpb24gaGFuZGxpbmcgd2l0aCB0eXBlZCBjYXRjaGVzIGFuZCBndWFyYW50ZWVkIHJlc291cmNlIGNsZWFudXAnLFxuICAgICAgICAnU2lsZW50IGV4aXQgd2l0aG91dCBsb2dnaW5nIGVycm9ycycsXG4gICAgICAgICdSZXN0YXJ0aW5nIHRoZSBlbnRpcmUgb3BlcmF0aW5nIHN5c3RlbScsXG4gICAgICAgICdDb252ZXJ0aW5nIGFsbCBlcnJvcnMgaW50byBzdHJpbmcgYWxlcnRzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjogJ1R5cGVkIGV4Y2VwdGlvbiBoYW5kbGluZyBlbnN1cmVzIHVuZXhwZWN0ZWQgc3RhdGVzIGNhbiBiZSBjYXB0dXJlZCwgYXVkaXRlZCwgYW5kIGdyYWNlZnVsbHkgZGVncmFkZWQuJyxcbiAgICAgIHRvcGljOiAnRXJyb3IgSGFuZGxpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IGAke3NraWxsLnRvTG93ZXJDYXNlKCl9XzAzYCxcbiAgICAgIHNraWxsLFxuICAgICAgdHlwZTogJ2RlYnVnZ2luZycsXG4gICAgICBxdWVzdGlvbjogYFdoYXQgaXMgYSBjb21tb24gcGVyZm9ybWFuY2UgYm90dGxlbmVjayBpbiBwcm9kdWN0aW9uICR7c2tpbGx9IGFwcGxpY2F0aW9ucz9gLFxuICAgICAgb3B0aW9uczogW1xuICAgICAgICAnVW5uZWNlc3NhcnkgcmVkdW5kYW50IGFsbG9jYXRpb25zLCBibG9ja2luZyBJL08gb24gdGhlIG1haW4gdGhyZWFkLCBvciBsYWNrIG9mIGNhY2hpbmcnLFxuICAgICAgICAnSGF2aW5nIHRvbyBtYW55IGNvbW1lbnRzIGluIGNvZGUgZmlsZXMnLFxuICAgICAgICAnVXNpbmcgbW9kZXJuIHZlcnNpb24gY29udHJvbCBzeXN0ZW1zJyxcbiAgICAgICAgJ1J1bm5pbmcgb24gNjQtYml0IHByb2Nlc3NvcnMnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOiAnVW5pbmRleGVkIGxvb2t1cHMgYW5kIGJsb2NraW5nIHN5bmNocm9ub3VzIG9wZXJhdGlvbnMgZGVncmFkZSB0aHJvdWdocHV0IGFuZCBsYXRlbmN5LicsXG4gICAgICB0b3BpYzogJ1BlcmZvcm1hbmNlICYgT3B0aW1pemF0aW9uJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBgJHtza2lsbC50b0xvd2VyQ2FzZSgpfV8wNGAsXG4gICAgICBza2lsbCxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246IGBXaGF0IHNlY3VyaXR5IHByYWN0aWNlIGlzIG1hbmRhdG9yeSB3aGVuIGhhbmRsaW5nIHVudHJ1c3RlZCB1c2VyIGlucHV0IGluICR7c2tpbGx9P2AsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdTdHJpY3Qgc2NoZW1hIHZhbGlkYXRpb24sIHBhcmFtZXRlcml6ZWQgcXVlcmllcywgYW5kIG91dHB1dCBlbmNvZGluZycsXG4gICAgICAgICdBc3N1bWluZyBpbnRlcm5hbCBuZXR3b3JrcyBhcmUgYWx3YXlzIGNvbXBsZXRlbHkgc2FmZScsXG4gICAgICAgICdEaXNhYmxpbmcgSFRUUFMgZW5jcnlwdGlvbiB0byBpbXByb3ZlIGxhdGVuY3knLFxuICAgICAgICAnU3RvcmluZyBjcmVkZW50aWFscyBpbiBjbGllbnQtc2lkZSBjb2RlJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjogJ0lucHV0IHZhbGlkYXRpb24gYW5kIGRlZmVuc2UtaW4tZGVwdGggcHJldmVudCBpbmplY3Rpb24sIFhTUywgYW5kIGF1dGhvcml6YXRpb24gYnlwYXNzZXMuJyxcbiAgICAgIHRvcGljOiAnU2VjdXJpdHkgJiBCZXN0IFByYWN0aWNlcycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogYCR7c2tpbGwudG9Mb3dlckNhc2UoKX1fMDVgLFxuICAgICAgc2tpbGwsXG4gICAgICB0eXBlOiAncHJhY3RpY2FsLWNvZGluZycsXG4gICAgICBxdWVzdGlvbjogYFdoaWNoIHRlc3RpbmcgbWV0aG9kb2xvZ3kgdmVyaWZpZXMgdGhhdCBpbmRpdmlkdWFsIHVuaXRzIGluICR7c2tpbGx9IGZ1bmN0aW9uIGFzIGV4cGVjdGVkIGluIGlzb2xhdGlvbj9gLFxuICAgICAgb3B0aW9uczogWydVbml0IFRlc3Rpbmcgd2l0aCBhdXRvbWF0ZWQgbW9ja3Mvc3R1YnMnLCAnTWFudWFsIFFBIGNsaWNraW5nJywgJ0RlcGxveWluZyBkaXJlY3RseSB0byBwcm9kdWN0aW9uJywgJ0NvZGUgbWluaWZpY2F0aW9uJ10sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjogJ0F1dG9tYXRlZCB1bml0IHRlc3RzIHdpdGggbW9ja3MgZW5zdXJlIGRldGVybWluaXN0aWMsIGZhc3QgdmVyaWZpY2F0aW9uIG9mIGRpc2NyZXRlIGZ1bmN0aW9ucy4nLFxuICAgICAgdG9waWM6ICdUZXN0aW5nICYgUXVhbGl0eSBBc3N1cmFuY2UnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IGAke3NraWxsLnRvTG93ZXJDYXNlKCl9XzA2YCxcbiAgICAgIHNraWxsLFxuICAgICAgdHlwZTogJ211bHRpcGxlLWNob2ljZScsXG4gICAgICBxdWVzdGlvbjogYEhvdyBkb2VzICR7c2tpbGx9IG1hbmFnZSBjb25jdXJyZW5jeSBhbmQgYXN5bmNocm9ub3VzIHRhc2tzIGVmZmljaWVudGx5P2AsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdFdmVudC1kcml2ZW4gbG9vcHMsIHdvcmtlciB0aHJlYWQgcG9vbHMsIG9yIGFzeW5jL2F3YWl0IGNvbmN1cnJlbmN5IHByaW1pdGl2ZXMnLFxuICAgICAgICAnU3Bhd25pbmcgMTAsMDAwIE9TIHByb2Nlc3NlcyBmb3IgZXZlcnkgc2luZ2xlIEhUVFAgcmVxdWVzdCcsXG4gICAgICAgICdGcmVlemluZyB0aGUgQ1BVIHVudGlsIGJhY2tncm91bmQgdGFza3MgcmV0dXJuJyxcbiAgICAgICAgJ0lnbm9yaW5nIGNvbmN1cnJlbmN5IGFsdG9nZXRoZXInLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOiAnQ29uY3VycmVuY3kgcHJpbWl0aXZlcyBjb29yZGluYXRlIG5vbi1ibG9ja2luZyBvcGVyYXRpb25zIHdpdGhvdXQgZXhoYXVzdGluZyBzeXN0ZW0gdGhyZWFkcy4nLFxuICAgICAgdG9waWM6ICdDb25jdXJyZW5jeSAmIFNjYWxpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IGAke3NraWxsLnRvTG93ZXJDYXNlKCl9XzA3YCxcbiAgICAgIHNraWxsLFxuICAgICAgdHlwZTogJ2RlYnVnZ2luZycsXG4gICAgICBxdWVzdGlvbjogYFdoYXQgY2F1c2VzIHJhY2UgY29uZGl0aW9ucyBpbiBtdWx0aXRocmVhZGVkICR7c2tpbGx9IGNvZGU/YCxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ011bHRpcGxlIHRocmVhZHMgYWNjZXNzaW5nIGFuZCBtdXRhdGluZyBzaGFyZWQgc3RhdGUgY29uY3VycmVudGx5IHdpdGhvdXQgc3luY2hyb25pemF0aW9uJyxcbiAgICAgICAgJ0NvbXBpbGluZyB3aXRoIG9wdGltaXphdGlvbiBmbGFncycsXG4gICAgICAgICdVc2luZyBVVEYtOCBjaGFyYWN0ZXIgZW5jb2RpbmcnLFxuICAgICAgICAnUnVubmluZyBvbiBTU0QgZHJpdmVzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjogJ1JhY2UgY29uZGl0aW9ucyBlbWVyZ2Ugd2hlbiBzaGFyZWQgbXV0YWJsZSBkYXRhIGlzIGFjY2Vzc2VkIGNvbmN1cnJlbnRseSB3aXRob3V0IGxvY2tzLCBhdG9taWMgcHJpbWl0aXZlcywgb3IgY2hhbm5lbHMuJyxcbiAgICAgIHRvcGljOiAnVGhyZWFkIFNhZmV0eScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogYCR7c2tpbGwudG9Mb3dlckNhc2UoKX1fMDhgLFxuICAgICAgc2tpbGwsXG4gICAgICB0eXBlOiAnbXVsdGlwbGUtY2hvaWNlJyxcbiAgICAgIHF1ZXN0aW9uOiBgV2hhdCBpcyB0aGUgcm9sZSBvZiBDSS9DRCBwaXBlbGluZXMgZm9yICR7c2tpbGx9IHByb2plY3RzP2AsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdBdXRvbWF0aW5nIGxpbnRpbmcsIHNlY3VyaXR5IHNjYW5zLCB1bml0IHRlc3RzLCBhbmQgcHJvZHVjdGlvbiBhcnRpZmFjdCBkZXBsb3ltZW50JyxcbiAgICAgICAgJ01hbnVhbGx5IGNvcHlpbmcgZmlsZXMgdmlhIEZUUCBhdCBtaWRuaWdodCcsXG4gICAgICAgICdHZW5lcmF0aW5nIHVzZXIgcGFzc3dvcmRzIGF1dG9tYXRpY2FsbHknLFxuICAgICAgICAnTWFuYWdpbmcgbG9jYWwgZGVza3RvcCB3YWxscGFwZXJzJyxcbiAgICAgIF0sXG4gICAgICBjb3JyZWN0T3B0aW9uSW5kZXg6IDAsXG4gICAgICBleHBsYW5hdGlvbjogJ0NvbnRpbnVvdXMgSW50ZWdyYXRpb24gLyBDb250aW51b3VzIERlcGxveW1lbnQgZW5mb3JjZXMgcmVwcm9kdWNpYmxlIHF1YWxpdHkgYW5kIGF1dG9tYXRlZCByZWxlYXNlIGdhdGVzLicsXG4gICAgICB0b3BpYzogJ0Rldk9wcyAmIFRvb2xpbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IGAke3NraWxsLnRvTG93ZXJDYXNlKCl9XzA5YCxcbiAgICAgIHNraWxsLFxuICAgICAgdHlwZTogJ3ByYWN0aWNhbC1jb2RpbmcnLFxuICAgICAgcXVlc3Rpb246IGBXaGF0IGlzIHRoZSByZWNvbW1lbmRlZCBhcHByb2FjaCBmb3IgdmVyc2lvbmluZyBwcm9kdWN0aW9uIEFQSXMgYW5kIHNjaGVtYXMgaW4gJHtza2lsbH0/YCxcbiAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgJ1NlbWFudGljIFZlcnNpb25pbmcgKFNlbVZlcikgd2l0aCBleHBsaWNpdCBkZXByZWNhdGlvbiBjeWNsZXMgYW5kIGJhY2t3YXJkIGNvbXBhdGliaWxpdHknLFxuICAgICAgICAnT3ZlcndyaXRpbmcgQVBJIHJvdXRlcyB3aXRob3V0IG5vdGljZScsXG4gICAgICAgICdSYW5kb20gc3RyaW5nIHZlcnNpb25pbmcnLFxuICAgICAgICAnQ2hhbmdpbmcgcmVzcG9uc2UgdHlwZXMgYXJiaXRyYXJpbHknLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOiAnU2VtVmVyIChNYWpvci5NaW5vci5QYXRjaCkgYW5kIGJhY2t3YXJkLWNvbXBhdGlibGUgYWRkaXRpdmUgY2hhbmdlcyBwcm90ZWN0IGRvd25zdHJlYW0gY29uc3VtZXJzLicsXG4gICAgICB0b3BpYzogJ0FQSSBEZXNpZ24gJiBWZXJzaW9uaW5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBgJHtza2lsbC50b0xvd2VyQ2FzZSgpfV8xMGAsXG4gICAgICBza2lsbCxcbiAgICAgIHR5cGU6ICdtdWx0aXBsZS1jaG9pY2UnLFxuICAgICAgcXVlc3Rpb246IGBIb3cgZG9lcyAke3NraWxsfSBlbnN1cmUgdHlwZSBzYWZldHkgb3IgcnVudGltZSB2YWxpZGF0aW9uP2AsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgICdTdGF0aWMgdHlwZSBjaGVja2luZyBvciBydW50aW1lIGFzc2VydGlvbiBzY2hlbWFzIHRvIGNhdGNoIGludGVyZmFjZSBtaXNtYXRjaGVzIGVhcmx5JyxcbiAgICAgICAgJ1JlbHlpbmcgZW50aXJlbHkgb24gcnVudGltZSB1c2VyIGNvbXBsYWludHMnLFxuICAgICAgICAnQ29udmVydGluZyBhbGwgdmFyaWFibGVzIHRvIGdlbmVyaWMgdW50eXBlZCBwb2ludGVycycsXG4gICAgICAgICdEaXNhYmxpbmcgY29tcGlsZXIgd2FybmluZ3MnLFxuICAgICAgXSxcbiAgICAgIGNvcnJlY3RPcHRpb25JbmRleDogMCxcbiAgICAgIGV4cGxhbmF0aW9uOiAnVHlwZSBzYWZldHkgYW5kIHJ1bnRpbWUgc2NoZW1hIHZhbGlkYXRpb24gZWxpbWluYXRlIHdob2xlIGNsYXNzZXMgb2YgY29tbW9uIGludGVyZmFjZSBkZWZlY3RzIGJlZm9yZSBwcm9kdWN0aW9uIGRlcGxveW1lbnQuJyxcbiAgICAgIHRvcGljOiAnVHlwZXMgJiBSZWxpYWJpbGl0eScsXG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGNvbnN0IFNBTVBMRV9KT0JTOiBKb2JQb3N0aW5nW10gPSBbXG4gIHtcbiAgICBpZDogJ2pvYl8wMScsXG4gICAgdGl0bGU6ICdTZW5pb3IgRnVsbCBTdGFjayAmIEFJIEVuZ2luZWVyJyxcbiAgICBjb21wYW55OiAnQW50aHJvcGljIExhYnMnLFxuICAgIGxvY2F0aW9uOiAnU2FuIEZyYW5jaXNjbywgQ0EnLFxuICAgIHdvcmtwbGFjZVR5cGU6ICdIeWJyaWQnLFxuICAgIGpvYlR5cGU6ICdGdWxsLXRpbWUnLFxuICAgIGV4cGVyaWVuY2VMZXZlbDogJ1NlbmlvcicsXG4gICAgc2FsYXJ5UmFuZ2U6ICckMTkwLDAwMCAtICQyNDUsMDAwICsgRXF1aXR5JyxcbiAgICBwb3N0ZWREYXRlOiAnMiBkYXlzIGFnbycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnV2UgYXJlIGxvb2tpbmcgZm9yIGEgU2VuaW9yIEZ1bGwgU3RhY2sgJiBBSSBFbmdpbmVlciB0byBzY2FsZSBvdXIgZnJvbnRpZXIgbW9kZWwgZXZhbHVhdGlvbiBwbGF0Zm9ybXMsIGVudGVycHJpc2UgUkFHIHNlYXJjaCB0b29scywgYW5kIGhpZ2gtcGVyZm9ybWFuY2UgaW50ZXJhY3RpdmUgaW50ZXJmYWNlcy4nLFxuICAgIHJlcXVpcmVkU2tpbGxzOiBbJ1B5dGhvbicsICdSZWFjdCcsICdUeXBlU2NyaXB0JywgJ1NRTCcsICdNYWNoaW5lIExlYXJuaW5nJywgJ0FXUyddLFxuICAgIHByZWZlcnJlZFNraWxsczogWydEb2NrZXInLCAnS3ViZXJuZXRlcycsICdGYXN0QVBJJywgJ1ZlY3RvciBEYXRhYmFzZXMnXSxcbiAgICByZXNwb25zaWJpbGl0aWVzOiBbXG4gICAgICAnRGVzaWduLCBidWlsZCwgYW5kIGRlcGxveSBoaWdoLXRocm91Z2hwdXQgUkFHIHNlYXJjaCBwbGF0Zm9ybXMgYW5kIGdlbmVyYXRpdmUgZXZhbHVhdGlvbiB0b29scy4nLFxuICAgICAgJ0RldmVsb3AgcmVhY3RpdmUgTmV4dC5qcyAvIFJlYWN0IGludGVyZmFjZXMgd2l0aCBmbHVpZCBtaWNyby1pbnRlcmFjdGlvbnMgYW5kIHN1Yi0xMDBtcyByZXNwb25zZSB0aW1lcy4nLFxuICAgICAgJ0NvbGxhYm9yYXRlIHdpdGggQUkgcmVzZWFyY2hlcnMgdG8gc2hpcCBwcm9kdWN0aW9uIEFQSXMgYW5kIG1vZGVsIHNlcnZpbmcgaW5mcmFzdHJ1Y3R1cmUuJyxcbiAgICBdLFxuICAgIGVkdWNhdGlvblJlcXVpcmVtZW50OiAnQi5TLiBvciBNLlMuIGluIENvbXB1dGVyIFNjaWVuY2Ugb3IgZXF1aXZhbGVudCBwcmFjdGljYWwgZXhwZXJpZW5jZScsXG4gICAgZXhwZXJpZW5jZVllYXJzOiAnNSsgeWVhcnMnLFxuICAgIGFwcGx5VXJsOiAnaHR0cHM6Ly9hbnRocm9waWMuY29tL2NhcmVlcnMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdqb2JfMDInLFxuICAgIHRpdGxlOiAnU3RhZmYgUGxhdGZvcm0gRW5naW5lZXInLFxuICAgIGNvbXBhbnk6ICdTdHJpcGUnLFxuICAgIGxvY2F0aW9uOiAnUmVtb3RlIChVUyAvIENhbmFkYSknLFxuICAgIHdvcmtwbGFjZVR5cGU6ICdSZW1vdGUnLFxuICAgIGpvYlR5cGU6ICdGdWxsLXRpbWUnLFxuICAgIGV4cGVyaWVuY2VMZXZlbDogJ0xlYWQnLFxuICAgIHNhbGFyeVJhbmdlOiAnJDIyMCwwMDAgLSAkMjgwLDAwMCcsXG4gICAgcG9zdGVkRGF0ZTogJ0p1c3Qgbm93JyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdKb2luIFN0cmlwZeKAmXMgQ29yZSBJbmZyYXN0cnVjdHVyZSBncm91cCB0byBidWlsZCB1bHRyYS1yZWxpYWJsZSBnbG9iYWwgcGF5bWVudCByb3V0aW5nIHN5c3RlbXMgYW5kIGNvbnRhaW5lcml6ZWQgbWljcm9zZXJ2aWNlIGNvbnRyb2wgcGxhbmVzIGhhbmRsaW5nIGJpbGxpb25zIGluIGRhaWx5IHZvbHVtZS4nLFxuICAgIHJlcXVpcmVkU2tpbGxzOiBbJ1B5dGhvbicsICdBV1MnLCAnRG9ja2VyJywgJ0t1YmVybmV0ZXMnLCAnU1FMJywgJ0dpdCddLFxuICAgIHByZWZlcnJlZFNraWxsczogWydHbycsICdUZXJyYWZvcm0nLCAnRGF0YWRvZycsICdLYWZrYSddLFxuICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICdBcmNoaXRlY3QgZGlzdHJpYnV0ZWQgaW5mcmFzdHJ1Y3R1cmUgd2l0aCA5OS45OTklIFNMQSBhdmFpbGFiaWxpdHkgYWNyb3NzIG11bHRpLXJlZ2lvbiBBV1MgZGVwbG95bWVudHMuJyxcbiAgICAgICdMZWFkIGNyb3NzLW9yZ2FuaXphdGlvbmFsIGFyY2hpdGVjdHVyYWwgcmV2aWV3cyBhbmQgZGlzYXN0ZXIgcmVjb3ZlcnkgZHJpbGxzLicsXG4gICAgICAnT3B0aW1pemUgZGF0YWJhc2UgcmVhZC93cml0ZSB0aHJvdWdocHV0IGFuZCBjYWNoZSB0b3BvbG9naWVzIHVuZGVyIGV4dHJlbWUgZ2xvYmFsIHBlYWsgdHJhZmZpYy4nLFxuICAgIF0sXG4gICAgZWR1Y2F0aW9uUmVxdWlyZW1lbnQ6ICdCLlMuIGluIENvbXB1dGVyIFNjaWVuY2Ugb3IgZXF1aXZhbGVudCcsXG4gICAgZXhwZXJpZW5jZVllYXJzOiAnNysgeWVhcnMnLFxuICAgIGFwcGx5VXJsOiAnaHR0cHM6Ly9zdHJpcGUuY29tL2pvYnMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdqb2JfMDMnLFxuICAgIHRpdGxlOiAnTWFjaGluZSBMZWFybmluZyBFbmdpbmVlcicsXG4gICAgY29tcGFueTogJ1NjYWxlIEFJJyxcbiAgICBsb2NhdGlvbjogJ1NhbiBGcmFuY2lzY28sIENBJyxcbiAgICB3b3JrcGxhY2VUeXBlOiAnT24tc2l0ZScsXG4gICAgam9iVHlwZTogJ0Z1bGwtdGltZScsXG4gICAgZXhwZXJpZW5jZUxldmVsOiAnTWlkJyxcbiAgICBzYWxhcnlSYW5nZTogJyQxNzAsMDAwIC0gJDIxNSwwMDAnLFxuICAgIHBvc3RlZERhdGU6ICczIGRheXMgYWdvJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdTY2FsZSBBSSBpcyBidWlsZGluZyB0aGUgZGF0YSBmb3VuZHJ5IGZvciBhcnRpZmljaWFsIGludGVsbGlnZW5jZS4gWW91IHdpbGwgdHJhaW4sIGZpbmUtdHVuZSwgYW5kIGV2YWx1YXRlIGRlZXAgbGVhcm5pbmcgYXJjaGl0ZWN0dXJlcyBhbmQgbGFyZ2UgbGFuZ3VhZ2UgbW9kZWwgYWxpZ25tZW50IHBpcGVsaW5lcy4nLFxuICAgIHJlcXVpcmVkU2tpbGxzOiBbJ1B5dGhvbicsICdNYWNoaW5lIExlYXJuaW5nJywgJ0RhdGEgQW5hbHlzaXMnLCAnR2l0JywgJ1NRTCddLFxuICAgIHByZWZlcnJlZFNraWxsczogWydQeVRvcmNoJywgJ0h1Z2dpbmdGYWNlJywgJ0NVREEnLCAnRG9ja2VyJ10sXG4gICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgJ1RyYWluIGFuZCBldmFsdWF0ZSBmaW5lLXR1bmVkIExMTXMgb24gZG9tYWluLXNwZWNpZmljIHJlYXNvbmluZyBiZW5jaG1hcmtzLicsXG4gICAgICAnQnVpbGQgYXV0b21hdGVkIGRhdGEgZmlsdGVyaW5nLCBlbWJlZGRpbmcgZ2VuZXJhdGlvbiwgYW5kIHN5bnRoZXRpYyBnZW5lcmF0aW9uIHBpcGVsaW5lcy4nLFxuICAgICAgJ0RlcGxveSBzY2FsYWJsZSBpbmZlcmVuY2UgZW5kcG9pbnRzIG9uIEt1YmVybmV0ZXMgR1BVIGNsdXN0ZXJzLicsXG4gICAgXSxcbiAgICBlZHVjYXRpb25SZXF1aXJlbWVudDogJ0RlZ3JlZSBpbiBDb21wdXRlciBTY2llbmNlLCBNYXRoLCBvciByZWxhdGVkIFNURU0gZGlzY2lwbGluZScsXG4gICAgZXhwZXJpZW5jZVllYXJzOiAnMysgeWVhcnMnLFxuICAgIGFwcGx5VXJsOiAnaHR0cHM6Ly9zY2FsZS5jb20vY2FyZWVycycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2pvYl8wNCcsXG4gICAgdGl0bGU6ICdTZW5pb3IgRnJvbnRlbmQgRW5naW5lZXInLFxuICAgIGNvbXBhbnk6ICdMaW5lYXInLFxuICAgIGxvY2F0aW9uOiAnUmVtb3RlIChHbG9iYWwpJyxcbiAgICB3b3JrcGxhY2VUeXBlOiAnUmVtb3RlJyxcbiAgICBqb2JUeXBlOiAnRnVsbC10aW1lJyxcbiAgICBleHBlcmllbmNlTGV2ZWw6ICdTZW5pb3InLFxuICAgIHNhbGFyeVJhbmdlOiAnJDE4MCwwMDAgLSAkMjMwLDAwMCcsXG4gICAgcG9zdGVkRGF0ZTogJzEgd2VlayBhZ28nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0hlbHAgdXMgY3JhZnQgdGhlIG1vZGVybiBzdGFuZGFyZCBmb3IgaXNzdWUgdHJhY2tpbmcgYW5kIHByb2R1Y3QgbWFuYWdlbWVudCBzb2Z0d2FyZS4gV2UgY2FyZSBkZWVwbHkgYWJvdXQgNjBmcHMgYW5pbWF0aW9ucywga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYW5kIGluc3RhbnQgbG9jYWwtZmlyc3Qgc3luY2hyb25pemF0aW9uLicsXG4gICAgcmVxdWlyZWRTa2lsbHM6IFsnUmVhY3QnLCAnSmF2YVNjcmlwdCcsICdUeXBlU2NyaXB0JywgJ0dpdCddLFxuICAgIHByZWZlcnJlZFNraWxsczogWydXZWJHTCcsICdGcmFtZXIgTW90aW9uJywgJ0luZGV4ZWREQicsICdUYWlsd2luZCBDU1MnXSxcbiAgICByZXNwb25zaWJpbGl0aWVzOiBbXG4gICAgICAnQnVpbGQgZGVza3RvcC1jbGFzcyB3ZWIgaW50ZXJhY3Rpb25zIHdpdGggemVybyBwZXJjZXB0aWJsZSBsYXRlbmN5LicsXG4gICAgICAnQ2hhbXBpb24gYWNjZXNzaWJpbGl0eSwgZmx1aWQga2V5Ym9hcmQgbmF2aWdhdGlvbiwgYW5kIGRhcmsgbW9kZSBkZXNpZ24gaGFybW9ueS4nLFxuICAgICAgJ09wdGltaXplIFJlYWN0IHJlbmRlcmluZyB0cmVlcyBhbmQgY2FudmFzLWFjY2VsZXJhdGVkIGRvY3VtZW50IHZpZXdzLicsXG4gICAgXSxcbiAgICBlZHVjYXRpb25SZXF1aXJlbWVudDogJ0VxdWl2YWxlbnQgZXhwZXJpZW5jZSBpbiBzaGlwcGluZyB3b3JsZC1jbGFzcyB3ZWIgcHJvZHVjdHMnLFxuICAgIGV4cGVyaWVuY2VZZWFyczogJzUrIHllYXJzJyxcbiAgICBhcHBseVVybDogJ2h0dHBzOi8vbGluZWFyLmFwcC9jYXJlZXJzJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnam9iXzA1JyxcbiAgICB0aXRsZTogJ0xlYWQgRGF0YSBFbmdpbmVlcicsXG4gICAgY29tcGFueTogJ1Nub3dmbGFrZScsXG4gICAgbG9jYXRpb246ICdTYW4gTWF0ZW8sIENBJyxcbiAgICB3b3JrcGxhY2VUeXBlOiAnSHlicmlkJyxcbiAgICBqb2JUeXBlOiAnRnVsbC10aW1lJyxcbiAgICBleHBlcmllbmNlTGV2ZWw6ICdTZW5pb3InLFxuICAgIHNhbGFyeVJhbmdlOiAnJDIwMCwwMDAgLSAkMjUwLDAwMCcsXG4gICAgcG9zdGVkRGF0ZTogJzQgZGF5cyBhZ28nLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgJ0xlYWQgb3VyIGVudGVycHJpc2UgdGVsZW1ldHJ5IGFuZCB3YXJlaG91c2Ugb3B0aW1pemF0aW9uIHBpcGVsaW5lcy4gQXJjaGl0ZWN0IHNjYWxhYmxlIHJlYWwtdGltZSBzdHJlYW1pbmcgaW5nZXN0aW9uIHN5c3RlbXMgcHJvY2Vzc2luZyB0ZW5zIG9mIHBldGFieXRlcyBkYWlseS4nLFxuICAgIHJlcXVpcmVkU2tpbGxzOiBbJ1NRTCcsICdQeXRob24nLCAnRGF0YSBBbmFseXNpcycsICdBV1MnLCAnR2l0J10sXG4gICAgcHJlZmVycmVkU2tpbGxzOiBbJ1NwYXJrJywgJ0thZmthJywgJ2RidCcsICdBaXJmbG93J10sXG4gICAgcmVzcG9uc2liaWxpdGllczogW1xuICAgICAgJ0Rlc2lnbiBtb2R1bGFyIGRhdGEgd2FyZWhvdXNlIHNjaGVtYXMgYW5kIGF1dG9tYXRlZCBwaXBlbGluZSBvcmNoZXN0cmF0aW9ucy4nLFxuICAgICAgJ09wdGltaXplIFNRTCBxdWVyaWVzIGFuZCBjbHVzdGVyIHBhcnRpdGlvbiBwcnVuaW5nIGFjcm9zcyBiaWxsaW9uLXJvdyBkYXRhc2V0cy4nLFxuICAgICAgJ0NvbGxhYm9yYXRlIHdpdGggYnVzaW5lc3MgaW50ZWxsaWdlbmNlIGFuZCBwcm9kdWN0IGFuYWx5c3RzIG9uIHVuaWZpZWQgbWV0cmljcy4nLFxuICAgIF0sXG4gICAgZWR1Y2F0aW9uUmVxdWlyZW1lbnQ6ICdCLlMuIG9yIE0uUy4gaW4gQ29tcHV0ZXIgU2NpZW5jZSBvciBJbmZvcm1hdGlvbiBTeXN0ZW1zJyxcbiAgICBleHBlcmllbmNlWWVhcnM6ICc2KyB5ZWFycycsXG4gICAgYXBwbHlVcmw6ICdodHRwczovL3Nub3dmbGFrZS5jb20vY2FyZWVycycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2pvYl8wNicsXG4gICAgdGl0bGU6ICdKdW5pb3IgU29mdHdhcmUgRW5naW5lZXInLFxuICAgIGNvbXBhbnk6ICdDbG91ZGZsYXJlJyxcbiAgICBsb2NhdGlvbjogJ0F1c3RpbiwgVFgnLFxuICAgIHdvcmtwbGFjZVR5cGU6ICdIeWJyaWQnLFxuICAgIGpvYlR5cGU6ICdGdWxsLXRpbWUnLFxuICAgIGV4cGVyaWVuY2VMZXZlbDogJ0VudHJ5JyxcbiAgICBzYWxhcnlSYW5nZTogJyQxMTUsMDAwIC0gJDE0MCwwMDAnLFxuICAgIHBvc3RlZERhdGU6ICc1IGRheXMgYWdvJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgICdLaWNrc3RhcnQgeW91ciBjYXJlZXIgYXQgQ2xvdWRmbGFyZSBidWlsZGluZyB0aGUgbmV4dCBnZW5lcmF0aW9uIG9mIGludGVybmV0IHNlY3VyaXR5IGFuZCBlZGdlIGNvbXB1dGUgaW5mcmFzdHJ1Y3R1cmUuIEdyZWF0IG1lbnRvcnNoaXAgYW5kIGFjY2VsZXJhdGVkIHByb21vdGlvbiB0cmFja3MuJyxcbiAgICByZXF1aXJlZFNraWxsczogWydQeXRob24nLCAnSmF2YVNjcmlwdCcsICdHaXQnLCAnU1FMJ10sXG4gICAgcHJlZmVycmVkU2tpbGxzOiBbJ1JlYWN0JywgJ0RvY2tlcicsICdMaW51eCddLFxuICAgIHJlc3BvbnNpYmlsaXRpZXM6IFtcbiAgICAgICdDb250cmlidXRlIHRvIGVkZ2Ugd29ya2VycyBhbmQgY3VzdG9tZXItZmFjaW5nIGRhc2hib2FyZCBmZWF0dXJlcy4nLFxuICAgICAgJ1dyaXRlIGNvbXByZWhlbnNpdmUgdW5pdCB0ZXN0cyBhbmQgYXV0b21hdGVkIGludGVncmF0aW9uIHN1aXRlcy4nLFxuICAgICAgJ1BhcnRpY2lwYXRlIGluIGNvZGUgcmV2aWV3cyBhbmQgd2Vla2x5IGVuZ2luZWVyaW5nIGtub3dsZWRnZSBzaGFyZXMuJyxcbiAgICBdLFxuICAgIGVkdWNhdGlvblJlcXVpcmVtZW50OiAnUmVjZW50IGdyYWR1YXRlIGluIENTIG9yIHNlbGYtdGF1Z2h0IHdpdGggcHJvamVjdCBwb3J0Zm9saW8nLFxuICAgIGV4cGVyaWVuY2VZZWFyczogJzAtMiB5ZWFycycsXG4gICAgYXBwbHlVcmw6ICdodHRwczovL2Nsb3VkZmxhcmUuY29tL2NhcmVlcnMnLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfTUVUUklDUzogRGFzaGJvYXJkTWV0cmljcyA9IHtcbiAgcmVzdW1lc0FuYWx5emVkOiAwLFxuICBhdmVyYWdlQXRzU2NvcmU6IDAsXG4gIHNraWxsc1ZlcmlmaWVkOiAwLFxuICBhc3Nlc3NtZW50c0NvbXBsZXRlZDogMCxcbiAgam9iTWF0Y2hlczogMCxcbiAgY2FyZWVyUmVhZGluZXNzU2NvcmU6IDAsXG59O1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9BVFNfSElTVE9SWTogQXRzSGlzdG9yeVBvaW50W10gPSBbXTtcblxuZXhwb3J0IGNvbnN0IElOSVRJQUxfU0tJTExfTUFTVEVSWTogU2tpbGxNYXN0ZXJ5UG9pbnRbXSA9IFtdO1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9BQ1RJVklUSUVTOiBBY3Rpdml0eUxvZ0l0ZW1bXSA9IFtdO1xuIl0sIm5hbWVzIjpbIlJFU1VNRV9URU1QTEFURVMiLCJJTklUSUFMX1JFU1VNRV9EQVRBIiwiaWQiLCJ0aXRsZSIsImNhbmRpZGF0ZVR5cGUiLCJwZXJzb25hbEluZm8iLCJmdWxsTmFtZSIsImVtYWlsIiwicGhvbmUiLCJsb2NhdGlvbiIsImhlYWRsaW5lIiwibGlua2VkaW4iLCJnaXRodWIiLCJwb3J0Zm9saW8iLCJzdW1tYXJ5Iiwic2tpbGxzIiwidGVjaG5pY2FsIiwic29mdCIsInRvb2xzIiwiZXhwZXJpZW5jZSIsImNvbXBhbnkiLCJyb2xlIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImN1cnJlbnQiLCJidWxsZXRQb2ludHMiLCJlZHVjYXRpb24iLCJkZWdyZWUiLCJpbnN0aXR1dGlvbiIsImdyYWR1YXRpb25ZZWFyIiwiZ3BhIiwicHJvamVjdHMiLCJkZXNjcmlwdGlvbiIsInRlY2hub2xvZ2llcyIsImNlcnRpZmljYXRpb25zIiwidGVtcGxhdGVJZCIsImxhc3RVcGRhdGVkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiU0FNUExFX0VYUEVSSUVOQ0VEX1JFU1VNRSIsImhvbm9ycyIsImxpbmsiLCJidWxsZXRzIiwibmFtZSIsImlzc3VlciIsImRhdGUiLCJjcmVkZW50aWFsSWQiLCJJTklUSUFMX1VTRVJfU0tJTExTIiwiY2F0ZWdvcnkiLCJzdGF0dXMiLCJJTklUSUFMX0FOQUxZU0lTX1JFU1VMVCIsIm92ZXJhbGxBdHNTY29yZSIsImtleXdvcmRNYXRjaFNjb3JlIiwiZm9ybWF0dGluZ1Njb3JlIiwiY29udGVudFNjb3JlIiwic2VjdGlvblNjb3JlIiwid29yZENvdW50IiwicmVhZGFiaWxpdHlTY29yZSIsImRldGVjdGVkS2V5d29yZHMiLCJtaXNzaW5nS2V5d29yZHMiLCJzdHJlbmd0aHMiLCJzZWN0aW9uIiwid2Vha25lc3NlcyIsIndoYXRJc1dyb25nIiwid2h5SXRNYXR0ZXJzIiwiaG93VG9JbXByb3ZlIiwic2V2ZXJpdHkiLCJyZWNvbW1lbmRhdGlvbnMiLCJhY3Rpb25UZXh0Iiwib3JpZ2luYWxUZXh0IiwiaW1wcm92ZWRUZXh0IiwiaW1wYWN0Iiwic3VtbWFyeUZlZWRiYWNrIiwiYW5hbHl6ZWRBdCIsIklOSVRJQUxfSU1QUk9WRU1FTlRTIiwiZmllbGQiLCJvcmlnaW5hbENvbnRlbnQiLCJpbXByb3ZlZENvbnRlbnQiLCJyZWFzb25pbmciLCJtZXRyaWNJbXBhY3QiLCJTS0lMTF9BU1NFU1NNRU5UX1FVRVNUSU9OUyIsIlB5dGhvbiIsInNraWxsIiwidHlwZSIsInF1ZXN0aW9uIiwib3B0aW9ucyIsImNvcnJlY3RPcHRpb25JbmRleCIsImV4cGxhbmF0aW9uIiwidG9waWMiLCJjb2RlU25pcHBldCIsIlJlYWN0IiwiU1FMIiwiSmF2YVNjcmlwdCIsIkphdmEiLCJBV1MiLCJHaXQiLCJnZXRRdWVzdGlvbnNGb3JTa2lsbCIsInRvTG93ZXJDYXNlIiwiU0FNUExFX0pPQlMiLCJ3b3JrcGxhY2VUeXBlIiwiam9iVHlwZSIsImV4cGVyaWVuY2VMZXZlbCIsInNhbGFyeVJhbmdlIiwicG9zdGVkRGF0ZSIsInJlcXVpcmVkU2tpbGxzIiwicHJlZmVycmVkU2tpbGxzIiwicmVzcG9uc2liaWxpdGllcyIsImVkdWNhdGlvblJlcXVpcmVtZW50IiwiZXhwZXJpZW5jZVllYXJzIiwiYXBwbHlVcmwiLCJJTklUSUFMX01FVFJJQ1MiLCJyZXN1bWVzQW5hbHl6ZWQiLCJhdmVyYWdlQXRzU2NvcmUiLCJza2lsbHNWZXJpZmllZCIsImFzc2Vzc21lbnRzQ29tcGxldGVkIiwiam9iTWF0Y2hlcyIsImNhcmVlclJlYWRpbmVzc1Njb3JlIiwiSU5JVElBTF9BVFNfSElTVE9SWSIsIklOSVRJQUxfU0tJTExfTUFTVEVSWSIsIklOSVRJQUxfQUNUSVZJVElFUyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/mockData.ts
