<?php

namespace App\Serializer;

use App\TextContentInterface;

class StaticTextSerializer
{
    public function serializeText(TextContentInterface $text): array
    {
        return [
            'id' => $text->getId(),
            'contentKey' => $text->getContentKey(),
            'text' => $text->getText(),
        ];
    }

    public function serializeTexts(array $texts): array
    {
        $serialized = [];
        foreach ($texts as $text) {
            $serialized[] = $this->serializeText($text);
        }
        return $serialized;
    }
}