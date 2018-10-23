# Typeorm incompatability with tc39 decorators proposal
        
Steps to run this project:

1. yarn install
2. Run `yarn start` command

tc39 class decorators are supplied not the class itself,
but the descriptor whick will be used to create the class.

The export of the module contains the constructed class,
so when comparing the export to the annotation capture, they are not `===`.
This makes EntityMetadataBuilder not find any matching annotated classes.

https://github.com/tc39/proposal-decorators
