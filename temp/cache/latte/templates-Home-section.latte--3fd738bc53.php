<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: C:\xampp\htdocs\web-skeleton\app\templates\Home\section.latte */
final class Template_3fd738bc53 extends Latte\Runtime\Template
{
	public const Source = 'C:\\xampp\\htdocs\\web-skeleton\\app\\templates\\Home\\section.latte';

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
		echo '    <section class="max-w-5xl mx-auto text-center py-16 bg-gray-500 text-gray-100 rounded-md shadow-lg">
        <div class="px-4 py-10">
            <p class="text-lg font-medium">This is a sample section.</p>
        </div>
    </section>
';
	}
}
