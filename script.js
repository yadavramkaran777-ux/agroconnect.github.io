/**
 * AgroConnect Pro 2026 - Enterprise Edition
 * Complete Agriculture Subsidy & Farming Management System
 * Enhanced Version with Weather, Market, Farm Tools, Expert Advice & Community
 * Production-ready Architecture with Modern ES6+ Patterns
 */

class AgroConnectPro {
  constructor() {
    this.schemes = this.initializeSchemes();
    this.currentPage = 'home';
    this.filters = { state: 'All', category: 'all', search: '' };
    this.statsData = {};
    this.farmingData = this.initializeFarmingData();
    this.weatherData = this.initializeWeatherData();
    this.marketData = this.initializeMarketData();
    this.newsData = this.initializeNewsData();
    this.communityData = this.initializeCommunityData();
    
    this.init();
  }

  // ========== INITIALIZATION DATA ==========
  
  initializeSchemes() {
    return [
      {
        id: 'pmkisan',
        name: 'PM-KISAN Samman Nidhi',
        category: 'income',
        states: ['All'],
        amount: '₹12,000/year',
        eligibility: 'All landholding farmers (excl. institutional holders)',
        documents: ['Aadhaar', 'Bank Passbook', 'Land Records'],
        description: 'Direct Benefit Transfer in 3 instalments of ₹6,000 each',
        features: ['99.2% payout success', 'Aadhaar-Seeding mandatory', 'No land ceiling'],
        subsidyType: 'Direct',
        priority: 1,
        lastUpdated: '2026-02-12',
        status: 'Active'
      },
      {
        id: 'tractorsubsidy',
        name: 'Tractor & Machinery Subsidy (SMAM)',
        category: 'mechanization',
        states: ['All'],
        amount: '50-80% (max ₹5L)',
        eligibility: 'Priority <25 acres, SC/ST/Women',
        documents: ['Aadhaar', 'Bank Details', 'GST Invoice'],
        description: 'Subvention on farm machinery 20HP-110HP',
        features: ['Zero EMI financing', 'Combine harvesters included', 'Solar pumps 60%'],
        subsidyType: 'Capital',
        priority: 2,
        lastUpdated: '2026-01-15',
        status: 'Active'
      },
      {
        id: 'pmksy',
        name: 'PMKSY - Per Drop More Crop',
        category: 'irrigation',
        states: ['All'],
        amount: '55-90% subsidy',
        eligibility: 'All farmers (horticulture priority)',
        documents: ['Aadhaar', 'Land Records', 'Project Report'],
        description: 'Drip & sprinkler irrigation systems',
        features: ['Drip: 55-90%', 'Sprinkler: 55-70%', 'Solar pumps included'],
        subsidyType: 'Capital',
        priority: 3,
        lastUpdated: '2026-02-01',
        status: 'Active'
      },
      {
        id: 'kcc',
        name: 'Kisan Credit Card (KCC)',
        category: 'credit',
        states: ['All'],
        amount: 'Up to ₹3L',
        eligibility: 'All farmers with land records',
        documents: ['Aadhaar', 'Land Records', 'ID Proof'],
        description: 'Credit facility for agriculture & allied activities',
        features: ['Flexible repayment', '2% interest subsidy', 'No collateral needed'],
        subsidyType: 'Credit',
        priority: 4,
        lastUpdated: '2026-02-10',
        status: 'Active'
      },
      {
        id: 'pmfby',
        name: 'PM Fasal Bima Yojana',
        category: 'insurance',
        states: ['All'],
        amount: '40-60% premium subsidy',
        eligibility: 'All farmers growing notified crops',
        documents: ['Aadhaar', 'Land Records', 'Crop Declaration'],
        description: 'Comprehensive crop insurance coverage',
        features: ['Climate risk covered', 'Simple claim process', 'Quick settlement'],
        subsidyType: 'Insurance',
        priority: 5,
        lastUpdated: '2026-01-20',
        status: 'Active'
      }
    ];
  }

