<?php

namespace App;
use LogicException;
use Symfony\Bundle\SecurityBundle\Security;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;

class UserSecurity
{
    private Security $security;

    public function __construct(Security $security)
    {
        $this->security = $security;
    }
    public function getUser() : User
    {
        $userAsEntity = $this->security->getUser();

        if (!$userAsEntity instanceof User) {
            throw new LogicException('User is not an instance of User class');
        }

        return $userAsEntity;
    }

    public function logout() : ?Response
    {
        return $this->security->logout();
    } 
}