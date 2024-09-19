<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: C:\xampp\htdocs\web-skeleton\app\templates\footer.latte */
final class Template_bb15315db1 extends Latte\Runtime\Template
{
	public const Source = 'C:\\xampp\\htdocs\\web-skeleton\\app\\templates\\footer.latte';


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		echo '<footer class="bg-gray-900 text-gray-300 py-4">
    <div class="max-w-5xl mx-auto text-center">
        <p>&copy; 2024 Skeleton Web. All rights reserved.</p>
    </div>
</footer>
';
	}
}