  initializeFarmingData() {
    return {
      activities: [
        { id: 1, date: '2026-02-10', type: 'Irrigation', notes: 'Applied 2 inch water', status: '✅' },
        { id: 2, date: '2026-02-08', type: 'Pesticide Spray', notes: 'Fungicide for powdery mildew', status: '✅' },
        { id: 3, date: '2026-02-05', type: 'Fertilizer', notes: 'DAP application 100 kg/acre', status: '✅' }
      ],
      expenses: [
        { id: 1, date: '2026-02-10', category: 'Seeds', amount: 8500, desc: 'Wheat seeds' },
        { id: 2, date: '2026-02-08', category: 'Fertilizer', amount: 12300, desc: 'DAP & NPK' },
        { id: 3, date: '2026-02-05', category: 'Labour', amount: 18500, desc: 'Farm labour cost' }
      ],
      harvests: [
        { crop: 'Wheat', year: '2025-26', yield: 240, acres: 60 },
        { crop: 'Cotton', year: '2025', yield: 18, acres: 30 }
      ]
    };
  }

  initializeWeatherData() {
    return {
      current: {
        location: 'Gujarat',
        temp: 28,
        description: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 12
      },
      forecast: [
        { day: 'Mon', icon: '☀️', high: 32, low: 22 },
        { day: 'Tue', icon: '⛅', high: 30, low: 20 },
        { day: 'Wed', icon: '🌧️', high: 26, low: 18 },
        { day: 'Thu', icon: '🌧️', high: 25, low: 17 }
      ],
      alerts: [
        { level: 'high', title: 'Heat Wave Warning', desc: 'Extreme Heat Expected (May 15-18)', icon: '🔴' },
        { level: 'medium', title: 'Pest Alert', desc: 'Armyworm Activity in Cotton Region', icon: '🟡' },
        { level: 'low', title: 'Rainfall Expected', desc: 'Good for Monsoon Preparation', icon: '🟢' }
      ]
    };
  }

  initializeMarketData() {
    return {
      crops: {
        wheat: { price: 2450, change: 50, changePercent: 2.1, unit: 'quintal', high52: 2680, low52: 1950 },
        rice: { price: 3200, change: -25, changePercent: -0.8, unit: 'quintal', high52: 3450, low52: 2800 },
        cotton: { price: 6850, change: 150, changePercent: 2.2, unit: 'quintal', high52: 7200, low52: 5800 },
        sugarcane: { price: 320, change: 10, changePercent: 3.1, unit: 'quintal', high52: 380, low52: 280 },
        potato: { price: 1850, change: -100, changePercent: -5.1, unit: 'quintal', high52: 2200, low52: 1200 },
        onion: { price: 2200, change: 200, changePercent: 9.1, unit: 'quintal', high52: 2800, low52: 1500 }
      },
      mandis: [
        { name: 'Ahmedabad Mandi', price: 2480, distance: 50 },
        { name: 'Vadodara Mandi', price: 2465, distance: 85 },
        { name: 'Surat Mandi', price: 2420, distance: 120 }
      ],
      stateComparison: [
        { state: 'Gujarat', price: 2450, change: '+2.1%' },
        { state: 'Madhya Pradesh', price: 2380, change: '-1.5%' },
        { state: 'Punjab', price: 2520, change: '+3.2%' }
      ]
    };
  }

  initializeNewsData() {
    return [
      {
        id: 1,
        tag: '🔔 Breaking',
        title: 'New PM-KISAN Payment Released - Check Your Account',
        desc: '₹6,000 installment of PM-KISAN has been transferred to all eligible farmers.',
        date: 'Feb 12, 2026',
        timeAgo: '2 hours ago'
      },
      {
        id: 2,
        tag: '📢 Update',
        title: 'New Tractor Subsidy Scheme Launched in Gujarat',
        desc: 'State government announces 70% subsidy for small farmers. Registration open till March 31.',
        date: 'Feb 10, 2026',
        timeAgo: '2 days ago'
      },
      {
        id: 3,
        tag: '🌾 Agriculture',
        title: 'Monsoon Forecast: Normal to Above-Normal Rainfall Expected',
        desc: 'IMD predicts 102% of normal rainfall for upcoming monsoon season.',
        date: 'Feb 08, 2026',
        timeAgo: '4 days ago'
      },
      {
        id: 4,
        tag: '💰 Subsidy',
        title: 'Crop Insurance Premium Rate Reduced',
        desc: 'PM Fasal Bima premiums reduced by 5% for kharif 2026.',
        date: 'Feb 05, 2026',
        timeAgo: '7 days ago'
      }
    ];
  }

