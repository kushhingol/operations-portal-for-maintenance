#!/bin/env bash
FILENAME=".env"
if test -f "$FILENAME"; then
   rm $FILENAME
fi

touch $FILENAME
echo REACT_APP_API_URL=https://rugged-badlands-76158.herokuapp.com >> $FILENAME