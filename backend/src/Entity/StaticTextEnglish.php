<?php

namespace App\Entity;

use App\Repository\StaticTextEnglishRepository;
use App\TextContentInterface;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: StaticTextEnglishRepository::class)]
class StaticTextEnglish implements TextContentInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $contentKey = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $text = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getContentKey(): ?string
    {
        return $this->contentKey;
    }

    public function setContentKey(string $contentKey): static
    {
        $this->contentKey = $contentKey;

        return $this;
    }

    public function getText(): ?string
    {
        return $this->text;
    }

    public function setText(string $text): static
    {
        $this->text = $text;

        return $this;
    }
}
