import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <div class="min-h-screen bg-gray-900">
      <!-- Navigation -->
      <nav class="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm">
        <div class="container mx-auto px-4 py-3">
          <!-- Desktop & Mobile Nav Container -->
          <div class="flex justify-between items-center">
            <div class="text-white">
              <!-- Logo Apple -->
              <svg class="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/>
              </svg>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex space-x-8">
              <a *ngFor="let item of menuItems; let i = index" 
                 [href]="item.link" 
                 class="text-gray-300 hover:text-white transition transform hover:scale-105"
                 [class.nav-item-delay-1]="i === 0"
                 [class.nav-item-delay-2]="i === 1"
                 [class.nav-item-delay-3]="i === 2"
                 [class.nav-item-delay-4]="i === 3">
                {{item.name}}
              </a>
            </div>

            <!-- Mobile Menu Button -->
            <button class="md:hidden text-white focus:outline-none"
                    (click)="toggleMobileMenu()">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!isMobileMenuOpen" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M4 6h16M4 12h16M4 18h16"/>
                <path *ngIf="isMobileMenuOpen" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <!-- Mobile Menu -->
          <div *ngIf="isMobileMenuOpen" 
               class="md:hidden mt-4 pb-4 space-y-4 animate-fadeIn">
            <a *ngFor="let item of menuItems"
               [href]="item.link"
               class="block text-gray-300 hover:text-white transition py-2 transform hover:translate-x-2">
              {{item.name}}
            </a>
          </div>
        </div>
      </nav>

      <!-- Hero Content -->
      <div class="container mx-auto px-4 pt-32">
        <div class="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div class="space-y-8">
            <h1 class="text-6xl font-bold text-white tracking-tight">
              BF B012
              <span class="block text-2xl font-normal text-gray-400 mt-2">BOROFONE B012</span>
            </h1>
            <p class="text-gray-400 text-xl">
              Experience next-generation audio excellence with our signature wireless headphones. 
              Designed for pure audio bliss.
            </p>
            <div class="space-y-4">
              <p class="text-3xl font-bold text-white">$35</p>
              <button class="bg-white text-gray-900 px-8 py-3 rounded-full font-medium 
                           hover:bg-gray-100 transform hover:scale-105 transition">
                BUY NOW
              </button>
            </div>
          </div>

          <!-- Carousel Hero -->
          <div class="relative h-[600px] overflow-hidden rounded-2xl">
            <!-- Overlay amarillo difuminado -->
            <div class="absolute inset-0 bg-gradient-to-tr to-transparent z-10"></div>
            
            <!-- Imágenes del carrusel -->
            <div class="relative h-full transition-transform duration-500 ease-out"
                 [style.transform]="'translateX(' + -currentSlide * 100 + '%)'">
              <div *ngFor="let image of carouselImages; let i = index" 
                   class="absolute w-full h-full transition-all duration-700"
                   [style.left]="i * 100 + '%'">
                <img [src]="image" 
                     [alt]="'Product slide ' + (i + 1)"
                     class="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </div>            

            <!-- Flechas de navegación -->
            <button (click)="prevSlide()" 
                    class="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white
                           bg-black/20 hover:bg-black/40 p-2 rounded-full transition transform hover:scale-110">
              ←
            </button>
            <button (click)="nextSlide()" 
                    class="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/80 hover:text-white
                           bg-black/20 hover:bg-black/40 p-2 rounded-full transition transform hover:scale-110">
              →
            </button>
          </div>
        </div>
      </div>

      <!-- Features Section -->
      <div class="container mx-auto px-4 py-24">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 
                      transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 
                      animate-fadeInLeft cursor-pointer feature-card">
            <div class="feature-icon mb-4">
              <svg class="w-8 h-8 text-yellow-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4 feature-title">Premium Sound</h3>
            <p class="text-gray-400 feature-description">High-definition audio with advanced noise cancellation technology.</p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 
                      transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 
                      animate-fadeInUp delay-200 cursor-pointer feature-card">
            <div class="feature-icon mb-4">
              <svg class="w-8 h-8 text-blue-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4 feature-title">Comfort Design</h3>
            <p class="text-gray-400 feature-description">Ergonomic fit with premium materials for extended wear comfort.</p>
          </div>

          <div class="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 
                      transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 
                      animate-fadeInRight delay-400 cursor-pointer feature-card">
            <div class="feature-icon mb-4">
              <svg class="w-8 h-8 text-green-500 animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-white mb-4 feature-title">Long Battery Life</h3>
            <p class="text-gray-400 feature-description">Up to 30 hours of playtime with quick charging capability.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Animaciones base */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    :host {
      display: block;
      animation: fadeIn 0.8s ease-out;
    }

    /* Animaciones para las features */
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fadeInLeft {
      animation: fadeInLeft 0.8s ease-out forwards;
    }

    .animate-fadeInRight {
      animation: fadeInRight 0.8s ease-out forwards;
    }

    .animate-fadeInUp {
      animation: fadeInUp 0.8s ease-out forwards;
    }

    /* Animaciones del menú de navegación */
    .nav-item-delay-1 { animation-delay: 100ms; }
    .nav-item-delay-2 { animation-delay: 200ms; }
    .nav-item-delay-3 { animation-delay: 300ms; }
    .nav-item-delay-4 { animation-delay: 400ms; }

    /* Delays generales */
    .delay-200 {
      animation-delay: 200ms;
    }

    .delay-400 {
      animation-delay: 400ms;
    }

    /* Estilos de las feature cards */
    .feature-card {
      position: relative;
      overflow: hidden;
    }

    .feature-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      transition: 0.5s;
    }

    .feature-card:hover::before {
      left: 100%;
    }

    .feature-icon {
      transform-origin: center;
      transition: transform 0.3s ease;
    }

    .feature-card:hover .feature-icon {
      transform: scale(1.2) rotate(5deg);
    }

    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'NovaLanding';
  isMobileMenuOpen = false;
  currentSlide = 0;
  private autoSlideInterval: any;

  menuItems = [
    { name: 'HOME', link: '#' },
    { name: 'SHOP', link: '#' },
    { name: 'CART', link: '#' },
    { name: 'SUPPORT', link: '#' }
  ];

  carouselImages = [
    'assets/hero1.png',
    'assets/hero2.png',
    'assets/hero3.png',
    'assets/hero4.png',
    'assets/hero5.png',
    'assets/hero6.png',
    'assets/hero7.png',
    'assets/hero8.png'
  ];
  

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoSlide();
  }
}
