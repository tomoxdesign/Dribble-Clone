<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: C:\xampp\htdocs\web-skeleton\app\templates\Home\hero.latte */
final class Template_c0fbdf8210 extends Latte\Runtime\Template
{
	public const Source = 'C:\\xampp\\htdocs\\web-skeleton\\app\\templates\\Home\\hero.latte';

	public const Blocks = [
		['content' => 'blockContent'],
	];


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		$this->renderBlock('content', get_defined_vars()) /* line 1 */;
	}


	/** {block content} on line 1 */
	public function blockContent(array $ʟ_args): void
	{
		echo '    <section class="max-w-5xl mx-auto text-center py-16 bg-white">
        <h1 class="text-4xl font-bold mb-8">Welcome to Skeleton Web</h1>
        <p class="text-lg">This is a sample home page.</p>
    </section>
';
	}
}
