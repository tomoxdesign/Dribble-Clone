<?php

declare(strict_types=1);

namespace App\UI\Home;

use Nette\Application\UI\Presenter;

final class HomePresenter extends Presenter
{
    public function renderDefault(): void
    {
        $this->template->stats = [
            'customers' => 1543, // Spokojených zákazníků
            'projects' => 2523,  // Vytvořených projektů
            'views' => 61453      // Zobrazení
        ];
    }
    
    public function renderInstallation(): void
    {
        // Metoda pro zobrazení stránky s instrukcemi k instalaci
    }

    public function actionDefault()
    {
        $testimonials = [
            [
                'text' => 'Tomox-design mi vytvořil prezentační stránku s jasným a jednoduchým designem, přizpůsobenou mým požadavkům. Zahrnul unikátní logo a kompletní vizuální identitu mé firmy. Díky jeho radám ohledně sociálních sítí a propagace je stránka snadno použitelná a přehledná. Ocenil jsem jeho odbornost, kreativitu a spolehlivost.',
                'author' => 'Tomáš Hromník'
            ],
            [
                'text' => 'Skvělá spolupráce a rychlé výsledky! Tomáš je skutečný profesionál v oboru webdesignu a jeho práce překonala naše očekávání.',
                'author' => 'Anna Nováková'
            ],
            [
                'text' => 'Díky Tomášovi máme moderní a funkční web, který nám pomohl zvýšit návštěvnost a zlepšit naši online přítomnost.',
                'author' => 'Petr Svoboda'
            ],
        ];
    
        $this->template->testimonials = $testimonials;
        // dump($testimonials);
    }

    
    
}


