<?php

declare(strict_types=1);

use Latte\Runtime as LR;

/** source: C:\xampp\htdocs\web-skeleton\app/templates/@layout.latte */
final class Template_1e02a41dd9 extends Latte\Runtime\Template
{
	public const Source = 'C:\\xampp\\htdocs\\web-skeleton\\app/templates/@layout.latte';

	public const Blocks = [
		['title' => 'blockTitle', 'styles' => 'blockStyles', 'content' => 'blockContent', 'scripts' => 'blockScripts'],
	];


	public function main(array $ʟ_args): void
	{
		extract($ʟ_args);
		unset($ʟ_args);

		if ($this->global->snippetDriver?->renderSnippets($this->blocks[self::LayerSnippet], $this->params)) {
			return;
		}

		echo '<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="text">
    <meta name="keywords" content="text">
    
';
		$this->renderBlock('title', get_defined_vars()) /* line 9 */;
		echo "\n";
		$this->renderBlock('styles', get_defined_vars()) /* line 13 */;
		echo '</head>
<body class="font-sans bg-white text-black">
';
		$this->createTemplate('header.latte', $this->params, 'include')->renderToContentType('html') /* line 18 */;
		echo '
    <main>
';
		$this->renderBlock('content', get_defined_vars()) /* line 21 */;
		echo '    </main>

';
		$this->createTemplate('footer.latte', $this->params, 'include')->renderToContentType('html') /* line 25 */;
		echo "\n";
		$this->renderBlock('scripts', get_defined_vars()) /* line 27 */;
		echo '</body>
</html>
';
	}


	/** {block title} on line 9 */
	public function blockTitle(array $ʟ_args): void
	{
		echo '        <title>Skeleton web</title>
';
	}


	/** {block styles} on line 13 */
	public function blockStyles(array $ʟ_args): void
	{
		extract($this->params);
		extract($ʟ_args);
		unset($ʟ_args);

		echo '        <link href="';
		echo LR\Filters::escapeHtmlAttr(LR\Filters::safeUrl($basePath)) /* line 14 */;
		echo '/css/tailwind.css" rel="stylesheet">
';
	}


	/** {block content} on line 21 */
	public function blockContent(array $ʟ_args): void
	{
	}


	/** {block scripts} on line 27 */
	public function blockScripts(array $ʟ_args): void
	{
	}
}