  initializeCommunityData() {
    return [
      {
        id: 1,
        title: 'Best time to prepare fields for monsoon crops?',
        tag: 'Monsoon Prep',
        author: 'Farmer Rajesh',
        replies: 23,
        views: 156,
        likes: 23,
        timeAgo: '2 hours ago'
      },
      {
        id: 2,
        title: 'Success Story: Earned ₹8L profit with drip irrigation!',
        tag: 'Success Story',
        author: 'Farmer Priya',
        replies: 67,
        views: 892,
        likes: 234,
        timeAgo: '5 hours ago'
      },
      {
        id: 3,
        title: 'How to get PM-KISAN benefit if I\'m a tenant farmer?',
        tag: 'Subsidies',
        author: 'Farmer Kumar',
        replies: 12,
        views: 445,
        likes: 67,
        timeAgo: '1 day ago'
      }
    ];
  }

  // ========== MAIN INITIALIZATION ==========
  
  init() {
    this.cacheElements();
    this.bindEvents();
    this.initAnimations();
    this.initParticles();
    this.loadDashboard();
    this.animateStats();
    
    requestAnimationFrame(() => this.startParticleSystem());
  }

  cacheElements() {
    this.elements = {
      pages: document.querySelectorAll('.page'),
      navBtns: document.querySelectorAll('.nav-btn'),
      stateFilter: document.getElementById('stateFilter'),
      categoryFilter: document.getElementById('categoryFilter'),
      globalSearch: document.getElementById('globalSearch'),
      subsidyList: document.getElementById('subsidyList'),
      statValues: document.querySelectorAll('.stat-value'),
      applyBtn: document.getElementById('applyBtn'),
      weatherState: document.getElementById('weatherState'),
      cropFilter: document.getElementById('cropFilter'),
      stateFilter2: document.getElementById('stateFilter2'),
      fieldDate: document.getElementById('activity-date'),
      activityType: document.getElementById('activity-type'),
      activityNotes: document.getElementById('activity-notes'),
      expenseDate: document.getElementById('expense-date'),
      expenseCategory: document.getElementById('expense-category'),
      expenseAmount: document.getElementById('expense-amount'),
      expenseDesc: document.getElementById('expense-desc'),
      fieldSize: document.getElementById('field-size'),
      expectedYield: document.getElementById('expected-yield'),
      expertQuestion: document.getElementById('expert-question'),
      cropConcern: document.getElementById('crop-concern'),
      fileInput: document.getElementById('fileInput')
    };
  }

