<?php

namespace App\Command;

use App\Controller\UserController;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;

#[AsCommand(
    name: 'app:create-user',
    description: 'Create a user',
    hidden: false
)]
class CreateUserCommand extends Command
{
    private $userController;

    public function __construct(UserController $userController)
    {
        parent::__construct();
        $this->userController = $userController;
    }
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $helper = $this->getHelper('question');

        // Ask for email
        $emailQuestion = new Question('Enter the email address: ');
        $email = $helper->ask($input, $output, $emailQuestion);

        // Ask for password
        $passwordQuestion = new Question('Enter the password: ');
        $passwordQuestion->setHidden(true);
        $passwordQuestion->setHiddenFallback(false);
        $password = $helper->ask($input, $output, $passwordQuestion);

        // Call UserController->createUser with email and password
        $this->userController->createUser($email, $password);

        // You can add additional logic or output here if needed

        return Command::SUCCESS;
    }
}