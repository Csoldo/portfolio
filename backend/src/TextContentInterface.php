<?php

namespace App;

interface TextContentInterface
{
    public function getId(): ?int;
    public function getContentKey(): ?string;
    public function getText(): ?string;
}