<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: C:\xampp\htdocs\web-skeleton\app\templates\header.latte */
final class Template_6fc82f4cf2 extends Latte\Runtime\Template
{
	public const Source = 'C:\\xampp\\htdocs\\web-skeleton\\app\\templates\\header.latte';


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		echo '<header class="bg-white shadow-md">
    <div class="max-w-5xl mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
            <div class="text-lg font-bold">
                <a href="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 5 */;
		echo '" class="text-black">Skeleton Web</a>
            </div>
            <nav>
                <ul class="flex space-x-4">
                    <li><a href="#" class="text-black hover:text-gray-700">Home</a></li>
                    <li><a href="#" class="text-black hover:text-gray-700">About</a></li>
                    <li><a href="#" class="text-black hover:text-gray-700">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
</header>
';
	}
}
