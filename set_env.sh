#!/bin/env bash
FILENAME=".env"
rm $FILENAME
touch $FILENAME
echo REACT_APP_API_URL=https://rugged-badlands-76158.herokuapp.com >> $FILENAME