<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: C:\xampp\htdocs\web-skeleton\app/templates/Home/default.latte */
final class Template_83b71a10c1 extends Latte\Runtime\Template
{
	public const Source = 'C:\\xampp\\htdocs\\web-skeleton\\app/templates/Home/default.latte';

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
		extract($this->params);
		extract($ʟ_args);
		unset($ʟ_args);

		$this->createTemplate('hero.latte', $this->params, 'include')->renderToContentType('html') /* line 3 */;
		echo "\n";
		$this->createTemplate('section.latte', $this->params, 'include')->renderToContentType('html') /* line 6 */;
	}
}
