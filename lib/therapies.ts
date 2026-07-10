export type Therapy = {
  code: string
  name: string
  tagline: string
  hook: string
  image: string
  images: string[]
  hasQR?: boolean
  qrValue?: string
  retreatLink?: boolean
  anchorId?: string
  details: {
    why: string
    designedFor: string[]
    benefits: string[]
    structure: string[]
    focus: string[]
  }
}

export const therapies: Therapy[] = [
  {
  code: 'HNS',
  name: 'HNS Therapy',
  tagline: 'Head Neck Shoulder Therapy',
  hook: 'RELEASE YOUR STRESS in just 21 mins.',
  // Change this line to map your local directory image asset route
  image: '/images/massage.jpeg', 
  images: [
    '/images/massage.jpeg',
    'https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=80',
  ],
  hasQR: true,
  qrValue: 'https://deeprelieftherapy.com/contact',
  details: {
    why: 'Modern work culture overloads the upper body and nervous system. Long laptop hours, mobile usage, stress, poor posture, and mental fatigue commonly lead to neck stiffness, shoulder tightness, tension headaches, upper back pain, and mental burnout. It helps to avoid problems related to pain in neck and upper limb, cervical vertebra, disc bulge, slip disc etc. Measurable difference in the FIRST session.',
    designedFor: ['I.T. professionals', 'Corporate employees', 'Desk workers', 'Drivers', 'Students', 'People with long screen-time exposure'],
    benefits: ['Reduces neck and shoulder tension', 'Improves posture and mobility', 'Enhances blood circulation', 'Relaxes the nervous system', 'Reduces stress and mental fatigue', 'Improves focus and productivity', 'Improved breathing comfort', 'Immediate sense of relief without fatigue', 'Measurable difference in the FIRST session'],
    structure: ['Relaxation strokes for nervous system calming', 'Trigger point release on neck & back', 'Shoulder mobility stretches', 'Specific Acupressure points for head ache and stress relief and releasing mental tension'],
    focus: ['Cervical muscles', 'Upper trapezius', 'Levator scapulae', 'Rhomboids', 'Scalp & fore head tension areas', 'Upper thoracic (mid back) region'],
  },
},
  {
    code: 'PSR',
    name: 'PSR Therapy',
    tagline: 'Pure Stress Relief Therapy',
    hook: 'the PERFECT RECOVERY FORMULA of DRT 90 min therapy & 9hrs of sleep',
    image: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1506126279646-a697353d3166?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
    ],
    details: {
      why: 'Stress, poor sleep, mental overload, and physical inactivity can keep the body in a constant state of tension . Swedish massage helps activate relaxation response and improve circulation throughout the body .',
      designedFor: ['Stress-prone individuals', 'Busy professionals', 'First-time massage clients', 'People with poor sleep', 'Individuals with mental fatigue', 'Anyone needing full-body relaxation'],
      benefits: ['Relaxation for body and mind', 'Improves blood and lymph circulation', 'Reduces stress hormones', 'Helps reduce muscle tension', 'Supports recovery from fatigue', 'Creates a feeling of lightness and calmness'],
      structure: ['Long gliding strokes', 'Gentle kneading techniques', 'Rhythmic compression', 'Joint mobilization', 'Relaxation-focused finishing techniques'],
      focus: ['Entire muscular system', 'Back muscles', 'Arms & legs', 'Nervous system relaxation', 'Circulatory stimulation', 'General body recovery'],
    },
  },
  {
    code: 'MFR',
    name: 'MFR Therapy',
    tagline: 'Medical Foot Reflexology',
    hook: 'FEEL REFRESHED With Every Step.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1540199773831-3f34d86d30b8?auto=format&fit=crop&w=1200&q=80',
    ],
    details: {
      why: 'Reflexology is based on the principle of promoting balance and harmony within the body . Reflexologists believe that by applying pressure to specific reflex points on the feet, hands, ears or face, they can help restore the body\'s natural balance and encourage its self-healing abilities . Sedentary lifestyle, prolonged standing, aging, poor circulation, and lack of movement create stress in the feet and lower body . Since feet carry the body\'s weight daily, they often become overloaded and neglected .',
      designedFor: ['Sedentary lifestyle individuals', 'Elderly people', 'Working professionals', 'Retail workers', 'People with tired or heavy legs', 'Individuals with poor circulation'],
      benefits: ['Relieves foot fatigue and heaviness', 'Improves relaxation and sleep quality', 'Enhances blood circulation', 'Reduces stress and nervous tension', 'lower the body pain from all over body', 'Improves lower limb comfort and mobility'],
      structure: ['Warm-up relaxation techniques', 'Pressure application on reflex points', 'Foot mobility work', 'Calf relaxation techniques', 'Nervous system calming finish'],
      focus: ['Sole of the foot', 'Heel and arch', 'Toe reflex points', 'Plantar fascia', 'Ankle mobility', 'Calf muscles'],
    },
  },
  {
    code: 'RCN',
    name: 'RCN Therapy',
    tagline: 'Re Connect to Nature Therapy at Pawana Dam Resort',
    hook: 'It’s JOURNEY back to YOURSELF.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1496486411896-2f2f48c78b29?auto=format&fit=crop&w=1200&q=80',
    ],
    retreatLink: true,
    anchorId: 'rcn-therapy',
    details: {
      why: 'Modern life keeps people constantly connected to screens, deadlines, noise, and stress, creating physical tension and mental fatigue 1]. This is not a luxury getaway 1]. It is a guided 20-Hour therapeutic reset designed to help people leave feeling calmer, lighter, physically refreshed, mentally clearer, and more connected to themselves through nature, therapeutic bodywork, breath work, mindful practices, and deep rest 1].',
      designedFor: ['IT professionals and desk-based employees', 'Entrepreneurs and business owners', 'Professionals experiencing burnout', 'People under chronic stress', 'Individuals with head, neck, and shoulder tightness', 'Anyone seeking mental clarity and emotional balance', 'People wanting to reconnect with nature and themselves'],
      benefits: ['Physical: Relieves muscle tension, improves circulation, promotes deeper sleep, enhances mobility & posture, reduces fatigue', 'Mental: Calms the nervous system, improves focus and clarity, reduces stress and mental overload, enhances emotional resilience', 'Emotional & Spiritual: Creates inner stillness, encourages self-awareness, supports emotional release, helps reconnect with nature & self, cultivates peace'],
      structure: ['Day 1: Welcome, orientation, intention setting, Nature grounding walk, Breathwork session, Panchamahabhuta (Five Elements) awareness, HNS therapy, Wholesome dinner, Digital detox, Quiet sleep in nature', 'Day 2: Sunrise silence and mindful observation, Morning breathwork, Gentle mobility and stretching, PSR Therapy, Healthy breakfast, Closing circle and integration (11:00 AM Concludes)'],
      focus: ['Nervous system relaxation', 'Stress recovery', 'Mind-body reconnection', 'Muscle relaxation and recovery', 'Breath awareness', 'Panchamahabhuta (Five Elements) balance', 'Nature immersion', 'Better sleep and recovery', 'Mental clarity', 'Sustainable self-care practices'],
    },
  },
  {
    code: 'PM',
    name: 'Pain Management Therapy',
    tagline: 'Targeted relief for chronic discomfort',
    hook: 'RESTORE MOVEMENT, REDUCE DISCOMFORT.',
    image: 'https://images.unsplash.com/photo-1519494080410-f6ba1f8a0f76?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1519494080410-f6ba1f8a0f76?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1514995669114-2f9f6d519aa7?auto=format&fit=crop&w=1200&q=80',
    ],
    anchorId: 'pain-management',
    details: {
      why: 'Pain Management Therapy focuses directly on easing persistent muscle knots, joint restrictions, and structural strain 1, 2]. Through advanced manual techniques, it intercepts baseline pain signals and reverses the impacts of recurring body fatigue to re-establish long-term functional balance .',
      designedFor: ['Those dealing with recurring pain or stiffness', 'People with posture-related strain', 'Anyone needing a gentler recovery path', 'Clients looking for long-term relief', 'Individuals with chronic musculoskeletal strain'],
      benefits: ['Reduced deep-seated muscular tension', 'Improved localized mobility & structural posture', 'Calmer, regulated baseline nervous system', 'Supportive tissue recovery between high-intensity deep sessions', 'Reduction of local mechanical joint irritation'],
      structure: ['Movement & painful threshold assessment', 'Targeted structural soft-tissue release', 'Controlled breath-guided trigger point relaxation', 'Functional alignment tracking & custom recovery advice'],
      focus: ['Pain relief zones', 'Joint mobility chains', 'Postural adjustment landmarks', 'Myofascial restriction bands'],
    },
  },
  {
    code: 'ADT',
    name: 'ADT Therapy',
    tagline: 'Advance Deep Tissue Therapy',
    hook: 'Build for those who EMBRACE THE PAIN of TRANSFORMATION.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520975923631-8d7e1bfcf37f?auto=format&fit=crop&w=1200&q=80',
    ],
    details: {
      why: 'Modern lifestyle habits are putting continuous stress on the body . Long sitting hours, poor posture, repetitive work, stress, lack of movement, gym strain, driving, and mobile/laptop usage can gradually create muscular imbalance and chronic tension . Over time, this may contribute to neck pain, shoulder tightness, back pain, muscle stiffness, trigger points (muscle knots), and reduced flexibility . This therapy is important because it focuses on identifying and addressing deeper muscular tension and movement dysfunction instead of only providing temporary relaxation .',
      designedFor: ['Desk job & long sitting lifestyle', 'IT professionals & corporate workers', 'Gym-related muscle tightness', 'Postural imbalance', 'Chronic neck & back discomfort', 'Stress-related body tension', 'Repetitive work strain', 'Reduced mobility & flexibility', 'Muscle stiffness after long working hours', 'Active individuals needing recovery support'],
      benefits: ['Reduced muscular tension', 'Improved body mobility', 'Better posture awareness', 'Relief from stiffness & tightness', 'Trigger point release support', 'Improved movement quality', 'Reduced body fatigue', 'Better flexibility', 'Improved muscle recovery', 'Relaxation of overworked muscles', 'Better body balance & functional movement', 'Improved physical comfort during daily activities'],
      structure: ['Step 1- Consultation & Assessment of pain patterns and posture habits', 'Step 2- Posture & Body Education about sitting habits and alignment', 'Step 3- Trigger Point Release techniques to release tight knots', 'Step 4- Deep Tissue Therapy controlled deep pressure adjustments', 'Step 5- Recovery & Guidance on basic hydration and stretching awareness'],
      focus: ['Neck muscles', 'Upper trapezius', 'Shoulders', 'Upper back', 'Mid back', 'Lower back', 'Glutes', 'Hip muscles', 'Hamstrings', 'Calves', 'Forearms & wrist tension areas', 'Postural muscle chains', 'Trigger point zones', 'Deep muscular tension regions'],
    },
  },
  // Look for your 'LKC' object entry inside therapies.ts and update its fields to match this precisely:
{
  code: 'LKC',
  name: 'LKC Therapy',
  tagline: 'Liver Kidney Cleansing Therapy',
  hook: 'Feel REJUVENATED from within.',
  image: '/images/1000442045.jpg',
  images: [
    '/images/1000442045.jpg',
    '/images/1000442110.png', // Alternate image mapping parameter configuration rules
  ],
  anchorId: 'lkc-therapy',
  details: {
    why: 'Modern lifestyle habits, processed food, pollution, and stress may gradually overload the body, contributing to the accumulation of metabolic waste and toxins . When elimination systems become stressed, organs like the liver, kidneys, and digestive system may not function optimally, causing low energy, poor digestion, bloating, and fatigue . This therapy supports the body\'s natural detoxification and recovery processes through traditional methods .',
    designedFor: ['Fatigue & low energy', 'Sedentary lifestyle stress', 'Digestive discomfort', 'Poor eating habits', 'High stress lifestyle', 'Water retention & body heaviness', 'Skin dullness & tired appearance', 'Poor sleep quality', 'Feeling physically sluggish', 'General wellness imbalance', 'Lifestyle-related body stress', 'People seeking preventive wellness support'],
    benefits: ['Support for natural detoxification processes', 'Improved hydration awareness', 'Better lifestyle & body awareness', 'Reduced feeling of heaviness', 'Improved energy levels', 'Better recovery support', 'Support for digestion & elimination', 'Improved sense of physical freshness', 'Relaxation & wellness support', 'Improved daily wellness habits', 'Better body maintenance awareness', 'Support for overall well-being'],
    structure: ['Step 1- Wellness Consultation tracking eating patterns and habits', 'Step 2- Body & Lifestyle Awareness education regarding nutrition', 'Step 3- Cleansing Support Protocol activation to boost natural elimination', 'Step 4- Kidney Cleansing Support utilizing corn silk, parsley or watermelon decoctions', 'Step 5- Liver & Digestive Wellness Support lifestyle planning sessions', 'Step 6- Recovery & Wellness Guidance with recommendations on long-term rest'],
    focus: ['Kidney wellness support', 'Liver wellness support', 'Digestive system support', 'Hydration balance', 'Natural elimination processes', 'Lifestyle correction', 'Energy & recovery support', 'Stress reduction support', 'Body freshness & vitality', 'Wellness maintenance', 'Preventive lifestyle awareness', 'Overall body balance & recovery support'],
  },
},
]