  bindEvents() {
    // ===== Navigation =====
    this.elements.navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        this.navigate(page);
        this.updateActiveNav(page);
      });
    });

    // ===== Filters =====
    this.elements.stateFilter?.addEventListener('change', (e) => {
      this.filters.state = e.target.value;
      this.renderSubsidyList();
    });

    this.elements.categoryFilter?.addEventListener('change', (e) => {
      this.filters.category = e.target.value;
      this.renderSubsidyList();
    });

    this.elements.globalSearch?.addEventListener('input', debounce((e) => {
      this.filters.search = e.target.value.toLowerCase();
      this.renderSubsidyList();
    }, 300));

    // ===== Weather =====
    this.elements.weatherState?.addEventListener('change', () => this.updateWeatherLocation());

    // ===== Market =====
    this.elements.cropFilter?.addEventListener('change', () => this.updateMarketPrices());
    this.elements.stateFilter2?.addEventListener('change', () => this.updateMarketPrices());

    // ===== Farming Form Events =====
    document.getElementById('applyBtn')?.addEventListener('click', () => this.processApplication());

    // ===== File Upload =====
    this.elements.fileInput?.addEventListener('change', (e) => this.handleFileUpload(e));
  }

  // ========== PAGE NAVIGATION ==========
  
  navigate(pageId) {
    if (this.currentPage === pageId) return;

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
      targetPage.classList.add('active');
      this.animatePageTransition(targetPage);
      this.currentPage = pageId;
      
      // Initialize page-specific content
      this[`init${this.capitalize(pageId)}Page`]?.call(this);
    }
  }

  updateActiveNav(pageId) {
    this.elements.navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.page === pageId);
    });
  }

  animatePageTransition(page) {
    page.style.opacity = '0';
    page.style.transform = 'translateY(30px)';
    
    requestAnimationFrame(() => {
      page.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
      page.style.opacity = '1';
      page.style.transform = 'translateY(0)';
    });
  }

  // ========== SUBSIDY SCHEMES MANAGEMENT ==========
  
  renderSubsidyList() {
    const filteredSchemes = this.schemes.filter(scheme => 
      (this.filters.state === 'All' || scheme.states.includes(this.filters.state)) &&
      (this.filters.category === 'all' || scheme.category === this.filters.category) &&
      (this.filters.search === '' || 
        scheme.name.toLowerCase().includes(this.filters.search) ||
        scheme.description.toLowerCase().includes(this.filters.search))
    ).sort((a, b) => b.priority - a.priority);

    this.elements.subsidyList.innerHTML = this.createLoadingState();

    setTimeout(() => {
      this.elements.subsidyList.innerHTML = filteredSchemes.map((scheme, index) => 
        this.createSchemeCard(scheme, index)
      ).join('');
      
      this.animateSchemeCards();
    }, 800);
  }

  createSchemeCard(scheme, index) {
    return `
      <article class="subsidy-card" style="animation-delay: ${index * 0.1}s" data-scheme="${scheme.id}">
        <div class="scheme-header">
          <h3 class="scheme-title">${scheme.name}</h3>
          <div class="scheme-badge ${scheme.status.toLowerCase()}">${scheme.status}</div>
        </div>
        <div class="scheme-amount">${scheme.amount}</div>
        <div class="scheme-meta">
          <span>📂 ${scheme.category.replace('_', ' ').toUpperCase()}</span>
          <span>🌍 ${scheme.states.join(', ')}</span>
          <span>📄 ${scheme.documents.length} docs</span>
        </div>
        <p class="scheme-desc">${scheme.description}</p>
        <ul class="scheme-features">
          ${scheme.features.map(feat => `<li>${feat}</li>`).join('')}
        </ul>
        <div class="scheme-actions">
          <button class="btn-primary" onclick="app.navigate('apply')">Apply Now</button>
          <button class="btn-secondary" onclick="app.showSchemeDetails('${scheme.id}')">Details</button>
        </div>
      </article>
    `;
  }

  showSchemeDetails(schemeId) {
    const scheme = this.schemes.find(s => s.id === schemeId);
    if (scheme) {
      alert(`${scheme.name}\n\nEligibility: ${scheme.eligibility}\n\nAmount: ${scheme.amount}\n\nDocuments: ${scheme.documents.join(', ')}`);
    }
  }

  resetFilters() {
    this.filters = { state: 'All', category: 'all', search: '' };
    this.elements.stateFilter.value = 'All';
    this.elements.categoryFilter.value = 'all';
    this.elements.globalSearch.value = '';
    this.renderSubsidyList();
    this.showNotification('Filters reset successfully', 'info');
  }

  // ========== WEATHER SECTION ==========
  
  initweatherPage() {
    this.renderWeatherData();
  }

  renderWeatherData() {
    const weather = this.weatherData.current;
    const forecastHtml = this.weatherData.forecast.map((day, idx) => `
      <div class="forecast-day" style="animation-delay: ${idx * 0.1}s">
        <div class="day-name">${day.day}</div>
        <div class="day-icon">${day.icon}</div>
        <div class="day-temp">${day.high}°C / ${day.low}°C</div>
      </div>
    `).join('');

    const alertsHtml = this.weatherData.alerts.map(alert => `
      <li class="alert-${alert.level}">
        ${alert.icon} ${alert.title} - ${alert.desc}
      </li>
    `).join('');

    document.querySelector('.forecast-grid').innerHTML = forecastHtml;
    document.querySelector('.alert-list').innerHTML = alertsHtml;
  }

  updateWeatherLocation() {
    const state = this.elements.weatherState.value;
    this.weatherData.current.location = state;
    this.renderWeatherData();
    this.showNotification(`Weather updated for ${state}`, 'success');
  }

  // ========== MARKET PRICES SECTION ==========
  
  initmarketPage() {
    this.renderMarketPrices();
  }

  renderMarketPrices() {
    const selectedCrop = this.elements.cropFilter?.value || 'wheat';
    const cropData = this.marketData.crops[selectedCrop];
    
    if (!cropData) return;

    const changeClass = cropData.change >= 0 ? 'up' : 'down';
    const changeSymbol = cropData.change >= 0 ? '📈 ↑' : '📉 ↓';
    
    // Update price display
    const priceCard = document.querySelector('.main-price');
    if (priceCard) {
      priceCard.innerHTML = `
        <h3>${this.capitalize(selectedCrop)} Price</h3>
        <div class="current-price">₹${cropData.price.toLocaleString()} <span class="price-unit">per ${cropData.unit}</span></div>
        <div class="price-change ${changeClass}">
          ${changeSymbol} ₹${Math.abs(cropData.change)} (${cropData.changePercent > 0 ? '+' : ''}${cropData.changePercent.toFixed(1)}%) from yesterday
        </div>
        <div class="price-meta">
          <p><strong>52-Week High:</strong> ₹${cropData.high52.toLocaleString()}</p>
          <p><strong>52-Week Low:</strong> ₹${cropData.low52.toLocaleString()}</p>
        </div>
      `;
    }

    // Update mandis display
    const mandiHtml = this.marketData.mandis.map((mandi, idx) => `
      <li style="animation-delay: ${idx * 0.1}s">
        <strong>${mandi.name}</strong><br>
        ₹${mandi.price.toLocaleString()} | ${mandi.distance} km away
      </li>
    `).join('');

    const mandiCard = document.querySelector('.mandi-list');
    if (mandiCard) mandiCard.innerHTML = mandiHtml;
  }

  updateMarketPrices() {
    this.renderMarketPrices();
  }

  // ========== FARMING SECTION ==========
  
  initfarmingPage() {
    this.displayFarmingData();
  }

  displayFarmingData() {
    const activityHtml = this.farmingData.activities.map(act => `
      <li><strong>${act.date}:</strong> ${act.type} - ${act.notes} ${act.status}</li>
    `).join('');

    const expensesSummary = this.farmingData.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    
    const activityList = document.querySelector('.activity-list');
    if (activityList) activityList.innerHTML = activityHtml;

    // Update expense cards
    const expenseCards = document.querySelectorAll('.expense-stat');
    if (expenseCards.length) {
      const stats = [
        { label: 'Total Expenses', value: expensesSummary },
        { label: 'Seeds & Nursery', value: 8500 },
        { label: 'Fertilizer', value: 12300 },
        { label: 'Labour', value: 18500 }
      ];

      expenseCards.forEach((card, idx) => {
        if (stats[idx]) {
          card.innerHTML = `
            <div class="exp-label">${stats[idx].label}</div>
            <div class="exp-value">₹${stats[idx].value.toLocaleString()}</div>
          `;
        }
      });
    }
  }

  switchFarmingTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

    // Show selected tab
    const tab = document.getElementById(`${tabName}-tab`);
    if (tab) {
      tab.classList.add('active');
      event.target.classList.add('active');
    }
  }

  calculateYield() {
    const fieldSize = parseFloat(this.elements.fieldSize?.value || 0);
    const expectedYield = parseFloat(this.elements.expectedYield?.value || 0);

    if (fieldSize <= 0 || expectedYield <= 0) {
      this.showNotification('Please enter valid values', 'error');
      return;
    }

    const totalYield = fieldSize * expectedYield;
    const resultPanel = document.getElementById('yieldResult');
    
    if (resultPanel) {
      resultPanel.style.display = 'block';
      document.getElementById('totalYield').textContent = totalYield.toFixed(2);
      this.animateCounter('totalYield', totalYield);
    }

    this.showNotification(`Estimated yield: ${totalYield.toFixed(2)} quintals`, 'success');
  }

  // ========== EXPERT ADVICE SECTION ==========
  
  initexpertPage() {
    this.displayExpertContent();
  }

  switchExpertTab(tabName) {
    document.querySelectorAll('#expert-tab .tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('#expert-tab .tab-btn').forEach(btn => btn.classList.remove('active'));

    const tab = document.getElementById(`${tabName}-tab`);
    if (tab) {
      tab.classList.add('active');
      event.target.classList.add('active');
    }
  }

  displayExpertContent() {
    // Display answered questions
    const qaList = document.querySelector('.qa-list');
    if (qaList) {
      qaList.innerHTML = `
        <div class="qa-item">
          <h4>Q: How to prevent powdery mildew on wheat?</h4>
          <p class="qa-answer">
            <strong>Dr. Ramesh Kumar (Agricultural Scientist):</strong> 
            Apply sulfur dust or wettable sulfur 25 EC at 2g/liter spray in early morning or late evening.
          </p>
          <small>Answered 2 days ago | 45 people found helpful</small>
        </div>
      `;
    }

    // Display video guides
    const videoGrid = document.querySelector('.video-grid');
    if (videoGrid) {
      videoGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-btn')) {
          this.showNotification('Opening video tutorial...', 'info');
        }
      });
    }
  }

  // ========== COMMUNITY SECTION ==========
  
  initcommunityPage() {
    this.renderCommunityDiscussions();
  }

  renderCommunityDiscussions() {
    const discussionHtml = this.communityData.map((discussion, idx) => `
      <article class="discussion-card" style="animation-delay: ${idx * 0.1}s">
        <div class="discussion-header">
          <h4>${discussion.title}</h4>
          <span class="discussion-tag ${discussion.tag.includes('Success') ? 'success-tag' : ''}">${discussion.tag}</span>
        </div>
        <p class="discussion-preview">Started by ${discussion.author} • ${discussion.replies} replies • ${discussion.timeAgo}</p>
        <div class="discussion-stats">
          <span>👁️ ${discussion.views} views</span>
          <span>❤️ ${discussion.likes} likes</span>
        </div>
      </article>
    `).join('');

    const discussionList = document.querySelector('.discussion-list');
    if (discussionList) discussionList.innerHTML = discussionHtml;
  }

  // ========== NEWS SECTION ==========
  
  initnewsPage() {
    this.renderNews();
  }

  renderNews() {
    const newsHtml = this.newsData.map((news, idx) => {
      const isFirst = idx === 0;
      return `
        <article class="news-card ${isFirst ? 'featured' : ''}" style="animation-delay: ${idx * 0.1}s">
          <span class="news-tag">${news.tag}</span>
          <h3>${news.title}</h3>
          <p>${news.desc}</p>
          <small>📅 ${news.date} | ⏱️ ${news.timeAgo}</small>
        </article>
      `;
    }).join('');

    const newsGrid = document.querySelector('.news-grid');
    if (newsGrid) newsGrid.innerHTML = newsHtml;
  }

  // ========== DOCUMENTS SECTION ==========
  
  initdocumentsPage() {
    this.setupDocumentManager();
  }

  setupDocumentManager() {
    const uploadBox = document.querySelector('.upload-box');
    if (uploadBox) {
      uploadBox.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = '#22c55e';
        uploadBox.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
      });

      uploadBox.addEventListener('dragleave', () => {
        uploadBox.style.borderColor = 'var(--glass-border)';
        uploadBox.style.backgroundColor = 'transparent';
      });

      uploadBox.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadBox.style.borderColor = 'var(--glass-border)';
        uploadBox.style.backgroundColor = 'transparent';
        this.handleFileUpload(e);
      });
    }
  }

  handleFileUpload(e) {
    const files = e.dataTransfer?.files || e.target?.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.size > 10 * 1024 * 1024) {
        this.showNotification('File size exceeds 10MB', 'error');
        return;
      }

      this.showNotification(`📤 Uploading ${file.name}...`, 'info');
      
      setTimeout(() => {
        this.showNotification(`✅ ${file.name} uploaded successfully`, 'success');
      }, 1500);
    }
  }

  // ========== FORM PROCESSING ==========
  
  processApplication() {
    const formData = this.validateApplicationForm();
    if (!formData.valid) {
      this.showNotification('Please fix form errors', 'error');
      return;
    }

    const btn = this.elements.applyBtn;
    this.setLoadingState(btn, true);

    setTimeout(() => {
      this.setLoadingState(btn, false);
      const refNum = 'AGRO-2026-' + Math.floor(Math.random() * 1000000);
      this.showApplicationSuccess(refNum);
      this.showNotification(`✅ Application submitted! Ref: ${refNum}`, 'success');
    }, 3000);
  }

  validateApplicationForm() {
    const fname = document.getElementById('fname')?.value.trim();
    const mobile = document.getElementById('mobile')?.value.trim();
    const aadhaar = document.getElementById('aadhaar')?.checked;

    let isValid = true;
    const errors = [];

    if (!fname) {
      errors.push('Full name is required');
      isValid = false;
    }

    if (!mobile || mobile.length !== 10) {
      errors.push('Valid 10-digit mobile number required');
      isValid = false;
    }

    if (!aadhaar) {
      errors.push('Aadhaar consent is required');
      isValid = false;
    }

    if (!isValid) {
      errors.forEach(err => console.error(err));
    }

    return { 
      valid: isValid, 
      data: { fname, mobile, aadhaar }
    };
  }

  showApplicationSuccess(refNum) {
    const resultPanel = document.getElementById('applicationResult');
    if (resultPanel) {
      resultPanel.innerHTML = `
        <div class="success-message">
          <h3>✅ Application Submitted Successfully!</h3>
          <p>Reference Number: <strong>${refNum}</strong></p>
          <p>You will receive updates via SMS and email</p>
          <button class="action-btn primary" onclick="window.print()">🖨️ Print Confirmation</button>
        </div>
      `;
    }
  }

  loadDashboard() {
    this.renderSubsidyList();
  }

  // ========== ANIMATIONS ==========
  
  initAnimations() {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => {
      const delay = el.dataset.delay || '0s';
      el.style.animationDelay = delay;
      el.classList.add('animate');
    });
  }

  animateSchemeCards() {
    const cards = document.querySelectorAll('.subsidy-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add('animate');
    });
  }

  animateStats() {
    this.elements.statValues.forEach(stat => {
      const target = parseFloat(stat.dataset.target) || 0;
      if (target > 0) {
        this.animateCounter(stat, target);
      }
    });
  }

  animateCounter(element, target) {
    let current = 0;
    const duration = 2000;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function
      const easeOut = 1 - Math.pow(2, -10 * progress);
      current = Math.round(easeOut * target);

      if (typeof element === 'string') {
        const el = document.getElementById(element);
        if (el) el.textContent = this.formatCurrency(current);
      } else {
        element.textContent = this.formatCurrency(current);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  }

  // ========== PARTICLE SYSTEM ==========
  
  initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    this.resizeCanvas(canvas, ctx);
    this.particles = [];
    this.createParticles(100);

    window.addEventListener('resize', () => this.resizeCanvas(canvas, ctx));
  }

  createParticles(count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
  }

  startParticleSystem() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.fillStyle = `rgba(34, 197, 94, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();
  }

  resizeCanvas(canvas, ctx) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  // ========== UTILITY FUNCTIONS ==========
  
  formatCurrency(value) {
    if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)}Cr`;
    if (value >= 100000) return `₹${(value / 100000).toFixed(1)}L`;
    if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`;
    return `₹${Math.round(value)}`;
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        ${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'} ${message}
      </div>
    `;

    document.body.appendChild(notification);

    // Trigger animation
    requestAnimationFrame(() => notification.classList.add('show'));

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  setLoadingState(element, loading) {
    if (loading) {
      element.disabled = true;
      element.innerHTML = '⏳ Processing...';
    } else {
      element.disabled = false;
      element.innerHTML = '🚀 Submit Application';
    }
  }

  createLoadingState() {
    return '<div class="loading-skeleton">⏳ Loading schemes...</div>';
  }
}

// ========== GLOBAL UTILITIES ==========

const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

// ========== APP INITIALIZATION ==========

let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new AgroConnectPro();
  window.app = app;

  setTimeout(() => app.renderSubsidyList(), 500);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(err => 
      console.log('Service Worker registration failed:', err)
    );
  }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AgroConnectPro;
}